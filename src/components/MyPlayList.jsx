import React, { useContext } from 'react'
import { ListItemText, ListItem, IconButton, Avatar } from '@material-ui/core/';
import { Context } from "./Context";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { BrowserRouter as Router, Link } from "react-router-dom";

function MyPlayList() {
    const { playList, PickPlayList } = useContext(Context);
	
	const playListArr = [];

	for(let key in playList) {
		const item = playList[key];
		playListArr.push(item);
	}

    return (
        <div className="c-play-list">
			<div className="c-play-list__header">
				<p className="c-play-list__title">Плейлисты</p>
			</div>

            { 
				playListArr.map((item, index) => {
					return (	
						<Link to="/list-music">
							<ListItem className="c-play-list__item" onClick={() => PickPlayList(item.tracks)}  button key={index}>
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
    );
}

export default MyPlayList;
