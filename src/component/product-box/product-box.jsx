import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
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

function findProduct(idx) {
   return idx.id > 1 && idx.id < 6
}

const ProductBox = ({sections})  => {
  const classes = useStyles();
  const product = sections.filter(findProduct)
  const {imageUrl} = product[0] 
  const imageUrlClock = product[1].imageUrl 
  const imageUrlShoe = product[2].imageUrl
  const imageUrlDress = product[3].imageUrl
  console.log(imageUrlShoe);
  
  return (
   /*  <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {sections.map(({imageUrl}) => (
           <GridListTile key={imageUrl}>
               <img src={imageUrl} />
           </GridListTile>
        
        ))}
      </GridList>
    </div> */
    <div className={classes.root}>
       <Grid container spacing={3} alignItems="center" justify="center" spacing={0}>
        <Grid item sm={4} >
          <div className={classes.paper1}>
              <img src={imageUrl} id='img-zoom1' alt='' />
         </div> 
        </Grid>
        <Grid item sm={4} >
           <Grid item sm={2}>         
           <div className={classes.paper2}>
               <img src={imageUrlClock} alt='' /> 
          </div>
             </Grid>
           <Grid item sm={2}>      
           <div className={classes.paper2}>
              <img src={imageUrlShoe} id='img-zoom1' alt='' />
          </div>   
            </Grid>
        </Grid>
        <Grid item sm={4} >
        <div className={classes.paper1}>
        <img src={imageUrlDress} id='img-zoom1' alt='' />
          </div>
        </Grid>
      </Grid>


 
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(ProductBox)