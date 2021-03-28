import React, {Component} from 'react'
import Header from "../header2/Header";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import BodyImage from '../../assets/payment_details_body_image.png'
import {Helmet} from "react-helmet";
import styles from './payment_details.module.css'
import './checkbox.css'
import axios from 'axios'
import url from "../axios_url/url";

var userToken = localStorage.getItem('loginToken')
const api = axios.create({
  // baseURL: 'http://localhost:6003/api/payment_details/'
  baseURL: url + '/api/payment_details',
  headers: {
    "Content-Type": "application/json",
    'authorization': `${userToken}`
  },
});

class PaymentDetails extends Component{

  employee_id = '1234567891012131415';

  constructor() {
    super();

    this.state = {
      employee_id: '',
      name_of_card: '',
      card_number: '',
      valid_through: '',
      cvv: '',
      payment_per_month: '',
      payment_per_year: ''
    }


    this.onChange = this.handleChange.bind(this);

    const ConsoleLog = ({ children }) => {
      console.log(children);
      return false;
    };

    api.get('/get_details/',
        {
          params: {
            employee_id: `${this.employee_id}`
          }
        }).then(res =>
    {
          this.setState(res.data);
          console.log(res.data);

    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
  }

  pay = async () => {

    if (this.state.payment_per_month)
      this.state.type_of_plan = '$50/Month'
      // console.log("ok per month")

    if (this.state.payment_per_year)
      this.state.type_of_plan = '$550/Year'
      // console.log("ok per year")


    let res = await api.post('/pay',
        {
          employee_id: `${this.employee_id}`,
          name_of_card: `${this.state.name_of_card}`,
          card_number: `${this.state.card_number}`,
          valid_through: `${this.state.valid_through}`,
          cvv: `${this.state.cvv}`,
          type_of_plan: `${this.state.type_of_plan}`
          // type_of_plan: `${this.state.type_of_plan}`


    });

  }

  render() {
    return (

      <div style={{background:'white'}}>

        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Helmet>


        <Header/>

        <div className={"flex-container"}>
          <h3 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px', color: '#4B176A'}}>Payment Details</h3>
        </div>

        <div className={styles.flexContainer} style={{marginTop:'60px'}}>
          <div className={styles.flexChild} /*style={{marginLeft: '83px'}}*/>
            <img className={styles.bodyImage} src={BodyImage}/>
          </div>


          <div className={styles.flexChild}  /*style={{marginLeft: '100px'}}*/>
            <br/>
            <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Card Details</h6>
            <br/>
            <br/>

            <div className={"row"}>
              <label>Name Of Card</label>
              <input type="text" name={"name_of_card"} onChange={this.handleChange} value={this.state.name_of_card} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>


            <div className={"row"}>
              <label>Card Number</label>
              <input type="text" name={"card_number"} onChange={this.handleChange} value={this.state.card_number} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>


            <div className={"row"}>
              <label>Valid Through</label>
              <input type="text" name={"valid_through"} onChange={this.handleChange} value={this.state.valid_through} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>

            <br/>


            <div className={"row"}>
              <label>CVV</label>
              <input type="text" name={"cvv"} onChange={this.handleChange} value={this.state.cvv} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
            <br/>
            <br/>

            <h6 style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}>Choose Type Of Plan</h6>
            <br/>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" name={"payment_per_month"} onClick={this.handleChange} checked={this.state.payment_per_month} value={"$50/Month"} id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                $50/Month
              </label>
            </div>
            <br/>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name={"payment_per_year"} onClick={this.handleChange} checked={this.state.payment_per_year} value={"$550/Year"} id="flexCheckChecked"/>
              <label className="form-check-label" htmlFor="flexCheckChecked">
                $550/Year
              </label>
            </div>



            <br/>
            <br/>
            <br/>
            <div className={styles.otherChild}>
              <button onClick={this.pay} className={"flexbutton"} style={{borderColor: 'currentColor'}} /*style={{width: '85%', height:'86px', fontWeight: 'bold', borderRadius:'20px'}}*/>PAY</button>
            </div>


          </div>

        </div>

        <Footer/>

      </div>

    )
  }

}

export default PaymentDetails
