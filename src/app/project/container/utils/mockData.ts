import mockImage1 from '../mockImage/mockImg1.png'
import mockImage2 from '../mockImage/mockImg2.png'
import mockImage3 from '../mockImage/mockImg3.png'
import mockImage4 from '../mockImage/mockImg4.png'
import mockImage5 from '../mockImage/mockImg5.png'
import mockImage6 from '../mockImage/mockImg6.png'

export type Project = {
  id: number
  title: string
  generation: string
  year: string
  imgUrl: string
}

export const tabList = [
  { text: '6th', isSelected: false },
  { text: '7th', isSelected: false },
  { text: '8th', isSelected: false },
  { text: '9th', isSelected: false },
  { text: '10th', isSelected: false },
  { text: '11th', isSelected: true }
]

export const projectList: Project[] = [
  {
    id: 1,
    title: 'YouCheck',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage1.src
  },
  {
    id: 2,
    title: 'Wander',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage2.src
  },
  {
    id: 3,
    title: 'YouCheck',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage3.src
  },
  {
    id: 4,
    title: 'Wander',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage4.src
  },
  {
    id: 5,
    title: 'YouCheck',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage5.src
  },
  {
    id: 6,
    title: 'Wander',
    generation: '11th',
    year: '2022',
    imgUrl: mockImage6.src
  }
]
