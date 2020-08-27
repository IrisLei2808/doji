import  React , {useEffect}from 'react';
import {connect} from 'react-redux';
import {GET_DATA_FROM_API} from '../../redux/item/action/action-type/action-type';
import './logo.scss';

const Logo = ({dispatch,chavyImg, powerImg, hardImg, fitnessImg, fishingImg}) => {
    useEffect(() => {
        dispatch({type: GET_DATA_FROM_API})
    }, [])
    return (
    <div className='data-logo'> 
        <hr className='vertical-left-data'></hr>
        <img className='logo-img' src={chavyImg.imgUrl} alt='' />
        <img className='logo-img' src={powerImg.imgUrl} alt='' />
        <img className='logo-img' src={hardImg.imgUrl} alt='' />
        <img className='logo-img' src={fitnessImg.imgUrl} alt='' />
        <img className='logo-img' src={fishingImg.imgUrl} alt='' />
        <hr></hr>
   </div>
    )
}

const mapStateToProps = state => ({
     chavyImg: state.apiReducer.news?.filter(_ => _.title === "Chavy")?.[0] || {},
     powerImg: state.apiReducer.news?.filter(_ => _.title === "Power House")?.[0] || {},
     hardImg: state.apiReducer.news?.filter(_ => _.title === "Hard Core")?.[0] || {},
     fitnessImg: state.apiReducer.news?.filter(_ => _.title === "Fitness")?.[0] || {},
     fishingImg: state.apiReducer.news?.filter(_ => _.title === "Fishing")?.[0] || {},
})


export default connect(mapStateToProps)(Logo)