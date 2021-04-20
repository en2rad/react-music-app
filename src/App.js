import './App.css';
import React, { useEffect } from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

// compnent
import PlayLists from './components/PlayLists'
import ListMusic from './components/ListMusic'
import BottomNav from './components/BottomNav'
import Player from './components/Player/Player'
import SwipeableBottomMenu from './components/SwipeableBottomMenu'
import MiniPlayer from './components/Player/MiniPlayer'


import { 
	handlePickPlayList,
	handlePrevTrackIndex,
	handleNextTrackIndex,
} from './redux/action'

import { connect } from 'react-redux';


function App({playerState, playList, handlePickPlayList, handlePrevTrackIndex, handleNextTrackIndex,}) {
	useEffect(() => {
        handlePickPlayList(playList.allSongs)
    },[])

    const {   
		currentPlayList,
		currentSongIndex,
		prevSongIndex,
		nextSongIndex,
    } = playerState;

	useEffect(() => {
		currentSongIndex + 1 > currentPlayList.length - 1 && handleNextTrackIndex(currentSongIndex + 1);
		currentSongIndex - 1 > 0 && handlePrevTrackIndex(currentSongIndex - 1);
	}, [currentSongIndex]);



	return (
		<>
		<div class="background">
			<div class="iphone">
				<div class="screen">
					<Router>
						<div className="wrapper">
					
							<Player /> 
							<Switch>
								<Route exact path="/">
									<SwipeableBottomMenu/>
								</Route>
								<Route path="/list-music">
									<ListMusic/>
								</Route>
								<Route path="/play-list">
									<PlayLists />
								</Route>
							</Switch>					
						</div>
						
						<BottomNav/>
					</Router>
				</div>
			</div>
		</div>
		<div className="asd">
		
			
			<MiniPlayer/>
		</div>
		</>
  	);
}

const mapStateToProps = (store) => {
    const { playerState } = store;
	const { playList } = store;
    return {
        playerState: playerState,
		playList: playList,
    };
};

export default connect(
    mapStateToProps,
    { 
		handlePickPlayList,
		handlePrevTrackIndex,
		handleNextTrackIndex,
    }
)(App);