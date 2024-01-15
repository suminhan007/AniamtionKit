import React, { useState } from 'react'
import styled from 'styled-components'
import MainTitle from '../../components/MainTitle'
import Uploader from '../../components/Uploader'

type Props = {

}
const SpiritAnimation: React.FC<Props> = ({

}) => {
    const [file,setFile] = useState<any>();
    return (
        <StyleSpiritWrap className='StyleSpiritWrap'>
            <MainTitle title='快速制作 apng :' className='mt-32'/>
            <StyleUplaoder>
                <Uploader
                    desc="点击上传序列图或将文件拖放至此"
                    fileType="*.png"
                    onUpload={(file) => {
                    }}
                    component={file ? <img className='radius-4' height='100%' src={file} alt="" /> : null}
                />
            </StyleUplaoder>
        </StyleSpiritWrap>
    )
}

const StyleSpiritWrap = styled.div`
    width: calc(100% - 32px);
    max-width: 960px;
    margin: 0 auto;
`

const StyleUplaoder = styled.div`
    height: 200px;
`
export default SpiritAnimation;