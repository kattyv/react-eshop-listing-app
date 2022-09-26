import React, { FC } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <Container maxWidth="lg">
        {/*
        <Typography variant="h6" align="center" gutterBottom>
            Toucon Store
          </Typography>
        */}
        
          <p>
            Made with {' '}
            <FavoriteIcon 
            color='error'
              sx={{ fontSize: 14 }} 
            /> 
            {' '}
            by <a href='#' target='_blank'>KattyV</a>
          </p>
        </Container>
        
      </footer>
  )
}
