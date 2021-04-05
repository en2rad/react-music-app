import { LIKE_CURR_TRACK, PICK_PLAYLIST, SKIP_TRACK, SEEK_MOUSE_UP_TRACK, PROGRESS_TRACK, PLAY_PAUSE_TRACK, MUTED_TRACK, VOLUME_CHANGE_TRACK, LOOP_TRACK, SEEK_CHANGE_TRACK, SEEK_MOUSE_DOWN_TRACK, } from '../actionTypes'
// import playerRef from '../../components/Player/Player'

const initState  = {
    currentPlayList: [],
    currentSongIndex: 0,
    playing: false,
    muted: false,
    volume: 1,
    played: 0,
    seeking: false,
    loop: false,
    fovarite: false,
}

const playerState = (state = initState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LIKE_CURR_TRACK: {
            const { newValue } = payload;
            return {
                ...state,
                currentPlayList: [ 
                    ...state.currentPlayList.map(item => {
                        if(item === newValue) {
                            return {
                                ...item,
                                favorite: !item.favorite,
                            }
                        }
                        return item;
                    })
                ]
                
            }
        }

        case PICK_PLAYLIST: {
            const { newValue } = payload;
            return {
                ...state,
                currentPlayList: [...newValue],
                currentSongIndex: 0,
            }
        }
        case SKIP_TRACK: {
            const { newValue } = payload;
            return {
                ...state,
                currentSongIndex: newValue
            }
        }
        case SEEK_CHANGE_TRACK:  {
            const { newValue } = payload;
            return {
                ...state,
                played: parseFloat(newValue / 100)
            }
        }
        case PROGRESS_TRACK:  {
            const { changeState } = payload;
            if(!state.seeking) {
                return {
                    ...state,
                    ...changeState
                }
            } else {
                return state
            }
        }
        case SEEK_MOUSE_UP_TRACK:  {
            return {
                ...state,
                seeking: false,
            }
        }
        case SEEK_MOUSE_DOWN_TRACK:  {
            return {
                ...state,
                seeking: true
            }
        }
        case PLAY_PAUSE_TRACK:  {
            const { play } = payload;
            if(play) {
                return {
                    ...state,
                    playing: true
                }
            } else {
                return {
                    ...state,
                    playing: !state.playing
                }
            }
        }
        case VOLUME_CHANGE_TRACK:  {
            const { newValue } = payload;
            return {
                ...state,
                volume: parseFloat(newValue / 100),
                muted: newValue === 0 ? true : false,
            }
        }
        case MUTED_TRACK:  {
            return {
                ...state,
                muted: !state.muted
            }
        }
        case LOOP_TRACK:  {
            return {
                ...state,
                loop: !state.loop
            }
        }
        default: {
            return state;
        }
    }
};  

export default playerState;