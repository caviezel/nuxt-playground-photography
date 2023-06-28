<template>
  <div ref="target" class="flex flex-col justify-center items-center space-y-2" :class="rootClass">
    <p class="text-sky-500">{{ title }}</p>
    <p class="bold text-4xl">{{ currentValue.toLocaleString() }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Interpolation, lerp } from '~/lib/utils/interpolations'

const props = defineProps<{
  rootClass?: string,
  title: string,
  delay?: number,
  duration: number,
  targetValue: number
}>()

const currentValue = ref<number>(0)
const target = ref<HTMLDivElement | null>(null)

let tw: Interpolation
let hasAnimated = false

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    // only animate once showing
    if (hasAnimated || !isIntersecting) return;

    tw = Interpolation.start({ delay: props.delay, duration: props.duration, from: 0, to: 1 });
    tw.current.subscribe((t) => {
      const cur = lerp(0, props.targetValue, t);

      currentValue.value = Math.ceil(cur)
    })

    hasAnimated = true;
  },
)

onUnmounted(() => {
  tw?.stop()
})
</script>