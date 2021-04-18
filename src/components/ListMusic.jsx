import React from 'react'
import { ListItemText, ListItem, IconButton, Avatar } from '@material-ui/core/';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'
import { handleSkipTrack, handlePlayPause } from '../redux/action'


function ListMusic({ handleSkipTrack, playerState, handlePlayPause}) {
	const {   
        currentSongIndex,
		currentPlayList,
		infoPlayList,
    } = playerState;

	const PickSong = (index) => {
        if(currentSongIndex === index) {
            handlePlayPause()
        } else {
            handleSkipTrack(index)
			handlePlayPause(true)
        }
    } 

	const menuMore = (ev) => {
		ev.stopPropagation();
		console.log("kek")
	}




    return (
		<div className="c-list-music">
			<div className="c-list-music__header">
				<span className="c-list-music__disc">
					Cейчас играет
				</span>
				<p className="c-list-music__title">Плейлист "{infoPlayList.title}"</p>
			</div>

			{ 
				currentPlayList.map((item, index) => {
					return (
						<ListItem 
							className={item === currentPlayList[currentSongIndex] ? 'c-list-music__item active' : 'c-list-music__item ' }
							onClick={()=> PickSong(index)}  button key={index}>
							<Avatar className="c-list-music__img" variant="square" src={item.img_src} alt="img"/>
							
							<ListItemText className="c-list-music__text" primary={item.title} secondary={item.artist} />
				
							<IconButton onClick={(ev) => menuMore(ev)} className="c-list-music__btn btn-more" arial-label="reqind">
								<MoreVertIcon className="c-list-music__icon icon" fontSize="inherit"/>
							</IconButton>
						</ListItem>
					)
				})
            }
        </div>
    );
}

const mapStateToProps = (store) => {
    const { playList } = store;
    const { playerState } = store;
    return {
        playerState: playerState,
    };
};

export default connect(
	mapStateToProps, { 
		handleSkipTrack, 
		handlePlayPause 
	}
)(ListMusic);

