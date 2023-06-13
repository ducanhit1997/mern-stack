import { FC } from "react";
import isUndefined from "lodash/isUndefined";
import { LOGIN, patternEmail, patternPassword } from "@/const";
import Feedback from "@/components/feedback";
import { Button, Checkbox, Form } from "semantic-ui-react";
import styled from "styled-components";

type RegisterFormProps = {
  errors: any;
  register: any;
  watch: any;
  setTypeModal: (type: string) => void;
};

const StyledSpan = styled.span`
  &:nth-child(2) {
    margin-left: 2px;
    cursor: pointer;
    color: #2185d0;
  }
`;

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { errors, register, watch, setTypeModal } = props;

  return (
    <>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            {...register("username", { required: true })}
          />
          <Feedback name="Username" errorData={errors.username} />
        </Form.Field>
        <Form.Field>
          <label>Full name</label>
          <input
            placeholder="Full name"
            {...register("fullname", { required: true })}
          />
          <Feedback name="Fullname" errorData={errors.fullname} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            {...register("email", {
              required: true, pattern: {
                value: patternEmail,
                message: "Email is invalid!"
              }
            })}
          />
          <Feedback name="Email" errorData={errors.email} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
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
        </Form.Field>
        <Form.Field>
          <label>Confirm password</label>
          <input
            placeholder="Confirm password"
            type="password"
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
        </Form.Field>
        <Form.Field>
          <span>Already have an account?</span>
          <StyledSpan onClick={() => setTypeModal(LOGIN)}>Login</StyledSpan>
        </Form.Field>
      </Form>
    </>
  );
};

export default RegisterForm;
