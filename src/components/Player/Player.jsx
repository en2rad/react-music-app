import React, { useRef, useContext, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import { Context } from "../context/Context";

import getAverageColor from 'get-average-color'

import { 
    handlePickPlayList, 
    handleProgress, 
    handleSeekMouseUp, 
    handleSeekChange, 
    handleSkipTrack 
} from "../../redux/action";

// component
import PlayerControls from './PlayerControls'
import PlayerInfoMusic from  './PlayerInfoMusic'

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







function Player({playerState, handleSkipTrack, handleProgress, handleSeekMouseUp, handleSeekChange}) {

    const playerRef = useRef(null); 
    const {   
        currentPlayList,
        currentSongIndex,
        playing,
        muted,
        volume,
        played,
        loop,
        infoPlayList,
    } = playerState;

    const { page } = useContext(Context)

    const urlImg = currentPlayList[currentSongIndex] ? currentPlayList[currentSongIndex].img_src  : null

    const [colorBg,setColorBg] = useState('rgb(43 40 40)')
    useEffect(() => {
        getAverageColor( urlImg )
            .then( rgb => setColorBg(`rgb(${rgb.r} ${rgb.g} ${rgb.b})`) )
            .catch( setColorBg( 'rgb(43 40 40)'))
    }, [urlImg   ]);


    console.log(currentPlayList[currentSongIndex])
    // const SkipTrackIndex = (forwards) => {
    //     if (forwards) {
    //         let temp = currentSongIndex;
    //         temp++;

    //         if (temp > currentPlayList.length - 1) {
    //             temp = 0;
    //         }

    //         return temp;      
    //     } else {
    //         let temp = currentSongIndex;
    //         temp--;

    //         if (temp < 0) {
    //             temp = currentPlayList.length - 1;
    //         }

    //         return temp;  
    //     }
    // }

    const SkipTrackIndex = (forwards) => {
        if (forwards) {
            let temp = currentSongIndex + 1;
           
            let next = temp + 1;
            let prev = temp - 1;
    
            if (next > currentPlayList.length - 1) {
                next = 0;
            }
    
            if (prev < 0) {
                prev = currentPlayList.length - 1;
            }
    
            if (temp > currentPlayList.length - 1) {
                temp = 0;
            }
    
            return { temp, next, prev };      
        } else {
            let temp = currentSongIndex;
            let next = temp + 1;
            let prev = temp - 1;
            
            temp--;
    
            if (temp < 0) {
                temp = currentPlayList.length - 1;
            }
    
            if (prev < 0) {
                prev = currentPlayList.length - 1;
            }
    
            if (temp > currentPlayList.length - 1) {
                temp = 0;
            }
    
            return { temp, next, prev };       
        }
    }

    const SkipTrack = (forwards = true) => {
        handleSkipTrack(SkipTrackIndex(forwards))
    }

    const onSeekMouseUp = (ev, newValue) => {
        handleSeekMouseUp(ev, newValue)
        playerRef.current.seekTo(newValue / 100, "fraction");
    };

    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00';
    const duration = playerRef.current ? playerRef.current.getDuration() : '00:00';

    const elapsedTime = format(currentTime)
    const totalDuration = format(duration)

    const playerHidden = ['c-player',];
    !page && playerHidden.push('hidden');

    const urlSong = currentPlayList[currentSongIndex] ? currentPlayList[currentSongIndex].src : null
	
  

    return (
        <div style={{background: colorBg}} className={playerHidden.join(' ')}>
            {
				currentPlayList.length ? 
                <>
          
                    <ReactPlayer
                        width="0"
                        height="0"  
                        playing={playing}
                        url={ urlSong}
                        ref={playerRef}    
                        playing={playing}
                        muted={muted}
                        volume={volume}
                        played={played * 100}
                        onProgress={handleProgress}
                        onEnded={() => SkipTrack()}
                        loop={loop}
                        // onError={() => urlSong = null}
                    />
                    <PlayerInfoMusic onSkipTrack={SkipTrack} song={currentPlayList[currentSongIndex]}/>
                
                    <PlayerControls 
                     
                        onSkipTrack={SkipTrack}
                        onSeek={handleSeekChange}   
                        onSeekMouseUp={onSeekMouseUp}
                        elapsedTime={elapsedTime}
                        totalDuration={totalDuration}
                    />
                </>
                : <h1>pick song</h1>
            }
           
        </div>		
    );
}

const mapStateToProps = (store) => {
    const { playList } = store;
    const { playerState } = store;
    return {
        playerState: playerState,
        playList: playList,
    };
};

export default connect(
    mapStateToProps, 
    { 
        handleProgress, 
        handleSeekMouseUp, 
        handleSeekChange, 
        handleSkipTrack, 
        handlePickPlayList 
    }
)(Player);



