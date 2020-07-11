import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './footer.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor : "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <div>
        <h3>Products</h3> <br/>
        <p>Cameras</p>  <br/> 
        <p>Video Cameras</p> <br />
        <p>Lenses</p> <br />
        <p>Ink Paper</p> <br /> <br />
        <h4>Copyright © 2020. All Rights Reserved</h4>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div>
        <h3>Services</h3>  <br />
        <p>Apps</p> <br />
        <p>Services</p> <br />
        <p>Photo Books</p> <br />
        <p>Lifecake</p>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div>
        <h3>Products</h3>  <br />
        <p>Inspiration</p> <br />
        <p>Tutorials</p>       <br />
        <p>Connection</p> <br />
        <p>Gallery</p>
        </div>
         </Grid>
         <Grid item xs={3}>
        <div className='footer'>
         <p className='detail'>Email:  duclt2808@gmail.com</p>  <br />
         <p className='detail'>address: FPTu University hcmc</p>  <br />
         <p className='detail'>phone: +(84)0329954873</p>   <br />
         <p className='detail'>Github: https://github.com/IrisLei2808 </p> <br />
        <input placeholder='ducltse130474@fpt.edu.vn' />
         </div>
         </Grid>
      </Grid>
    </div>
  );
}
