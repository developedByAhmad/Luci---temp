import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styles from "./home.module.css";
import Headers from '../header2/Header';
import Footer from '../footer/Footer';
import {withRouter} from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs'
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        const otherWay = { position:"fixed"}
        // const { Header, Footer, Sider, Content } = Layout;
        return (
            <div className={styles.home}>
                            <Grid container justify="flex-start"  direction="column">
                <Grid item>
                    <Headers/>
                </Grid>
                
                    <Grid item container xl={4} lg={5} md={6} sm={6} xs={10} direction="column" alignItems="flex-end" style={{ minHeight: '600px'}}>
                        <Grid item>
                            <p className={styles.newHomeLuci}> Luci </p>
                        </Grid>
                        <Grid item>
                            <p className={styles.newHomeText}>An interactive real estate investing asssistant</p>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">
                                <button style={{background:"#fff", color:"#4B176A", border:"1px solid #4B176A"}} className={styles.newButtonLuci} onClick={() => this.nextPath('/signup')}> < BsBoxArrowInRight />   <span>Sign up </span></button>    
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/login"> 
                                <button className={styles.newButtonLuci} onClick={() => this.nextPath('/login')} style={{marginTop:"20px"}}> <i class="fas fa-paper-plane"></i><span>Login</span> </button>
                            </Link>  
                        </Grid>

                    </Grid>
              <Footer style={otherWay}/>            
            </Grid>
            </div>

            // <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                    // <div>
                        /* <Header />
                        <section className={styles.home}>
                      <div className="container-fluid">
                                <div className={styles.rowMain}>
                                            <p className={styles.homeLuciImg}> Luci </p>
                                            <p className={styles.homeLuciText}>An interactive real estate investing asssistant</p>
                                </div>  
                                <div>
                                    <div>
                                    <div className={styles.rowMain}>
                                            <Link to="/signup"><button onClick={() => this.nextPath('/signup')} className={styles.homeButtonSign}> < BsBoxArrowInRight />   <span>Sign up </span></button>    
                                            </Link>
                                    </div>
                                    <div className={styles.rowMain}>        
                                           <Link to="/login"> 
                                                <button onClick={() => this.nextPath('/login')} className={styles.homeButtonLogin}> <i class="fas fa-paper-plane"></i><span>Login</span> </button>
                                           </Link> 
                                      </div>
                                    </div>
                            
                                </div>
                            </div>
                        </section>
                        <Footer /> */
       

   
   
     
         
          /* <div className="main-container bg">
             <div className="row left">
                <h2 style={{fontSize:"140px"}}>Luci</h2>
            </div>
            <div>
                <div className="row left">
                    <p className={styles.mainText}>An interactive real estate investing assistant</p>
                </div> 
                <div className="row">
                    <button onClick={() => this.nextPath('/signup')} className={styles.homeButtonSign}> < BsBoxArrowInRight />   <span>Sign up </span></button>    
                </div>
                <div className="row">
                    <button onClick={() => this.nextPath('/login')} className={styles.homeButtonLogin}> <i class="fas fa-paper-plane"></i><span>Login</span> </button>
                </div>
            </div>
          </div> */



    /* </Content> */
       
  
      
        )
    }
}

export default withRouter(Home);
