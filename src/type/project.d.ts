export type Project = {
  _id: string
  generation: number
  description: string
  github: string
  imageUrl: string
  member: string
  project: string
  team: string
}

export interface TabBtnProps {
  generation: number
  isSelected: boolean
  onClickTab: (generation: number) => void
}

export interface ModalPageProps {
  params: {
    id: string
  }
}
