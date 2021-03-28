import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState } from 'react';
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

  const employeeProperty = [
    {val:'LTR', property: "Property 01", strategy: "Buy and Sold", purchaseDate: 400, HoldingPeriod: 15, purchasePrice: 15, initialNoi: 15, initialNiaf: 15, cashOnCash: 15, Roi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F&F', property: "Property 04", strategy: "Buy and Sold", purchaseDate: 100, HoldingPeriod:  9, purchasePrice: 9,  initialNoi:  9, initialNiaf: 9, cashOnCash: 9, Roi : 11, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'LTR',  property: "Property 10", strategy: "Buy and Sold", purchaseDate: 150, HoldingPeriod: 11, purchasePrice: 11, initialNoi: 11, initialNiaf: 11, cashOnCash: 11, Roi : 14, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F&F', property: "Property 03", strategy: "Buy and Sold", purchaseDate: 350, HoldingPeriod: 12, purchasePrice: 12, initialNoi: 12, initialNiaf: 12, cashOnCash: 12, Roi : 19, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'LTR', property: "Property 02", strategy: "Buy and Sold", purchaseDate: 240, HoldingPeriod: 10, purchasePrice: 10, initialNoi: 10, initialNiaf: 10, cashOnCash: 10, Roi : 7, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
    {val:'F&F', property: "Property 011", strategy: "Buy and Sold", purchaseDate: 374, HoldingPeriod: 14, purchasePrice: 14, initialNoi: 14, initialNiaf: 14, cashOnCash: 14, Roi : 11, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>}
]
// const headersOne = ["Property","Strategy", "Price", "PRole", "actRole", "action"]
const Teamprofile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [tableStatus, settableStatus] = useState(null);
    const [data, setData] = useState([
        {val:'LTR', property: "Property 01", strategy: "Buy and Sold", purchaseDate: 400, HoldingPeriod: 15, purchasePrice: 15, initialNoi: 15, initialNiaf: 15, cashOnCash: 15, Roi : 10, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 04", strategy: "Buy and Sold", purchaseDate: 100, HoldingPeriod:  9, purchasePrice: 9,  initialNoi:  9, initialNiaf: 9, cashOnCash: 9, Roi : 11, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LTR',  property: "Property 10", strategy: "Buy and Sold", purchaseDate: 150, HoldingPeriod: 11, purchasePrice: 11, initialNoi: 11, initialNiaf: 11, cashOnCash: 11, Roi : 14, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 03", strategy: "Buy and Sold", purchaseDate: 350, HoldingPeriod: 12, purchasePrice: 12, initialNoi: 12, initialNiaf: 12, cashOnCash: 12, Roi : 19, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'LTR', property: "Property 02", strategy: "Buy and Sold", purchaseDate: 240, HoldingPeriod: 10, purchasePrice: 10, initialNoi: 10, initialNiaf: 10, cashOnCash: 10, Roi : 7, action: <Link to="/property">  <button className={styles.tableBtn}> Projected </button></Link>},
        {val:'F&F', property: "Property 011", strategy: "Buy and Sold", purchaseDate: 374, HoldingPeriod: 14, purchasePrice: 14, initialNoi: 14, initialNiaf: 14, cashOnCash: 14, Roi : 11, action: <Link to="/propertytwo">  <button className={styles.tableBtn}> Projected </button></Link>}
    ])

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    //   settableStatus(event.target.value)
};

const handleClose = (value) => {
    setAnchorEl(null);
    console.log("Button Clicked")
    console.log(value)
    setData(() => {
        let newData = employeeProperty.filter(d => d.val === value)
        return newData     
    })
};

    


    const renderEmployee = (employeeProperty, index) =>{
        return(
            <Tr key={index}>
                <Td>{employeeProperty.property}</Td>
                <Td>{employeeProperty.strategy}</Td>
                <Td>{employeeProperty.purchaseDate}</Td>
                <Td>{employeeProperty.HoldingPeriod}</Td>
                <Td>{employeeProperty.purchasePrice}</Td>
                <Td>{employeeProperty.initialNoi}</Td>
                <Td>{employeeProperty.initialNiaf}</Td>
                <Td>{employeeProperty.cashOnCash}</Td>
                <Td>{employeeProperty.Roi}</Td>
                <Td>{employeeProperty.action}</Td>
            </Tr>
        )
    }




    return (
        <>
        <HeaderTwo />
        <Grid style={{backgroundColor:"#FFFFFF", paddingBottom:"40px"}} xl={12} lg={12} md={12} sm={12} xs={12}  alignItems="center" container direction="column">
            <Grid item container xl={11} lg={11} md={11} sm={11} xs={11} direction="row" spacing={2} >
                <Grid item xs={8} style={{paddingRight: "100px"}}> 
                    <h1 className={styles.heading} > Active Portfolio </h1>
                </Grid>
                <Grid item className={styles.heading} xs={4}> 
                    {/* <h1 className={styles.heading} > New Analysis </h1> */}
                    {/* <div> */}
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
                            {/*  For the sake of revision <MenuItem onClick={(e)=>handleClose(e,"LTR")} value={"LTR"}>LTR</MenuItem> */}
                            <MenuItem onClick={() => handleClose("LTR")} value={"LTR"}>LTR</MenuItem>
                            <MenuItem onClick={() => handleClose("F&F")} value={"F&F"}>F&F</MenuItem>
                        </Menu>
                    </ThemeProvider>
                        
                    {/* </div> */}
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                            <Tbody style={{backgroundColor:"white"}}> {}
                                {data.map(renderEmployee)}
                            </Tbody>
                        </Table>
                </Grid>
            </Grid>
        </Grid>
        <Footer />
        </>    
    )
}

export default Teamprofile
