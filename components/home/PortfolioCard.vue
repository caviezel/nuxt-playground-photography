<template>
  <AnimateShow :class="rootClass" root-class="space-y-3" :delay="200" :duration="1000">
    <img :src="data.imgUrl" />
    <p class="mt-3 font-bold text-2xl tracking-widest">{{ data.title }}</p>
    <p class="tracking-wider">{{ data.desc }}</p>
  </AnimateShow>
</template>

<script lang="ts" setup>
import { PortfolioModel } from '~/scripts/constants';

defineProps<{
  rootClass?: string,
  data: PortfolioModel
}>()
</script>