import React , {useState} from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ItemData} from '../product/productData2';
import MainFooter from '../main-footer/main-footer';
import './blog.scss';

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
  }));

const item01 = ItemData.find((index) => {    
      return index.id === 1;
  })
const item02 = ItemData.find((index) => {
    return index.id === 2;
})
const item03 = ItemData.find((index) => {
    return index.id === 3;
})
const item04 = ItemData.find((index) => {
    return index.id === 4;
})
const item05 = ItemData.find((index) => {
    return index.id === 5;
})
const item06 = ItemData.find((index) => {
    return index.id === 6;
}) 
const item07 = ItemData.find((index) => {
    return index.id === 7;
})
const item08 = ItemData.find((index) => {
    return index.id === 8;
})
const item09 = ItemData.find((index) => {
    return index.id === 9;
})
const item10 = ItemData.find((index) => {
    return index.id === 10;
})
const post01 = ItemData.find((index) => {
    return index.id === 11
})
const post02 = ItemData.find((index) => {
    return index.id === 12
})
const post03 = ItemData.find((index) => {
    return index.id === 13
})
export default function Blog() {
    const classes = useStyles();
    var detail = useState('Read More')
    return (
        <div className={classes.root}>
            <BlackBar />
            <Header />
            <MenuNav />
            <Grid container spacing={0}>
                 <Grid item xs={9}>
                    <img src={item01.imgUrl} alt='' />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item02.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item03.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item04.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item05.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item06.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item07.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item08.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item09.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={item10.imgUrl} alt=''  />
                    <p className='date-blog'>{item01.date}</p>
                    <h1 className='title-blog'>{item01.title}</h1>
                    <p className='content-blog'>{item01.content}</p>
                    <p className='content-detail'>{detail}</p>
                 </Grid>
                 <Grid item xs={3}>
                    <h1 className='title-post'>Latest Post</h1>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={post01.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{post01.title}</p> 
                             <p className='date-post'>{post01.date}</p>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={post02.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{post01.title}</p> 
                             <p className='date-post'>{post01.date}</p>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={post03.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{post01.title}</p> 
                             <p className='date-post'>{post01.date}</p>
                            </div>
                        </li>
                    </ul>
                    <h1 className='title-new'>Latest New</h1>     
                    <hr />    
                    <p className='title-icon'>MarketPlace (5)</p>
                    <p className='title-icon-middle'>Others (18)</p>    
                    <p className='title-icon-last'>Categories (15)</p>      
                    <h1 className='title-tag'>Tags</h1>     
                    <hr /> 
                    <div className='tag-cloud'>
                        <p>Blog</p>
                        <p>Tags</p>
                        <p>News</p>
                        <p>Post</p>
                    </div>
            </Grid>
            </Grid>
            <MainFooter />
        </div>
    )
}
