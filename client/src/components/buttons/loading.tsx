import { FC } from "react"
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

type ButtonLoadingProps = {
  loading?: boolean;
  label?: string;
  className?: string;
  variant?: string;
}

const StyledButton = styled(Button)`
  &&& {
    margin-top: 10px;
  }
`;

const ButtonLoading: FC<ButtonLoadingProps> = (props) => {
  const { loading, label } = props

  return (
    <StyledButton primary type="submit" loading={loading}>
      <span className="ms-1">{label}</span>
    </StyledButton>
  );
}

export default ButtonLoading;

ButtonLoading.defaultProps = {
  label: 'Submit',
  variant: 'primary'
}


