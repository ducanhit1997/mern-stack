import { FC } from "react";
import { FORGOT_PASSWORD, REGISTER, RequireField } from "@/const";
import { useSelector } from "react-redux";
import { Form, Input } from 'antd';
import styles from './auth.module.css'

type LoginFormProps = {
  setTypeModal: (type: string) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { setTypeModal } = props;
  const { data } = useSelector((state: any) => state.user);
  //console.log(data)

  return (
    <>
      <Form.Item
        label="Username"
        name="username"
        className={styles.formItem}
        rules={[{ required: true, message: RequireField }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        className={`mt-2 ${styles.formItem}`}
        rules={[{ required: true, message: RequireField }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item 
        className={`mt-2 ${styles.formItem}`}
      >
        <span>Do not have an account?</span>
        <a
          href="#"
          onClick={() => setTypeModal(REGISTER)}
          className="ms-1 text-decoration-none"
        >
          Register
        </a>
        <br />
        <a
          href="#"
          className="text-decoration-none"
          onClick={() => setTypeModal(FORGOT_PASSWORD)}
        >
          Forgot password?
        </a>
      </Form.Item>
    </>
  )
}

export default LoginForm;
