<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5 flex flex-col items-center space-y-2">
        <accordion-item :height="50" title-class="p-4 font-bold bg-gray-100 rounded-lg">
          <template #title>
            <p class="text-sky-500">Should I separate my laundry items?</p>
          </template>
          <div class="flex flex-col p-2 space-y-5">
            <p class="text-gray-600 text-sm">
              We know it’s a pain, but please do. It will ensure all your requirements are met. For color separation and
              service types, we strongly advise using separate bags.
            </p>
          </div>
        </accordion-item>
        <accordion-item :height="70" title-class="p-4 font-bold bg-gray-100 rounded-lg">
          <template #title>
            <p class="text-green-500">Do I need to weigh my clothes before collection?</p>
          </template>
          <div class="flex flex-col p-2 space-y-5">
            <p class="text-gray-600 text-sm">
              Weighing your clothes before you send them in is a great way to ensure that your order is accurately priced.
              But it’s not something we ask of our customers—our team of laundry specialists will weigh your order on
              arrival at the facility, and then update your order with the weight and price.
            </p>
          </div>
        </accordion-item>
        <accordion-item :height="800" title-class="p-4 font-bold bg-gray-100 rounded-lg">
          <template #title>
            <p class="text-red-500">Can you guarantee my items won't be damaged?</p>
          </template>
          <div class="flex flex-col p-2 space-y-5">
            <img src="/photoshoot1.jpg" class="rounded-md" />
            <p class="text-gray-600 text-sm">
              We know how important it is to you to have your items arrive safely and in perfect condition. Your items are
              handled with maximum care and up-to-date equipment. In the extremely rare case where damage occurs, we will
              cover it. Please have in mind that all claims must be made within 48 hours after delivery.
            </p>
          </div>
        </accordion-item>
        <Footer />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import clsx from 'clsx';


</script>