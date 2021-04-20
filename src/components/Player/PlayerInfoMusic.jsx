import React, {useEffect, useContext, useState} from 'react';
import { CardContent, Typography, Card, IconButton } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import FastAverageColor from 'fast-average-color'
import { Context } from "../context/Context";


import { makeStyles } from '@material-ui/core/styles';
import SwiperImg from './SwiperImg'
import SwiperNew from './SwiperNew'

function PlayerInfoMusic({song, onSkipTrack}) {
	const { stateBottomMenu, setStateBottomMenu, toggleDrawer } = useContext(Context);
	

	
    return (	
		<>
			<Card className="c-player-info" >
				<div className="neww">
				<SwiperNew onSkipTrack={onSkipTrack} src={song.img_src}/>
				</div>
			
				{/* <img className="c-player-info__img" src={song.img_src} title="img"/>	 */}
				<div className="c-player-info__body">
					<CardContent className="c-player-info__text">
						<Typography className="c-player-info__title" component="h7" variant="h7" style={{color: '#fff'}}>
							{song.title}
						</Typography>
						<Typography className="c-player-info__artist" variant="subtitle1" color="textSecondary" style={{color: '#fff', opacity: '0.7'}}>
							{song.artist}
						</Typography>
					</CardContent>
					<IconButton  onClick={toggleDrawer(true)} className="c-player-info__btn btn-more" arial-label="reqind" >
						<MoreVertIcon className="c-player-info__icon icon" fontSize="inherit"/>
					</IconButton>
				</div>
			</Card>
		</>
    );
}

export default PlayerInfoMusic;
