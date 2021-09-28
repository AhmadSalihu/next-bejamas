import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isFeatured: { type: Boolean, required: true, default: false },
    featuredImage: { type: String, default: false },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    currency: {type: String, required: true },
    bestseller: {type: Boolean, required: true, default: false },
    details: {
      dimmentions: { 
        width: { type: Number, required: false},
        height: {type: Number, rquired: false},
        recommendations: {
          image: {type: String, required: true, default: false},
        },
      },
     },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;