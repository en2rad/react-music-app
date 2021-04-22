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



import MoreVertIcon from '@material-ui/icons/MoreVert';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { connect } from 'react-redux';
import { handlePlayPause, handleVolumeChange, handleMuted, handleLoop } from "../../redux/action";


const MySlider = withStyles({
    root: {
        color: '#fff',
        padding: 0,
        display: "block",
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
        height: 3.5,
    },
    rail: {
        height: 3.5,
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


const useStyles = makeStyles({
    iconStyleBig: {

         color: "#fff",
        padding: '0',
    },
    iconStyle: {
        color: "#fff",
        fontSize: 30,
        padding: '0',
        "&:hover": {
            
        }
    },
    text: { 
        padding: 5,
        textAlign: 'center',
        fontSize: 14
    },
    artist: {
        color: '#fff',
        opacity: 0.7,
        fontSize: 13,
    },
})



function MiniPlayer({ playerState, playList, handlePlayPause}) {
    const { stateBottomMenu, setStateBottomMenu, toggleDrawer } = useContext(Context);

    const {   
        currentPlayList,
        currentSongIndex,
        playing,
        played,
    } = playerState;
    
    const song = currentPlayList[currentSongIndex]
    const classes = useStyles();
    return (
        <>
        {
            song ?

            <div className="c-mini-player">  
               
                    <MySlider
                        min={0}
                        max={100}
                        value={played * 100}           
                    />
              
                <div className="c-mini-player__body">
                    {/* c-mini-player__btn btn-more */}
                    <IconButton  onClick={toggleDrawer(true)} className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind" >
                        <MoreVertIcon className="c-mini-player__icon icon" fontSize="inherit"/>
                    </IconButton>
            
                    <CardContent className={classes.text}>
                        
                            <Typography className={classes.title} component="h7" variant="h7" style={{color: '#fff'}}>
                                {
                                song.title.length < 30 ? 
                                    song.title :
                                    <marquee>{song.title}</marquee>
                                } 
                            </Typography>
                        
                        <Typography className={classes.artist} variant="subtitle1" color="textSecondary" >
                            {song.artist}
                        </Typography>
                    </CardContent>
                

                    <IconButton  onClick={() => handlePlayPause()}  className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                        { 
                            playing ?  
                                <PauseIcon 
                                    fontSize="inherit"
                                /> :
                                <PlayArrowIcon 
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



