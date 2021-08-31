import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoFrame from '../components/VideoFrame';
import VideoForm from './videoForm';
import { getVideos } from '../actions/videos';


class Videos extends Component {

    componentDidMount() {
        this.props.getVideos()
        }
 
    render() {
        return(
    <div className ="VideosContainer">
          {/* {this.props.videos.map(video => <VideoFrame key={video.id} video=
          {video} />)} */}
          <VideoForm />
    </div>
        );
        }
    }
    
  
const mapStateToProps = (state) => {
    return ({
        videos: state.videos
    })
}

export default connect(mapStateToProps, { getVideos })(Videos);