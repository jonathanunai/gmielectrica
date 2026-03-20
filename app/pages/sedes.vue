<template>
  <!-- Hero -->
  <!-- Place hero-sedes.jpg in public/ (workers in data center / industrial setting) -->
  <section class="relative w-full overflow-hidden bg-stone-800" style="height: clamp(300px, 50vw, 520px);">
    <img src="/hero-sedes.jpg" alt="Nuestras sedes" class="w-full h-full object-cover opacity-70" onerror="this.style.display='none'" />
  </section>

  <!-- Sedes text + map -->
  <section class="px-8 md:px-20 py-16 flex flex-col items-center gap-16">
    <p
      class="text-xl md:text-2xl text-center text-stone-700"
      style="font-family: 'CentraLight', sans-serif;"
    >
      Sedes propias Alicante, Barcelona, Madrid, Málaga y Sevilla.
    </p>

    <!-- Values + Spain map -->
    <div class="relative w-full max-w-2xl flex flex-col items-center">

      <!-- Compromiso (top) -->
      <div class="flex flex-col items-center gap-2 mb-8">
        <div class="w-14 h-14 rounded-full border-2 border-stone-700 flex items-center justify-center">
          <Icon name="mdi:handshake-outline" class="w-7 h-7 text-stone-700" />
        </div>
        <p class="text-xs font-bold uppercase tracking-widest text-stone-700" style="font-family: 'CentraBold', sans-serif;">Compromiso</p>
      </div>

      <div class="flex items-center gap-8 w-full justify-center">
        <!-- Calidad (left) -->
        <div class="flex flex-col items-center gap-2 w-28 text-center">
          <div class="w-14 h-14 rounded-full border-2 border-stone-700 flex items-center justify-center">
            <Icon name="mdi:medal-outline" class="w-7 h-7 text-stone-700" />
          </div>
          <p class="text-xs font-bold uppercase tracking-widest text-stone-700" style="font-family: 'CentraBold', sans-serif;">Calidad</p>
        </div>

        <!-- Spain SVG map -->
        <div class="flex-1 max-w-xs">
          <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" class="w-full">
            <!-- Simplified Spain outline -->
            <path
              d="M 60 80 L 80 50 L 130 40 L 180 30 L 240 25 L 300 30 L 360 45 L 420 60 L 450 90 L 460 130 L 450 160 L 440 190 L 430 220 L 410 250 L 390 270 L 360 290 L 330 310 L 300 320 L 270 330 L 240 340 L 210 340 L 180 330 L 150 310 L 120 290 L 90 260 L 70 230 L 50 200 L 40 170 L 45 140 L 55 110 Z"
              fill="#e7e5e4"
              stroke="#a8a29e"
              stroke-width="2"
            />
            <!-- City dots -->
            <!-- Madrid -->
            <circle cx="255" cy="185" r="6" fill="#1c1917" />
            <text x="265" y="182" font-size="11" fill="#1c1917" font-family="sans-serif">Madrid</text>
            <!-- Barcelona -->
            <circle cx="380" cy="105" r="6" fill="#1c1917" />
            <text x="390" y="102" font-size="11" fill="#1c1917" font-family="sans-serif">Barcelona</text>
            <!-- Alicante -->
            <circle cx="340" cy="245" r="6" fill="#1c1917" />
            <text x="350" y="242" font-size="11" fill="#1c1917" font-family="sans-serif">Alicante</text>
            <!-- Sevilla -->
            <circle cx="145" cy="280" r="6" fill="#1c1917" />
            <text x="100" y="277" font-size="11" fill="#1c1917" font-family="sans-serif">Sevilla</text>
            <!-- Málaga -->
            <circle cx="200" cy="315" r="6" fill="#1c1917" />
            <text x="210" y="312" font-size="11" fill="#1c1917" font-family="sans-serif">Málaga</text>
          </svg>
        </div>

        <!-- Seguridad (right) -->
        <div class="flex flex-col items-center gap-2 w-28 text-center">
          <div class="w-14 h-14 rounded-full border-2 border-stone-700 flex items-center justify-center">
            <Icon name="mdi:shield-check-outline" class="w-7 h-7 text-stone-700" />
          </div>
          <p class="text-xs font-bold uppercase tracking-widest text-stone-700" style="font-family: 'CentraBold', sans-serif;">Seguridad</p>
        </div>
      </div>

      <!-- City list -->
      <div class="mt-10 flex flex-wrap justify-center gap-4 text-xs text-stone-500 uppercase tracking-widest" style="font-family: 'Montserrat', sans-serif;">
        <span>Alicante</span>
        <span>·</span>
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
