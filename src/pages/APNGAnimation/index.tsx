import React, { useEffect, useRef, useState } from 'react'
// import wemb6 from '../../../public/webm@6M.webm'
// import wemb8 from '../../../public/webm@8M.webm'
// import mp4 from '../../../public/webmtomp4@6M.mp4'
import parseAPNG from 'apng-js'
import styled from 'styled-components'
import Uploader from '../../components/Uploader'
import Popover from '../../components/Popover'
import { IconDelete } from '../../components/Icon'
import Button from '../../components/Button'

type Props = {

}
const APNGAnimation: React.FC<Props> = ({

}) => {
    const [url, setUrl] = useState<string>('');
    const [btnOpt, setBtnOpt] = useState<{ text: string, type: 'default' | 'primary' | 'disabled', icon: React.ReactNode }>({ text: '转换为 canva', type: 'default', icon: null })
    const apngCanvasRef = useRef<HTMLCanvasElement>(null);

    const ctx = apngCanvasRef.current?.getContext('2d');
    // 获取图片并转化成 ArrayBuffer
    function getImgBuffer(url: string) {
        return new Promise(async resolve => {
            const blob = await fetch(url).then(res => res.blob());
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onload = () => {
                resolve(reader.result);
            };
        });
    }

    //输出apng-js的player实例
    async function createApngPlayer(url: string, ctx: any, options: any) {
        const imgBuffer: any = await getImgBuffer(url);
        const apng: any = parseAPNG(imgBuffer);
        Object.keys(options).forEach(key => {
            apng[key] = options[key];
        });
        const player = await apng.getPlayer(ctx);
        return player;
    }

    async function handleConvert() {
        const player = await createApngPlayer(url, ctx, { numPlays: 1 });
        player.play();
    }
    return (
        <StyleApngContainer className='StyleApngContainer flex column items-center gap-24'>
            {/* <video preload="auto" muted loop autoPlay disablePictureInPicture x-webkit-airplay="deny" width='100%' poster="/src/assets/">
                <source src={wemb6} type="video/webm" />
            </video> */}
            <StyleUploaderWrap className='StyleUploaderWrap relative width-100'>
                <Uploader
                    desc="点击上传 [APNG] 文件或将文件拖放至此"
                    fileType="image/png"
                    onUpload={(url) => {
                        setUrl(url)
                    }}
                    component={url ? <img className='radius-4' height='100%' src={url} alt="" /> : null}
                />
                {url ?
                    <StyleControlBtnWrap className='absolute flex gap-8 color-gray-2 fs-12'>
                        <StyleControlBtn className='relative flex both-center border radius-6 px-12 py-4 pointer' onClick={() => setUrl('')}>
                            <IconDelete />
                            <Popover text='删除' />
                        </StyleControlBtn>
                    </StyleControlBtnWrap>
                    :
                    <></>
                }
            </StyleUploaderWrap>
            <Button
                width={140}
                text={btnOpt.text}
                type={btnOpt.type}
                icon={btnOpt?.icon}
                onClick={() => {
                    // setBtnOpt({ text: '转换中', type: 'disabled', icon: <IconDelete /> });
                    handleConvert();
                }}
            />
            <StyleCanvasContainer className='StyleCanvasContainer flex both-center border'>
                <canvas ref={apngCanvasRef} width={424} height={424} />
                {/* <img src={apngUrl} width='100%' alt="" /> */}
            </StyleCanvasContainer>
        </StyleApngContainer>
    )
}
const StyleApngContainer = styled.div`
    width: calc(100% - 32px);
    max-width: 960px;
    margin: 0 auto;
`
const StyleUploaderWrap = styled.div`
    height: 200px;
    margin-top: 72px;
`
const StyleControlBtnWrap = styled.div`
    top: 8px;
    right: 12px;
`

const StyleControlBtn = styled.div`
    
`

const StyleCanvasContainer = styled.div`
    width: 100%;
    aspect-ratio: 4/3;
    background-color: #333;
`

export default APNGAnimation;