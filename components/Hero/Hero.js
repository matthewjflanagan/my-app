import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import HomepageLinks from '../HomepageLinks/HomepageLinks';
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import vito1 from "../../public/images/vito1.jpg";
import vito2 from "../../public/images/vito2.jpg";
import vito3 from "../../public/images/vito3.jpg";
import vito4 from "../../public/images/vito4.jpg";
import vito5 from "../../public/images/vito5.jpg";

const images = [vito1, vito2, vito3, vito4, vito5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Hero = (props) => (
  <Section>
    <HomepageLinks />
      <SectionTitle>
        Matthew Flanagan Portfolio
      </SectionTitle>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <Image 
            key={index} 
            width='250'
            height='250'
            className='vitoImg'
            src={each} />
          ))}
        </Zoom>
      </div>
      <SectionText>
      Below you will find a few of my favorite projects, technologies I am interested in, and a brief history of the past 5 years in my professional life. 
      </SectionText>
      <Button onClick={() => window.location = '/images/Resume.pdf'}>Resume</Button>
      <Button onClick={() => window.location = '/images/certificate.pdf'}>Georgia Tech Certificate</Button>
      <Button onClick={() => window.location = '/images/USC_eDiploma.pdf'}>USC Diploma</Button>
  </Section>
);

export default Hero;