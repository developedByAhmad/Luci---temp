import React, { Component } from 'react'
import styles from './income.module.css'
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


function IncomeTwo (){
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
                                                        <Form.Label>Number of Units</Form.Label>
                                                            <Form.Control type="text" />
                                                        
                                                            <Form.Label>Total Monthly Rent Income ($)</Form.Label>
                                                            <Form.Control type="text" placeholder=" 0 0 0 0 0"  />

                                                            <Form.Label>Total Monthly Income ($)</Form.Label>
                                                            <Form.Control type="text"  placeholder=" 0 0 0 0 0"  />

                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <FormGroup>
                                                        <Form.Label>Avarage Rent per Unit ($)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Other Monthly Income ($)</Form.Label>
                                                        <Form.Control type="text" />
                                                        </FormGroup>
                                                        

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

export default IncomeTwo;
