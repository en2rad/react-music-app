import { compose, createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore( rootReducers, 
    composeWithDevTools( applyMiddleware()) 
);
