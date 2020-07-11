import React  from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ItemData} from '../product/productData2';
import MainFooter from '../main-footer/main-footer';
import './about.scss';

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
    choose: {
      marginTop: '100px'
    }
  }));

const imgAbout = ItemData.find((index) => { 
     return index.title === 'About Us'
})

const imgPublic = ItemData.find((index) => {
  return index.jobs === 'Public Relation'
})
const imgDesign = ItemData.find((index) => {
  return index.jobs === 'Designer Website'
})
const imgSupport = ItemData.find((index) => {
  return index.jobs === 'Customer Support'
})
const imgMarketing = ItemData.find((index) => {
  return index.jobs === 'Marketing Director'
})

var logoChavy = ItemData.find((data) => {
  return data.title === 'Chavy'
})

var powerHouse = ItemData.find((data) => {
  return data.title === 'Power House'
})

var hardCore = ItemData.find((data) => {
  return data.title === 'Hard Core'
})

var fitness = ItemData.find((data) => {
  return data.title === 'Fitness'
})

var fishing = ItemData.find((data) => {
  return data.title === 'Fishing'
})

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BlackBar />
            <Header />
            <MenuNav />
            <Grid container spacing={0}>
               <Grid item xs={6}>
                    <img src={imgAbout.imgUrl} alt='About ' />  
               </Grid>
               <Grid item xs={6}>
                   <h1 style={{float: 'left'}}>Our Story</h1> <br /> <br /> <br />
                   <p style={{float: 'left' , textTransform: 'lowercase'}}>
                   Lorem ipsum dolor sit dolor vel reiciendis rem quia <br />
                   laudantium nesciunt nostrum nemo nam. Quidem <br /> 
                   pariatur nostrum tenetur quos debitis quam!</p>  <br />  <br />  <br /> <br />
                   <p style={{float: 'left' , textTransform: 'lowercase'}}>
                   Lorem ipsum dolor sit dolor vel reiciendis rem quia <br />
                   laudantium nesciunt nostrum nemo nam. Quidem <br /> 
                   pariatur nostrum tenetur quos debitis quam!</p>  <br />  <br /> <br /> <br /> <br />
                   <i style={{float: 'left'}} class="fas fa-quote-left"> Create stunning images with as much or as little control as you like thanks</i> 
               </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.choose}>
             <Grid item xs={4}>
              <h1 style={{marginRight: '170px'}}>Why Choose Us</h1>
              <i class="far fa-chart-bar icon-2x" style={{fontSize: '80px' , marginTop: '50px', color: 'orange'}}></i>  
              <h1 style={{marginTop: '10px'}}>Economiccs</h1>
<p style={{textTransform: 'lowercase', fontWeight: 'lighter', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
              </Grid>
             <Grid item xs={4}>
             <i class="fab fa-cc-paypal"  style={{fontSize: '80px' , marginTop: '90px' , color: 'orange'}}></i>
             <h1 style={{marginTop: '10px'}}>Payment Paypal</h1>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
             <Grid item xs={4}>
             <i class="far fa-comments"  style={{fontSize: '80px' , marginTop: '90px' , color: 'orange'}}></i>
             <h1 style={{marginTop: '10px'}}>Free Delivery</h1>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.choose}>
             <Grid item xs={3}>
             <h1 style={{marginRight: '140px'}}>Our Team</h1>
             <img src={imgDesign.imgUrl} alt='' style={{marginTop: '80px'}} />
             <p style={{marginTop: '20px'}}>{imgDesign.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{imgDesign.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
              </Grid>
             <Grid item xs={3}>
             <img src={imgPublic.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{imgPublic.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{imgPublic.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
             <Grid item xs={3}>
             <img src={imgMarketing.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{imgMarketing.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{imgMarketing.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
             <Grid item xs={3}>
             <img src={imgSupport.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{imgSupport.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{imgSupport.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
              </Grid>
            </Grid>
            <img className='logo-img' src={logoChavy.imgUrl} alt='' />
            <img className='logo-img' src={powerHouse.imgUrl} alt='' />
            <img className='logo-img' src={hardCore.imgUrl} alt='' />
            <img className='logo-img' src={fitness.imgUrl} alt='' />
            <img className='logo-img' src={fishing.imgUrl} alt='' />
            <MainFooter />
        </div>
    )
}
