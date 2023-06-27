<template>
  <footer class='flex flex-col lg:flex-row items-center justify-between p-2 text-gray-500 w-full'>
    <div class="flex items-center">
      <BtnSocial icon="facebook" :url="LINK_FB" />
      <BtnSocial icon="instagram" :url="LINK_IG" />
    </div>
    <div>
      <p>{{ COMPANY_COPYRIGHTS }}</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { LINK_FB, LINK_IG, COMPANY_COPYRIGHTS } from '~/scripts/constants';
</script>