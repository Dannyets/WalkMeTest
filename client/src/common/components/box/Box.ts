import styled from 'styled-components';
import chroma from 'chroma-js';
import { ReactNodeArray } from 'prop-types';
import { ReactNode } from 'react';

export const Box = styled.div`
    margin: var(--margin);
    border: var(--box-border-storke, 1px) solid var(--box-border-color);
    transition: all .4s ease-in-out;
    background-color: var(--background-color);

    &:hover {
        transform: scale(1.1);
        background-color: ${props => getAlpah(props.theme.palette.sixth)}
        --text-color: var(--text-color);
    }
`;

export type CenteredBoxProps = {
    direction: 'row' | 'column'
};

export const CenteredBox = styled(Box)<CenteredBoxProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    justify-content: center;
`;

export function getAlpah(color: string){
    const chromaColor = chroma(color);

    const newColor = chromaColor.alpha(0.4).hex();

    return newColor;
}