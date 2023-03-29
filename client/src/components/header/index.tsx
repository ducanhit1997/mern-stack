import { LOGIN, REGISTER } from "@/const";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import ModalAuth from "../modals/auth";
import { v4 as uuid } from 'uuid';

type HeaderProps = {
  loginInfo: any
}

const Header: FC<HeaderProps> = (props) => {

  const { loginInfo } = props;
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false)
  const [typeModal, setTypeModal] = useState<string>()

  const toggleModalAuth = (type: string) => {
    setTypeModal(type)
    setOpenModalAuth(!openModalAuth)
  }

  const onLogout = () => {
    Cookies.remove("TOKEN_KEY");
    localStorage.setItem('sessionUuid', uuid());
    window.location.reload();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarTogglerDemo03" />
        <Navbar.Brand href="#">TGDĐ</Navbar.Brand>
        <Navbar.Collapse id="navbarTogglerDemo03">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#" disabled>Disabled</Nav.Link>
          </Nav>
          <Nav className="ms-auto mb-2 mb-lg-0">

            {loginInfo ?
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {loginInfo.fullname}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>User info</Dropdown.Item>
                  <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> :
              <>
                <Button variant="outline-success" className="ms-2" onClick={() => toggleModalAuth(REGISTER)}>Register</Button>
                <Button variant="outline-success" className="ms-2" onClick={() => toggleModalAuth(LOGIN)}>Login</Button>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ModalAuth show={openModalAuth} handleClose={() => setOpenModalAuth(false)} typeModal={typeModal} setTypeModal={setTypeModal} />
    </Navbar>
  )
}
export default Header;