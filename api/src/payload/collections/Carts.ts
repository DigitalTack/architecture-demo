import { type CollectionConfig } from 'payload/types'


const Carts: CollectionConfig = {
  slug: 'carts',
  admin: {
    hidden: true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'products',
      type: 'relationship',
      required: false,
      relationTo: 'products',
      hasMany: true
    }
  ]
}

export default Carts