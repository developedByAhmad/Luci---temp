import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesktwo.module.css"
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import NOISummary from './bargraphs/NOISummary';
import EquitySummary from './bargraphs/EquitySummary';
import NIAFSummary from './bargraphs/NIAFSummary';
import InvestorsPropertySummary from './bargraphs/InvestorsPropertySummary';



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

export default function ReportTwoDeskSeven() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid container xs={12} justify="center" style={{margin:"50px 0px"}}>
        <Grid item container className={styles.divR4} xs={11} >
            <Grid item container xs={12} style={{backgroundColor:"#FFFFFF", padding: "15px"}}>
            <p className={styles.h1R4}>Supporting Graphs :</p> <br />

            <Grid item container xs={12} direction="column"   style={{backgroundColor:"#FFFFFF", padding: "15px"}}>
                <Grid item>
                    <p className={styles.headingR5}> Investors Property Summary : </p>
                </Grid>
                <Grid item xs={10}>
                    <InvestorsPropertySummary />
                </Grid>
            </Grid>


            <Grid item container xs={12} direction="column"   style={{backgroundColor:"#FFFFFF", padding: "15px"}}>
                <Grid item>
                    <p className={styles.headingR5}> Equity Summary : </p>
                </Grid>
                <Grid item xs={10}>
                    <EquitySummary />
                </Grid>
            </Grid>

        
            </Grid>       
        </Grid>
    </Grid>
  );
}   