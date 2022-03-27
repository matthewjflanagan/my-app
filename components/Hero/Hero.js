import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Portfolio!
      </SectionTitle>
      <SectionText>
      Below you will find a few of my favorite projects, technologies I am interested in, and a brief history of the past 5 years in my professional life. 
      </SectionText>
      <Button onClick={() => window.location = '/images/Resume.pdf'}>Resume</Button>
      <Button onClick={() => window.location = '/images/certificate.pdf'}>Certifcate</Button>
    </LeftSection>
  </Section>
);

export default Hero;