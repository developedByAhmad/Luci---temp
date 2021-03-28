import React, { useState } from "react";
import { Link,withRouter } from 'react-router-dom'
import "./../../App.css";
import { Nav, Navbar } from "react-bootstrap";
// import { ReactComponent as Logo } from "./../../logo.svg";
import styles from './header2.module.css';
import Logo from './../../../src/assets/Logo1.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const [loginToken, setLoginToken] = useState(localStorage.getItem("loginToken")
    ? localStorage.getItem("loginToken")
    : null)

  const handleLogOut=(e)=>{
    console.log("clicked")
    localStorage.removeItem("loginToken");
    props.history.push("./login")
  }
  const Button = loginToken!==null ? <div className={styles.fakeBtn}>
    <Link onClick={(e)=>handleLogOut(e)} style={{marginLeft: "31px"}}> Logout</Link>
  </div> : 
  <div className={styles.fakeBtn}>
    <Link to="/signup"> Signup /</Link> <Link to="/login">
            Login
          </Link>
  </div>
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className={styles.headnavbar}>
      <Navbar.Brand href="/">
        <img src={Logo} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.headnavbarButton} />

      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="navbar-nav ml-auto">
          <Link to="/team"><h4 className={styles.headlinkText}> Team</h4></Link>
          <Link to="/activeportfolio"><h4 className={styles.headlinkText}> Active Portfolio</h4></Link>
          <Link to="/pricing"><h4 className={styles.headlinkText}>Pricing</h4></Link>
          <Link to="/about"><h4 className={styles.headlinkText}>About</h4></Link>
          <Link to="/contact_us"><h4 className={styles.headlinkText}> Contact Us</h4></Link>
          {/* <div className={styles.fakeBtn}>
            <Link to="/signup"> Signup /</Link> <Link to="/login"> Login</Link>
          </div> */}
          {Button}
          {/* <button className={styles.logoutbtn}> 
          <Link to="#"> 
            <span className={styles.innerColor}>
            Logout
            </span> 
          </Link> </button> */}
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}
export default withRouter(Header);
