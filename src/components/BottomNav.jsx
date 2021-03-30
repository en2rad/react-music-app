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
        <BottomNavigation className="bottom-nav">
            <Link onClick={() => setPage(true)} to="/">
                <BottomNavigationAction to="/"  label="Recents" value="recents" icon={<HomeIcon />} />
            </Link>
            <Link onClick={() => setPage(false)} to="/about">
                <BottomNavigationAction to="/about" label="Favorites" value="favorites" icon={<QueueMusicIcon />} />
            </Link>
            <Link onClick={() => setPage(false)} to="/dashboard">  
                <BottomNavigationAction to="/dashboard" label="Nearby" value="nearby" icon={<FolderOpenIcon />} />
            </Link>
        </BottomNavigation>
    );
}

export default BottomNav;
