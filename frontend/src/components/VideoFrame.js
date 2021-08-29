import React from 'react';

const VideoFrame = ({ video }) => (
    <div key={video.id} className="VideoFrame">
        <h3>{video.name}</h3>
        <p>{video.url}</p>
    </div>
)

export default VideoFrame;