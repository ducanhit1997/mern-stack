import { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LOGIN } from "@/const";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import ButtonLoading from "@/components/buttons/loading";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { useTranslation } from "next-i18next";
import { signIn, signUp } from "@/services/auth";
import { toast } from "react-toastify";

type ModalAuthProps = {
  show: boolean;
  handleClose: () => void;
  typeModal: string | undefined;
  setTypeModal: (type: string) => void;
}

type DataSubmitRegister = {
  username: string;
  fullname: string;
  password: string;
  email: string;
}

type DataSubmitLogin = {
  username: string;
  password: string;
}

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { show, handleClose, typeModal, setTypeModal } = props;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<DataSubmitLogin | DataSubmitRegister>();
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const onRegister = (data: DataSubmitRegister) => {
    const payload = {
      username: data.username,
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    signUp(payload).then(res => {
      if (res.status) {
        toast('Register sucessfully!');
        handleClose();
      } else {
        toast(res.message);
      }
    })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      })
  }

  const onLogin = (data: DataSubmitLogin) => {
    const payload = {
      username: data.username,
      password: data.password
    }
    signIn(payload).then(res => {
      if (res.status) {
        toast('Login sucessfully!');
        handleClose();
      } else {
        toast(res.message);
      }
    })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      })
  }

  const onSubmit = (data: DataSubmitLogin | DataSubmitRegister) => {
    setLoading(true);
    typeModal === LOGIN ? onLogin(data) : onRegister(data as DataSubmitRegister);
  }

  useEffect(() => {
    if (show) reset();
  }, [reset, show, typeModal])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          {typeModal === LOGIN ? t('login') : "Register"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {typeModal === LOGIN ?
            <LoginForm
              errors={errors}
              register={register}
              setTypeModal={setTypeModal}
            />
            :
            <RegisterForm
              errors={errors}
              register={register}
              setTypeModal={setTypeModal}
              watch={watch}
            />
          }
          <ButtonLoading loading={loading} className="w-100" />
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAuth;
