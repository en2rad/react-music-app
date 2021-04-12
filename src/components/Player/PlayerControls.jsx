import React from 'react'

// material ui
import {
    IconButton, 
    makeStyles, 
    Slider, 
    withStyles, 
    Tooltip, 
    Typography, 

    Button,
    Popover,
} from '@material-ui/core';

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


import { connect } from 'react-redux';
import { handleLikeCurrentTrack, handleLikeTrack, handleSeekMouseDown, handlePlayPause, handleVolumeChange, handleMuted, handleLoop } from "../../redux/action";

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



function PlayerControls( {handleLikeCurrentTrack, currentPlayList, currentSongIndex, onSeek, handleLikeTrack, onSkipTrack, onSeekMouseUp, handleSeekMouseDown, elapsedTime, totalDuration, handlePlayPause, playerState, handleVolumeChange, handleMuted, handleLoop} ) 
    {
    
    // const { songs, currentSongIndex } = useContext(Context);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    function Like(newValue) {
        handleLikeTrack(newValue)
        handleLikeCurrentTrack(newValue)
        
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

    return (
        <>  
            <div className={classes.sliderWrap}>
                <MySlider
                    min={0}
                    max={100}
                    value={playerState.played * 100}    
                    ValueLabelComponent={(props) => (
                        <ValueLabelComponent {...props} value={elapsedTime} />
                    )}
                    onChange={onSeek}   
                    onMouseDown={handleSeekMouseDown}
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
                <IconButton onClick={()=> handleLoop()} className={classes.iconStyle} arial-label="reqind">
                    { 
                        playerState.loop ?
                            <RepeatOneIcon fontSize="inherit"/> :
                            <RepeatIcon fontSize="inherit"/>
                    }
                </IconButton>
        
                <IconButton onClick={() => onSkipTrack(false)} className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                    <SkipPreviousIcon fontSize="inherit"/>
                </IconButton>
            
                <IconButton onClick={() => handlePlayPause()}  className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
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
                
                <IconButton onClick={() => onSkipTrack()}  className={classes.iconStyle, classes.iconStyleBig} arial-label="reqind">
                    <SkipNextIcon fontSize="inherit"/>
                </IconButton>

                {/* onClick={() => handleLikeTrack(currentPlayList[currentSongIndex], currentSongIndex)} */}
                <IconButton onClick={() => Like(currentPlayList[currentSongIndex])} className={classes.iconStyle} arial-label="reqind">
                    { 
                        currentPlayList[currentSongIndex].favorite ?   
                            <FavoriteIcon fontSize="inherit"/>:
                            <FavoriteBorderIcon fontSize="inherit"/>             
                    }
                </IconButton>
                
            </div>    
        

            {/* <div className="volume-wrap">       
                <IconButton onClick={()=>  handleMuted()} className={classes.iconStyle} arial-label="reqind">
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
                    onChange={handleVolumeChange}
                />

                <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                    Open Popover
                </Button>
                
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                </Popover>
            </div> */}
        </>		
    );
}


const mapStateToProps = (store) => {
    const { playerState } = store;
    return {
        playerState: playerState,
    };
};

export default connect(
    mapStateToProps,
    { 
        handlePlayPause,
        handleVolumeChange,
        handleMuted,
        handleLoop,
        handleSeekMouseDown,
        handleLikeTrack,

        handleLikeCurrentTrack,
    }
)(PlayerControls);



