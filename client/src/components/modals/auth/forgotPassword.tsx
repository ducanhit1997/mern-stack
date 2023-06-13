import { FC } from "react";
import Feedback from "@/components/feedback";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

type ForgotPasswordProps = {
  errors: any;
  register: any;
  setTypeModal: (type: string) => void;
};

const StyledSpan = styled.span`
  &:nth-child(2) {
    margin-left: 2px;
    cursor: pointer;
    color: #2185d0;
  }
`;

const ForgotPassword: FC<ForgotPasswordProps> = (props) => {
  const { errors, register, setTypeModal } = props;
  const { data } = useSelector((state: any) => state.user);
  //console.log(data)

  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <Feedback name="Email" errorData={errors.email} />
      </Form.Field>
    </Form>
  );
};

export default ForgotPassword;
