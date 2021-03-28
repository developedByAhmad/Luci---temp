import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesk.module.css"
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import FirstYearBalanceReport from "./bargraphs/FirstYearBalanceReport"
import FirstYearCashShows from './bargraphs/FirstYearCashShows';
import YearlyCashFlowBalance from './bargraphs/YearlyCashFlowBalance';





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

export default function ReportDeskNine() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid container justify="center" >
        <Grid item container className={styles.divR4} xs={10} >
            <Grid item container xs={12} style={{backgroundColor:"#FFFFFF", padding: "15px", marginTop: "350px"}}>
                <Grid item>
                     <p className={styles.h1R4}>Cash flow Analysis :</p> 
                    <p className={styles.headingR5}> Cash flow : </p>  
                </Grid>



            <Grid item container xs={12} direction="column"   style={{backgroundColor:"#FFFFFF", padding: "15px", margin:"20px 5px"}}>
                <Grid item>
                    <p className={styles.headingR5}> First Year Balance Report : </p>
                </Grid>
                <Grid item xs={10}>
                    <FirstYearBalanceReport />
                </Grid>
            </Grid>


            <Grid item container xs={12} direction="column"   style={{backgroundColor:"#FFFFFF", padding: "15px", margin:"20px 5px"}}>
                <Grid item>
                    <p className={styles.headingR5}> First Year Cash Shows : </p>
                </Grid>
                <Grid item xs={10}>
                    <FirstYearCashShows />
                </Grid>
            </Grid>


            <Grid item container xs={12} direction="column" style={{backgroundColor:"#FFFFFF", padding: "15px", margin:"320px 5px"}}>
                <Grid item>
                    <p className={styles.headingR5}> Yearly Cash Flow Balance Report:  </p>
                </Grid>
                <Grid item xs={10}>
                    <YearlyCashFlowBalance />
                </Grid>
            </Grid>
        
            </Grid>       
        </Grid>
    </Grid>
  );
}   