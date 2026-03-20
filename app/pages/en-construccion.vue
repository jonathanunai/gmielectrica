<script setup lang="ts">
definePageMeta({ layout: false })

import * as v from 'valibot'
const schema = v.object({
  email: v.pipe(v.string(), v.email('Correo inválido')),
  acceptPrivacy: v.literal(true, 'Debes aceptar la política de privacidad'),
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  name: '',
  message: '',
  acceptPrivacy: false,
})

const errors = reactive<{ email?: string; acceptPrivacy?: string }>({})
const toast = useToast()

function onSubmit(event: Event) {
  event.preventDefault()
  errors.email = undefined
  errors.acceptPrivacy = undefined
  const result = v.safeParse(schema, {
    email: state.email,
    acceptPrivacy: state.acceptPrivacy,
  })

  if (!result.success) {
    for (const issue of result.issues) {
      if (issue.type === 'email') errors.email = issue.message
      if (issue.type === 'literal') errors.acceptPrivacy = issue.message
    }
    setTimeout(() => {
      errors.email = undefined
      errors.acceptPrivacy = undefined
    }, 3000)
    return
  }
  fetch('https://formsubmit.co/ajax/info@gmcolaborativos.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: state.name, email: state.email, message: state.message }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to send the form')
      return response.json()
    })
    .catch(() => {
      toast.add({ title: 'Error', description: 'Hubo un problema al enviar el formulario.', color: 'error' })
    })
  toast.add({ title: 'Success', description: 'El formulario ha sido enviado.', color: 'success' })
}
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col items-center justify-center max-w-6xl mx-auto p-6">
      <div class="flex flex-row items-center">
        <img src="/GM-Colaborativos.png" alt="Logo GMI Eléctricas" class="h-14 md:h-36 -mb-1 mr-2 md:mr-4" />
        <h1 class="text-2xl md:text-6xl font-bold uppercase">En construcción...</h1>
      </div>

      <hr class="border w-full border-stone-300 mb-24" />

      <div class="flex flex-col md:flex-row">
        <div class="flex-1 flex flex-col">
          <h2 class="text-2xl md:text-6xl text-center mb-2">¡Muy pronto!</h2>
          <video src="/VIDEOGM.mp4" autoplay loop muted class="w-full" />
        </div>
        <div class="flex-1 mx-12">
          <p class="text-lg mb-2">¡Regístrate ahora! y te contactaremos.</p>
          <form class="space-y-4 flex flex-col" action="https://formsubmit.co/info@gmcolaborativos.com" method="POST" @submit="onSubmit">
            <input v-model="state.name" name="name" placeholder="Nombre:" class="border p-1 border-stone-500 focus:outline-none focus:ring-2" />
            <input v-model="state.email" name="email" placeholder="Correo electrónico:" class="border p-1 border-stone-500 focus:outline-none focus:ring-2" />
            <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
            <textarea v-model="state.message" name="message" placeholder="Mensaje:" class="border p-1 border-stone-500 focus:outline-none focus:ring-2" />
            <label class="flex items-center space-x-2 cursor-pointer text-xs">
              <span class="relative">
                <input type="checkbox" v-model="state.acceptPrivacy" class="appearance-none w-5 h-5 border border-stone-400 rounded bg-white checked:bg-stone-600 focus:outline-none focus:ring-2 transition" />
                <Icon v-if="state.acceptPrivacy" name="mdi:check" class="absolute left-0 top-0 w-5 h-5 text-white pointer-events-none" />
              </span>
              <span>He leído y acepto la Política de Privacidad</span>
              <span v-if="errors.acceptPrivacy" class="text-red-500 text-xs ml-2">{{ errors.acceptPrivacy }}</span>
            </label>
            <div class="flex justify-end mb-24">
              <button type="submit" class="border p-2 px-6 border-stone-500 bg-stone-950 hover:bg-stone-700 text-stone-50 transition w-fit cursor-pointer">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr class="border w-full border-stone-300" />
    </div>
  </UApp>
</template>
