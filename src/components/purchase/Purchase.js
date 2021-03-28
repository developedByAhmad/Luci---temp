import React, { Component } from 'react'
import styles from './purchase.module.css'
import "./purchase.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import imagetest from './../../assets/calimage.png'
// import calIMage from './../../../assets/calimage.png'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
// import ImageUpload from './ImageUpload';
// import calIMage from './../../../assets/calimage.png'


const useStyles = createUseStyles({
    container: {
        height: '60%',
        minHeight: 700
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


function Purchase (){
    const theme = useTheme();
    const classes = useStyles({ theme });

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         image: null
    //     };

    //     this.onImageChange = this.onImageChange.bind(this);
    // }

    // onImageChange = event => {
    //     if (event.target.files && event.target.files[0]) {
    //       let img = event.target.files[0];
    //       this.setState({
    //         image: URL.createObjectURL(img)
    //       });
    //     }
    //   };


    // render() {
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
                                                            <h1> Address </h1> 
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

export default Purchase;
