import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';

export const Home: FC = () => {
  return (
    <div className='full-h home'>
      <Container>
        <Typography
          variant='h1'
        >
          Treat yourself
        </Typography>

        <Typography
          variant='h5'
          mb={5}
        >
          something special...
        </Typography>

        <Button
          variant='outlined'
          color='inherit'
          size='large'
          component={ Link } to='/store'
        >
          Get that thing you wanted
        </Button>
      </Container>
      
    </div>
  )
}
