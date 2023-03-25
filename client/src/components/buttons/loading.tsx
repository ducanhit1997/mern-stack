import { FC } from "react"
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

type ButtonLoadingProps = {
  loading?: boolean
  label?: string
  className?: string
  variant?: string
};

const ButtonLoading: FC<ButtonLoadingProps> = (props) => {
  const { loading, className, label, variant } = props

  return (
    <Button variant={variant} type="submit" disabled={loading} className={className}>
      {loading && <Spinner animation="border" size="sm" />}
      <span className="ms-1">{label}</span>
    </Button>
  );
};

export default ButtonLoading

ButtonLoading.defaultProps = {
  label: 'Submit',
  variant: 'primary'
}


