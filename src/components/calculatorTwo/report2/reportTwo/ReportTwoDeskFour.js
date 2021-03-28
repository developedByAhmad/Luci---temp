import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesktwo.module.css"
import {Grid} from '@material-ui/core';
import ExpectedNotOperating from "./bargraphs/ExpectedNotOperating"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ReportTwoDeskFour() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <Grid container justify="center" >
          <Grid item container className={styles.divR4} xs={11} >
            <Grid item container xs={12} style={{backgroundColor:"#FFFFFF", padding: "15px"}}>
                <Grid item xs={8} style={{textAlign: "left", margin: "20px 5px"}} >
                    <p className={styles.h2R4}>Projected Cashflow Statements :</p> <br />
                </Grid>
                <Grid item xs={8} style={{textAlign: "right"}} >
                    <p className={styles.h2R4}>Projected CashFlow 1 - year :</p> <br />
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={3}>
                        <p className={styles.textR1}> FIrst Year : </p>
                    </Grid>

                    <Grid item xs={9}>
                    <table style={{marginBottom:"25px"}}>
                            <tr>
                                <td className={styles.tablecell}>s Futterkiste</td>
                                <td className={styles.tablecell}>Anders</td>
                                <td className={styles.tablecell}>Tyuyudy</td>
                                <td className={styles.tablecell}>s Futterkiste</td>
                                <td className={styles.tablecell}>Tyuyudy</td>
                            </tr>
                        </table>
                    </Grid>
                </Grid>


            <Grid item xs={3}>
                <table >
                    <tr style={{display:"inline-grid"}}>
                        <td className={styles.tablecellmiddle}>Futterkiste</td>
                        <td className={styles.tablecellmiddle}>Anders</td>
                        <td className={styles.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles.tablecellmiddle}>Futterkiste</td>
                        <td className={styles.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles.tablecellmiddle}>Futterkiste</td>
                        <td className={styles.tablecellmiddle}>Anders</td>
                        <td className={styles.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles.tablecellmiddle}>utterkiste</td>
                        <td className={styles.tablecell}>Tyuyudy</td>
                    </tr>
                </table>
            </Grid> 

            <Grid item xs={9}>
            {/* <TableContainer component={Paper}> */}
            <table style={{marginBottom:"45px"}}>
                <tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                    <td className={styles.tablecell}>Tyuyudy</td>
                    <td className={styles.tablecell}>s Futterkiste</td>
                    <td className={styles.tablecell}>Anders</td>
                </tr>
            </table>
            </Grid>   

            <Grid item container xs={12} style={{marginTop:"50px"}}>
                <p className={styles.textR4}> Monthly Cash Reserves :</p> 
                <ExpectedNotOperating style={{marginLeft:"30px"}}/>
            </Grid> 

          
        </Grid>


        


          </Grid>
      </Grid>
    // </div>
  );
}