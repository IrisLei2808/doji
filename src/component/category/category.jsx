import React from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import MainFooter from '../main-footer/main-footer';
import './category.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {addToCart} from '../../redux/item/action/cartAction';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  slider: {
    width: '200px',
    marginTop: '20px',
    color: 'black'
  },
  content: {
     margin: '100px',
  }
});

 class Category extends React.Component {

  constructor(props) {
    super(props);
}

   handleClick = (id) => {
    this.props.addToCart(id);
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
     {this.props.itemProduct.map((item) => (
      <div>
      <Link to={`/shop/${item.linkUrl}`} ><img src={item.imgUrl} key={item.id} alt='' className='img-category' /></Link>
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
       itemProduct: state.itemReducer.itemProduct,
       addItems: state.itemReducer.addItems
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => {dispatch(addToCart(id))}
    }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Category))
