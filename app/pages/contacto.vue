<script setup lang="ts">
const state = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  acceptPrivacy: false,
})

const toast = useToast()

async function onSubmit(e: Event) {
  e.preventDefault()
  if (!state.acceptPrivacy) {
    toast.add({ title: 'Aviso', description: 'Debes aceptar la política de privacidad.', color: 'warning' })
    return
  }
  try {
    const res = await fetch('https://formsubmit.co/ajax/info@gmcolaborativos.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: state.name, email: state.email, phone: state.phone, message: state.message }),
    })
    if (!res.ok) throw new Error()
    toast.add({ title: 'Enviado', description: 'Tu mensaje ha sido recibido.', color: 'success' })
    state.name = state.email = state.phone = state.message = ''
    state.acceptPrivacy = false
  } catch {
    toast.add({ title: 'Error', description: 'Hubo un problema al enviar el formulario.', color: 'error' })
  }
}
</script>

<template>
  <!-- Hero -->
  <!-- Place hero-contacto.jpg in public/ (video call / meeting scene) -->
  <section class="relative w-full overflow-hidden bg-stone-700" style="height: clamp(280px, 48vw, 500px);">
    <img src="/hero-contacto.jpg" alt="Contacto" class="w-full h-full object-cover opacity-80" onerror="this.style.display='none'" />
    <div class="absolute inset-0 bg-black/30" />
  </section>

  <!-- Map + Form -->
  <section class="flex flex-col md:flex-row min-h-96">
    <!-- Map (left) -->
    <div class="flex-1 min-h-72 bg-stone-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-3.729638724609375!3d40.44330280478613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
        class="w-full h-full min-h-72"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>

    <!-- Form (right) -->
    <div class="flex-1 flex flex-col justify-center px-10 md:px-16 py-14">
      <form class="flex flex-col gap-4" @submit="onSubmit">
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
          rows="4"
          class="border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-stone-500 resize-none"
          style="font-family: 'Montserrat', sans-serif;"
        />
        <label class="flex items-start gap-2 cursor-pointer text-xs text-stone-500" style="font-family: 'Montserrat', sans-serif;">
          <input type="checkbox" v-model="state.acceptPrivacy" class="mt-0.5 accent-stone-700" />
          <span>He leído y acepto la <NuxtLink to="/privacidad" class="underline">Política de Privacidad</NuxtLink></span>
        </label>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-stone-900 text-white text-xs uppercase tracking-widest px-10 py-3 hover:bg-stone-700 transition"
            style="font-family: 'CentraBold', sans-serif;"
          >Enviar</button>
        </div>
      </form>
    </div>
  </section>
</template>
