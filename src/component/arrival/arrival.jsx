import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './arrival.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';


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

const Arrival = ({sections}) => {
  const classes = useStyles()
  const {imageUrl} = sections[6]
  const {title} = sections[6]
  const {price} = sections[6]
  const imageUrlArrival = sections[7].imageUrl
  const titleZara = sections[7].title
  const priceZara = sections[7].price
  const imageUrlZara = sections[8].imageUrl
  const shortZara = sections[8].title
  const priceShortZara = sections[8].price
  const imageUrlPant = sections[9].imageUrl
  const pantZara = sections[9].title
  const pricePantZara = sections[9].price
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-arrival' src={imageUrl} alt='' />
            <h2 className='title-zara'>{title}</h2>
            <h2 className='price-zara'>{price}$</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div>
            <img className='img-arrival' src={imageUrlArrival} alt='' />
            <h2 className='title-zara'>{titleZara}</h2>
            <h2 className='price-zara'>{priceZara}$</h2>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-zara' src={imageUrlZara} alt='' />
            <h2 className='title-zara'>{shortZara}</h2>
            <h2 className='price-zara'>{priceShortZara}$</h2>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.item01}>
          <div>
            <img className='img-zara' src={imageUrlPant} alt='' />
            <h2 className='title-zara'>{pantZara}</h2>
            <h2 className='price-zara'>{pricePantZara}$</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections    // from directory selector
})

export default connect(mapStateToProps)(Arrival)