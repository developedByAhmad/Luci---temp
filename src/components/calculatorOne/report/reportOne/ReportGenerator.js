import React, { useEffect } from 'react'
import styles from './reportdesk.module.css'
import ReportDeskOne from "./ReportDeskOne"
import ReportDeskTwo from "./ReportDeskTwo"
import ReportDeskThree from "./ReportDeskThree";
import ReportDeskFour from "./ReportDeskFour";
import ReportDeskFive from "./proformaStatement/ReportDeskFive";
import ReportDeskSix from './ReportDeskSix';
import ReportDeskSeven from './ReportDeskSeven';
import ReportDeskEight from './ReportDeskEight';
import ReportDeskNine from './ReportDeskNine';
import ReactToPrint from "react-to-print";

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
      <ReportDeskOne />
      <ReportDeskTwo />
      <ReportDeskThree />
      <ReportDeskFour /> 
      <ReportDeskFive />
      <ReportDeskSix />
      <ReportDeskSeven />
      <br></br>
      <ReportDeskEight />
      <ReportDeskNine />
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