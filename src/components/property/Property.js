// import React, { Component } from 'react'
// <<<<<<< HEAD
// import {Route, Switch } from 'react-router-dom';
// =======
// >>>>>>> 8cb24ca780be7214994043c945b810fbee0ae726
// import './property.css'
// import './../../App.css'
// import Header from 'components/header2/Header'
// import Footer from 'components/footer/Footer'
// import { createUseStyles, useTheme } from 'react-jss';
// import { Column, Row } from 'simple-flexbox';
// import { SidebarComponent, SidebarContext } from 'components/sidebar';
// // import HeaderComponent from 'components/header/HeaderComponent';
// import PrivateRoutes from './../../routes/PrivateRoutes';
// // import { Home } from 'components/home/Home';
// // import Header from 'components/header2/Header';
// // import Property from 'components/property/Property';

// const useStyles = createUseStyles({
//     container: {
//         height: '100%',
//         minHeight: 850
//     },
//     mainBlock: {
//         marginLeft: 255,
//         padding: 30,
//         '@media (max-width: 900px)': {
//             marginLeft: 0
//         }
//     },
//     contentBlock: {
//         marginTop: 54
//     }
// });

// function Property () {
//     const theme = useTheme();
//     const classes = useStyles({ theme });

//         return (
//             <div className="App">
//                 <Header />
//                 <div className="property-layout-main">
//                     <div className="property-layout-second">
//                         <div className="property-layout-sider">
//                         {/* <h1> This is property compenent</h1> */}
//                         <SidebarContext>
//                             <Row className={classes.container}>
//                             <SidebarComponent />
//                                 <Column flexGrow={1} className={classes.mainBlock}>
//                                     {/* <Header />? */}
//                                     <div className={classes.contentBlock}>
//                                         {/* <PrivateRoutes /> */}
//                                     </div>
//                                 </Column>
//                             </Row>
//                         </SidebarContext>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <Footer /> */}
//             </div>
            
//         )
//     }


// export default Property;
