import * as constants from './constants';

const defaultStore = {
    focused: false
}

export default (state = defaultStore, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if(action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}