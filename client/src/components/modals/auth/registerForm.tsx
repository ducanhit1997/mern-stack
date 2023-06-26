import { FC } from "react";
import { FieldInvalidEmail, LOGIN, PasswordDoNotMatch, RequireField } from "@/const";
import { Form, Input } from 'antd';
import styles from './auth.module.css'

type RegisterFormProps = {
  setTypeModal: (type: string) => void;
};

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { setTypeModal } = props;

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
        label="Fullname"
        name="fullname"
        className={styles.formItem}
        rules={[{ required: true, message: RequireField }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        className={styles.formItem}
        rules={[
          {
            type: 'email',
            message: FieldInvalidEmail,
          },
          {
            required: true,
            message: RequireField,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        className={styles.formItem}
        rules={[
          {
            required: true,
            message: RequireField,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm password"
        name="confirmPassword"
        className={styles.formItem}
        rules={[
          {
            required: true,
            message: RequireField,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(PasswordDoNotMatch));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        className={`mt-2 ${styles.formItem}`}
      >
        <span>Already have an account?</span>
        <a
          href="#"
          onClick={() => setTypeModal(LOGIN)}
          className="ms-1"
        >
          Login
        </a>
      </Form.Item>
    </>
  );
};

export default RegisterForm;
