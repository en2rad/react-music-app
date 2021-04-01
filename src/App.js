import './App.css';
import React, { useState, useContext } from 'react'

import { Context} from './components/Context'

import {
	TransitionGroup,
	CSSTransition
  } from "react-transition-group";
  import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useLocation,
	useParams
  } from "react-router-dom";

// material ui
import { Toolbar, AppBar, Typography, BottomNavigation, BottomNavigationAction, IconButton } from '@material-ui/core';


// compnent
import Player from './components/Player'
import MyAppBar from './components/AppBar'
import BottomNav from './components/BottomNav'
import ListMusic from './components/ListMusic'
import MyPlayList from './components/MyPlayList'

function App() {
	const { page, songs } = useContext(Context);

	return (
		<div class="background">
			<div class="iphone">
				<div class="screen">
					<Router>
						<div className="wrapper">
							{/* <MyAppBar/> */}
							<Player />
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route path="/about">
									<ListMusic playList={songs} />
								</Route>
								<Route path="/dashboard">
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


function Home() {
	return (
	  <div>
		
			
	  </div>
	);
  }
  

  
  function Dashboard() {
	return (
	  <div>
		<h2>Dashboard</h2>
	  </div>
	);
  }

export default App;
