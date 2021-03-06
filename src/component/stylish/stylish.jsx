import React from 'react';
import './stylish.scss';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  margin01: {
    margin: theme.spacing(1),
    color: 'white',
    marginTop: '50px',
    width: '200px',
    marginLeft: '120px',
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

const Stylish = ({stylishImage}) => {
  const classes = useStyles();
  return (
        <div className='img-slide-style' style={{backgroundImage: `url(${(`${stylishImage.imageUrl}`)})`}}>
          <h3 className='title-brand-style'>TREND & FASHION GUIDE</h3>
          <h1 className='title-item-style'>THE MOST STYLISH</h1>
          <Link to='/shop'><Button size="large" className={classes.margin01}>Shop Now</Button></Link>
        </div>
  )
}


const mapStateToProps = state => ({
  stylishImage: state.arrivalReducer.arrival?.filter(_ => _.title === "stylish")?.[0] || {},
})

export default connect(mapStateToProps)(Stylish) 