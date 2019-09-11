import styled from 'styled-components';
import chroma from 'chroma-js';
import { Box } from '../box';

export const Button = Box.withComponent('button');

type CenteredButtonProps = {
    direction: 'row' | 'column';
    disabled: boolean
};

export const CenteredButton = styled(Button)<CenteredButtonProps>`
    display: flex;
    flex-direction: ${(props: CenteredButtonProps) => props.direction || 'column'};
    align-items: center;
    justify-content: center;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
    ${props => props.disabled && `--background-color:${getAlpah(props.theme.palette.first)}`};

    &:hover {
        ${props => props.disabled && `background-color:${getAlpah(props.theme.palette.first)}`};
    }
`;

export function getAlpah(color: string){
    const chromaColor = chroma(color);

    const newColor = chromaColor.alpha(0.2).hex();

    return newColor;
}