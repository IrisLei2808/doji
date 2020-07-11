import React from 'react';
import './App.css';
import Content from './redux/content';
import Blog from './component/blog/blog';
import Category from './component/category/category';
import {Switch ,Route } from 'react-router-dom';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Login from './component/login/login';
import Detail from './component/detail/detail';
import Jewelry from './component/jewelry/jewelry';
import Shoe from './component/shoe/shoe';
import Shirt from './component/shirt/shirt';
import './App.css';

function App() {
  return (
    <Switch>
    <div className="App">
         <Route exact path="/" component={Content} />
         <Route path="/blog" component={Blog} />
         <Route path="/shop" component={Category} />
         <Route path="/jewelry" component={Jewelry} />
         <Route path="/shoe" component={Shoe} />
         <Route path="/shirt" component={Shirt} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         <Route path="/login" component={Login} />
         <Route path="/detail" component={Detail} />
    </div>
    </Switch>
  );
}

export default App;
