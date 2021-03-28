import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import styles from "./reportdesk.module.css"
import styles2 from './proformaStatement/reportdeskfive.module.css'
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
          <p className={styles.headerR1} style={{marginLeft: "7%"}}>Deal Returns summary :</p>
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}}>
          <Grid item xs={6} className={styles.textR1}>
          <p> First Yera Returns : </p>
          </Grid>
          <Grid item xs={6} className={styles.textR1}>
            <p> Gross Rent multiplier : </p> 
          </Grid>

          <Grid item xs={6} className={styles.textR1}>
            <p> NOI : </p>
          </Grid>
          <Grid item xs={6} className={styles.textR1}>
            <p> Debt Serve : </p> 
          </Grid>
        </Grid>

        <Grid item container direction="row" xs={11} className={styles.bgReport} style={{marginTop: "20px"}} jusifty="flex-start">
          <Grid item xs={4} className={styles.textR1}>
            <p style={{marginBottom: "15px"}}><b>NIAF :</b> </p>
            <p> Cash on Cash Return : </p>
            <p> Cop Rate: </p>
            <p> NPV (t year): </p>
            <p> IRR (11 year): </p>
            <p> Property Value: </p>
            <p> Debt Remzining: </p>
            <p style={{marginTop: "15px"}}><b>Equity :</b> </p>
          </Grid>

          <Grid item xs={7} className={styles.textR1} >
            <p> 1% Rule : </p> 
            {/* <img style={{marginTop: "120px", maxheight: "250px", maxwidth: "300px"}} src={reportImage} alt="Avatar" /> */}
            <ReportLineChart />
          </Grid>

          <Grid item container xs={12}>
                <Grid item container xs={12}>
                    <Grid item xs={3}>
                        <p className={styles.textR1}> 30 Years Proforma : </p>
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