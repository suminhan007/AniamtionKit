import React,{useState} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
const KITS_DATA = [
    {id:1,name:'GIF动画',path:'/apng'},
    {id:2,name:'合成雪碧图',path:'/spirit'},
    {id:3,name:'apng动画预览',path:'/canvas'},
    {id:4,name:'video动画',path:'/video'},
    {id:5,name:'css动画',path:'/css'},
    {id:6,name:'GIF动画',path:'/apng'}
]

type Props = {

}
const Home: React.FC<Props> = ({

}) => {
    const [hoveredId, setHoveredId] = useState<number>(0)
    return (
        <StyleWrap className='StyleWrap color-gray-1'>
            <div className='flex column both-center width-100 mt-48 gap-8'>
                <StyleHeaderTitle>Animation Kits</StyleHeaderTitle>
                <Button type='primary' text='开始探索' onClick={() => document.location.href='/apng'}/>
            </div>
            <StyleHomeKitList className='StyleHomeKitList grid gap-12 mt-48'>
                {KITS_DATA.map(item =>
                    <Link to={item.path}>
                        <StyleHomeKitItem 
                            className={`StyleHomeKitItem p-12 color-gray-2 border radius-8 pointer transition ${hoveredId === item.id ? 'hovered' : ''}`}
                            onMouseOver={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(0)}
                        >
                        {item.name}
                        </StyleHomeKitItem>
                    </Link>    
                )}
            </StyleHomeKitList>
        </StyleWrap>
    )
}

export const StyleWrap = styled.div`
    width: calc(100% - 48px);
    max-width: 960px;
    margin: 0 auto;
`

const StyleHeaderTitle = styled.div`
    font-size: 48px;
    font-weight: 600;
    font-family: monospace;
    text-align: center;
`

const StyleHomeKitList = styled.div`
    grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
`

const StyleHomeKitItem = styled.div`
    height: 80px;
    &.hovered{
        transform: translateY(-4px);
    }
`
export default Home;