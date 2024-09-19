import mongoose, { Schema } from 'mongoose'

export const ProjectSchema = new Schema({
  _id: String,
  description: String,
  github: String,
  imageUrl: String,
  member: String,
  project: String,
  team: String
})

export const Project =
  mongoose.models.Project ?? mongoose.model('Project', ProjectSchema)
