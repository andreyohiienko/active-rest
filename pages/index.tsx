import Link from 'next/link'
import { Container, PageLayout } from '@components'

const IndexPage = () => (
  <PageLayout title="Home | Next.js + TypeScript Example">
    <Container>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Container>
  </PageLayout>
)

export default IndexPage
