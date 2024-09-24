import { ProjectSchema } from './../../../../models/project-schema';

export type Project = {
  _id: number
  generation: number
  description:string
  github:string
  imageUrl: string
  member: string
  project: string
  team: string
}

export default function chunkArray(
  array: Project[],
  size: number
): Project[][] {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
