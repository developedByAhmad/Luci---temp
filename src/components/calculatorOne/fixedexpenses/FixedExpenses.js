import React, {useState,useEffect, useContext} from 'react';
import styles from './fixedexpenses.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core";
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";



const useStyles = createUseStyles({
    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "86%",
        height:"57px",
        marginBottom:"17px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "94%",
        height:"57px",
        marginBottom:"15px"
    },
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});


function FixedExpenses (){
    const otherWay = {height:"100%"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
    const contextType = useContext(ContextApi)
    
    const [fixedProp, setfixedProp] = useState({
        electric:"",
        waterSewer: "",
        PMI: "",
        garbage: "",
        HOA: "",
        taxes: "",
        insurance: "",
        others: "",
        // totalfixed:""
    });

    const [totalfixed, settotalfixed] = useState();

    useEffect(() => {
        function sum(obj) {
            var sum = 0;
            for (var el in obj) {
              //   if(obj.hasOwnProperty(el)) {
              // console.log(obj[el])
              sum += obj[el] == "" ? 0 : parseFloat(obj[el].substring(1).replace(/\,/g,''));
              //   }
            }
            return sum;
          }
        let {taxes ,totalFixed, ...fixedexpences} = contextType.FixedExpense
        const {priorYearTax} = contextType.Property;       
        const expencesSum = sum(fixedexpences);
        const tax = (parseInt(priorYearTax)/12);
        console.log("taxes",tax)
        console.log("fixedexpences",fixedexpences)

        console.log("expencesSum",expencesSum)
        totalFixed = expencesSum + (tax?tax:0)
        console.log("totalFixed",totalFixed)
        settotalfixed(totalFixed);
        // contextType.FixedExpense.totalFixed = totalFixed
        setfixedProp({...fixedProp,taxes:tax?tax.toFixed(2):0,totalfixed:totalFixed?totalFixed.toFixed(2):0})

    }, [contextType.FixedExpense])

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#FFFFFF"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#FFFFFF"}}>
                    <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0}  style={{height:'100%'}}>
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'102vh'}} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <h1 className={styles.heading}> Fixed Expenses (USD)</h1>
                                    </Form.Group> <Form.Group as={Col}></Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Electric ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.electric}
                                        onChange={e => setfixedProp({...fixedProp, electric: e.target.value})} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="electric" className={classes.input} type="text" value={contextType.FixedExpense.electric}
                                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />

                                        <Form.Label>Water and Sewer ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.waterSewer}
                                        onChange={e => setfixedProp({...fixedProp, waterSewer: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="waterSewer" className={classes.input} type="text" value={contextType.FixedExpense.waterSewer}
                                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />

                                        <Form.Label>HOA ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.HOA}
                                        onChange={e => setfixedProp({...fixedProp, HOA: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="HOA" className={classes.input} type="text" value={contextType.FixedExpense.HOA}
                                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />
                                                        
                                        <Form.Label> Insurance ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.insurance}
                                        onChange={e => setfixedProp({...fixedProp, insurance: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="insurance" className={classes.input} type="text" value={contextType.FixedExpense.insurance}
                                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />

                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>PMI ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.PMI}
                                        onChange={e => setfixedProp({...fixedProp, PMI: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="PMI" className={classes.input} type="text" value={contextType.FixedExpense.PMI}
                                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />
                                                                
                                        <Form.Label>Garbage ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.garbage}
                                        onChange={e => setfixedProp({...fixedProp, garbage: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="garbage" className={classes.input} type="text" value={contextType.FixedExpense.garbage}
                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />

                                        <Form.Label> Monthly Taxes  ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.taxes}
                                        onChange={e => setfixedProp({...fixedProp, taxes: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="taxes" className={classes.input} type="text" value={contextType.FixedExpense.taxes}
                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />

                                        <Form.Label>Others ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={fixedProp.others}
                                        onChange={e => setfixedProp({...fixedProp, others: e.target.value})}  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="others" className={classes.input} type="text" value={contextType.FixedExpense.others}
                                            onChange={(e) => contextType.handleChange(e, 'FixedExpense')} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>Total ($)</Form.Label>
                                        {/* <Form.Control className={classes.inputtwo} type="text" 
                                        value={totalfixed}
                                        placeholder=" 0 0 0 0 0"  /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="totalfixed" className={classes.inputtwo} type="text" value={totalfixed}
                                            // onChange={(e) => contextType.handleChange(e, 'FixedExpense')} 
                                            />
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

export default FixedExpenses;





