import React from 'react';


const Videos =  (props) => {
return (
    <div>
          <h1>VIDEOS</h1>
          {props.videos.map(videos => <h1>{videos.name}</h1>)}
    </div>
)
      
      }
        
export default Videos;