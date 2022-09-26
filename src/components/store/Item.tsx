import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../models/Product';
import { formatPrice } from '../../utils/formatPrice';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';

export const Item: FC<Product> = (props: Product) => {
  const { id, title, description, category, image, price, rating } = props;
  return (
    <Card 
      elevation={3}
      sx={{textAlign: 'center', height: '100%' }}
    >
      <CardActionArea component={ Link } to={`/store/${id}`}>
          <CardMedia
            component='img'
            image={ image }
            height='200'
            alt={ title }
          />

        <CardContent>
          <Typography gutterBottom variant="body1" component="h3" noWrap>
            { title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
          { category }
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="p">
          { formatPrice(price) }
        </Typography>

        <Rating defaultValue={rating.rate} precision={0.5} size='small' readOnly />
      </CardActions>
    </Card> 
  )
}
