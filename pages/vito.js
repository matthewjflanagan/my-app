import { Layout } from '../layout/Layout';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient, urlFor } from "../lib/sanity"
import { SectionTitle, SectionText } from "../styles/GlobalComponents"

const chaptersQuery = `*[_type == "chapters"] {
    _id,
    name,
    slug,
    cover{
      asset->{
        _id,
        url
      }
    }
  }`;

export default function Contact( { chapters }){
  return (
    <Layout>
        <Head>
            <title>The Life Of Vito</title>
        </Head>
        <SectionTitle>The Life Of Vito</SectionTitle>
      <ul>
        {chapters?.length > 0 && chapters.map((chapters) => (
          <li className='chapters-list' key={chapters._id}>
            <SectionText>{chapters.name}</SectionText>
            <Link href={`/chapters/${chapters.slug.current}`}>
            <a className='vitoLink'>
              <img className='vitoImg' alt='chapter cover' src={urlFor(chapters.cover).url()} />
            </a>
            </Link>
          </li>
        ))}
      </ul>
        <div className='backToHome'>
            <Link href="/">
              <a>← Back to Home</a>
            </Link>
        </div>
    </Layout>
    )
}

export async function getStaticProps() {
    const chapters = await sanityClient.fetch(chaptersQuery)
    return {
      props: {
        chapters
      }
    };
  }