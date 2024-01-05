import React, { useRef, useState } from 'react'
import styled from 'styled-components'

type Props = {
    step?: number;
    value?: number;
    onChange?: (val: number) => void;
}
const Slider: React.FC<Props> = ({
    step = 25,
    value = 0,
    onChange
}) => {
    const [currentValue, setCurrentValue] = useState<number>(value);
    const SliderRef = useRef<HTMLDivElement>(null);
    const bg = () => {
        const width = SliderRef.current?.clientWidth;
        const column = 100 / step;
        let x: string = '';
        let i: number = 1;
        while (i < column) {
            x += ',var(--od-gray-12) ' + ((Number(width) / column) * (i) - 2) + 'px' + ',var(--od-gray-08) ' + ((Number(width) / column) * (i) - 2) + 'px,'
                + 'var(--od-gray-8) ' + (Number(width) / column) * (i) + 'px' + ',var(--od-gray-12) ' + (Number(width) / column) * (i) + 'px';
            i++;
        }
        return x;
    }
    return (
        <div
            ref={SliderRef}
            className='StyleSliderBg relative width-100 height-100 radius-8 bg-gray'
            style={{
                background: 'linear-gradient(to right,var(--od-gray-12)' + bg() + ')',
            }}
        >
            <StyleActiveBg className='StyleActiveBg absolute left-0 top-0 height-100' style={{ width: (currentValue * step) + '%' }}></StyleActiveBg>
            <StyleInput
                type="range"
                value={currentValue}
                min={0}
                max={100 / step}
                onChange={(e) => {
                    onChange?.(Number(e.target.value));
                    setCurrentValue(Number(e.target.value));
                }} />
        </div>
    )
}


const StyleActiveBg = styled.div`
    background-color: #202020;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 0;
`

const StyleInput = styled.input`
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  height: 0;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 8px;
  &::-webkit-slider-runnable-track {
      height: 0px;
  }
  &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      border: 1px solid  rgba(68, 91, 125, 0.12);
      background: #FFF;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
      position: relative;
      &:hover {
        border-color: #202020;
        cursor: ew-resize;
      }
  }
`

export default Slider;
