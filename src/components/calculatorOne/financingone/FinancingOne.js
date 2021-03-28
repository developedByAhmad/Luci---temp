import React, { useState, useContext, useEffect } from 'react'
import styles from './financing.module.css'
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col, FormGroup } from 'react-bootstrap';
import { Grid } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height: "57px",
        marginBottom: "20px"
    },

    inputtwo: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "60%",
        height: "57px",
        marginBottom: "15px"
    },
    margins: {
        marginTop: "10px",
        marginLeft: "15px"
    },
    inputone: {
        height: "45px",
        width: "55px",
        borderRadius: 4,
        position: 'relative',
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        border: '1px solid #ced4da',
        fontSize: 16,
        marginLeft: "35%",
        // padding: '10px 26px 10px 10px',
        // transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            //   // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    }
});



const FinancingOne = (props) => {
    const otherWay = { height: "104%" }
    // const styleOther = {position: "fixed"}
    const theme = useTheme();
    const classes = useStyles({ theme });
    const classesOne = useStylesOne();

    const [financProp, setFinanceProp] = useState({
        fundingRenovation: "",
        downpaymentPercentage: "",
        downpaymentAmount: "",
        InterestRate: "",
        percentFunded: "",
        term: "",
        loanFees: "",
        loanPoints: "",
        loanAmount: "",
        InterestOnlyPayments: "",
        gracePeriod: "",
        totalMonths: ""
    });

    const [loanAmount, setLoanAmount] = useState()

    //The following is the function for the calculation of loan Amount 
    const contextType = useContext(ContextApi)

    const [status, setStatus] = useState(false);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    // useEffect(() => {
    //     const { offerPrice } = contextType.Purchase;
    //     setFinanceProp({ downpaymentPercentage: offerPrice * 0.1 })
    //     console.log(offerPrice);
    //     console.log(financProp.downpaymentPercentage);

    // }, [contextType.Purchase]);

    useEffect(() => {


        const { earnestMoney, closingCost, emergencyFunds, offerPrice } = contextType.Purchase;
        const { renoTotal, status } = contextType.Renovation
        const { totalRent, totalIncome } = contextType.Income
        const { downpaymentPercentage, percentFunded, loanPoints, loanFees } = contextType.Finance;
        const { afterRepairValue } = contextType.Assumptions;



        const percentOfPurchase = renoTotal && offerPrice ? renoTotal / parseInt(offerPrice.substring(1).replace(/\,/g, '')) : 0;
        const downpaymentAmountCalOne = offerPrice && downpaymentPercentage ? parseInt(offerPrice.substring(1).replace(/\,/g, '')) * (parseInt(downpaymentPercentage.substr(0,(downpaymentPercentage.length -1)).replace(/\,/g, '')) / 100) : 0;
        const percentFundedCal=percentFunded?((parseInt(percentFunded.substr(0,(percentFunded.length -1)).replace(/\,/g, '')) / 100)):0;
        const downpaymentAmountCaltwo = percentFundedCal && renoTotal ? ((1 - percentFundedCal) * renoTotal): 0;
        const downpaymentAmount = downpaymentAmountCalOne + downpaymentAmountCaltwo
        const loanAmount = offerPrice && downpaymentAmount && renoTotal ? (parseInt(offerPrice.substring(1).replace(/\,/g, '')) - downpaymentAmount) + renoTotal : 0
        const totalFees = loanFees && loanPoints && loanAmount ? (parseInt(loanFees.substring(1).replace(/\,/g, '')) + (parseInt(loanPoints.substring(1).replace(/\,/g, '')) / 100)) * loanAmount : 0
        const cashToClose = downpaymentAmount && totalFees && renoTotal && closingCost && emergencyFunds && earnestMoney ? (downpaymentAmount+ parseInt(totalFees.substring(1).replace(/\,/g, '')) + renoTotal + parseInt(closingCost.substring(1).replace(/\,/g, '')) + parseInt(emergencyFunds.substring(1).replace(/\,/g, ''))) - parseInt(earnestMoney.substring(1).replace(/\,/g, '')) : 0;
        const totalInvestment = offerPrice && renoTotal && totalFees && closingCost && emergencyFunds ? (parseInt(offerPrice.substring(1).replace(/\,/g, '')) + renoTotal + parseInt(totalFees.substring(1).replace(/\,/g, '')) + parseInt(closingCost.substring(1).replace(/\,/g, '')) + parseInt(emergencyFunds.substring(1).replace(/\,/g, ''))) : 0;
        const AnnualRent = totalRent ? (parseInt(totalRent.substring(1).replace(/\,/g, '')) * 12) : 0
        const grossRentMultiplier = totalInvestment && AnnualRent ? parseInt(totalInvestment.substring(1).replace(/\,/g, '')) / parseInt(AnnualRent.substring(1).replace(/\,/g, '')) : 0;
        const onePercentInvest = totalInvestment ? (0.01 * parseInt(totalInvestment.substring(1).replace(/\,/g, ''))) : 0;
        const incomeInvestment = totalIncome && totalInvestment ? parseInt(totalIncome.substring(1).replace(/\,/g, '')) / parseInt(totalInvestment.substring(1).replace(/\,/g, '')) : 0;
        setFinanceProp({ ...financProp, downpaymentAmount: downpaymentAmount, loanAmount: loanAmount })

        console.log(downpaymentAmount);
        console.log(percentFundedCal);
        console.log(percentFunded?percentFunded.substr(0,(percentFunded.length -1)).replace(/\,/g, ''):0);

        console.log(downpaymentAmountCalOne);
        console.log(downpaymentAmountCaltwo);
        console.log(grossRentMultiplier);
        console.log(incomeInvestment);
        console.log(AnnualRent);

        contextType.Finance.downpaymentAmount = downpaymentAmount;
        // contextType.Finance.initialEquity=
        contextType.Finance.loanAmount = loanAmount;
        contextType.Finance.totalFees = totalFees; // loan Fees
        contextType.Finance.cashToClose = cashToClose;
        contextType.Finance.totalInvestment = totalInvestment;
        contextType.Finance.AnnualRent = AnnualRent;
        contextType.Finance.grossRentMultiplier = grossRentMultiplier;
        contextType.Finance.onePercentInvest = onePercentInvest;
        contextType.Finance.incomeInvestment = incomeInvestment;


        // const downpaymentAmount = offerPrice * (downpaymentPercentage / 100);

        // const amt = (offerPrice - downpaymentAmount);
        // setFinanceProp({ ...financProp, downpaymentAmount: downpaymentAmount, loanAmount: amt })
        // console.log("asas", offerPrice, downpaymentAmount, renoTotal, amt)


        // console.log(financProp);

    }, [contextType.Finance]);





    return (

        
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" style={{ backgroundColor: "#e5e5e5" }}>
    <Grid item>
        <Header />
    </Grid>

    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}  direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#e5e5e5" }}>

        <Grid item container xl={12} lg={12} md={12} sm={3} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
            <SidebarContext>
                <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{ height: '100%' }}>
                    <SidebarComponent style={otherWay} />
                </Grid>

                <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '106vh' }} >
                    <Form className={classes.margins}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <h1 className={styles.heading}> Finance</h1>
                            </Form.Group>

                            <Form.Group as={Col}>

                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} style={{ display: "inline-flex" }} >
                                <Form.Label >Funding Renovation</Form.Label>
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
                        <Form.Row>
                            <Form.Group as={Col}>
                                    {/* <Form.Label>Funding Renovation</Form.Label>
                                                        <Form.Control className={classes.input} type="text" placeholder=" Yes"
                                                        value={financProp.fundingRenovation} 
                                                        onChange={e => setFinanceProp({ ...financProp, fundingRenovation: e.target.value})}/>
                                                        */}
                                    {/* <FormGroup> */}
                                    <Form.Label>Downpayment (%)</Form.Label>
                                    {/* <Form.Control className={classes.input} type="number"
                                            value={financProp.downpaymentPercentage}
                                        onChange={e => setFinanceProp({ ...financProp, downpaymentPercentage: e.target.value })} /> */}
                                    <NumberFormat  
                                    customInput={Form.Control}
                                        allowNegative = {false}
                                    thousandSeparator={true} 
                                    suffix={"%"} 
                                    displayType={'number'} name="downpaymentPercentage" className={classes.input} value={contextType.Finance.downpaymentPercentage}
                                    onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                    <Form.Label>Downpayment ($)</Form.Label>
                                    {/* <Form.Control className={classes.input}
                                        value={financProp.downpaymentAmount}
                                        onChange={e => setFinanceProp({ ...financProp, downpaymentAmount: e.target.value })} /> */}
                                    <NumberFormat  
                                    customInput={Form.Control}
                                        allowNegative = {false}
                                    thousandSeparator={true} 
                                    prefix={'$'} suffix={".00"} 
                                    displayType={'number'} name="downpaymentAmount" className={classes.input}  value={contextType.Finance.downpaymentAmount}
                                    onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                    <Form.Label>Loan Amount ($)</Form.Label>
                                    {/* <Form.Control className={classes.input}
                                        value={loanAmount}
                                    /> */}
                                    <NumberFormat  
                                    customInput={Form.Control}
                                        allowNegative = {false}
                                    thousandSeparator={true} 
                                    prefix={'$'} suffix={".00"} 
                                    displayType={'number'} name="loanAmount" style={{backgroundColor: "#e5e5e5"}} className={classes.input} value={contextType.Finance.loanAmount}
                                    onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                    <Form.Label>Interest Rate (%)</Form.Label>
                                    {/* <Form.Control className={classes.input}
                                        value={financProp.InterestRate}
                                        onChange={e => setFinanceProp({ ...financProp, InterestRate: e.target.value })} /> */}
                                    <NumberFormat  
                                    customInput={Form.Control}
                                        allowNegative = {false}
                                    thousandSeparator={true} 
                                    suffix={"%"} 
                                    displayType={'number'} name="InterestRate" className={classes.input}  value={contextType.Finance.InterestRate}
                                    onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                    <Form.Label> Percent Funded (%)</Form.Label>
                                    {/* <Form.Control className={classes.input}
                                        value={financProp.percentFunded}
                                        onChange={e => setFinanceProp({ ...financProp, percentFunded: e.target.value })}
                                    /> */}
                                    <NumberFormat  
                                    customInput={Form.Control}
                                        allowNegative = {false}
                                    thousandSeparator={true} 
                                    suffix={"%"} 
                                    displayType={'number'} name="percentFunded" className={classes.input} value={contextType.Finance.percentFunded}
                                    onChange={(e) => contextType.handleChange(e, 'Finance')} />
                                    {/* </FormGroup> */}
                                </Form.Group>

                                <Form.Group as={Col}>
                                        {/* <FormGroup> */}
                                        <Form.Label>Loan Fees ($)</Form.Label>
                                        {/* <Form.Control className={classes.input}
                                            value={financProp.loanFees}
                                            onChange={e => setFinanceProp({ ...financProp, loanFees: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control}
                                        allowNegative = {false}
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'} name="loanFees" className={classes.input} value={contextType.Finance.loanFees}
                                        onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                        <Form.Label>Loan Points (pts)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text"
                                                value={financProp.loanPoints}
                                                onChange={e => setFinanceProp({ ...financProp, loanPoints: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control}
                                        allowNegative = {false}
                                        thousandSeparator={true} 
                                        suffix={".00"} 
                                        displayType={'number'} name="loanPoints" className={classes.input} value={contextType.Finance.loanPoints}
                                        onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                        <Form.Label>Interest Only Payments (Months) </Form.Label>
                                        {/* <Form.Control className={classes.input}
                                            value={financProp.InterestOnlyPayments}
                                            onChange={e => setFinanceProp({ ...financProp, InterestOnlyPayments: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control}
                                        allowNegative = {false}
                                        // thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'} name="InterestOnlyPayments" className={classes.input} value={contextType.Finance.InterestOnlyPayments}
                                        onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                        <Form.Label>Grace Period (months)</Form.Label>
                                        {/* <Form.Control className={classes.input}
                                            value={financProp.gracePeriod}
                                            onChange={e => setFinanceProp({ ...financProp, gracePeriod: e.target.value })} /> */}
                                        <NumberFormat  
                                        customInput={Form.Control}
                                        allowNegative = {false}
                                        // thousandSeparator={true} 
                                        // prefix={'$'} suffix={".00"} 
                                        displayType={'number'} name="gracePeriod" className={classes.input} value={contextType.Finance.gracePeriod}
                                        onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                        <Form.Label>Term (yrs & months)</Form.Label>
                                        {/* <Form.Control className={classes.input}
                                            value={financProp.term}
                                            onChange={e => setFinanceProp({ ...financProp, term: e.target.value })}
                                        /> */}
                                            <NumberFormat  
                                            customInput={Form.Control}
                                        allowNegative = {false}
                                            // thousandSeparator={true} 
                                            // prefix={'$'} suffix={".00"} 
                                            displayType={'number'}
                                            allowNegative={false} name="term" className={classes.input} value={contextType.Finance.term}
                                            onChange={(e) => contextType.handleChange(e, 'Finance')} />

                                        {/* <Form.Label>How many months?</Form.Label>
                                        {/* <Form.Control className={classes.input}
                                            value={financProp.totalMonths}
                                            onChange={e => setFinanceProp({ ...financProp, totalMonths: e.target.value })} /> */}
                                        {/*   <NumberFormat  
                                        customInput={Form.Control} 
                                        thousandSeparator={true} 
                                        prefix={'$'} suffix={".00"} 
                                        displayType={'number'} name="totalMonths" className={classes.input} value={contextType.Finance.totalMonths}
                                                onChange={(e) => contextType.handleChange(e, 'Finance')} /> */} 
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


        // <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" style={{ backgroundColor: "#e5e5e5" }}>
        //     <Grid item>
        //         <Header />
        //     </Grid>

        //     <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#e5e5e5" }}>

        //         <Grid item container xl={11} lg={11} md={10} sm={3} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
        //             <SidebarContext>
        //                 <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{ height: '100%' }}>
        //                     <SidebarComponent style={otherWay} />
        //                 </Grid>

        //                 <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '106vh' }} >
        //                     <Form className={classes.margins}>
        //                         <Form.Row>
        //                             <Form.Group as={Col}>
        //                                 <h1 className={styles.heading}> Finance</h1>
        //                             </Form.Group>

        //                             <Form.Group as={Col}>

        // <Grid container xl={12} lg={12} md={12} sm={12} xs={12}  direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#e5e5e5" }}>

        //     <Grid item container xl={12} lg={12} md={12} sm={3} xs={12} direction="row" justify="flex-start" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
        //         <SidebarContext>
        //             <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{ height: '100%' }}>
        //                 <SidebarComponent style={otherWay} />
        //             </Grid>

        //             <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '106vh' }} >
        //                 <Form className={classes.margins}>
        //                     <Form.Row>
        //                         <Form.Group as={Col}>
        //                             <h1 className={styles.heading}> Finance</h1>
        //                         </Form.Group>

        //                         <Form.Group as={Col}>

        //                         </Form.Group>
        //                     </Form.Row>
        //                     <Form.Row>
        //                         <Form.Group as={Col} style={{ display: "inline-flex" }} >
        //                             <Form.Label >Funding Renovation</Form.Label>
        //                             <FormControl
        //                             variant="outlined"
        //                             className={classesOne.quantityRoot}
        //                             >
        //                             <Select
        //                                 onChange={handleChange}
        //                                 className={classesOne.selectRoot, classesOne.icon}
        //                                 defaultValue={false}
        //                                 MenuProps={{ classesOne: { paper: classesOne.selectPaper } }}>
        //                                 <MenuItem value={true}>Yes</MenuItem>
        //                                 <MenuItem value={false}>No</MenuItem>
        //                             </Select>
        //                             </FormControl>
        //                         </Form.Group> <Form.Group as={Col}></Form.Group>
        //                     </Form.Row>
        //                     <Form.Row>
        //                         <Form.Group as={Col}>
        //                                 {/* <Form.Label>Funding Renovation</Form.Label>
        //                                                     <Form.Control className={classes.input} type="text" placeholder=" Yes"
        //                                                     value={financProp.fundingRenovation} 
        //                                                     onChange={e => setFinanceProp({ ...financProp, fundingRenovation: e.target.value})}/>
        //                                                     */}
        //                                 {/* <FormGroup> */}
        //                                 <Form.Label>Downpayment (%)</Form.Label>
        //                                 {/* <Form.Control className={classes.input} type="number"
        //                                         value={financProp.downpaymentPercentage}
        //                                     onChange={e => setFinanceProp({ ...financProp, downpaymentPercentage: e.target.value })} /> */}
        //                                 <NumberFormat  
        //                                 customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                 thousandSeparator={true} 
        //                                 suffix={"%"} 
        //                                 displayType={'number'} name="downpaymentPercentage" className={classes.input} value={contextType.Finance.downpaymentPercentage}
        //                                 onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label>Downpayment ($)</Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                     value={financProp.downpaymentAmount}
        //                                     onChange={e => setFinanceProp({ ...financProp, downpaymentAmount: e.target.value })} /> */}
        //                                 <NumberFormat  
        //                                 customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                 thousandSeparator={true} 
        //                                 prefix={'$'} suffix={".00"} 
        //                                 displayType={'number'} name="downpaymentAmount" className={classes.input}  value={contextType.Finance.downpaymentAmount}
        //                                 onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label>Loan Amount ($)</Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                     value={loanAmount}
        //                                 /> */}
        //                                 <NumberFormat  
        //                                 customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                 thousandSeparator={true} 
        //                                 prefix={'$'} suffix={".00"} 
        //                                 displayType={'number'} name="loanAmount" style={{backgroundColor: "#e5e5e5"}} className={classes.input} value={contextType.Finance.loanAmount}
        //                                 onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label>Interest Rate (%)</Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                     value={financProp.InterestRate}
        //                                     onChange={e => setFinanceProp({ ...financProp, InterestRate: e.target.value })} /> */}
        //                                 <NumberFormat  
        //                                 customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                 thousandSeparator={true} 
        //                                 suffix={"%"} 
        //                                 displayType={'number'} name="InterestRate" className={classes.input}  value={contextType.Finance.InterestRate}
        //                                 onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label> Percent Funded (%)</Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                     value={financProp.percentFunded}
        //                                     onChange={e => setFinanceProp({ ...financProp, percentFunded: e.target.value })}
        //                                 /> */}
        //                                 <NumberFormat  
        //                                 customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                 thousandSeparator={true} 
        //                                 suffix={"%"} 
        //                                 displayType={'number'} name="percentFunded" className={classes.input} value={contextType.Finance.percentFunded}
        //                                 onChange={(e) => contextType.handleChange(e, 'Finance')} />
        //                                 {/* </FormGroup> */}
        //                             </Form.Group>

        //                             <Form.Group as={Col}>
        //                                 {/* <FormGroup> */}
        //                                 <Form.Label>Loan Fees ($)</Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                         value={financProp.loanFees}
        //                                         onChange={e => setFinanceProp({ ...financProp, loanFees: e.target.value })} /> */}
        //                                     <NumberFormat  
        //                                     customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                     thousandSeparator={true} 
        //                                     prefix={'$'} suffix={".00"} 
        //                                     displayType={'number'} name="loanFees" className={classes.input} value={contextType.Finance.loanFees}
        //                                     onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label>Loan Points (pts)</Form.Label>
        //                                 {/* <Form.Control className={classes.input} type="text"
        //                                             value={financProp.loanPoints}
        //                                             onChange={e => setFinanceProp({ ...financProp, loanPoints: e.target.value })} /> */}
        //                                     <NumberFormat  
        //                                     customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                     thousandSeparator={true} 
        //                                     suffix={".00"} 
        //                                     displayType={'number'} name="loanPoints" className={classes.input} value={contextType.Finance.loanPoints}
        //                                     onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                 <Form.Label>Interest Only Payments (Months) </Form.Label>
        //                                 {/* <Form.Control className={classes.input}
        //                                         value={financProp.InterestOnlyPayments}
        //                                         onChange={e => setFinanceProp({ ...financProp, InterestOnlyPayments: e.target.value })} /> */}
        //                                     <NumberFormat  
        //                                     customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                     // thousandSeparator={true} 
        //                                     // prefix={'$'} suffix={".00"} 
        //                                     displayType={'number'} name="InterestOnlyPayments" className={classes.input} value={contextType.Finance.InterestOnlyPayments}
        //                                     onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                     <Form.Label>Grace Period (months)</Form.Label>
        //                                     {/* <Form.Control className={classes.input}
        //                                         value={financProp.gracePeriod}
        //                                         onChange={e => setFinanceProp({ ...financProp, gracePeriod: e.target.value })} /> */}
        //                                     <NumberFormat  
        //                                     customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                     // thousandSeparator={true} 
        //                                     // prefix={'$'} suffix={".00"} 
        //                                     displayType={'number'} name="gracePeriod" className={classes.input} value={contextType.Finance.gracePeriod}
        //                                     onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                     <Form.Label>Term (yrs & months)</Form.Label>
        //                                     {/* <Form.Control className={classes.input}
        //                                         value={financProp.term}
        //                                         onChange={e => setFinanceProp({ ...financProp, term: e.target.value })}
        //                                     /> */}
        //                                         <NumberFormat  
        //                                         customInput={Form.Control}
        //                                     allowNegative = {false}
        //                                         // thousandSeparator={true} 
        //                                         // prefix={'$'} suffix={".00"} 
        //                                         displayType={'number'}
        //                                         allowNegative={false} name="term" className={classes.input} value={contextType.Finance.term}
        //                                         onChange={(e) => contextType.handleChange(e, 'Finance')} />

        //                                     {/* <Form.Label>How many months?</Form.Label>
        //                                     {/* <Form.Control className={classes.input}
        //                                         value={financProp.totalMonths}
        //                                         onChange={e => setFinanceProp({ ...financProp, totalMonths: e.target.value })} /> */}
        //                                 {/*   <NumberFormat  
        //                                     customInput={Form.Control} 
        //                                     thousandSeparator={true} 
        //                                     prefix={'$'} suffix={".00"} 
        //                                     displayType={'number'} name="totalMonths" className={classes.input} value={contextType.Finance.totalMonths}
        //                                             onChange={(e) => contextType.handleChange(e, 'Finance')} /> */}
        //                                 {/* </FormGroup> */}
        //                             </Form.Group>
        //                         </Form.Row>
        //                     </Form>
        //                 </Grid>

        //             </SidebarContext>
        //         </Grid>
        //     </Grid>


        //     <Grid item xl={12}>
        //         <Footer />
        //     </Grid>
        // </Grid>



    )

}

export default FinancingOne;



