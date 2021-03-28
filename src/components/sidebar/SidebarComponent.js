import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { FiDollarSign } from 'react-icons/fi';
import { FiPieChart } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import { GiBattery0 } from 'react-icons/gi';
import { FiLock } from 'react-icons/fi';
import './sidebar.css'

import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
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


function SidebarComponent(props) {

    $(document).ready(function() {
        $(".bm-menu-wrap").css('height',props.style.height);
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
        <h1 className="sidebarheading"> Long Term Rental </h1>
            <MenuItem
                // className="sidenavbar"
                id={SLUGS.propertycontent}
                title='Property'
                icon={FiHome}
                onClick={() => onClick(SLUGS.propertycontent)}
            >
            </MenuItem>
            <MenuItem
                id={SLUGS.purchase}
                title='Purchase'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.purchase)}
            >
            </MenuItem>

            <MenuItem
                id={SLUGS.newrenovationtab}
                title='Renovation'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.newrenovationtab)}
            >
            </MenuItem>

             <MenuItem
                id={SLUGS.financingone}
                title='Finance'
                icon={FiShoppingBag}
                onClick={() => onClick(SLUGS.financingone)}
            >
            </MenuItem>
            
            <MenuItem
                id={SLUGS.income}
                title='Income'
                icon={FiDollarSign}
                onClick={() => onClick(SLUGS.income)}
            />

            <MenuItem
               id={SLUGS.fixedexpenses}
                items={[SLUGS.variableexpenses]}
                title='Expense'
                icon={FiPieChart}
                // onClick={() => onClick(SLUGS.expense)}
            >
            <MenuItem
                    id={SLUGS.fixedexpenses}
                    title='Fixed Expenses'
                    level={2}
                    icon={FiDollarSign}
                    onClick={() => onClick(SLUGS.fixedexpenses)}
                />
                <MenuItem
                    id={SLUGS.variableexpenses}
                    title='Variable Expenses'
                    level={2}
                    icon={FiDollarSign}
                    onClick={() => onClick(SLUGS.variableexpenses)}
                />
            </MenuItem>
            <MenuItem
                id={SLUGS.assumptions}
                title='Assumptions'
                icon={FiActivity}
                onClick={() => onClick(SLUGS.assumptions)}
            />
            <MenuItem
                id={SLUGS.report}
                title='Report'
                icon={FiFileText}
                onClick={() => onClick(SLUGS.report)}
            /> 
        </Menu>
    );
}

export default SidebarComponent;
