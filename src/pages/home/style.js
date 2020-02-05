import styled from 'styled-components';

/**
 * 首页部分
 */
export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    margin: 0 auto;
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 10px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin: 0 auto;
    padding-top: 30px;
    margin-bottom: 40px;
`;

/**
 * 标题部分
 */
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }
`;

/**
 * 列表部分
 */
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 458px;
    // float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

/**
 * 推荐部分
 */
export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
`;

/**
 * 推荐作者
 */
export const WriterWrapper = styled.div`
    width: 280px;
    margin-bottom: 20px;
`;
export const WriterItem = styled.div`
    position: relative;
    width: 280px;
    margin-top: 15px;
    .writer-pic{
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .note{
        display: block;
        position: absolute;
        top: 5px;
        right: 0;
        color: #42c02e;
        text-decoration: none;
        font-size: 13px;
        line-height: 18px;
        margin-top: 5px;
    }
    .title{
        display: block;
        font-size: 14px;
        line-height: 25px;
        color: #333;
        padding-top: 5px;
        margin-right: 60px;
    }
    .desc{
        display: block;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        margin: 2px 0 10px;
    }
`;

/**
 * 二维码扫描部分
 */
export const DownloadAppWrapper = styled.div`
    display:table;
    width: 280px;
    height: 82px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    background: #fff;
    padding: 10px 20px;
    margin-bottom: 30px;
    border-radius: 5px;
    .pic{
        display: block;
        float: left;
        width: 60px;
        height: 60px;
        margin-right: 7px;
    }
    .content{
        display: table-cell;
        vertical-align: middle;
        .title{
            font-size: 15px;
            line-height: 21px;
            color: #333;
        }
        .desc{
            font-size: 13px;
            line-height: 18px;
            color: #999;
            margin-top: 4px;
        }
    }
`;

/**
 * 查看全部
 */
export const ViewAllWrapper = styled.div`
    display: block;
    line-height: 18px;
    width: 280px;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    text-align: center;
    background: #f7f7f7;
    border-radius: 6px;
`;

/**
 * 阅读更多
 */
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background: #a5a5a5;
    margin: 30px 0 60px;
    border-radius: 20px;
`;