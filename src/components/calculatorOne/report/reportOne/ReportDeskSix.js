import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from "./reportdesk.module.css"
import reportImage from './../../../../assets/reportTwo.png';
import ReportLineChart from './ReportLineChart';


function ReportDeskSix() {
    return (
        <Grid container xs={12} spacing={3} justify="center">
            <Grid item container xs={10} className={styles.mainR6} style={{marginTop: "450px"}}>
                <Grid item xs={4}>
                    <p className={styles.headingR6}> Monthly Expense summary : </p>
                </Grid> 

                <Grid item container xs={12} style={{padding: "10px 3%"}}>
                    <Grid item xs={4}>
                        <p className={styles.paragraphR6}> Fixed :</p>
                        <p className={styles.paragraphR6} style={{marginTop:"140px"}}> Variable : </p>
                    </Grid>
                    <Grid item container xs={8}>
                        <Grid item xs={10}>
                        <p className={styles.paragraphR6} style={{marginLeft: "15px", marginBottom: "20px"}}>Monthly Operating Expenses :</p>

                        </Grid>
                        {/* <img src={reportImage} alt="Avatar" /> */}
                        <Grid item xs={12}>
                        <ReportLineChart  />

                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container xs={12} style={{padding: "20px 3%", marginTop: "10%"}}>
                    <Grid item xs={12}>
                        <p className={styles.paragraphR6} style={{marginBottom:"3%"}}> Total Fixed :</p>
                    </Grid>
                    <Grid item xs={4} >
                        <p className={styles.paragraphR6}> Total Variable :</p>
                        <p className={styles.paragraphR6} style={{marginTop:"12%"}}> Monthly Operating Expenses: </p>
                        <p className={styles.paragraphR6} style={{marginTop:"12%"}}> 50% Of Income: </p>
                    </Grid>
                    <Grid item container xs={8}>
                        <Grid item xs={10}>
                        <p className={styles.paragraphR6} style={{marginLeft: "15px", marginBottom: "10px"}}> 50% Rule:</p>

                        </Grid>
                        {/* <img src={reportImage} alt="Avatar" /> */}
                        <Grid item xs={12}>
                        <ReportLineChart  />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ReportDeskSix
