import { FC } from "react"
import { Form } from "react-bootstrap"

type FeedbackProps = {
  name: String
  errorData: any
}

const Feedback: FC<FeedbackProps> = (props) => {
  const { name, errorData } = props
  if (!errorData) return <></>
  return (
    <>
      {errorData.type === 'required' &&
        <Form.Control.Feedback type="invalid">
          {name} is required
        </Form.Control.Feedback>
      }
      {errorData.type === 'validate' &&
        <Form.Control.Feedback type="invalid">
          {errorData.message}
        </Form.Control.Feedback>
      }
    </>
  )
}
export default Feedback