import React, { useState,useContext } from 'react'
import styles from './assumptions.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col, FormGroup } from 'react-bootstrap';
import { Grid } from "@material-ui/core";
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";



const useStyles = createUseStyles({
    input: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height:"57px",
        marginBottom:"17px"
    },
    inputtwo: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "60%",
        height: "57px",
        marginBottom: "17px"
    },
    margins: {
        marginTop: "10px",
        marginLeft: "15px"
    }
    
});



function Income() {
    const otherWay = { height: "98%" }
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [assumProp, setassumProp] = useState({
        afterRepairValue: "",
        sellingCost: "",
        annualPropGrowth: "",
        annualRentalGrowth: "",
        annualExpenseGrowth: "",
        annualIncomeGrowth:"",
        renovationDuration: "",
        initialVacancy: ""
    })
    const contextType = useContext(ContextApi)

    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" style={{ backgroundColor: "#ffffff" }}>
            <Grid item>
                <Header />
            </Grid>

            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#e5e5e5" }}>

                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0} style={{ height: '100%' }}>
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '100vh' }} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Selling Costs (%)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="number" /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}   name="sellingCost" className={classes.input} type="text" value={contextType.Assumptions.sellingCost}
                                            onChange={(e) => contextType.handleChange(e, 'Assumptions')} />

                                        <Form.Label> Initial Vacancy (wks)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="number" /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}   name="initialVacancy" className={classes.input} type="text" value={contextType.Assumptions.initialVacancy}
                                            onChange={(e) => contextType.handleChange(e, 'Assumptions')} />
                                      
                                        <Form.Label>Annual Property Growth(%)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}   name="annualPropGrowth" className={classes.input} type="text" value={contextType.Assumptions.annualPropGrowth}
                                            onChange={(e) => contextType.handleChange(e, 'Assumptions')} />

                                        <Form.Label>Annual Rental Growth(%)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="number" /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}   name="annualRentalGrowth" className={classes.input} type="text" value={contextType.Assumptions.annualRentalGrowth}
                                            onChange={(e) => contextType.handleChange(e, 'Assumptions')} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        {/* <FormGroup> */}
                                                {/* <h1> Assumptions </h1>  */}
                                            <Form.Label>After Repair Value</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text" /> */}
                                            <NumberFormat  
                                            customInput={Form.Control} 
                                            thousandSeparator={true} 
                                            prefix={'$'} suffix={".00"} 
                                            displayType={'number'}   name="afterRepairValue" className={classes.input} type="text" value={contextType.Assumptions.afterRepairValue}
                                                onChange={(e) => contextType.handleChange(e, 'Assumptions')} />

                                            <Form.Label> Renovation Duration (wks)</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text" /> */}
                                            <NumberFormat  
                                            customInput={Form.Control} 
                                            thousandSeparator={true} 
                                            prefix={'$'} suffix={".00"} 
                                            displayType={'number'}   name="renovationDuration" className={classes.input} type="text" value={contextType.Assumptions.renovationDuration}
                                                onChange={(e) => contextType.handleChange(e, 'Assumptions')} />
                                          
                                            <Form.Label>Annual Expense Growth (%)</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text" placeholder=" 3 Weeks" /> */}
                                            <NumberFormat  
                                            customInput={Form.Control} 
                                            thousandSeparator={true} 
                                            prefix={'$'} suffix={".00"} 
                                            displayType={'number'}   name="annualExpenseGrowth" className={classes.input} type="text" 
                                            value={contextType.Assumptions.annualExpenseGrowth}
                                            onChange={(e) => contextType.handleChange(e, 'Assumptions')} />

                                            <Form.Label>Annual Income Growth (%)</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text" placeholder=" 3 Weeks" /> */}
                                            <NumberFormat  
                                            customInput={Form.Control} 
                                            thousandSeparator={true} 
                                            prefix={'$'} suffix={".00"} 
                                            displayType={'number'}   name="annualIncomeGrowth" className={classes.input} type="text" value={contextType.Assumptions.annualIncomeGrowth}
                                                onChange={(e) => contextType.handleChange(e, 'Assumptions')} />
                                        {/* </FormGroup> */}
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
