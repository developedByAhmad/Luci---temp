import React from 'react';
import styles from './footer.module.css'
import './../../App.css';


const Footer = (props) => {
    return (
        <div style={props.style} className={styles.footer}>
                    <p> Privacy Policy </p>
                    {/* <p> ©Copyright All Rights Reserved.</p> */}
                    <p>Powered by LUCI Technologies LLC</p>
        </div>                                  
    )
}
export default Footer;