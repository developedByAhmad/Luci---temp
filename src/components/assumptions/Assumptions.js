import React, { Component } from 'react'
import styles from './assumptions.module.css'
import "./assumptions.css"
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import imagetest from './../../assets/calimage.png'
// import calIMage from './../../../assets/calimage.png'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 750
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


function Assumptions(){

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
                        <SidebarComponent />
                            <Column flexGrow={1} className={classes.mainBlock}>
                                {/* <Header />? */}
                                <div className={classes.contentBlock}>
                                    {/* <PrivateRoutes /> */}
                                    
                                    <div>
                <div className="flex-container">
                    <div className="flex-child">
                     

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                {/* <h1> Assumptions </h1>  */}
                                    <Form.Label>Annual Income Growth (%)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Annual Property Appreciation (%)</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Renovation Duration</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>After Repair Value (ARV) </Form.Label>
                                    <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                {/* <h1> Assumptions </h1>  */}
                                    <Form.Label>Annual Fixed Expense Growth (%)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Selling Cost (%)</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Initial Vacancy</Form.Label>
                                    <Form.Control type="text" />

                                    {/* <Form.Label style={{display:'None'}}>After Repair Value (ARV) </Form.Label>
                                    <Form.Control type="text" /> */}
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

export default Assumptions;
