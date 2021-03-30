import React, { useState, useRef, useEffect, useContext, makeStyles } from 'react'
import ReactPlayer from 'react-player'

import { Context } from "./Context";

// material ui
import { Toolbar, AppBar, Typography } from '@material-ui/core';

// component
import PlayerControls from './PlayerControls'
import PlayerInfoMusic from  './PlayerInfoMusic'
import All_song from './songs'


const format = (seconds) => {
    if (isNaN(seconds)) {
      return `00:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
};


function Player() {
    

    const { currentSongIndex, setCurrentSongIndex, page } = useContext(Context);
    const { nextSongIndex, setNextSongIndex } = useContext(Context);

    //METOD PLAYER
    const { handleFovorite, handlePlayPause, handleMuted, handleLoop, handleVolumeChange, handleProgress, handleSeekChange, handleSeekMouseDown, SkipSong, playerState, setPlayerState, songs } = useContext(Context);

    const playerRef = useRef(null);

    const handleSeekMouseUp = (ev, newValue) => {
        setPlayerState({ ...playerState, seeking: false });
        playerRef.current.seekTo(newValue / 100, "fraction");
    };

    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00';
    const duration = playerRef.current ? playerRef.current.getDuration() : '00:00';

    const elapsedTime = format(currentTime)
    const totalDuration = format(duration)


    const playerHidden = ['c-player',];
    !page && playerHidden.push('hidden');

    return (

        <div className={playerHidden.join(' ')}>
            <ReactPlayer
                width="0"
                height="0"
                url={songs[currentSongIndex].src}
                ref={playerRef}    
                playing={playerState.playing}
                muted={playerState.muted}
                volume={playerState.volume}
                played={playerState.played * 100}
                onProgress={handleProgress}
                onEnded={() => SkipSong()}
                loop={playerState.loop}
            />
            <PlayerInfoMusic song={songs[currentSongIndex]}/>
            <PlayerControls 
                playerState={playerState} 
                onPlayPause={handlePlayPause} 
                onMuted={handleMuted}   
                played={playerState.played}
                onVolumeChange={handleVolumeChange}
                onSeek={handleSeekChange}
                onSeekMouseDown={handleSeekMouseDown}
                onSeekMouseUp={handleSeekMouseUp}
                elapsedTime={elapsedTime}
                totalDuration={totalDuration}
                onLoop={handleLoop}
                SkipSong={SkipSong}

                songfavorite={songs[currentSongIndex].favorite}
                onFovorite={handleFovorite}
            />
        </div>		
    );
}

export default Player;


