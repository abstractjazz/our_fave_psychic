import {
    createStore,
    applyMiddleware,
    combineReducers
    
} from 'redux';
import thunk from 'redux-thunk';

import videos from './reducers/videos';
import videoFormInfo from './reducers/videoFormInfo';

const reducers = combineReducers({
    videos,
    videoFormInfo
});

const middleware =[thunk];

export default createStore(
    reducers,
    window._REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
);