import { DataSource } from 'apollo-datasource'
import { Page } from '../models'
import { Media } from '../models'

class AdminAPI extends DataSource {
  async fetchPages() {
    return await Page.find({})
  }
  async fetchAllMedia() {
    return await Media.find({})
  }
}

export { AdminAPI }
