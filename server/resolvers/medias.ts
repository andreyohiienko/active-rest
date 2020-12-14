import { IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
import {
  createWriteStream,
  ReadStream,
  mkdir,
  unlinkSync,
  existsSync,
} from 'fs'
import { MediaDoc } from '../models'

const Media = mongoose.model('Media')

interface FetchMedia {
  dataSources: {
    admin: {
      fetchAllMedia(): Promise<MediaDoc[]>
    }
  }
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

interface StoredMedia {
  path: string
  filename: string
  mimetype: string
}

const checkUniqueness = (filename: string) => {
  let newFilename = filename

  while (existsSync(`./images/${newFilename}`)) {
    const regexp = /(.+?)(\.[^.]*$|$)/
    const hasNumber = /\(([0-9]+)\)(\.[^.]*$|$)/
    if (hasNumber.test(newFilename)) {
      newFilename = newFilename.replace(
        hasNumber,
        (_, g1, g2) => `(${++g1})${g2}`,
      )
    } else {
      newFilename = newFilename.replace(regexp, '$1 (1)$2')
    }
  }

  return newFilename
}

const storeUpload = async ({
  stream,
  filename,
  mimetype,
}: StoreUpload): Promise<StoredMedia> => {
  const newFilename = checkUniqueness(filename)
  const path = `images/${newFilename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ path, filename: newFilename, mimetype }))
      .on('error', reject),
  )
}

const processUpload = async (upload: FileUpload) => {
  const { createReadStream, filename, mimetype } = await upload

  const stream = createReadStream()
  return await storeUpload({ stream, filename, mimetype })
}

export const Medias: IResolvers<any, FetchMedia> = {
  Query: {
    allMedia: async (_, __, { dataSources }) => {
      const res = await dataSources.admin.fetchAllMedia()
      return Array.isArray(res) ? res : []
    },
    media: async (_, { id }) => {
      return await Media.findOne({ _id: id })
    },
  },
  Mutation: {
    uploadMedia: async (_, { file }: { file: FileUpload }) => {
      mkdir('images', { recursive: true }, (err) => {
        if (err) {
          throw err
        }
      })

      // Process upload
      const upload = await processUpload(file)
      await Media.create(upload)
      return upload
    },
    removeMedia: async (_, { id, name }) => {
      console.log('id', id)
      console.log('name', name)
      const deletedImage = await Media.findOne({ _id: id })
      try {
        unlinkSync(`./images/${name}`)
      } catch (error) {
        console.log('error', error)
      }
      await Media.deleteOne({ _id: id })
      return deletedImage
    },
  },
}
