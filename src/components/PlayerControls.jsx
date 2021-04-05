import React, { useContext} from 'react'

// material ui
import { IconButton, makeStyles, Slider, withStyles, Tooltip, Typography } from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Context } from "./Context";

const MySlider = withStyles({
    root: {
      color: '#fff',
      height: 2,
      padding: '10px 0',
    },
    thumb: {
    
      backgroundColor: '#fff',
      boxShadow: '0 3px 1px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 13%), 0 0 0 1px rgb(0 0 0 / 2%)',
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

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}


const useStyles = makeStyles({
    iconStyleBig: {
        fontSize: 50,
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
    sliderWrap: {
        display: 'flex',
        flexDirection: 'column'
    },
    time: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
    },
})

function PlayerControls( { 
    playerState, 
    onPlayPause, 
    onMuted, 
    onLoop,
    onVolumeChange,played, 
    onSeek, 
    onSeekMouseDown, 
    onSeekMouseUp, 
    elapsedTime, 
    totalDuration, 
    SkipSong, 
    onFovorite, 
    songfavorite} ) 
    {
    
    const { songs, currentSongIndex } = useContext(Context);

        console.log('check')
    const classes = useStyles();


    return (
        <>  
            <div className={classes.sliderWrap}>
                <MySlider
                    min={0}
                    max={100}
                    value={played * 100}    
                    ValueLabelComponent={(props) => (
                        <ValueLabelComponent {...props} value={elapsedTime} />
                    )}
                    onChange={onSeek}   
                    onMouseDown={onSeekMouseDown}
                    onChangeCommitted={onSeekMouseUp}          
                />
                <time className={classes.time}>
                    <Typography
                        variant="body1"
                        style={{ }}
                    >
                        {elapsedTime}
                    </Typography>
                    <Typography
                        variant="body1"
                        style={{  }}
                    >
                        {totalDuration}
                    </Typography>
                </time>
            </div>   
            <div className={classes.controls}>
                <IconButton onClick={()=> onLoop()} className={classes.iconStyle} arial-label="reqind">
                    { 
                        playerState.loop ?
                            <RepeatOneIcon fontSize="inherit"/> :
                            <RepeatIcon fontSize="inherit"/>
                    }
                </IconButton>

                <IconButton onClick={() => SkipSong(false)} className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                    <SkipPreviousIcon fontSize="inherit"/>
                </IconButton>
            
                <IconButton onClick={() => onPlayPause()}  className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                    { 
                        playerState.playing ?  
                            <PauseCircleOutlineIcon 
                                fontSize="inherit"
                            /> :
                            <PlayCircleOutlineIcon 
                                fontSize="inherit"                   
                            />
                    }
                </IconButton>

                <IconButton onClick={() => SkipSong()}  className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                    <SkipNextIcon fontSize="inherit"/>
                </IconButton>
                <IconButton onClick={() => onFovorite()} className={classes.iconStyle} arial-label="reqind">
                    { 
                        songs[currentSongIndex].favorite ?  
                        <FavoriteIcon fontSize="inherit"/>: 
                        <FavoriteBorderIcon fontSize="inherit"/>            
                    }
                </IconButton>
                
            </div>    
        
            <div className="volume-wrap">
                <IconButton onClick={()=> onMuted()} className={classes.iconStyle} arial-label="reqind">
                    { 
                        playerState.muted ?
                            <VolumeOffIcon fontSize="inherit"/> :
                            <VolumeUp fontSize="inherit"/>
                    }
                </IconButton>

                <Slider 
                    min={0}
                    max={100}
                    defaultValue={100}
                    onChange={onVolumeChange}
                />
           </div>
        </>		
    );
}

export default PlayerControls;



