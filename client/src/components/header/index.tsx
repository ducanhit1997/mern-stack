import { LOGIN, REGISTER } from "@/const";
import Cookies from "js-cookie";
import { FC, useState } from "react";
import { Container, Dropdown, Input } from 'semantic-ui-react'
import ModalAuth from "../modals/auth";
import { v4 as uuid } from 'uuid';
import { Button } from "antd";
import type { MenuProps } from 'antd';
import { Menu, Badge } from 'antd'
import styles from "./header.module.css"
import { BellOutlined } from "@ant-design/icons";

type HeaderProps = {
  loginInfo: any
}

const Header: FC<HeaderProps> = (props) => {
  const { loginInfo } = props;
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false)
  const [typeModal, setTypeModal] = useState<string>()
  const [openNotify, setOpenNotify] = useState(false);
  const [current, setCurrent] = useState('mail');

  const handleOpenNotify = () => {
    setOpenNotify(!openNotify);
  };

  const toggleModalAuth = (type: string) => {
    setTypeModal(type)
    setOpenModalAuth(!openModalAuth)
  }

  const onLogout = () => {
    Cookies.remove("TOKEN_KEY");
    localStorage.setItem('sessionUuid', uuid());
    window.location.reload();
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <Menu mode="horizontal" className="container">
          <Menu.Item key="home">
            Home
          </Menu.Item>
          <Menu.Item className="ms-auto">
            <Dropdown>
              <Badge count={5} onClick={(e) => e.preventDefault()}>
              <BellOutlined />
            </Badge>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="login">
            <Button onClick={() => toggleModalAuth(LOGIN)}>Login</Button>
            <Button className="ms-1" onClick={() => toggleModalAuth(REGISTER)}>Register</Button>
          </Menu.Item>
          <Menu.Item key="register">
          </Menu.Item>
        </Menu>
      </div>
      <ModalAuth openModalAuth={openModalAuth} setOpenModalAuth={setOpenModalAuth} typeModal={typeModal} setTypeModal={setTypeModal} />
    </>
  )
}
export default Header;