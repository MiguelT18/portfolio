import type { ChangeEvent, FormEvent } from "react"
import type { FormData } from "@/src/lib/type.d.ts"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify-icon/react"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm("service_u91osxk", "template_zfzl659", form.current, {
          publicKey: "pvQsSyKezHS-TGlMD",
        })
        .then((response: { status: number; text: string }) => {
          console.log("SUCCESS!", response.status, response.text)
          setFormData({ name: "", email: "", message: "" })
        })
        .catch((error: { text: string }) => {
          console.error("FAILED...", error)
        })
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="text-black flex flex-col gap-4 w-full md:max-w-[60%] mx-auto"
    >
      <p className="text-sm text-white">
        Llena el siguiente formulario o envíame un mensaje de WhatsApp y recibe
        una respuesta:
      </p>

      <input
        onChange={handleChange}
        value={formData.name}
        type="text"
        name="name"
        placeholder="Nombre completo"
        className="block px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      />

      <input
        onChange={handleChange}
        value={formData.email}
        type="email"
        name="email"
        placeholder="Correo electrónico"
        className="block px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      />

      <textarea
        onChange={handleChange}
        value={formData.message}
        name="message"
        rows={5}
        placeholder="Escribe el mensaje..."
        className="w-full block resize-none px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      ></textarea>

      <div className="flex gap-4 text-center">
        <button
          className="w-full bg-color-primary/90 hover:bg-color-primary/60 focus:bg-color-primary/60 active:scale-90 hover:scale-95 text-white transition-all text-sm py-2 px-4 rounded-md"
          type="submit"
        >
          Enviar
        </button>

        <a
          className="flex justify-center items-center gap-3 w-full border-color-primary focus:border-white border-2 active:scale-90 hover:scale-95 transition-all text-white text-sm py-2 px-6 rounded-md cursor-pointer"
          href="https://wa.link/fknvmv"
        >
          <span className="block">WhatsApp</span>
          <Icon
            className="w-fit rounded-full"
            icon={"logos:whatsapp-icon"}
            width={25}
            height={25}
          />
        </a>
      </div>
    </form>
  )
}
