import React from 'react';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents'

export default function Videos(){
  return (
  <Layout>
    <Section className='videoContainer'>
      <iframe className='videoFrame' src="https://www.youtube.com/embed/G-K8r1NCb0k" title="YouTube video player" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe className='videoFrame' src="https://www.youtube.com/embed/0VEF-8gZBy4" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe className='videoFrame' src="https://www.youtube.com/embed/5Gi1uZu9tWE" title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Section>
  </Layout>
  );
}