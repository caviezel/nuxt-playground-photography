<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5">
        <div class='w-full flex flex-col lg:flex-row justify-between items-start pt-5'>
          <div class='lg:px-4 lg:w-1/3 mb-3'>
            <p class='font-bold text-3xl'>
              VIDEO & PHOTO PRODUCTION IN BALI
            </p>
          </div>
          <div class="flex-1">
            <p class="text-justify">
              Balipic is a Bali based full service production company offering services in Photography, Videography,
              Motion Design, Post Production, Styling, Hair & Make-Up, Casting and any production staffing you need for
              your photo or video shoot.
              We can organise any kind of video or photo production shoot for Fashion, Villa & Hotel, Food, Event,
              Corporate, Product, Underwater, Sport and more.
              Balishoot is part of Kosong Satu Group together with Baliprod and Bali Model Agency
            </p>
          </div>
        </div>
        <div class='w-full flex flex-col items-center space-y-20 pt-20'>
          <HomePortfolioCard v-for="pModel in PORTFOLIOS" :data="pModel" />
        </div>
        <div class="flex justify-center items-center py-20 w-full">
          <div class="flex flex-col items-center space-y-8">
            <div class="tracking-widest font-bold text-4xl">
              <p>Best Photographer in Bali</p>
              <p>Let's get in touch now!</p>
            </div>
            <button
              class="border border-gray-600 font-bold rounded-full w-1/2 p-3 hover:bg-gray-500 hover:text-gray-50">Contact
              Us!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { PORTFOLIOS } from '~/scripts/constants';

</script>