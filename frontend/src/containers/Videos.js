import React, { Component } from 'react';
import VideoFrame from '../components/VideoFrame';
import VideoForm from './VideoForm';

class Videos extends Component {
 
    render() {
        return(
    <div className ="VideosContainer">
          <h1>VIDEOS</h1>
          {this.props.videos.map(video => <VideoFrame video=
          {video} />)}
          <VideoForm />
    </div>
        );
        }
    }
    
  
        
export default Videos;