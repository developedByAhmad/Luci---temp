import React, { useState, useContext,useEffect } from 'react'
import styles from "./signupAdlForms.module.css";
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Col, Form } from "react-bootstrap"
import axios from 'axios'
import url from "../../axios_url/url";
import Header from "../../header2/Header";
import Footer from "../../footer/Footer";
import axiosInstance from "../../../axios-Instance";
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
const SignupAdlForm3 = (props) => {

    const contextType = useContext(ContextApi)
    const {
        firstName,
        lastName,
        email,
        address,
        townCity,
        state,
        zipCode,
        instantStrategy,
        password,
        aptNumber,
        full_time_real_estate_professional,
        how_long_invested,
        how_heard_about_luci_technologies,
        own_investing_business,
        name_of_business,
        businessAddress,
        plan_to_purchase,
        monthly_or_annual,
        same_billing_address,
        name_on_card,
        card_number,
        cvc,
        username,
        re_entered_password } = contextType.UserSignUp;
    useEffect(() => {
        console.log("firstName", firstName);
        console.log("lastName", lastName);
    }, [contextType.UserSignUp])

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            townCity: townCity,
            state: state,
            zipCode: zipCode,
            instantStrategy: instantStrategy,
            password: password,
            aptNumber: aptNumber,
            full_time_real_estate_professional: full_time_real_estate_professional,
            how_long_invested: how_long_invested,
            how_heard_about_luci_technologies: how_heard_about_luci_technologies,
            own_investing_business: own_investing_business,
            name_of_business: name_of_business,
            businessAddress: businessAddress,
            plan_to_purchase: plan_to_purchase,
            monthly_or_annual: monthly_or_annual,
            same_billing_address: same_billing_address,
            name_on_card: name_on_card,
            card_number: card_number,
            cvc: cvc,
            zipCode: zipCode,
            username: username,
            re_entered_password: re_entered_password
        }
        axiosInstance
            .post("/api/authentication/signup", user)
            .then((res) => {

                // const token = res.data.token;
                // setAuthToken(token);
                // localStorage.setItem("loginToken", token);
                // alert("Your Offer Added SuccessFully");
                console.log("RESPONSE", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        props.history.push("./login")
        console.log(props);
    }


    return (

        // <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="space-around"
        //       alignItems="stretch"
        //       style={{backgroundColor: "#ffffff", padding: "25px 25px 25px 25px"}}>

        <div style={{ backgroundColor: "#E5E5E5" }}>
            <Header />
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction="column" justify="center"
                alignItems="center">
                <Grid container xl={8} lg={8} md={10} sm={12} xs={12} justify="center" alignItems="center"
                    style={{ backgroundColor: '#ffffff' }} className={styles.newlogin}>

                    <Grid item direction="row">

                        <Form>
                            <Form.Row>
                                <h1 className={styles.heading}> LUCI Technologies LLC - Sign UP Form </h1>
                            </Form.Row>
                            <Form.Row>
                                <h4 className={styles.heading}> User Profile Setup</h4>
                            </Form.Row>
                            <br />
                            <br />


                            <Form.Row>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" className={styles.newinput} name="username" value={contextType.UserSignUp.username} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className={styles.newinput} name="password" value={contextType.UserSignUp.password} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>Re-enter Password</Form.Label>
                                <Form.Control type="password" className={styles.newinput}
                                    name="re_entered_password" value={contextType.UserSignUp.re_entered_password} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />


                        </Form>
                        <div>
                            <button
                                style={{ width: '150px', height: '50px', background: '#4B176A', color: '#ffffff' }} onClick={()=>props.history.push("./signup_adlform2")}>Back
                            </button>
                            <button style={{
                                width: '150px',
                                height: '50px',
                                background: '#4B176A',
                                color: '#ffffff',
                                marginLeft: '50px'
                            }} onClick={(e) => handleSubmit(e)}>Submit
                            </button>
                        </div>
                        <br />
                        <br />


                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </div>
    )

}


export default SignupAdlForm3
