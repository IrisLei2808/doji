import React from 'react';
import BlackBar from '../component/black-bar/black-bar';
import Header from '../component/header/header';
import Slide from '../component/slide/slide';
import MenuNav from '../component/menu-nav/menu-nav';
import ProductBox from '../component/product-box/product-box';
import Product from '../component/product/product';
import Stylish from '../component/stylish/stylish';
import Arrival from '../component/arrival/arrival';
import Logo from '../component/logo/logo';
import MainFooter from '../component/main-footer/main-footer';
const Content = () => (
    <div>
         <BlackBar />
         <Header />
         <MenuNav />
         <Slide />
         <ProductBox />
         <Product />
         <Stylish />
         <Arrival />
         <Logo />
         <MainFooter /> 
    </div>
)

export default Content