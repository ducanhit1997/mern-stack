import { FC, useEffect, useState } from "react";
import { Form, Grid, Icon, Image, Modal } from "semantic-ui-react";
import { FORGOT_PASSWORD, LOGIN, REGISTER } from "@/const";
import { useForm } from "react-hook-form";
import ButtonLoading from "@/components/buttons/loading";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { useTranslation } from "next-i18next";
import { signIn, signUp } from "@/services/auth";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import ForgotPassword from "./forgotPassword";

type ModalAuthProps = {
  openModalAuth: boolean;
  typeModal: string | undefined;
  setTypeModal: (type: string) => void;
  setOpenModalAuth: (type: boolean) => void;
};

type DataSubmitRegister = {
  username: string;
  fullname: string;
  password: string;
  email: string;
};

type DataSubmitLogin = {
  username: string;
  password: string;
};

const StyledImage = styled(Image)`
  height: 100%;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { openModalAuth, setOpenModalAuth, typeModal, setTypeModal } = props;
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
      password: data.password,
    };
    signUp(payload)
      .then((res) => {
        if (res.status) {
          toast("Register sucessfully!");
          setOpenModalAuth(false);
        } else {
          toast(res.message);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const onLogin = (data: DataSubmitLogin) => {
    const payload = {
      username: data.username,
      password: data.password,
    };
    signIn(payload)
      .then((res) => {
        if (res.status) {
          Cookies.set("TOKEN_KEY", res.token);
          localStorage.setItem("sessionUuid", uuid());
          window.location.reload();
        } else {
          toast(res.message);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (data: DataSubmitLogin | DataSubmitRegister) => {
    setLoading(true);
    typeModal === LOGIN
      ? onLogin(data)
      : onRegister(data as DataSubmitRegister);
  };

  useEffect(() => {
    if (openModalAuth) reset();
  }, [reset, openModalAuth, typeModal]);

  return (
    <Modal
      onClose={() => setOpenModalAuth(false)}
      onOpen={() => setOpenModalAuth(true)}
      open={openModalAuth}
      size="small"
    >
      <Modal.Header>
        {typeModal === FORGOT_PASSWORD && <StyledIcon name="arrow left" size="small" onClick={() => setTypeModal(LOGIN)} />}{" "}
        {typeModal === LOGIN
          ? "Login"
          : typeModal === REGISTER
          ? "Register"
          : "Forgot password"}
      </Modal.Header>
      <Modal.Content image>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <StyledImage src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Modal.Description>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {typeModal === LOGIN && (
                    <LoginForm
                      errors={errors}
                      register={register}
                      setTypeModal={setTypeModal}
                    />
                  )}
                  {typeModal === REGISTER && (
                    <RegisterForm
                      errors={errors}
                      register={register}
                      setTypeModal={setTypeModal}
                      watch={watch}
                    />
                  )}
                  {typeModal === FORGOT_PASSWORD && (
                    <ForgotPassword
                      errors={errors}
                      register={register}
                      setTypeModal={setTypeModal}
                    />
                  )}
                  <ButtonLoading loading={loading} />
                </Form>
              </Modal.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default ModalAuth;
