import React, { useEffect } from 'react'
import styles from './reportdesktwo.module.css'
import ReportTwoDeskOne from "./ReportTwoDeskOne"
import ReportTwoDeskTwo from "./ReportTwoDeskTwo"
import ReportTwoDeskThree from "./ReportTwoDeskThree";
import ReportTwoDeskFour from "./ReportTwoDeskFour";
import ReportTwoDeskFive from "./proformaStatement/ReportTwoDeskFive";
import ReportTwoDeskSix from './ReportTwoDeskSix';
import ReportTwoDeskSeven from './ReportTwoDeskSeven';
import ReportTwoDeskEight from './ReportTwoDeskEight';
import ReportTwoDeskNine from './ReportTwoDeskNine';
import ReactToPrint from "react-to-print";
import ReportTwoDeskTen from './ReportTwoDeskTen';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
      <ReportTwoDeskOne />
      <ReportTwoDeskTwo />
      <ReportTwoDeskThree />
      <ReportTwoDeskFour /> 
      <ReportTwoDeskFive />
      <ReportTwoDeskSix />
      <ReportTwoDeskSeven />
      <br></br>
      <ReportTwoDeskEight />
      <ReportTwoDeskNine />
      <ReportTwoDeskTen />
      </div>
    );
  }
}

class ReportGenerator extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button className={styles.buttonclass}> Download Report</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default ReportGenerator;