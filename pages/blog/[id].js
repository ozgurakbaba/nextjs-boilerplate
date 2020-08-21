import Head from 'next/head'

import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'
import utils from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title} | Next Blog</title>
            </Head>
            <article>
                <h1 className={utils.headingXl}>{postData.title}</h1>
                <div className={utils.lightText}>
                    <Date dateStr={postData.date} /> 
                    - {postData.author} 
                </div>
                
                <hr />
                <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
            </article>
        </Layout>
    )
}

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