import { FC } from "react"
import { Button } from 'antd';

type ButtonLoadingProps = {
  loading?: boolean;
  label?: string;
  className?: string;
  type?: string;
}

const ButtonLoading: FC<ButtonLoadingProps> = (props) => {
  const { loading, label, className } = props

  return (
    <Button type="primary" htmlType="submit" loading={loading} className={className}>
      <span className="ms-1">{label}</span>
    </Button>
  );
}

export default ButtonLoading;

ButtonLoading.defaultProps = {
  label: 'Submit',
  type: 'primary'
}


