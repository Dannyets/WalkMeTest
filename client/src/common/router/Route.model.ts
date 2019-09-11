import { ConnectedComponentClass } from "react-redux";
import React, { ComponentType } from 'react';

export interface IRoute {
    url: string,
    component: React.FC<any> | ConnectedComponentClass<ComponentType<any>, any>,
    exact: boolean,
    navigation: {
        show: boolean,
        displayName?: string
    }
}