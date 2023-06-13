import { FC } from "react";
import { FORGOT_PASSWORD, REGISTER } from "@/const";
import Feedback from "@/components/feedback";
import { useSelector } from "react-redux";
import { Form } from 'semantic-ui-react'
import styled from "styled-components";

type LoginFormProps = {
  errors: any;
  register: any;
  setTypeModal: (type: string) => void;
}

const StyledSpan = styled.span`
  margin-left: 2px;
  cursor: pointer;
  color: #2185d0;
`;

const LoginForm: FC<LoginFormProps> = (props) => {
  const { errors, register, setTypeModal } = props;
  const { data } = useSelector((state: any) => state.user);
  //console.log(data)

  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' {...register("username", { required: true })} />
        <Feedback name="Username" errorData={errors.username} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type="password" {...register("password", { required: true })} />
        <Feedback name="Password" errorData={errors.password} />
      </Form.Field>
      <Form.Field>
        <span>Do not have an account?</span>
        <StyledSpan
          onClick={() => setTypeModal(REGISTER)}
        >
          Register
        </StyledSpan>
        <br />
        <StyledSpan
          onClick={() => setTypeModal(FORGOT_PASSWORD)}
        >
          Forgot password?
        </StyledSpan>
      </Form.Field>
    </Form>
  )
}

export default LoginForm;
