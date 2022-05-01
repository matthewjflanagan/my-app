import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:910-308-1328">910-308-1328</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:mattlflanagan67@gmail.com">mattlflanagan67@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Leave it better than you found it.</Slogan>
        </CompanyContainer>
          <SocialContainer>
            <Link href="https://github.com/matthewjflanagan" passHref>
              <a className='SocialIcons'><AiFillGithub size="3rem" /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/matthew-flanagan-13253a223/" passHref>
              <a className='SocialIcons'><AiFillLinkedin size="3rem" /></a>
            </Link>
            <Link href="https://youtube.com" passHref>
              <a className='SocialIcons'><AiFillYoutube size="3rem" /></a>
            </Link>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
