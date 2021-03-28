import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './chat_design.module.css'
import Helmet from 'react-helmet'



class temp extends Component {

  render() {
    return (

      <div>
        <Helmet>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                id="bootstrap-css"/>
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </Helmet>

        <HeaderTwo/>
        <div className={styles.flexContainer}>

          <div className={styles.messaging}>
            <div className={styles.inbox_msg}>
              <div  className={styles.inbox_people}>
                <div  className={styles.headind_srch}>
                  <div  className={styles.recent_heading}>
                    <h4>Recent</h4>
                  </div>
                  <div  className={styles.srch_bar}>
                    <div className="stylish-input-group">
                      <input type="text" className="search-bar" placeholder="Search"/>
                    </div>
                  </div>
                </div>
                <div  className={styles.inbox_chat} className={"scroll"}>
                  <div  className={styles.chat_list} className={styles.active_chat}>
                    <div  className={styles.chat_people}>
                      <div className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                            alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil" />
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.chat_list}>
                    <div  className={styles.chat_people}>
                      <div  className={styles.chat_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                             alt="sunil"/>
                      </div>
                      <div  className={styles.chat_ib}>
                        <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                        <p>Test, which is a new approach to have all solutions
                          astrology under one roof.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  className={styles.mesgs}>
                <div  className={styles.msg_history}>
                  <div className="incoming_msg">
                    <div  className={styles.incoming_msg_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                                   alt="sunil"/></div>
                    <div  className={styles.received_msg}>
                      <div  className={styles.received_withd_msg}>
                        <p>Test which is a new approach to have all
                          solutions</p>
                        <span  className={styles.time_date}> 11:01 AM    |    June 9</span></div>
                    </div>
                  </div>
                  <div  className={styles.outgoing_msg}>
                    <div  className={styles.sent_msg}>
                      <p>Test which is a new approach to have all
                        solutions</p>
                      <span  className={styles.time_date}> 11:01 AM    |    June 9</span></div>
                  </div>
                  <div className="incoming_msg">
                    <div  className={styles.incoming_msg_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                                   alt="sunil"/></div>
                    <div  className={styles.received_msg}>
                      <div  className={styles.received_withd_msg}>
                        <p>Test, which is a new approach to have</p>
                        <span  className={styles.time_date}> 11:01 AM    |    Yesterday</span></div>
                    </div>
                  </div>
                  <div  className={styles.outgoing_msg}>
                    <div  className={styles.sent_msg}>
                      <p>Apollo University, Delhi, India Test</p>
                      <span  className={styles.time_date}> 11:01 AM    |    Today</span></div>
                  </div>
                  <div className="incoming_msg">
                    <div  className={styles.incoming_msg_img}><img src="https://ptetutorials.com/images/user-profile.png"
                                                                   alt="sunil"/></div>
                    <div  className={styles.received_msg}>
                      <div  className={styles.received_withd_msg}>
                        <p>We work directly with our designers and suppliers,
                          and sell direct to you, which means quality, exclusive
                          products, at a price anyone can afford.</p>
                        <span  className={styles.time_date}> 11:01 AM    |    Today</span></div>
                    </div>
                  </div>
                </div>
                <div  className={styles.type_msg}>
                  <div  className={styles.input_msg_write}>
                    <input type="text"  className={styles.input_msg_write} placeholder="Type a message"/>
                    <button  className={styles.msg_send_btn} type="button"><i className="fa fa-paper-plane"
                                                                              aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*<div className={styles.flexChild}>*/}
          {/*  <h5 style={{fontWeight: 'bold', color: '#4B176A'}}>Messages</h5>*/}
          {/*</div>*/}

          {/*<div className={styles.flexChild2}></div>*/}


        </div>

        <Footer/>


      </div>

    )
  }

}

export default withRouter(temp)