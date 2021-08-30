import {
    createStore,
    applyMiddleware,
    combineReducers
    
} from 'redux';
import thunk from 'redux-thunk';

const videosReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_VIDEOS_SUCCESS':
            return action.videos;jj

            default:
                return state;
    }
}

let video = videosReducer( null, {type: '@@INIT' });
console.log(video) = []