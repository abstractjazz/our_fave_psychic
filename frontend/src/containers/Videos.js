import React from 'react';


const Videos =  (props) => {
return (
    <div className ="VideosContainer">
          <h1>VIDEOS</h1>
          {props.videos.map(video => 
          <div key={video.id} className="VideoFrame">
          <h3>{video.name}</h3>
          <p>{video.url}</p>
      
        </div>
          )}
    </div>
)
      
      }
        
export default Videos;