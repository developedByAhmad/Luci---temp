import React, { useState, useEffect,useContext } from 'react'
import styles from './newrenovationtab.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { makeStyles } from "@material-ui/core/styles";
import { Form, Col } from 'react-bootstrap';
import FormControl from "@material-ui/core/FormControl";
import { FormGroup, Grid } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";



const useStylesOne = makeStyles((theme) => ({
  quantityRoot: {
    color: "#ffffff",
    backgroundColor: "rgba(128, 0, 128, 0.1)",
    paddingTop: "0px",
    //   opacity: 0.6,
    borderRadius: "2px rgba(128, 0, 128, 0.1)",
    marginLeft: "15px",
    "&:hover": {
      paddingTop: "0px",
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
      paddingTop: "0px",
      border: "1px solid #484850"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #484850"
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      paddingTop: "0px",
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
        height:"57px",
        marginBottom:"15px"
    },

    inputtotal : {
        backgroundColor:"#e5e5e5",
        borderRadius: "15px",
        width: "94%",
        height:"57px",
        marginBottom:"15px"
    },
  

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #484850",
    borderRadius: "5px 5px 5px 5px"
  },
});



function Financing() {

  const [status, setStatus] = useState(false);

  const [renoTotal, setrenoTotal] = useState()
  const [renoTotalTwo, setrenoTotalTwo] = useState()
  const [renoProp, setRenoProp] = useState({
    noOfBeds: "",
    noOfBaths: "",
    sqFt: "",
    planningCost: "",
    ConsultingCost: "",
    exteriorCost: "",
    roofCost: "",
    waterCost: "",
    sewerCost: "",
    septicCost: "",
    electricCost: "",
    plumbingCost: "",
    interiorCost: "",
    windowsCost: "",
    kitchenCost: "",
    bathsCost: "",
    lightingCost: "",
    miscelaneousCost: ""
  });

  const otherWay = { height: "159%" }
  // const styleOther = {position: "fixed"}
  const theme = useTheme();
  const classes = useStyles({ theme });
  const classesOne = useStylesOne();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  
  const contextType = useContext(ContextApi)
  
  useEffect(() => {
    function sum(obj) {
      var sum = 0;
      for (var el in obj) {
        //   if(obj.hasOwnProperty(el)) {
        // console.log(obj[el])
        // console.log(obj[el].substring(1) )
        sum += obj[el].substring(1).replace(/\,/g,'') == "" ? 0 : parseFloat(obj[el].substring(1).replace(/\,/g,''));
        //   }
      }
      // console.log(el)
      return sum;
    }
    const {noOfBeds, noOfBaths,sqFt,renoTotal, ...remainingObject} = contextType.Renovation;
    const  {  offerPrice } = contextType.Purchase;

    const PercentOfPurchase= offerPrice&&renoTotal?( renoTotal / offerPrice.substring(1).replace(/\,/g,'')):0;

    console.log(PercentOfPurchase);




    // console.log(remainingObject);      
    var summed = sum(remainingObject);
    // console.log(contextType.Renovation);
    setrenoTotal(summed)
    contextType.Renovation.renoTotal=summed;
    // console.log(contextType.Renovation.renoTotal);
    


      // console.log( "sum: ",summed );
      // console.log(contextType.Renovation);


    // let arr=Object.keys(renoProp);
    // console.log(renoProp.ConsultingCost)
    // let sum="0";
    // arr.map(element=>{
    //     sum=renoProp.element+sum;  
    //     console.log("Elwmwnt",element)

    // })
    // console.log("Sum",sum)

    // setrenoTotal(noOfBaths + sqFt)

  },[contextType.Renovation]);


  return (
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" style={{ backgroundColor: "#e5e5e5" }}>
      <Grid item>
        <Header />
      </Grid>

      <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#e5e5e5" }}>
        <Grid item container xl={11} lg={11} md={10} sm={12} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
          <SidebarContext>
            <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} >
              <SidebarComponent style={otherWay} />
            </Grid>
            <Grid item xl={9} lg={9} md={11} sm={12} xs={12} style={{ height: "165vh" }} >
              <Form className={classes.margins}>
                <Form.Row>
                  <h1 className={styles.heading}> Renovation </h1>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} style={{ display: "inline-flex" }} >

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
                        defaultValue={false}
                        MenuProps={{ classesOne: { paper: classesOne.selectPaper } }}>
                        <MenuItem value={true}>Yes</MenuItem>
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
                        {/* <Form.Control className={classes.input}
                                        type="number"
                                        value={renoProp.noOfBeds} 
                                        onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="noOfBeds" className={classes.input} type="number" value={contextType.Renovation.noOfBeds}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Number of Baths</Form.Label>
                        {/* <Form.Control className={classes.input}
                                      type="number"
                                      value={renoProp.noOfBeds} 
                                      onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="noOfBaths" className={classes.input} type="number" value={contextType.Renovation.noOfBaths}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Sq . ft</Form.Label>
                        {/* <Form.Control className={classes.input}
                                      type="number"
                                      value={renoProp.noOfBeds} 
                                      onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="sqFt" className={classes.input} type="number" value={contextType.Renovation.sqFt}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col}>
                        {/* <Form.Label>Number of Beds</Form.Label>
                                            <Form.Control className={classes.input}
                                            type="number"
                                            value={renoProp.noOfBeds} 
                                            onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} />

                                            <Form.Label> Sq. Ft.</Form.Label>
                                            <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.sqFt} 
                                            onChange={e => setRenoProp({ ...renoProp, sqFt: e.target.value})} /> */}

                        <Form.Label>Consulting ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            type="number"
                                            value={renoProp.ConsultingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, ConsultingCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} 
                          name="ConsultingCost" 
                          className={classes.input}
                          value={contextType.Renovation.ConsultingCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Roof ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.roofCost} 
                                            onChange={e => setRenoProp({ ...renoProp, roofCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} 
                          name="roofCost" 
                          className={classes.input}  
                          value={contextType.Renovation.roofCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Sewer ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.sewerCost} 
                                            onChange={e => setRenoProp({ ...renoProp, sewerCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="sewerCost" className={classes.input}  value={contextType.Renovation.sewerCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Electric ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.electricCost} 
                                            onChange={e => setRenoProp({ ...renoProp, electricCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="electricCost" className={classes.input}  value={contextType.Renovation.electricCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Plumbing ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.plumbingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, plumbingCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="plumbingCost" className={classes.input}  value={contextType.Renovation.plumbingCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label> Interior ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                             
                                            value={renoProp.interiorCost} 
                                            onChange={e => setRenoProp({ ...renoProp, interiorCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="interiorCost" className={classes.input}  value={contextType.Renovation.interiorCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Kitchen ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.kitchenCost} 
                                            onChange={e => setRenoProp({ ...renoProp, kitchenCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="kitchenCost" className={classes.input}  value={contextType.Renovation.kitchenCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Lighting ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.lightingCost} 
                                            onChange={e => setRenoProp({ ...renoProp, lightingCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="lightingCost" className={classes.input}  value={contextType.Renovation.lightingCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <FormGroup>
                        {/* <Form.Label> Number of Baths</Form.Label>
                       
                       <Form.Control className={classes.input}
                          
                          value={renoProp.noOfBaths}
                          onChange={e => setRenoProp({ ...renoProp, noOfBaths: e.target.value })} /> */}

                         {/*  <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="noOfBaths" className={classes.input}  value={contextType.Renovation.noOfBaths}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} /> */}

                        <Form.Label>Planning ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.planningCost} 
                                            onChange={e => setRenoProp({ ...renoProp, planningCost: e.target.value})} /> */}
                          <NumberFormat  
                          
                          customInput={Form.Control}

                          // value={45454545}
                          onChange={(e) =>{ 
                            contextType.handleChange(e, 'Renovation')
                          }}
                             
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="planningCost" className={classes.input}  
                          // onChange={(e) =>{ 
                          //   console.log("Planning",e.target.value)
                          //   contextType.handleChange(e, 'Renovation')}}
                             />

                        <Form.Label> Exterior ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                            
                                            
                                            value={renoProp.exteriorCost} 
                                            onChange={e => setRenoProp({ ...renoProp, exteriorCost: e.target.value})}/> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="exteriorCost" className={classes.input}  value={contextType.Renovation.exteriorCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Water ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                         
                                            
                                            value={renoProp.waterCost} 
                                            onChange={e => setRenoProp({ ...renoProp, waterCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="waterCost" className={classes.input}  value={contextType.Renovation.waterCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Septic ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.septicCost} 
                                            onChange={e => setRenoProp({ ...renoProp, septicCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="septicCost" className={classes.input}  value={contextType.Renovation.septicCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Windows ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.windowsCost} 
                                            onChange={e => setRenoProp({ ...renoProp, windowsCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="windowsCost" className={classes.input}  value={contextType.Renovation.windowsCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Baths ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.bathsCost} 
                                            onChange={e => setRenoProp({ ...renoProp, bathsCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="bathsCost" className={classes.input}  value={contextType.Renovation.bathsCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        <Form.Label>Miscelaneous ($)</Form.Label>
                        {/* <Form.Control className={classes.input}                                             
                                            
                                            value={renoProp.miscelaneousCost} 
                                            onChange={e => setRenoProp({ ...renoProp, miscelaneousCost: e.target.value})} /> */}
                          <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="miscelaneousCost" className={classes.input}  value={contextType.Renovation.miscelaneousCost}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />

                        </FormGroup>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Total ($)</Form.Label>
                        <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} className={classes.inputtotal}
                          
                          value={renoTotal}
                        // onChange={e => setrenoTotal({ ...renoProp, renoTotal: e.target.value})} 
                        />
                      </Form.Group>
                    </Form.Row>
                  </>
                  :
                  <>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Number of Beds </Form.Label>
                        {/* <Form.Control className={classes.input}
                                        type="number"
                                        value={renoProp.noOfBeds} 
                                        onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="noOfBeds" className={classes.input} type="number" value={contextType.Renovation.noOfBeds}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Number of Baths</Form.Label>
                        {/* <Form.Control className={classes.input}
                                      type="number"
                                      value={renoProp.noOfBeds} 
                                      onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="noOfBaths" className={classes.input} type="number" value={contextType.Renovation.noOfBaths}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Sq . ft</Form.Label>
                        {/* <Form.Control className={classes.input}
                                      type="number"
                                      value={renoProp.noOfBeds} 
                                      onChange={e => setRenoProp({ ...renoProp, noOfBeds: e.target.value})} /> */}
                        <Form.Control name="sqFt" className={classes.input} type="number" value={contextType.Renovation.sqFt}
                          onChange={(e) => contextType.handleChange(e, 'Renovation')} />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label> Total </Form.Label>
                        {/* <Form.Control className={classes.inputtotal}
                          type="number"
                          value={renoTotalTwo}
                        // onChange={e => setRenoProp({ ...renoProp, renoTotal: e.target.value})} 
                        /> */}
                         <NumberFormat  
                          customInput={Form.Control} 
                          thousandSeparator={true} 
                          prefix={'$'} suffix={".00"} 
                          displayType={'number'}
                          allowNegative={false} name="renoTotalTwo" className={classes.inputtotal} type="number" value={renoTotal}
                          />
                      </Form.Group>
                    </Form.Row>
                  </>
                }
              </Form>
            </Grid>
          </SidebarContext>
        </Grid>
      </Grid>

      <Grid item xl={12}>
        {/* <Footer style={styleOther} /> */}
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Financing;
