import React from 'react';
import './slide.scss';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: 'white',
    marginTop: '-650px',
    marginRight: '350px',
    width: '200px',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: "wheat",
      color: 'black'
   },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Slide = ({slideImage}) => {
  
  const classes = useStyles();
  return (
        <div className='img-slide' style={{backgroundImage: `url(${(`${slideImage.imageUrl}`)})`}}>
            <h1 className='title-item'>{slideImage.title}</h1>
            <hr className='vertical-line' />
            <h1 className='title-season'>{slideImage.season}</h1>
            <h1 className='title-year'>{slideImage.year}</h1>
          <Link to='/shop'><Button size="large" className={classes.margin}>Shop Now</Button></Link>  
        </div>
  )
}

const mapStateToProps = state => ({
  slideImage: state.arrivalReducer.arrival?.filter(_ => _.title === "BAG")?.[0] || {},
})

export default connect(mapStateToProps)(Slide) 