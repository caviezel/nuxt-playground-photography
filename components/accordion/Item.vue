<template>
  <div class="flex flex-col">
    <button :class="clsx('flex justify-between items-center cursor-pointer', titleClass)" @click="toggleOpen">
      <slot name="title" />
      <Icon icon="fas fa-angle-down"
        :root-class="clsx('transition ease-in-out duration-300', isOpen ? 'rotate-180' : 'rotate-0')" />
    </button>
    <div ref="target" class="overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import clsx from 'clsx';
import { Interpolation, lerp } from '~/lib/utils/interpolations'

const props = defineProps<{
  height?: number,
  openDuration?: number,
  titleClass?: string
}>()

let tw: Interpolation

const isOpen = ref(false)
const target = ref<HTMLDivElement | null>(null)
const h = props.height ?? 100
const openDuration = props.openDuration ?? 250

const toggleOpen = () => {
  isOpen.value = !isOpen.value

  tw = Interpolation.start({ duration: openDuration, from: 0, to: 1, easing: 'QuadOut' });
  tw.current.subscribe((t) => {
    const from = isOpen.value ? 0 : h
    const to = isOpen.value ? h : 0
    const cur = lerp(from, to, t);

    if (target.value) {
      target.value.style.height = `${cur}px`
    }
  })
}

onMounted(() => {
  console.log(target.value)

  if (target.value) {
    target.value.style.height = `0px`
  }
})

onUnmounted(() => {
  tw?.stop()
})
</script>