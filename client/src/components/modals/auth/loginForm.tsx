import { FC } from "react";
import Form from "react-bootstrap/Form";
import isUndefined from "lodash/isUndefined";
import styles from "./auth.module.scss";
import { REGISTER } from "@/const";
import Feedback from "@/components/feedback";
import { useSelector } from "react-redux";

type LoginFormProps = {
  errors: any;
  register: any;
  setTypeModal: (type: string) => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { errors, register, setTypeModal } = props;
  //const { data } = useSelector((state) => state.user);

  return (
    <>
      <Form.Group className="mb-1">
        <Form.Label>Username</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.username)}
          type="username"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        <Feedback name="Username" errorData={errors.username} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={!isUndefined(errors.password)}
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        <Feedback name="Password" errorData={errors.password} />
      </Form.Group>
      <Form.Group className="mb-2">
        <small>Do not have an account?</small>
        <small
          className={`text-primary ms-1 ${styles.textRegister}`}
          onClick={() => setTypeModal(REGISTER)}
        >
          Register
        </small>
      </Form.Group>
    </>
  )
}

export default LoginForm;
