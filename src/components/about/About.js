import React from 'react'
import styles from './about.module.css'
import Header from './../header2/Header'
import Footer from './../footer/Footer';
import { Grid } from '@material-ui/core'

function About() {
    // const otherWay = {position:"fixed"}
    return (
        <div>
        <Header />
        <Grid xl={12} container className={styles.main} >
        <Grid xl={12} container direction="column" alignItems="center">
          <Grid item xl={10} lg={10} className={styles.bgAbout}>
            <p className={styles.teamText1}> About Us </p>
          </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8} style={{minWidth:"25%", backgroundColor:"#FFFFFF", border: "2px solid rgba(0, 0, 0, 0.05)", boxShadow: "0px 4px 35px -7px rgba(0, 0, 0, 0.15)"}} alignItems="center"  direction="column" container className={styles.newlogin}>
              <Grid item xs={6}>
              
              <h1 className={styles.teamText2}> Find out more about your Real Estate Investing Software </h1>
              <p className={styles.newText} style={{marginBottom: "15px", paddingBottom: "10px"}}>
                LUCI is a real estate investing software that was created to revolutionize real estate investment. We provide services tailored to your needs to make real estate investing easy, quick, and straightforward. Our platform allows investors to analyze investment opportunities and track them through the process. Also, with this software, users can track how well their investments are performing.
                Our software provides an analysis of a potential property, calculates projected returns, and tracks the investment development. All while allowing users to customize reports they share with banks or private financing to get funding. And with the API integrated program, users can do market research.
                Besides, each user has a personal dashboard showing their previous investments, active portfolio, properties under contract, properties with submitted offers, and analyzed properties saved into their system. 
                Gone are the days of using excel sheets to help you manage an entire business. And if you are still using some outdated system, you may be falling behind and losing your competitive edge with other investors in the industry.
                How to Shortcut Step by Step the Real Estate Investing process. <br /> <br />
                
                
                <span className={styles.teamText2} style={{textAlign: "left"}}> LUCI is an interactive real estate investing assistant with the ability to: </span>
  
                <li>1. Perform analysis on a property for long-term, short-term, new construction, and fix and flip real estate investing strategies. Also, save all the data for future reference and appropriately model different business and funding structures for the investors. This means you can run a quick analysis on a property you come across, and the system will let you know if there is money to be made.</li>
                <li>2. Produce customizable reports that can be easily converted into a webpage or printed out in a pdf file format. The clean and customized reports will help look more professional in front of potential funding partners.</li>
                <li>3. Track an investment opportunity throughout the entire life of the deal from pre-offer, submitting an offer, getting a bid accepted, through renovation/construction, during the holding period, and then at the close of the investment.</li>
                <li>4. Track your personal/business performance of real estate investing with past investments and current investments. This process will also allow you to compare prior years to your current return rate. This will help you improve your performance. What gets measured gets improved.</li>
                <li>5. Build a real estate team and have different teams for different strategies or areas. This means you have a contact book that will enable you to quickly call/email members of the team to handle potential issues or keep in touch. You can pass off responsibilities and delegate tasks as you grow.</li>
                <br />
              </p>
                </Grid>

              <Grid item xs={6}>
                <p>
                LUCI will keep you organized and allow you to be more efficient with your time and your team. Leveraging technology will give you a competitive edge and help you scale your business faster. 
                <br /><br />

                </p>
                <h1 className={styles.teamText2}>Our Story!</h1>
                <p className={styles.newText} style={{marginBottom: "15px", paddingBottom: "30px"}}>
                <b> John D Steiner </b>, owner and founder of <b> LUCI </b>, comes from a long estate investing line. As a young boy, he watches his grandfather provide stability with long-term rental properties. And with that extra income, his grandfather was able to take care of his employees from his construction business. Although his uncle earned a mechanical engineer degree, he also joined the real estate industry as an investor and a broker. So, after John graduated with a bachelor of science in mathematics, he worked as an engineer making a great living producing algorithms for complex radar systems. But, when he got married, he wanted to spend more quality time with his family. So, he followed his grandfather's and uncle's footsteps because he was already familiar with the industry, but he has seen what investing in real estate can do.
                However, John decided to take a step further and dove deep into real estate investing strategies. After some intense learning, he began offering his skills to other investors as a freelancer. He even started teaching real estate investing courses.
                Until then, he was still using Excel and Google sheets to create his investment models. But he got tired of doing everything manually, and it was time-consuming. It just was not working anymore. The method all serious investors have been using was clunky and outdated. Not to mention, the more investments, the more cumbersome it got. Steiner knew there had to be a better way; a software that can replace Excel and provide automation.
                Then as an engineer, he worked hard to find the solution, and he was finally able to develop LUCI. A software designed not only to provide automation but to simplify real estate investing and save more time. As well as provide other services to serve the small and mid-size real estate investment businesses.
                    
                <h1 className={styles.teamText2}>Our goals with the real estate investing software</h1>
                One of our main goals with the software is to provide an affordable and valuable tool to investors. Whether you are just starting or you have been investing in real estate for a long time. 
                We want people to have more time to spend with their family and doing what they love. And we want to help you scale your business and build financial wealth.
                Our second goal is to help you save money. When you have to do everything separately, it is time-consuming. We all know time is money. Imagine how successful you would be as a real estate investor if you had everything you need in one place. LUCI is truly a one-stop-shop. 
                Our mission is to provide the best tools necessary for real estate investors to achieve success and freedom.
                
                <h1 className={styles.teamText2}>The vision</h1>
                Our vision is to redirect the entire industry with a superior product that would create a new normal for real estate investors. We will keep working and keep innovating. We believe no one should spend their valuable time doing the things that can be done by technology. 
                So, join us today and let LUCI take care of your business while you spend quality time with the people you love.
             </p>
              </Grid>
            </Grid>
          </Grid>   
        </Grid> 
        <Footer />
      </div>
    )
}

export default About;
