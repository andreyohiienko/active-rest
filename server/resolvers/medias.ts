import { v2 } from 'cloudinary'
import {
  createWriteStream,
  ReadStream,
  mkdir,
  unlinkSync,
  existsSync,
} from 'fs'
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

  let size = 0

  return new Promise((resolve, reject) =>
    stream
      .on('data', (chunk) => (size += chunk.length))
      .pipe(createWriteStream(path))
      .on('finish', () =>
        resolve({ size, path, filename: newFilename, mimetype }),
      )
      .on('error', reject),
  )
}

const processUpload = async (upload: FileUpload) => {
  const { createReadStream, filename, mimetype } = await upload

  const stream = createReadStream()
  return await storeUpload({ stream, filename, mimetype })
}

export const Medias: Resolvers = {
  Query: {
    allMedia: async () => {
      return await Media.find({})
    },
    media: async (_, { id }) => {
      return await Media.findOne({ _id: id })
    },
  },
  Mutation: {
    uploadMedia: async (_, { file }: { file: FileUpload }) => {
      // console.log('file', await file)

      const { createReadStream } = await file

      const upload_stream = v2.uploader.upload_stream(
        { tags: 'basic_sample' },
        function (err, image) {
          console.log()
          console.log('** Stream Upload')
          if (err) {
            console.warn(err)
          }
          console.log('* Same image, uploaded via stream')
          console.log('* ' + image?.public_id)
          console.log('* ' + image?.url)
        },
      )
      createReadStream().pipe(upload_stream)

      mkdir('images', { recursive: true }, (err) => {
        if (err) {
          throw err
        }
      })

      // Process upload
      const upload = await processUpload(file)
      return await Media.create(upload)
    },
    removeMedia: async (_, { id, name }) => {
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
