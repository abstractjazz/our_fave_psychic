import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateVideoFormInfo } from '../actions/videoForm';
import { createVideo } from '../actions/videos';

class VideoForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentVideoFormInfo = Object.assign({}, this.props.videoFormInfo, {
            [name] : value
        } )
        this.props.updateVideoFormInfo(currentVideoFormInfo)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        console.log('submitted!')
        this.props.createVideo(this.props.videoFormInfo)
    }

    render() {
        const {name, url} = this.props.videoFormInfo;
        return (
<div>
    <h1>Add to the psychic's Knowledge</h1>
    <p>Welcome to the web psychic. 
    Add a piece of timeless wisdom and a link to the last youtube video you watched below. 
    When other wisdom seekers come with a question for the psychic web, 
    your offering might help them along.</p>

    <p>You can also ask your own query by clicking the 'ask' link above. The psychic web is always here for you.</p>

    <form onSubmit={this.handleOnSubmit}>
        <div>
    <label htmlFor="name">Advice:</label><br/><br/>
    <textarea 
    type="text"
    onChange={this.handleOnChange}
    name="name"
    value={name}
    />
    </div><br/><br/>
    <div>
    <label htmlFor="YouTube URL">YT URL:</label><br/><br/>
    <input 
    type="text"
    onChange={this.handleOnChange}
    name="url"
    value={url}
    />
   </div><br/><br/>

    
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