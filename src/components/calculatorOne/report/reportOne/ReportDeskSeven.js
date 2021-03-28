import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesk.module.css"
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import NOISummary from './bargraphs/NOISummary';
import EquitySummary from './bargraphs/EquitySummary';
import NIAFSummary from './bargraphs/NIAFSummary';



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

export default function ReportDeskSeven() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid container xs={12} justify="center" style={{margin:"50px"}}>
        <Grid item container className={styles.divR4} xs={10} >
            <Grid item container xs={12} style={{backgroundColor:"#FFFFFF", padding: "15px", marginTop: "450px"}}>
            <p className={styles.h1R4}>SupportingGraphs :</p> <br />

            <Grid item container xs={12} direction="column"   style={{backgroundColor:"#FFFFFF", padding: "15px"}}>
                <Grid item>
                    <p className={styles.headingR5}> NOI Summary : </p>
                </Grid>
                <Grid item xs={10}>
                    <NOISummary />
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


            <Grid item container xs={12} direction="column" style={{backgroundColor:"#FFFFFF", padding: "15px", marginTop: "450px"}}>
                <Grid item>
                    <p className={styles.headingR5}> NIAF Summary:  </p>
                </Grid>
                <Grid item xs={10}>
                    <NIAFSummary />
                </Grid>
            </Grid>
        
            </Grid>       
        </Grid>
    </Grid>
  );
}   