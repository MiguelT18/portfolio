import { Icon } from "@iconify-icon/react"
import type { Skill } from "@/src/lib/type.d.ts"

export default function SkillCard({ skill, icon }: Skill) {
  return (
    <article className="bg-color-quaternary w-fit items-center justify-center flex gap-4 px-3 py-2 rounded-md">
      <Icon className="w-fit rounded-full" icon={icon} width={28} height={28} />
      <h2 className="w-fit block text-sm font-bold">{skill}</h2>
    </article>
  )
}
