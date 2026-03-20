<script setup lang="ts">
const departments = [
  {
    name: 'Departamento Ingeniería',
    description: 'Nuestro equipo de ingeniería lidera el diseño y la planificación de cada proyecto, garantizando soluciones técnicas precisas y adaptadas a las necesidades del cliente. Con amplia experiencia en instalaciones eléctricas y de climatización, aseguran el cumplimiento de normativas y los más altos estándares de calidad.',
    image: '/equipo-ingenieria.jpg',
  },
  {
    name: 'Departamento de Obra',
    description: 'El equipo de obra es el motor de la ejecución. Profesionales altamente cualificados que llevan los proyectos del plano a la realidad con rigor, eficiencia y seguridad, asegurando la entrega en plazo y forma.',
    image: '/equipo-obra.jpg',
  },
  {
    name: 'Departamento Administrativo',
    description: 'El soporte que hace posible el funcionamiento de toda la organización. Gestión documental, coordinación con clientes y proveedores, y control económico de cada proyecto.',
    image: '/equipo-admin.jpg',
  },
]

const current = ref(0)
</script>

<template>
  <!-- Hero -->
  <!-- Place hero-equipo.jpg in public/ (business people silhouettes against glass buildings) -->
  <section class="relative w-full overflow-hidden bg-stone-600" style="height: clamp(320px, 55vw, 560px);">
    <img src="/hero-equipo.jpg" alt="Nuestro equipo" class="w-full h-full object-cover" onerror="this.style.display='none'" />
    <div class="absolute inset-0 bg-black/30" />
  </section>

  <!-- Department section -->
  <section class="flex flex-col md:flex-row min-h-80">
    <!-- Image carousel (left) -->
    <div class="relative flex-1 bg-stone-200 overflow-hidden" style="min-height: 340px;">
      <img
        v-for="(dept, i) in departments"
        :key="i"
        :src="dept.image"
        :alt="dept.name"
        class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
        :class="i === current ? 'opacity-100' : 'opacity-0'"
        onerror="this.style.display='none'"
      />
      <button
        class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="current = Math.max(0, current - 1)"
      >&#8249;</button>
      <button
        class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="current = Math.min(departments.length - 1, current + 1)"
      >&#8250;</button>
    </div>

    <!-- Text (right) -->
    <div class="flex-1 flex flex-col justify-center px-10 md:px-16 py-14 gap-5">
      <h2
        class="text-2xl md:text-3xl uppercase"
        style="font-family: 'CentraBold', sans-serif;"
      >{{ departments[current].name }}</h2>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        {{ departments[current].description }}
      </p>
      <NuxtLink
        to="/contacto"
        class="text-xs uppercase tracking-widest underline underline-offset-4 text-stone-700 hover:text-stone-900 w-fit"
        style="font-family: 'CentraBold', sans-serif;"
      >Ver más</NuxtLink>
      <!-- Dots -->
      <div class="flex gap-2 mt-2">
        <button
          v-for="(d, i) in departments"
          :key="i"
          class="w-2 h-2 rounded-full transition"
          :class="i === current ? 'bg-stone-800' : 'bg-stone-300'"
          @click="current = i"
        />
      </div>
    </div>
  </section>
</template>
