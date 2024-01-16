import React from 'react'
import { StyleWrap } from '../Home'
import Uploader from '../../components/Uploader'

type Props = {

}
const VideoAnimation: React.FC<Props> = ({

}) => {
    return (
        <StyleWrap className='color-gray-1'>
            <div>
                <Uploader
                    fileType='video/*'
                />
            </div>
        </StyleWrap>
    )
}

export default VideoAnimation;