import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

export default function Index() {

  return (
    <Layout>
      <Head>
        <title>Next.js Blog with {CMS_NAME}</title>
      </Head>
      <Container>
        <h1>Hello World!</h1>
      </Container>
    </Layout>
  )
}