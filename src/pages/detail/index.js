import React, {Component} from 'react';
import { 
    DetailWrapper,
    MainSide,
    RightSide,
    Title,
    Desc
} from './style';

class Detail extends Component{
    render() {
        return (
            <DetailWrapper>
                <MainSide>
                    <Title>徐峥用四个字评价吴秀波，当时以为是开玩笑，如今大家才反应过来</Title>
                    <Desc>
                        <img src='https://upload.jianshu.io/users/upload_avatars/15569637/87cfa617-81df-44ab-aae6-43b6bde575c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                        <div className='attention'>
                            <div className='attention-title'>
                                <span className='span-desc'><a href='#'>文字剧社</a></span>
                                <button><span>关注</span></button>
                            </div>
                            <div className='attention-desc'>
                                <span className='red'>&hearts;&nbsp;31</span>
                                <span>2019.01.29 11:39:52</span>
                                <span>字数 643 阅读 37,730</span>
                            </div>
                        </div>
                    </Desc>
                    {/* <Content></Content> */}
                </MainSide>

                <RightSide>
                    {/* <Caption></Caption>
                    <RecommendWrapper>
                        <Recommend></Recommend>
                        <Recommend></Recommend>
                    </RecommendWrapper> */}
                </RightSide>
            </DetailWrapper>
        )
    }
}

export default Detail;
