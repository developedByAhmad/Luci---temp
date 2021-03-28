import React, {Component, useState} from 'react'
import HeaderThree from "../header2/HeaderThree";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import BodyImage from './../../assets/admin_login_body_image.png'
import styles from './admin_login.module.css'
import axios from 'axios'
import url from "../axios_url/url";
import {Grid} from "@material-ui/core";

var userToken = localStorage.getItem('loginToken')
const api = axios.create({
    // baseURL: 'http://localhost:6003/api/admin/'
    baseURL: url + '/api/admin',
    headers: {
        "Content-Type": "application/json",
        'authorization': `${userToken}`
    },
});


class AdminLogin extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitLogin = async () => {

        let res = await api.post('/login',
            {
                email: `${this.state.email}`,
                password: `${this.state.password}`
            }).then((r) => {

                console.log("res: ", r);

                if (r.data === "" || r.data === null || r.data === undefined)
                    console.log("invalid username or password");
                else
                    window.location.href = '/pending_users';


                // if (r.data != null || r.data != "" || r.data != undefined || r.data.isEmpty() == false)
                //     window.location.href = '/pending_users';



        })
    }


    render() {

        return (

            <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>
                <HeaderThree/>


                <h1 className={styles.headingStyle}>Admin Login</h1>

                <div className={styles.flexContainer}>

                    <div className={styles.flexChild}>
                        <img src={BodyImage} style={{width: 'auto', height: 'auto'}}/>
                    </div>

                    <div className={styles.flexChild2}>
                        <div className={"row"}>
                            <label>Email</label>
                            <input type="text" name={"email"} className={styles.flex_input} type="text"
                                   style={{borderColor: 'currentColor'}} onChange={this.handleChange}
                                   value={this.state.email}/>
                        </div>
                        <br/>

                        <div className={"row"}>
                            <label>Password</label>
                            <input type="password" name={"password"} className={styles.flex_input}
                                   style={{borderColor: 'currentColor'}} onChange={this.handleChange}
                                   value={this.state.password}/>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <div className={"row"}>
                            <button onClick={this.submitLogin} className={"flexbutton"} style={{
                                width: '100%',
                                height: '50px',
                                fontWeight: 'bold',
                                borderRadius: '15px',
                                background: '#4B176A',
                                color: 'white',
                                borderColor: 'currentColor'
                            }}>Log in
                            </button>
                        </div>


                    </div>


                </div>


                <Footer/>
            </div>

        )
    }
}


export default withRouter(AdminLogin)
