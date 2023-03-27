import { FC } from "react";
import Form from "react-bootstrap/Form";
import isUndefined from "lodash/isUndefined";
import styles from "./auth.module.scss";
import { LOGIN, patternEmail, patternPassword } from "@/const";
import Feedback from "@/components/feedback";

type RegisterFormProps = {
  errors: any
  register: any
  watch: any
  setTypeModal: (type: string) => void;
}

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { errors, register, watch, setTypeModal } = props;

  return (
    <>
      <Form.Group className="mb-1">
        <Form.Label>Username</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.username)}
          type="text"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        <Feedback name="Username" errorData={errors.username} />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.fullname)}
          type="text"
          placeholder="Enter full name"
          {...register("fullname", { required: true })}
        />
        <Feedback name="Full name" errorData={errors.fullname} />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.email)}
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: true, pattern: {
              value: patternEmail,
              message: "Email is invalid!"
            }
          })}
        />
        <Feedback name="Email" errorData={errors.email} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={!isUndefined(errors.password)}
          placeholder="Enter password"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            },
            required: true, pattern: {
              value: patternPassword,
              message: "Password must contain uppercase, lowercase, special character and number"
            }
          })}
        />
        <Feedback name="Password" errorData={errors.password} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={!isUndefined(errors.confirmPassword)}
          placeholder="Enter password"
          {...register("confirmPassword", {
            required: true,
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your password do not match";
              }
            },
          })}
        />
        <Feedback name="Confirm password" errorData={errors.confirmPassword} />
      </Form.Group>
      <Form.Group className="mb-2">
        <small>Already have an account?</small>
        <small
          className={`text-primary ms-1 ${styles.textRegister}`}
          onClick={() => setTypeModal(LOGIN)}
        >
          Login
        </small>
      </Form.Group>
    </>
  );
}

export default RegisterForm;
