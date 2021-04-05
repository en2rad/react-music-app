import { 
    LIKE_TRACK, 
    PICK_PLAYLIST, 
    SKIP_TRACK, 
    SEEK_MOUSE_UP_TRACK, 
    PROGRESS_TRACK, 
    PLAY_PAUSE_TRACK, 
    LOOP_TRACK, 
    VOLUME_CHANGE_TRACK, 
    MUTED_TRACK, 
    SEEK_CHANGE_TRACK, 
    SEEK_MOUSE_DOWN_TRACK,
    LIKE_CURR_TRACK
} from "./actionTypes"




export const handleLikeCurrentTrack = ( newValue ) => ({
    type: LIKE_CURR_TRACK,
    payload: { 
        newValue
    }
});

export const handleLikeTrack = ( newValue ) => ({
    type: LIKE_TRACK,
    payload: { 
        newValue
    }
});

export const handleProgress = (changeState) => ({
    type: PROGRESS_TRACK,
    payload: { 
        changeState
    }
});

export const handleSeekMouseUp = () => ({
    type: SEEK_MOUSE_UP_TRACK,
})

export const handlePickPlayList = ( newValue ) => ({
    type: PICK_PLAYLIST,
    payload: { 
        newValue
     }
});

export const handleSkipTrack = ( newValue ) => ({
    type: SKIP_TRACK,
    payload: { 
        newValue
     }
});

export const handleSeekMouseDown = (ev) => ({
    type: SEEK_MOUSE_DOWN_TRACK,
});

export const handleSeekChange = (ev, newValue) => ({
    type: SEEK_CHANGE_TRACK,
    payload: { 
       newValue
    }
});

export const handlePlayPause = (play = false) => ({
    type: PLAY_PAUSE_TRACK,
    payload: { 
        play
    } 
});

export const handleMuted = () => ({
    type: MUTED_TRACK
});

export const handleLoop = () => ({
    type: LOOP_TRACK
});

export const handleVolumeChange = (ev, newValue) => ({
    type: VOLUME_CHANGE_TRACK,
    payload: { 
       newValue
    }
});