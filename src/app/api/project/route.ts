import { NextRequest } from 'next/server'
import { getProjects } from './getProjects'

export async function GET(request: NextRequest) {
  try {
    const data = await getProjects()
    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
