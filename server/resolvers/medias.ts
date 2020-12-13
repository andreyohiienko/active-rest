import { IResolvers } from 'apollo-server'
import mongoose from 'mongoose'
import { createWriteStream, ReadStream, mkdir } from 'fs'
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

interface FileUpload {
  filename: string
  mimetype: string
  encoding: string
  createReadStream(): ReadStream
}

interface StoreUpload {
  stream: ReadStream
  filename: string
  mimetype: string
}

const storeUpload = async ({ stream, filename, mimetype }: StoreUpload) => {
  const path = `images/${filename}`
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ path, filename, mimetype }))
      .on('error', reject),
  )
}

const processUpload = async (uploads: FileUpload[]) => {
  const files = await uploads.map(async (upload) => {
    const { createReadStream, filename, mimetype } = await upload
    const stream = createReadStream()
    return await storeUpload({ stream, filename, mimetype })
  })
  return files
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
    uploadMedia: async (_, { files }: { files: FileUpload[] }) => {
      mkdir('images', { recursive: true }, (err) => {
        if (err) {
          throw err
        }
      })

      // Process upload
      const upload = await processUpload(files)
      return upload
    },
  },
}