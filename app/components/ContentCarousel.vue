<script setup lang="ts">
const props = withDefaults(defineProps<{
  slides: { img: string; alt?: string }[]
  interval?: number
}>(), { interval: 8000 })

const current = ref(0)
let timer: ReturnType<typeof setInterval>

function goTo(i: number) {
  current.value = i
  restartTimer()
}

function prev() { goTo((current.value - 1 + props.slides.length) % props.slides.length) }
function next() { goTo((current.value + 1) % props.slides.length) }

function restartTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.slides.length
  }, props.interval)
}

onMounted(restartTimer)
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <section class="flex flex-col md:flex-row pt-10 mx-auto max-w-7xl shadow-lg" style="height: clamp(340px, 45vw, 520px);">
    <!-- Image (left) -->
    <div class="relative flex-1 bg-stone-200 overflow-hidden">
      <img
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.img"
        :alt="slide.alt ?? ''"
        class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
        :class="i === current ? 'opacity-100' : 'opacity-0'"
        onerror="this.style.display='none'"
      />
      <button
        class="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="prev"
      >&#8249;</button>
      <button
        class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/70 flex items-center justify-center hover:bg-white transition"
        @click="next"
      >&#8250;</button>
    </div>

    <!-- Content (right) — scoped slot exposes current index -->
    <div class="flex-1 flex flex-col justify-center overflow-y-auto px-10 md:px-16 py-14 gap-6">
      <slot :current="current" :go-to="goTo" />
      <!-- Dots -->
      <div class="flex gap-2 mt-2">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="w-2 h-2 rounded-full transition"
          :class="i === current ? 'bg-stone-800' : 'bg-stone-300'"
          @click="goTo(i)"
        />
      </div>
    </div>
  </section>
</template>
