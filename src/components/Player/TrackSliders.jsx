import React from 'react'

import { connect } from 'react-redux';
import { handleLikeCurrentTrack, handleLikeTrack, handleSeekMouseDown, handlePlayPause, handleVolumeChange, handleMuted, handleLoop } from "../../redux/action";


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

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
}


function TrackSliders({playerState, handleSeekMouseDown, onSeekMouseUp, onSeek, elapsedTime, totalDuration}) {
    const classes = useStyles();

    console.log('cheack2')

    return (
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
    );
};

// export default TrackSliders


const mapStateToProps = (store) => {
    const { playerState } = store;
    return {
        playerState: playerState,
    };
};

export default connect(
    mapStateToProps,
    { 

    }
)(TrackSliders);
