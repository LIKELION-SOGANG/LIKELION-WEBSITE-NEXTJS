const API_END_POINT = process.env.NEXT_PUBLIC_BASE_URL

export const getAllMembers = async () => {
  if (!API_END_POINT) {
    return null
  }
  const res = await fetch(`${API_END_POINT}/api/people/`)
  const { data } = await res.json()
  return data
}

export const getAllProjects = async () => {
  if (!API_END_POINT) {
    return null
  }
  const res = await fetch(`${API_END_POINT}/api/project/`)
  const { data } = await res.json()
  return data
}
