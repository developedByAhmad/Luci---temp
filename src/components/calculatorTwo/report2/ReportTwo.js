import React from 'react'
import {Link} from "react-router-dom";
import styles from './report.module.css'
import "./report.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import { Grid } from "@material-ui/core";
import Pdf from "react-to-pdf";
import {Form, FormGroup, Col} from 'react-bootstrap';

const ref = React.createRef();
const useStyles = createUseStyles({
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});

function ReportTwo() {
    const otherWay = {height:"98%"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#ffffff"}}>
                    <Grid item container xl={11} lg={11} md={10} sm={10} xs={12}  direction="row" justify="flex-start" style={{backgroundColor:"#ffffff"}}>
                        <SidebarContext>
                            <Grid item xl={3} lg={3} md={3} sm={0} xs={0}> <SidebarTwoComponent style={otherWay} /> </Grid>
                            

                            
                            
                            <Grid item xl={9} lg={9} md={9} sm={12} xs={12} className={styles.reportview} style={{height:'100vh'}}>
                            <h1 className={styles.heading}> Select the items to be included in the report</h1>
                            <Form className={classes.margins} ref={ref}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridPurchase">
                                            <FormGroup>
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Generate Additional Graphs </label><br></br> 
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Generate Amortization Schedule </label><br></br>
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Attach Sales History </label><br></br> 
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Attach Rent Report  </label>
                                                <br></br> <br></br><br></br>
                                                <Link className="buttonclass" to="/reporttwogenerator"> Generate Report </Link>
                                            </FormGroup>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <FormGroup>
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Generate 30 yr Proforma </label><br></br> 
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Attach Loaded Images </label> <br></br>
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Generate Projected Cashflow Statement </label><br></br> 
                                                <input className={styles.checkBox} type="checkbox" name="reportOne" />
                                                <label> Attach Renovation Distributions </label><br></br> 
                                            </FormGroup>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <h3 className="progressTxt"> Progress(70%) </h3>
                                        <div className="progress" style={{margin:"10px"}}>
                                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}></div>
                                        </div>
                                    </Form.Row>
                                </Form>
                            </Grid>
                            </SidebarContext>
                        </Grid>
                    </Grid>
        

                <Grid item xl={12}>
                    <Footer />
                </Grid>
            </Grid>
    )
}
export default ReportTwo;
