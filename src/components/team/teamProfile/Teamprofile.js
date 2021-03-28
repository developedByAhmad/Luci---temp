import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {Table} from 'react-bootstrap';
import styles from './teamprofile.module.css';
import HeaderTwo from './../../header2/HeaderTwo';
import Footer from './../../footer/Footer';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {FontIcon} from "@material-ui/core"
import './teamprofile.css'
import { Grid } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        root: {
              textAlign: "right",
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#4B176A"
              }
          },
        // Name of the rule
        text: {
          // Some CSS
          color: "#4B176A",
          backgroundColor: "#ffffff",
          textTransform: 'none',
          fontSize: "16px",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "5px" 
        },
      },
    },
  });

  const underContract = [
      {val:'LTR', property: "Property 01", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
      {val:'F&F', property: "Property 02", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
      {val:'LTR', property: "Property 022", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
      {val:'F&F', property: "Property 11", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
      {val:'LTR', property: "Property 05", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
      {val:'F&F', property: "Property 07", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
  ]
  
  const submittedOffer = [
    {val:'F&',property: "Property 01", strategy: "Vender 1", listedPrice: 15, offerPrice: 15, renoEst: 15, cashToClose: 400, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'LT',property: "Property 02", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F&',property: "Property 022", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'LT',property: "Property 11", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F&',property: "Property 05", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'LT', property: "Property 07", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
]
  
  const analyzedProperty = [
    {val:'L', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'L', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'L', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
]

  
// const headersOne = ["Property","Strategy", "Price", "PRole", "actRole", "action"]
const Teamprofile = () => {

    const [anchor1, setAnchor1] = React.useState(null);
    const [anchor2, setAnchor2] = React.useState(null);
    const [anchor3, setAnchor3] = React.useState(null);


    const [underTable, setunderTable] = useState([
        {val:'LTR', property: "Property 01", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 02", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LTR', property: "Property 022", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 11", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LTR', property: "Property 05", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 07", strategy: "Vender 1", closingDate: 400, dueDiligencePeriod: 15, closingPrice: 15, renovationEst: 15, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
    ])

    const [submitTable, setsubmitTable] = useState( [
        {val:'F&',property: "Property 01", strategy: "Vender 1", listedPrice: 15, offerPrice: 15, renoEst: 15, cashToClose: 400, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LT',property: "Property 02", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&',property: "Property 022", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LT',property: "Property 11", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&',property: "Property 05", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LT', property: "Property 07", strategy: "Vender 1", listedPrice: 400, offerPrice: 15, renoEst: 15, cashToClose: 15, modeledNoi: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
    ])


    const [analyzeTable, setanalyzeTable] = useState([
        {val:'L', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'L', property: "Property 01", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F', property: "Property 11", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'L', property: "Property 21", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F', property: "Property 31", strategy: "Vender 1", closingDate: 15, dueDilligence: 15, closingPrice: 15, renoEst: 400, cashToClose: 15, modeledCash: 15, modeledRoi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>}
    ])



    const handleClick = (event) => {
      setAnchor1(event.currentTarget);
    };
    const handleClickSubmit = (event) => {
        setAnchor2(event.currentTarget);
    };


    const handleClickAnalyze = (event) => {
    setAnchor3(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchor1(null);
    };
    const handleCloseSubmit = (event) => {
        setAnchor2(null);
    };


    const handleCloseAnalyze = (event) => {
    setAnchor3(null);
    };
  
    // const handleClose = (value) => {
    //   setAnchorEl(null);
    //   console.log("Analyzed Button Clicked")
    //   setanalyzeTable(() =>{
    //       let newData = analyzedProperty.filter(d => d.val === value)
    //       return newData
    //   })
    // };

    const handleMenuSelection = (value) => {

      if(value === "L" || value === "F")
      {
        setAnchor3(null);
        console.log("Analyzed Button Clicked")
          setanalyzeTable(() =>{
              let newData = analyzedProperty.filter(d => d.val === value)
              return newData
          })}
    if(value === "LT" || value === "F&")
     {
        setAnchor2(null);
        console.log("Submit Button Clicked")
          setsubmitTable(() =>{
          let newData = submittedOffer.filter(d => d.val === value)
          return newData
      })}
      if(value === "LTR" || value === "F&F")
      {
         setAnchor1(null);
         console.log("Under Button Clicked")
           setunderTable(() =>{
           let newData = underContract.filter(d => d.val === value)
           return newData
       })}
    };

    const handleCloseUnder = (value) => {
    //   console.log("Under Contract Button Clicked")
    //   setAnchorEl(null);
    //   setunderTable(() =>{
    //       let newData = underContract.filter(d => d.val === value)
    //       return newData
    //   })
    };



    const renderUnderContract = (underContract, index) =>{
        return(
            <Tr key={index}>
                <Td>{underContract.property}</Td>
                <Td>{underContract.strategy}</Td>
                <Td>{underContract.closingData}</Td>
                <Td>{underContract.dueDiligencePeriod}</Td>
                <Td>{underContract.closingPrice}</Td>
                <Td>{underContract.renovationEst}</Td>
                <Td>{underContract.cashToClose}</Td>
                <Td>{underContract.modeledCash}</Td>
                <Td>{underContract.modeledRoi}</Td>
                <Td>{underContract.action}</Td>
            </Tr>
    )
}


    const renderSubmitOffer = (submittedOffer, index) =>{
        return(
            <Tr key={index}>
                <Td>{submittedOffer.property}</Td>
                <Td>{submittedOffer.strategy}</Td>
                <Td>{submittedOffer.listedPrice}</Td>
                <Td>{submittedOffer.offerPrice}</Td>
                <Td>{submittedOffer.renoEst}</Td>
                <Td>{submittedOffer.cashToClose}</Td>
                <Td>{submittedOffer.modeledNoi}</Td>
                <Td>{submittedOffer.modeledCash}</Td>
                <Td>{submittedOffer.modeledRoi}</Td>
                <Td>{submittedOffer.action}</Td>
            </Tr>
        )
    }

    const renderAnalyzedProperty = (analyzedProperty, index) =>{
        return(
            <Tr key={index}>
                <Td>{analyzedProperty.property}</Td>
                <Td>{analyzedProperty.strategy}</Td>
                <Td>{analyzedProperty.closingDate}</Td>
                <Td>{analyzedProperty.dueDilligence}</Td>
                <Td>{analyzedProperty.closingPrice}</Td>
                <Td>{analyzedProperty.renoEst}</Td>
                <Td>{analyzedProperty.cashToClose}</Td>
                <Td>{analyzedProperty.modeledCash}</Td>
                <Td>{analyzedProperty.modeledRoi}</Td>
                <Td>{analyzedProperty.action}</Td>
            </Tr>
    )
}

    return (
        <>
        <HeaderTwo />
        <Grid style={{backgroundColor:"#FFFFFF", paddingBottom:"40px"}} xl={12} lg={12} md={12} sm={12} xs={12} spacing={3}  alignItems="center" container direction="column">
            <Grid item container xl={11} lg={11}  direction="row" spacing={2} >
                {/* <Grid item xs={8} style={{paddingRight: "100px"}}> 
                    <h1 className={styles.heading} > Active Portfolio </h1>
                </Grid> */}
                {/* <Grid item className={styles.heading} xs={4}> 
                   
                    <ThemeProvider theme={theme}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            New Analysis
                        </Button>
                        <Menu   
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><Link to="/property">LTR</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/propertytwo">F&F</Link></MenuItem>
                        </Menu>
                    </ThemeProvider>
                        
                </Grid> */}

                {/* <Grid item>
                    <Table hover style={{borderRadius:"15px"}} >
                            <Thead  className={styles.tableH1}>
                                <Tr>
                                    <Th>Property</Th>
                                    <Th>Strategy</Th>
                                    <Th>Purchase Date</Th>
                                    <Th>Holding Period</Th>
                                    <Th>Purchase Price</Th>
                                    <Th>Initial NOI</Th>
                                    <Th>Initial NIAF</Th>
                                    <Th>Cash on Cash Return</Th>
                                    <Th>ROI</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white"}}>
                                {employeeProperty.map(renderEmployee)}
                            </Tbody>
                        </Table>
                </Grid> */}
            </Grid>

            {/* <Grid item> 
                <h1 className={styles.heading} style={{marginTop:"30px"}}> In The Pipeline </h1>
            </Grid> */}


                <Grid item container xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Grid item xs={8} style={{paddingRight: "100px"}}> 
                        <h1 className={styles.heading} > Analyzed Property </h1>
                    </Grid>
                    <Grid item className={styles.heading} xs={4}> 
                        {/* <h1 className={styles.heading} > New Analysis </h1> */}
                        {/* <div> */}
                        <ThemeProvider theme={theme}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Analyze
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchor1}
                                
                                open={Boolean(anchor1)}
                                onClose={handleClose}
                            >
                                {/*  For the sake of revision <MenuItem onClick={(e)=>handleClose(e,"LTR")} value={"LTR"}>LTR</MenuItem> */}
                                <MenuItem onClick={() =>{handleMenuSelection("L")} } value={"L"}>LTR</MenuItem>
                                <MenuItem onClick={()=>  {handleMenuSelection("F")}} value={"F"}>F&F</MenuItem>
                            </Menu>
                        </ThemeProvider>
                            
                        {/* </div> */}
                    </Grid>

                    <Grid item>
                        {/* <caption className={styles.caption} style={{captionSide:"top"}}> Analyzed Property </caption> */}
                        <Table hover style={{borderRadius:"15px"}}>
                            <Thead>
                                <Tr className={styles.tableH1}>
                                    <Th>Property</Th>
                                    <Th>Strategy</Th>
                                    <Th>Offer Price</Th>
                                    <Th>Renovation Estimate</Th>
                                    <Th>Cash to Close</Th>
                                    <Th>Estimated After Repair Value</Th>
                                    <Th>Modeled NOI</Th>
                                    <Th>Modeled Cash on Cash Return</Th>
                                    <Th>Modeled ROI</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white", paddingRight: "10px"}}>
                                {analyzeTable.map(renderAnalyzedProperty)}
                            </Tbody>
                        </Table>
                    </Grid>
                </Grid>

                <Grid item container xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Grid item xs={8} style={{paddingRight: "100px"}}> 
                        <h1 className={styles.heading} > Submitted Offer </h1>
                    </Grid>
                    <Grid item className={styles.heading} xs={4}> 
                        {/* <h1 className={styles.heading} > New Analysis </h1> */}
                        {/* <div> */}
                        <ThemeProvider theme={theme}>
                            <Button aria-controls="1simple-menu" aria-haspopup="true" onClick={handleClickSubmit}>
                                Submit
                            </Button>
                            <Menu
                                id="1simple-menu"
                                anchorEl={anchor2}
                                keepMounted
                                open={Boolean(anchor2)}
                                onClose={handleCloseSubmit}
                            >
                                <MenuItem onClick={() => {handleMenuSelection("LT")}} value={"LTR"}>LTR</MenuItem>
                                <MenuItem onClick={() => {handleMenuSelection("F&")}} value={"F&F"}>F&F</MenuItem>
                            </Menu>
                        </ThemeProvider>
                            
                        {/* </div> */}
                    </Grid>
                    <Grid item>
                        {/* <caption className={styles.caption} style={{captionSide:"top"}}>Submitted Offers</caption> */}
                        <Table hover style={{borderRadius:"15px"}}>
                            <Thead>
                                <Tr className={styles.tableH1}>
                                    <Th>Property</Th>
                                    <Th>Strategy</Th>
                                    <Th>Listed Price</Th>
                                    <Th>Offer Price</Th>
                                    <Th>Renovation Estimate</Th>
                                    <Th>Cash to Close</Th>
                                    <Th>Modeled NOI</Th>
                                    <Th>Modeled Cash on Cash Return</Th>
                                    <Th>Modeled ROI</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white", paddingRight: "10px"}}>
                                {submitTable.map(renderSubmitOffer)}
                            </Tbody>
                        </Table>
                    </Grid>
                </Grid>




            {/* <Grid item container xl={11} lg={11}   direction="row" spacing={1} alignItems="space-around" justify="flex-start">
                <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid item><caption className={styles.caption} style={{captionSide:"top"}}>Under Contract</caption> */}

                <Grid item container xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Grid item xs={8} style={{paddingRight: "100px"}}> 
                        <h1 className={styles.heading} > Under Contract </h1>
                    </Grid>
                    <Grid item className={styles.heading} xs={4}> 
                        <div>
                        <ThemeProvider theme={theme}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAnalyze}>
                                Under Contract
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchor3}
                                keepMounted
                                open={Boolean(anchor3)}
                                onClose={handleCloseUnder}
                            >
                                <MenuItem onClick={() => handleMenuSelection("LTR")} value={"LTR"}>LTR</MenuItem>
                                <MenuItem onClick={() => handleMenuSelection("F&F")} value={"F&F"}>F&F</MenuItem>
                            </Menu>
                        </ThemeProvider>
                            
                        </div>
                    </Grid>
                    <Grid item>
                        {/* <caption className={styles.caption} style={{captionSide:"top"}}>Submitted Offers</caption> */}
                        <Table hover style={{borderRadius:"15px"}}> 
                            <Thead>
                                <Tr className={styles.tableH1}>
                                    <Th>Property</Th>
                                    <Th>Staretgy </Th>
                                    <Th>Closing Date</Th>
                                    <Th>Due Dilligence Period</Th>
                                    <Th>Closing Price</Th>
                                    <Th>Renovation Estimate</Th>
                                    <Th>Cash to Close</Th>
                                    <Th>Modeled Cash on Cash Return</Th>
                                    <Th>Modeled ROI</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody style={{backgroundColor:"white"}}>
                                {underTable.map(renderUnderContract)}
                            </Tbody>
                        </Table>    
                    </Grid>
                </Grid>

             
            {/* </Grid> */}


            
            {/* <Grid item><h1 className={styles.heading} style={{marginTop:"30px"}}> Analyzed Properties </h1></Grid> */}


            {/* <Grid item container xl={11} lg={11}  direction="row" spacing={2} alignItems="space-around" justify="center" style={{backgroundColor:"#FFFFFF",borderRadius:"10px"}}> */}
                {/* <Grid item contianer xl={11} lg={11} md={10} sm={11} xs={11}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Additional Graphs </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Amortization Schedule </label>
                    <br></br>
                </Grid> */}
                {/* <Grid item contianer xl={6} lg={6} md={10} sm={11} xs={11}>
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Generate Full Proforma </label><br></br> 
                    <input className={styles.checkBox} type="checkbox" />
                    <label> Attach Loaded Images </label> 
                </Grid> */}

                {/* <Grid xl={10} lg={12} md={10} sm={11} xs={11} spacing={2} item container direction="row" justify="flez-start" > */}
                    {/* <Grid item  xl={5} lg={5} >
                        <button className="reportBtn"> Generate Report </button>
                    </Grid> */}

                    {/* <Grid item container xl={10} lg={10}>
                        <h3 className="progressTxt"> Progress(70%) </h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                70%
                            </div>
                        </div>
                    </Grid> */}
                {/* </Grid> */}

            {/* </Grid> */}


        </Grid>
        <Footer />
        </>






        // <div>
        // <HeaderTwo />

        //     <div className="container-fluid" style={{backgroundColor:"#E5E5E5"}}>
        //         <div className="row"  className={styles.firstHeading}>
        //             <h1 className={styles.heading} > Active Portfolio </h1>
        //             <h1 className={styles.heading} > New Analysis </h1>
        //         </div>

        //         <div className="wrapper">
        //             <div className="row" style={{margin:"20px 15px"}}>

        //                 <Table hover style={{borderRadius:"15px"}} >
        //                     <Thead  className={styles.tableH1}>
        //                         <Tr>
        //                             <Th>Property</Th>
        //                             <Th>Strategy</Th>
        //                             <Th>Price</Th>
        //                             <Th>Pro Role</Th>
        //                             <Th>Act Role</Th>
        //                             <Th>Action</Th>
        //                         </Tr>
        //                     </Thead>
        //                     <Tbody style={{backgroundColor:"white"}}>
        //                         {employeeProperty.map(renderEmployee)}
        //                     </Tbody>
        //                 </Table>
        //             </div>
        //         </div>



        //         <h1 className={styles.heading}> In The Pipeline </h1>
        //         <div className="wrapper3" style={{backgroundColor:"#E5E5E5"}}>
        //             <div className="row" style={{margin:"10px 10px"}}>
        //                 <div className="wrapper2 col-sm-5 col-md-5 col-lg-6" style={{margin:"20px 0px 25px 5px"}}>
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Under Contract</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Accepted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {underContract.map(renderUnderContract)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>

        //                 <div className="wrapper2 col-sm-5 col-md-4 col-lg-4" id="mobiletbl">
        //                         <Table hover>
        //                         <caption style={{captionSide:"top"}}>Submitted Offers</caption>
        //                             <Thead>
        //                                 <Tr className={styles.tableH1}>
        //                                     <Th>Property</Th>
        //                                     <Th>Submitted</Th>
        //                                     <Th>Pro Role</Th>
        //                                     <Th>Status</Th>
        //                                 </Tr>
        //                             </Thead>
        //                             <Tbody style={{backgroundColor:"white"}}>
        //                                 {submittedOffer.map(renderSubmitOffer)}
        //                             </Tbody>
        //                         </Table>
        //                 </div>
        //             </div>


        //             {/* <div className="row col-5"> */}
           
        //             </div>                    
        //         {/* </div> */}

        
        //         <div className="wrapper3" style={{margin:"30px 130px", margin:"auto"}}>
        //             <div className="row" style={{backgroundColor:"#FFFFFF"}}>
        //                 <h1 className={styles.heading}> Analyzed Properties </h1>
        //                 <div className="col-6" style={{textAlign:"left",  padding:"20px 40px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Additional Graphs </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Amortization Schedule </label>
        //                     <br></br> 
        //                     <button className="reportBtn"> Generate Report </button>
        //                 </div>

        //                 <div className="col-6" style={{textAlign:"left", padding:"20px 60px"}}>
        //                     {/* <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> */}
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Generate Full Proforma </label><br></br> 
        //                     <input className={styles.checkBox} type="checkbox" />
        //                     <label> Attach Loaded Images </label> 
        //                 </div>

        //                 <h3 className="progressTxt"> Progress(70%) </h3>
        //                 <div className="progress">
        //                     <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
        //                     70%
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // <Footer />
        // </div>
        
    )
}

export default Teamprofile
