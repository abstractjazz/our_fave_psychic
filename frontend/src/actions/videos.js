import { resetVideoForm } from './videoForm';

     
const setVideos = videos => {
    return {
        type: 'GET_VIDEOS_SUCCESS',
        videos
    }
}

const makeIFrame = (video) => {
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", `${video.url}`.replace('watch?v=', 'embed/'));
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm)

    
    const p = document.createElement("p");
    p.innerText = video.name;
    p.id = "advice"
    document.body.appendChild(p);
    

}





   export const getVid = () => {
    fetch('http://localhost:3001/api/videos') 
    .then(resp => resp.json())
    .then(videos => videos[Math.floor(Math.random()*videos.length)])
    .then (video => makeIFrame(video))
}


   export const getVideos = () => {
       return dispatch => {
        return fetch('http://localhost:3001/api/videos')
        .then(resp => resp.json())
        .then(videos => dispatch(setVideos(videos)))
        .catch(error => console.log(error));
    }
}

export const createVideo = video => {
    return dispatch => {
        return fetch('http://localhost:3001/api/videos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({video: video})
    })
    .then(resp => resp.json())
    .then(video => {
    dispatch(resetVideoForm())
    })
    }
}
