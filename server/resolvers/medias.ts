import { IResolvers } from 'apollo-server'
import mongoose from 'mongoose'
import { createWriteStream, createReadStream, mkdir } from 'fs'
import { MediaDoc } from '../models'
const Media = mongoose.model('Media')

interface FetchMedia {
  dataSources: {
    admin: {
      fetchAllMedia(): Promise<MediaDoc[]>
    }
  }
}

interface Media {
  path?: string
  filename: string
  mimetype: string
}

const storeUpload = async ({ filename, mimetype }: Media) => {
  const path = `images/${filename}`
  return new Promise<Media>((resolve, reject) => {
    createReadStream(path)
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ path, filename, mimetype }))
      .on('error', reject)
  })
}

const processUpload = async (upload: Media) => {
  const { filename, mimetype } = await upload
  const file = await storeUpload({ filename, mimetype })
  return file
}

export const Medias: IResolvers<any, FetchMedia> = {
  // Query: {
  //   allMedia: async (_, __, { dataSources }) => {
  //     const res = await dataSources.admin.fetchAllMedia()
  //     return Array.isArray(res) ? res : []
  //   },
  //   media: async (_, { id }) => {
  //     return await Media.findOne({ _id: id })
  //   },
  // },
  Mutation: {
    uploadMedia: async (_, { file }) => {
      // const { stream, filename, mimetype, encoding } = await file
      console.log('file', await file)
      // mkdir('images', { recursive: true }, (err) => {
      //   if (err) {
      //     throw err
      //   }
      // })

      // const { name } = await file
      // console.log('name', name)

      // await processUpload(file)
      // await Media.create(upload)
      // console.log('upload', upload)
      return 'test'
    },
  },
}
