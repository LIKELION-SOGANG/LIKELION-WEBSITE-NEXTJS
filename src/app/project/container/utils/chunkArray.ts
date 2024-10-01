import { Project } from '@/type/project'

const nullElement: Project = {}

export default function chunkArray(
  array: Project[],
  size: number
): Project[][] {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    if (i + size <= array.length) {
      result.push(array.slice(i, i + size))
    } else {
      const newChunk = array.slice(i, i + size)
      for (let j = 0; j < i + size - array.length; j++) {
        newChunk.push(nullElement)
      }
      result.push(newChunk)
    }
    // result.push(array.slice(i, i + size))
  }
  return result
}
