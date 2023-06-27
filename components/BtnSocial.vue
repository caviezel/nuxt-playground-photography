<template>
  <a class='rounded-full text-gray-600 text-center text-lg p-3 transition transform ease-in-out delay-100 duration-300 hover:-translate-y-1 hover:bg-gray-100'
    :class="childClass" :href="url" target='_blank' rel='noreferrer noopener' :style="{ height: '50px', width: '50px', }">
    <ClientOnly>
      <font-awesome-icon :icon="`fa-brands fa-${icon}`" />
    </ClientOnly>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  childClass?: string,
  icon: string,
  url: string
}>()
</script>