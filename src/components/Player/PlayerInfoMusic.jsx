import React, {useEffect} from 'react';
import { CardContent, Typography, Card, IconButton } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import FastAverageColor from 'fast-average-color'

import getAverageColor from 'get-average-color'

import { makeStyles } from '@material-ui/core/styles';

import Async from 'react-promise'

const bg = 'red'
const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
  bg: {
	  background: bg 
  }
});




// const ExampleWithAsync = props => (
//   <Async promise={prom} then={val => <div>{val}</div>} />
// )


function PlayerInfoMusic({song}) {
	const classes = useStyles();

	getAverageColor(song.img_src).then(rgb => console.log(`background: rgb(${rgb.r} ${rgb.g} ${rgb.b})`)) 
	
	// useEffect(() => {
	// 	getAverageColor(song.img_src).then(rgb => bg = (`(${rgb.r} ${rgb.g} ${rgb.b})`)) 
	// }, []);
	
	// const playerinfo = ['c-player-info',];
    // !page && playerHidden.push('hidden');

    return (	
		<>
			<div className={classes.bg}>asd</div>
			<Card className="c-player-info" >
				<img className="c-player-info__img" src={song.img_src} title="img"/>	
				<div className="c-player-info__body">
					<CardContent className="c-player-info__text">
						<Typography className="c-player-info__title" component="h7" variant="h7" style={{color: '#fff'}}>
							{song.title}
						</Typography>
						<Typography className="c-player-info__artist" variant="subtitle1" color="textSecondary" style={{color: '#fff', opacity: '0.7'}}>
							{song.artist}
						</Typography>
					</CardContent>
					<IconButton className="c-player-info__btn btn-more" arial-label="reqind" >
						<MoreVertIcon className="c-player-info__icon icon" fontSize="inherit"/>
					</IconButton>
				</div>
			</Card>
		</>
    );
}

export default PlayerInfoMusic;
