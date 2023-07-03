<template>
  <header :style="{ height: `${height}px` }"
    class="flex flex-col md:flex-row md:justify-between items-center bg-white p-4">
    <NuxtLink to="/" class="font-bold uppercase text-3xl">{{ COMPANY_NAME }}</NuxtLink>
    <div class='flex items-center space-x-3 mt-5 md:mt-0'>
      <template v-for="r in routers">
        <NuxtLink v-if="typeof r.content === 'string'" class="text-lg hover:text-sky-600"
          :class="{ 'underline underline-offset-8': pathName === r.to }" :to="r.to">
          {{ r.content }}
        </NuxtLink>
        <component v-else :is="r.content" class="text-lg" />
      </template>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { COMPANY_NAME } from '~/scripts/constants'
import Popover from './Popover.vue'
import type { Component } from 'vue'

interface HeaderRouter {
  content: Component | string;
  to?: string;
}

const route = useRoute()
const pathName = route.path

const routers: HeaderRouter[] = [
  {
    content: Popover
  },
  { content: 'OUR PACKAGES', to: '/our-packages' },
  { content: 'FAQs', to: '/faq' },
  { content: 'CONTACT US', to: '/contact-us' },
];

defineProps<{
  height: number
}>()
</script>