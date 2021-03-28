import React, { Component } from 'react'
import styles from './income.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "60%",
        height:"57px",
        marginBottom:"15px"
    },

    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "60%",
        height:"57px",
        marginBottom:"15px"
    },
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function IncomeTwo (){
    const otherWay = {height:"98%"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });

    
//     const [totalIncome, setTotalIncome] = useState();

//     useEffect(() => {
//         function sum( obj ) {
//             var sum = 0 ;
//             for(var el in obj) {
//                 sum += obj[el]==""?0:parseFloat(obj[el]);
//             }
//             return sum;
//           }

//           var summed = sum(incomeProp);
//           setTotalIncome(summed)
   
//       }, [incomeProp]);

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
                        </SidebarContext>

                            <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'100vh'}} >
                                <Form className={classes.margins}>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                                <Form.Label>Number Of Units</Form.Label>
                                                <Form.Control className={classes.input} type="text" />
                                            
                                                <Form.Label>Total Monthly Rent Income ($)</Form.Label>
                                                <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0"/>

                                                <Form.Label>Total Monthly Income ($)</Form.Label>
                                                <Form.Control className={classes.input} type="number" placeholder=" 0 0 0 0 0" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <FormGroup>
                                                <Form.Label>Average Rent per Unit ($)</Form.Label>
                                                <Form.Control className={classes.input} type="number" />

                                                <Form.Label>Other Monthly Income ($)</Form.Label>
                                                <Form.Control className={classes.input} type="number" />
                                            </FormGroup>   
                                        </Form.Group>   
                                    </Form.Row>
                                </Form>
                            </Grid>
                            
                    </Grid>
                </Grid>
                
                <Grid item xl={12}>
                    <Footer />
                </Grid>
            </Grid>
        )
}

export default IncomeTwo;








