import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components'

type Props = {
    text?: string;
    icon?: React.ReactNode;
    type?: 'default' | 'primary' | 'disabled';
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
                return 'color-white pointer';
            case 'disabled':
                return 'color-gray-4 border disabled'
        }
    }, [type])
    return (
        <StyleButton
            className={`StyleButton flex both-center gap-4 radius-8 px-16 py-4 fs-16 ${btnObj} ${className ? className : ''}`}
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
    
`
export default Button;