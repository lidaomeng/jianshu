import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
});

/**
 * 下面的函数需要导出
 */
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const getItemList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then( (res) => {
            dispatch(changeList(res.data.data));
        }).catch( () => {
            console.log('/api/headerList.json error')
        });
    }
};