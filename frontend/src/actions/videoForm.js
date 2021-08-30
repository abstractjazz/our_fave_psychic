// creators 

export const updateVideoFormInfo = videoFormInfo => { 
    return {
        type: 'NEW_INFO',
        videoFormInfo 
    }
}


export const resetVideoForm = () => {
    return {
        type: 'RESET_VIDEO_FORM',
    }
}