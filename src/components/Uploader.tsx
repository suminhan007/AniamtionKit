import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

type Props = {
    /**上传文件描述 */
    desc?: string;
    /**文件类型 */
    fileType?: string;
    /**上传事件 */
    onUpload?: (url: any) => void;
    component?: React.ReactNode;
    style?: CSSProperties;
    claaName?: string;
}
const Uploader: React.FC<Props> = ({
    desc,
    fileType,
    onUpload,
    component,
    style,
    claaName
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string | ArrayBuffer | null>();

    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            setUrl(URL.createObjectURL(e.target.files[0]))
        }
    }
    useEffect(() => {
        onUpload?.(url);
    }, [url])
    return (
        <StyleUploadForm
            className={`width-100 height-100 flex column both-center relative bg-gray radius-12 gap-8 pointer p-16 ${claaName ? claaName : ''}`}
            style={style}
        >
            <StyleFileInput
                ref={fileInputRef}
                type="file"
                accept={fileType}
                onChange={(e: any) => {
                    handleChange(e);
                }}
                className='StyleFileInput absolute'
            />

            {component ? component :
                <>
                    <div className='fs-20 color-gray-4'>+</div>
                    <div className='color-gray-4 fs-16'>{desc}</div>
                </>
            }
        </StyleUploadForm>
    )
}

const StyleUploadForm = styled.label`
    
`
const StyleFileInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
`

export default Uploader;
