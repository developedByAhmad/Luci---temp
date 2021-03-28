import React, { Component } from 'react'
import styles from './expense.module.css'
// import "./renovation.css"
// import './property.css'
import './../../App.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import imagetest from './../../assets/calimage.png'
// import calIMage from './../../../assets/calimage.png'
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        // padding: 30,
        '@media (max-width: 900px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    },

    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "70%",
        height:"57px",
        marginBottom:"15px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "86%",
        height:"57px",
        marginBottom:"15px"
    },

    sidenav:{
        marginLeft: "20px",
        justifyContent: "right"
    }
});



function ExpenseTwo (){
    const otherWay = {height:"82vh"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={3} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"aliceblue"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{height:'100%'}}>
                        <SidebarTwoComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'85vh'}} >
                    <Form>
                                            <Form.Row>       <h1> Fixed Expenses (USD) </h1>  </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                        <Form.Label>Miscellaneous</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />

                                                        <Form.Label>Water and Sewer</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />

                                                        <Form.Label>Garbase</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />
                                            
                                                        <Form.Label> Monthly Taxes </Form.Label>
                                                        <Form.Control className={classes.input} type="text" />
                                            
                                                        <Form.Label> Landlord Insurance USD</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />

                                                </Form.Group>

                                                <Form.Group as={Col}>
                                                        <FormGroup>
                                                        <Form.Label>Electric</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />

                                                        <Form.Label>PMI</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />
                                                    
                                                        <Form.Label>HQA</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />

                                                        <Form.Label>Insurance</Form.Label>
                                                        <Form.Control className={classes.input} type="text" />
                                                        </FormGroup>
                                                        

                                                </Form.Group>
                                                                                        
                                        </Form.Row>

                                        <Form.Row>
                                                    <FormGroup as={Col}>
                                                        <Form.Label>Total</Form.Label>
                                                        <Form.Control className={classes.inputtwo} type="text" placeholder=" 0 0 0 0 0"  />
                                                    </FormGroup>
                                                
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

export default ExpenseTwo;







