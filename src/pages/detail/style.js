import styled from 'styled-components';

export const template = styled.div`
`;

/**
 * 首页部分
 */
export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 1000px;
    margin: 0 auto;
    padding: 10px 16px 0;
    // background: gray;
`;

export const MainSide = styled.div`
    float: left;
    width: 730px;
    box-sizing: border-box;
    // background: pink;
    padding: 24px;
    margin-bottom: 10px;
`;

export const RightSide = styled.div`
    float: right;
    width: 260px;
    box-sizing: border-box;
    background: deeppink;
`;

export const Title = styled.h1`
    width: 100%;
    font-size: 30px;
    line-height: 42px;
    color: #404040;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const Desc = styled.div`
    overflow: hidden;
    width: 100%;
    margin-bottom: 32px;
    img{
        display: block;
        float: left;
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
    .attention{
        float: left;
        margin-left: 8px;
        .attention-title{
            margin-bottom: 6px;
            span{
                margin-right: 8px;
                font-weight: bold;
                a{
                    font-size: 16px;
                    line-height: 18px;
                    color: #404040;
                }
            }
            button{
                background: #fff;
                padding: 2px 9px;
                border-color: #ec7259;
                border-radius: 12px;
                text-align: center;
                cursor: pointer;
                span{
                    font-size: 12px;
                    line-height: 17px;
                    color: #ec7259;
                    margin-right: 0;
                }
            }
        }
        .attention-desc{
            font-size: 13px;
            line-height: 18px;
            color: #969696;
            .red{
                color: #ec7259;
            }
            span{
                margin-right: 10px;
            }
        }
    }
`;

/**
 * 内容部分
 */
export const Article = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const Paragraph = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #404040;
    margin-bottom: 20px;
`;

export const FigureImage = styled.div`   
    width: 100%; 
    text-align: center;
    padding-bottom: 25px;
    img{
        display: block;
        margin: 0 auto;
        margin: 0 auto;
    }
    .image-caption{
        display: inline-block;
        vertical-align:middle; 
        font-size: 13px;
        line-height: 43px;
        color: #999;
        padding: 10px;
        margin: 0 auto;
        border-bottom: 1px solid #eee;
    }
`;