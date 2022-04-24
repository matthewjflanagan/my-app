import React from 'react';
import { Layout } from '../../layout/Layout';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Track from '../../components/Track/track';

export default function Genre({genre, tracks}){
  return (
  <Layout>
    <Section className='spotifyContainer'>
        <SectionTitle>Genre: {genre}</SectionTitle>
        <SectionText>Recommended Artists</SectionText>
        <ul>
        {tracks.map(track => <Track key={track.id} track={track} />)}
        </ul>
    </Section>
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

    const genrePaths = data.genres.map(genre => { return {params:{ genre }}});

    return {
        paths: genrePaths,
        fallback: false
    };
}

export async function getStaticProps({params}) {

    console.log(params)

    const data = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${params.genre}`,
    {
        headers:{
            Authorization: `Bearer ${process.env.SPOTIFY_OAUTH_TOKEN}`
        }
    }).then(response => response.json());

    console.log(data);

    return {
        props: {
            genre: params.genre,
            tracks: data.tracks
        }
    }
}