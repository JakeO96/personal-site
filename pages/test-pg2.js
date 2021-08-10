import Layout, { siteTitle } from '../components/Layout'
import Head from 'next/head'

export default function TestPg2() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1> Test Page 2</h1>
    </Layout>
  );
}