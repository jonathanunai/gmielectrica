<script setup lang="ts">
const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  file: null as File | null,
})

const toast = useToast()

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement
  state.file = input.files?.[0] ?? null
}

async function onSubmit(e: Event) {
  e.preventDefault()
  const formData = new FormData()
  formData.append('name', state.name)
  formData.append('email', state.email)
  formData.append('phone', state.phone)
  formData.append('message', state.message)
  if (state.file) formData.append('attachment', state.file)

  try {
    const res = await fetch('https://formsubmit.co/ajax/info@gmcolaborativos.com', {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) throw new Error()
    toast.add({ title: 'Enviado', description: 'Tu solicitud ha sido recibida.', color: 'success' })
    state.name = state.email = state.phone = state.message = ''
    state.file = null
  } catch {
    toast.add({ title: 'Error', description: 'Hubo un problema al enviar el formulario.', color: 'error' })
  }
}
</script>

<template>
  <!-- Title -->
  <section class="px-8 md:px-20 pt-14 pb-6">
    <h1
      class="text-4xl md:text-6xl uppercase leading-tight"
      style="font-family: 'CentraBold', sans-serif;"
    >¡Sé parte de<br>nuestro equipo!</h1>
  </section>

  <!-- Full-width team photo -->
  <!-- Place hero-unete.jpg in public/ (overhead view of team around a table) -->
  <section class="w-full overflow-hidden bg-stone-200" style="height: clamp(260px, 45vw, 480px);">
    <img src="/hero-unete.jpg" alt="Únete al equipo" class="w-full h-full object-cover" onerror="this.style.display='none'" />
  </section>

  <!-- Form -->
  <section class="px-8 md:px-20 py-16 flex justify-center">
    <form class="w-full max-w-lg flex flex-col gap-4" @submit="onSubmit">
      <input
        v-model="state.name"
        type="text"
        placeholder="Nombre"
        required
        class="border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-500"
        style="font-family: 'Montserrat', sans-serif;"
      />
      <input
        v-model="state.email"
        type="email"
        placeholder="Correo electrónico"
        required
        class="border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-500"
        style="font-family: 'Montserrat', sans-serif;"
      />
      <input
        v-model="state.phone"
        type="tel"
        placeholder="Teléfono"
        class="border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-500"
        style="font-family: 'Montserrat', sans-serif;"
      />
      <textarea
        v-model="state.message"
        placeholder="Mensaje"
        rows="5"
        class="border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-500 resize-none"
        style="font-family: 'Montserrat', sans-serif;"
      />
      <label class="text-xs text-stone-500 cursor-pointer hover:text-stone-700" style="font-family: 'Montserrat', sans-serif;">
        <span class="underline">Adjuntar documentos</span>
        <input type="file" class="hidden" @change="onFileChange" />
        <span v-if="state.file" class="ml-2 text-stone-700">{{ state.file.name }}</span>
      </label>
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-stone-900 text-white text-xs uppercase tracking-widest px-10 py-3 hover:bg-stone-700 transition"
          style="font-family: 'CentraBold', sans-serif;"
        >Enviar</button>
      </div>
    </form>
  </section>
</template>
