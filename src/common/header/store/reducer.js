import * as constants from './constants';
import { fromJS } from 'immutable'; 

const defaultStore = fromJS({
    focused: false
});

export default (state = defaultStore, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}