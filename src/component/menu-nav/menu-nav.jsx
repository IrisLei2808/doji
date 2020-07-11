import React from 'react';
import './menu-nav.scss';
import {Link} from 'react-router-dom';

const MenuNav = () => (
    <div id="header">
  <nav>
    <ul>
      <li>
       <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
        <ul class="mega-dropdown">
          <li class="row">
            <ul>
              <li><Link to='/shop'>Bread Product</Link></li>
              <li><Link to='/shoe'>Shoe Product</Link></li>
              <li><Link to='/shirt'>Clothing Product</Link></li>
              <li><Link to='/jewelry'>Jewelry Product</Link></li>
            </ul>
 
          </li>
        </ul>        
      </li>
      <li class="dropdown">
      <Link to='/about'>About Us</Link>     
      </li>
      <li>
      <Link to="/blog">Blog</Link>
      </li>
      <li class="dropdown"> 
      <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>

</div>
)

export default MenuNav