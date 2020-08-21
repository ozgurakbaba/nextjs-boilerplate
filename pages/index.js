import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout'
import { getAllPosts } from '../lib/posts'

import utils from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utils.headingMd}>
        <h3>Pragmatic Dreamer</h3>
        <p>(This is a sample website - you’ll be building a site like this on <Link href="/blog/first-post"><a>our Next.js tutorial</a></Link>.)</p>
      </section>
      <section className={`${utils.headingMd} ${utils.padding1px}`}>
        <h2 className={utils.headingLg}>All Posts</h2>
        <ul className={utils.list}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li className={utils.listItem} key={id}>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a></Link>
              <br />
              <small className={utils.lightText}>
                  {date}
              </small>
              <br />
              {author}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getAllPosts()
  return {
    props: {
      allPostsData
    }
  }
}