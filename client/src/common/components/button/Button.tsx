import React, { useState, MouseEventHandler } from 'react';

import { Text } from '../text';
import { Icon } from '../icon'
import { CenteredButton } from './Button.styles';

type ButtonProps = {
    text: string;
    iconName: string;
    disabled: boolean;
    onClick: (e: MouseEventHandler<Element>) => void;
};

export const Button: React.FC<ButtonProps> = ({ text, iconName, disabled, onClick }) => {
    const [isBusy, setIsBusy] = useState(false);
    
    const onClickEventHandler = async (e: any) => {
        if(isBusy){
            return;
        }

        setIsBusy(true);

        try {
            onClick(e);
        } catch (error) {
            console.log(error);
        } finally {
            setIsBusy(false);
        }
    };

    return (
        <CenteredButton 
            onClick={onClickEventHandler}
            direction="row"
            disabled={disabled}>
                {iconName && <Icon iconName={iconName}/>}
                <Text>{text}</Text>
        </CenteredButton>
    );
}