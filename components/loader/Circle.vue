<template>
  <svg :width="size" :height="size" viewBox='0 0 58 58'>
    <g transform='translate(2 1)' stroke-width="0" :fill="fillColor ?? '#2980b9'" fill-rule='evenodd'>
      <circle cx="42.601" cy="11.462" r="5">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='1;0;0;0;0;0;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="49.063" cy="27.063" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;1;0;0;0;0;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="42.601" cy="42.663" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;1;0;0;0;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="27" cy="49.125" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;0;1;0;0;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="11.399" cy="42.663" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;0;0;1;0;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="4.938" cy="27.063" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;0;0;0;1;0;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="11.399" cy="11.462" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;0;0;0;0;1;0' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
      <circle cx="27" cy="5" r="5" fill-opacity="0">
        <animate attributeName='fill-opacity' begin='0s' dur='1.3s' values='0;0;0;0;0;0;0;1' calcMode='linear'
          repeatCount='indefinite' />
      </circle>
    </g>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  size: number
  fillColor?: string
}>()
</script>