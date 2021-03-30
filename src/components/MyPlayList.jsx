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
    const {  favoriteSong, setFavoriteSong, handleFovorite, PickSong } = useContext(Context);
	
    return (
        <div className={classes.root}>
            { 
				favoriteSong.map((fSong, index) => {
					return (
						<ListItem onClick={()=> PickSong(index)} className={classes.list}  button key={index}>
							<Avatar variant="square" className="" src={fSong.img_src} alt="img"/>
							
							<ListItemText primary={fSong.title} secondary={fSong.artist} />
				
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
