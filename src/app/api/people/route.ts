import { NextRequest } from 'next/server'
import { getMembers } from '../../../libs/getMembers'

export async function GET(request: NextRequest) {
  try {
    const data = await getMembers()
    console.log(data)
    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
