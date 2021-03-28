import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./reportdesktwo.module.css"
import reportImage from "./../../../../assets/reportTwo.png"
import ReportLineChart from './ReportLineChart';


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

export default function ReportTwoDeskThree() {
  const classes = useStyles();

  return (
    <Grid container justify="center" style={{marginTop:"30px"}}>
          <Grid item container className={styles.divR4} xs={11} justify="center" style={{padding:"20px"}}>
            <Grid item xs={12}>
                <p className={styles.h1R3}>Debt Amortization Summary :</p> <br />
                <p className={styles.h2R3} style={{marginBottom: "200px"}}>Debt Amortization Schedule : </p>
                {/* <img className={styles.imgR3} src={reportImage}></img> */}

                <p className={styles.h2R3}> Debt Amortization Graph :</p>
                <ReportLineChart />
            </Grid>
          </Grid>
    </Grid>
  );
}