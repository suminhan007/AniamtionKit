import React, { useState } from 'react'
import styled from 'styled-components'

import { IconLeftArrow } from '../../components/Icon'
import MainTitle from '../../components/MainTitle'
import SubTitle from '../../components/SubTitle'
import LabelTitle from '../../components/LabelTitle'
import NumberInput from '../../components/NumberInput'
import Select from '../../components/Select'
import Slider from '../../components/Slider'
import { ELEMENTS_DATA, CSS_ANIAMTION_STYLE_DATA, TIME_FUNC_DATA } from '../../mock/CssAnimation'

type Props = {

}
const CSSAnimation: React.FC<Props> = ({

}) => {
    const [activeElem, setActiveElem] = useState<number>(1);
    const [activeStyle, setActiveStyle] = useState<number>(1);
    const [activeProperty, setActiveProperty] = useState<number>(0);
    const [left, setLeft] = useState<string>('0px');
    return (
        <StyleWrap className='StyleWrap flex mx-24 gap-32'>
            {/*选择结构 */}
            <div>
                <MainTitle title='Element' className='flex justify-start' />
                <div className='flex-1 flex column gap-8 width-100 radius-8'>
                    {
                        ELEMENTS_DATA.map(item =>
                            <StyleElementItem
                                className={`StyleElementItem px-12 py-8 radius-12 pointer border color-gray-1 ${activeElem === item.id ? 'bg-gray' : ''}`}
                                key={item.id}
                                onClick={() => setActiveElem(item.id)}
                            >{item.value}</StyleElementItem>
                        )
                    }
                </div>
            </div>
            {/* 结构编辑区 */}
            <StyleEditNav className='ml-16 shrink-0'>
                <MainTitle title='Aniamtion Properties' className='flex justify-start width-100' />
            </StyleEditNav>

            {/* 中间动画区 */}
            <div>
                {/* 动画展示区 */}
                <StyleDisplay className='StyleDisplay flex-1 bg-gray border-dash border-2 radius-4 shrink-0'>
                    <SubTitle title='Aniamtion Display' className='flex justify-start width-100 color-gray-4 ml-12' />
                </StyleDisplay>
                <StyleKeyController className='StyleKeyController width-100 mt-24'>
                    <Slider step={1} />
                </StyleKeyController>
            </div>

            <div>
                {/* 样式一级导航 */}
                <MainTitle title='CSS Properties' className='flex justify-start' />
                <div className='flex gap-12 items-center width-100'>
                    <IconLeftArrow className='border radius-8 p-4 pointer hover-bg-gray color-gray-3' onClick={() => setLeft('-100px')} />
                    <StyleNavWrap className='StyleNavWrap overflow-auto scrollbar-none'>
                        <div
                            className='relative flex gap-8 py-4'
                            style={{
                                transform: `translateX(${left})`,
                                transition: 'all 0.2s'
                            }}
                        >
                            {
                                CSS_ANIAMTION_STYLE_DATA.map(item =>
                                    <StyleNavItem
                                        key={item.id}
                                        className={`border radius-12 shrink-0 py-4 px-16 fs-16 color-gray-1 pointer hover-translate-y-2 hover-bg-gray transition ${activeStyle === item.id ? 'active' : ''}`}
                                        onClick={() => setActiveStyle(item.id)}
                                    >{item.name}</StyleNavItem>
                                )
                            }
                        </div>
                    </StyleNavWrap>
                    <IconLeftArrow className='border radius-8 p-4 rotate-180 pointer hover-bg-gray color-gray-3' onClick={() => setLeft('100px')} />
                </div>
                {/* 样式二级导航 */}
                <div className='flex gap-8 p-16 mt-24 radius-8 border'>
                    {
                        CSS_ANIAMTION_STYLE_DATA.filter(itm => itm.id === activeStyle)[0].childrens.map((item, index) =>
                            <StyleSubNavItem
                                key={index}
                                className={`StyleSubNavItem bg-gray radius-24 py-4 px-8 px-16 fs-14 color-gray-2 pointer hover-translate-y-2 hover-bg-gray transition ${activeProperty === index ? 'active' : ''}`}
                                onClick={() => setActiveProperty(index)}
                            >{item}
                            </StyleSubNavItem>
                        )
                    }
                </div>
                {/* 动画区 */}
                <div className='flex width-100 mt-40 gap-24'>

                    {/* 动画编辑区 */}
                    <div className='flex-1 flex column gap-12'>
                        <SubTitle title='Aniamtion Properties' className='flex justify-start width-100' />
                        {/* duration */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='duration' />
                            <NumberInput value={1} />
                        </StyleEditBar>
                        {/* delay */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='delay' />
                            <NumberInput value={0} />
                        </StyleEditBar>
                        {/* timing-function */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='timing-function' />
                            <Select
                                data={TIME_FUNC_DATA}
                            />
                        </StyleEditBar>
                        {/* iteration-count */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='循环次数（iteration-count）' />
                            <NumberInput value={1} />
                        </StyleEditBar>
                        {/* behavior */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='顺序（transition-behavior）' />
                            <NumberInput value={1} />
                        </StyleEditBar>
                        {/* property */}
                        <StyleEditBar className='StyleEditBar flex gap-12 items-center width-100'>
                            <LabelTitle title='属性（transiton-property）' />
                            <NumberInput value={1} />
                        </StyleEditBar>
                    </div>
                </div>
            </div>
        </StyleWrap>
    )
}

const StyleWrap = styled.div`
    width: calc(100% - 48px);
    height: 100vh;
    border-radius: 8px;
    margin: 0 auto;
`

const StyleElementItem = styled.div`
    text-align: center;
    transition: all 0.2s;
`
const StyleEditNav = styled.div`
    width: 240px;
`
const StyleNavWrap = styled.div`
    max-width: 100%;
`

const StyleNavItem = styled.div`
    &.active {
        background-color: #202020;
        color: white;
    }
`

const StyleSubNavItem = styled.div`
    &.active {
        color: white;
        background-color: #202020;
    }
`

const StyleDisplay = styled.div`
    min-width: 600px;
    height: auto;
    aspect-ratio: 1;
`

const StyleKeyController = styled.div`
    height: 16px;
`

const StyleEditBar = styled.div`
   height: 36px
`
export default CSSAnimation;