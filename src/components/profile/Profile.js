import React, {useState} from 'react'
import Header from '../header2/Header'
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import ProfileImage from '../../assets/profile_image_with_camera_icon.png'
import specificStyles from "./property.module.css";
import styles from './profile.module.css'
import { Grid } from "@material-ui/core"
import { BiPencil } from "react-icons/bi"
import { Form, Col, FormGroup } from 'react-bootstrap';
import { createUseStyles, useTheme } from 'react-jss';



const useStyles = createUseStyles({
  input: {
      // backgroundColor: "rgba(128, 0, 128, 0.1)",
      borderRadius: "15px",
      background: "#EEEEEE",
      borderRadius: "9px",
      height:"59px",
      marginBottom:"17px"
  },
  inputtwo: {
      backgroundColor: "rgba(128, 0, 128, 0.1)",
      borderRadius: "15px",
      width: "60%",
      height: "57px",
      marginBottom: "15px"
  },
  margins: {
      marginTop: "10px",
      marginLeft: "15px"
  }
});


function Profile() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [profImage, setprofImage] = useState(null);
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onChangeProfPicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setprofImage(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

    return(
      <Grid container xs={12} direction="row" style={{backgroundColor: "#FFFFFF"}} justify="center">
        <Grid item xs={12}>
          <Header/>
        </Grid>
        
        <Grid item container xs={11} direction="row" justify="center" alignItems="flex-start" className={styles.maindiv}>
          <Grid item xs={12}>
            <h1 className={styles.profileHeader}> Profile </h1>
          </Grid>

          <Grid item xl={5} lg={5} md={6} sm={12} xs={12}>
            {/* <img className={styles.profileImage} src={ProfileImage}/> */}

            {/* <img style={{marginTop:"40px"}} className={styles.profileImage} src={ProfileImage}/> */}
            <label class="custom-file-upload">
            <input type="file"/>
                <i class="fa fa-cloud-upload"></i> Custom Upload
            </label>
            <input className={styles.inputImage} type="file" onChange={onChangePicture} />
            <img className={styles.profileImage} src={imgData} />


            <br />
            <br />
            <br />
            <br />

            <input id="profilePic" type="file" onChange={onChangeProfPicture} />
            <img className={styles.profileImage} src={profImage} />
          </Grid>

          <Grid item container xl={5} lg={5} md={6} sm={12} xs={12} style={{padding: "20px"}}>
            <Grid item xs={12}>
              <p className={styles.profileh3}> UserName     <BiPencil /> </p>
            </Grid>
            <Grid item xs={12}>
              <p className={styles.profileText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse tristique sit amet nibh sit amet sagittis. Mauris aliquet erat sit amet vestibulum lacinia.</p>
            </Grid>

            <Grid item xs={12}>
              <p className={styles.profileh3} style={{marginTop: "50px"}}> Account Information </p>

              <Form style={{marginTop: "30px"}}>
              <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}>Name on Card</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" 
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}>Card Number</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="0 0 0 0 0 0 0"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}>CVC</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="0 0 0 0 0 0 0"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}>Zip Code</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="0 0 0 0 0 0 0"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}>Phone Number</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="0 0 0 0 0 0 0"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}> Address</Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  className={classes.input} type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder=" Lorem ispum dolor sit amet"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}> Gender </Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  className={classes.input} type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="Male"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}> Nationality </Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  className={classes.input} type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="text" placeholder="Male"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.dropdownProfile}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{display: "in-line"}}>
                  <Form.Group as={Col} sm={4}>
                    <Form.Label className={styles.profileLabel}> Password </Form.Label>
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    {/* <Form.Control name="afterRepairValue"  className={classes.input} type="text" */} 
                      {/* //  value={contextType.Assumptions.afterRepairValue} */}
                          {/* // onChange={(e) => contextType.handleChange(e, 'Assumptions')}  */}
                    {/* /> */}
                  </Form.Group>

                  <Form.Group as={Col} sm={8}>
                    {/* <Form.Label>Phone Number</Form.Label> */}
                      {/* <Form.Control className={classes.input} type="text" /> */}
                    <Form.Control name="afterRepairValue"  className={classes.input} type="password"
                      //  value={contextType.Assumptions.afterRepairValue}
                          // onChange={(e) => contextType.handleChange(e, 'Assumptions')} 
                    id={styles.profileIcon}
                    />
                  </Form.Group>
                </Form.Row>
            </Form>
            </Grid>   
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>

      // <div style={{background:'white', color:'4B176A'}}>

      //   <div className={"flex-container"}>
      //     <h4 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px', color: '#4B176A'}}>Profile</h3>
      //   </div>

      //   <div className={styles.flexContainer}>
      //     <div className={styles.flexChild} /*style={{marginTop:'30px' margin-left: 350px;}} */>
      //       <img className={styles.profileImage} src={ProfileImage}/>
      //     </div>

      //     <div className={styles.flexChild2} style={{maxWidth:'80%', /*marginLeft:'150px',*/ marginTop:'50px'}}>

      //       <h6 className={styles.headingTextSize} /*style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}*/>Jone Doe</h6>
      //       <p className={styles.paragraphTextSize} /*style={{textAlign:'left'}}*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique sit amet nibh sit amet sagittis. Mauris aliquet erat sit amet vestibulum lacinia.</p>
      //       <br/>
      //       <br/>
      //       <h6 className={styles.headingTextSize} /*style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}*/>Account Information</h6>

      //       <br/>
      //       <div className="row">
      //         <label>Phone Number</label>
      //         <input type="text" id={"phone_number"} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
      //           color: 'black',
      //           borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}} placeholder={"0 0 0 0 0  0 0 0 0 0"}/>
      //       </div>


      //       <div className="row">
      //         <label>Gender</label>
      //         <input type="text" id={"gender"} className={styles.flex_input}  style={{background: 'rgba(0, 0, 0, 0.1)',
      //           borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}} placeholder={"Male"}/>
      //       </div>

      //       <div className="row">
      //         <label>Nationality</label>
      //         <input list="nationality" id={"inputIcon"} className={styles.flex_input} type="text" style={{background: 'rgba(0, 0, 0, 0.1)',
      //           borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}} placeholder={"USA"}/>
      //         <datalist id={"nationality"}>
      //           <option value={"value1"}/>
      //           <option value={"value2"}/>
      //           <option value={"value3"}/>
      //         </datalist>

      //       </div>

      //       <div className="row">
      //         <label>Address</label>
      //         <input type="text" id={"address"} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
      //           borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}} placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur ornare urna ut euismod. Aenean et erat a felis vestibulum gravida."}/>
      //       </div>

      //       <div className="row">
      //         <label>Password</label>
      //         <input type="password" id={"password"} className={styles.flex_input} style={{background: 'rgba(0, 0, 0, 0.1)',
      //           borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}} placeholder={"************"}/>
      //       </div>
      //     </div>
      //   </div>


      // </div>

    )
  }

export default Profile
