import { FC } from "react";
import styled from "styled-components";

type FeedbackProps = {
  name: String;
  errorData: any;
}

const StyledFeedback = styled.span`
  color: #db2828;
`;

const Feedback: FC<FeedbackProps> = (props) => {
  const { name, errorData } = props;

  if (!errorData) return <></>;

  return (
    <>
      {errorData.type === 'required' &&
        <StyledFeedback>
          {name} is required!
        </StyledFeedback>
      }
      {(errorData.type === 'validate' || errorData.type === 'pattern' || errorData.type === 'minLength' || errorData.type === 'maxLength') &&
        <StyledFeedback>
          {errorData.message}!
        </StyledFeedback>
      }
    </>
  );
}

export default Feedback;