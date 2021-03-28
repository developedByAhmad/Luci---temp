import React, { useState, useEffect} from 'react'
import styles from './renovation.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {Form, Col, FormGroup} from 'react-bootstrap';


const useStylesOne = makeStyles((theme) => ({
    quantityRoot: {
      color: "#ffffff",
      backgroundColor: "rgba(128, 0, 128, 0.1)",
      paddingTop: "4px",
    //   opacity: 0.6,
      borderRadius: "2px rgba(128, 0, 128, 0.1)",
      marginLeft : "15px",
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
    icon : {
      color: "#4B176A"
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
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height:"47px",
        marginBottom:"17px"
    },
    inputtotal : {
        backgroundColor:"#e5e5e5",
        borderRadius: "15px",
        width: "94%",
        height:"57px",
        marginBottom:"15px"
    },
    inputtwo:{
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "100%",
        height:"47px",
        marginBottom:"15px"
    },

    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function Renovation (){
    const otherWay = {height:"158%"}
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
    const classesOne = useStylesOne();

    const [status, setStatus] = useState(true);
    const [renoPropGen, setrenoPropGen] = useState({
        noOfBeds:"",
        noOfBaths:"",
        sqFt:""
    });

    const [renoPropCal, setrenoPropCal] = useState({
        planning:"",
        consulting:"",
        exterior:"",
        roof:"",
        water:"",
        sewer:"",
        septic:"",
        electric:"",
        plumbing:"",
        interior:"",
        windows:"",
        kitchen:"",
        bath:"",
        lighting:"",
        miscelaneous:""
    });

    const [renoTotal, setrenoTotal] = useState();
    const [renoTotalTwo, setrenoTotalTwo] = useState();

    const handleChange = (event) => {
        setStatus(event.target.value);
      };

    useEffect(() => {
        const sum = obj => {
            let sum = 0;
            for(var el in obj){
                sum += obj[el]==""?0:parseFloat(obj[el])
            }
            return sum
            
        }

        var summed = sum(renoPropCal)
        setrenoTotal(summed)
        
    }, [renoPropCal])

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

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'160vh'}} >
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                            <h1 className={styles.heading}> Itemize The Renre Budget : </h1>
                                        </Form.Group>  <Form.Group as={Col}></Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} style={{display:"inline-flex"}} > 
                                                 
                                            {/* <Form.Label >Itemize</Form.Label>
                                                <Select
                                                value={status}
                                                onChange={handleChange}
                                                // className={classes.inputone}
                                                className = {classesOne.selectRoot}
                                                classesOne={{
                                                    root: classesOne.selectRoot,
                                                    icon: classesOne.icon
                                                  }}
                                                >
                                                <MenuItem  value={true}>Yes</MenuItem>
                                                <MenuItem value={false}>No</MenuItem>
                                                </Select> */}
                                                <Form.Label >Itemize</Form.Label>
                                                <FormControl
                                                        variant="outlined"
                                                        className={classesOne.quantityRoot}
                                                    >
                                                        <Select
                                                            onChange={handleChange}
                                                            className={classesOne.selectRoot, classesOne.icon}
                                                            defaultValue = {true}
                                                        MenuProps={{ classesOne: { paper: classesOne.selectPaper } }}>
                                                            <MenuItem  value={true}>Yes</MenuItem>
                                                            <MenuItem value={false}>No</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                        </Form.Group> <Form.Group as={Col}></Form.Group>
                                    </Form.Row>
                                    {status ? 
                                    <>  
                                    <Form.Row>
                                    <Form.Group as={Col}>
                                    <Form.Label>Number of Beds </Form.Label>
                                        <Form.Control className={classes.input}
                                        type="number"
                                        value={renoPropCal.noOfBeds} 
                                        onChange={e => setrenoPropCal({ ...renoPropCal, noOfBeds: e.target.value})} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                    <Form.Label>Number of Baths</Form.Label>
                                      <Form.Control className={classes.input}
                                      type="number"
                                      value={renoPropCal.noOfBeds} 
                                      onChange={e => setrenoPropCal({ ...renoPropCal, noOfBeds: e.target.value})} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                    <Form.Label>Sq . ft</Form.Label>
                                      <Form.Control className={classes.input}
                                      type="number"
                                      value={renoPropCal.noOfBeds} 
                                      onChange={e => setrenoPropCal({ ...renoPropCal, noOfBeds: e.target.value})} />
                                    </Form.Group>
                                </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            {/* <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}
                                            type="number"
                                            value={renoPropGen.noOfBeds} 
                                            onChange={e => setrenoPropGen({ ...renoPropGen, noOfBeds: e.target.value})} />

                                            <Form.Label> Sq. Ft.</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropGen.sqFt} 
                                            onChange={e => setrenoPropGen({ ...renoPropGen, sqFt: e.target.value})} /> */}

                                            <Form.Label>Consulting ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.ConsultingCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, ConsultingCost: e.target.value})} />

                                            <Form.Label>Roof ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.roofCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, roofCost: e.target.value})} />

                                            <Form.Label>Sewer ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.sewerCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, sewerCost: e.target.value})} />

                                            <Form.Label>Electric ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.electricCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, electricCost: e.target.value})} />

                                            <Form.Label> Interior ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.interiorCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, interiorCost: e.target.value})} />

                                            <Form.Label>Kitchen ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.kitchenCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, kitchenCost: e.target.value})} />

                                            <Form.Label>Lighting ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.lightingCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, lightingCost: e.target.value})} />
                                            
                                            <Form.Label>Miscelaneous ($)</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.miscelaneousCost} 
                                            onChange={e => setrenoPropCal({ ...renoPropCal, miscelaneousCost: e.target.value})} />  
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <FormGroup>
                                                {/* <Form.Label> Number of Baths</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropGen.noOfBaths} 
                                                onChange={e => setrenoPropGen({ ...renoPropGen, noOfBaths: e.target.value})} /> */}

                                                <Form.Label>Planning ($)</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropCal.planningCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, planningCost: e.target.value})} />

                                                <Form.Label> Exterior ($)</Form.Label>
                                                <Form.Control className={classes.input}                                            
                                                type="number"
                                                value={renoPropCal.exteriorCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, exteriorCost: e.target.value})}/>

                                                <Form.Label>Water ($)</Form.Label>
                                                <Form.Control className={classes.input}                                         
                                                type="number"
                                                value={renoPropCal.waterCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, waterCost: e.target.value})} />

                                                <Form.Label>Septic ($)</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropCal.septicCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, septicCost: e.target.value})} />

                                                <Form.Label>Plumbing ($)</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropCal.plumbingCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, plumbingCost: e.target.value})} />

                                                <Form.Label>Windows ($)</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropCal.windowsCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, windowsCost: e.target.value})} />

                                                <Form.Label>Baths ($)</Form.Label>
                                                <Form.Control className={classes.input}                                             
                                                type="number"
                                                value={renoPropCal.bathsCost} 
                                                onChange={e => setrenoPropCal({ ...renoPropCal, bathsCost: e.target.value})} />

     
                                            </FormGroup>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                        <Form.Label>Total</Form.Label>
                                            <Form.Control className={classes.inputtotal} placeholder=" 0 0 0 0 0"
                                            value={renoTotal}   type="text" /> 
                                        </Form.Group>
                                    </Form.Row>
                                    </>
                                    :
                                    <>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.noOfBeds} 
                                            onChange={e => setrenoPropCal({...renoPropCal, noOfBeds: e.target.value})} />

                                            <Form.Label> Sq. Ft.</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.sqFt} 
                                            onChange={e => setrenoPropCal({...renoPropCal, sqFt: e.target.value})} />

                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Number of Baths</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoPropCal.noOfBaths} 
                                            onChange={e => setrenoPropCal({...renoPropCal, noOfBaths: e.target.value})} />

                                        </Form.Group>
                                    </Form.Row>
                                       <Form.Row>
                                       <Form.Group as={Col}>
                                       <Form.Label>Total</Form.Label>
                                            <Form.Control className={classes.inputtotal} placeholder=" 0 0 0 0 0"
                                            value={renoTotalTwo}   type="text" />
                                       </Form.Group>
                                   </Form.Row>
                                   </>}
                        </Form>
                    </Grid>

                    </SidebarContext>
                </Grid>
            </Grid>
            

                <Grid item xl={12}>
                    <Footer  />
                </Grid>
            </Grid>
            
 

        )
    
}

export default Renovation;





