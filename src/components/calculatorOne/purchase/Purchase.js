import React, { useState, useContext, useEffect } from 'react'
import styles from './purchase.module.css'
import "./purchase.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, FormGroup, Col } from 'react-bootstrap';
import { Grid } from "@material-ui/core"
import FinancingOne from "./../financingone/FinancingOne"
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";

const useStyles = createUseStyles({
    input: {
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "86%",
        height: "57px",
        marginBottom: "15px"
    },

    imageDivMain: {
        height: "50vh",

    },
    imageDiv: {
        height: "40vh",
        backgroundColor: "aliceblue"
    },
    btn: {
        background: "#4B176A",
        borderRadius: "10px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "22px",
        textAlign: "center",
        color: " #FFFFFF",
        height: "62px",
        width: "100%"
    },
    margins: {
        marginTop: "10px",
        marginLeft: "15px"
    }
});



function PropertyContentTwo() {
    const otherWay = { height: "97%" }
    // const styleOther = {position: "fixed"}

    const theme = useTheme();
    const classes = useStyles({ theme });

    const [purchProp, setPurchProp] = useState({
        askingPrice: "",
        offerPrice: "",
        earnestMoney: "",
        closingCost: "",
        emergencyFunds: ""
    })
    const contextType = useContext(ContextApi)
    console.log(contextType);
    // console.log(<ContextApi.Consumer>{(context) => context.propAddress}</ContextApi.Consumer>)

    useEffect(() => {
        let { askingPrice, offerPrice } = contextType.Purchase;
        let { sqFt } = contextType.Property;

        const PricePerSqFt = offerPrice ? parseInt(offerPrice.substring(1).replace(/\,/g, '')) / sqFt : 0;


        if (askingPrice && offerPrice) {
            console.log(askingPrice.substring(1).replace(/\,/g, ''))
            console.log(askingPrice.toString())
            console.log(offerPrice.substring(1))
        }
        const priceDiffrence = offerPrice && askingPrice ? (parseInt(askingPrice.substring(1).replace(/\,/g, '')) - parseInt(offerPrice.substring(1).replace(/\,/g, ''))) : 0;
        contextType.Purchase.priceDiffrence = priceDiffrence;
        console.log(priceDiffrence);
        // console.log(offerPrice.substring(1))

        contextType.Purchase.PricePerSqFt = PricePerSqFt;
        console.log(PricePerSqFt);



    }, [contextType.Purchase]);

    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" alignItems="stretch" style={{ backgroundColor: "#ffffff" }}>
            <Grid item>
                <Header />
            </Grid>

            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#ffffff" }}>
                <Grid item container xl={11} lg={11} md={10} sm={10} xs={12} direction="row" justify="flex-start" style={{ backgroundColor: "#ffffff" }}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0} >
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: '75vh' }}>
                            <Form className={classes.margins}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPurchase">
                                        <Form.Label>Asking Price ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text"
                                            onChange={e => setPurchProp({ ...purchProp, askingPrice: e.target.value })}
                                            value={purchProp.askingPrice}
                                        /> */}
                                        <NumberFormat
                                            customInput={Form.Control}
                                            thousandSeparator={true}
                                            prefix={'$'} suffix={".00"}
                                            displayType={'number'}
                                            allowNegative={false} name="askingPrice" className={classes.input} value={contextType.Purchase.askingPrice}
                                            onChange={(e) => contextType.handleChange(e, 'Purchase')} />

                                        <Form.Label>Earnest Money Depost ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text"
                                            onChange={e => setPurchProp({ ...purchProp, earnestMoney: e.target.value })}
                                            value={purchProp.earnestMoney}
                                        /> */}
                                        <NumberFormat
                                            customInput={Form.Control}
                                            thousandSeparator={true}
                                            prefix={'$'} suffix={".00"}
                                            // displayType={'number'}
                                            allowNegative={false} name="earnestMoney" className={classes.input} type="text" value={contextType.Purchase.earnestMoney}
                                            onChange={(e) => contextType.handleChange(e, 'Purchase')} />

                                        <Form.Label>Emergency Fund ($)</Form.Label>
                                        {/* <Form.Control className={classes.input} type="text"
                                            onChange={e => setPurchProp({ ...purchProp, emergencyFunds: e.target.value })}
                                            value={purchProp.emergencyFunds}
                                        /> */}
                                        <NumberFormat
                                            customInput={Form.Control}
                                            thousandSeparator={true}
                                            prefix={'$'} suffix={".00"}
                                            displayType={'number'}
                                            allowNegative={false} name="emergencyFunds" className={classes.input} type="text" value={contextType.Purchase.emergencyFunds}
                                            onChange={(e) => contextType.handleChange(e, 'Purchase')} />
                                        {/* <Form.Label>PropertAddress</Form.Label> */}
                                        {/* <p>{<contextTypeApi.Consumer>{(contextType) => contextType.propAddress}</contextTypeApi.Consumer>}</p> */}

                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <FormGroup>
                                            <Form.Label>Offer Price ($)</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text"
                                                onChange={e => setPurchProp({ ...purchProp, offerPrice: e.target.value })}
                                                value={purchProp.offerPrice}
                                            /> */}
                                            <NumberFormat
                                                customInput={Form.Control}
                                                thousandSeparator={true}
                                                prefix={'$'} suffix={".00"}
                                                // displayType={'number'}
                                                allowNegative={false} name="offerPrice" className={classes.input} type="text" value={contextType.Purchase.offerPrice}
                                                onChange={(e) => contextType.handleChange(e, 'Purchase')} />

                                            <Form.Label>Closing Cost ($)</Form.Label>
                                            {/* <Form.Control className={classes.input} type="text"
                                                onChange={e => setPurchProp({ ...purchProp, closingCost: e.target.value })}
                                                value={purchProp.closingCost}
                                            /> */}
                                            <NumberFormat
                                                customInput={Form.Control}
                                                thousandSeparator={true}
                                                prefix={'$'} suffix={".00"}
                                                displayType={'number'}
                                                allowNegative={false} name="closingCost" className={classes.input} type="text" value={contextType.Purchase.closingCost}
                                                onChange={(e) => contextType.handleChange(e, 'Purchase')} />
                                        </FormGroup>
                                    </Form.Group>
                                </Form.Row>

                                {/* <Financing props={10}/>
                             */}
                            </Form>

                            {/* <FinancingOne offerprice={purchProp.offerPrice}/> */}
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

export default PropertyContentTwo;


// import React, { Component } from 'react'
// import styles from './purchase.module.css'
// import "./purchase.css"
// // import './property.css'
// import './../../App.css'
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'
// import { createUseStyles, useTheme } from 'react-jss';
// import { Column, Row } from 'simple-flexbox';
// import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// import imagetest from './../../assets/calimage.png'
// // import calIMage from './../../../assets/calimage.png'
// import {Form, Col} from 'react-bootstrap';
// import { Grid } from "@material-ui/core"


// const useStyles = createUseStyles({
//     container: {
//         height: '100%',
//         minHeight: 850
//     },
//     mainBlock: {
//         marginLeft: 255,
//         // padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     },

//     input: {
//         backgroundColor:"rgba(128, 0, 128, 0.1)",
//         borderRadius: "15px",
//         width: "80%",
//         height:"47px"
//     },

//     sidenav:{
//         marginLeft: "20px",
//         justifyContent: "right"
//     }
// });



// function PurchaseTwo (){
//     const otherWay = {height:"70vh"}
//     const styleOther = {position: "fixed"}
//     const theme = useTheme();
//     const classes = useStyles({ theme });

//         return (
//             <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#e5e5e5"}}>
//                 <Grid item>
//                     <Header />
//                 </Grid>

//                 <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#e5e5e5"}}>

//                 <Grid item container xl={11} lg={11} md={10} sm={3} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
//                 <SidebarContext>
//                     <Grid item xl={3} lg={3} md={3} sm={0} xs={0} className={classes.sidenav} style={{height:'100%'}}>
//                         <SidebarTwoComponent style={otherWay} />
//                     </Grid>

//                     <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'75vh'}}>
                        // <Form>
                        //     <Form.Row>
                        //         <Form.Group as={Col} controlId="formGridPropertyAddress">
                        //         <Form.Label>Asking Price ($)</Form.Label>
                        //         <Form.Control className={classes.input} type="text"  />
                        //         </Form.Group>

                        //         <Form.Group as={Col} controlId="formGridCity">
                        //         <Form.Label>Closing Costs ($)</Form.Label>
                        //         <Form.Control className={classes.input} type="text" />
                        //         </Form.Group>
                        //     </Form.Row>

                        //     <Form.Row>
                        //         <Form.Group as={Col} controlId="formGridState">
                        //             <Form.Label>Purchase Price ($)</Form.Label>
                        //             <Form.Control className={classes.input} type="text" />
                        //         </Form.Group>

                        //         <Form.Group as={Col}>

                        //         </Form.Group>
                        //     </Form.Row>

                        // </Form>


//                     </Grid>
//                     </SidebarContext>
//                 </Grid>
//             </Grid>


//                 <Grid item xl={12}>
//                     <Footer style={styleOther} />
//                 </Grid>
//             </Grid>



//         )

// }

// export default PurchaseTwo;












// // import React, { Component } from 'react'
// // import styles from './purchase.module.css'
// // import "./purchase.css"
// // import Header from 'components/header2/Header'
// // import Footer from 'components/footer/Footer'
// // import { createUseStyles, useTheme } from 'react-jss';
// // import { Column, Row } from 'simple-flexbox';
// // import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// // import imagetest from './../../assets/calimage.png'
// // // import calIMage from './../../../assets/calimage.png'
// // import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
// // // import ImageUpload from './ImageUpload';
// // // import calIMage from './../../../assets/calimage.png'


// // const useStyles = createUseStyles({
// //     container: {
// //         height: '60%',
// //         minHeight: 700
// //     },
// //     mainBlock: {
// //         marginLeft: 255,
// //         padding: 30,
// //         '@media (max-width: 900px)': {
// //             marginLeft: 0
// //         }
// //     },
// //     contentBlock: {
// //         marginTop: 54
// //     }


// // });


// // function PurchaseTwo (){
// //     const theme = useTheme();
// //     const classes = useStyles({ theme });

// //     // constructor(props){
// //     //     super(props);
// //     //     this.state = {
// //     //         image: null
// //     //     };

// //     //     this.onImageChange = this.onImageChange.bind(this);
// //     // }

// //     // onImageChange = event => {
// //     //     if (event.target.files && event.target.files[0]) {
// //     //       let img = event.target.files[0];
// //     //       this.setState({
// //     //         image: URL.createObjectURL(img)
// //     //       });
// //     //     }
// //     //   };


// //     // render() {
// //         return (


// //             <div className="App">
// //             <Header />
// //             <div className={styles.propertyLayoutMain}>
// //                 <div className={styles.propertyLayoutSecond}>
// //                     <div className={styles.propertyLayoutSider}>
// //                     {/* <h1> This is property compenent</h1> */}
// //                     <SidebarContext>
// //                         <Row className={classes.container}>
// //                         <SidebarTwoComponent />
// //                             <Column flexGrow={1} className={classes.mainBlock}>
// //                                 {/* <Header />? */}
// //                                 <div className={classes.contentBlock}>
// //                                     {/* <PrivateRoutes /> */}
// //                                         <div>
// //                                             <div className="flex-container">
// //                                                 <div className="flex-child">


// //                                                 <Form>
// //                                                     <Form.Row>
// //                                                         <Form.Group>
// //                                                             <h1> Purchase </h1> 
// //                                                         </Form.Group>
// //                                                     </Form.Row>

// //                                                     <Form.Row> 
// //                                                         <Form.Group as={Col}>

// //                                                             <Form.Label>Asking Price ($)</Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label>Closing Costs ($)</Form.Label>
// //                                                             <Form.Control type="text" />
// //                                                         </Form.Group>

// //                                                         <Form.Group as={Col}> 
// //                                                             <FormGroup>
// //                                                                 <Form.Label>Purchase Price ($)</Form.Label>
// //                                                                 <Form.Control type="text" />
// //                                                             </FormGroup>
// //                                                         </Form.Group>
// //                                                     </Form.Row>
// //                                                 </Form>
// //                                             </div>  
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </Column>
// //                         </Row>
// //                     </SidebarContext>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Footer />
// //         </div>


// //     )

// // }

// // export default PurchaseTwo;


// // import React, { Component } from 'react'
// // import styles from './purchase.module.css'
// // import "./purchase.css"
// // import Header from 'components/header2/Header'
// // import Footer from 'components/footer/Footer'
// // import { createUseStyles, useTheme } from 'react-jss';
// // import { Column, Row } from 'simple-flexbox';
// // import { SidebarComponent, SidebarContext } from 'components/sidebar';
// // import imagetest from './../../assets/calimage.png'
// // // import calIMage from './../../../assets/calimage.png'
// // import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
// // // import ImageUpload from './ImageUpload';
// // // import calIMage from './../../../assets/calimage.png'


// // const useStyles = createUseStyles({
// //     container: {
// //         height: '60%',
// //         minHeight: 700
// //     },
// //     mainBlock: {
// //         marginLeft: 255,
// //         padding: 30,
// //         '@media (max-width: 900px)': {
// //             marginLeft: 0
// //         }
// //     },
// //     contentBlock: {
// //         marginTop: 54
// //     }


// // });


// // function Purchase (){
// //     const theme = useTheme();
// //     const classes = useStyles({ theme });

// //     // constructor(props){
// //     //     super(props);
// //     //     this.state = {
// //     //         image: null
// //     //     };

// //     //     this.onImageChange = this.onImageChange.bind(this);
// //     // }

// //     // onImageChange = event => {
// //     //     if (event.target.files && event.target.files[0]) {
// //     //       let img = event.target.files[0];
// //     //       this.setState({
// //     //         image: URL.createObjectURL(img)
// //     //       });
// //     //     }
// //     //   };


// //     // render() {
// //         return (


// //             <div className="App">
// //             <Header />
// //             <div className={styles.propertyLayoutMain}>
// //                 <div className={styles.propertyLayoutSecond}>
// //                     <div className={styles.propertyLayoutSider}>
// //                     {/* <h1> This is property compenent</h1> */}
// //                     <SidebarContext>
// //                         <Row className={classes.container}>
// //                         <SidebarComponent />
// //                             <Column flexGrow={1} className={classes.mainBlock}>
// //                                 {/* <Header />? */}
// //                                 <div className={classes.contentBlock}>
// //                                     {/* <PrivateRoutes /> */}
// //                                         <div>
// //                                             <div className="flex-container">
// //                                                 <div className="flex-child">


// //                                                 <Form>
// //                                                     <Form.Row>
// //                                                         <Form.Group as={Col}>
// //                                                             <h1> Address </h1> 
// //                                                             <Form.Label>Asking Price ($)</Form.Label>
// //                                                                 <Form.Control type="text" />

// //                                                                 <Form.Label>Purchase Price</Form.Label>
// //                                                                 <Form.Control type="text" />

// //                                                                 <Form.Label>Financing Rehab</Form.Label>
// //                                                                 <Form.Control type="text" />

// //                                                                 <h1> New Renovation Tab </h1>
// //                                                             <Form.Label>Rehab Budget ($)</Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label> Closing Costs ($) </Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label>Insurence ($)</Form.Label>
// //                                                             <Form.Control type="text" />
// //                                                         </Form.Group>

// //                                                         <Form.Group as={Col}>
// //                                                             <h1> Finance </h1> 
// //                                                             <Form.Label>Downpayment (%)</Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label>Downpayment (%)</Form.Label>
// //                                                             <Form.Control type="text" placeholder="0 0 0 0" />

// //                                                             <Form.Label>Loan Payment Rehab</Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label>Annual Interest Rate</Form.Label>
// //                                                             <Form.Control type="text" />

// //                                                             <Form.Label>Term Years</Form.Label>
// //                                                             <Form.Control type="text" placeholder="0 0 0 0" />

// //                                                             <Form.Label>Emergency Funds ($)</Form.Label>
// //                                                             <Form.Control type="text" />
// //                                                         </Form.Group>

// //                                                 </Form.Row>
// //                                             </Form>
// //                                         </div>  
// //                                     </div>
// //                                 </div>
// //                                 </div>
// //                             </Column>
// //                         </Row>
// //                     </SidebarContext>
// //                     </div>
// //                 </div>
// //             </div>
// //             <Footer />
// //         </div>


// //     )

// // }

// // export default Purchase;
