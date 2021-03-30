import React, { useContext } from 'react'

import { ListItemText, ListItem, makeStyles, IconButton, Avatar } from '@material-ui/core/';
import { Context } from "./Context";

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	list: {
		color: '#fff',
	},
}));

function ItemListMusic({index, style, item}) {
    const { PickSong } = useContext(Context);
	const classes = useStyles();

	return (
		<ListItem className={classes.list} onClick={()=> PickSong(index)} button key={index} style={style}>
			<Avatar variant="square" className="" src={item.img_src} alt="img"/>
			
			<ListItemText primary={item.title} secondary={item.artist} />

			<IconButton arial-label="reqind">
				<MoreVertIcon fontSize="inherit"/>
			</IconButton>
		</ListItem>
	);
}

export default ItemListMusic;
