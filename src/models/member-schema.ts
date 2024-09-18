import mongoose, { Schema } from 'mongoose'

export const MemberSchema = new Schema({
  _id: String,
  name: String,
  generation: String
})

export const Member =
  mongoose.models.Member ?? mongoose.model('Member', MemberSchema)
