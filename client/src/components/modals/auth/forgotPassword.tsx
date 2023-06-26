import { FC } from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "antd";
import { FieldInvalidEmail, RequireField } from "@/const";

type ForgotPasswordProps = {
  setTypeModal: (type: string) => void;
};

const ForgotPassword: FC<ForgotPasswordProps> = (props) => {
  const { setTypeModal } = props;
  const { data } = useSelector((state: any) => state.user);
  //console.log(data)

  return (
    <Form.Item
      label="Email"
      name="email"
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
  );
};

export default ForgotPassword;
