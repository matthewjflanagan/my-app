import Link from 'next/link';
import home from '../../public/images/homeIcon.png'
import React from 'react';
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1,  Div2 } from './HeaderStyles';
import hamburger from '../../public/images/hamburger.png'
import cross from '../../public/images/cross.png'

var Home = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={home} alt='homeIcon' width={48} height={48} />
    </a>
  )
})

const Header = () =>  (
  <Container>
    <Div1>
      <Menu 
        customBurgerIcon={ <Image src={hamburger} alt='hamburger' width={50} height={50}/> }
        customCrossIcon={ <Image src={cross} alt='cross' width={50} height={50}/> }
      right>
        <Link className="menu-item" href='/' passHref><a className='NavLink'>Home</a></Link>
        <Link className="menu-item" href='/project' passHref><a className='NavLink'>Projects</a></Link>
        <Link className="menu-item" href='/blog' passHref><a className='NavLink'>Blogs</a></Link>
        <Link className="menu-item" href='/videos' passHref><a className='NavLink'>Videos</a></Link>
        <Link className="menu-item" href='/vito' passHref><a className='NavLink'>The Dogfather</a></Link>
        <Link className="menu-item" href='/spotify' passHref><a className='NavLink'>Spotify</a></Link>
        <Link className="menu-item" href='/contact' passHref><a className='NavLink'>Contact</a></Link>
      </Menu>
    </Div1>
    <Div2>
      <Link href='/' passHref>
        <Home />
      </Link>
    </Div2>
  </Container>
);

export default Header;
