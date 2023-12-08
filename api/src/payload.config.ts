import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

const { MONGODB_USER, MONGODB_PASSWORD } = process.env
const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@db:27017/`

export default buildConfig({
    db: mongooseAdapter({
        url,
    }),
    editor: lexicalEditor({})
})