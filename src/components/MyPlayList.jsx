import React, { useState, useRef, useEffect, useContext } from 'react'
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
import { ListItemText, ListItem, makeStyles, IconButton, Avatar } from '@material-ui/core/';
import { FixedSizeList } from 'react-window';
import { Context } from "./Context";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import All_song from './songs'

import ItemListMusic from './ItemListMusic'




const useStyles = makeStyles((theme) => ({
	root: {
		overflowY: 'scroll',
		maxHeight: '512px'
	},

}));

function MyPlayList() {
    const classes = useStyles();
    const {  favoriteSong, setFavoriteSong, handleFovorite, PickSong, playList, setSongs,PickPlayList } = useContext(Context);
	
	const books = [];

	for(let key in playList) {
		const book = playList[key];
		books.push(book);
	}

    return (
        <div className={classes.root}>
            { 
				books.map((item, index) => {
					return (
						<ListItem onClick={() => PickPlayList(item.tracks)} className={classes.list}  button key={index}>
							<Avatar variant="square" className="" src={item.img_src} alt="img"/>
						

							<ListItemText primary={item.title} secondary={item.tracks.length} />
				
							<IconButton arial-label="reqind">
								<MoreVertIcon fontSize="inherit"/>
							</IconButton>
						</ListItem>
					)
				})
            }

        </div>
    );
}

export default MyPlayList;
