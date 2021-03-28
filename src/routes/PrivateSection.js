// import React from 'react';
// import { createUseStyles, useTheme } from 'react-jss';
// import { Column, Row } from 'simple-flexbox';
// import { SidebarComponent, SidebarContext } from 'components/sidebar';
// import HeaderComponent from 'components/header/HeaderComponent';
// import PrivateRoutes from './PrivateRoutes';
// import { Home } from 'components/home/Home';
// import Header from 'components/header2/Header';
// import Property from 'components/property/Property';
// import Main from 'components/main/Main'

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

// function PrivateSection() {
//     const theme = useTheme();
//     const classes = useStyles({ theme });

//     return (
//         // <div>
//         //     <Home />
//         // </div>
//         <div>
//             <SidebarContext>
//                 <Row className={classes.container}>
//                 <SidebarComponent />
//                     <Column flexGrow={1} className={classes.mainBlock}>
//                         {/* <Header />? */}
//                         <div className={classes.contentBlock}>
//                             <PrivateRoutes />
//                         </div>
//                     </Column>
//                 </Row>
//             </SidebarContext> 
//         {/* <Property /> */}
//         {/* <Main /> */}
//         </div>
        
//     );
// }

// export default PrivateSection;
