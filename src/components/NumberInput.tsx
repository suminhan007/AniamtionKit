import React, { CSSProperties, useState } from 'react'
import styled from 'styled-components'

type Props = {
    value: number;
    style?: CSSProperties;
    className?: string;
}
const NumberInput: React.FC<Props> = ({
    value,
    style,
    className
}) => {
    const [num, setNum] = useState<number>(value);
    return (
        <StyleNumberInput className={`StyleNumberInput flex gap-8 items-center height-100 width-100 ${className ? className : ''}`} style={style}>
            <StyleIcon
                className={`flex both-center border radius-8 pointer hover-bg-gray color-gray-3 shrink-0 ${num <= 0 ? 'disabled' : ''}`}
                onClick={() => num > 0 && setNum(num - 0.5)}
            >-</StyleIcon>
            <StyleInput
                type="number"
                value={num}
                step={0.1}
                className='StyleInput flex-1 radius-4 pl-16 bg-gray color-gray-2 hover-bg-grayer'
            />
            <StyleIcon
                className={`flex both-center border radius-8 pointer hover-bg-gray color-gray-3 shrink-0`}
                onClick={() => setNum(num + 0.5)}
            >+</StyleIcon>
        </StyleNumberInput>
    )
}
const StyleNumberInput = styled.div`

`
const StyleIcon = styled.div`
    width: 24px;
    height: 24px;
    &.disabled {
        color: #999;
        cursor: default;
    }
`
const StyleInput = styled.input`
    height: 100%;
    border: none;
    pointer-events: none;
    &:focus-within {
        border: none;
    }
`
export default NumberInput;