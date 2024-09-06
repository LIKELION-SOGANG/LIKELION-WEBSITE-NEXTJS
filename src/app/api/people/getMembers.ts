import { connectDb } from '@/libs/connect-db'
import { Member } from '@/models/member-schema'

export const getMembers = async () => {
  const res = await connectDb()
  const data = await Member.find()
  return data
}
