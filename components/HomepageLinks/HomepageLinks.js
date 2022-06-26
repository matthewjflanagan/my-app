import React from 'react';
import { Div2, LinkContainer, NavLink, LinkList } from './HomepageLinksStyles';
import Link from 'next/link';

const HomepageLinks = () => (
  <Div2>
  <LinkContainer>
    <LinkList>
      <Link href="#tech" passHref>
        <NavLink>Technical Skills</NavLink>
      </Link>
    </LinkList> 
    <LinkList>
      <Link href="#about" passHref>
        <NavLink>Professional Career</NavLink>
      </Link>
    </LinkList>
    </LinkContainer>
  </Div2>
);

export default HomepageLinks;