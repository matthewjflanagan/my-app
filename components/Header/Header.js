import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", aligItems: "center", color: "white"}}>
          <DiCssdeck size="3 rem" color="#3e412e" /><Span>Matthew Flanagan</Span>
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
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/matthewjflanagan">
        <AiFillGithub size="3 rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/matthew-flanagan-13253a223/">
        <AiFillLinkedin size="3 rem" />
      </SocialIcons>
      <SocialIcons href="https://youtube.com">
        <AiFillYoutube size="3 rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
