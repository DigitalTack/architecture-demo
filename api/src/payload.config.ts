import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { viteBundler } from '@payloadcms/bundler-vite'

import Users from './payload/collections/Users'

const { DATABASE_URI } = process.env
const url = `${DATABASE_URI}`

export default buildConfig({
    admin: {
        user: Users.slug,   
        bundler: viteBundler({}),
    },
    collections: [Users],
    cors: '*',
    db: mongooseAdapter({
        url,
    }),
    editor: lexicalEditor({})
})