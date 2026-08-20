<script setup lang="ts">
usePageSeo({
  title: 'Instalaciones eléctricas y climatización para proyectos exigentes',
  description: 'GM Colaborativos, empresa de instalaciones eléctricas y de climatización con más de 20 años de experiencia. Sedes propias en Barcelona, Madrid, Málaga y Sevilla.',
})

definePageMeta({ layout: 'default' })
</script>

<template>
  <!-- Hero -->
  <section class="relative w-full overflow-hidden bg-stone-800" style="height: clamp(400px, 60vw, 640px);">
    <video
      autoplay
      loop
      muted
      playsinline
      poster="/poster-EncabezadoPagInicio.jpg"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/EncabezadoPagInicio.webm" type="video/webm" />
      <source src="/EncabezadoPagInicio.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-black/30" />
    <div class="absolute inset-0 flex items-end pb-16 px-8 md:px-20">
      <h1
        class="text-3xl md:text-6xl max-w-2xl leading-tight text-white font-semibold"
        style="font-family: 'CentraLight', sans-serif;"
      >
        Tu socio estratégico para tus proyectos más exigentes
      </h1>
    </div>
  </section>

  <!-- Quiénes somos -->
  <section class="px-8 md:px-20 py-20 flex flex-col md:flex-row gap-16">
    <!-- Left: text -->
    <div class="flex-1 flex flex-col gap-6">
      <h2
        class="text-2xl md:text-3xl uppercase tracking-wide"
        style="font-family: 'CentraBold', sans-serif;"
      >¿Quiénes somos?</h2>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        GM Colaborativos es una empresa de instalaciones eléctricas con más de 20 años de experiencia en el sector,
        especializada en proyectos de alta exigencia para grandes clientes nacionales e internacionales.
      </p>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        Contamos con una estructura propia que nos permite atender una gran gama de proyectos de manera íntegra,
        sumando las disciplinas de instalaciones eléctricas y de climatización.
      </p>
      <NuxtImg src="/logotipos.png" alt="Logotipos de GM Colaborativos" width="900" height="712" sizes="384px" format="webp" loading="lazy" class="w-full max-w-sm object-contain mx-auto h-auto" />
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        Desarrollamos nuestros proyectos con las especificaciones de los mejores clientes del mercado:
        retail, sanitario, hotelería, restauración, industria y sector residencial.
      </p>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        Disponemos de capacidad de despliegue en todo el territorio nacional gracias a nuestras sedes propias
        en Barcelona, Madrid, Málaga y Sevilla.
      </p>
      <!-- <NuxtLink
        to="/sedes"
        class="mt-4 border border-stone-800 px-6 py-2 text-xs uppercase tracking-widest w-fit hover:bg-stone-800 hover:text-white transition"
        style="font-family: 'CentraBold', sans-serif;"
      >
        Conoce más
      </NuxtLink> -->
      <a
        href="/Politica-de-calidad.pdf"
        target="_blank"
        rel="noopener"
        class="mt-12 border border-stone-800 px-6 py-2 text-xs uppercase tracking-widest w-fit hover:bg-stone-800 hover:text-white transition inline-block"
        style="font-family: 'CentraBold', sans-serif;"
      >
        Política de calidad
      </a>

    </div>

    <!-- Right: image grid -->
    <!-- Place these images in public/: inicio-grid-1.jpg, inicio-grid-2.jpg, inicio-grid-3.jpg, inicio-grid-4.jpg -->
    <div class="flex-1 grid grid-cols-2 gap-2">
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <NuxtImg src="/inicio-grid-1.jpg" alt="Técnico de GM Colaborativos trabajando en un cuadro eléctrico" width="500" height="500" fit="cover" densities="1x 2x" format="webp" loading="lazy" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <NuxtImg src="/inicio-grid-2.jpg" alt="Conductos de climatización instalados en el techo de una nave" width="500" height="500" fit="cover" densities="1x 2x" format="webp" loading="lazy" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <NuxtImg src="/inicio-grid-3.jpg" alt="Técnico revisando los parámetros de una instalación en una tablet" width="500" height="500" fit="cover" densities="1x 2x" format="webp" loading="lazy" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <NuxtImg src="/inicio-grid-4.jpg" alt="Paneles solares y aerogeneradores junto a un acuerdo entre profesionales" width="500" height="500" fit="cover" densities="1x 2x" format="webp" loading="lazy" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
    </div>
  </section>

  <!-- Misión y Visión -->
  <section class="bg-stone-100 px-8 md:px-20 py-20">
    <div class="grid md:grid-cols-2 gap-12 md:gap-20">
      <!-- Misión -->
      <div class="flex flex-col gap-6">
        <h2
          class="text-2xl md:text-3xl uppercase tracking-wide"
          style="font-family: 'CentraBold', sans-serif;"
        >Misión</h2>
        <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
          En GM Colaborativos trabajamos para aportar soluciones integrales y de valor en la gestión y ejecución
          de instalaciones eléctricas e instalaciones especiales, colaborando estrechamente con nuestros clientes
          y partners para convertir sus proyectos en soluciones eficientes, seguras y de calidad.
        </p>
        <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
          Ponemos nuestra experiencia, conocimiento técnico y capacidad de ejecución al servicio de cada proyecto,
          buscando superar las expectativas de nuestros clientes, cumplir los requisitos aplicables y desarrollar
          relaciones de confianza a largo plazo, mediante un modelo de trabajo basado en la colaboración,
          la mejora continua, la innovación y el compromiso de nuestro equipo.
        </p>
      </div>

      <!-- Visión -->
      <div class="flex flex-col gap-6">
        <h2
          class="text-2xl md:text-3xl uppercase tracking-wide"
          style="font-family: 'CentraBold', sans-serif;"
        >Visión</h2>
        <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
          Ser una empresa de referencia en la gestión y ejecución integral de instalaciones, reconocida por la
          calidad y eficiencia de nuestras soluciones, nuestra capacidad técnica y de gestión, y por la confianza
          que generamos en nuestros clientes y colaboradores.
        </p>
        <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
          Queremos crecer de forma sostenible, consolidando un modelo de trabajo basado en la colaboración,
          la innovación, la mejora continua y el compromiso de nuestro equipo, siendo un partner de confianza
          para nuestros clientes y aportando soluciones que contribuyan al éxito y la evolución de sus proyectos.
        </p>
      </div>
    </div>
  </section>
</template>
