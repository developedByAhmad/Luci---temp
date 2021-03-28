import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './pending_users.module.css'
import UserIcon from '../../assets/userIcon.png'
import axios from 'axios'
// import url from "../axios_url/url";
import {BsCheck, BsX} from 'react-icons/bs'
import {Button} from 'react-bootstrap'
import {Grid} from '@material-ui/core'
import Media from 'react-media'
import {Fragment} from "react";
import axiosInstance from "../../axios-Instance";


// var userToken = localStorage.getItem('loginToken')
// const api = axios.create({
//     // baseURL: 'http://localhost:6003/api/payment_details/'
//     baseURL: url + '/api/admin',
//     headers: {
//         "Content-Type": "application/json",
//         'authorization': `${userToken}`
//     },
// });

class PendingUsers extends Component {

    state = {
        allRequests: []
    };

    getRequest = (id) => {
        return this.state.allRequests
            .filter((request) => request._id === id)
            .map((request) => request)[0];
    }

    componentDidMount() {

        let res = axiosInstance.get('/api/admin/view_pending_requests').then((res) => {
            console.log(res.data)
            this.setState({allRequests: res.data})
        })
    }

    acceptEveryone = async () => {

        let res = await axiosInstance.get('/api/admin/approve_all_requests').then(res => {
            window.location.href = "/pending_users"
        })
    }

    denyEveryone = async () => {

        let res = await axiosInstance.get('/api/admin/deny_all_requests').then(res => {
            window.location.href = "/pending_users";
        })
    }

    acceptUser = async (id) => {

        // await console.log("id: ", id)

        let res = await axiosInstance.get(`/api/admin/approve_signup_request/${id}`).then(res => {
            window.location.href = "/pending_users";
        })
    }

    denyUser = async (id) => {

        await console.log("id: ", id)

        let res = await axiosInstance.get(`/api/admin/deny_signup_request/${id}`).then(res => {
            window.location.href = "/pending_users";
        })

    }


    render() {


        this.state.allRequests.map((request_item_data, i) => console.log("req " + i + " :", request_item_data))

        let requestItem = null;
        requestItem = this.state.allRequests.map((request_item_data, i) => (

            <div className="col" style={{display: '-webkit-box', marginBottom: '35px'}}>
                <img src={UserIcon} className={styles.userIcon}/>
                <div style={{color: '4B176A', marginLeft: '10px'}}>
                    <h4 className={styles.nameSize} style={{
                        fontWeight: 'bold',
                        color: '#4B176A', textAlign: 'left'
                    }}>{request_item_data.firstName + " " + request_item_data.lastName}</h4>
                    <p className={styles.messageSize}>{request_item_data.address}</p>
                </div>
            </div>
        ))


        let decision = null;


        decision = this.state.allRequests.map((request_item_data, i) => (


            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>{matches => (
                <Fragment>
                    {matches.small && <div className="col" style={{display: '-webkit-box', marginBottom: '45px'}}>

                        <Button variant="secondary" className={styles.acceptButtonMargin} size="sm" onClick={() => {
                            this.acceptUser(request_item_data._id)
                        }}>
                            <BsCheck></BsCheck>
                        </Button>

                        <Button variant="secondary" className={styles.denyButtonMargin} size="sm" onClick={() => {
                            this.denyUser(request_item_data._id)
                        }}>
                            <BsX></BsX>
                        </Button>

                    </div>}

                    {matches.medium && <div className="col" style={{display: '-webkit-box', marginBottom: '45px'}}>

                        <Button variant="secondary" className={styles.acceptButtonMargin} size="lg" onClick={() => {
                            this.acceptUser(request_item_data._id)
                        }}>
                            <BsCheck style={{marginRight: '10px'}}></BsCheck>
                            Accept
                        </Button>

                        <Button variant="secondary" className={styles.denyButtonMargin} size="lg" onClick={() => {
                            this.denyUser(request_item_data._id)
                        }}>
                            <BsX style={{marginRight: '10px'}}></BsX>
                            Deny
                        </Button>

                    </div>}

                    {matches.large && <div className="col" style={{display: '-webkit-box', marginBottom: '45px'}}>

                        <Button variant="secondary" className={styles.acceptButtonMargin} size="lg" onClick={() => {
                            this.acceptUser(request_item_data._id)
                        }}>
                            <BsCheck style={{marginRight: '10px'}}></BsCheck>
                            Accept
                        </Button>

                        <Button variant="secondary" className={styles.denyButtonMargin} size="lg" onClick={() => {
                            this.denyUser(request_item_data._id)
                        }}>
                            <BsX style={{marginRight: '10px'}}></BsX>
                            Deny
                        </Button>

                    </div>}
                </Fragment>
            )}


            </Media>


        ))

        let req_status;
        if (this.state.allRequests.length > 1)
            req_status = <h5 className={styles.countStatus}>{this.state.allRequests.length} Pending Users</h5>
        else
            req_status = <h5 className={styles.countStatus}>{this.state.allRequests.length} Pending User</h5>


        return (
            <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>
                <HeaderTwo/>


                <h5 style={{textAlign: 'center', fontWeight: 'bold', color: '#4B176A'}}>Pending Users</h5>

                <div className={styles.flexContainer}>

                    <Grid container xs={10} sm={12} md={12} lg={12} xl={12} direction="row" alignItems="center"
                          justify="center">
                        <Grid container alignItems="center" justify="center">
                            <Grid item direction="row">
                                <Button variant="secondary" size="lg" style={{
                                    background: '#4B176A',
                                    width: '350px',
                                    fontSize: '25px',
                                    fontWeight: 'bold',
                                    borderRadius: '15px',
                                    margin: '5px 5px 5px 5px',
                                    fontFamily: 'Montserrat'
                                }} onClick={this.acceptEveryone}>
                                    <BsCheck style={{marginRight: '10px'}}/>
                                    Accept Everyone
                                </Button>{' '}
                                <Button variant="secondary" size="lg" style={{
                                    background: '#4B176A',
                                    width: '350px',
                                    fontSize: '25px',
                                    fontWeight: 'bold',
                                    borderRadius: '15px',
                                    margin: '5px 5px 5px 5px',
                                    fontFamily: 'Montserrat'
                                }} onClick={this.denyEveryone}>
                                    <BsX style={{marginRight: '10px'}}/>
                                    Deny Everyone
                                </Button>
                            </Grid>


                        </Grid>
                    </Grid>

                    {/*<div className={styles.flexChild_option1}>*/}
                    {/*    <img src={AcceptEveryone} style={{width: 'auto', height: 'auto'}}/>*/}
                    {/*</div>*/}

                    {/*<div className={styles.flexChild_option2}>*/}
                    {/*    <img src={DenyEveryone} style={{width: 'auto', height: 'auto'}}/>*/}
                    {/*</div>*/}
                </div>

                <Grid container xs={12} sm={12} md={12} lg={12} xl={12} direction="column" alignItems="center"
                      justify="center">
                    <Grid container alignItems="center" justify="space-around" className={styles.countStatus}>

                        <Grid item direction="row">
                            <div> {req_status} </div>
                        </Grid>

                    </Grid>
                </Grid>


                {/*<div> {req_status} </div>*/}

                <div className={styles.flexContainer}>

                    <Grid container xs={10} sm={12} md={12} lg={12} xl={12} direction="column" alignItems="center"
                          justify="center">
                        <Grid container /*xs={6} sm={6} md={8} lg={10} xl={12}*/ alignItems="center" justify="center"
                              className={styles.leftGridMargin}>
                            <Grid item direction="row">
                                <div>{requestItem}</div>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container xs={10} sm={12} md={12} lg={12} xl={12} direction="column" alignItems="center"
                          justify="center">
                        <Grid container /*xs={12} sm={12} md={10} lg={10} xl={12}*/ alignItems="center" justify="center"
                              className={styles.rightGridMargin}>

                            <Grid item direction="row">
                                <div>{decision}</div>
                            </Grid>

                        </Grid>
                    </Grid>


                    {/*<div className={styles.flexChild}>*/}

                    {/*<div>{requestItem}</div>*/}


                    {/*<div className={"col"} style={{display: '-webkit-box', marginBottom: '35px'}}>*/}
                    {/*  <img src={UserIcon} style={{width: 'auto', height: 'auto'}}/>*/}
                    {/*  <div style={{color: '4B176A', marginLeft: '10px'}}>*/}
                    {/*    <h4 className={styles.nameSize} style={{fontWeight: 'bold', color: '#4B176A'}}>Robart Disney</h4>*/}
                    {/*    <p className={styles.messageSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}


                    {/*</div>*/}

                    {/*<div className={styles.flexChild2}>*/}

                    {/*<div>{decision}</div>*/}


                    {/*<div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>*/}
                    {/*    <img src={Accept} className={styles.acceptButtonMargin}/>*/}
                    {/*    <img src={Deny} className={styles.denyButtonMargin}/>*/}
                    {/*</div>*/}

                    {/*<div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>*/}
                    {/*    <img src={Accept} className={styles.acceptButtonMargin}/>*/}
                    {/*    <img src={Deny} className={styles.denyButtonMargin}/>*/}
                    {/*</div>*/}

                    {/*<div className={"col"} style={{display: '-webkit-box', marginBottom: '45px'}}>*/}
                    {/*    <img src={Accept} className={styles.acceptButtonMargin}/>*/}
                    {/*    <img src={Deny} className={styles.denyButtonMargin}/>*/}
                    {/*</div>*/}


                    {/*</div>*/}
                </div>

                <Footer/>
            </div>
        )
    }

}

export default withRouter(PendingUsers)