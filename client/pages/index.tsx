import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'

const IndexPage = () => (
  <PageLayout title="Active Rest">
    <Hero />
    <Services />
    <Activities />
    <Approach />
  </PageLayout>
)

export default IndexPage
