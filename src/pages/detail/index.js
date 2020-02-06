import React, {Component} from 'react';
import { 
    DetailWrapper,
    MainSide,
    RightSide,
    Title,
    Desc,
    Article,
    Paragraph,
    FigureImage
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
                    <Article>
                        <Paragraph>
                            51岁的中年大叔吴秀波凭着特有的磁性嗓音，吸引了众多少女，他给人的一贯印象是“演技好、有男人味”，然而，最近他的小三陈昱霖被他“送进”看守所的事闹得满城风雨，波叔的形象也一落千丈。
                        </Paragraph>
                        <FigureImage>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-a0f5e8b1796e64d0.png?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp' alt=''/>
                            <div className='image-caption'>图片发自简书App</div>
                        </FigureImage>

                        <Paragraph>
                            吴秀波也是大器晚成的演员，演员出身的他中年得志，自从西雅图这部剧才开始大红了起来，大家都认为他是好男人好爸爸，而现实生活上也证实他有妻子有孩子，之前参加节目的时候，主持人问及各位嘉宾，男人应不应该有私房钱时，他只表示是自己所有工资都交给妻子，而且他们的几处房产也都是妻子的，所以，大家对这位演员更加喜爱。
                        </Paragraph>
                        <FigureImage>
                            <img src='http://upload-images.jianshu.io/upload_images/15569637-56a462227522fa27.png?imageMogr2/auto-orient/strip|imageView2/2/w/458/format/webp' alt=''/>
                            <div className='image-caption'>图片发自简书App</div>
                        </FigureImage>

                        <Paragraph>
                            早前，吴秀波曾作为导师参加一期综艺节目，在演员阚清子和徐璐的pk中，几位导师之间的意见出现了分歧，波叔看完表演后说觉得两位演员表演的都很不错，而章子怡则表示不同意，章子怡认为这两个演员所表达出来的效果并没有打动到她，两个人的状态都不对！
                        </Paragraph>
                        <FigureImage>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-8fa165a057c7ed34.png?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp' alt=''/>
                            <div className='image-caption'>图片发自简书App</div>
                        </FigureImage>

                        <Paragraph>
                            而刚刚表示两位演员表现都不错的吴秀波听到章子怡的点评后，他却表示支持章子怡的观点，而徐峥老师这时却表示不同意子怡老师的观点，他觉得阚清子演的就很不错很走心，而这时的吴秀波又想附和徐峥老师的想法，但是，徐峥老师却不买账，他毫不留情的说吴秀波，你这样变来变去，像墙头草一样，让人无法相信你了。
                        </Paragraph>
                        <FigureImage>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-61c6adf2468fa944.png?imageMogr2/auto-orient/strip|imageView2/2/w/605/format/webp' alt=''/>
                            <div className='image-caption'>图片发自简书App</div>
                        </FigureImage>

                        <Paragraph>
                            一时间让吴秀波挺尴尬的！最后，不依不饶的徐峥还不忘对“变来变去”的吴秀波再补一刀：此人不可深交！
                        </Paragraph>
                        <FigureImage>
                            <img src='//upload-images.jianshu.io/upload_images/15569637-c0653fd699611c2a.png?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp' alt=''/>
                            <div className='image-caption'>图片发自简书App</div>
                        </FigureImage>

                        <Paragraph>
                            虽然，当时在场的所有人都只当是徐老师的一句玩笑话，但是，如今再回头看吴秀波的小三陈昱霖被捕事件，徐峥老师对波叔的评价也真不是信口拈来啊，“不可深交”这四个字也许是对吴秀波非常贴切的概括！
                        </Paragraph>

                    </Article>
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
