import { connectDb } from '@/libs/connect-db'
import { Member } from '@/models/member-schema'

export const getMembers = async () => {
  await connectDb()
  const data = await Member.find()
  return data
}
