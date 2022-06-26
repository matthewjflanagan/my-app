import React from 'react';
import Link from 'next/link';
import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';

export default function Spotify({ genres }){
  return (
  <Layout>
    <Section className='spotifyContainer'>
        <SectionTitle>Genre List</SectionTitle>
        <ul>
            {genres.map( genre => 
                <li key={genre}>
                    <Link href={`/genre/${genre}`}>
                        <a>
                            {genre}
                        </a>
                    </Link>    
                </li>)}
        </ul>
    </Section>
  </Layout>
  );
}

export async function getStaticProps() {

    const data = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds",
    {
        headers:{
            Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
        }
    }).then(response => response.json());

    console.log(data)
    return {
        props: {
            genres: data.genres
        }
    }
}