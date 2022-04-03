import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { slide as Menu } from 'react-burger-menu'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, SocialContainer, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Menu right>
        <Link href={`/pages/Blogs/blog`}>
          <a>Blogs</a>
        </Link>
        <Link id="videos" className="menu-item" href="/Videos" passHref><NavLink>Videos</NavLink></Link>
        <Link id="contact" className="menu-item" href="/Contact" passHref><NavLink>Contact</NavLink></Link>
      </Menu>
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
  </Container>
);

export default Header;
