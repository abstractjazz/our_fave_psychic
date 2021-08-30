import { resetVideoForm } from './videoForm';
     
const setVideos = videos => {
    return {
        type: 'GET_VIDEOS_SUCCESS',
        videos
    }
}

const addVideo = video => {
    return {
        type: 'CREATE_VIDEO_SUCCESS',
        video
    }
}

 
       
   export const getVideos = () => {
       return dispatch => {
        return fetch('http://localhost:3000/api/videos')
        .then(resp => resp.json())
        .then(videos => dispatch(setVideos(videos)))
        .catch(error => console.log(error));
    }
}

export const createVideo = video => {
    return dispatch => {
        return fetch('http://localhost:3000/api/videos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({video: video})
    })
    .then(resp => resp.json())
    .then(video => {
    dispatch(addVideo(video))
    dispatch(resetVideoForm())
    })
    }
}
