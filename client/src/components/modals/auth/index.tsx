import { FC, useEffect, useState } from "react";
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
import ForgotPassword from "./forgotPassword";
import { Form, Modal, Row, Col, Alert } from 'antd';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { showNotification } from "@/helpers";

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

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { openModalAuth, setOpenModalAuth, typeModal, setTypeModal } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onRegister = (data: DataSubmitRegister) => {
    const payload = {
      username: data.username,
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    // const payload = { "username": "da1", "fullname": "DA", "email": "da1@gmail.com", "password": "Chelsea1909@" }
    signUp(payload)
      .then((res) => {
        if (res.status) {
          toast("Register sucessfully!");
          setOpenModalAuth(false);
        } else {
          setMessageError(res.message);
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
      .catch((error) => {
        showNotification(
          'Thông báo',
          error,
          2
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinish = (data: DataSubmitLogin | DataSubmitRegister) => {
    setLoading(true);
    typeModal === LOGIN
      ? onLogin(data)
      : onRegister(data as DataSubmitRegister);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (openModalAuth) form.resetFields();
  }, [openModalAuth, typeModal]);

  return (
    <Modal
      open={openModalAuth}
      onCancel={() => setOpenModalAuth(false)}
      footer={null}
      width={800}
    >
      <Row>
        <Col span={13}>col-12</Col>
        <Col span={11}>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            form={form}
          >
            {typeModal === LOGIN
              ? <h5>Login</h5>
              : typeModal === REGISTER
                ? <h5>Register</h5>
                : <h5><ArrowLeftOutlined onClick={() => setTypeModal(LOGIN)} /> Forgot password</h5>}
            {messageError && typeModal === REGISTER && <Alert message={messageError} type="error" />}
            {typeModal === LOGIN && 
              <LoginForm
                setTypeModal={setTypeModal}
              />
            }
            {typeModal === REGISTER && 
              <RegisterForm
                setTypeModal={setTypeModal}
              />
            }
            {typeModal === FORGOT_PASSWORD &&
              <ForgotPassword setTypeModal={setTypeModal} />
            }
            <ButtonLoading loading={loading} className="mt-2" />
          </Form>
        </Col>
      </Row>
    </Modal >
  );
};

export default ModalAuth;
