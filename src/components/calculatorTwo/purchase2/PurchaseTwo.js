import React, { useState } from 'react'
import styles from './purchase.module.css'
import "./purchase.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core"


const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        marginLeft: 255,
        // padding: 30,
        '@media (max-width: 900px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    },

    input: {
        backgroundColor:"rgba(128, 0, 128, 0.1)",
        borderRadius: "15px",
        width: "80%",
        height:"47px",
        marginBottom:"17px"
    },
    margins:{
        marginTop:"10px",
        marginLeft: "15px"
    }
});



function PurchaseTwo (){
    const otherWay = {height:"98%"}
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

        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around"  style={{backgroundColor:"#FFFFFF"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#FFFFFF"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" alignItems="stretch" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} style={{height:'100%'}}>
                        <SidebarTwoComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height:'100vh'}}>
                        <Form  className={classes.margins} >
                        <Form.Row>
                                <Form.Group as={Col} controlId="formGridPurchase">
                                    <Form.Label>Asking Price ($)</Form.Label>
                                    <Form.Control className={classes.input} type="text"
                                    onChange={e => setPurchProp({...purchProp, askingPrice : e.target.value})}
                                    value={purchProp.askingPrice}
                                     />

                                    <Form.Label>Earnest Money Depost</Form.Label>
                                    <Form.Control className={classes.input} type="text"
                                    onChange={e => setPurchProp({...purchProp, earnestMoney : e.target.value})} 
                                    value={purchProp.earnestMoney}
                                    />

                                    <Form.Label>Emergency Fund</Form.Label>
                                    <Form.Control className={classes.input} type="text"
                                    onChange={e => setPurchProp({...purchProp, emergencyFunds : e.target.value})}
                                    value={purchProp.emergencyFunds}
                                     />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <FormGroup>
                                        <Form.Label>Offer Price ($)</Form.Label>
                                        <Form.Control className={classes.input} type="text"
                                        onChange={e => setPurchProp({...purchProp, offerPrice : e.target.value})}
                                        value={purchProp.offerPrice}
                                         />

                                        <Form.Label>Closing Cost</Form.Label>
                                        <Form.Control className={classes.input} type="text"
                                        onChange={e => setPurchProp({...purchProp, closingCost : e.target.value})}
                                        value={purchProp.closingCost}
                                         />
                                    </FormGroup>
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
            
 

        )
    
}

export default PurchaseTwo;












// import React, { Component } from 'react'
// import styles from './purchase.module.css'
// import "./purchase.css"
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'
// import { createUseStyles, useTheme } from 'react-jss';
// import { Column, Row } from 'simple-flexbox';
// import { SidebarTwoComponent, SidebarContext } from 'components/sidebar2';
// import imagetest from './../../assets/calimage.png'
// // import calIMage from './../../../assets/calimage.png'
// import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Image, Card} from 'react-bootstrap';
// // import ImageUpload from './ImageUpload';
// // import calIMage from './../../../assets/calimage.png'


// const useStyles = createUseStyles({
//     container: {
//         height: '60%',
//         minHeight: 700
//     },
//     mainBlock: {
//         marginLeft: 255,
//         padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     }

    
// });


// function PurchaseTwo (){
//     const theme = useTheme();
//     const classes = useStyles({ theme });

//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         image: null
//     //     };

//     //     this.onImageChange = this.onImageChange.bind(this);
//     // }

//     // onImageChange = event => {
//     //     if (event.target.files && event.target.files[0]) {
//     //       let img = event.target.files[0];
//     //       this.setState({
//     //         image: URL.createObjectURL(img)
//     //       });
//     //     }
//     //   };


//     // render() {
//         return (
        

//             <div className="App">
//             <Header />
//             <div className={styles.propertyLayoutMain}>
//                 <div className={styles.propertyLayoutSecond}>
//                     <div className={styles.propertyLayoutSider}>
//                     {/* <h1> This is property compenent</h1> */}
//                     <SidebarContext>
//                         <Row className={classes.container}>
//                         <SidebarTwoComponent />
//                             <Column flexGrow={1} className={classes.mainBlock}>
//                                 {/* <Header />? */}
//                                 <div className={classes.contentBlock}>
//                                     {/* <PrivateRoutes /> */}
//                                         <div>
//                                             <div className="flex-container">
//                                                 <div className="flex-child">
                                                

//                                                 <Form>
//                                                     <Form.Row>
//                                                         <Form.Group>
//                                                             <h1> Purchase </h1> 
//                                                         </Form.Group>
//                                                     </Form.Row>

//                                                     <Form.Row> 
//                                                         <Form.Group as={Col}>
                                                            
//                                                             <Form.Label>Asking Price ($)</Form.Label>
//                                                             <Form.Control type="text" />

//                                                             <Form.Label>Closing Costs ($)</Form.Label>
//                                                             <Form.Control type="text" />
//                                                         </Form.Group>

//                                                         <Form.Group as={Col}> 
//                                                             <FormGroup>
//                                                                 <Form.Label>Purchase Price ($)</Form.Label>
//                                                                 <Form.Control type="text" />
//                                                             </FormGroup>
//                                                         </Form.Group>
//                                                     </Form.Row>
//                                                 </Form>
//                                             </div>  
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Column>
//                         </Row>
//                     </SidebarContext>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>


//     )

// }

// export default PurchaseTwo;
