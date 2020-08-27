import React , {useEffect} from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainFooter from '../main-footer/main-footer';
import {connect} from 'react-redux';
import {GET_DATA_FROM_API} from '../../redux/item/action/action-type/action-type';
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

const About = ({aboutItem,dispatch,publictItem,designItem,marketingItem,supportItem,chavyImage,powerImage,hardImage,fitnessImage,fishingImage}) => {
    const classes = useStyles();
    useEffect(() => {
       dispatch({type: GET_DATA_FROM_API})
    }, [])
    console.log('Public Item', aboutItem)
    return (
        <div className={classes.root}>
            <BlackBar />
            <Header />
            <MenuNav />
            <Grid container spacing={0}>
               <Grid item xs={6}>
                    <img src={aboutItem.imgUrl} alt='About' />  
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
             <img src={designItem.imgUrl} alt='' style={{marginTop: '80px'}} />
             <p style={{marginTop: '20px'}}>{designItem.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{designItem.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
              </Grid>
             <Grid item xs={3}>
             <img src={publictItem.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{publictItem.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{publictItem.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
             <Grid item xs={3}>
             <img src={marketingItem.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{marketingItem.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{marketingItem.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
             </Grid>
             <Grid item xs={3}>
             <img src={supportItem.imgUrl} alt='' style={{marginTop: '120px'}} />
             <p style={{marginTop: '20px'}}>{supportItem.title}</p>
             <p style={{marginTop: '20px', fontWeight: 'lighter'}}>{supportItem.jobs}</p>
             <p style={{textTransform: 'lowercase', fontWeight: 'lighter' , marginTop: '20px'}}>consectetur adipiscing elit. Ut elit tellus ullamcorper mattis, pulvinar dapibus leo.</p>
              </Grid>
            </Grid>
            <img className='logo-img' src={chavyImage.imgUrl} alt='' />
            <img className='logo-img' src={powerImage.imgUrl} alt='' />
            <img className='logo-img' src={hardImage.imgUrl} alt='' />
            <img className='logo-img' src={fitnessImage.imgUrl} alt='' />
            <img className='logo-img' src={fishingImage.imgUrl} alt='' />
            <MainFooter />
        </div>
    )
}

const mapStateToProps = (state) => ({
   aboutItem: state.apiReducer.news?.filter(_ => _.title === "About Us")?.[0] || {},
   publictItem: state.apiReducer.news?.filter(_ => _.jobs === "Public Relation")?.[0] || {},
   designItem: state.apiReducer.news?.filter(_ => _.jobs === "Designer Website")?.[0] || {},
   marketingItem: state.apiReducer.news?.filter(_ => _.jobs === "Marketing Director")?.[0] || {},
   supportItem: state.apiReducer.news?.filter(_ => _.jobs === "Customer Support")?.[0] || {},
   chavyImage: state.apiReducer.news?.filter(_ => _.title === "Chavy")?.[0] || {},
   powerImage: state.apiReducer.news?.filter(_ => _.title === "Power House")?.[0] || {},
   hardImage: state.apiReducer.news?.filter(_ => _.title === "Hard Core")?.[0] || {},
   fitnessImage: state.apiReducer.news?.filter(_ => _.title === "Fitness")?.[0] || {}, 
   fishingImage: state.apiReducer.news?.filter(_ => _.title === "Fishing")?.[0] || {}, 
})

export default connect(mapStateToProps)(About)