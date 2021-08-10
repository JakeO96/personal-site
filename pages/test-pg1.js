import Layout, { siteTitle } from '../components/Layout'
import Head from 'next/head'

export default function TestPg1() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Test page 1</h1>
    </Layout>
  );
}