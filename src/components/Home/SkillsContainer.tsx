import { useState } from "react"
import SkillCard from "./SkillCard.tsx"
import { skills } from "@/src/lib/data"
import type { SkillsCategory } from "@/src/lib/type.d.ts"

export default function SkillsContainer() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skills[0].category
  )

  const activeSkills =
    skills.find((skill: SkillsCategory) => skill.category === activeCategory)
      ?.list_skill || []

  return (
    <article className="w-full flex flex-col max-md:justify-center">
      <div className="w-full flex flex-wrap gap-4 my-8 max-md:justify-center">
        {skills.map((skill, index) => (
          <button
            onClick={() => setActiveCategory(skill.category)}
            key={index}
            className={`${
              activeCategory === skill.category
                ? "border-white"
                : "border-color-primary"
            } hover:border-white border-2 max-md:hover:scale-105 hover:scale-95 active:scale-90 transition-all text-white text-sm py-2 px-4 rounded-md `}
          >
            {skill.category}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-wrap max-md:justify-center gap-2">
        {activeSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill.skill} icon={skill.icon} />
        ))}
      </div>
    </article>
  )
}
