<script setup lang="ts">
const services = [
  {
    title: 'Instalaciones Eléctricas',
    img: '/instalaciones-1.jpg',
    bullets: [
      'Alta y baja tensión para proyectos industriales, comerciales y residenciales.',
      'Cuadros eléctricos, cableado y sistemas de protección a medida.',
      'Mantenimiento preventivo y correctivo de instalaciones existentes.',
    ],
  },
  {
    title: 'Instalaciones Climatización',
    img: '/instalaciones-2.jpg',
    bullets: [
      'Confort térmico y eficiencia energética con sistemas de climatización adaptados.',
      'Aire acondicionado, calefacción y ventilación, optimizando consumo y calidad del aire.',
      'Automatización y energías renovables, mejorando sostenibilidad y regulación inteligente.',
      'Infraestructura mecánica para sistemas hidráulicos, bombeo, fontanería y ventilación industrial.',
    ],
  },
]

const slides = services.map(s => ({ img: s.img, alt: s.title }))
</script>

<template>
  <!-- Hero -->
  <section class="relative w-full overflow-hidden bg-stone-700" style="height: clamp(320px, 55vw, 560px);">
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/instalacionesPag3.webm" type="video/webm" />
      <source src="/instalacionesPag3.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30" />
  </section>

  <!-- Services carousel -->
  <ContentCarousel :slides="slides">
    <template #default="{ current }">
      <h2
        class="text-2xl md:text-3xl uppercase"
        style="font-family: 'CentraBold', sans-serif;"
      >{{ services[current]!.title }}</h2>
      <ul class="flex flex-col gap-3">
        <li
          v-for="bullet in services[current]!.bullets"
          :key="bullet"
          class="text-sm text-stone-600 leading-relaxed flex gap-2"
          style="font-family: 'Montserrat', sans-serif;"
        >
          <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2" />
          {{ bullet }}
        </li>
      </ul>
    </template>
  </ContentCarousel>
</template>
