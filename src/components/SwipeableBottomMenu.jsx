import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import AddIcon from '@material-ui/icons/Add';

import { Context } from "./context/Context";

import { connect } from 'react-redux';

import { 
    handleAddPlayList
} from "../redux/action";


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function SwipeableBottomMenu({handleAddPlayList}) {
    const classes = useStyles();
    const { stateBottomMenu, setStateBottomMenu, toggleDrawer } = useContext(Context);




    const list = () => (
        <div
            className={clsx(classes.list,classes.fullList)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List onClick={() => handleAddPlayList('newPlayList')} >
                <ListItem button key={'text'}>
                <ListItemIcon> 
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary={'text'} />
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem button key={2}>
                <ListItemIcon>
                    <MailIcon />
                    </ListItemIcon>
                <ListItemText primary={'Trash'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment key={"bottom"}>
                {/* <Button onClick={toggleDrawer(true)}>{"bottom"}</Button> */}
                <SwipeableDrawer
                    className="swipeable-area"
                    anchor={"bottom"}
                    open={stateBottomMenu}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list("bottom")}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

const mapStateToProps = (store) => {
    const { playList } = store;
    const { playerState } = store;
    return {
        playerState: playerState,
        playList: playList,
    };
};

export default connect(
    mapStateToProps, 
    { 
        handleAddPlayList,
    }
)(SwipeableBottomMenu);