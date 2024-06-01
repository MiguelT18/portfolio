import type { FormData } from "@/src/lib/type.d.ts"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Icon } from "@iconify-icon/react"
import { useForm } from "react-hook-form"

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>()
  const form = useRef<HTMLFormElement>(null)

  const onSubmit = handleSubmit((data: FormData) => {
    if (form.current) {
      emailjs
        .sendForm("service_u91osxk", "template_zfzl659", form.current, {
          publicKey: "pvQsSyKezHS-TGlMD",
        })
        .then((response: { status: number; text: string }) => {
          console.log("SUCCESS!", response.status, response.text)
          console.log(data)

          reset()
        })
        .catch((error: { text: string }) => {
          console.error("FAILED...", error)
        })
    }
  })

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      className="text-black flex flex-col gap-4 w-full md:max-w-[60%] mx-auto"
    >
      <p className="text-sm text-white">
        Llena el siguiente formulario o envíame un mensaje de WhatsApp y recibe
        una respuesta:
      </p>

      <input
        {...register("name", {
          required: { value: true, message: "Tu nombre es requerido" },
          minLength: {
            value: 2,
            message: "Tu nombre debe tener al menos 2 caracteres",
          },
        })}
        type="text"
        placeholder="Nombre completo"
        className="block px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      />
      {errors.name && (
        <span className="text-xsm text-red-500 -mt-3">
          {errors.name.message}
        </span>
      )}

      <input
        {...register("email", {
          required: { value: true, message: "El correo es requerido" },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Formato de correo no válido",
          },
        })}
        type="email"
        placeholder="Correo electrónico"
        className="block px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      />
      {errors.email && (
        <span className="text-xsm text-red-500 -mt-3">
          {errors.email.message}
        </span>
      )}

      <textarea
        {...register("userMessage", {
          required: { value: true, message: "El mensaje es requerido" },
          minLength: {
            value: 8,
            message: "El mensaje debe tener al menos 8 caracteres",
          },
        })}
        rows={5}
        placeholder="Escribe el mensaje..."
        className="w-full block resize-none px-4 py-2 rounded-lg bg-color-tertiary text-white border-2 border-color-primary"
      ></textarea>
      {errors.userMessage && (
        <span className="text-xsm text-red-500 -mt-3">
          {errors.userMessage.message}
        </span>
      )}

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
