// import React, { Suspense, lazy } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import SLUGS from 'resources/slugs';
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

// function PrivateRoutes() {
//     return (
//         <Suspense fallback={<LoadingComponent loading />}>
//             <Switch>
//                 {/* <Route exact path={SLUGS.home} component={Home} /> */}
//                 <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
//                 <Route exact path={SLUGS.propertycontent} component={PropertyContent} />
//                 <Route exact path={SLUGS.purchase} component={Purchase} />
//                 <Route exact path={SLUGS.expense} component={Expense} />
//                 <Route exact path={SLUGS.income} component={Income} />
//                 <Route exact path={SLUGS.expenses} component={Expenses} />
//                 <Route exact path={SLUGS.assumptions} component={Assumptions} />
//                 <Route exact path={SLUGS.report} component={Report} />
//                 <Route exact path={SLUGS.fixedVariable} component={FixedVariable} />
//                 <Redirect to={SLUGS.home} />
//             </Switch>
//         </Suspense>
//     );
// }

// export default PrivateRoutes;
