import AltavidaImage from "@/public/images/portfolio/altavida.jpg"
import HotmartCourseImage from "@/public/images/portfolio/hotmart_course.jpg"
import DrSimonsImage from "@/public/images/portfolio/drsimons_webapp.jpg"
import BiopharmaImage from "@/public/images/portfolio/biopharma.jpg"
import NestorImage from "@/public/images/portfolio/nestor_arce.jpg"

import type { SkillsCategory, Project } from "@/lib/type.d.ts"

export const projects: Project[] = [
  {
    name: "Alta Vida",
    description:
      "Aplicación web desarrollada para una empresa que se dedica al desarrollo inmobiliario.",
    image: AltavidaImage,
    reference: "https://altavidasrl.vercel.app/",
  },
  {
    name: "Curso Programación",
    description:
      "Landing page desarrollada para un proyecto personal dedicado a la venta de un curso digital de programación.",
    image: HotmartCourseImage,
    reference: "https://hotmart-course.vercel.app/",
  },
  {
    name: "Dr. Cristian Simons",
    description:
      "Aplicación web desarrollada para las consultas y la newsletter del Dr.Simons.",
    image: DrSimonsImage,
    reference: "https://drsimons-app-miguelt18s-projects.vercel.app/",
  },
  {
    name: "BIO Pharma",
    description:
      "Landing page desarrollada para una empresa que se dedica a la elaboración de productos naturales para la diabetes, rendimiento deportivo, intimidad, etc.",
    image: BiopharmaImage,
    reference: "https://biopharma-landing.vercel.app/",
  },
  {
    name: "Néstor Árce",
    description:
      "Landing page desarrollada para un entrenador personal con experiencia en la nutrición y biomecánica de los ejercicios.",
    image: NestorImage,
    reference: "https://nestorarce.vercel.app/",
  },
]

export const skills: SkillsCategory[] = [
  {
    category: "Frontend",
    list_skill: [
      { skill: "HTML", icon: "skill-icons:html" },
      { skill: "CSS", icon: "skill-icons:css" },
      { skill: "JavaScript", icon: "logos:javascript" },
      { skill: "NextJS", icon: "logos:nextjs-icon" },
      { skill: "AstroJS", icon: "logos:astro-icon" },
      { skill: "React", icon: "logos:react" },
      { skill: "Vite", icon: "skill-icons:vite-dark" },
    ],
  },
  {
    category: "Backend",
    list_skill: [
      { skill: "Python", icon: "skill-icons:python-dark" },
      { skill: "NodeJS", icon: "skill-icons:nodejs-dark" },
      { skill: "MongoDB", icon: "devicon:mongodb-wordmark" },
      { skill: "Supabase", icon: "skill-icons:supabase-dark" },
      { skill: "Turso", icon: "simple-icons:turso" },
      { skill: "MySQL", icon: "logos:mysql" },
      { skill: "Scikitlearn", icon: "skill-icons:scikitlearn-light" },
    ],
  },
  {
    category: "Herramientas",
    list_skill: [
      { skill: "Figma", icon: "skill-icons:figma-dark" },
      { skill: "WordPress", icon: "skill-icons:wordpress" },
    ],
  },
  {
    category: "Other...",
    list_skill: [
      { skill: "Arduino", icon: "vscode-icons:file-type-arduino" },
      { skill: "C++", icon: "logos:c-plusplus" },
      { skill: "Raspberry Pi", icon: "logos:raspberry-pi" },
    ],
  },
]
