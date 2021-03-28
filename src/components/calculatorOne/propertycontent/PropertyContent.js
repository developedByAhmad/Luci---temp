import React, { useState, useEffect, useContext } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import { Form, Col } from 'react-bootstrap';
import { FormGroup, Grid } from "@material-ui/core";
import Purchase from '../purchase/Purchase'
import { ContextApi } from "../../../ContextApi/contextApi";
import NumberFormat from "react-number-format";


const PropertyContent = (props) => {
    const [property, setproperty] = useState({
        image: null,
        propAddress: "",
        priorYearTax: "",
        noOfBeds: "",
        noOfBaths: "",
        lotSize: "",
        sqFt: "",
        city: "",
        zip: "",
        state: ""
    })

    const contextType = useContext(ContextApi)

    useEffect(() => {
        console.log(props)


      },[]);

    useEffect(() => {
        const { askingPrice, ...remainingObject} = contextType.Purchase;

        const askingPriceNum=parseInt(askingPrice?askingPrice.substring(1).replace(/\,/g,''):"")
        
        const priorYearTax=(askingPriceNum * 0.03)
        console.log(priorYearTax);
        contextType.Purchase.priorYearTax=priorYearTax;
        setproperty({priorYearTax:priorYearTax});


      },[contextType.Property]);
    
    const handleChange = (event) => {
        setproperty({ [event.target.name]: event.target.value });
        // console.log(event.target.value);
    };
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setproperty({
                image: URL.createObjectURL(img)
            });
        }
    };

    const otherWay = { height: "118%" }
    return (
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around" alignItems="stretch" style={{ backgroundColor: "#FFFFFF" }}>
            <Grid item>
                <Header />
            </Grid>

            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: "#ffffff" }}>

                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12} direction="row" justify="flex-start" style={{ backgroundColor: "#ffffff" }}>
                    <SidebarContext>
                        <Grid item xl={3} lg={3} md={3} sm={0} xs={0} >
                            <SidebarComponent style={otherWay} />
                        </Grid>

                        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{ height: "120vh" }}>
                            <Form className={styles.margins}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPropertyAddress">
                                        <Form.Label>Property Address</Form.Label>
                                        <Form.Control name="propAddress" className={styles.innput} type="text" value={contextType.Property.propAddress}
                                            onChange={(e) => contextType.handleChange(e, 'Property')} />

                                        <Form.Label> City </Form.Label>
                                        <Form.Control name="city" className={styles.innput} type="text" value={contextType.Property.city}
                                            onChange={(e) => contextType.handleChange(e, 'Property')} />

                                        <Form.Label> Zip </Form.Label>
                                        <Form.Control name="zip" className={styles.innput} type="text" value={contextType.Property.zip}
                                            onChange={(e) => contextType.handleChange(e, 'Property')} />

                                        <Form.Label> Number of Beds</Form.Label>
                                        <Form.Control name="noOfBeds" className={styles.innput} type="text" value={contextType.Property.noOfBeds}
                                            onChange={(e) => contextType.handleChange(e, 'Property')} />

                                        <Form.Label>Lot -size</Form.Label>
                                        <Form.Control name="lotSize" className={styles.innput} type="text" value={contextType.Property.lotSize}
                                            onChange={(e) => contextType.handleChange(e, 'Property')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <FormGroup>
                                            <Form.Label>Prior Year Taxes USD</Form.Label>
                                            <NumberFormat
                                                customInput={Form.Control}
                                                thousandSeparator={true}
                                                prefix={'$'} suffix={".00"}
                                                displayType={'number'} name="priorYearTax" className={styles.innput} type="text" value={property.priorYearTax}
                                                />

                                            <Form.Label> State </Form.Label>
                                            <Form.Control name="state" className={styles.innput} type="text" value={contextType.Property.state}
                                                onChange={(e) => contextType.handleChange(e, 'Property')} />


                                            <Form.Label>Property Sq. ft</Form.Label>
                                            {/* <Form.Control className={styles.innput} type="text" value={state.sqFt}
                                                    onChange={(e) => setproperty({ sqFt: e.target.value })} /> */}
                                            <Form.Control name="sqFt" className={styles.innput} type="text" value={contextType.Property.sqFt}
                                                onChange={(e) => contextType.handleChange(e, 'Property')} />

                                            <Form.Label>Number of Baths</Form.Label>
                                            <Form.Control name="noOfBaths" className={styles.innput} type="text" value={contextType.Property.noOfBaths}
                                                onChange={(e) => contextType.handleChange(e, 'Property')} />
                                        </FormGroup>
                                    </Form.Group>
                                </Form.Row>
                            </Form>

                            <Grid item container justify="flex-start" direction="row" xl={11} lg={11} md={11} sm={12} xs={12} className={styles.imageDivMain}>
                                <Grid item xs={12}>
                                    {/* <button className={styles.bn}> Upload Image(s)</button> */}
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        name="myImage"
                                        onChange={(e) => contextType.handleChange(e, 'Property')}
                                        // ref={fileInput => fileInput = fileInput} 
                                        />
                                    <button className={styles.bn}>
                                        {/* <input type="file" />  */}
                                        Upload Image(s) </button>

                                </Grid>

                                <Grid item className={styles.imageDiv} xs={12}>
                                    <img src={property.image} />
                                </Grid>

                            </Grid>
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

export default PropertyContent;
