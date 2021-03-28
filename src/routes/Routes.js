import React, { Component, Suspense, lazy, useContext } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoadingComponent from 'components/loading';
// import { createBrowserHistory } from 'history';

import Error404 from './../components/error404/Error404';
import Team from './../components/team/Team';
import Teamprofile from './../components/team/teamProfile/Teamprofile';
import ActivePortfolio from "./../components/team/teamProfile/ActivePortfolio";
import LoginTwo from '../components/login2/LoginTwo';
import SignupTwo from '../components/signup2/SignupTwo';
import PricingTwo from './../components/pricing2/PricingTwo';
import About from './../components/about/About';

import PropertyContent from '../components/calculatorOne/propertycontent/PropertyContent'
import Purchase from '../components/calculatorOne/purchase/Purchase'
import NewRenovationTab from '../components/calculatorOne/newrenovationtab/NewRenovationTab'
import FinancingOne from '../components/calculatorOne/financingone/FinancingOne'
import Expense from './../components/expense/Expense'
import Income from '../components/calculatorOne/income/Income'
import Assumptions from '../components/calculatorOne/assumptions/Assumptions'
import Report from '../components/calculatorOne/report/Report'
import Expenses from '../components/calculatorOne/fixedexpenses/FixedExpenses'
import FixedVariable from './../components/fixedvariable/FixedVariable'
import Home from 'components/home/Home';
import FixedExpenses from '../components/calculatorOne/fixedexpenses/FixedExpenses'
import VariableExpenses from '../components/calculatorOne/variableexpenses/VariableExpenses'

//Imports of Second Calculator 
import PropertyContentTwo from '../components/calculatorTwo/propertycontent2/PropertyContentTwo'
import PurchaseTwo from '../components/calculatorTwo/purchase2/PurchaseTwo'
import IncomeTwo from '../components/calculatorTwo/income2/IncomeTwo'
import Renovation from '../components/calculatorTwo/renovation/Renovation'
import Finance from '../components/calculatorTwo/finance/Finance'
import ExpenseTwo from './../components/expense2/ExpenseTwo'
import FixedExpensesTwo from './../components/calculatorTwo/fixedexpenses/FixedExpensesTwo'
import VariableExpensesTwo from './../components/calculatorTwo/variableexpenses/VariableExpensesTwo'
import AssumptionsTwo from '../components/calculatorTwo/assumptions2/AssumptionsTwo'
import ReportTwo from '../components/calculatorTwo/report2/ReportTwo'

// Fauz Routes
import Contact from "../components/contact/Contact";
import Profile from "../components/profile/Profile";
import PaymentDetails from "../components/payment_details/PaymentDetails";
import AdminLogin from "../components/admin_login/AdminLogin";
import PendingUsers from "../components/pending_users/PendingUsers";
import FAQs from "../components/faqs/FAQs";
import ChatMenu from "../components/chat_menu/ChatMenu";

import SignupAdlForm1 from '../components/signup2/additional forms/SignupAdlForm1'
import SignupAdlForm2 from '../components/signup2/additional forms/SignupAdlForm2'
import SignupAdlForm3 from '../components/signup2/additional forms/SignupAdlForm3'


// Report One Routes
import ReportDeskOne from "../components/calculatorOne/report/reportOne/ReportDeskOne"
import ReportDeskTwo from "../components/calculatorOne/report/reportOne/ReportDeskTwo"
import ReportDeskThree from "../components/calculatorOne/report/reportOne/ReportDeskThree"
import ReportDeskFour from "../components/calculatorOne/report/reportOne/ReportDeskFour"
import ReportDeskFive from "../components/calculatorOne/report/reportOne/proformaStatement/ReportDeskFive"
import ReportDeskSix from "../components/calculatorOne/report/reportOne/ReportDeskSix"
import ReportDeskSeven from "../components/calculatorOne/report/reportOne/ReportDeskSeven"
import ReportDeskEight from "../components/calculatorOne/report/reportOne/ReportDeskEight"
import ReportDeskNine from "../components/calculatorOne/report/reportOne/ReportDeskNine"
import ReportGenerator from "../components/calculatorOne/report/reportOne/ReportGenerator"


// Report Two Routes
import ReportTwoDeskOne from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskOne"
import ReportTwoDeskTwo from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskTwo"
import ReportTwoDeskThree from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskThree"
import ReportTwoDeskFour from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskFour"
import ReportTwoDeskFive from "../components/calculatorTwo/report2/reportTwo/proformaStatement/ReportTwoDeskFive"
import ReportTwoDeskSix from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskSix"
import ReportTwoDeskSeven from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskSeven"
import ReportTwoDeskEight from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskEight"
import ReportTwoDeskNine from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskNine"
import ReportTwoDeskTen from "../components/calculatorTwo/report2/reportTwo/ReportTwoDeskTen"
import ReportTwoGenerator from "../components/calculatorTwo/report2/reportTwo/ReportTwoGenerator"

import FinancingTwo from 'components/calculatorTwo/financing2/FinancingTwo';
import { ContextApi } from '../ContextApi/contextApi';


class Routes extends Component {
    static contextType = ContextApi
    render() {
        console.log(this.context);
        return (
            <div>

                <Suspense fallback={<LoadingComponent loading />}>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route exact path={"/login"} render={(props) => <LoginTwo />} />
                        <Route exact path={"/signup"} component={SignupTwo} />
                        <Route exact path={"/error404"} component={Error404} />
                        <Route exact path={"/about"} component={About} />
                        <Route exact path={"/pricing"} component={PricingTwo} />
                        <Route exact path={"/team"} component={Team} />
                        <Route exact path={"/contact_us"} component={Contact} />
                        <Route exact path={"/property"} render={(props) => this.context.loginToken ? <PropertyContent {...props} /> : <Redirect to="/login" />} />
                        <Route exact path={"/teamprofile"} render={() => this.context.loginToken ? <Teamprofile /> : <Redirect to="/login" />} />
                        <Route exact path={"/activeportfolio"} render={() => this.context.loginToken ? <ActivePortfolio /> : <Redirect to="/login" />} />
                        <Route exact path={"/purchase"} render={() => this.context.loginToken ? <Purchase /> : <Redirect to="/login" />} />
                        <Route exact path={"/newrenovationtab"} render={() => this.context.loginToken ? <NewRenovationTab /> : <Redirect to="/login" />} />
                        <Route exact path={"/financingone"} render={() => this.context.loginToken ? <FinancingOne /> : <Redirect to="/login" />} />
                        {/* <Route exact path={"/expense"} component={Expense} /> */}
                        <Route exact path={"/income"} render={() => this.context.loginToken ? <Income /> : <Redirect to="/login" />} />
                        {/* <Route exact path={"/expenses"} component={Expenses} /> */}
                        <Route exact path={"/fixedexpenses"} render={() => this.context.loginToken ? <FixedExpenses /> : <Redirect to="/login" />} />
                        <Route exact path={"/variableexpenses"} render={() => this.context.loginToken ? <VariableExpenses /> : <Redirect to="/login" />} />
                        <Route exact path={"/fixedVariable"} render={() => this.context.loginToken ? <FixedVariable /> : <Redirect to="/login" />} />
                        <Route exact path={"/assumptions"} render={() => this.context.loginToken ? <Assumptions /> : <Redirect to="/login" />} />
                        <Route exact path={"/report"} render={() => this.context.loginToken ? <Report /> : <Redirect to="/login" />} />

                        {/* Report One Routes */}
                        <Route exact path={"/reportdeskone"} render={() => this.context.loginToken ? <ReportDeskOne /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdesktwo"} render={() => this.context.loginToken ? <ReportDeskTwo /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdeskthree"} render={() => this.context.loginToken ? <ReportDeskThree /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdeskfour"} render={() => this.context.loginToken ? <ReportDeskFour /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdeskfive"} render={() => this.context.loginToken ? <ReportDeskFive /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdesksix"} render={() => this.context.loginToken ? <ReportDeskSix /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdeskseven"} render={() => this.context.loginToken ? <ReportDeskSeven /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdeskeight"} render={() => this.context.loginToken ? <ReportDeskEight /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportdesknine"} render={() => this.context.loginToken ? <ReportDeskNine /> : <Redirect to="/login" />} />
                        <Route exact path={"/reportgenerator"} render={() => this.context.loginToken ? <ReportGenerator /> : <Redirect to="/login" />} />

                        {/* Report Two Routes */}
                        <Route exact path={"/reporttwodeskone"} component={ReportTwoDeskOne} />
                        <Route exact path={"/reporttwodesktwo"} component={ReportTwoDeskTwo} />
                        <Route exact path={"/reporttwodeskthree"} component={ReportTwoDeskThree} />
                        <Route exact path={"/reporttwodeskfour"} component={ReportTwoDeskFour} />
                        <Route exact path={"/reporttwodeskfive"} component={ReportTwoDeskFive} />
                        <Route exact path={"/reporttwodesksix"} component={ReportTwoDeskSix} />
                        <Route exact path={"/reporttwodeskseven"} component={ReportTwoDeskSeven} />
                        <Route exact path={"/reporttwodeskeight"} component={ReportTwoDeskEight} />
                        <Route exact path={"/reporttwodesknine"} component={ReportTwoDeskNine} />
                        <Route exact path={"/reporttwodeskten"} component={ReportTwoDeskTen} />
                        <Route exact path={"/reporttwogenerator"} component={ReportTwoGenerator} />


                        {/* Routes for Second Calculator */}
                        <Route exact path={"/propertytwo"} component={PropertyContentTwo} />
                        <Route exact path={"/purchasetwo"} component={PurchaseTwo} />
                        <Route exact path={"/incometwo"} component={IncomeTwo} />
                        <Route exact path={"/renovation"} component={Renovation} />
                        <Route exact path={"/financingtwo"} component={FinancingTwo} />
                        <Route exact path={"/expensetwo"} component={ExpenseTwo} />
                        <Route exact path={"/fixedexpensestwo"} component={FixedExpensesTwo} />
                        <Route exact path={"/variableexpensestwo"} component={VariableExpensesTwo} />
                        <Route exact path={"/assumptionstwo"} component={AssumptionsTwo} />
                        <Route exact path={"/reporttwo"} component={ReportTwo} />


                        <Route exact path={"/profile"} component={Profile} />
                        <Route exact path={"/payment_details"} component={PaymentDetails} />

                        <Route exact path={"/admin_login"} component={AdminLogin} />
                        <Route exact path={"/faqs"} component={FAQs} />
                        <Route exact path={"/pending_users"} component={PendingUsers} />
                        <Route exact path={"/chat"} component={ChatMenu} />

                        {/* <Route exact path={"/signup_adlform1"  component={SignupAdlForm1} /> */}
                        <Route exact path={"/signup_adlform1"} render={(props) => <SignupAdlForm1 {...props} />} />
                        <Route exact path={"/signup_adlform2"} component={SignupAdlForm2} />
                        <Route exact path={"/signup_adlform3"} component={SignupAdlForm3} />

                    </Switch>
                </Suspense>

            </div>
        )
    }
}

export default Routes;


























// function Routes() {
//     const { pathname } = useLocation();
//     // eslint-disable-next-line no-unused-vars
//     const [width, height] = useWindowSize();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     const isUserLoggedIn = true;
//     return isUserLoggedIn ? <PublicRoutes /> : <PrivateRoutes />;
// }

// export default Routes;
// import React from 'react'
