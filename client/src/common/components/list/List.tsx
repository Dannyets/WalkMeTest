import React, { ReactNode } from 'react';
import { ListItem } from '../list-item';
import { ListContainer } from './List.styles';

type ListProps = {
    items: any[],
    children: (props: any) => ReactNode
};

export const List: React.FC<ListProps> = ({ items, children }) => (
    <ListContainer direction="column">
        {items.map((i, index) => (
            <ListItem key={index} 
                      render={children} 
                      item={i}/>
        ))}
    </ListContainer>
);