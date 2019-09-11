import React, { ReactNode } from 'react';
import { ListItemContainer } from './ListItem.styles';

export type ListItem = {
    item: any;
    render: (props: any) => ReactNode
}

export const ListItem: React.FC<ListItem> = ({ item, render }) => (
    <ListItemContainer direction="row">
        {render({ item })}
    </ListItemContainer>
);