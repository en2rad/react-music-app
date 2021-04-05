import './App.css';
import React, {useContext } from 'react'
import { Context} from './components/Context'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

// compnent
import Player from './components/Player'
import BottomNav from './components/BottomNav'
import ListMusic from './components/ListMusic'
import MyPlayList from './components/MyPlayList'

function App() {
	const { songs } = useContext(Context);

	return (
		<div class="background">
			<div class="iphone">
				<div class="screen">
					<Router>
						<div className="wrapper">
							<Player />
							<Switch>
								<Route exact path="/"></Route>
								<Route path="/list-music">
									<ListMusic playList={songs} />
								</Route>
								<Route path="/play-list">
									<MyPlayList  />
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

export default App;
