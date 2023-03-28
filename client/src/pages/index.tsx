import ModalAuth from "@/components/modals/auth"
import PageLayout from "@/components/pageLayout"
import { languages, LOGIN, REGISTER } from "@/const"
import { useState } from "react"
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap'
import { useTranslation } from "next-i18next"

type LanguageType = {
  id: string,
  name: string
}

export default function Home() {
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false)
  const [typeModal, setTypeModal] = useState<string>()
  const [currentLanguage, setCurrentLanguage] = useState<string>('English')
  const { i18n } = useTranslation()

  const toggleModalAuth = (type: string) => {
    setTypeModal(type)
    setOpenModalAuth(!openModalAuth)
  }

  const onChangeLanguage = (data: LanguageType) => {
    setCurrentLanguage(data.name)
    i18n.changeLanguage(data.id)
  }

  return (
    <PageLayout noContainer>
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
              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {currentLanguage}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {languages.map((x) => (
                    <Dropdown.Item key={x.id} onClick={() => onChangeLanguage(x)}>{x.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown> */}
              <Button variant="outline-success" className="ms-2" onClick={() => toggleModalAuth(REGISTER)}>Register</Button>
              <Button variant="outline-success" className="ms-2" onClick={() => toggleModalAuth(LOGIN)}>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalAuth show={openModalAuth} handleClose={() => setOpenModalAuth(false)} typeModal={typeModal} setTypeModal={setTypeModal} />
    </PageLayout>
  )
}
