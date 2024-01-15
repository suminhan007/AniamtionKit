import React from "react";
type Props = {
    size?: string;
    color?: string;
    className?: string;
    onClick?: () => void;
}
export const IconLeftArrow: React.FC<Props> = ({
    size = '24',
    color = 'currentcolor',
    className,
    onClick,
}) => {
    return (
        <svg onClick={() => onClick?.()} className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.67678 12.9831C9.57915 13.0808 9.42085 13.0808 9.32322 12.9831L4.5149 8.17481C4.41727 8.07718 4.41727 7.91889 4.5149 7.82126L9.32323 3.01293C9.42086 2.9153 9.57915 2.9153 9.67678 3.01293L10.2425 3.57862C10.3401 3.67625 10.3401 3.83454 10.2425 3.93217L6.1766 7.99803L10.2425 12.0639C10.3401 12.1615 10.3401 12.3198 10.2425 12.4175L9.67678 12.9831Z" fill={color} />
        </svg>
    )
}

export const IconDownArrow: React.FC<Props> = ({
    size = '16',
    color = 'currentcolor',
    className
}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.9834 6.32322C13.081 6.42085 13.081 6.57915 12.9834 6.67678L8.17505 11.4851C8.07742 11.5827 7.91913 11.5827 7.8215 11.4851L3.01317 6.67678C2.91554 6.57915 2.91554 6.42086 3.01317 6.32322L3.57886 5.75754C3.67649 5.65991 3.83478 5.65991 3.93241 5.75754L7.99828 9.8234L12.0641 5.75754C12.1618 5.65991 12.3201 5.65991 12.4177 5.75754L12.9834 6.32322Z" fill={color} />
        </svg>
    )
}

export const IconDelete: React.FC<Props> = ({
    size = '16',
    color = 'currentcolor',
    className
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
            <path d="M2 3.5C2 3.22386 2.22386 3 2.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H2.5C2.22386 4 2 3.77614 2 3.5Z" fill={color} />
            <path d="M4.5 1.5C4.5 1.22386 4.72386 1 5 1H11C11.2761 1 11.5 1.22386 11.5 1.5C11.5 1.77614 11.2761 2 11 2H5C4.72386 2 4.5 1.77614 4.5 1.5Z" fill={color} />
            <path d="M6 6.5C6 6.22386 6.22386 6 6.5 6C6.77614 6 7 6.22386 7 6.5V10.5C7 10.7761 6.77614 11 6.5 11C6.22386 11 6 10.7761 6 10.5V6.5Z" fill={color} />
            <path d="M9 6.5C9 6.22386 9.22386 6 9.5 6C9.77614 6 10 6.22386 10 6.5V10.5C10 10.7761 9.77614 11 9.5 11C9.22386 11 9 10.7761 9 10.5V6.5Z" fill={color} />
            <path d="M13 14H3C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14Z" fill={color} />
            <path d="M3 5.5C3 5.22386 3.22386 5 3.5 5C3.77614 5 4 5.22386 4 5.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V5.5Z" fill={color} />
            <path d="M12 5.5C12 5.22386 12.2239 5 12.5 5C12.7761 5 13 5.22386 13 5.5V13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5V5.5Z" fill={color} />
            <path d="M3 12H4V14H3V12Z" fill={color} />
            <path d="M12 12H13V14H12V12Z" fill={color} />
        </svg>
    )
}

export const IconVideoPlay: React.FC<Props> = ({
    size = '16',
    color = 'currentcolor',
}) => {
    return (
       <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="none" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
        </svg>
    )
}