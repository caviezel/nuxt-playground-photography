<template>
  <div ref="target" class="flex flex-col" :class="rootClass">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Interpolation, lerp } from '~/lib/utils/interpolations'

const props = defineProps<{
  rootClass?: string,
  delay: number,
  duration: number
}>()

const target = ref<HTMLDivElement | null>(null)

let hasAnimated = false
let tw: Interpolation

const fromX = 10

const setRootStyle = (opacity: number, x: number) => {
  if (target.value) {
    target.value.style.opacity = `${opacity}`
    target.value.style.transform = `translateY(${x}px)`
  }
}

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    // only animate once showing
    if (hasAnimated || !isIntersecting) return;

    tw = Interpolation.start({ delay: props.delay, duration: props.duration, from: 0, to: 1 });
    tw.current.subscribe((t) => {
      const x = lerp(fromX, 0, t);

      setRootStyle(t, x)
    })

    hasAnimated = true;
  },
)

onMounted(() => {
  setRootStyle(0, fromX)
})

onUnmounted(() => {
  tw?.stop()
})
</script>