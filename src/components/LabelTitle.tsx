import React, { CSSProperties } from 'react'

type Props = {
    title?: string;
    style?: CSSProperties;
    className?: string;
}
const LabelTitle: React.FC<Props> = ({
    title,
    style,
    className
}) => {
    return (
        <div className={`color-gray-3 fw-500 fs-14 ${className ? className : ''}`} style={{ width: '300px', ...style }}>{title}</div>
    )
}

export default LabelTitle;