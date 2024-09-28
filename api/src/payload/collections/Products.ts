import { type CollectionConfig } from 'payload/types'


const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media'
    }
  ],
  access: {
    read: () => true
  },
}

export default Products
