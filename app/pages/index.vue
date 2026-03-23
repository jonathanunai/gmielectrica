<script setup lang="ts">
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
      <img src="/logotipos.png" alt="Logotipos de GM Colaborativos" class="w-full max-w-sm object-contain mx-auto" onerror="this.style.display='none'" />
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        Desarrollamos nuestros proyectos con las especificaciones de los mejores clientes del mercado:
        retail, sanitario, hotelería, restauración, industria y sector residencial.
      </p>
      <p class="text-sm text-stone-600 leading-relaxed" style="font-family: 'Montserrat', sans-serif;">
        Disponemos de capacidad de despliegue en todo el territorio nacional gracias a nuestras sedes propias
        en Alicante, Barcelona, Madrid, Málaga y Sevilla.
      </p>
      <NuxtLink
        to="/sedes"
        class="mt-4 border border-stone-800 px-6 py-2 text-xs uppercase tracking-widest w-fit hover:bg-stone-800 hover:text-white transition"
        style="font-family: 'CentraBold', sans-serif;"
      >
        Conoce más
      </NuxtLink>
    </div>

    <!-- Right: image grid -->
    <!-- Place these images in public/: inicio-grid-1.jpg, inicio-grid-2.jpg, inicio-grid-3.jpg, inicio-grid-4.jpg -->
    <div class="flex-1 grid grid-cols-2 gap-2">
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <img src="/inicio-grid-1.jpg" alt="" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <img src="/inicio-grid-2.jpg" alt="" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <img src="/inicio-grid-3.jpg" alt="" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
      <div class="bg-stone-200 aspect-square overflow-hidden">
        <img src="/inicio-grid-4.jpg" alt="" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-stone-300')" />
      </div>
    </div>
  </section>
</template>
