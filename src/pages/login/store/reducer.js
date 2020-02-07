const defaultStore = fromJS({
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        default:
            return state;
    }  
}