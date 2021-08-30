export default (state = {
    name: '',
    url: ''
}, action) => {
    switch(action.type) {
        case 'NEW_INFO': 
        return action.videoFormInfo

        case 'RESET_VIDEO_FORM':
            return state;

        default:
            return state;
    }
}