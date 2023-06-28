<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5">
        <div class='w-full flex flex-col items-center pt-5 space-y-10'>
          <atom-spinner v-if="mainStore.loading" :animation-duration="1000" :size="60" color="#9376E0" />
          <template v-else>
            <p class='font-bold text-5xl text-gray-700 tracking-wide'>
              Our Packages
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <p class="text-justify text-gray-500">
              We offer a range of customizable pricing packages for all your photo and video needs. From fashion shoots to
              commercial projects and documentaries, we’ve got you covered. Let’s work together to capture life’s moments
              and bring your vision to life!
            </p>
            <div class="flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-4 md:space-y-0">
              <animate-counter title="Total Photos" :delay="300" :duration="500" :target-value="50000" />
              <animate-counter title="Our Happy Customers" :delay="600" :duration="500" :target-value="100000" />
              <animate-counter title="Our Happy Friends" :delay="900" :duration="500" :target-value="5000000" />
            </div>
            <p class="text-justify text-gray-500">
              Test Counter from Pinia = {{ mainStore.counter }}
            </p>
            <button @click="mainStore.increment()"
              class="border border-gray-600 font-bold rounded-full p-3 hover:bg-gray-500 hover:text-gray-50">Contact
              Us!</button>
            <Footer />
          </template>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { AtomSpinner } from 'epic-spinners'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore();
mainStore.fetchData();
</script>