import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { viteBundler } from '@payloadcms/bundler-vite'

import Media from './payload/collections/Media'
import Products from './payload/collections/Products'
import Users from './payload/collections/Users'

const { DATABASE_URI } = process.env
const url = `${DATABASE_URI}`

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler({})
  },
  collections: [Media, Products, Users],
  cors: [
    'http://localhost:8000'
  ],
  db: mongooseAdapter({
    url
  }),
  editor: lexicalEditor({}),
})
