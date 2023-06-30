<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5">
        <div class='w-full flex flex-col items-center pt-5 space-y-5'>
          <h1 class="font-bold text-2xl">Contact Us</h1>
          <FormKit :style="{ width: '400px' }" type="form" @submit="submit" :value="{ name: 'Ben' }">
            <FormKit type="text" label="Name" name="name" validation="required|length:3" help="Enter your full name." />
            <FormKit type="date" label="Birthday" name="dob"
              validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
              :validation-messages="{ date_between: 'Only for those born in the 90s.' }"
              help="Enter your date of birth" />
            <FormKit type="tel" label="Phone Number" name="phoneNo" placeholder="xxx-xxx-xxxx" validation="required"
              help="What are your digits?" />
          </FormKit>
        </div>
        <Footer />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { delay } from '~/lib/extensions/generics';

const submit = async (fields: any) => {
  await delay(1000)
  console.log(fields)
}
</script>

<style scoped></style>