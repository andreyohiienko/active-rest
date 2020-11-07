import { PageLayout } from 'components'
import { Activities, Hero, Services } from 'layouts'

const IndexPage = () => (
  <PageLayout title="Active Rest">
    <Hero />
    <Services />
    <Activities />
  </PageLayout>
)

export default IndexPage
