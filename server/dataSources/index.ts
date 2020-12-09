import { DataSource } from 'apollo-datasource'
import { Page } from '../models'

class AdminAPI extends DataSource {
  async fetchPages() {
    return await Page.find({})
  }
}

export { AdminAPI }
