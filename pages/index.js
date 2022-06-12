import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'

import { getUsersBlogs } from '../lib/xmlrpc-api'

export default function Index({blogInfo}) {
  // console.log("WORDPRESS_API_URL from env=>", process.env.WORDPRESS_API_URL)
  return (
    <Layout>
      <Head>
        <title>Next.js Blog with {CMS_NAME}</title>
      </Head>
      <Container>
        <h1>Hello World!</h1>
        <p>This is blog info:{blogInfo}</p>
      </Container>
    </Layout>
  )
}

export async function getBlogInfo() {
    console.log("getBlogInfo=>")
    const blogInfo = await getUsersBlogs()

    return {
        props: { blogInfo },
        revalidate: 10,
    }
}