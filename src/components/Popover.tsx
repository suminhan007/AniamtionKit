import React, { useMemo } from 'react'
import styled from 'styled-components'

type Props = {
    text?: string | React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    alignment?: 'left' | 'center' | 'right';
}
const Popover: React.FC<Props> = ({
    text,
    placement = 'top',
    alignment = 'center'
}) => {
    const position = useMemo(() => {
        switch (placement + '-' + alignment) {
            case 'top-center':
                return { top: '-100%', left: '-50%' }
        }
    }, [placement, alignment])
    return (
        <StylePopWrap
            className='StylePopWrap bg-white absolute color-gray-3 py-4 px-8 border radius-4'
            style={{
                top: position?.top
            }}
        >
            {text}
        </StylePopWrap>
    )
}

const StylePopWrap = styled.div`
    width: 200%;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.05), 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    &::after{
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border: 1px solid #999;
    }
`
export default Popover
