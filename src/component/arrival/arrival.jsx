import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './arrival.scss';
import {connect} from 'react-redux';
import {GET_DATA_ARRIVAL} from '../../redux/item/action/action-type/action-type';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    spacing: 0
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  item01: {
      height: '200px'
  }
}));

const Arrival = ({zaraImage,skateImage,clothingImage,pantImage,dispatch}) => {
  const classes = useStyles()
  useEffect(() => {
    dispatch({type: GET_DATA_ARRIVAL})  
  }, [])
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-arrival' src={skateImage.imageUrl} alt='' />
            <h2 className='title-zara'>{skateImage.title}</h2>
            <h2 className='price-zara'>{skateImage.price}$</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div>
            <img className='img-arrival' src={clothingImage.imageUrl} alt='' />
            <h2 className='title-zara'>{clothingImage.title}</h2>
            <h2 className='price-zara'>{clothingImage.price}$</h2>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-zara' src={zaraImage.imageUrl} alt='' />
            <h2 className='title-zara'>{zaraImage.title}</h2>
            <h2 className='price-zara'>{zaraImage.price}$</h2>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-zara' src={pantImage.imageUrl} alt='' />
            <h2 className='title-zara'>{pantImage.title}</h2>
            <h2 className='price-zara'>{pantImage.price}$</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = state => ({
   zaraImage: state.arrivalReducer.arrival?.filter(_ => _.title === "zara-glass")?.[0] || {},
   skateImage: state.arrivalReducer.arrival?.filter(_ => _.title === "skateboard-spetacular")?.[0] || {},
   clothingImage: state.arrivalReducer.arrival?.filter(_ => _.title === "zara-clothing")?.[0] || {},
   pantImage: state.arrivalReducer.arrival?.filter(_ => _.title === "zara-pant")?.[0] || {},
})

export default connect(mapStateToProps)(Arrival)