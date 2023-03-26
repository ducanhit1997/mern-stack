import { FC } from "react"
import Form from "react-bootstrap/Form"
import isUndefined from "lodash/isUndefined"
import styles from "./auth.module.scss"
import { LOGIN } from "@/const"

type RegisterFormProps = {
  errors: any;
  register: any;
  setTypeModal: (type: string) => void;
};

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { errors, register, setTypeModal } = props;
  return (
    <>
      <Form.Group className="mb-1">
        <Form.Label>Username</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.username)}
          type="text"
          placeholder="Enter username"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username && (
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.fullname)}
          type="text"
          placeholder="Enter full name"
          {...register("fullname", { required: true, maxLength: 20 })}
        />
        {errors.fullname && (
          <Form.Control.Feedback type="invalid">
            Fullname is required
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          isInvalid={!isUndefined(errors.email)}
          type="text"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 20 })}
        />
        {errors.email && (
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          isInvalid={!isUndefined(errors.password)}
          placeholder="Enter password"
          {...register("password", { required: true, maxLength: 20 })}
        />
        {errors.password && (
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="confirmPassword"
          isInvalid={!isUndefined(errors.confirmPassword)}
          placeholder="Enter password"
          {...register("confirmPassword", { required: true, maxLength: 20 })}
        />
        {errors.confirmPassword && (
          <Form.Control.Feedback type="invalid">
            Confirm password is required{" "}
          </Form.Control.Feedback>
        )}
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
};

export default RegisterForm;
