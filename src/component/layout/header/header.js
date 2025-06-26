import Link from "next/link";
import NavbarTop from "./navbartop";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import MenuUtama from "./menu-utama";

const HeaderSection = () => {
  return (
    <section className="headerpage bg-body-tertiary shadow">
      {/* Top bar */}
      <div className="header-top py-2 bg-dark text-light d-md-block d-none">
        <div className="container">
          <NavbarTop />
        </div>
      </div>

      {/* Main navbar */}
      <header className="header container">
        <Navbar className="bg-body-tertiary" expand="lg">
          <Container className="d-flex-justify-space-between">
            <div className="logo-wrapper">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={232}
                  height={90}
                  priority
                />
              </Link>
            </div>
            <div className="menu-wrapper">
              <NavbarToggle aria-controls="responsive-navbar-nav" />
              <NavbarCollapse
                className="d-none d-md-block"
                id="responsive-navbar-nav"
              >
                <Nav className="me-auto">
                  <MenuUtama />
                </Nav>
              </NavbarCollapse>
            </div>
          </Container>
          <div className="d-block d-md-none">
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <MenuUtama />
              </Nav>
            </NavbarCollapse>
          </div>
        </Navbar>
      </header>
    </section>
  );
};

export default HeaderSection;
