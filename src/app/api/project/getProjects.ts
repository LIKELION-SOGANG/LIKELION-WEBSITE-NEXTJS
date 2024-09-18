import { connectDb } from '@/libs/connect-db'
import { Project } from '@/models/project-schema'

export const getProjects = async () => {
  await connectDb()
  const data = await Project.find()
  return data
}
