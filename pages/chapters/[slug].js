import { useRouter } from 'next/router';
import Link from 'next/Link';
import { Layout } from '../../layout/Layout';
import { sanityClient, urlFor, usePreviewSubscription, PortableText } from '../../lib/sanity';
import { SectionTitle } from "../../styles/GlobalComponents"

const chaptersQuery=`*[_type == "chapters" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    cover,
    photo[]{
        _key,
        photo->{
            image
        }
    },
    description
}`;

export default function OneNote({data}) {
const router = useRouter()

if(router.isFallback) {
    return <div>loading...</div>
}
 const { chapters } = data;
 return (
     <Layout>
         <SectionTitle>{chapters.name}</SectionTitle>
         <div className='slugContainer'>
             <img className='vitoImg' src={urlFor(chapters?.cover).url()}/>
                 <ul>
                     {chapters.photo?.map((photo) => (
                     <li className='slugContainer' key={photo._key}>
                         {" "}
                         <img className='vitoImg' src={urlFor(photo?.photo?.image).url()}/>
                     </li>
                     ))}
                 </ul>
                 <PortableText value={chapters?.description}/>
         </div>
         <div className='backToHome'>
            <Link href="/vito">
              <a>← Back to The Life of Vito</a>
            </Link>
        </div>
        <div className='backToHome'>
            <Link href="/">
              <a>← Back to Home</a>
            </Link>
        </div>
     </Layout>
 )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "chapters" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    const {slug} = params;
    const chapters = await sanityClient.fetch(chaptersQuery, {slug});
    return { props: { data: { chapters } } };
}
