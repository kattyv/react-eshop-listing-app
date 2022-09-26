import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import storeLogo from '../assets/brand/logo.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Header: FC = () => {

  return (
    <AppBar 
      position='fixed'
      color="default" 
      elevation={2}
    >
      <Toolbar component={ Container }>
        <img src={ storeLogo } alt="logo" style={{ width: '40px', marginRight: '5px' }} />
        <Typography variant='h6' noWrap sx={{ flexGrow: 1 }}>TOUCAN Store</Typography>

        <nav>
          <ul>
            <li>
              <Button 
              component={ NavLink } to='/'
              variant='text'
              color='inherit'
              sx={{ my: 1, mx: 1.5 }}
              >
                Home
              </Button>
            </li>

            <li>
              <Button 
              component={ NavLink } to='/store'
              variant='text'
              color='inherit'
              sx={{ my: 1, mx: 1.5 }}
              >
                Store
              </Button>
            </li>
          </ul>  
        </nav>
      </Toolbar>
    </AppBar>  
  )
}