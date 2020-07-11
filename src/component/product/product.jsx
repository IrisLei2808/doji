import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './product.scss';
import {tileData} from './productData';
import TitleProduct from '../title-product/title-product';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '50px',
    display: 'flex',
    paddingLeft: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '300px',

  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <div>  
    <TitleProduct />
    <div className={classes.root}>
           { tileData.map((tile) => (
      <Grid container spacing={3}>
                 <Grid item xs={12} sm={3}>
                 <img className='img-product' src={tile.imgUrl} alt='' />
                 <div className='container'>
                 <p className='tile'>{tile.title}</p>
                 <p className='price'>${tile.price}</p>
                 </div>
               </Grid>
      </Grid>
            ))}
    </div>
    </div>
  );
}