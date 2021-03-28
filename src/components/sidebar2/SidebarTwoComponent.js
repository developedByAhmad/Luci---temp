import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { FiShoppingBag } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { FiPieChart } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { IoMdBatteryDead } from 'react-icons/io';
import { FiLock } from 'react-icons/fi';
import './sidebar.css'
import ReplayIcon from '@material-ui/icons/Replay';


import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
// import MenuItem from './MenuItemComponent';
import MenuItem from './MenuItemComponent';
import $ from 'jquery';


// const useStyles = createUseStyles({
//     separator: {
//         borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
//         marginTop: 16,
//         marginBottom: 16,
//         opacity: 0.06
//     }
// });


function SidebarTwoComponent(props) {
    // var div = document.getElementsByClassName("bm-menu-wrap");
    // div.style. =   props.style; 
    // console.log(props.style.height)
    // document.getElementsByClassName("bm-menu-wrap").style.height = props.style.height;


    $(document).ready(function() {
        $(".bm-menu-wrap").css('height',props.style.height)
    });


    const { push } = useHistory();
    const theme = useTheme();
    // const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 900;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            {/* <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div> */}

            <h1 className="sidebarheading"> Fix and Flip </h1>

            <MenuItem
                className="sidenavbar"
                id={SLUGS.propertycontenttwo}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Property'
                icon={FiHome}
                onClick={() => onClick(SLUGS.propertycontenttwo)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.purchasetwo}
                // items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='Purchase'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.purchasetwo)}
            >
            </MenuItem>
            
            <MenuItem
                id={SLUGS.renovation}
                title='Renovation'
                icon={ReplayIcon}
                onClick={() => onClick(SLUGS.renovation)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.financingtwo}
                title='Financing'
                icon={FiDollarSign}
                onClick={() => onClick(SLUGS.financingtwo)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.incometwo}
                title='Income'
                icon={FiActivity}
                onClick={() => onClick(SLUGS.incometwo)}
            />
            <MenuItem
                id={SLUGS.fixedexpensestwo}
                items={[SLUGS.variableexpensestwo]}
                title='Expense'
                icon={FiPieChart}
            // onClick={() => onClick(SLUGS.expense)}
            >
                <MenuItem
                    id={SLUGS.fixedexpensestwo}
                    title='Fixed Expenses'
                    level={2}
                    icon={FiDollarSign}
                    onClick={() => onClick(SLUGS.fixedexpensestwo)}
                />
                <MenuItem
                    id={SLUGS.variableexpensestwo}
                    title='Variable Expenses'
                    level={2}
                    icon={FiDollarSign}
                    onClick={() => onClick(SLUGS.variableexpensestwo)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.assumptionstwo}
                title='Assumptions'
                icon={FiActivity}
                onClick={() => onClick(SLUGS.assumptionstwo)}
            />
            <MenuItem
                id={SLUGS.reporttwo}
                title='Report'
                icon={FiLock}
                onClick={() => onClick(SLUGS.reporttwo)}
            />
         </Menu>
    );
}

export default SidebarTwoComponent;
