<script setup lang="ts">
const services = [
  {
    title: 'Instalaciones Eléctricas',
    bullets: [
      'Alta y baja tensión para proyectos industriales, comerciales y residenciales.',
      'Cuadros eléctricos, cableado y sistemas de protección a medida.',
      'Mantenimiento preventivo y correctivo de instalaciones existentes.',
    ],
  },
  {
    title: 'Instalaciones Climatización',
    bullets: [
      'Confort térmico y eficiencia energética con sistemas de climatización adaptados.',
      'Aire acondicionado, calefacción y ventilación, optimizando consumo y calidad del aire.',
      'Automatización y energías renovables, mejorando sostenibilidad y regulación inteligente.',
      'Infraestructura mecánica para sistemas hidráulicos, bombeo, fontanería y ventilación industrial.',
    ],
  },
]

const currentService = ref(0)
</script>

<template>
  <!-- Hero full-width image -->
  <!-- Place hero-instalaciones.jpg in public/ (electrician working on control panel) -->
  <section class="relative w-full overflow-hidden bg-stone-700" style="height: clamp(320px, 55vw, 560px);">
    <img src="/hero-instalaciones.jpg" alt="Instalaciones" class="w-full h-full object-cover" onerror="this.style.display='none'" />
  </section>

  <!-- Services section -->
  <section class="flex flex-col md:flex-row min-h-80">
    <!-- Image carousel (left) -->
    <div class="relative flex-1 bg-stone-200 overflow-hidden" style="min-height: 340px;">
      <!-- Place instalaciones-1.jpg and instalaciones-2.jpg in public/ -->
      <img
        src="/instalaciones-1.jpg"
        alt=""
        class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
        :class="currentService === 0 ? 'opacity-100' : 'opacity-0'"
        onerror="this.style.display='none'"
      />
      <img
        src="/instalaciones-2.jpg"
        alt=""
        class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
        :class="currentService === 1 ? 'opacity-100' : 'opacity-0'"
        onerror="this.style.display='none'"
      />
      <!-- Arrows -->
      <button
        class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="currentService = Math.max(0, currentService - 1)"
      >&#8249;</button>
      <button
        class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="currentService = Math.min(services.length - 1, currentService + 1)"
      >&#8250;</button>
    </div>

    <!-- Text (right) -->
    <div class="flex-1 flex flex-col justify-center px-10 md:px-16 py-14 gap-6">
      <h2
        class="text-2xl md:text-3xl uppercase"
        style="font-family: 'CentraBold', sans-serif;"
      >{{ services[currentService].title }}</h2>
      <ul class="flex flex-col gap-3">
        <li
          v-for="bullet in services[currentService].bullets"
          :key="bullet"
          class="text-sm text-stone-600 leading-relaxed flex gap-2"
          style="font-family: 'Montserrat', sans-serif;"
        >
          <span class="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2" />
          {{ bullet }}
        </li>
      </ul>
      <!-- Dots -->
      <div class="flex gap-2 mt-2">
        <button
          v-for="(s, i) in services"
          :key="i"
          class="w-2 h-2 rounded-full transition"
          :class="i === currentService ? 'bg-stone-800' : 'bg-stone-300'"
          @click="currentService = i"
        />
      </div>
    </div>
  </section>
</template>
