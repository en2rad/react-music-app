import { combineReducers } from "redux";
import playList from '../reducers/playList';
import playerState from '../reducers/playerState';

export default combineReducers({
    playList,
    playerState,
});