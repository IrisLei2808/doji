import React from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import MainFooter from '../main-footer/main-footer';
import './detail.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {removeItem,addQuantity,subtractQuantity} from '../../redux/item/action/cartAction';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  detail: {
      display: 'flex',
      marginLeft: '100px',
      border: '1px solid black',
      width: '100px'
  },
  price: {
      marginTop: '60px',
      marginLeft: '70px'
  },
  number: {
    marginTop: '60px',
    marginLeft: '160px'
},
  sup: {
      marginTop: '50px',
      
  },
  num: {
    marginTop: '60px',
  }
});

 
 // cái này có phải là gio hang k ong , cai san pham hien thi ra co tang giam do, cái này ông render bị sai nè, đáng lẽ phải lấy ra từ addItems chứ
 class Detail extends React.Component {

  constructor(props) {
      super(props);
  }

  handleAddQuantity = (id) => {
     this.props.addQuantity(id);
  }
  handleSubtractQuantity = (id) => {
     this.props.subtractQuantity(id);
  }
  handleRemoveItem = (id) => {
     this.props.removeItem(id);
  }
  render() {
    const {classes} = this.props;

    return (
     <div className='main-category'>
     <BlackBar />
     <Header />
     <MenuNav />
     <div className='title-sup'>
         <h3 style={{marginLeft: '150px', marginTop: '50px'}}>Product</h3>         
         <h3 style={{marginLeft: '80px', marginTop: '50px'}}>Price</h3>
         <h3 style={{marginLeft: '100px', marginTop: '50px'}}>Remove</h3>
         <h3 style={{marginLeft: '350px', marginTop: '50px'}}>Total</h3>
         <h3 style={{marginLeft: '130px', marginTop: '50px'}}>Quantity</h3>
        </div>
       <div className={classes.sup}>
 
       {this.props.addItems.map((item) => (
              <Grid container spacing={10}>   
              <Grid item xs={9} className={classes.detail}>
               <img className='detail-img' src={item.imgUrl} alt=""/>
               <h3 className={classes.price}>{item.price} $</h3>
               <i class="far fa-trash-alt remove" onClick={() => {this.handleRemoveItem(item.id)}}></i> 
               <i className='fas fa-arrow-up icon' onClick={() => {this.handleAddQuantity(item.id)}}></i>   
               <i className='fas fa-arrow-down icon-down' onClick={() => {this.handleSubtractQuantity(item.id)}}></i>
               <h3 className={classes.num}>{item.quantity*item.price} $</h3>   
               <h3 className={classes.number}>{item.quantity}</h3>       
              </Grid>
         
              <Grid item xs={3}> 
 
              </Grid>
    
        
              </Grid>
             
       ))}

   </div>
   <MainFooter />
   </div>
 );
 }
 }

const mapStateToProps = (state) => {
    return {
       addItems: state.itemReducer.addItems,
       total: state.itemReducer.total
    }
 }

 const mapDispatchToProps = (dispatch) => {
    return {
       addQuantity: (id) => {dispatch(addQuantity(id))},
       subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
       removeItem: (id) => {dispatch(removeItem(id))}
    }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Detail))
