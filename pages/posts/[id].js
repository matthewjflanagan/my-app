import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents'

export default function Post({ postData }) {
  return (
    <Section className='blogPage'>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section>
        <SectionTitle className='blogTitle'>{postData.title}</SectionTitle>
        <SectionText>
          <Date dateString={postData.date} />
        </SectionText>
        <div className='blogContent' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className='backToHome'>
            <Link href="/blog">
              <a>← Back to Blogs</a>
            </Link>
        </div>
        <div className='backToHome'>
            <Link href="/">
              <a>← Back to Home</a>
            </Link>
        </div>
      </Section>
    </Section>

  )}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}