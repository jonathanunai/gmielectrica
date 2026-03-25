<script setup lang="ts">
const menuOpen = ref(false)

const navLinks = [
  { name: 'Sedes', href: '/sedes' },
  { name: 'Instalaciones', href: '/instalaciones' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Contacto', href: '/contacto' },
]
</script>

<template>
  <!-- Sidebar overlay -->
  <Transition name="fade">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-black/40"
      @click="menuOpen = false"
    />
  </Transition>

  <!-- Sidebar -->
  <Transition name="slide">
    <div
      v-if="menuOpen"
      class="fixed top-0 left-0 z-50 h-full w-52 bg-white flex flex-col p-8 shadow-lg"
    >
      <button class="self-end mb-8 text-xl text-gray-500 hover:text-black" @click="menuOpen = false">✕</button>
      <nav class="flex flex-col gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          class="text-base text-gray-800 hover:text-gray-500 transition"
          style="font-family: 'Montserrat', sans-serif;"
          @click="menuOpen = false"
        >{{ link.name }}</NuxtLink>
      </nav>
    </div>
  </Transition>

  <!-- Header -->
  <header class="flex items-center justify-between px-6 py-1">
    <button class="flex flex-col gap-1.5 cursor-pointer" @click="menuOpen = true">
      <span class="w-6 h-0.5 bg-black block" />
      <span class="w-6 h-0.5 bg-black block" />
      <span class="w-6 h-0.5 bg-black block" />
    </button>

    <NuxtLink to="/">
      <img src="/GM-Colaborativos.png" alt="GM Colaborativos" class="h-16 scale-150" />
    </NuxtLink>

    <NuxtLink
      to="/unete"
      class="text-xs font-bold uppercase md:tracking-wide text-center border border-black px-3 py-2 leading-[11px] md:leading-tight hover:bg-black hover:text-white transition"
      style="font-family: 'CentraBold', sans-serif;"
    >
      Únete a<br>nuestro equipo!
    </NuxtLink>
  </header>

  <!-- Page content -->
  <slot />

  <!-- Footer -->
  <footer class="border-t border-gray-200 px-8 md:px-20 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
    <div class="flex flex-col gap-2 text-sm text-gray-700" style="font-family: 'Montserrat', sans-serif;">
      <a href="/contacto" class="hover:underline">Contacto</a>
      <a href="mailto:info@gmcolaborativos.com" class="hover:underline">Correo electrónico &#9658;</a>
      <a href="tel:+34918663415" class="hover:underline">Número telefónico &#9658;</a>
      <a href="https://www.linkedin.com/company/gm-colaborativos" target="_blank" class="mt-2 inline-flex">
        <span class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 transition text-xs font-bold">in</span>
      </a>
    </div>
    <p class="text-xs text-gray-400 self-end" style="font-family: 'Montserrat', sans-serif;">
      © GM Colaborativos &nbsp;|&nbsp; Aviso legal &nbsp;|&nbsp;
      <a href="/privacidad" class="hover:underline">Política de privacidad</a> &nbsp;|&nbsp;
      <a href="/cookies" class="hover:underline">Política de cookies</a>
    </p>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
