import React, { CSSProperties } from 'react'

type Props = {
    title?: string;
    style?: CSSProperties;
    className?: string;
}
const MainTitle: React.FC<Props> = ({
    title,
    style,
    className
}) => {
    return (
        <h1 className={`fs-20 color-gray-1 width-100 ${className ? className : ''}`} style={style}>{title}</h1>
    )
}
export default MainTitle;