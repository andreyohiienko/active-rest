import { DataSource, DataSourceConfig } from 'apollo-datasource'
import { Page } from '../models'

class AdminAPI extends DataSource {
  context: any

  constructor() {
    super()
  }

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context
  }

  async fetchPages() {
    return await Page.find({})
  }
}

export { AdminAPI }
