import React,{useContext} from 'react'
// import './App.css';
import {Grid, makeStyles,Card, CardContent,Typography} from '@material-ui/core';
import ReportDeskTwo from './ReportDeskTwo';
import reportImage from './../../../../assets/report1.png';
import { ContextApi } from "../../../../ContextApi/contextApi";



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  color: {
     fontFamily:'Roboto',
     color:'#4B176A',
     marginLeft:'5%',
     marginTop:'88px',
  },
}));

export default function ReportDeskOne() {
const classes = useStyles();
const contextType = useContext(ContextApi)
console.log(contextType)
return (
    <Grid container spacing={3} xs={12} md={12} lg={12} sm={12} >
      <Grid className={classes.color} container justify="center" spacing={'3'} item xs={12} md={12} lg={12} style={{marginTop:'30px', padding: "10px"}}>
        <Grid item container direction="row">
        <Grid item md={12} sm={10} xs={12}>
          <span  style={{fontWeight:'bold',fontSize:'34px'}}>
            Long Term Rental Agreement
          </span>
        </Grid>

        <Grid item md={12} xs={12}>
            <span style={{fontSize:'25px',marginBottom: "20px"}}>
                Investment Proposal Analysis
            </span>
        </Grid>

          <Grid item xs={8} style={{marginTop:'51px',fontSize:'18px'}}>
            <span>
                Investor Name :
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
                lorem ipsum
            </span>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Email
            <span style={{marginLeft:'77px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            Lorempsumdolorsit@gmail.com
            </span>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Phone
            <span style={{marginLeft:'70px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            6453637388
            </span>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <span>
            Website
            <span style={{marginLeft:'56px'}}>:</span>
            </span>
            <span style={{fontSize:'18px',marginLeft:'5px'}}>
            www.Loremipsum.com
            </span>
            </Grid>
          </Grid>
          <Grid item style={{marginBottom: "16px"}} xs={4}>
              <img src={reportImage} alt="Avatar" />
            </Grid>
          </Grid>
    
            
        </Grid>
        

          <Grid container justify="center" spacing={''} item xs={12} md={12} lg={12} style={{marginTop:'10px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1  '}}>
              <CardContent>
                <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                    <Typography  style={{fontSize:'25px',fontWeight:"700"}}>  Deal Summary : </Typography>
                    <Typography style={{fontSize:'22px',fontWeight:"500"}}> Property Details </Typography>
                    <Grid container xs={12} md={12} lg={12} style={{padding:"5px"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'20px', fontWeight:"bold"}}> Pre -Renovation :  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'20px', fontWeight:"bold"}}> Post -Renovation :  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Address: <span style={{marginLeft:'61px'}}> {contextType.Property.propAddress}</span>  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Number of Beds <span style={{marginLeft:'71px'}}> {contextType.Renovation.noOfBeds}  </span>  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Number of Beds:  <span style={{marginLeft:'47px'}}> {contextType.Property.noOfBeds}  </span> </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Number of Baths: <span style={{marginLeft:'57px'}}> {contextType.Renovation.noOfBaths}  </span>  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Number of Baths: <span style={{marginLeft:'55px'}}> {contextType.Property.noOfBaths}  </span>  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Property Sq. Ft.: <span style={{marginLeft:'65px'}}> {contextType.Renovation.sqFt}  </span>  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Lot Size: <span style={{marginLeft:'115px'}}> </span> {contextType.Property.lotSize} </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Initial Equility: <span style={{marginLeft:'65px'}}> {contextType.Finance.initialEquity}  </span> </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Property Sq. Ft.: <span style={{marginLeft:'61px'}}> {contextType.Property.sqFt}</span>  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Price per Sq.Ft.: <span style={{marginLeft:'71px'}}> {contextType.Property.noOfBeds}  </span>  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Prior Year Taxes:  <span style={{marginLeft:'47px'}}>{contextType.Property.priorYearTax} </span>  </Typography></Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'57px'}}> </span>   </Typography></Grid> */}
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Property Value: <span style={{marginLeft:'55px'}}> </span>{contextType.Property.priorYearTax}  </Typography></Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> </span>   </Typography></Grid> */}
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Price per Sq.Ft: <span style={{marginLeft:'55px'}}> {contextType.Property.PricePerSqFt} </span>   </Typography></Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> </span>   </Typography></Grid> */}
                    </Grid>

                    <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> Rental Income :  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> Mothly Income :  </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Number of Units: <span style={{marginLeft:'61px'}}> {contextType.Income.noOfUnits}</span>  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Fixed: <span style={{marginLeft:'71px'}}> {contextType.FixedExpense.totalFixed}</span>   </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Average Rent:  <span style={{marginLeft:'47px'}}> {contextType.Income.averageRent} </span>  </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Variable : <span style={{marginLeft:'57px'}}> {contextType.VariableExpense.totalVariable} </span>   </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Total Monthly Rent: <span style={{marginLeft:'55px'}}> {contextType.Income.totalRent} </span>   </Typography></Grid>
                        <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Monthly Expenses: <span style={{marginLeft:'65px'}}> </span>   </Typography></Grid>
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Other Income: <span style={{marginLeft:'55px'}}> {contextType.Income.otherIncome} </span>  </Typography></Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Initial Equility  </Typography></Grid> */}
                    </Grid>
                    <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                        <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Monthly Income: <span style={{marginLeft:'61px'}}> {contextType.Income.totalIncome}</span>  </Typography></Grid>
                        {/* <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Price per Sq.Ft.: <span style={{marginLeft:'71px'}}> </span>   </Typography></Grid> */}
                    </Grid>
                </Grid>
                
                </CardContent>
            </Card>
          </Grid>
                 <Grid container justify="center" item xs={12} md={12} lg={12} style={{marginTop:'0px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1  '}}>  
              <CardContent>
                <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                  <Typography style={{fontSize:'22px',fontWeight:"500"}}>  Acquisition Details : </Typography>        
                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'20px', fontWeight:"bold"}}> Purchase <span style={{marginLeft:'3px'}}> </span>  </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'20px', fontWeight:"bold"}}> Renovation <span style={{marginLeft:'25px'}}>  </span>   </Typography></Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Listing Price: <span style={{marginLeft:'61px'}}> {contextType.Purchase.askingPrice}</span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Total Cost <span style={{marginLeft:'71px'}}> {contextType.Renovation.renoTotal} </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Offer Price:  <span style={{marginLeft:'47px'}}> {contextType.Purchase.offerPrice} </span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> % of Purchase: <span style={{marginLeft:'57px'}}> </span>  1.4% </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Price Difference: <span style={{marginLeft:'55px'}}> {contextType.Purchase.priceDiffrence} </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Net Change in Rehab $: <span style={{marginLeft:'65px'}}> </span> 74200.00$  </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Price Charge: <span style={{marginLeft:'55px'}}> </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Return on Rehab: <span style={{marginLeft:'65px'}}> </span> 104.80%  </Typography></Grid>
                  </Grid>

                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> Financing  : </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> Cash To Close :  </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Loan Amount: <span style={{marginLeft:'61px'}}> {contextType.Finance.loanAmount}</span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Downpayment: <span style={{marginLeft:'71px'}}> {contextType.Finance.downpaymentAmount} </span> </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Interest Rate:  <span style={{marginLeft:'47px'}}> {contextType.Finance.InterestRate} %</span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Renovation: <span style={{marginLeft:'57px'}}> - </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Term: <span style={{marginLeft:'55px'}}> {contextType.Finance.term} years </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Loan Fees: <span style={{marginLeft:'65px'}}> {contextType.Finance.totalFees} </span></Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Total Fees: <span style={{marginLeft:'55px'}}> {contextType.Finance.totalFees} </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Earnest Money: <span style={{marginLeft:'65px'}}> {contextType.Purchase.earnestMoney} </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "2px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Monthly Payment:  <span style={{marginLeft:'47px'}}> </span> $1222.45 </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Closing Costs: <span style={{marginLeft:'57px'}}> {contextType.Purchase.closingCost}</span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Grace Period: <span style={{marginLeft:'55px'}}> {contextType.Finance.gracePeriod == 0 ? "No" : contextType.Finance.gracePeriod}  </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Emergency Fund: <span style={{marginLeft:'65px'}}> {contextType.Purchase.emergencyFunds} </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Interest Only: <span style={{marginLeft:'55px'}}> {contextType.Finance.InterestOnlyPayments === "Yes" ? contextType.Finance.totalMonths : "No" }</span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Cash to Close: <span style={{marginLeft:'65px'}}> {contextType.Finance.cashToClose}  </span>   </Typography></Grid>
                  </Grid>


                  <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> Gross Rent Multiplies: </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'20px', fontWeight:"bold", marginTop: "20px"}}> 1% Rule:  </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Total Investment: <span style={{marginLeft:'61px'}}> {contextType.Finance.totalInvestment}</span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> 1% of Investment: <span style={{marginLeft:'71px'}}> {contextType.Finance.onePercentInvest} </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Annual Rent:  <span style={{marginLeft:'47px'}}> {contextType.Finance.AnnualRent} </span>  </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Monthly Income: <span style={{marginLeft:'57px'}}>{contextType.Income.totalIncome} </span>   </Typography></Grid>
                  </Grid>
                  <Grid container xs={12} md={12} lg={12} style={{margin: "3px", fontWeight: "400"}}>
                      <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Gross Rent Multiplier: <span style={{marginLeft:'55px'}}> {contextType.Finance.grossRentMultiplier} </span>   </Typography></Grid>
                      <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Income-Investment: <span style={{marginLeft:'65px'}}> {contextType.Finance.incomeInvestment} </span>   </Typography></Grid>
                  </Grid>
                </Grid>
                
                </CardContent>
            </Card>
          </Grid>
          {/* <Grid container justify="center" item xs={12} md={12} lg={12} style={{marginTop:'0px',}}    >
           
           <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 2px 1px #C1C1C1  '}}>
             <CardContent>
               <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
               <Typography  style={{fontSize:'25px',fontWeight:"700"}}>  Operating Details :</Typography>        
               <Grid container xs={12} md={12} lg={12}>
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> lorem ipsum :   </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> lorem ipsum :   </Typography></Grid>
             </Grid>
             <Grid container xs={12} md={12} lg={12}>
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> lorem ipsum  : </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> lorem ipsum  :  </Typography></Grid>
             </Grid>
             {/* <Grid container xs={12} md={12} lg={12}>
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'47px'}}> </span>  </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'57px'}}> </span>   </Typography></Grid>
             </Grid>
             <Grid container xs={12} md={12} lg={12}>
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'55px'}}> </span>   </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> </span>   </Typography></Grid>
             </Grid> 
               </Grid>
               </CardContent>
           </Card>
         </Grid> */}
      </Grid>
    
  );

}