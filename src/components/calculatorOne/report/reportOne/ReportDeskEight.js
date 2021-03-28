import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesk.module.css"
import {Grid } from '@material-ui/core';
import RenovationSummary from './bargraphs/RenovationSummary';



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

export default function ReportDeskEight() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <Grid container justify="center" xs={12}>
        <Grid item container xs={10} spacing={3} justify="space-between" style={{backgroundColor:"#ffffff", padding:"15px",marginTop:"20px"}}>
            <Grid item xs={12}>
                <p className={styles.headingR8}> Renovation Summary: </p>
                <p className={styles.textR8}> Renovation: </p>
            </Grid>  

            <Grid item xs={5}>

            <table>
            <tr >
                <th className={styles.thClass}> Sub Categories</th>
                <th className={styles.thClass}> $ </th>
                <th className={styles.thlastChild}> % </th>
            </tr>

            <tr>
                <td className={styles.tdClass}>Hi</td>
                <td className={styles.tdClass}>Hi</td>
                <td className={styles.tdlastChild}>Hi</td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}>Hi</td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
               <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}>Hi</td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>Hi</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>

            <tr className={styles.trlastChild}>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr className={styles.trlastChild}>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            </table>

            <p className={styles.totalCost}>  Total Cost: </p>
            </Grid>    
                
                
            <Grid item xs={5}>
                <p className={styles.textR8} style={{marginBottom:"30px"}}> Renovation summary: </p>
                <RenovationSummary />
            </Grid>  
        </Grid> 
      </Grid>
// </div>
  );
}   