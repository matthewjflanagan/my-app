import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { Layout } from '../layout/Layout';
import Date from '../components/date'
import { Section, SectionTitle } from '../styles/GlobalComponents';
import { TagList } from '../components/Projects/ProjectsStyles'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
  <Section>
  <Head>
    <title>Blogs</title>
  </Head>
  <SectionTitle className='blogTitle'>Blogs</SectionTitle>
    <TagList className='blogContainer'>
      {allPostsData.map(({ id, date, title }) => (
        <li className='blogPost' key={id}>
          <Link href={`/posts/${id}`}>
            <a className='blogLink'>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </TagList>
    <div className='backToHome'>
      <Link href="/">
        <a>← Back to Home</a>
      </Link>
    </div>
</Section>
</Layout>
)};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}