import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import './main-footer.scss';
import {GET_DATA_FROM_API} from '../../redux/item/action/action-type/action-type';

const _ = require('lodash');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    backgroundColor : "black",
    height: 520
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 const MainFooter = ({paymentItem, dispatch}) => {

    useEffect(() => {
     dispatch({type: GET_DATA_FROM_API})  
   }, []) 
   //let list = _.map(user, item => item.title === "Payment").filter(item => item.title);
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <div className='column-footer'>
        <h3>Contact Us</h3> <br/>
        <p>If you have any question, please <br /> contact us at support@example.com</p>
        <h4>Copyright © 2020. All Rights Reserved</h4>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className='column-footer'>
        <h3>Store Location</h3>  <br />
        <p>Box 565, Charlestown, Nevis, West Indies</p> <br />
        <p>4312 Blvd , California , United State</p> <br />
        <p>Monday – Friday: 8am – 4pm Saturday: 9am – 5pm</p> <br />
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className='column-footer'>
        <h3>Categories</h3> <br />
        <p>For Woman</p> <br />
        <p>Collections</p> <br />
        <p>Others</p>
        </div>
         </Grid>
         <Grid item xs={3}>
         <div className='column-footer'>
        <h3>NewsLetter</h3> <br />
        <p>Subscribe to the weekly newsletter for all the <br /> latest updates</p> <br />
        <input type='email' name='Email' placeholder='@gmail.com' />
        <button className='bt01'>Subcribe</button>
        </div>
         </Grid>
      </Grid>
      <div className='element-row'>
         <h3 className='copy-right'>Copyright © 2020 ekommart. All Rights Reserved.</h3>
         <img className='img-payment' src={paymentItem.imgUrl} alt='Payment' />
      </div>
    </div>
  );
} 
const mapStateToProps = (state) => ({    
    //paymentItem : state.apiReducer.news?.filter(_ => _.title === "Payment").length ? state.apiReducer.news.filter(_ => _.title === "Payment")[0] : [] ,
    paymentItem: state.apiReducer.news?.filter(_ => _.title == "Payment")?.[0] || {} ,
    //user: state.apiReducer.news
})

export default connect(mapStateToProps,null)(MainFooter) 