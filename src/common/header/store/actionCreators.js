import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/5)
});

/**
 * 下面的写法和上面的写法效果一样！
 */
const changeList2 = (data) => {
    return (
        {
            type: constants.CHANGE_LIST,
            data: fromJS(data),
            totalPage: Math.ceil(data.length/5)
        }
    );
};

/**
 * 下面的函数需要导出
 */
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

/**
 * return一个函数，且这个函数的形参是dispatch
 */
export const getItemList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then( (res) => {
            const headerList = res.data.data;
            dispatch(changeList(headerList));
        }).catch( () => {
            console.log('error')
        });
    }
};
