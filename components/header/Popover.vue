<template>
  <Popper>
    <button class="hover:text-sky-600">BLOGS</button>
    <template #content>
      <div class="border border-sky-400 rounded-md p-1 flex flex-col items-center w-32 bg-white">
        <button class="w-full hover:text-sky-700 hover:bg-gray-50" v-for="n in 10">Blog {{ n }}</button>
      </div>
    </template>
  </Popper>
</template>

<script lang="ts" setup>
import Popper from "vue3-popper";
</script>