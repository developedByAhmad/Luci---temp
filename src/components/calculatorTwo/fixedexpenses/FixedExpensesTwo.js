import React, {useState, useEffect} from 'react';
import styles from './fixedexpenses.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
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
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function FixedExpensesTwo (){
    const otherWay = {height:"100%"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [fixedProp, setfixedProp] = useState({
        electric:"",
        waterSewer: "",
        PMI: "",
        garbage: "",
        HOA: "",
        taxes: "",
        insurance: "",
        others: ""
    });

    const [totalfixed, settotalfixed] = useState();

    useEffect(() => {
        const sum = obj => {
            var sum = 0
            for(var el in obj){
                sum += obj[el]==""?0:parseFloat(obj[el]);
            }
            return sum; 
        }
        
        var summed = sum(fixedProp);
        settotalfixed(summed)

    }, [fixedProp])

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#FFFFFF"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#FFFFFF"}}>
                    <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0}  style={{height:'100%'}}>
                            <SidebarTwoComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'100vh'}} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <h1 className={styles.heading}> Fixed Expenses (USD)</h1>
                                    </Form.Group> <Form.Group as={Col}></Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Electric</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.electric}
                                        onChange={e => setfixedProp({...fixedProp, electric: e.target.value})} />

                                        <Form.Label>Water and Sewer</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.waterSewer}
                                        onChange={e => setfixedProp({...fixedProp, waterSewer: e.target.value})}  />

                                        <Form.Label>HOA</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.HOA}
                                        onChange={e => setfixedProp({...fixedProp, HOA: e.target.value})}  />
                                                        
                                        <Form.Label> Insurance</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.insurance}
                                        onChange={e => setfixedProp({...fixedProp, insurance: e.target.value})}  />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>PMI</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.PMI}
                                        onChange={e => setfixedProp({...fixedProp, PMI: e.target.value})}  />
                                                                
                                        <Form.Label>Garbage</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.garbage}
                                        onChange={e => setfixedProp({...fixedProp, garbage: e.target.value})}  />

                                        <Form.Label> Monthly Taxes </Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.taxes}
                                        onChange={e => setfixedProp({...fixedProp, taxes: e.target.value})}  />

                                        <Form.Label>Others</Form.Label>
                                        <Form.Control className={classes.input} type="text" value={fixedProp.others}
                                        onChange={e => setfixedProp({...fixedProp, others: e.target.value})}  />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control className={classes.inputtwo} type="text" 
                                        value={totalfixed}
                                        placeholder=" 0 0 0 0 0"  />
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

export default FixedExpensesTwo;





