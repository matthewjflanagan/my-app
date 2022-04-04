import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Section, SectionTitle, SectionText } from '../styles/GlobalComponents'
import { TagList } from '../components/Projects/ProjectsStyles'

export default function Blog({ allPostsData }) {
  return (
  <Section>
  <Head>
    <SectionTitle>Welcome to my blogs posts!</SectionTitle>
  </Head>
  <SectionText>
    <SectionTitle>Blog</SectionTitle>
    <TagList>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </TagList>
  </SectionText>
</Section>
)};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}