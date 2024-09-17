import { NextRequest } from 'next/server'
import { getMembers } from './getMembers'

export async function GET(request: NextRequest) {
  try {
    const data = await getMembers()
    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
