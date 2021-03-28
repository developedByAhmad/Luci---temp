import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import styles from "./reportdesktwo.module.css"
import reportImage from "./../../../../assets/reportTwo.png"
import ReportLineChart from "./ReportLineChart"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "50px 20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

  

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid justify="flex-start" item xs={10}>
          <p className={styles.headerR1} style={{marginLeft: "7%"}}>Monthly Expense summary :</p>
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item xs={6} style={{padding:"20px"}} >
            <p className={styles.textR1} style={{marginBottom: "45%"}}>  Fixed </p>

            <p className={styles.textR1}> Total Fixed </p>
          </Grid>

          <Grid item xs={6} >
            <p className={styles.textR1} style={{marginLeft: "25px"}}> Monthly Operating Expenses : </p> 
            {/* <img style={{marginTop: "120px", maxheight: "250px", maxwidth: "300px"}} src={reportImage} alt="Avatar" /> */}
            <ReportLineChart />
          </Grid>
         
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
            <Grid item xs={4} className={styles.textR1} style={{padding:"20px"}} >
                <p> Monthly Holding Costs : </p>
            </Grid>
          </Grid>
      </Grid>
    </div>
  );
}