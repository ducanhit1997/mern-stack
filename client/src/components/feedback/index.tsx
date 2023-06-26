import { FC } from "react";

type FeedbackProps = {
  name: String;
  errorData: any;
}

const Feedback: FC<FeedbackProps> = (props) => {
  const { name, errorData } = props;

  if (!errorData) return <></>;

  return (
    <>
      {errorData.type === 'required' &&
        <span>
          {name} is required!
        </span>
      }
      {(errorData.type === 'validate' || errorData.type === 'pattern' || errorData.type === 'minLength' || errorData.type === 'maxLength') &&
        <span>
          {errorData.message}!
        </span>
      }
    </>
  );
}

export default Feedback;