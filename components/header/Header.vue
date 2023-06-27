<template>
  <header :style="{ height: `${height}px` }"
    class="flex flex-col md:flex-row md:justify-between items-center bg-white p-4">
    <p class="font-bold uppercase text-3xl">{{ COMPANY_NAME }}</p>
    <div class='flex items-center space-x-3 mt-5 md:mt-0'>
      <NuxtLink v-for="r in routers" class="text-lg hover:text-gray-600 hover:font-bold"
        :class="{ 'underline underline-offset-8': pathName === r.to }" :to="r.to">
        {{ r.title }}
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { COMPANY_NAME } from '~/scripts/constants';

interface HeaderRouter {
  title: string;
  to: string;
}

const route = useRoute()
const pathName = route.path

const routers: HeaderRouter[] = [
  { title: 'HOME', to: '/' },
  { title: 'OUR PACKAGES', to: '/our-packages' },
  { title: 'CONTACT US', to: '/contact-us' }
];

defineProps<{
  height: number
}>()
</script>