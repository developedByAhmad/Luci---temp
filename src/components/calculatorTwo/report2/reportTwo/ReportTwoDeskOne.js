import React from 'react'
// import './App.css';
import {Grid, makeStyles,Card, CardContent,Typography} from '@material-ui/core';
import ReportDeskTwo from './ReportTwoDeskTwo';
import styles from './reportdesktwo.module.css'
import reportImage from './../../../../assets/Report2.png';



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
export default function ReportTwoDeskOne() {
const classes = useStyles();

return (
    <Grid container spacing={3} xs={12} md={12} lg={12} sm={12} >
      <Grid className={classes.color} container justify="center" spacing={'3'} item xs={12} md={12} lg={12} style={{marginTop:'30px', padding: "10px"}}>
        <Grid item container direction="row">
        <Grid item md={12} sm={10} xs={12}>
          <span  style={{fontWeight:'bold',fontSize:'34px'}}>
            Fix and Flip
          </span>
        </Grid>

        <Grid item md={12} xs={12}>
            <span style={{fontSize:'25px',}}>
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
        

          <Grid container justify="center" spacing={''} item xs={12} md={12} lg={12} style={{marginTop:'30px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 3px 1px #C1C1C1  '}}>
              <CardContent>
                <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                    <Typography  style={{fontSize:'25px',fontWeight:"700"}}>  Deal Summary : </Typography>
                    <Typography style={{fontSize:'18px',fontWeight:"500"}}> Property Details </Typography>
                <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Pre -Renovation :  </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Post -Renovation :  </Typography></Grid>
                </Grid>
                <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Address <span style={{marginLeft:'61px'}}> :</span>  </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Address <span style={{marginLeft:'71px'}}> :</span>   </Typography></Grid>
                </Grid>
                <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'47px'}}> :</span>  </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'57px'}}> :</span>   </Typography></Grid>
                </Grid>
                <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'55px'}}> :</span>   </Typography></Grid>
                    <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> :</span>   </Typography></Grid>
                </Grid>
                </Grid>
                
                </CardContent>
            </Card>
          </Grid>
                 <Grid container justify="center" item xs={12} md={12} lg={12} style={{marginTop:'0px',}}    >
           
            <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 3px 1px #C1C1C1  '}}>
              <CardContent>
                <Grid item xs={12} md={12} lg={12} style={{marginLeft:'5%',fontFamily:'Roboto',color:'#4B176A',}}>
                <Typography  style={{fontSize:'25px',fontWeight:"700"}}>  Acquisition Details : </Typography>        
                <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Purchase <span style={{marginLeft:'3px'}}> :</span>  </Typography></Grid>
              <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Renovation <span style={{marginLeft:'25px'}}> :</span>   </Typography></Grid>
              </Grid>
              <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Financing  : </Typography></Grid>
              <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Cash To Close :  </Typography></Grid>
              </Grid>
              {/* <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'47px'}}> :</span>  </Typography></Grid>
              <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'57px'}}> :</span>   </Typography></Grid>
              </Grid>
              <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'55px'}}> :</span>   </Typography></Grid>
              <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> :</span>   </Typography></Grid>
              </Grid> */}
                </Grid>
                
                </CardContent>
            </Card>
          </Grid>
          <Grid container justify="center" item xs={12} md={12} lg={12} style={{marginTop:'0px', marginBottom:"140px"}}    >
           
           <Card variant='outlined' justify="center" style={{width:'90%', boxShadow:'2px 3px 1px #C1C1C1  '}}>
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
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'47px'}}> :</span>  </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> City/State <span style={{marginLeft:'57px'}}> :</span>   </Typography></Grid>
             </Grid>
             <Grid container xs={12} md={12} lg={12}>
             <Grid item xs={7} md={7} lg={7}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'55px'}}> :</span>   </Typography></Grid>
             <Grid item xs={5} md={5} lg={5}>  <Typography style={{fontSize:'18px',}}> Zip Code <span style={{marginLeft:'65px'}}> :</span>   </Typography></Grid>
             </Grid> */}
               </Grid>
               </CardContent>
           </Card>
         </Grid>
      </Grid>
    
  );

}