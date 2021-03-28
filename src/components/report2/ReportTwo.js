import React, { Component } from 'react'
import styles from './report.module.css'
import "./report.css"
// import calIMage from './../../../assets/calimage.png'
// import calIMage from './../../../assets/calimage.png'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';

import { Column, Row } from 'simple-flexbox';

import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';
import { func } from 'prop-types';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        padding: 30,
        '@media (max-width: 900px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    }
});

function ReportTwo() {
    const theme = useTheme();
    const classes = useStyles({ theme });
        return (
                <div className="App">
                    <Header />
                    <div className={styles.propertyLayoutMain}>
                <div className={styles.propertyLayoutSecond}>
                    <div className={styles.propertyLayoutSider}>
                            {/* <h1> This is property compenent</h1> */}
                            <SidebarContext>
                                <Row className={classes.container}>
                                <SidebarTwoComponent />
                                    <Column flexGrow={1} className={classes.mainBlock}>
                                        {/* <Header />? */}
                                        <div className={classes.contentBlock}>
                                            

                                        <div className="wrapper3" style={{margin:"-10px -10px -10px 0px"}}>
                                            <div className="row" style={{backgroundColor:"#FFEAFF"}}>
                                                <h1 className={styles.heading}> Analyzed Properties </h1>
                                                <div className="col-6" style={{textAlign:"left",  padding:"20px 40px"}}>
                                                    {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Generate Additional Graphs </label><br></br> 
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Generate Amortization Schedule </label><br></br>
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Attach Sales History </label><br></br> 
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Attach Rent Report  </label>
                                                    <br></br> 
                                                    <button className="reportBtn"> Generate Report </button>
                                                </div>

                                                <div className="col-6" style={{textAlign:"left", padding:"20px 60px"}}>
                                                    {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Generate 30 yr Proforma </label><br></br> 
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Attach Loaded Images </label> <br></br>
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Generate Projected Cashflow Statement </label><br></br> 
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Attach Market Report </label><br></br>
                                                    <input className={styles.checkBox} type="checkbox" />
                                                    <label> Attach Renovation Distributions </label><br></br> 
                                                </div>

                                                <h3 className="progressTxt"> Progress(70%) </h3>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                                    70%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </Column>
                                </Row>
                            </SidebarContext>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

    )
}


export default ReportTwo;
