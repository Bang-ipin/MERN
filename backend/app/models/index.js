import mongoose from 'mongoose'
import ProductModel from './products/index.js'
import CategoryModel from './category/index.js'
import UserModel from './user/index.js'

mongoose.Promise    = global.Promise

const db = {}
db.products         = ProductModel(mongoose)
db.category         = CategoryModel(mongoose)
db.user             = UserModel(mongoose)

export default db