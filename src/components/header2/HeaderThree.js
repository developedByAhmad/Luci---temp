import React from "react";
import "./../../App.css";
import { Nav, Navbar} from "react-bootstrap";
// import { ReactComponent as Logo } from "./../../logo.svg";
import styles from './header2.module.css';
import Logo from './../../../src/assets/Logo1.png';
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderThree() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" className={styles.headnavbar}>
      <Navbar.Brand href="/">
        <img src={Logo}/>
      </Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.headnavbarButton}/> */}

      {/*<Navbar.Collapse id="responsive-navbar-nav" >*/}
      {/*  <Nav className="navbar-nav ml-auto">*/}
      {/*    <Nav.Link href="/about"><h4 className={styles.headlinkText}>About</h4></Nav.Link>*/}
      {/*    <Nav.Link href="/pricing"><h4 className={styles.headlinkText}>Pricing</h4></Nav.Link>*/}
      {/*    <Nav.Link href="/team"><h4 className={styles.headlinkText}> Team</h4></Nav.Link>*/}
      {/*    <Nav.Link href="/team"><h4 className={styles.headlinkText}> Contact</h4></Nav.Link>*/}
      {/*  </Nav>*/}
      {/*</Navbar.Collapse>*/}

    </Navbar>
  );
}
