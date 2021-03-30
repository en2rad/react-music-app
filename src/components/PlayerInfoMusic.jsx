import React from 'react';
import { CardMedia, makeStyles, CardContent, Typography, Card, IconButton } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
		flexDirection: 'column',
		boxShadow: 'none',
		background: 'none',
		borderRadius: '0',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	content: {
		padding: '15px 0',
	},
	img: {
		width: '100%',
		maxWidth: '200px',
		margin: '0 auto',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		padding: '15px 0',
		color: '#fff',
	},
}));

function PlayerInfoMusic({song}) {
    const classes = useStyles();

    return (	
		<>
			<Card className="player-info {classes.root}">
				<img className={classes.img} src={song.img_src} title="img"/>	
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h7" variant="h7" style={{color: '#fff'}}>
							{song.title}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" style={{color: '#fff', opacity: '0.7'}}>
							{song.artist}
						</Typography>
					</CardContent>
					<IconButton className={classes.playIcon} arial-label="reqind" >
						<MoreVertIcon fontSize="inherit"/>
					</IconButton>
				</div>
			</Card>
		</>
    );
}

export default PlayerInfoMusic;
