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
    claaName=''
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string | ArrayBuffer | null>();

    const handleChange = (e:any,file: any) => {
        e.preventDefault();
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            setUrl(URL.createObjectURL(file))
        }
    }
    useEffect(() => {
        onUpload?.(url);
    }, [url])
    return (
        <StyleUploadForm
            className={`width-100 height-100 flex column both-center relative bg-gray radius-12 gap-8 pointer ${claaName}`}
            style={style}
            onDragOver={(e:any) => e.preventDefault()}
            onDrop={(e:any) => handleChange(e,e.dataTransfer.files[0])}
        >
            <StyleFileInput
                ref={fileInputRef}
                type="file"
                accept={fileType}
                onChange={(e: any) => {
                    handleChange(e,e.target.files[0]);
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
    padding:32px;
`
const StyleFileInput = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
`

export default Uploader;
