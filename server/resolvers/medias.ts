import { UploadApiResponse, v2 } from 'cloudinary'
import { ReadStream, unlinkSync } from 'fs'
import { Media } from '../models'
import { Resolvers } from '../types'

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

interface StoredMedia {
  path: string
  filename: string
  mimetype: string
  size: number
}

export const Medias: Resolvers = {
  Query: {
    allMedia: async () => {
      return await Media.find({})
    },
    // media: async (_, { public_id }) => {
    //   // return await Media.findOne({ _id: id })
    // },
  },
  Mutation: {
    uploadMedia: async (_, { file }: { file: Promise<FileUpload> }) => {
      const { createReadStream } = await file

      const res: UploadApiResponse = await new Promise((resolve, reject) => {
        const upload_stream = v2.uploader.upload_stream(function (
          error,
          result,
        ) {
          if (result) {
            resolve(result)
          } else {
            reject(error)
          }
        })
        createReadStream().pipe(upload_stream)
      })

      return await Media.create(res)
    },
    removeMedia: async (_, { public_id }) => {
      const deletedImage = await Media.findOne({ public_id })
      const res = await v2.uploader.destroy(public_id)
      console.log('res', res)
      await Media.deleteOne({ public_id })
      return deletedImage
    },
  },
}
