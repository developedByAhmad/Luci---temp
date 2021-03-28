// import React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import Main from './components/main/Main';
// import Error404 from './components/Error404/Error404';
// import Team from './components/team/Team';
// import Teamprofile from './components/team/teamProfile/Teamprofile';
// import LoginTwo from './components/login2/LoginTwo';
// import SignupTwo from './components/signup/signuptwo/SignupTwo';
// import Property from './components/property/Property';
// import PricingTwo from './components/pricing2/PricingTwo';
// import About from './components/about/About';

// import React, { Suspense, lazy } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import LoadingComponent from 'components/loading';
// // import Home from './../components/home/Home'

// // const Home = lazy(() => import('./../components/home/Home'));
// const PropertyContent = lazy(() => import('./../components/propertycontent/PropertyContent'));
// const Purchase = lazy(() => import('./../components/purchase/Purchase'));
// const Expense = lazy(() => import('./../components/expense/Expense'));
// const Income = lazy(() => import('./../components/income/Income'));
// const Assumptions = lazy(() => import('./../components/assumptions/Assumptions'));
// const Report = lazy(() => import('./../components/report/Report'));
// const Expenses = lazy(() => import('./../components/expenses/Expenses'));
// const FixedVariable = lazy(() => import('./../components/fixedvariable/FixedVariable'));
// const DashboardComponent = lazy(() => import('./dashboard'));

// function PublicRoutes() {
//     return (
//             <BrowserRouter basename={'/'}>
//                 <Switch>
//                     <Route exact path={"/"} component={Main}/>
//                     <Route exact path={"/pricing"} component={PricingTwo}/>
//                     <Route exact path={"/error404"} component={Error404} />
//                     <Route exact path={"/team"} component={Team} />
//                     <Route exact path={"/about"} component={About} />
//                     <Route exact path={"/teamprofile"} component={Teamprofile} />
//                     <Route exact path={"/login"} component={LoginTwo} />
//                     <Route exact path={"/signup"} component={SignupTwo} />
//                     <Route exact path={"/property"} component={Property} />
//                     <Route exact path={"/dashboard"} component={DashboardComponent} />
//                     <Route exact path={"/propertycontent"} component={PropertyContent} />
//                     <Route exact path={"/purchase"} component={Purchase} />
//                     <Route exact path={"/expense"} component={Expense} />
//                     <Route exact path={"/income"} component={Income} />
//                     <Route exact path={"/expenses"} component={Expenses} />
//                     <Route exact path={"/assumptions"} component={Assumptions} />
//                     <Route exact path={"/report"} component={Report} />
//                     {/* <Route exact path={"/fixedVariable"} component={FixedVariable} /> */}
//                 </Switch>
//             </BrowserRouter>
//     );
// }

// export default PublicRoutes;
