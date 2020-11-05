import { Container } from '../components/Container'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Container>
  </Layout>
)

export default IndexPage
