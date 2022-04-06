import React from 'react';
import { Div2, LinkContainer, NavLink } from './HomepageLinksStyles';
import Link from 'next/link';

const HomepageLinks = () => (
  <Div2>
  <LinkContainer>
  <li>
      <Link href="#about" passHref>
        <NavLink>About</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech" passHref>
        <NavLink>Technologies</NavLink>
      </Link>
    </li> 
    <li>
      <Link href="#accomplishments" passHref>
        <NavLink>Achievements</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#contact" passHref>
        <NavLink>Contact Information</NavLink>
      </Link>
    </li>
    </LinkContainer>
  </Div2>
);

export default HomepageLinks;