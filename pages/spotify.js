import React from 'react';
import Link from 'next/link';
import { Layout } from '../layout/Layout';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import axios from 'axios';

export default function Spotify({ genres }){
  return (
  <Layout>
    <Section className='spotifyContainer'>
        <SectionTitle>Genre List</SectionTitle>
        <ul className='genreContainer'>
            {genres.map(genre => 
                <li className='spotifyGenres' key={genre}>
                    <Link href={`/genre/${genre}`} passHref>
                        <a>
                            {genre}
                        </a>
                    </Link>    
                </li>)}
        </ul>
    </Section>
    <div className='backToHome'>
        <Link href="/" passHref>
            <a>← Back to Home</a>
        </Link>
    </div>
  </Layout>
  );
}

export async function getStaticProps() {

    const data = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",
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