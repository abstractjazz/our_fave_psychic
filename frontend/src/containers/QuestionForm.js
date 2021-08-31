import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../actions/videos';
import { getVid } from '../actions/videos';


class QuestionForm extends Component {
constructor(props) {
    super(props)
}



    handleOnSubmit = event => {
        event.preventDefault();
        getVid();
    }  

    render() {
    return(

    <form onSubmit={this.handleOnSubmit}>

    <label htmlFor="question">What is your question?:</label><br/><br/>
    <textarea 
    type="text"
    name="question"/><br/>
    <button type="submit">Submit</button>
    </form>

    )}

}


export default QuestionForm;