import React, { CSSProperties, useMemo } from 'react'
import styled from 'styled-components';

type Props = {
    show?:boolean;
    type?:'success'|'fail'|'warn'|'default';
    text?:string|React.ReactNode;
    style?:CSSProperties;
    className?:string;
}
const Toast:React.FC<Props> = ({
    show=false,
    type='default',
    text='咕噜咕噜～',
    style,
    className=''
}) => {
    const toastType = useMemo(() => {
        switch(type){
            case 'default':return {color:'white',background:'black',icon:null}
        }
    },[type])
  return (
    <StyleToastContainer 
        className={`StyleToastContainer fixed radius-6 px-12 py-4 transition ${show ? 'show' : 'close'} ${className}`}
        style={{
            color:toastType?.color,
            backgroundColor:toastType?.background,
            ...style
        }}
        
    >{text}</StyleToastContainer>
  )
}

const StyleToastContainer = styled.div`
    &.show{
        top:24px;
        opacity:0.9;
    }
    &.close{
        top:32px;
        opacity:0;
    }
`
export default Toast;
