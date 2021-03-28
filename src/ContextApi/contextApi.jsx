import React from "react";
import {withRouter} from "react-router-dom";

export const ContextApi = React.createContext();

class ContextApiProvider extends React.Component{

    state={
        Property:{},
        Purchase:{},
        Renovation:{},
        Finance:{},
        Income:{},
        FixedExpense:{},
        VariableExpense:{},
        Assumptions:{},
        Report:{},

        // Signup-Forms Inputs

        UserSignUp:{},

        loginToken: localStorage.getItem("loginToken")
            ? localStorage.getItem("loginToken")
            : null,
        adminLoginToken: localStorage.getItem("AdminloginToken")
            ? localStorage.getItem("AdminloginToken")
            : null,
        propAddress: null
    }
    routeChangeHandler = (e) => {
        console.log("called",this.state.loginToken)
        this.setState({loginToken:e})
        this.props.history.push("/property");
    }
    

    changeMethod = (e) =>{
        this.setState({
            propAddres:e.target.value
        })
    }
    handleChange = (event, flag) => {
        const {name, value} = event.target
        // this.setState({ [event.target.name]: event.target.value });
        console.log("Context Api handle Change", event.target.value)
        this.setState(prevState=> {
            console.log(prevState)
            return {
                [flag]:{
                    ...prevState[flag],
                    [name]:value
                }
            }
        })
    }
    render(){
        return <ContextApi.Provider value={{
            ...this.state,
            changeMethod: this.changeMethod,
            handleChange: this.handleChange,
            routeChangeHandler:this.routeChangeHandler

        }}>{this.props.children}</ContextApi.Provider> 
    }
}
export default withRouter(ContextApiProvider);