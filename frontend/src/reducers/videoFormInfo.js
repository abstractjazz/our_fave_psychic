export default (state = {
    name: '',
    url: ''
}, action) => {
    switch(action.type) {
        case 'NEW_INFO': 
        return action.videoFormInfo

        default:
            return state;
    }
}