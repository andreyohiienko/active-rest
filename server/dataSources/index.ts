import { DataSource } from 'apollo-datasource'
import { Slide, Page, Media } from '../models'

class AdminAPI extends DataSource {
  async fetchPages() {
    return await Page.find({})
  }
  async fetchAllMedia() {
    return await Media.find({})
  }
  async fetchSlides() {
    return await Slide.find({})
  }
}

export { AdminAPI }
