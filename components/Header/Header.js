import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1,  Div2,  NavLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Menu 
      customBurgerIcon={ <Image src="/images/hamburger.png" alt='hamburger'/> }
      customCrossIcon={ <Image src="/images/cross.png" alt='cross'/> }
      right>
      <Link className="menu-item" href='/' passHref><NavLink>Home</NavLink></Link>
      <Link className="menu-item" href='/project' passHref><NavLink>Projects</NavLink></Link>
        <Link className="menu-item" href='/blog' passHref><NavLink>Blogs</NavLink></Link>
        <Link className="menu-item" href='/videos' passHref><NavLink>Videos</NavLink></Link>
        <Link className="menu-item" href='/vito' passHref><NavLink>The Life of Vito</NavLink></Link>
        <Link className="menu-item" href='/contact' passHref><NavLink>Contact</NavLink></Link>
      </Menu>
    </Div1>
    <Div2>
      <Link href='/' passHref><Image className='vitoIcon' src="/images/vitoIcon.png" alt='vitoIcon' /></Link>
    </Div2>
  </Container>
);

export default Header;
