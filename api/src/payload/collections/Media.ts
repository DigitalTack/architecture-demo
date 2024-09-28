import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'small',
        width: 200,
        height: 200,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'large',
        width: 800,
        height: 800,
        position: 'centre',
      },
      {
        name: 'full',
        width: 1024,
        height: undefined,
        position: 'centre',
      }
    ],

    adminThumbnail: 'medium',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  access: {
    read: () => true
  },
}

export default Media
