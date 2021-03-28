import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CollapsibleContent from 'components/collapsible/CollapsibleContent';
import { useSidebar } from 'hooks/useSidebar';
import { StylesProvider } from '@material-ui/styles';
import "./sidebar.css";

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: ({ theme }) => "#ffffff"
    },
    container: {
        display: 'flex',
        height: 56,
        cursor: 'pointer',
        borderRadius: "10px",
        margin: "5px",
        background: "rgba(255, 255, 255, 0.1)",

        '&:hover': {
            backgroundColor: "#ffffff",
            color: '#4B176A',
            svg:{
                color: 'red'
            }
           
        },
        paddingLeft: ({ level }) => 32 * level,
        transition: 'all 0.2s ease-in-out',

    },
    title: {
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: "#FFFFFF",
        color: ({ theme, isActive }) => (isActive ? "#4B176A" : "#ffffff"),
        marginLeft: 24,
        '&:hover': {
            // color: "red"
        },
    }
    
});

function MenuItemComponent({ children, icon: Icon, id, items = [], level = 1, onClick, title }) {
    const theme = useTheme();
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive, onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items
    });
    const classes = useStyles({ theme, level, isActive });
    const classNameColumn = isActive ? classes.leftBar : '';
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');
    const iconColor = isActive ? "#4b176a6b" : "#ffffff";


    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Column key={id} className={classNameColumn}>
            {/* <Row vertical='center' onClick={onItemClicked} className={classNameContainer}>
                <Icon fill={iconColor} opacity={!isActive && '0.4'} />
                <span className={classes.title}>{title}</span>
            </Row> */}
            <Row  vertical='center' onClick={onItemClicked} className={['myContainer', classNameContainer].join(' ')}>
                <Icon  fill={iconColor} opacity={!isActive} style={{color: "#4B176A", backgroundColor: "#FFFFFF"}} />
                <span  className={['myTitle', isActive ? 'myActive':""].join(' ')}>{title}</span>

            </Row>
            {isCollapsible && (
                <CollapsibleContent expanded={isExpanded} >
                    {children.map((child) => child.type({ ...child.props }))}
                </CollapsibleContent>
            )}
        </Column>
    );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
    children: any,
    icon: func,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string
};

export default MenuItemComponent;
