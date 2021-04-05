import React, { useContext } from 'react'

import { BrowserRouter as Router, Link } from "react-router-dom";

// material ui
import {  BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { Context } from "./Context";

import HomeIcon from '@material-ui/icons/Home';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function BottomNav() {
    const { setPage } = useContext(Context);

    return (
        <BottomNavigation className="с-bottom-nav">
            <Link className="с-bottom-nav__link" onClick={() => setPage(true)} to="/">
                <BottomNavigationAction className="с-bottom-nav__btn" to="/"  label="Плеер" value="recents" icon={<HomeIcon className="с-bottom-nav__icon icon"/>} />
            </Link>
            <Link className="с-bottom-nav__link" onClick={() => setPage(false)} to="/list-music">
                <BottomNavigationAction className="с-bottom-nav__btn" to="/list-music" label="Музыка" value="favorites" icon={<QueueMusicIcon className="с-bottom-nav__icon icon"/>} />
            </Link>
            <Link className="с-bottom-nav__link" onClick={() => setPage(false)} to="/play-list">  
                <BottomNavigationAction className="с-bottom-nav__btn" to="/play-list" label="Плейлисты" value="playlist" icon={<FolderOpenIcon className="с-bottom-nav__icon icon"/>} />
            </Link>
        </BottomNavigation>
    );
}

export default BottomNav;
