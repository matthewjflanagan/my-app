import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents'

export default function Post({ postData }) {
  return (
    <Section>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section>
        <SectionTitle>{postData.title}</SectionTitle>
        <SectionText>
          <Date dateString={postData.date} />
        </SectionText>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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