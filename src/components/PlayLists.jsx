import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ListItemText, ListItem, IconButton, Avatar, TextField, Button } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {  handlePickPlayList, handleAddPlayList, } from "../redux/action";


const PlayLists = ({ propsPlayList, handlePickPlayList, handleAddPlayList,}) => {

	const menuMore = (ev) => {
		ev.stopPropagation();
		console.log("kek")
	}

	const [open, setOpen] = React.useState(false);
	const [inputState, setInputState] = React.useState(false)

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);


	function addPlayList() {
		setOpen(false);
		handleAddPlayList(inputState)
		setInputState('')
	}

	return (
		<div className="c-play-list">
			<div className="c-play-list__header">
				<p className="c-play-list__title">Плейлисты</p>
				
				<IconButton onClick={handleOpen} className="c-play-list__btn btn-more" arial-label="reqind">
					<AddIcon className="c-play-list__icon icon" fontSize="inherit"/>
				</IconButton>
				{/* <List onClick={() => handleAddPlayList('newPlayList')} > */}
               
			</div>

            { 
				propsPlayList.map((item, index) => {
					return (	
						<Link to="/list-music">
							<ListItem className="c-play-list__item" onClick={() => handlePickPlayList(item)}  button key={index}>
								<Avatar className="c-play-list__img" variant="square" src={item.img_src} alt="img"/>
						
								<ListItemText className="c-play-list__text" primary={item.title} secondary={`${item.tracks.length} треков`} />
					
								<IconButton onClick={(ev) => menuMore(ev)} className="c-play-list__btn btn-more" arial-label="reqind">
									<MoreVertIcon className="c-play-list__icon icon" fontSize="inherit"/>
								</IconButton>
							</ListItem>
						</Link>
					)
				})
            }
		   <div>
	
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className="c-play-list__modal"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className="c-play-list__modal-body">
						<h2 className="c-play-list__modal-title" id="transition-modal-title">Новый плейлист</h2>
						<TextField
							onChange={(ev) => setInputState(ev.target.value)}
							id="standard-full-width"
							className="c-play-list__modal-input"
						
							placeholder="Придумайте название"
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
						/>

						<Button onClick={() => handleClose()} className="c-play-list__modal-btn" >Отменить</Button>
						<Button onClick={() => addPlayList()} className="c-play-list__modal-btn">Сохранить</Button>
					</div>
				</Fade>
			</Modal>
			</div>
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
    mapStateToProps, { handlePickPlayList , handleAddPlayList,}
)(PlayLists);
