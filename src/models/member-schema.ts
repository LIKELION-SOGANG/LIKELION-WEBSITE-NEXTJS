import mongoose, { Schema } from 'mongoose'

export const MemberSchema = new Schema({
  _id: String,
  name: String,
  generation: Number,
  type: String
})

export const Member =
  mongoose.models.Member ?? mongoose.model('Member', MemberSchema)
