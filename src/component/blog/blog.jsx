import React , {useState, useEffect} from 'react';
import BlackBar from '../black-bar/black-bar';
import Header from '../header/header';
import MenuNav from '../menu-nav/menu-nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainFooter from '../main-footer/main-footer';
import {connect} from 'react-redux';
import {GET_DATA_FROM_API} from '../../redux/item/action/action-type/action-type';
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

const Blog = ({dispatch, firstItem, secondItem, thirdItem, fourthItem, 
    fifthItem, sixthItem, sevenItem, eightItem, nineItem, tentItem,
     firstPost, secondPost, thirdPost
}) => {
    const classes = useStyles();
    var detail = useState('Read More')
    useEffect(() => {
        dispatch({type: GET_DATA_FROM_API})
    }, [])
    return (
        <div className={classes.root}>
            <BlackBar />
            <Header />
            <MenuNav />
            <Grid container spacing={0}>
                 <Grid item xs={9}>
                    <img src={firstItem.imgUrl} alt='' />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={secondItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={thirdItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={fourthItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={fifthItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={sixthItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={sevenItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={eightItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={nineItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                    <img src={tentItem.imgUrl} alt=''  />
                    <p className='date-blog'>{firstItem.date}</p>
                    <h1 className='title-blog'>{firstItem.title}</h1>
                    <p className='content-blog'>{firstItem.content}</p>
                    <p className='content-detail'>{detail}</p>
                 </Grid>
                 <Grid item xs={3}>
                    <h1 className='title-post'>Latest Post</h1>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={firstPost.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{firstPost.title}</p> 
                             <p className='date-post'>{firstPost.date}</p>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={secondPost.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{firstPost.title}</p> 
                             <p className='date-post'>{firstPost.date}</p>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <ul> 
                        <li>
                            <div className='img-contain'>
                            <img className='img-post' src={thirdPost.imgUrl} alt='' />
                            </div>
                        </li>
                        <li>
                            <div className='content-contain'>
                             <p className='content-post'>{firstPost.title}</p> 
                             <p className='date-post'>{firstPost.date}</p>
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

const mapStateToProps = state => ({
     firstItem: state.apiReducer.news?.filter(_ => _.id === 1)?.[0] || {},
     secondItem: state.apiReducer.news?.filter(_ => _.id === 2)?.[0] || {},
     thirdItem: state.apiReducer.news?.filter(_ => _.id === 3)?.[0] || {},
     fourthItem: state.apiReducer.news?.filter(_ => _.id === 4)?.[0] || {},
     fifthItem: state.apiReducer.news?.filter(_ => _.id === 5)?.[0] || {},
     sixthItem: state.apiReducer.news?.filter(_ => _.id === 6)?.[0] || {},
     sevenItem: state.apiReducer.news?.filter(_ => _.id === 7)?.[0] || {},
     eightItem: state.apiReducer.news?.filter(_ => _.id === 8)?.[0] || {},
     nineItem: state.apiReducer.news?.filter(_ => _.id === 9)?.[0] || {},
     tentItem: state.apiReducer.news?.filter(_ => _.id === 10)?.[0] || {},
     firstPost: state.apiReducer.news?.filter(_ => _.id === 11)?.[0] || {},
     secondPost: state.apiReducer.news?.filter(_ => _.id === 12)?.[0] || {},
     thirdPost: state.apiReducer.news?.filter(_ => _.id === 13)?.[0] || {}
})

export default connect(mapStateToProps)(Blog)