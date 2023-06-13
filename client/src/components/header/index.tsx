import { LOGIN, REGISTER } from "@/const";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import ModalAuth from "../modals/auth";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";

type HeaderProps = {
  loginInfo: any
}

const StyledButtonSignUp = styled(Button)`
  margin-left: 5px !important;
`;

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
    <>
      <Menu size='small'>
        <Container>
          <Menu.Item position='left'
            name='home'
          />
          <Menu.Menu position='right'>
            <Dropdown item text='Language'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Button primary onClick={() => toggleModalAuth(LOGIN)}>Sign In</Button>
              <StyledButtonSignUp color='teal' onClick={() => toggleModalAuth(REGISTER)}>Sign Up</StyledButtonSignUp>
            </Menu.Item>
            <Dropdown item text='Hi: Phan Đức Anh'>
              <Dropdown.Menu>
                <Dropdown.Item>Info user</Dropdown.Item>
                <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container >
      </Menu>
      <ModalAuth openModalAuth={openModalAuth} setOpenModalAuth={setOpenModalAuth} typeModal={typeModal} setTypeModal={setTypeModal} />
    </>
  )
}
export default Header;