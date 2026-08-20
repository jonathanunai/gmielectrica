<script setup lang="ts">
usePageSeo({
  title: 'Sedes en Barcelona, Madrid, Málaga y Sevilla',
  description: 'Capacidad de despliegue en todo el territorio nacional gracias a nuestras sedes propias en Barcelona, Madrid, Málaga y Sevilla.',
  image: '/og-sedes.jpg',
})
</script>

<template>
  <!-- Hero -->
  <section class="relative w-full overflow-hidden bg-stone-800" style="height: clamp(300px, 50vw, 520px);">
    <video autoplay loop muted playsinline poster="/poster-EncabezadoPag2Sedes.jpg" class="absolute inset-0 w-full h-full object-cover">
      <source src="/EncabezadoPag2Sedes.webm" type="video/webm" />
      <source src="/EncabezadoPag2Sedes.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30" />
  </section>

  <!-- Sedes text + map -->
  <section class="px-8 md:px-20 py-16 flex flex-col items-center gap-16">
    <h1
      class="text-xl md:text-2xl text-center text-stone-700"
      style="font-family: 'CentraLight', sans-serif;"
    >
      Sedes propias en Barcelona, Madrid, Málaga y Sevilla.
    </h1>

    <!-- Values + Spain map -->
    <div class="relative w-full max-w-3xl flex flex-col items-center">
      <NuxtImg src="/Sedes.png" alt="Mapa de España con las sedes de GM Colaborativos" width="1600" height="1266" sizes="xs:100vw sm:100vw md:768px lg:768px xl:768px xxl:768px" format="webp" loading="lazy" class="w-full h-auto object-contain" />
      <!-- City list -->
      <div class="mt-10 flex flex-wrap justify-center gap-4 text-xs text-stone-500 uppercase tracking-widest" style="font-family: 'Montserrat', sans-serif;">
        <span>Barcelona</span>
        <span>·</span>
        <span>Madrid</span>
        <span>·</span>
        <span>Málaga</span>
        <span>·</span>
        <span>Sevilla</span>
      </div>
    </div>
  </section>
</template>
