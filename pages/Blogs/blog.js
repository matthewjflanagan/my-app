import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Section, SectionTitle } from '../../styles/GlobalComponents'

export default function Blog() {
  return (
  <Section>
  <Head>
    <SectionTitle>Blogs</SectionTitle>
  </Head>
  <section className={utilStyles.headingMd}>
    <p>Welcome to my blogs posts!</p>
  </section>
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  </section>
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