import Link from 'next/link';
import vito from '../../public/images/vitoIcon.png'
import hamburger from '../../public/images/hamburger.png'
import cross from '../../public/images/cross.png'
import React from 'react';
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1,  Div2,  NavLink } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Menu 
      customBurgerIcon={ <Image src={hamburger} alt='hamburger' width={50} height={50}/> }
      customCrossIcon={ <Image src={cross} alt='cross' width={50} height={50}/> }
      right>
      <Link className="menu-item" href='/' passHref><NavLink>Home</NavLink></Link>
      <Link className="menu-item" href='/project' passHref><NavLink>Projects</NavLink></Link>
        <Link className="menu-item" href='/blog' passHref><NavLink>Blogs</NavLink></Link>
        <Link className="menu-item" href='/videos' passHref><NavLink>Videos</NavLink></Link>
        <Link className="menu-item" href='/vito' passHref><NavLink>The Dogfather</NavLink></Link>
        <Link className="menu-item" href='/contact' passHref><NavLink>Contact</NavLink></Link>
      </Menu>
    </Div1>
    <Div2>
      <Link href='/' passHref><Image className='vitoIcon'  src={vito} alt='vitoIcon' width={50} height={50} /></Link>
    </Div2>
  </Container>
);

export default Header;
