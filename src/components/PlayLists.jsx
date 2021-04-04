import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ListItemText, ListItem, IconButton, Avatar } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {  handlePickPlayList } from "../redux/action";

const PlayLists = ({ propsPlayList, handlePickPlayList }) => {
	
	return (
		<div className="c-play-list">
			<div className="c-play-list__header">
				<p className="c-play-list__title">Плейлисты</p>
			</div>

            { 
				propsPlayList.map((item, index) => {
					return (	
						<Link to="/list-music">
							<ListItem className="c-play-list__item" onClick={() => handlePickPlayList(item.tracks)}  button key={index}>
								<Avatar className="c-play-list__img" variant="square" src={item.img_src} alt="img"/>
						
								<ListItemText className="c-play-list__text" primary={item.title} secondary={`${item.tracks.length} треков`} />
					
								<IconButton className="c-play-list__btn btn-more" arial-label="reqind">
									<MoreVertIcon className="c-play-list__icon icon" fontSize="inherit"/>
								</IconButton>
							</ListItem>
						</Link>
					)
				})
            }

        </div>
	)
}

const mapStateToProps = (store) => {
    const { playList } = store;

	const propsPlayList = [];

	for(let key in playList) {
		const item = playList[key];
		propsPlayList.push(item);
	}

    return {
        propsPlayList: propsPlayList,
    };
};

export default connect(
    mapStateToProps, { handlePickPlayList }
)(PlayLists);
