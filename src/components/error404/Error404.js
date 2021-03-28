import React from 'react'
import {Link} from "react-router-dom"
import styles from './error.module.css'
import signImg from './../../assets/log-in.png'
import loginImg from './../..//assets/Group 10.png'
import luciImage from './../../assets/LuciLogin.png';
import bgImage from './../..//assets/background-2.jpeg';
import errorImg from './../../assets/404.png';
import { Grid } from '@material-ui/core'
import Header from './../header2/Header'
import Footer from './../footer/Footer';
import {BsBoxArrowInRight} from 'react-icons/bs'


const Error404 = () => {
    const otherWay = {position:"fixed"}
    return (
    <div className={styles.home} style={{backgroundColor:"#E5E5E5"}}>
      <Header />
      <Grid xl={12} container direction="column" alignItems="center" justify="center">
      <Grid xl={10} container  direction="column" alignItems="center" justify="center" className={styles.errormain}>
        <Grid item xs={10} sm={8} md={8} lg={6} xl={6} style={{ minHeight: '550px',minWidth:"25%", backgroundColor:"#FFFFFF"}} alignItems="center"  direction="column" container className={styles.newlogin}>
            <Grid item>
                <h1 className={styles.newLuciText}> Luci </h1>
            </Grid>
            <Grid item>
                <p className={styles.newp}> An interactive real estate investing assistant</p>
            </Grid>
            <Grid item>
                <h1 className={styles.new404Text}> 404 </h1>
            </Grid>
            <Grid item>
                <p className={styles.newp2}> Looks like your lost, LUCI can help you out. </p>
            </Grid>

            <Grid item container xs={12} spacing={2} m={2} direction="column" alignItems="center" justify="flex-start">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link to="/signup"> 
                    <button className={styles.newbutton} style={{background:"#fff", color:"#4B176A", border:"1px solid #4B176A"}}>
                    <BsBoxArrowInRight  style={{marginRight:"5px"}}/> 
                      Sign Up
                    </button>
                  </Link>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link to="/login">
                    <button className={styles.newbutton}>
                    <i class="fas fa-paper-plane" style={{marginRight:"5px"}}></i> 
                      Login
                    </button>
                  </Link>
                </Grid>
              </Grid>
          </Grid>

        </Grid>   
      </Grid> 
      <Footer />
    </div>
        // <div>
        //      {/* <Header /> */}
        // <div className={styles.color}>
        //         <img src={bgImage} alt="Background Image" />
        //         <div className={styles.center}>

        //           <div className={styles.loginDiv}>
        //                 <form>
        //                     <div>
        //                         {/* <img src={luciImage} alt="Avatar" /> */}
        //                         <h1> Luci </h1>
        //                         <p> An interactive real estate investing assistant</p>
        //                         {/* <img src={errorImg} alt="Error Image" /> */}
        //                         <h1> 404 </h1>
        //                         <p className={styles.loginDivtext}> Looks like your lost, LUCI can help you out. </p>
        //                     </div>
                            
        //                     <div className="container" style={{marginLeft:"185px"}}>
        //                         <div className="row" id={styles.marginClass}>
        //                             <button className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> Sign up</button>
        //                         </div>

        //                         <div className="row" id={styles.marginClass}>
        //                             <button className={styles.homeButtonLogin}> <img className={styles.buttonIcon} src={loginImg} alt="LogIn Image" /> Login </button>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <Footer /> */}
        // </div>
       
    )
}

export default Error404;