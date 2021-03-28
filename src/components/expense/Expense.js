import React, { Component } from 'react'
import styles from './expense.module.css'
import "./expense.css"
// import calIMage from './../../../assets/calimage.png'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image} from 'react-bootstrap';
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';

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



function Expense (){
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
                        <SidebarComponent style={{height:"100vh"}} />
                            <Column flexGrow={1} className={classes.mainBlock}>
                                {/* <Header />? */}
                                <div className={classes.contentBlock}>
                                <div>
                                    <div className="flex-container">
                                        <div className="flex-child">
                                        

                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <h1> Fixed Expenses (USD) </h1> 
                                                    <Form.Label>Total Fixed Expenses</Form.Label>
                                                        <Form.Control type="text" placeholder=" 0 0 0 0 0"/>
                                                    
                                                        <Form.Label>Electric</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Water and Sewer</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Water and Sewer</Form.Label>
                                                        <Form.Control type="text" />
                                            
                                                        <Form.Label> Garbase </Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>HQA</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Monthly Taxes</Form.Label>
                                                        <Form.Control type="text" />
                                            
                                                        <Form.Label> Insurance </Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Miscellaneous</Form.Label>
                                                        <Form.Control type="text" />
                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                    <h1> Variable Expenses  </h1> 
                                                        <Form.Label>Total Variable Expenses</Form.Label>
                                                        <Form.Control type="text" placeholder=" 0 0 0 0 0"/>
                                                    
                                                        <Form.Label>Repairs/Maint (%)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Repair/Maint ($)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Cap. Ex (%)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Cap. Ex (%)</Form.Label>
                                                        <Form.Control type="text" />
                                            
                                                        <Form.Label> Vacancy (%)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Vacancy (%)</Form.Label>
                                                        <Form.Control type="text" />

                                                        <Form.Label>Managment Fee (%)</Form.Label>
                                                        <Form.Control type="text" />
                                            
                                                        <Form.Label> Managment Fee (%)</Form.Label>
                                                        <Form.Control type="text" />

                                                </Form.Group>
                                        
                                        </Form.Row>
                                    </Form>

                                    {/* <h1> This is Expense Component</h1>  */}
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

export default Expense;
