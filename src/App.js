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
import BottomMenu from './components/BottomMenu'

import { handlePickPlayList } from './redux/action'

import { connect } from 'react-redux';


function App({playerState, playList, handlePickPlayList}) {
	useEffect(() => {
        handlePickPlayList(playList.allSongs.tracks)
    },[])

    const {   
        currentPlayList,
    } = playerState;


	return (
		<div class="background">
			<div class="iphone">
				<div class="screen">
					<Router>
						<div className="wrapper">
							<Player /> 
							<Switch>
								<Route exact path="/">
									<BottomMenu/>
								</Route>
								<Route path="/list-music">
									<ListMusic playerState={playerState} playList={currentPlayList} />
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
    }
)(App);