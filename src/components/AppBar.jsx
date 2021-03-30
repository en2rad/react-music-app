// material ui
import { Toolbar, AppBar, Typography } from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';

function MyAppBar() {
  return (
    <>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Music Player</Typography>
            </Toolbar>	
        </AppBar>
        <Toolbar />	
    </>		
  );
}

export default MyAppBar;
