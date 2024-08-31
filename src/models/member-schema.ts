import mongoose, { Schema } from 'mongoose'

export const MemberSchema = new Schema({
  이름: String,
  기수: String,
  포지션: String
})

export const Member =
  mongoose.models.Member ?? mongoose.model('Member', MemberSchema)
