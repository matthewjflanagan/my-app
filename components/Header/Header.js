import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1,  Div2,  NavLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Menu 
      customBurgerIcon={ <img src="/images/hamburger.png" /> }
      customCrossIcon={ <img src="/images/cross.png" /> }
      right>
      <Link className="menu-item" href='/' passHref><NavLink>Home</NavLink></Link>
      <Link className="menu-item" href='/project' passHref><NavLink>Projects</NavLink></Link>
        <Link className="menu-item" href='/blog' passHref><NavLink>Blogs</NavLink></Link>
        <Link className="menu-item" href='/videos' passHref><NavLink>Videos</NavLink></Link>
        <Link className="menu-item" href='/contact' passHref><NavLink>Contact</NavLink></Link>
      </Menu>
    </Div1>
    <Div2>
      <Link href='/' passHref><img className='vitoIcon' src="/images/vitoIcon.png" /></Link>
    </Div2>
  </Container>
);

export default Header;
