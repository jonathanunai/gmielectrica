<script setup lang="ts">
const menuOpen = ref(false)

const navLinks = [
  { name: 'Instalaciones', href: '/instalaciones' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Sedes', href: '/sedes' },
  { name: 'Contacto', href: '/contacto' },
]
</script>

<template>
  <!-- Sidebar overlay -->
  <Transition name="fade">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      @click="menuOpen = false"
    />
  </Transition>

  <!-- Sidebar -->
  <Transition name="slide">
    <div
      v-if="menuOpen"
      class="fixed top-0 right-0 z-50 h-full w-80 bg-zinc-900 flex flex-col shadow-2xl"
    >
      <!-- Close button -->
      <div class="flex justify-end px-8 pt-8 pb-4">
        <button
          class="group relative w-8 h-8 flex items-center justify-center"
          @click="menuOpen = false"
          aria-label="Cerrar menú"
        >
          <span class="absolute w-5 h-px bg-zinc-400 group-hover:bg-white transition-colors duration-200 rotate-45" />
          <span class="absolute w-5 h-px bg-zinc-400 group-hover:bg-white transition-colors duration-200 -rotate-45" />
        </button>
      </div>

      <!-- Nav links -->
      <nav class="flex flex-col px-10 pt-6 gap-0 flex-1">
        <NuxtLink
          v-for="(link, i) in navLinks"
          :key="link.name"
          :to="link.href"
          class="nav-link group flex items-baseline gap-4 py-5 border-b border-zinc-800 last:border-0"
          :style="`animation-delay: ${i * 120}ms`"
          @click="menuOpen = false"
        >
          <span class="text-xs text-zinc-600 font-mono w-5 shrink-0 group-hover:text-zinc-400 transition-colors duration-200">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <span
            class="text-2xl text-zinc-100 font-semibold tracking-tight group-hover:text-white transition-colors duration-200"
            style="font-family: 'Montserrat', sans-serif;"
          >{{ link.name }}</span>
        </NuxtLink>
      </nav>

      <!-- Drawer footer -->
      <div class="px-10 py-8 border-t border-zinc-800">
        <a
          href="mailto:info@gmcolaborativos.com"
          class="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200 block mb-3"
          style="font-family: 'Montserrat', sans-serif;"
        >info@gmcolaborativos.com</a>
        <a
          href="https://www.linkedin.com/company/gm-colaborativos"
          target="_blank"
          class="inline-flex items-center justify-center w-7 h-7 rounded-full border border-zinc-700 text-zinc-500 hover:border-zinc-400 hover:text-zinc-300 transition-colors duration-200 text-xs font-bold"
        >in</a>
      </div>
    </div>
  </Transition>

  <!-- Header -->
  <header class="flex items-center justify-between px-6 py-1">
    <NuxtLink to="/">
      <img src="/logo-GM.png" alt="GM Colaborativos" class="h-20 p-2" />
    </NuxtLink>
    <div class="gap-6 xl:gap-10 hidden lg:flex">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.href"
        class="text-base font-semibold text-gray-800 hover:text-gray-500 transition"
        style="font-family: 'Montserrat', sans-serif;"
      >{{ link.name }}</NuxtLink>
    </div>
    <div class="flex items-center gap-4">
      <NuxtLink
        to="/unete"
        class="text-xs font-bold uppercase md:tracking-wide text-center border border-black px-2 md:px-3 py-1.5 md:py-2 leading-[11px] md:leading-tight hover:bg-black hover:text-white transition"
        style="font-family: 'CentraBold', sans-serif;"
      >
        Únete a<br>nuestro equipo!
      </NuxtLink>

      <!-- Hamburger — morphs to X when open -->
      <button
        class="cursor-pointer lg:hidden w-6 h-5 relative"
        :class="{ 'is-open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Abrir menú"
      >
        <span class="hamburger-bar" />
        <span class="hamburger-bar" />
        <span class="hamburger-bar" />
      </button>
    </div>
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
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Staggered nav link reveal */
.nav-link {
  animation: linkFadeIn 0.4s ease both;
}
@keyframes linkFadeIn {
  from {
    opacity: 0;
    transform: translateX(16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Morphing hamburger */
.hamburger-bar {
  display: block;
  width: 1.5rem;
  height: 1.5px;
  background: black;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform-origin: center;
  position: absolute;
  left: 0;
}
.hamburger-bar:nth-child(1) { top: 0; }
.hamburger-bar:nth-child(2) { top: 50%; margin-top: -0.75px; }
.hamburger-bar:nth-child(3) { bottom: 0; }

.is-open .hamburger-bar:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.is-open .hamburger-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.is-open .hamburger-bar:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}
</style>
