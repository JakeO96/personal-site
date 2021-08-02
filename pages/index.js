import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jake O</title>
        <meta name="description" content="Jake O&apos;Leary&apos;s personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my website!</a>
        </h1>

        <p className={styles.description}>
          Hi, my name is Jake O'Leary and this is where I will post my
          software projects, my thoughts and knowledge to a blog,
          and various works of writing.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Software Projects &rarr;</h2>
          </a>

          <a href="#" className={styles.card}>
            <h2>Blog &rarr;</h2>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Poetry &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
