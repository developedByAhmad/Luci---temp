import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./reportdesk.module.css"
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

export default function ReportDeskThree() {
  const classes = useStyles();

  return (
    <Grid container justify="center" style={{marginTop:"40px"}}>
          <Grid item container className={styles.divR4} xs={10} justify="center" style={{paddingTop:"130px"}}>
            <Grid item xs={10}>
                <p className={styles.h1R3}>Debt Amortization Summary :</p> <br />
                <p className={styles.h2R3}>Debt Amortization Schedule : </p>
                {/* <img className={styles.imgR3} src={reportImage}></img> */}
            </Grid>
            <Grid item xs={8}>
              <ReportLineChart />
            </Grid>
          </Grid>
    </Grid>
  );
}