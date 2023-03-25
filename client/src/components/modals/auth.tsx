import { FC, useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal"
import { LOGIN } from "@/const"
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import isUndefined from 'lodash/isUndefined'
import styles from "./auth.module.scss";
import ButtonLoading from "../buttons/loading"

type ModalAuthProps = {
  show: boolean
  handleClose: () => void
  typeModal: string | undefined
};

type DataSubmitLogin = {
  username: string
  password: string
}

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { show, handleClose, typeModal } = props
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DataSubmitLogin>()
  const [loading, setLoading] = useState<boolean>(false)


  const onSubmit = (data: DataSubmitLogin) => {
    setLoading(true)
    // set time out to loading ^^
    setTimeout(() => {
      console.log(data)
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    if (show) reset()
  }, [reset, show])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">{typeModal === LOGIN ? "Login" : "Register"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              isInvalid={!isUndefined(errors.username)}
              type="username"
              placeholder="Enter username"
              {...register("username", { required: true, maxLength: 20 })}
            />
            {errors.username && <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>}
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              isInvalid={!isUndefined(errors.password)}
              placeholder="Enter password"
              {...register("password", { required: true, maxLength: 20 })}
            />
            {errors.password && <Form.Control.Feedback type="invalid">Password is required </Form.Control.Feedback>}
          </Form.Group>
          <Form.Group className="mb-2">
            <small>Do not have an account?</small> 
            <small className={`text-primary ms-1 ${styles.textRegister}`}>Register</small>
          </Form.Group>
          <ButtonLoading
            loading={loading}
            className="w-100"
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalAuth
