import React, { useState, useEffect,useContext } from 'react'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col, FormGroup, Button } from 'react-bootstrap';
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './variableexpenses.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { makeStyles } from "@material-ui/core/styles";
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";


const useStylesOne = makeStyles((theme) => ({
    quantityRoot: {
      color: "#ffffff",
      backgroundColor: "rgba(128, 0, 128, 0.1)",
      paddingTop: "4px",
      //   opacity: 0.6,
      borderRadius: "2px rgba(128, 0, 128, 0.1)",
      marginLeft: "15px",
      "&:hover": {
        paddingTop: "4px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2px",
        opacity: 1
      },
      "&:focus-within": {
        paddingTop: "4px",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        opacity: 1
      },
      "& .MuiOutlinedInput-notchedOutline": {
        paddingTop: "4px",
        border: "1px solid #484850"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #484850"
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        paddingTop: "4px",
        border: "1px solid #484850",
        borderRadius: "5px",
        outline: "none"
      },
      "& .Mui-disabled": {
        color: "#FFFFFF",
        opacity: 0.6
      },
      "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #484850"
      }
    },
    selectRoot: {
      color: "#4B176A",
      backgroundColor: "#ffffff"
    },
    icon: {
      color: "#4B176A",
      fontSize: "23px"
    },
    selectPaper: {
      backgroundColor: "#1E1E24",
      border: "1px solid #484850",
      borderRadius: "5px",
      paddingTop: "4px",
      color: "#FFFFFF",
      "& li:hover": {
        backgroundColor: "#4B176A"
    }
}
}));


const useStyles = createUseStyles({
    input: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "86%",
        height:"57px",
        marginBottom:"17px"
    },

    inputtwo: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "94%",
        height: "57px",
        marginBottom: "15px"
    },
    margins: {
        marginTop: "10px",
        marginLeft: "15px"
    }
});



function VariableExpenses() {
    const classesOne = useStylesOne();
    const otherWay = { height: "100%" }
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
    let value = "";



    const [status, setStatus] = useState(true);

    const handleChange = (event) => {
        setStatus(event.target.value);
      };    

    const [variProp, setvariProp] = useState({
        vacancy: "",
        repairMaint: 0,
        capEx: 0,
        management: 0,
        varitotal: 0

    })
    const contextType = useContext(ContextApi)


    useEffect(() => {
        function sum(obj) {
            var sum = 0;
            for (var el in obj) {
              //   if(obj.hasOwnProperty(el)) {
              console.log(obj[el])
              sum += obj[el].replace(/\,/g,'') == "" ? 0 : parseFloat(obj[el].replace(/\,/g,''));
              //   }
            }
            return sum;
          }
        // const { totalIncome } = contextType.Income;
        const { totalVariable, ...sumAll } = contextType.VariableExpense;
        console.log(sumAll);
        
        var summed = sum(sumAll);
        console.log(summed);

        setvariProp({varitotal:summed})



        // const vacancyInAmount = (totalIncome * vacancy) / 100;
        // const repairMaintInAmount = (totalIncome * repairMaint) / 100;
        // const capExInAmount = (totalIncome * capEx) / 100;
        // const managementInAmount = (totalIncome * management) / 100;

        // setvariProp({
        //     vacancy: vacancyInAmount?vacancyInAmount:"",
        //     repairMaint: repairMaintInAmount,
        //     capEx: capExInAmount,
        //     management: managementInAmount
        // });

        // const vacancyInPercent=(vacancy/totalIncome)*100;
        // const repairMaintInPercent=(repairMaint/totalIncome)*100;
        // const capExInPercent=(capEx/totalIncome)*100;
        // const managementInPercent=(management/totalIncome)*100;
        // setvariProp({
        //     vacancy: vacancyInPercent?vacancyInPercent:"",
        //     // repairMaint: repairMaintInPercent,
        //     // capEx: capExInPercent,
        //     // management: managementInPercent
        // });
        


        // console.log("vacancyInAmount", vacancyInAmount);
        // console.log("repairMaintInAmount", repairMaintInAmount);

        // console.log("vacancyInPercent",vacancyInPercent);

        contextType.VariableExpense.totalVariable=variProp.varitotal;




    }, [contextType.VariableExpense])


    if(status){
        value = "%"
    }else{
        value = "$"
    }

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
                                    <Form.Group as={Col} style={{ display: "inline-flex" }} >
                                        <Form.Label >Itemize</Form.Label>
                                        <FormControl
                                        variant="outlined"
                                        className={classesOne.quantityRoot}>
                                        <Select
                                            onChange={handleChange}
                                            className={classesOne.selectRoot, classesOne.icon}
                                            defaultValue={true}
                                            MenuProps={{ classesOne: { paper: classesOne.selectPaper } }}>
                                            <MenuItem value={true}>%</MenuItem>
                                            <MenuItem value={false}>$</MenuItem>
                                        </Select>
                                        </FormControl>

                                    </Form.Group> <Form.Group as={Col}></Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Vacancy {value}</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={variProp.vacancy}
                                            onChange={e => setvariProp({ ...variProp, vacancy: e.target.value })} /> */}
                                        

                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        // prefix={value} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="vacancy" className={classes.input} type="text" value={contextType.VariableExpense.vacancy}
                                            onChange={(e) => contextType.handleChange(e, 'VariableExpense')} />

                                        <Form.Label> Repair/Maint {value}</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={variProp.repairMaint}
                                            onChange={e => setvariProp({ ...variProp, repairMaint: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="repairMaint" className={classes.input} type="text" value={contextType.VariableExpense.repairMaint}
                                            onChange={(e) => contextType.handleChange(e, 'VariableExpense')} />

                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Cap. Ex {value}</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text" value={variProp.capEx}
                                            onChange={e => setvariProp({ ...variProp, capEx: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="capEx" className={classes.input} type="text" value={contextType.VariableExpense.capEx}
                                            onChange={(e) => contextType.handleChange(e, 'VariableExpense')} />

                                        <Form.Label>Management Fee %</Form.Label>    
                                        {/* <Form.Control className={classes.input} type="text" value={variProp.management}
                                            onChange={e => setvariProp({ ...variProp, management: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="management" className={classes.input} type="text" value={contextType.VariableExpense.management}
                                            onChange={(e) => contextType.handleChange(e, 'VariableExpense')} />
                                    </Form.Group>

                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>Total {value}</Form.Label>
                                        {/* <Form.Control className={classes.inputtwo} type="text" placeholder=" 0 0 0 0 0" value={varitotal} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'}
                                        allowNegative={false} name="varitotal" className={classes.inputtwo} type="text" placeholder=" 0 0 0 0 0" value={variProp.varitotal}/>
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

export default VariableExpenses;





