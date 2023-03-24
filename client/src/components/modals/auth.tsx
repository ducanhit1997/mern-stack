import { FC } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { LOGIN } from "@/const"

type ModalAuthProps = {
  show: boolean,
  handleClose: () => void,
  typeModal: string | undefined
}

const ModalAuth: FC<ModalAuthProps> = (props) => {
  const { show, handleClose, typeModal } = props

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{typeModal === LOGIN ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
export default ModalAuth