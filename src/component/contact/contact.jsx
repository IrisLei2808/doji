import React , {useEffect} from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainFooter from '../main-footer/main-footer';

import './contact.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : "white",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    contact: {
        marginTop: '70px'
    },
    submit: {
        border: '1px solid black',
        marginTop: '50px',
        height: '700px',
        display: 'flex',
        width: '100%'
    },
  }));


export default function Contact() {
    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 10.810583, lng: 106.709145},
            zoom: 8
          });
    })
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BlackBar />
            <Header />
            <MenuNav />
            <Grid container spacing={0} className={classes.contact}>
                 <Grid item xs={3}>
                   <h1>Visit Our Agency</h1>
                   <h3 style={{marginTop: '20px'}}>Head Office</h3>
                   <i class="far fa-map" style={{marginTop: '20px', float: 'left' , fontSize: '15px'}}><p style={{marginTop: '10px'}}>Glass Door Street</p></i>
                   <i class="far fa-envelope" style={{marginTop: '20px', float: 'left' , fontSize: '15px'}}><p style={{marginTop: '10px'}}>abc@example.com</p></i>
                   <i class="far fa-phone-square" style={{marginTop: '20px', float: 'left' , fontSize: '17px'}}><p style={{marginTop: '10px'}}>+84(023)2817293</p></i>
                   <i class="far fa-clock" style={{marginTop: '20px', float: 'left' , fontSize: '15px'}}><p style={{marginTop: '10px'}}>Monday - Fridays</p></i>
                 </Grid>
                 <Grid item xs={9}>
                 <div style={{ width: 1000, height: 500 }} id="map" />
            </Grid>
            <Grid className={classes.submit}>
                <Grid item xs={6}>
                <p style={{marginTop: '150px', fontSize: '20px'}}>Leave A Message</p>
                <input className='type-input' placeholder='Name' />
                <input className='type-input' placeholder='Email' />
                <input className='type-input'placeholder='Subject' />
                <input className='type-input' placeholder='Message' />  <br />
                <button className='button-summit'>Submit</button>
             </Grid>
             <Grid item xs={6} >
                <p style={{marginTop: '150px', fontSize: '20px'}}>Register Paypal</p> <br /> <br />
                <input className='type-regist' placeholder='Your Email' />  <br /> <br /> <br />
                <input className='type-regist' placeholder='Legal First Name' /> <br /> <br /> <br />
                <input className='type-regist' placeholder='Legal Last Name' /> <br /> 
                <input className='type-resgist' placeholder='Create Your Password' type='password' />  <br />
                <input className='type-resgist' placeholder='Confirm Your Password' type='password' />  <br />
                <button className='button-summit'>Submit</button>
             </Grid>
            </Grid>
            </Grid>
            <MainFooter />
        </div>
    )
}
