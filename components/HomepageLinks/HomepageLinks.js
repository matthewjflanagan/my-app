import React from 'react';
import { Div1, Div2, LinkContainer, NavLink, LinkList } from './HomepageLinksStyles';
import Link from 'next/link';
import Image from 'next/image'
import vito from '../../public/images/vitoIcon.png'
import webpage from '../../public/images/webpageIcon.png'
import blog from '../../public/images/blogIcon.png'
import video from '../../public/images/videoIcon.png'
import contact from '../../public/images/contactIcon.png'


var Vito = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={vito} alt='vitoIcon' width={50} height={82} />
    </a>
  )
})

var Webpage = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={webpage} alt='webpageIcon' width={48} height={48} />
    </a>
  )
})

var Blog = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={blog} alt='blogIcon' width={48} height={48} />
    </a>
  )
})

var Video = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={video} alt='videoIcon' width={48} height={48} />
    </a>
  )
})

var Contact = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image className='vitoIcon'  src={contact} alt='contactIcon' width={48} height={48} />
    </a>
  )
})

const HomepageLinks = () => (
  <>
  <Div1>
    <LinkContainer>
      <Link href='/project' passHref>
      <NavLink><Webpage />Projects</NavLink>
      </Link>
      <Link href='/blog' passHref>
      <NavLink><Blog />Blogs</NavLink>
      </Link>
      <Link href='/videos' passHref>
      <NavLink><Video />Videos</NavLink>
      </Link>
      <Link href='/vito' passHref>
      <NavLink><Vito />Vito</NavLink>
      </Link>
      <Link href='/contact' passHref>
      <NavLink><Contact />Contact Me</NavLink>
      </Link>
    </LinkContainer>
    </Div1>
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
  </>
);

export default HomepageLinks;