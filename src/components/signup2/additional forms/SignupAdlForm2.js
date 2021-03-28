import React, {useState,useContext} from 'react'
import styles from "./signupAdlForms.module.css";
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import {Col, Form} from "react-bootstrap"
import axios from 'axios'
import url from "../../axios_url/url";
import Header from "../../header2/Header";
import Footer from "../../footer/Footer";
import { ContextApi } from "../../../ContextApi/contextApi";

// var userToken = localStorage.getItem('loginToken')
// const api = axios.create({
//     // baseURL: 'http://localhost:6003/api/authentication'
//     baseURL: url + '/api/authentication',
//     headers: {
//         "Content-Type": "application/json",
//         'authorization': `${userToken}`
//     },
// });


const SignupAdlForm2=(props)=> {

    const [formProp, setFormProp] = useState({
        plan_to_purchase: '',
        monthly_or_annual: '',
        same_billing_address: '',
        name_on_card: '',
        card_number: '',
        cvc: '',
        zipCode: ''
    })

    const contextType = useContext(ContextApi)

    // const handleChange = (event) => {
    //     setFormProp(event.target.value);
    // }

    // const submitForm = async () => {
    //     let res = await api.post('/submit_form2', {
    //         plan_to_purchase: `${formProp.plan_to_purchase}`,
    //         monthly_or_annual: `${formProp.monthly_or_annual}`,
    //         same_billing_address: `${formProp.same_billing_address}`,
    //         name_on_card: `${formProp.name_on_card}`,
    //         card_number: `${formProp.card_number}`,
    //         cvc: `${formProp.cvc}`,
    //         zipCode: `${formProp.zipCode}`
    //     }).then(res => {
    //         window.location.href = '/signup_adlform3'
    //     })
    // }
    return (

        // <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around"
        //       alignItems="stretch"
        //       style={{backgroundColor: "#ffffff", padding: "25px 25px 25px 25px"}}>

        <div style={{backgroundColor: "#E5E5E5"}}>
            <Header/>
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="center"
                  alignItems="center">
                <Grid container xl={8} lg={8} md={10} sm={12} xs={12} justify="center" alignItems="center"
                      style={{backgroundColor: '#ffffff'}} className={styles.newlogin}>

                    <Grid item direction="row">

                        <Form>
                            <Form.Row>
                                <h1 className={styles.heading}> LUCI Technologies LLC - Sign UP Form </h1>
                            </Form.Row>
                            <Form.Row>
                                <h4 className={styles.heading}> Plan Selection</h4>
                            </Form.Row>
                            <Form.Row>
                                <p className={styles.paragraph}>Section 2 contains the information for us to select the
                                    plan and credit card information</p>
                            </Form.Row>
                            <br/>
                            <br/>


                            <Form.Row>
                                <Form.Label>Select the plan that you would like to purchase</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="plan_to_purchase"  value={contextType.UserSignUp.plan_to_purchase} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} 
                                            style={{
                                                background: "rgba(128, 0, 128, 0.1)",
                                                borderRadius: '15px',
                                                fontFamily: 'Montserrat',
                                                fontSize: '18px',
                                                lineHeight: '22px',
                                                height: '55px'
                                            }} id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Professional">Professional</option>
                                        <option value="Enterprise">Enterprise</option>
                                        <option value="Custom Solutions">Custom Solutions</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br/>


                            <Form.Row>
                                <Form.Label>Monthly or Annual?</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="monthly_or_annual"  value={contextType.UserSignUp.monthly_or_annual} onChange={(e) => contextType.handleChange(e, 'UserSignUp')}  style={{
                                        background: "rgba(128, 0, 128, 0.1)",
                                        borderRadius: '15px',
                                        fontFamily: 'Montserrat',
                                        fontSize: '18px',
                                        lineHeight: '22px',
                                        height: '55px'
                                    }} id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Monthly">Monthly (Cancel Anytime)</option>
                                        <option value="Annual with 10 percent discount">Annual - 10% Discount</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br/>


                            <Form.Row>
                                <Form.Label>Billing address same as mailing address?</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="same_billing_address"  value={contextType.UserSignUp.same_billing_address} onChange={(e) => contextType.handleChange(e, 'UserSignUp')}  style={{
                                        background: "rgba(128, 0, 128, 0.1)",
                                        borderRadius: '15px',
                                        fontFamily: 'Montserrat',
                                        fontSize: '18px',
                                        lineHeight: '22px',
                                        height: '55px'
                                    }} id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br/>

                            <Form.Row>
                                <Form.Label>Name on Card</Form.Label>
                                <Form.Control type="text" className={styles.newinput} name="name_on_card"  value={contextType.UserSignUp.name_on_card} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br/>

                            <Form.Row>
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="text" className={styles.newinput} name="card_number"  value={contextType.UserSignUp.card_number} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />

                            </Form.Row>
                            <br/>


                            <Grid item xs={6} md={6} lg={6} sm={6} xl={12}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>CVC</Form.Label>
                                        <Form.Control type="text" className={styles.newinput} name="cvc"  value={contextType.UserSignUp.cvc} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control type="text" className={styles.newinput} name="zipCode"  value={contextType.UserSignUp.zipCode} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                                    </Form.Group>


                                </Form.Row>
                                <br/>
                            </Grid>


                        </Form>
                        <div>
                            <button
                                style={{width: '150px', height: '50px', background: '#4B176A', color: '#ffffff'}} onClick={()=>props.history.push("./signup_adlform1")}>Back
                            </button>
                            <button style={{
                                width: '150px',
                                height: '50px',
                                background: '#4B176A',
                                color: '#ffffff',
                                marginLeft: '50px'
                            }} onClick={()=>props.history.push("./signup_adlform3")}>Next
                            </button>
                        </div>
                        <br/>
                        <br/>


                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </div>

    )

}

export default SignupAdlForm2
