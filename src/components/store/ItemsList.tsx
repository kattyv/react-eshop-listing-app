import React, { FC } from 'react'
import { Item } from './Item'
import { useStoreContext } from '../../context/StoreContext';
import iconLoading from '../../assets/icon-download.gif'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Alert from '@mui/material/Alert';

export const ItemsList: FC = () => {
  //const [products, setProducts] = useState<Product[]>([]);
  const { getItems } = useStoreContext();
  const { products, isLoading, isError } = getItems()

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


      <Typography 
        variant='h4' 
        component='h1' 
        mt={3} 
        mb={2}
      >
        Our Products
      </Typography>

      <Grid container  alignItems="stretch" spacing={3}>
      { products?.map(item => (
          <Grid item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3}  
            key={ item.id }
          >
            <Item {...item} />
          </Grid>
      ))}
      </Grid>

      <Pagination 
        count={10} 
        showFirstButton 
        showLastButton 
        sx={{ margin: '30px auto', justifyContent: 'center' }}
      />
    </Container>
  )
}
