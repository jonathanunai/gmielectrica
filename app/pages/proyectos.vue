<script setup lang="ts">
const sectors = [
  { name: 'RETAIL', href: '/retail', active: true },
  { name: 'SANITARIO', href: '/sanitario' },
  { name: 'OFICINAS', href: '/oficinas' },
  { name: 'RESIDENCIAL', href: '/residencial' },
  { name: 'RESTAURACIÓN', href: '/restauracion' },
  { name: 'INDUSTRIAL', href: '/industrial' },
]

const clients = [
  'Massimo Dutti', 'Bottega Veneta', 'Quirónsalud', 'Synergym', 'Calzedonia',
  'Adecco', 'Balenciaga', 'Santalucía', 'Viamed', 'Fitz',
  'Desigual', 'La Máquina', 'Basic Fit', 'Intimissimi', 'AEDAS',
  'Chanel', 'Bershka', 'Toyota', 'Real Madrid', 'Utopicus',
  'Stradivarius', 'Ralph Lauren', 'Universidad Europea', 'Deutsche Bank', 'Schweppes',
]
</script>

<template>
  <!-- Hero -->
  <section class="relative w-full overflow-hidden" style="height: clamp(300px, 55vw, 540px);">
    <video
      src="/PROYECTOS.webm"
      autoplay
      loop
      muted
      playsinline
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40" />

    <!-- Title -->
    <div class="absolute bottom-10 left-8 md:left-14 text-white">
      <h1
        class="text-6xl md:text-8xl uppercase leading-none"
        style="font-family: 'CentraBold', sans-serif;"
      >RETAIL</h1>
      <p class="text-base md:text-lg mt-1" style="font-family: 'Montserrat', sans-serif;">
        Tienda DIOR, Madrid
      </p>
    </div>

    <!-- Sector nav -->
    <nav class="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2">
      <a
        v-for="sector in sectors"
        :key="sector.name"
        :href="sector.href"
        class="text-xs md:text-sm tracking-widest uppercase transition"
        :class="sector.active ? 'text-white' : 'text-white/50 hover:text-white'"
        style="font-family: 'CentraBold', sans-serif;"
      >{{ sector.name }}</a>
    </nav>
  </section>

  <!-- Clients -->
  <section class="py-16 px-8 md:px-20 bg-white">
    <div class="grid grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
      <div
        v-for="client in clients"
        :key="client"
        class="text-gray-500 text-xs font-semibold tracking-wider uppercase text-center"
        style="font-family: 'Montserrat', sans-serif;"
      >
        {{ client }}
      </div>
    </div>
  </section>
</template>
