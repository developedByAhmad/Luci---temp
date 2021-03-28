import React from 'react';
import './pricing.scss'
import Header from './../header2/Header'
import Footer from './../footer/Footer';
// import styles from './pricing.module.css'
import vectorImg from './../../assets/Group 322.png'
import starImage from './../../assets/Group 321.png'
import crownImage from './../../assets/Group 320.png'
import { Grid } from '@material-ui/core'
import styles from "./pricingTwo.module.css"



function CardHeader({ image, title, description }) {	
    // let source = {image};
	return (
		<div className="card-header" style={{background: "#4B176A"}}>
            <img style={{display:"inline"}} src={image} alt="This is image" />
			<h2>{ title }</h2>
			{/* <p>{ description }</p> */}
		</div>
	);
};

// function CardDescription({ image, title, description }) {	
//     // let source = {image};
// 	return (
// 		<div className="card-description">
//             <h2> <img src={image} alt="This is image" /></h2>
// 			<h2>{ title }</h2>
// 			{/* <p>{ description }</p> */}
// 		</div>
// 	);
// };

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
        <input style={{marginRight: "15px", height: "18px", width: "18px"}} type="checkbox" name="monthlyPrice" value="monthlyPrice" />
        <label for="monthlyPrice">  ${ price }.00 / Month  </label><br></br>

        <input style={{marginRight: "23px", height: "18px", width: "18px"}} type="checkbox" name="yearlyPrice" value="yearlyPrice" />
        <label for="yearlyPrice">  	${ recurrency }.00 / Year  </label><br></br>
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
			<button onClick={clickMe}>SUBSCRIBE</button>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    image,
    data,
    clickMe
  } = props;
	
	return (
		<div className={`card pricing-card ${type}`}>
      { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			{/* <CardDescription  image={image} title={title} description={description} /> */}
            <CardHeader  image={image} title={title} description={description} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction clickMe={clickMe} />
		</div>
	);
};

function PricingTwo() {
  function handleClick() {
    console.log('Button clicked!');
  };
  
	return (
            <Grid   container xl={12} lg={12} md={12} sm={12} xs={12}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
           style={{backgroundColor:"white", height:"100%"}}
           >
              <Header />
                <Grid item xl={12} container direction="column" alignItems="center" justify="center" className={styles.section} >
                  <Grid item container xl={10} lg={12} md={12} sm={12} xs={12} spacing={3} justify="center" alignItems="center"  direction="column" style={{marginBottom:"2%"}} >
                    <Grid item>
                          <h2 className={styles.h2}> Pricing</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <p className={styles.p}>
                        LUCI is a no commitment monthly service that has multiple different packaged . Paying for a year in advance offers a 10% discount on all products..</p>
                    </Grid>
                  </Grid>
              <Grid item xl={10} lg={10} md={11} sm={11} xs={11} container spacing={3}
direction="row"
justify="space-between"
alignItems="flex-start"
className={styles.displaycard}
style={{marginBottom: "30px"}}
> {
                              cardsData.map(props => {                              
                                return (
                                                      <PricingCard
                                                          {...props}
                                                          key={props.id}
                                                          clickMe={handleClick} 
                                                          />   
                                )
                              })
                            }    
                  </Grid>
              </Grid>
               
              <Footer />
            </Grid>

	);
};

const cardsData = [
  {
    id: 1,
    type: 'Premium',
    title: ' Basic',
    description: 'Lorem ipsum',
    price:  5.00,
    recurrency: 54.00,
    mostPopular: false,
    image: vectorImg,
    data: ['Ability to analyze a prop based on a given strategy', 
         'Print out deal overview reports to give to lenders', 'Use your own Logo']
  },
  {
    id: 2,
    type: 'Premium',
    title: 'Standard',
    description: 'Lorem ipsum',
    price: 15.00,
    recurrency: 128.00,
    mostPopular: false,
    image: starImage,
    data: ['Track overall portfolio performances','link bank accounts andtrack cash reserves for each property','Compere projected to actual results']
  },
  {
    id: 3,
    type: 'Premium',
    title: ' Enterprise',
    description: 'Lorem ipsum',
    price: 5.00,
    recurrency: 54.00,
    mostPopular: false,
    image: crownImage,
    data: ['Renters portal','Create in depth partnership returns','Track who hes not paid rent','Allow renters to submit tweeks']
  },
  {
    id: 4,
    type: 'Custom Solutions',
    title: 'Custom Solutions',
    description: 'Lorem ipsum',
    price: 5.00,
    recurrency: 54.00,
    mostPopular: false,
    image: crownImage,
    data: ['Renters portal','Create in depth partnership returns','Track who hes not paid rent','Allow renters to submit tweeks']
  }
];



export default PricingTwo;