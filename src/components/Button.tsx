import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components'

type Props = {
    text?: string;
    icon?: React.ReactNode;
    type?: 'default' | 'primary' | 'disabled'|'default-stroke' | 'primary-stroke' | 'disabled-stroke';
    width?: number | string;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
}
const Button: React.FC<Props> = ({
    text = '按钮',
    icon,
    type = 'default',
    width = 'fit-content',
    onClick,
    style,
    className
}) => {
    const btnObj = useMemo(() => {
        switch (type) {
            case 'default':
                return 'color-gray-2 border pointer';
            case 'primary':
                return 'color-white bg-primary pointer';
            case 'disabled':
                return 'color-gray-4 border disabled';
            case 'default-stroke':
                return 'color-gray-2 border pointer';
            case 'primary-stroke':
                return 'color-primary bg-primary-lighter border-primary pointer';
            case 'disabled-stroke':
                return 'color-gray-4 border disabled';
        }
    }, [type])
    return (
        <StyleButton
            className={`StyleButton flex both-center gap-4 radius-8 px-16 py-4 fs-16 transition ${btnObj} ${className ? className : ''}`}
            style={{
                width: width,
                height: 'fit-content',
                ...style
            }}
            onClick={() => onClick?.()}
        >
            {icon}
            {text}
        </StyleButton>
    )
}

const StyleButton = styled.div`
    &:hover{
        transform: translateY(-2px);    
        box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.02), 0px 3px 5px 0px rgba(0, 0, 0, 0.02);
    }
`
export default Button;