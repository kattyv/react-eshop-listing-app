import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreContext } from '../../context/StoreContext';
import { formatPrice } from '../../utils/formatPrice';
import iconLoading from '../../assets/icon-download.gif'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';


export const ItemDetails: FC = () => {
  const { id } = useParams() as { id: string };
  //const [product, setProduct] = useState({} as Product);
  const { getItem } = useStoreContext();
  const { product, isLoading, isError } = getItem(+id);


  return (
    <Container>
      {isLoading && 
        <div className='full-h'>
          <img src={ iconLoading } alt='Loading' style={{ width: '100px' }} />
          Loading data, please wait...
        </div>
      }
      {isError && 
        <div className='full-h'>
          <Alert variant='filled' severity="error">
            Error: Problem loading data
          </Alert>
        </div>
      }

      <Grid container mt={3} mb={3}>
        <Grid item md={6}>
        <img src={ product?.image } alt="" style={{ width: '60%' }} />
        </Grid>

        <Grid item md={6}>
          <Grid container alignItems="center">
            <Grid item sm>
              <Typography 
                variant='h4' 
                component='h1' 
                mt={3} 
              >
                { product?.title }
              </Typography>
              
              <Typography 
                gutterBottom
                variant='subtitle2' 
                component='p' 
                mb={2}
                color="text.secondary"
              >
                Category: { product?.category }
              </Typography>
            </Grid>

            <Grid item>
              <Typography 
                gutterBottom 
                variant="h4" 
                component="div"
                color='error'
              >
                { formatPrice(product?.price) }
              </Typography>
            </Grid>
          </Grid>

          <Divider textAlign='left'>Product Details</Divider>

          <Typography 
            variant="body1" 
            component="p"
            mt={3}
            mb={3}
          >
            { product?.description }
          </Typography>

     
          <Rating defaultValue={ product?.rating.rate } precision={0.5} size='small' readOnly />

          <Typography 
            variant="body2" 
            component="p"
            color='text.secondary'
            mb={3}
          >
            Rating: { product?.rating.rate } / { product?.rating.count } Reviews
          </Typography> 

          <Button
            variant='contained'
            color='primary'
            size='large'
            startIcon={ <AddShoppingCartIcon /> }
          >
            Add to Cart
          </Button> 

        </Grid>
      </Grid>
    </Container>
  )
}

