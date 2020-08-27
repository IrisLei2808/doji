import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import './product-box.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10px',
    flexGrow: '1'
  },
  gridList: {
    width: 700,
    height: 950,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper1: {
      height: '700px',
      overflow: 'hidden',
      '&:hover': {
         transform: 'scale(1.2)'
     },
     cursor: 'pointer'
  },
  paper2: {
    height: '350px',
    width: '480px',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.2)'
  },
  cursor: 'pointer'
},
}));

const ProductBox = ({bagImage,dressImage,shoeImage,clockImage})  => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container spacing={3} alignItems="center" justify="center" spacing={0}>
        <Grid item sm={4} >
          <div className={classes.paper1}>
              <img src={bagImage.imageUrl} id='img-zoom1' alt='' />
         </div> 
        </Grid>
        <Grid item sm={4} >
           <Grid item sm={2}>         
           <div className={classes.paper2}>
               <img src={dressImage.imageUrl} alt='' /> 
          </div>
             </Grid>
           <Grid item sm={2}>      
           <div className={classes.paper2}>
              <img src={shoeImage.imageUrl} id='img-zoom1' alt='' />
          </div>   
            </Grid>
        </Grid>
        <Grid item sm={4} >
        <div className={classes.paper1}>
        <img src={clockImage.imageUrl} id='img-zoom1' alt='' />
          </div>
        </Grid>
      </Grid>


 
    </div>
  );
}

const mapStateToProps = state => ({
  bagImage: state.arrivalReducer.arrival?.filter(_ => _.title === "dress")?.[0] || {},
  dressImage: state.arrivalReducer.arrival?.filter(_ => _.title === "clock")?.[0] || {},
  shoeImage: state.arrivalReducer.arrival?.filter(_ => _.title === "shoe")?.[0] || {},
  clockImage: state.arrivalReducer.arrival?.filter(_ => _.title === "towel")?.[0] || {},
})

export default connect(mapStateToProps)(ProductBox)