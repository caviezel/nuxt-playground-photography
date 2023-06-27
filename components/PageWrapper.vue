<template>
  <div class="w-full h-full">
    <Header :height="HEADER_H" />
    <div :style="{ height: `calc(100% - ${HEADER_H}px)` }" class="w-full overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const HEADER_H = 100
</script>