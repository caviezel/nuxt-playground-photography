<template>
  <ClientOnly>
    <font-awesome-icon :icon="icon" :class="rootClass" />
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string,
  rootClass: string,
}>()
</script>