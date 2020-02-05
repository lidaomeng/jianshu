import React, {Component} from 'react';
import {
    DownloadAppWrapper
} from '../style';

class DownloadApp extends Component{
    render() {
        return (
            <DownloadAppWrapper>
                <img className='pic' src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
                <div className='content'>
                    <h3 className='title'>下载简书手机App&nbsp;></h3>
                    <p className='desc'>随时随地发现和创作内容</p>
                </div>
            </DownloadAppWrapper>
            
        )
    }
}


export default DownloadApp;
