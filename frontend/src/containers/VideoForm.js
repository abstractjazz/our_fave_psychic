import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVideoFormInfo } from '../actions/videoForm';
import { createVideo } from '../actions/videos';

class VideoForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentVideoFormInfo = Object.assign({}, this.props.VideoFormInfo, {
            [name] : value
        } )
        this.props.updateVideoFormInfo(currentVideoFormInfo)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createVideo(this.props.videoFormInfo)
    }

    render() {
        const {name, url} = this.props.videoFormInfo;
        return (
<div>
    <h1>Add to the psychic's Knowledge</h1>
    <form onSubmit={this.handleOnSubmit}>
    <label htmlFor="name">Name:</label>
    <input 
    type="text"
    onChange={this.handleOnChange}
    name="name"
    value={name}
    />
    
    <label htmlFor="YouTube URL">YT URL:</label>
    <input 
    type="text"
    onChange={this.handle}
    name="url"
    value={url}
    />

    
    <button type="submit">Submit</button>
    </form>
</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        videoFormInfo: state.videoFormInfo
    }
}

export default connect(mapStateToProps, { 
    updateVideoFormInfo,
    createVideo
})(VideoForm);