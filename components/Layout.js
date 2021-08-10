import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';

export const siteTitle = 'For Scraper Testing At The Moment';

export default function Layout({ children }) {
  return (
    <main className={styles.container}>
      <Head>
        <meta name="description"
              content="Find resources and teachers to learn Mandarin Chinese"
        />
        <link rel="icon" href={"/favicon.ico"} />
        <meta name={"og:title"} content={siteTitle} />
        <meta name={"twitter:card"} content={"summary_large_image"} />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>

    </main>

  );
}