const API_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}`

export const getAllMembers = async () => {
  const res = await fetch(`${API_END_POINT}/api/people`)
  const { data } = await res.json()
  return data
}
