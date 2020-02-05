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
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
    margin: 0 auto;
    background: #0ff;
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
    // color: #000;
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