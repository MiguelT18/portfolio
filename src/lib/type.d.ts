export interface FormData {
  name: string
  email: string
  message: string
  [key: string]: string
}

export interface Project {
  name: string
  description: string
  image: ImageMetadata
  reference: string
}

interface Skill {
  skill: string
  icon: string
}

export interface SkillsCategory {
  category: string
  list_skill: Skill[]
}
