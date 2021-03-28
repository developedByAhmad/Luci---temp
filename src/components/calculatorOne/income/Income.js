import React, { useState, useEffect,useContext } from 'react'
import styles from './income.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col, FormGroup } from 'react-bootstrap';
import { Grid } from "@material-ui/core"
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";

const useStyles = createUseStyles({
    input: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "94%",
        height: "57px",
        marginBottom: "15px"
    },
    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "88%",
        height: "57px",
        marginBottom: "15px"
    },
    margins: {
        marginTop: "10px",
        marginLeft: "15px"
    }
});



function Income() {
    const otherWay = { height: "100%" }
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [incomeProp, setIncomeProp] = useState({
        otherIncome: "",
        noOfUnits: "",
        averageRent: "",
        totalRent: 0,
        totalIncome: 0
    });
    const contextType = useContext(ContextApi)

    const [totalIncome, setTotalIncome] = useState();

    useEffect(() => {
        // function sum(obj) {
        //     var sum = 0;
        //     for (var el in obj) {
        //         sum += obj[el] == "" ? 0 : parseFloat(obj[el]);
        //     }
        //     return sum;
        // }

        
        const { noOfUnits , averageRent , otherIncome} = contextType.Income;
        if((noOfUnits && averageRent) || otherIncome){
            const totalRent = noOfUnits * averageRent.substring(1);
            const totalIncome = otherIncome?(parseInt(totalRent) + parseInt(otherIncome.substring(1))):parseInt(totalRent);
            contextType.Income.totalRent=totalRent;
            contextType.Income.totalIncome=totalIncome;
            setIncomeProp({ ...incomeProp , totalRent: totalRent , totalIncome:totalIncome })
        }

        // var summed = sum(incomeProp);
        // setTotalIncome(summed)

    },[contextType.Income]);

    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" style={{ backgroundColor: "#ffffff" }}>
            <Grid item>
                <Header />
            </Grid>

            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#ffffff" }}>

                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0} style={{ height: '100%' }}>
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '102vh' }} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Number Of Units</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" /> */}
                                        <NumberFormat 
                                        name="noOfUnits" 
                                        customInput={Form.Control} 
                                        className={classes.input} 
                                        displayType={'number'} 
                                        // thousandSeparator={true} 
                                        // prefix={'$'} 
                                        // suffix={".00"}  
                                        value={contextType.Income.noOfUnits}
                                        onChange={(e) => contextType.handleChange(e, 'Income')} />

                                        <Form.Label> Average Rent ($) </Form.Label>
                                        {/* <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0" /> */}
                                        <NumberFormat
                                        customInput={Form.Control}
                                        name="averageRent" 
                                        className={classes.input} 
                                        displayType={'number'} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        value={contextType.Income.averageRent}
                                        onChange={(e) => contextType.handleChange(e, 'Income')}/>

                                        {/* <CurrencyInput name="averageRent" className={classes.input} type="number" value={contextType.Income.averageRent}
                                            onChange={(e) => contextType.handleChange(e, 'Income')} /> */}
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Total Monthly Income ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="number"
                                        value={totalIncome} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}  
                                        name="totalIncome" 
                                        className={classes.inputtwo} 
                                        value={contextType.Income.totalIncome}
                                        onChange={(e) => contextType.handleChange(e, 'Income')} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Other Income ($)</Form.Label>
                                        {/* <Form.Control className={classes.inputtwo} type="number"
                                            onChange={e => setIncomeProp({ ...incomeProp, otherIncome: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}  
                                        name="otherIncome" 
                                        className={classes.inputtwo} 
                                        value={contextType.Income.otherIncome}
                                        onChange={(e) => contextType.handleChange(e, 'Income')} />
                                    </Form.Group>    
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Total Rent ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} displayType={'number'}  placeholder=" 0 0 0 0 0"
                                            onChange={e => setIncomeProp({ ...incomeProp, totalRent: e.target.value })} /> */}
                                        <NumberFormat 
                                        name="totalRent" 
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        className={classes.input} 
                                        displayType={'number'}  
                                        placeholder=" 0 0 0 0 0" 
                                        value={contextType.Income.totalRent}
                                        onChange={(e) => contextType.handleChange(e, 'Income')} />
                                    </Form.Group>
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

export default Income;

