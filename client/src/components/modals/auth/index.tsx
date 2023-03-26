import { FC, useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import { LOGIN, REGISTER } from "@/const"
import Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form"
import ButtonLoading from "@/components/buttons/loading"
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"

type ModalAuthProps = {
  show: boolean;
  handleClose: () => void;
  typeModal: string | undefined;
  setTypeModal: () => void;
};

type DataSubmitLogin = {
  username: string;
  password: string;
};

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { show, handleClose, typeModal, setTypeModal } = props
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataSubmitLogin>();
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (data: DataSubmitLogin) => {
    setLoading(true);
    // set time out to loading ^^
    setTimeout(() => {
      console.log(data);
      console.log(typeModal);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (show) reset();
  }, [reset, show, typeModal]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">
          {typeModal === LOGIN ? "Login" : "Register"}
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
            />
          }
          <ButtonLoading loading={loading} className="w-100" />
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalAuth;
