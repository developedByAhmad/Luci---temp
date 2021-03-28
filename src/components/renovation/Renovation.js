import React, { Component } from 'react'
import styles from './renovation.module.css'
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


function Renovation (){
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
                                                        {/* <Form.Group as={Col}> */}
                                                            <h1> Itemize The Renre Budget : Yes /No </h1>
                                                            <h1> Fixed : </h1>
                                                        {/* </Form.Group> */}
                                                    </Form.Group>
                                                </Form.Row>

                                                <Form.Row>
                                                    <Form.Group as={Col}>
                                                            <Form.Label>Beds</Form.Label>
                                                            <Form.Control type="text" />
                                                        
                                                            <Form.Label>Permits</Form.Label>
                                                            <Form.Control type="text" />

                                                            <Form.Label>Foundation</Form.Label>
                                                            <Form.Control type="text" />

                                                            <Form.Label>Structure</Form.Label>
                                                            <Form.Control type="text" />
                                                        
                                                            <Form.Label>Flooring</Form.Label>
                                                            <Form.Control type="text"/>

                                                            <Form.Label>Heating/AC</Form.Label>
                                                            <Form.Control type="text"/>
      
                                                            <Form.Label>Windows</Form.Label>
                                                            <Form.Control type="text" />
                                                        
                                                            <Form.Label>Landscaping</Form.Label>
                                                            <Form.Control type="text" />

                                                            <Form.Label>Kitchens</Form.Label>
                                                            <Form.Control type="text" />

                                                    </Form.Group>

                                                    <Form.Group as={Col}>
                                                        <Form.Label>Baths</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Property Sq. ft</Form.Label>
                                                        <Form.Control type="text" />    

                                                        <Form.Label>Roof</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Drywall</Form.Label>
                                                        <Form.Control type="text" />
                                                        
                                                        <Form.Label>Electric</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Lighting</Form.Label>
                                                        <Form.Control type="text"  placeholder=" 0 0 0 0 0"  />
      
                                                        <Form.Label>Patry/porch</Form.Label>
                                                        <Form.Control type="text" />    

                                                        <Form.Label>Appliances</Form.Label>
                                                        <Form.Control type="text"  />

                                                        <Form.Label>Baths</Form.Label>
                                                        <Form.Control type="text" />
                                                        
                                                    </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                    <FormGroup>
                                                        <Form.Label>Total</Form.Label>
                                                        <Form.Control type="text" placeholder=" 0 0 0 0 0"  />
                                                    </FormGroup>
                                                
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

export default Renovation;
