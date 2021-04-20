import React, {useEffect, useContext, useState} from 'react';


// import FastAverageColor from 'fast-average-color'
import { Context } from "../context/Context";

// material ui
import {
    CardContent, 
    Typography, 
    IconButton, 
    makeStyles, 
    Slider, 
    withStyles, 
} from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { connect } from 'react-redux';
import { handlePlayPause, handleVolumeChange, handleMuted, handleLoop } from "../../redux/action";


const MySlider = withStyles({
    root: {
      color: '#fff',
      height: 2,
      padding: '10px 0',
    },
    thumb: {
        display: 'none',
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        background: '#ffdb4d',
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.3,
    },
    mark: {
        backgroundColor: 'red',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);



function MiniPlayer({ playerState, playList, handlePlayPause}) {
    const { stateBottomMenu, setStateBottomMenu, toggleDrawer } = useContext(Context);

    const {   
        currentPlayList,
        currentSongIndex,
        playing,
        played,
    } = playerState;
    
    const song = currentPlayList[currentSongIndex]

    return (
        <>
        {
            song ?

            <div className="c-mini-player">  
                <div className="c-mini-player__slider">
                    <MySlider
                        min={0}
                        max={100}
                        value={played * 100}           
                    />
                </div>
                <div className="c-mini-player__body">
                    <IconButton  onClick={toggleDrawer(true)} className="c-mini-player__btn btn-more" arial-label="reqind" >
                        <MoreVertIcon className="c-mini-player__icon icon" fontSize="inherit"/>
                    </IconButton>
            
                    <CardContent className="c-mini-player__text">
                        <Typography className="c-mini-player__title" component="h7" variant="h7" style={{color: '#fff'}}>
                            {song.title}
                        </Typography>
                        <Typography className="c-mini-player__artist" variant="subtitle1" color="textSecondary" style={{color: '#fff', opacity: '0.7'}}>
                            {song.artist}
                        </Typography>
                    </CardContent>
                

                    <IconButton onClick={() => handlePlayPause()}  className="c-mini-player__btn btn-more" arial-label="reqind">
                        { 
                            playing ?  
                                <PauseCircleOutlineIcon 
                                    fontSize="inherit"
                                /> :
                                <PlayCircleOutlineIcon 
                                    fontSize="inherit"                   
                                />
                        }
                    </IconButton>
                </div>
            </div>	
            : null
        }
       	</>
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
        handlePlayPause,
    }
)(MiniPlayer);



