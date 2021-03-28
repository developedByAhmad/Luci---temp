import React, { Component } from 'react'
import styles from './fixedvariable.module.css'
import "./fixedvariable.css"
// import calIMage from './../../../assets/calimage.png'import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { createUseStyles, useTheme } from 'react-jss';
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


function FixedVariable(){
    const theme = useTheme();
    const classes = useStyles({ theme });

        return (
            <div className="App">
            {/* <Header /> */}
            <div className="property-layout-main">
                <div className="property-layout-second">
                    <div className="property-layout-sider">
                    {/* <h1> This is property compenent</h1> */}
                    <SidebarContext>
                    <Row className={classes.container}>
                        <SidebarComponent />
                            <Column flexGrow={1} className={classes.mainBlock}>
                                {/* <Header />? */}
                                <div className={classes.contentBlock}>
                                <div>
                <div className="flex-container">
                    <div className="flex-child">
                     

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <h1> FixedVariable </h1> 
                                <Form.Label>Asking Price ($)</Form.Label>
                                    <Form.Control type="text" />
                                
                                    <Form.Label>Purchase Price</Form.Label>
                                    <Form.Control type="text" />

                                    <Form.Label>Financing Rehab</Form.Label>
                                    <Form.Control type="text" />

                                    <h1> New Renovation Tab </h1>
                                <Form.Label>Rehab Budget ($)</Form.Label>
                                <Form.Control type="text" />
                    
                                <Form.Label> Closing Costs ($) </Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Insurence ($)</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <h1> Finance </h1> 
                                <Form.Label>Downpayment (%)</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Downpayment (%)</Form.Label>
                                <Form.Control type="text" placeholder="0 0 0 0" />

                                <Form.Label>Loan Payment Rehab</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Annual Interest Rate</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Term Years</Form.Label>
                                <Form.Control type="text" placeholder="0 0 0 0" />

                                <Form.Label>Emergency Funds ($)</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                                                
                                                </Form.Row>

                                                {/* <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <h1> New Renovation Tab </h1>
                                                        <Form.Label>Rehab Budget ($)</Form.Label>
                                                        <Form.Control type="text" />
                                            
                                                        <Form.Label> Closing Costs ($) </Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Insurence ($)</Form.Label>
                                                        <Form.Control type="text" />
                                                    </Form.Group>
                                                </Form.Row> */}
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
            {/* <Footer /> */}
        </div>




    )

}

export default FixedVariable;
