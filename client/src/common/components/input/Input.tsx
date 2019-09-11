import React, { useState } from 'react';
import { InputContainer, StyledInput } from './Input.styles';

type InputProps = {
    type?: string,
    placeholder?: string,
    onFocus?: () => void,
    onBlur?: () => void,
    value?: string,
    className?: string,
    onChange: (value: string) => void
}

export const Input : React.FC<InputProps> = ({ type, value, placeholder, onFocus, onBlur, className, onChange }) => {
    const [inputText, setInputText] = useState(value ? value: '');

    return (
        <InputContainer className={className}>
            <StyledInput placeholder={placeholder}
                type={type ? type : 'text'}
                value={inputText}
                onChange={(e) => {
                    const { value } = e.target;
                    setInputText(value);
                    onChange(value);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </InputContainer>
    );
}