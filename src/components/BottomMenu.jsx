import React from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// material ui
import {  Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText,  makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
    };

    const list = () => (
        <div
            className={clsx(classes.list,classes.fullList)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button key={'text'}>
                <ListItemIcon> 
                    <InboxIcon />
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

    const openMenu = ['bot-menu__wrap',];
    state && openMenu.push('open');

    return (
        <div>
            <>
                <Button onClick={toggleDrawer(true)}>bottom</Button>
                <div className={openMenu.join(' ')}  anchor={'bottom'} open={state} onClose={toggleDrawer(false)}>
                    <List className="bot-menu" anchor={'bottom'} open={state} onClose={toggleDrawer(false)}>
                        {list('bottom')}
                    </List>
                </div>
                <Drawer className="kekkek" anchor={'bottom'} open={state} onClose={toggleDrawer(false)}>
                    {list('bottom')}
                </Drawer>
            </>   
        </div>
    );
}
