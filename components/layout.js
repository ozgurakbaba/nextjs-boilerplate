import Head from 'next/head'
import Link from 'next/link'

import styles from './layout.module.css'
import utils from '../styles/utils.module.css'

const name = 'Ozgur Akbaba'
export const siteTitle = 'Industry Insider - Next Blog'

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta
                name="keywords"
                content="Industry Insider, Insider, Market Research, Latest News"
                />
                <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
        
            <header className={styles.header}>
            {home ? (
            <>
                <img
                src="/assets/images/profile-me.jpg"
                className={`${styles.headerHomeImage} ${utils.borderCircle}`}
                alt={name}
                />
                <h1 className={utils.heading2Xl}>{name}</h1>
            </>
            ) : (
            <>
                <Link href="/">
                <a>
                    <img
                    src="/assets/images/profile-me.jpg"
                    className={`${styles.headerImage} ${utils.borderCircle}`}
                    alt={name}
                    />
                </a>
                </Link>
                <h2 className={utils.headingLg}>
                <Link href="/">
                    <a className={utils.colorInherit}>{name}</a>
                </Link>
                </h2>
            </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )}
        </div>
    ) 
}

export default Layout