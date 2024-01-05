import React, { CSSProperties } from 'react'

type Props = {
    title?: string;
    style?: CSSProperties;
    className?: string;
}
const SubTitle: React.FC<Props> = ({
    title,
    style,
    className
}) => {
    return (
        <h2 className={`fs-16 color-gray-1 fw-500 width-100 ${className ? className : ''}`} style={style}>{title}</h2>
    )
}
export default SubTitle;