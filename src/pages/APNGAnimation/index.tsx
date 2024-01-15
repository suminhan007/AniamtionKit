import React, { useEffect, useRef, useState } from 'react'
import parseAPNG from 'apng-js'
import styled from 'styled-components'
import Uploader from '../../components/Uploader'
import MainTitle from '../../components/MainTitle'
import { IconDelete ,IconVideoPlay} from '../../components/Icon'
import Button from '../../components/Button'
import Toast from '../../components/Toast'
import Loading from '../../components/Loading'

type Props = {

}
const APNGAnimation: React.FC<Props> = ({

}) => {
    const [url, setUrl] = useState<string>('');
    const [btnOpt, setBtnOpt] = useState<{ text: string, type: 'default' | 'primary' | 'disabled'|'default-stroke' | 'primary-stroke' | 'disabled-stroke', icon: React.ReactNode }>({ text: '转换为 canva', type: 'primary-stroke', icon: null })
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
        setBtnOpt({ text: '转换中', type: 'primary-stroke', icon: <Loading /> });
        await createApngPlayer(url, ctx, { numPlays: 0 })
        .then((res) => {
            res.play();
            setBtnOpt({ text: '播放', type: 'primary-stroke', icon: <IconVideoPlay/> });
        })
        .catch(() =>{
            setTimeout(() => {
                setBtnOpt({ text: '转换成canvas', type: 'primary-stroke', icon: null });
                handleShowToast(true,'转换失败，请重试')
            }, 6000);
        })
    }

    //提示信息
    const [toast,setToast] = useState<boolean>(false);
    const [toastText,setToastText] = useState<string>('');
    const handleShowToast = (show:boolean,text:string) => {
        setToastText(text);
        setToast(show);
        const timer = setTimeout(() => {
            setToast(false);
            clearTimeout(timer);
        }, 1000);
    }
    return (
        <StyleApngContainer className='StyleApngContainer flex column items-center gap-24'>
            {/* <video preload="auto" muted loop autoPlay disablePictureInPicture x-webkit-airplay="deny" width='100%' poster="/src/assets/">
                <source src={wemb6} type="video/webm" />
            </video> */}
            <MainTitle title='Apng To Canvas :' className='mt-32'/>
            <StyleUploaderWrap className='StyleUploaderWrap relative width-100'>
                <Uploader
                    desc="点击上传 APNG 文件 (.png) 或将文件拖放至此"
                    fileType="image/png"
                    onUpload={(url) => {
                        setUrl(url)
                    }}
                    component={url ? <img className='radius-4' height='100%' src={url} alt="" /> : null}
                />
                {url ?
                    <StyleControlBtnWrap className='absolute flex gap-8 color-gray-2 fs-12'>
                        <StyleControlBtn 
                            className='relative flex both-center border radius-6 px-12 py-4 pointer' 
                            onClick={() => {setUrl('');setBtnOpt({ text: '转换为 canva', type: 'primary-stroke', icon: null })}}>
                            <IconDelete />
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
                            if(url){
                                handleConvert();
                            }else{
                                handleShowToast(true,'请先上传apng文件～')
                            }
                        }}
                    />
            <div className='width-100 flex both-center mb-40 border'>
                <canvas ref={apngCanvasRef} width={480} height={400}/>
            </div>
            <Toast text={toastText} show={toast}/>
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
`
const StyleControlBtnWrap = styled.div`
    top: 8px;
    right: 12px;
`

const StyleControlBtn = styled.div`
    
`

export default APNGAnimation;