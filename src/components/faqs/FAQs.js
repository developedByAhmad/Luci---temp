import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './FAQs.module.css'
import Helmet from 'react-helmet'
import './myCollapse.css'
import Circle from '../../assets/circle.png'
import MiddleLine from '../../assets/faqs_line.png'
import {Collapse} from 'antd';
import axios from 'axios'
import url from "../axios_url/url";

const {Panel} = Collapse;


const api = axios.create({
  // baseURL: 'http://localhost:6003/api/faqs/'
  baseURL: url + '/api/faqs'
});


class FAQs extends Component {

  constructor() {
    super();
    this.state = {
      question1: '',
      answer1: '',
      question2: '',
      answer2: '',
      question3: '',
      answer3: '',
      question4: '',
      answer4: '',
      question5: '',
      answer5: '',
      question6: '',
      answer6: '',
      question7: '',
      answer7: '',
      question8: '',
      answer8: '',
      question9: '',
      answer9: '',
      question10: '',
      answer10: ''
    }

    api.get('/get_all_faqs').then(res => {

      console.log("res.data starts: " , res.data);

      this.setState({
        question1: '',
        answer1: '',
        question2: '',
        answer2: '',
        question3: '',
        answer3: '',
        question4: '',
        answer4: '',
        question5: '',
        answer5: '',
        question6: '',
        answer6: '',
        question7: '',
        answer7: '',
        question8: '',
        answer8: '',
        question9: '',
        answer9: '',
        question10: '',
        answer10: ''
      });

    });

  }

  render() {

    return (
      <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>

        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Helmet>

        <HeaderTwo/>

        <div className={styles.mainDiv}>
          <div style={{textAlign: 'center', color: '#4B176A', marginTop: '10px'}}>
            <h5 style={{fontWeight: 'bold', letterSpacing: '10px'}}>FREQUENTLY ASKED
              QUESTIONS</h5>
            <h6>Need help?</h6>
          </div>


          <div className={styles.flexContainer}>
            <div className={styles.flexChild}>


              <Collapse bordered={false} accordion className={styles.collapseWidth}>
                <Panel header="Lorem ipsum dolor sit amet ?" key="1"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="2"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="3"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="4"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="5"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
              </Collapse>


            </div>


            <div className={styles.flexChild2}>

              <img className={styles.lineScalling} src={MiddleLine}/>

            </div>

            <div className={styles.flexChild2}>


              <Collapse bordered={false} accordion className={styles.collapseWidth}>
                <Panel header="Lorem ipsum dolor sit amet ?" key="1"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="2"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="3"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="4"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
                <Panel header="Lorem ipsum dolor sit amet ?" key="5"
                       style={{borderRadius: '30px', maxWidth: '100%', boxShadow: '0px 3px 9px rgba(0, 0, 0, 0.25)'}}>
                  <p className={styles.paragraphTextPadding}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut
                    euismod.
                    Aenean et erat a felis vestibulum gravida.</p>
                </Panel>
                <br/>
              </Collapse>

            </div>
          </div>
        </div>


        <Footer/>
      </div>
    )
  }
}

export default withRouter(FAQs)