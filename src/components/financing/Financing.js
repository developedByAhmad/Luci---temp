import React, { Component } from 'react'
import styles from './financing.module.css'
import "./income.css"
// import calIMage from './../../../assets/calimage.png'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'

import { Column, Row } from 'simple-flexbox';

import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';
import { func } from 'prop-types';


const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 680
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

// const style = {
//     height: "65vh",
//     backgroundColor: 
// }


function Financing (){
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
                                            
                                    <div>
                                        <div className="flex-container">
                                            <div className="flex-child">
                                            

                                            <Form>
                                                <Form.Row>
                                                    <Form.Group as={Col}>
                                                            <Form.Label>Financing The Renovation</Form.Label>
                                                            <Form.Control type="text" />
                                                        
                                                            <Form.Label>Interest Rate</Form.Label>
                                                            <Form.Control type="number" />

                                                            <Form.Label>Interest Only</Form.Label>
                                                            <Form.Control type="number" />

                                                            <Form.Label>Grace Period</Form.Label>
                                                            <Form.Control type="text" />
                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Label>Down Paymenyt (%)</Form.Label>
                                                        <Form.Control type="number" />

                                                        <Form.Label>Term</Form.Label>
                                                        <Form.Row> <Form.Control type="text" placeholder="Years" /> <Form.Control type="text" placeholder="Months" /></Form.Row>
            
                                                        

                                                        <Form.Label>How Many Months</Form.Label>
                                                        <Form.Control type="number" />

                                                        <Form.Label>Financing Rehab</Form.Label>
                                                        <Form.Control type="text" placeholder="Yes" />

                                                    </Form.Group>
                                            
                                            </Form.Row>
                                                </Form>
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

export default Financing;
