import React from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import MainFooter from '../main-footer/main-footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {addToCartShirt} from '../../redux/item/action/cartAction';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  jewelry: {
    backgroundColor: 'white'
  }
});

 class Shirt extends React.Component {

   handleClick = (id) => {
    this.props.addToCartShirt(id);
  }
  
  render() {
    const {classes} = this.props;
   
    return (
    <div className='main-category'>
   <BlackBar />
   <Header />
   <MenuNav />
   <div className=''>
     <Grid container xs={12} className={classes.content}>   
     {this.props.clothing.map((item) => (
      <div>
      <Link><img src={item.imgUrl} key={item.id} alt='' className='img-category-jewelry' /></Link>
       <p>{item.title}</p>
       <p>{item.price}$</p>
       <Link to='/detail'><button className='button-summit' onClick={() => {this.handleClick(item.id)}} >Add To Cart</button></Link>
       </div>
        ))}
      </Grid>
   </div>
   <MainFooter />
   </div>
 );
 }
 }

const mapStateToProps = (state) => {
    return {
       clothing: state.itemReducer.clothing,
       addItems: state.itemReducer.addItems
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
        addToCartShirt: (id) => {dispatch(addToCartShirt(id))}
    }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Shirt))
