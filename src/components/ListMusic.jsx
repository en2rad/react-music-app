import React from 'react'
import { ListItemText, ListItem, makeStyles, IconButton, Avatar } from '@material-ui/core/';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'
import { handleSkipTrack, handlePlayPause } from '../redux/action'


function ListMusic({playList, handleSkipTrack, playerState, handlePlayPause}) {
	const {   
        currentSongIndex,
    } = playerState;

	const PickSong = (index) => {
        if(currentSongIndex === index) {
            handlePlayPause()
        } else {
            handleSkipTrack(index)
			handlePlayPause(true)
        }
    } 

    return (
		<div className="c-list-music">
			<div className="c-list-music__header">
				<span className="c-list-music__disc">
					Cейчас играет
				</span>
				<p className="c-list-music__title">Плейлист "Мне нравится"</p>
			</div>

			{ 
				playList.map((item, index) => {
					return (
						<ListItem onClick={()=> PickSong(index)} className="c-list-music__item"  button key={index}>
							<Avatar className="c-list-music__img" variant="square" src={item.img_src} alt="img"/>
							
							<ListItemText className="c-list-music__text" primary={item.title} secondary={item.artist} />
				
							<IconButton className="c-list-music__btn btn-more" arial-label="reqind">
								<MoreVertIcon className="c-list-music__icon icon" fontSize="inherit"/>
							</IconButton>
						</ListItem>
					)
				})
            }
        </div>
    );
}

export default connect(
	null, { handleSkipTrack, handlePlayPause }
)(ListMusic);
