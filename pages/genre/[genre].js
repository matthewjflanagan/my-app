import React from 'react';
import Link from 'next/link';
import { Layout } from '../../layout/Layout';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

export default function Genre({genre, tracks}){
  return (
  <Layout>
    <Section className='spotifyContainer'>
        <SectionTitle className='spotifyGenres'>{genre}</SectionTitle>
        <SectionText>Recommended Tracks</SectionText>
        <ul className='genreContainer'>
        {tracks.map(track => <li key={track.id} className='spotifyGenres'>{track.name}</li>)}
        </ul>
    </Section>
        <div className='backToHome'>
            <Link href="/spotify" passHref>
              <a>← Back to Spotify</a>
            </Link>
        </div>
        <div className='backToHome'>
            <Link href="/" passHref>
              <a>← Back to Home</a>
            </Link>
        </div>
  </Layout>
  );
}

export async function getStaticPaths() {
    const data = await fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds",
    {
        headers:{
            Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
        }
    }).then(response => response.json());

    const genrePaths = data.genres.map( genre => { return {params: { genre }} });

    return {
        paths: genrePaths,
        fallback: false
    };
}
 
export async function getStaticProps({params}) {

    const data = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${params.genre}`,
    {
        headers:{
            Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
        }
    }).then(response => response.json());

    return {
        props: {
            genre: params.genre,
            tracks: data.tracks
        }
    }
}