import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from "./reportdesktwo.module.css"
import {Grid } from '@material-ui/core';
import RenovationSummary from './bargraphs/RenovationSummary';
import ExpectedReturns from './bargraphs/ExpectedReturns';



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

export default function ReportTwoDeskTen() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <Grid container justify="center" xs={12}>
        <Grid item container xs={11} spacing={3} justify="space-between" style={{backgroundColor:"#ffffff", padding:"15px",marginTop:"20px"}}>
            <Grid item xs={12}>
                <p className={styles.headingR8}> Renovation Summary: </p>
                <p className={styles.textR8}> Renovation: </p>
            </Grid>  

            <Grid item xs={10}>

            <table style={{marginBottom:"60px"}}> 
            <tr >
                <th className={styles.thClass}> Days to Flip</th>
                <th className={styles.thClass}> Holding Costs </th>
                <th className={styles.thClass}> Debt Service </th>
                <th className={styles.thClass}> Profit</th>
                <th className={styles.thClass}> ROI </th>
                <th className={styles.thlastChild}> CAGR </th>
            </tr>

            <tr>
                <td className={styles.tdClass}>15</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>30</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>45</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
               <tr>
                <td className={styles.tdClass}>60</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>75</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>90</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>120</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>150</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>180</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>210</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>240</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr>
                <td className={styles.tdClass}>270</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>            
            <tr>
                <td className={styles.tdClass}>300</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>          
            <tr>
                <td className={styles.tdClass}>330</td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdClass}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr className={styles.trlastChild}>
                <td className={styles.tdClass} style={{height:"50px"}}>360</td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            <tr className={styles.trlastChild}>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdClass} style={{height:"50px"}}></td>
                <td className={styles.tdlastChild}></td>
            </tr>
            </table>

            {/* <p className={styles.totalCost}>  Total Cost: </p> */}
            </Grid>    
                
                
            <Grid item xs={6}>
                <p className={styles.textR8} style={{marginBottom:"30px"}}> Expected Returns: </p>
                <ExpectedReturns />
            </Grid>  
        </Grid> 
      </Grid>
// </div>
  );
}   