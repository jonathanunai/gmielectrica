<script setup lang="ts">
const sectors = [
  { name: 'RETAIL', img: '/retail.jpg', title: 'Tienda DIOR, Madrid' },
  { name: 'SANITARIO', img: '/sanitario.jpg', title: 'Proyecto Sanitario' },
  { name: 'OFICINAS', img: '/oficinas.jpg', title: 'Proyecto Oficinas' },
  { name: 'RESIDENCIAL', img: '/residencial.jpg', title: 'Proyecto Residencial' },
  { name: 'RESTAURACIÓN', img: '/restauracion.jpg', title: 'Proyecto Restauración' },
  { name: 'INDUSTRIAL', img: '/industrial.jpg', title: 'Proyecto Industrial' },
]

const current = ref(0)
const currentSector = computed(() => sectors[current.value]!)
let timer: ReturnType<typeof setInterval>

function goTo(i: number) {
  current.value = i
  restartTimer()
}

function restartTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    current.value = (current.value + 1) % sectors.length
  }, 5000)
}

onMounted(restartTimer)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <!-- Hero carousel -->
  <section class="relative w-full overflow-hidden" style="height: clamp(300px, 55vw, 540px);">
    <!-- Slides -->
    <transition-group name="fade">
      <img
        v-for="(sector, i) in sectors"
        v-show="i === current"
        :key="sector.name"
        :src="sector.img"
        :alt="sector.name"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </transition-group>

    <div class="absolute inset-0 bg-black/40" />

    <!-- Title -->
    <div class="absolute bottom-10 left-8 md:left-14 text-white">
      <transition name="slide-up" mode="out-in">
        <h1
          :key="currentSector.name"
          class="text-5xl md:text-6xl md:text-8xl uppercase leading-none"
          style="font-family: 'CentraBold', sans-serif;"
        >{{ currentSector.name }}</h1>
      </transition>
      <transition name="slide-up" mode="out-in">
        <p
          :key="currentSector.title"
          class="text-base md:text-lg mt-1"
          style="font-family: 'Montserrat', sans-serif;"
        >{{ currentSector.title }}</p>
      </transition>
    </div>

    <!-- Sector nav -->
    <nav class="absolute right-4 md:right-10 top-4 md:top-10 flex flex-col items-end gap-2">
      <button
        v-for="(sector, i) in sectors"
        :key="sector.name"
        class="text-xs md:text-sm tracking-widest uppercase transition cursor-pointer bg-transparent border-none p-0"
        :class="i === current ? 'text-white' : 'text-white/50 hover:text-white'"
        style="font-family: 'CentraBold', sans-serif;"
        @click="goTo(i)"
      >{{ sector.name }}</button>
    </nav>
  </section>

  <!-- Clients -->
  <section class="py-16 px-0 md:px-20 bg-white">
    <img src="/logos-referencias.png" alt="Logos de referencias de GM Colaborativos" class="w-full max-w-7xl object-contain mx-auto mb-10" onerror="this.style.display='none'" />
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
