import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { fragment } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNotDanClick = () => {
    setOpen(true);
  }

  const notDanClose = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpen(false)
  }

   const action = (
    <fragment>
      <Button color="secondary" size="small" onClick={notDanClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={notDanClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </fragment>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dan's Examples
          </Typography>
          <Button href="#" color="inherit">CPSC-1520</Button>
          <Button href="#" color="inherit">DMIT-2008</Button>
          <Button onClick={handleNotDanClick} color="inherit"><strong>Login</strong> (Dan Only)</Button>
          <Snackbar 
            open={open}
            autoHideDuration={6000}
            onClose={ notDanClose }
            message="you are not Dan"
            action={action}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
