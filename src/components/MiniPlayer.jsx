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


let title = All_song[1].title

console.log(title)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow({index, style}) {
	const item = All_song[index]

	return (
		<ItemListMusic index={index} style={style} item={item}/>
	);
}

function ListMusic() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeList height={400} width={300} itemSize={46} itemCount={All_song.length}>
				{renderRow}
            </FixedSizeList>
        </div>
    );
}

export default ListMusic;
 