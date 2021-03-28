import React, { setState } from 'react'
import styles from './propertycontent.module.css'
import "./propertycontent.css"
import Header from 'components/header2/Header'
import Footer from 'components/footer/Footer'
import { createUseStyles, useTheme } from 'react-jss';
import SidebarTwoComponent from 'components/sidebar2/SidebarTwoComponent';
import SidebarContext from 'components/sidebar/SidebarContext'
import {Form, Col, FormGroup} from 'react-bootstrap';
import { Grid } from "@material-ui/core"
import NumberFormat from "react-number-format";


class PropertyContentTwo extends React.Component{
    // const theme = useTheme();
    // const styles = useStyles({ theme });
    constructor(props){
        super(props);
        this.state = {
            image: null,
            propAddress : "",
            priorYearTax : "",
            noOfBeds: "",
            noOfBaths: "",
            lotSize: "",
            sqFt: "",
            sqFt: "",
            city: "",
            zip: "",
            state: ""
            // loading:true
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
      };
        render(){
            const otherWay = {height:"118%"}
        return (
            <Grid container xl={12} lg={12} md={12} sm={12} xs={12}   direction="column"  justify="space-around" alignItems="stretch" style={{backgroundColor:"#FFFFFF"}}>
                <Grid item>
                    <Header />
                </Grid>

                <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction="column"  justify="space-around" alignItems="center" style={{backgroundColor:"#FFFFFF"}}>
        
                <Grid item container xl={11} lg={11} md={10} sm={12} xs={12}  direction="row" justify="flex-start" style={{backgroundColor:"#ffffff"}}>
                <SidebarContext>
                    <Grid item xl={3} lg={3} md={3} sm={0} xs={0} >
                        {console.log(this.state.loading)}
                        <SidebarTwoComponent style={otherWay} />
                    </Grid>

                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12} style={{height: "120vh"}}>
                        <Form className={styles.margins}>
                        <Form.Row>
                                <Form.Group as={Col} controlId="formGridPropertyAddress">
                                    <Form.Label>Property Address</Form.Label>
                                    <Form.Control className={styles.innput} type="text" value={this.state.propAddress} 
                                    onChange={(e) => this.setState({propAddress : e.target.value})} />

                                    <Form.Label> City</Form.Label>
                                    <Form.Control className={styles.innput} type="text" value={this.state.city} 
                                    onChange={(e) => this.setState({city : e.target.value})} />

                                    <Form.Label> Zip Code</Form.Label>
                                    <Form.Control className={styles.innput} type="text" value={this.state.zipcode} 
                                    onChange={(e) => this.setState({zipcode : e.target.value})} />

                                    <Form.Label> Number of Beds</Form.Label>
                                    <Form.Control className={styles.innput} type="text" value={this.state.noOfBeds} 
                                    onChange={(e) => this.setState({noOfBeds : e.target.value})} />

                                    <Form.Label>Lot -size</Form.Label>
                                    <Form.Control className={styles.innput} type="text" value={this.state.lotSize} 
                                    onChange={(e) => this.setState({lotSize : e.target.value})} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <FormGroup>
                                        <Form.Label>Prior Year Taxes USD</Form.Label>
                                        <NumberFormat  
                                                customInput={Form.Control} 
                                                thousandSeparator={true} 
                                                prefix={'$'} suffix={".00"} 
                                                displayType={'number'} className={styles.innput}  value={this.state.priorYearTax} 
                                        onChange={(e) => this.setState({priorYearTax : e.target.value})} />

                                        <Form.Label> State </Form.Label>
                                        <Form.Control className={styles.innput} type="text" value={this.state.state} 
                                        onChange={(e) => this.setState({state : e.target.value})} />

                                        <Form.Label>Property Sq. ft</Form.Label>
                                        <Form.Control className={styles.innput} type="text" value={this.state.sqFt} 
                                        onChange={(e) => this.setState({sqFt : e.target.value})} />
                                        
                                            <Form.Label>Number of Baths</Form.Label>
                                        <Form.Control className={styles.innput} type="text" value={this.state.noOfBaths} 
                                        onChange={(e) => this.setState({noOfBaths : e.target.value})} />

                                    </FormGroup>
                                </Form.Group>
                            </Form.Row>

                        </Form>

                        <Grid item container direction="row" justify="flex-start" xl={11} lg={11} md={11} sm={12} xs={12} className={styles.imageDivMain}>
                            <Grid item xs={12}>
                                {/* <button className={styles.bn}> Upload Image(s)</button> */}
                                    <input 
                                    style={{display:"none"}}
                                    type="file"
                                    name="myImage" 
                                    onChange={this.onImageChange} 
                                    ref={fileInput => this.fileInput = fileInput}/>  
                                    <button onClick={() => this.fileInput.click()} className={styles.bn}> 
                                        {/* <input type="file" />  */}
                                        Upload Image(s) </button>

                            </Grid>

                            <Grid item className={styles.imageDiv} xs={12}>
                                <img src={this.state.image} />
                            </Grid>

                         </Grid>
                    </Grid>
                    </SidebarContext>
                </Grid>
            </Grid>
            

                <Grid item xl={12}>
                    <Footer />
                </Grid>
            </Grid>
            
        )
    }
}

export default PropertyContentTwo;
