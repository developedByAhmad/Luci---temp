import React, { useState, useContext } from 'react'
import styles from "./signupAdlForms.module.css";
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Col, Form } from "react-bootstrap"
import axios from 'axios'
import url from "../../axios_url/url";
import Header from "../../header2/Header";
import { BsBoxArrowInRight } from "react-icons/bs";
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


const SignupAdlForm1 = (props) => {

    const contextType = useContext(ContextApi)

    // const [formProp, setFormProp] = useState({
    //     // firstName: '',
    //     // lastName: '',
    //     // streetAddress: '',
    //     aptNumber: '',
    //     full_time_real_estate_professional: '',
    //     how_long_invested: '',
    //     how_heard_about_luci_technologies: '',
    //     own_investing_business: '',
    //     name_of_business: '',
    //     businessAddress: ''
    // })


    // const handleChange = (event) => {
    //     setFormProp(event.target.value);
    // }

    // const submitForm = async () => {

    //     let submitForm = {
    //         aptNumber: formProp.aptNumber,
    //         full_time_real_estate_professional: formProp.full_time_real_estate_professional,
    //         how_long_invested: formProp.how_long_invested,
    //         how_heard_about_luci_technologies: formProp.how_heard_about_luci_technologies,
    //         own_investing_business: formProp.own_investing_business,
    //         name_of_business: formProp.name_of_business,
    //         businessAddress: formProp.businessAddress
    //     }

    //     axiosInstance
    //         .post("/submit_form1", submitForm)
    //         .then((res) => {
    //             console.log(res.data);
    //             props.history.push("./signup_adlform2")

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    // }


    return (

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
                            <br />
                            <br />

                            {/*<Form.Row>*/}
                            {/*    <Form.Label>First Name</Form.Label>*/}
                            {/*    <Form.Control type="text" name={"firstName"} className={styles.newinput}*/}
                            {/*                  value={formProp.firstName} onChange={e => setFormProp({*/}
                            {/*        ...formProp,*/}
                            {/*        firstName: e.target.value*/}
                            {/*    })}/>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}

                            {/*<Form.Row>*/}
                            {/*    <Form.Label>Last Name</Form.Label>*/}
                            {/*    <Form.Control type="text" className={styles.newinput} value={formProp.lastName}*/}
                            {/*                  onChange={e => setFormProp({...formProp, lastName: e.target.value})}/>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}


                            {/*<Form.Row>*/}
                            {/*    <Form.Label>Steet Address</Form.Label>*/}
                            {/*    <Form.Control type="text" className={styles.newinput} value={formProp.streetAddress}*/}
                            {/*                  onChange={e => setFormProp({*/}
                            {/*                      ...formProp,*/}
                            {/*                      streetAddress: e.target.value*/}
                            {/*                  })}/>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}

                            <Form.Row>
                                <Form.Label>Apt. Number</Form.Label>
                                <Form.Control type="text" className={styles.newinput} name="aptNumber" value={contextType.UserSignUp.aptNumber} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />

                            {/*<Form.Row>*/}
                            {/*    <Form.Label>City</Form.Label>*/}
                            {/*    <Form.Control type="text" className={styles.newinput} value={formProp.city}*/}
                            {/*                  onChange={e => setFormProp({...formProp, city: e.target.value})}/>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}

                            {/*<Form.Row>*/}
                            {/*    <Form.Label>State</Form.Label>*/}
                            {/*    <Form.Control type="text" className={styles.newinput} value={formProp.state}*/}
                            {/*                  onChange={e => setFormProp({...formProp, state: e.target.value})}/>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}

                            {/*<Form.Row>*/}
                            {/*    <Form.Label>State</Form.Label>*/}
                            {/*    <div className="input-group mb-3">*/}
                            {/*        <select className="custom-select" name={"state"} onChange={handleChange} style={{background: "rgba(128, 0, 128, 0.1)", borderRadius: '15px', fontFamily: 'Montserrat', fontSize: '18px', lineHeight: '22px', height: '55px'}}  id="inputGroupSelect01">*/}
                            {/*            <option selected>Choose...</option>*/}
                            {/*            <option value="One">One</option>*/}
                            {/*            <option value="Two">Two</option>*/}
                            {/*            <option value="Three">Three</option>*/}
                            {/*        </select>*/}
                            {/*    </div>*/}
                            {/*</Form.Row>*/}
                            {/*<br/>*/}

                            <Form.Row>
                                <Form.Label>Are you a full-time real estate professional?</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="full_time_real_estate_professional" value={contextType.UserSignUp.full_time_real_estate_professional} onChange={(e) => contextType.handleChange(e, 'UserSignUp')}
                                        style={{
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
                                        <option value="Rather not say">Rather not say</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>How long have you invested in real estate?</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="how_long_invested" value={contextType.UserSignUp.how_long_invested} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} style={{
                                        background: "rgba(128, 0, 128, 0.1)",
                                        borderRadius: '15px',
                                        fontFamily: 'Montserrat',
                                        fontSize: '18px',
                                        lineHeight: '22px',
                                        height: '55px'
                                    }} id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Looking for my first deal">Looking for my first deal</option>
                                        <option value="1 - 3 Years">1-3 Years</option>
                                        <option value="4 - 7 Years">4-7 Years</option>
                                        <option value="8+ Years">8+ Years</option>
                                        <option value="Rather not say">Rather not say</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br />


                            <Form.Row>
                                <Form.Label>How did you hear about LUCI Technologies?</Form.Label>
                                <Form.Control type="text" className={styles.newinput}
                                    name="how_heard_about_luci_technologies" value={contextType.UserSignUp.how_heard_about_luci_technologies} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>Do you own a real estate investing business?</Form.Label>
                                <div className="input-group mb-3">
                                    <select className="custom-select" name="own_investing_business" value={contextType.UserSignUp.own_investing_business} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} style={{
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
                                        <option value="Rather not say">Rather not say</option>
                                    </select>
                                </div>
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>What is the name of your business?</Form.Label>
                                <Form.Control type="text" className={styles.newinput}
                                    name="name_of_business" value={contextType.UserSignUp.name_of_business} onChange={(e) => contextType.handleChange(e, 'UserSignUp')} />
                            </Form.Row>
                            <br />

                            <Form.Row>
                                <Form.Label>Business Address</Form.Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                    style={{
                                        background: "rgba(128, 0, 128, 0.1)",
                                        borderRadius: '15px',
                                        fontFamily: 'Montserrat',
                                        fontSize: '18px'
                                    }} name="businessAddress" value={contextType.UserSignUp.businessAddress} onChange={(e) => contextType.handleChange(e, 'UserSignUp')}></textarea>
                            </Form.Row>
                            <br />
                            <br />
                            <br />


                        </Form>
                        <div>
                            <button
                                style={{width: '150px', height: '50px', background: '#4B176A', color: '#ffffff'}} onClick={()=>props.history.push("./signup")}>Back
                            </button>
                            <button style={{
                                width: '150px',
                                height: '50px',
                                background: '#4B176A',
                                color: '#ffffff',
                                marginLeft: '50px'
                            }} onClick={()=>props.history.push("./signup_adlform2")}>Next
                            </button>
                        </div>
                        <br />
                        <br />


                    </Grid>
                </Grid>

            </Grid>
            <Footer />
        </div>


        //<div style={{backgroundColor: "#E5E5E5"}}>
        // <Header/>
        // <Grid xl={12} container direction="column" alignItems="center" justify="space-around">
        // {/*<Grid xl={10} container direction="column" alignItems="center" justify="center" style={{ minHeight: '890px'}}>*/}
        //
        // <Grid item xs={10} sm={8} md={8} lg={6} xl={6}
        //               style={{minHeight: '850px', minWidth: "30%", backgroundColor: "#FFFFFF"}} container className={styles.newlogin}>
        //             <Grid item  container spacing={1} direction="column" alignItems="center" justify="space-around">
        //                 <Grid item>
        //                     <h1 className={styles.newheading}> Luci </h1>
        //                 </Grid>
        //                 <Grid item>
        //                     <p className={styles.newtext}> An interactive real estate investing assistant</p>
        //                 </Grid>
        //                 <br/>
        //                 <br/>
        //
        //                 <Grid item  direction="column" alignItems="center" justify="center">
        //                     <Form>
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>Apt. Number</Form.Label>
        //                                 <Form.Control type="text" className={styles.newinput} value={formProp.aptNumber}
        //                                               onChange={e => setFormProp({
        //                                                   ...formProp,
        //                                                   aptNumber: e.target.value
        //                                               })}/>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>Are you a full-time real estate professional?</Form.Label>
        //                                 <div className="input-group mb-3">
        //                                     <select className="custom-select"
        //                                             name={"full_time_real_estate_professional"}
        //                                             onChange={e => setFormProp({
        //                                                 ...formProp,
        //                                                 full_time_real_estate_professional: e.target.value
        //                                             })} style={{
        //                                         background: "rgba(128, 0, 128, 0.1)",
        //                                         borderRadius: '15px',
        //                                         fontFamily: 'Montserrat',
        //                                         fontSize: '18px',
        //                                         lineHeight: '22px',
        //                                         height: '55px'
        //                                     }} id="inputGroupSelect01">
        //                                         <option selected>Choose...</option>
        //                                         <option value="Yes">Yes</option>
        //                                         <option value="No">No</option>
        //                                         <option value="Rather not say">Rather not say</option>
        //                                     </select>
        //                                 </div>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>How long have you invested in real estate?</Form.Label>
        //                                 <div className="input-group mb-3">
        //                                     <select className="custom-select" name={"how_long_invested"}
        //                                             onChange={e => setFormProp({
        //                                                 ...formProp,
        //                                                 how_long_invested: e.target.value
        //                                             })} style={{
        //                                         background: "rgba(128, 0, 128, 0.1)",
        //                                         borderRadius: '15px',
        //                                         fontFamily: 'Montserrat',
        //                                         fontSize: '18px',
        //                                         lineHeight: '22px',
        //                                         height: '55px'
        //                                     }} id="inputGroupSelect01">
        //                                         <option selected>Choose...</option>
        //                                         <option value="Looking for my first deal">Looking for my first deal
        //                                         </option>
        //                                         <option value="1 - 3 Years">1-3 Years</option>
        //                                         <option value="4 - 7 Years">4-7 Years</option>
        //                                         <option value="8+ Years">8+ Years</option>
        //                                         <option value="Rather not say">Rather not say</option>
        //                                     </select>
        //                                 </div>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>How did you hear about LUCI Technologies?</Form.Label>
        //                                 <Form.Control type="text" className={styles.newinput}
        //                                               value={formProp.how_heard_about_luci_technologies}
        //                                               onChange={e => setFormProp({
        //                                                   ...formProp,
        //                                                   how_heard_about_luci_technologies: e.target.value
        //                                               })}/>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>Do you own a real estate investing business?</Form.Label>
        //                                 <div className="input-group mb-3">
        //                                     <select className="custom-select" name={"own_investing_business"}
        //                                             onChange={e => setFormProp({
        //                                                 ...formProp,
        //                                                 own_investing_business: e.target.value
        //                                             })} style={{
        //                                         background: "rgba(128, 0, 128, 0.1)",
        //                                         borderRadius: '15px',
        //                                         fontFamily: 'Montserrat',
        //                                         fontSize: '18px',
        //                                         lineHeight: '22px',
        //                                         height: '55px'
        //                                     }} id="inputGroupSelect01">
        //                                         <option selected>Choose...</option>
        //                                         <option value="Yes">Yes</option>
        //                                         <option value="No">No</option>
        //                                         <option value="Rather not say">Rather not say</option>
        //                                     </select>
        //                                 </div>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Form.Row>
        //                                 <Form.Label>What is the name of your business?</Form.Label>
        //                                 <Form.Control type="text" className={styles.newinput}
        //                                               value={formProp.name_of_business} onChange={e => setFormProp({
        //                                     ...formProp,
        //                                     name_of_business: e.target.value
        //                                 })}/>
        //                             </Form.Row>
        //                             <br/>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  direction="row"
        //                               spacing={3}>
        //                             <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        //                                 <Form.Row>
        //                                     <Form.Label>Business Address</Form.Label>
        //                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
        //                                               style={{
        //                                                   background: "rgba(128, 0, 128, 0.1)",
        //                                                   borderRadius: '15px',
        //                                                   fontFamily: 'Montserrat',
        //                                                   fontSize: '18px'
        //                                               }} value={formProp.businessAddress} onChange={e => setFormProp({
        //                                         ...formProp,
        //                                         businessAddress: e.target.value
        //                                     })}></textarea>
        //                                 </Form.Row>
        //                                 <br/>
        //                                 <br/>
        //                                 <br/>
        //                             </Grid>
        //
        //
        //                         </Grid>
        //
        //                     </Form>
        //
        //                     <br/>
        //                     <Grid item container xs={12} spacing={2} direction="column" alignItems="center"
        //                           justify="flex-start">
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <button className={styles.newbutton}>
        //                                 <BsBoxArrowInRight style={{marginRight: "5px"}}/>
        //                                 Sign Up
        //                             </button>
        //                         </Grid>
        //
        //                         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        //                             <Link to="/login">
        //                                 <button className={styles.newbutton}>
        //                                     <i className="fas fa-paper-plane" style={{marginRight: "5px"}}></i>
        //                                     Login
        //                                 </button>
        //                             </Link>
        //                         </Grid>
        //                     </Grid>
        //
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //
        //
        //     </Grid>
        //     {/*</Grid>*/}
        //     <Footer/>
        // </div>


    )

}

export default SignupAdlForm1
