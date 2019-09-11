import React, { Component, useState, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Tooltip } from '@material-ui/core'

export type IconProps = {
    /**
     * @property {string} iconName Name of icon to fetch from material-ui icons
     */
    iconName: string;

    /**
     * @property {string} onClick Callback that fires after clicking on icon
     */
    onClick?: (event: any) => void,

    /**
     * @property {string} title Title to display when hovering on icon
     */
    title?: string,

    /**
     * @property {string} tooltipPlacement enum:
     *   
     *   
     *   
     *  
     */
    tooltipPlacement?: 'bottom-end' | 'bottom-start' | 'bottom' |
    'left-end' | 'left-start' | 'left' |
    'right-end' | 'right-start' | 'right' |
    'top-end' | 'top-start' | 'top'
}

const MaterialIcons: any = Icons;

/**
 * @render react
 * @name Icon
 * @description Clickable icon
 * @example
 * <Icon iconName="Refresh" 
 *       onClick={() => { console.log('Refreshing') }}
 *       title="Refresh"
 *       tooltipPlacement="right"/>
 */
const Icon: React.FC<IconProps> = ({ onClick, title, tooltipPlacement = 'top', iconName }) => {
    const materialIcon = MaterialIcons[iconName];

    let [ChoosenIcon, setIcon]: any = useState(materialIcon);

    if(materialIcon !== ChoosenIcon){
        setIcon(materialIcon);
    }

    const StyledIcon: any = ChoosenIcon ? <ChoosenIcon style={{ fill: 'var(--border-color)' }} /> : null;

    if (title) {
        return (
            <Tooltip
                title={title}
                placement={tooltipPlacement}>
                <StyledIcon/>
            </Tooltip>
        );
    }

    if (onClick) {
        return (
            <IconButton
                onClick={onClick}>
                <StyledIcon/>
            </IconButton>
        );
    }

    return null;
}

export {
    Icon
};
