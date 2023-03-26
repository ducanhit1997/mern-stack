import ModalAuth from "@/components/modals/auth"
import PageLayout from "@/components/pageLayout"
import { LOGIN, REGISTER } from "@/const"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Home() {
  const [openModalAuth, setOpenModalAuth] = useState<boolean>(false)
  const [typeModal, setTypeModal] = useState<string>()

  const toggleModalAuth = (type: string) => {
    setTypeModal(type)
    setOpenModalAuth(!openModalAuth)
  }

  return (
    <PageLayout noContainer>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            TGDĐ
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <Button variant="outline-success" onClick={() => toggleModalAuth(REGISTER)}>Register</Button>
            <Button variant="outline-success" className="ms-2" onClick={() => toggleModalAuth(LOGIN)}>Login</Button>
          </div>
        </div>
      </nav>

      <ModalAuth show={openModalAuth} handleClose={() => setOpenModalAuth(false)} typeModal={typeModal} setTypeModal={setTypeModal} />
    </PageLayout>
  );
}
