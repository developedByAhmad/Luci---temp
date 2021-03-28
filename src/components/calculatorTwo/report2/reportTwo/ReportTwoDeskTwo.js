import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import styles from "./reportdesktwo.module.css"
import styles2 from './proformaStatement/reporttwodeskfive.module.css'
import reportImage from "./../../../../assets/reportTwo.png"
import ReportLineChart from "./ReportLineChart"
import RenovationSummary from './bargraphs/RenovationSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: "50px 20px"
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

  

export default function ReportTwoDeskTwo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid justify="flex-start" item xs={10}>
          <p className={styles.headerR1} style={{marginLeft: "7%"}}>Deal Returns summary :</p>
          <p className={styles.h2R2} style={{marginLeft: "7%"}}>Project Returns:</p>
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item xs={5} className={styles.liR2}>
          <p> Purchase Price: </p>
          <p> Cash To Close : </p>
          <p> Renovation : </p>
          </Grid>
          <Grid item xs={5} className={styles.liR2}>
            <p> 20th Rule : </p> 
            <p> Difference : </p> 
          </Grid>
        </Grid>

        <Grid item container direction="row" xs={11} spacing={2} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item container direction="row" xs={6}>
            <Grid item xs={12} className={styles.smalldiv}>
              <p> ARV : </p>
              <p> Selling Costs : </p>
              <p> Holding Costs : </p>
            </Grid>
            <Grid item xs={12} className={styles.smalldiv} style={{margin:"11px 0px"}}>
              <p> NOI : </p> 
              <p style={{marginTop:"30px"}}> Debt Service : </p> 
            </Grid>
            <Grid item xs={12} className={styles.smalldiv}>
              <p> NIAF : </p>
              <p style={{marginTop:"30px"}}> Debt Remaining : </p> 
            </Grid>
          </Grid>

          <Grid item xs={6}  className={styles.graphR2}>
              <p className={styles.h2R2} style={{margin: "60px 0px"}}> Renovation summary : </p>
              <RenovationSummary />
              <p className={styles.h2R2} style={{marginTop: "50px"}}> Purchase Price ($) : </p>
          </Grid>          
        
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item xs={5} className={styles.liR2}>
            <p> Profit : </p>
            <p> NPU : </p>
            <p> IRR : </p>
            <p> ROI : </p> 
          </Grid>
        </Grid>


        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item xs={12}>
            <p className={styles.headerR1}b style={{margin: "15px 0px", textAlign: "center"}}>Pro forme statement 1 - year</p>
          </Grid>

          <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={3}>
                        <p className={styles.textR1}> 1 Year Proforma : </p>
                    </Grid>

                    <Grid item xs={9}>
                    <table style={{marginBottom:"25px"}}>
                            <tr>
                                <td className={styles2.tablecell}>s Futterkiste</td>
                                <td className={styles2.tablecell}>Anders</td>
                                <td className={styles2.tablecell}>Tyuyudy</td>
                                <td className={styles2.tablecell}>s Futterkiste</td>
                                <td className={styles2.tablecell}>Tyuyudy</td>
                            </tr>
                        </table>
                    </Grid>
                </Grid>


            <Grid item xs={3}>
                <table >
                    <tr style={{display:"inline-grid"}}>
                        <td className={styles2.tablecellmiddle}>Futterkiste</td>
                        <td className={styles2.tablecellmiddle}>Anders</td>
                        <td className={styles2.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles2.tablecellmiddle}>Futterkiste</td>
                        <td className={styles2.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles2.tablecellmiddle}>Futterkiste</td>
                        <td className={styles2.tablecellmiddle}>Anders</td>
                        <td className={styles2.tablecellmiddle}>Tyuyudy</td>
                        <td className={styles2.tablecellmiddle}>utterkiste</td>
                        <td className={styles2.tablecell}>Tyuyudy</td>
                    </tr>
                </table>
            </Grid> 

            <Grid item xs={9}>
            {/* <TableContainer component={Paper}> */}
            <table style={{marginBottom:"45px"}}>
                <tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr><tr>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                    <td className={styles2.tablecell}>Tyuyudy</td>
                    <td className={styles2.tablecell}>s Futterkiste</td>
                    <td className={styles2.tablecell}>Anders</td>
                </tr>
            </table>
            </Grid>   
        </Grid>


        </Grid>
      </Grid>
    </div>
  );
}