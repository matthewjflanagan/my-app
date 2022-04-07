import React from 'react';
import { Player } from 'video-react';
import { Layout } from '../layout/Layout';
import '../node_modules/video-react/dist/video-react.css';

export default function Videos(){
  return (
  <Layout>
    <Player
      playsInline
      poster="/images/heroku.PNG"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  </Layout>);
}