import React from 'react'
import styles from './team.module.css'

import teamImage from './../../../src/assets/team.png';
import bgImage from './../../../src/assets/background.jpeg';
import Header from './../header2/Header'
import Footer from './../footer/Footer';
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(2), //grid padding
    color: theme.palette.text.secondary,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "65px",
    lineHeight: "76px",
    textAlign: "center",
    color: "#4B176A",
    marginTop: "20px",
  },
  newllogin: {
    height: "90%",
    minWidth:"25%",
    backgroundColor:"#FFFFFF",
    marginBottom:"20px",
    padding:"20px",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0px 4px 35px -7px rgba(0, 0, 0, 0.2)"
}, 
main: {
  height:"100%"
}
}));

function Team() {
  const classes = useStyles();
    return (
      <Grid container direction="column" justify="flex-start">

        <Grid item xl={12} xs={12} sm={12} md={12} lg={12}>
          <Header />
        </Grid>

        <Grid  xl={12} container direction="column" alignItems="center" style={{backgroundColor:"#FFFFFF"}}>
        <Grid item xl={12} container  direction="column" alignItems="center" className={classes.main}>
            <Grid item>
                <p className={styles.newTeamHeading} className={classes.paper}>  Team </p>
            </Grid>
          <Grid item xs={10} sm={8} md={8} lg={6} xl={6} alignItems="center"  direction="column" container className={classes.newllogin}>
              <Grid item style={{marginBottom: "16px"}}>
              <img src={teamImage} alt="Avatar" />
              </Grid>
              <Grid item style={{marginBottom: "16px"}}>
              <h2 className={styles.newNameCeo}> John Steiner </h2>
              </Grid>
              <Grid item style={{marginBottom: "16px"}}>
              <h4 className={styles.newJobTitle}> Founder | CEO </h4>
              </Grid>
              <Grid item style={{marginBottom: "16px"}}>
              <p className={styles.newText}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it 
                        look like readable English. Many desktop publishing packages and 
                        web page editors now use Lorem Ipsum as their default model text, 
                        and a search for 'lorem ipsum' will uncover many web sites still 
                        in their infancy. Various versions have evolved over the years, 
                        sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
              </Grid>
            </Grid>
  
          </Grid>   
        </Grid > 
        <Grid item xl={12} xs={12} sm={12} md={12} lg={12}>
        <Footer />
        </Grid>

        </Grid>












                        


        // <div>
        //     <Header />
        //         <div className={styles.color}>
        //             <p className={styles.teamText1}> Team </p>
        //             {/* <img src={bgImage} alt="Background Image" /> */}
        //                 <div className={styles.center}>
        //                     <div className={styles.loginDiv}>
        //                         {/* <p>Team</p> */}
        //                         <img src={teamImage} alt="Avatar" />
        //                         <h2> John Steiner </h2>
        //                         <h4> Founder | CEO </h4>
        //                         <p>
        //                         It is a long established fact that a reader will be
        //                         distracted by the readable content of a page when
        //                         looking at its layout. The point of using Lorem Ipsum
        //                         is that it has a more-or-less normal distribution of letters,
        //                         as opposed to using 'Content here, content here', making it 
        //                         look like readable English. Many desktop publishing packages and 
        //                         web page editors now use Lorem Ipsum as their default model text, 
        //                         and a search for 'lorem ipsum' will uncover many web sites still 
        //                         in their infancy. Various versions have evolved over the years, 
        //                         sometimes by accident, sometimes on purpose (injected humour and the like).
        //                         </p>
        //                     </div>
        //                 </div>
        //         </div>
        //     <Footer />
        // </div>
    )
}

export default Team;
