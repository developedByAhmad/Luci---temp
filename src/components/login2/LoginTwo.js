import React,{useState,useContext}from 'react'
import { Link, Redirect, withRouter ,useHistory} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import styles from "./loginTwo.module.css"
import { Form } from "react-bootstrap"
import { BsBoxArrowInRight } from 'react-icons/bs';
import axiosInstance from "../../axios-Instance";
import { Components } from 'antd/lib/date-picker/generatePicker'
import { ContextApi } from "../../ContextApi/contextApi";
import Alert from "react-bootstrap/Alert";



const LoginTwo = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loggedIn: false,
    loginMessage: "",
    username_error_text: null,
    password_error_text: null,
    disabled: true,
    loginID: null,
    Loginalert: null,
  })
  const contextType = useContext(ContextApi)
  const history=useHistory();

  React.useEffect(() => {

    
    console.log(contextType);


  },[contextType.loginToken]);

  const handleChange = (event) => {
    setLogin({ ...login,[event.target.name]: event.target.value });
    console.log(event.target.value)
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    setLogin({ Loginalert: null });
    const user = {
      email: login.email,
      password: login.password,
    };
    console.log(user);

    axiosInstance
      .post("/api/authentication/login", user)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("loginToken", token);
        // let msg = res.data.message;
        // let loginID = res.data.id;
        // console.log("login Id :", res.data.id);
        // setAuthToken(token);
        // localStorage.setItem("loginId", loginID);
        // let message = res.data.message;
        // console.log(message);
        // alert("Logged in SuccessFully");
        // setLogin({
        //   Loginalert: {
        //     variant: "success",
        //     message: "Log In SuccessFully",
        //   },
        // });
        setLogin({
          email: "",
          password: "",
          loggedIn: true,
          Loginalert: {
            variant: "success",
            message: "Log-In Successful",
          },
          // loginMessage: msg,
          // loginID: loginID,
        });
        // return <Redirect push to="/property"/>
        contextType.routeChangeHandler(token);
        // contextType.loginToken=token;
        // props.history.push("/property");
        // if(props.match.url!="/property")
        // {window.location.href="/property"};
        console.log(props);
      })
      .catch((err) => {
        // setLogin({
        //   loginMessage: err.response.data.message,
        // });
        console.log(err);
        setLogin({
          Loginalert: {
            variant: "danger",
            message: err.response.data.message,
          },
        });
        // setLogin({
        //   Loginalert: { variant: "danger", message: "Not Signup " },
        // });
        console.log(err);
      });
  };

  return (
    <div className={styles.home} style={{ backgroundColor: "#E5E5E5" }}>
      <Header />
      <Grid xl={12} container direction="column" alignItems="center" justify="center">
      
        <Grid xl={10} container direction="row" justify="center" className={styles.mainLogin}>

          <Grid item xs={10} sm={8} md={8} lg={6} xl={6} style={{ height: '86%', minWidth: "29%", backgroundColor: "#FFFFFF", margin: "20px 0px" }} container className={styles.newlogin}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container direction="column" alignItems="center" justify="flex-start">
              <Grid item style={{ marginTop: "15px" }}>
              {login.Loginalert !== null && (
                <Alert
                  style={{
                    vertical: "top",
                    horizontal: "center",
                    width: "400px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                  variant={login.Loginalert.variant}
                >
                  {login.Loginalert.message}
                </Alert>
              )}
                <h1 className={styles.newheading}> Luci </h1>
              </Grid>
              <Grid item style={{ marginTop: "10px" }}>
                <p className={styles.newtext}> An interactive real estate investing assistant</p>
              </Grid>

              <Grid item container direction="column" alignItems="center" justify="flex-start" style={{ marginTop: "5px" }}>
                <Form>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Group>
                      <Form.Control title="email" className={styles.newinput} id={styles.userIcon} type="text" name="email" value={login.email} onChange={(e) => handleChange(e)} placeholder="Email"></Form.Control>
                    </Form.Group>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Group>
                      <Form.Control className={styles.newinput} id={styles.passIcon} type="password" name="password" value={login.password} onChange={(e) => handleChange(e)} placeholder="Password" />
                    </Form.Group>
                  </Grid>


                  <Grid item container xs={12} spacing={2} m={2} direction="column" alignItems="center" justify="flex-start" style={{ marginTop: "25px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Link to="/signup">
                        <button className={styles.newbutton} style={{ background: "#fff", color: "#4B176A", border: "1px solid #4B176A" }}>
                          <BsBoxArrowInRight style={{ marginRight: "5px" }} />
                      Sign Up
                    </button>
                      </Link>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                      <Link to="/login">
                        <button className={styles.newbutton} onClick={(event) => handleSubmit(event)}>
                          <i class="fas fa-paper-plane" style={{ marginRight: "5px" }}></i>
                      Login
                    </button>
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default LoginTwo



















// import React from 'react';
// import styles from "./signupTwo.module.css"
// import luciImage from './../../../../src/assets/LuciLogin.png';
// // import signImg from '/../../../../src/assets/log-in.png'
// // import loginImg from '/../../../../src/assets/Group 10.png'
// // import bgImage from '/../../../../src/assets/background.jpeg';
// import Header from './../../header2/Header';
// import Footer from './../../footer/Footer';
// import { BsBoxArrowInRight } from 'react-icons/bs'

// const SignupTwo = props => (
//     <LoginForm />
// );
  

// class LoginForm extends React.Component{
//   render(){
//     return(
//     <div className={styles.home}>
//         {/* <Header /> */}
//         {/* <img src={bgImage} alt="Background Image" /> */}
//          <div >
//             <FormHeader/>
//             <Form /> 
//             {/* <OtherMethods /> */}
//         </div>
//         {/* <Footer /> */}
//     </div>
     
//     )
//   }
// }

// const FormHeader = props => (
//     <h2 id={styles.headerTitle}>{props.title}
//     <img src={luciImage} alt="Avatar" />
//     <p> An interactive real estate investing assistant</p>
//     </h2>
// );


// const Form = props => (

//    <div>
//      <FormInput   placeholder="First Name" type="text" />
//      <FormInput   placeholder="Last Name" type="text" />
//      <FormInput   placeholder="Address" type="text"/>
//      <FormInput   placeholder="Town/City" type="text" />
//      <FormInput   placeholder="State" type="text"/>
//      <FormInput   placeholder="Zip Code" type="number" />
//      <FormInput   placeholder="Instant Strategy" type="text" style={{marginBottom:"20px"}}/>
//      <FormButton  title="Sign up"> < BsBoxArrowInRight />  </FormButton>  
//      <FormButton  title="Login"> <i class="fas fa-paper-plane"></i> </FormButton>
     
//    </div>

// );

// const FormButton = props => (
//   <div id={styles.button} className={styles.row}>
//     <button style={{marginLeft:"28px"}}>{props.children} {props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div className={styles.row}>
//     <label>{props.description}</label>
//     <input id={props.id} type={props.type} placeholder={props.placeholder}/>
//   </div>  
// );

// const OtherMethods = props => (
//   <div id={styles.alternativeLogin}>
//     <label>Or sign in with:</label>
//     <div id={styles.iconGroup}>
//       {/* <Facebook />
//       <Twitter />
//       <Google /> */}
//     </div>
//   </div>
// );

// // const Facebook = props => (
// //   <a href="#" id="facebookIcon"></a>
// // );

// // const Twitter = props => (
// //   <a href="#" id="twitterIcon"></a>
// // );

// // const Google = props => (
// //   <a href="#" id="googleIcon"></a>
// // );

// export default SignupTwo;
