import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './product.scss';
import TitleProduct from '../title-product/title-product';
import {connect} from 'react-redux';
import {GET_DATA_FROM_API} from '../../redux/item/action/action-type/action-type';

const _ = require('lodash');

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

const Product = ({dispatch, productItem, dataItem}) => {
  const classes = useStyles();
  useEffect(() => {
     dispatch({type: GET_DATA_FROM_API})
  }, [])
  var dataProduct = _.filter(productItem, o => o.id > 17 && o.id < 22) || {};

  return (
    <div>  
    <TitleProduct />
    <div className={classes.root}>
           { dataProduct.map((tile) => (
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

const mapStateToProps = state => ({
     productItem: state.apiReducer.news
   
})
   


export default connect(mapStateToProps)(Product)