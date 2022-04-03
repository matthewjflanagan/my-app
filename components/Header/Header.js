import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SocialContainer, Span } from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", aligItems: "center", color: "white"}}>
          <DiCssdeck size="3rem" color="#3e412e" /><Span>Matthew Flanagan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
      <Menu>
        <Link id="blogs" className="menu-item" href="/Blogs" passHref>Blogs</Link>
        <Link id="videos" className="menu-item" href="/Videos" passHref>Videos</Link>
        <Link id="contact" className="menu-item" href="/Contact" passHref>Contact</Link>
      </Menu>
      </li>
    </Div2>
    <Div3>
    <SocialContainer>
      <SocialIcons href="https://github.com/matthewjflanagan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/matthew-flanagan-13253a223/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://youtube.com">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      </SocialContainer>
    </Div3>
    <Button id="react-burger-menu-btn">Open Menu</Button>
  </Container>
);

export default Header;
