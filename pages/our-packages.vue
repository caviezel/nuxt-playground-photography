<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5">
        <div class='w-full flex flex-col items-center pt-5 space-y-5'>
          <atom-spinner v-if="mainStore.loading" :animation-duration="1000" :size="60" color="#ff1d5e" />
          <template v-else>
            <p class='font-bold text-5xl text-gray-700 tracking-wide'>
              Our Packages
            </p>
            <p class="text-justify text-gray-500">
              Test Counter from Pinia = {{ mainStore.counter }}
            </p>
            <button @click="mainStore.increment()"
              class="border border-gray-600 font-bold rounded-full p-3 hover:bg-gray-500 hover:text-gray-50">Contact
              Us!</button>
          </template>
        </div>
      </div>
      <Footer />
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { AtomSpinner } from 'epic-spinners'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore();
mainStore.fetchData();
</script>