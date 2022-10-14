import * as React from 'react';
import './Header.css'

import { styled, alpha } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = (props) => {
  // const classes = useStyles();
  const theme = {
    spacing: 8
  }
  const counter = 9;

  return (
    <>
    <AppBar sx={{
        backgroundColor: 'black',
        width: '100vw',
        padding: '0px',
        overflow: 'hidden',
        position: 'sticky'
    }}>
      <ToolBar sx={{
        width: '95vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        padding: '2px 5px'
        }}>

        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/">
          <div sx={{
            order: 1,
            mr: 1
            }}>
            <Typography>
              amazon
            </Typography>
          </div>
        </Link>

        <div sx={{
          order: 2,
          flexGrow: 2,
          width: '80%'
          }}>
          <InputBase className='inputbase'
          sx={{ ml: 0, flex: 1, bgcolor: 'white', width: '75%'}}
          placeholder="Search amazon"
          inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" 
          sx={{ p: '6px', bgcolor: 'orange', mx: '5px', borderRadius: 1}}
           aria-label="search">
            <SearchIcon color='black' />
          </IconButton>
        </div>

        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/login">
          <div sx={{order: 3}}>
            <Typography variant="caption" display="span" gutterBottom>
              Hello dhandhariaamrit@gmail.com
            </Typography>
            <Typography variant="h6" display="span" gutterBottom>
              Sign In
            </Typography>
          </div>
        </Link>

        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/returns">
        <div sx={{order: 4}}>
          <Typography variant="caption" display="span" gutterBottom>
            Returns
          </Typography>
          <Typography variant="h6" display="span" gutterBottom>
            &amp; orders
          </Typography>
        </div>
        </Link>

        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/prime">
          <div sx={{order: 5}}>
            <Typography variant="caption" display="span" gutterBottom>
              Your
            </Typography>
            <Typography variant="h6" display="span" gutterBottom>
              Prime
            </Typography>
          </div>
        </Link>

        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/cart">
          <div sx={{order: 6}}>
            <ShoppingBasketIcon />
            {counter}
          </div>
        </Link>

      </ToolBar>
    </AppBar>
    </>
  );
}

export default Header;