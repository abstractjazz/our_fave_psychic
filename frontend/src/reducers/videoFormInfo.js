 const initialState = {
    name: '',
    url: ''
}
   
  export default (state = initialState, action) => {
   
    switch(action.type) {
        case 'NEW_INFO': 
        return action.videoFormInfo;

        case 'RESET_VIDEO_FORM':
            return initialState;

        default:
            return state;
    }
}
