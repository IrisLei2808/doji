import React from 'react';
import './slide.scss';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';
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

const Slide = ({sections}) => {
  const { imageUrl , title , season , year } = sections[0]  
  const classes = useStyles();
  return (
        <div className='img-slide' style={{backgroundImage: `url(${(`${imageUrl}`)})`}}>
            <h1 className='title-item'>{title}</h1>
            <hr className='vertical-line' />
            <h1 className='title-season'>{season}</h1>
            <h1 className='title-year'>{year}</h1>
          <Link to='/shop'><Button size="large" className={classes.margin}>Shop Now</Button></Link>  
        </div>
  )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Slide) 