import React, { CSSProperties, useState } from 'react'
import styled from 'styled-components'
import { IconDownArrow } from './Icon'

type Props = {
    data?: { id: number, value: string }[];
    style?: CSSProperties;
    className?: string;
}
const Select: React.FC<Props> = ({
    data,
    style,
    className
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [active, setActive] = useState<number>(1);
    return (
        <div className='relative height-100 width-100'>
            <StyleSelect
                className={`StyleSelect flex items-center justify-between width-100 height-100 px-16 radius-4 pointer color-gray-2 fs-14 bg-gray hover-bg-grayer ${className ? className : ''}`}
                style={style}
                onClick={() => setOpen(!open)}
            >
                <div>{data?.filter(itm => itm.id === active)[0].value}</div>
                <IconDownArrow className='color-gray-3' />
            </StyleSelect>
            <StyleSelectDrop className={`StyleSelectDrop absolute py-8 width-100 bg-white radius-12 border overflow-auto transition ${open ? 'open' : ''}`}>
                {
                    data?.map(item =>
                        <StyleSelectItem
                            key={item.id}
                            className='StyleSelectItem py-8 px-16 fs-14 color-gray-2 hover-bg-gray pointer'
                            onClick={() => { setActive(item.id); setOpen(false) }}
                        >{item.value}</StyleSelectItem>
                    )
                }
            </StyleSelectDrop>
        </div>
    )
}

const StyleSelect = styled.div`

`

const StyleSelectDrop = styled.div`
    top: 40px;
    left: 0;
    transform: scaleY(0);
    max-height: 320px;
    box-shadow: 0px 5px 20px 0px rgba(36, 38, 40, 0.05);
    transform-origin: center 0;
    &.open{
        transform: scaleY(1);
    }
`

const StyleSelectItem = styled.div`
    
`
export default Select;