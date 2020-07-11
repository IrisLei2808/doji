import  React from 'react';
import {ItemData} from '../product/productData2';
import './logo.scss';

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

const Logo = () => (
    <div className='data-logo'> 
        <hr className='vertical-left-data'></hr>
        <img className='logo-img' src={logoChavy.imgUrl} alt='' />
        <img className='logo-img' src={powerHouse.imgUrl} alt='' />
        <img className='logo-img' src={hardCore.imgUrl} alt='' />
        <img className='logo-img' src={fitness.imgUrl} alt='' />
        <img className='logo-img' src={fishing.imgUrl} alt='' />
        <hr></hr>

   </div>
)

export default Logo