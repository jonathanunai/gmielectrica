<script setup lang="ts">
const departments = [
  {
    name: 'Departamento Ingeniería',
    description: 'Nuestro equipo de ingeniería lidera el diseño y la planificación de cada proyecto, garantizando soluciones técnicas precisas y adaptadas a las necesidades del cliente. Con amplia experiencia en instalaciones eléctricas y de climatización, aseguran el cumplimiento de normativas y los más altos estándares de calidad.',
    img: '/departamento-ingenieria.jpeg',
  },
  {
    name: 'Departamento de Obra',
    description: 'El equipo de obra es el motor de la ejecución. Profesionales altamente cualificados que llevan los proyectos del plano a la realidad con rigor, eficiencia y seguridad, asegurando la entrega en plazo y forma.',
    img: '/departamento-obras.jpeg',
  },
  {
    name: 'Departamento Administrativo',
    description: 'El soporte que hace posible el funcionamiento de toda la organización. Gestión documental, coordinación con clientes y proveedores, y control económico de cada proyecto.',
    img: '/departamento-administrativo.jpeg',
  },
]

const slides = departments.map(d => ({ img: d.img, alt: d.name }))
</script>

<template>
  <!-- Hero -->
  <section class="relative w-full overflow-hidden bg-stone-600" style="height: clamp(320px, 55vw, 560px);">
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/encabezado-equipo.webm" type="video/webm" />
      <source src="/encabezado-equipo.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30" />
  </section>

  <!-- Department carousel -->
  <ContentCarousel :slides="slides" class="mb-24">
    <template #default="{ current }">
      <h2
        class="text-2xl md:text-3xl uppercase"
        style="font-family: 'CentraBold', sans-serif;"
      >{{ departments[current]!.name }}</h2>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        {{ departments[current]!.description }}
      </p>
      <NuxtLink
        to="/contacto"
        class="text-xs uppercase tracking-widest underline underline-offset-4 text-stone-700 hover:text-stone-900 w-fit"
        style="font-family: 'CentraBold', sans-serif;"
      >Ver más</NuxtLink>
    </template>
  </ContentCarousel>
</template>
