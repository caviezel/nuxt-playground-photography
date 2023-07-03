<template>
  <PageWrapper>
    <div class="flex flex-col items-center">
      <div class="w-full lg:w-2/3 p-5">
        <div class='w-full flex flex-col items-center pt-5 space-y-5'>
          <h1 class="font-bold text-2xl">Contact Us</h1>
          <FormKit id="form1" :style="{ width: '400px' }" type="form" @submit="submit" :value="{ name: 'Ben' }"
            :incomplete-message="false">
            <FormKit type="text" label="Name" name="name" validation="required|length:3" help="Enter your full name." />
            <FormKit type="date" label="Birthday" name="dob"
              validation="required|date_between:1990-01-01 00:00:00,1999-12-31 23:59:59"
              :validation-messages="{ date_between: 'Only for those born in the 90s.' }"
              help="Enter your date of birth" />
            <FormKit type="tel" label="Phone Number" name="phoneNo" placeholder="xxx-xxx-xxxx" validation="required"
              help="What are your digits?" />
          </FormKit>
          <p class="text-justify text-gray-500">
            Test Counter from Pinia = {{ mainStore.counter }}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useMainStore } from '~/store/main'
import { toast } from 'vue3-toastify';
import { delay } from '~/lib/extensions/generics';
import { reset } from '@formkit/core'

const mainStore = useMainStore();

const notify = (msg: string) => toast.success(msg, { position: toast.POSITION.BOTTOM_RIGHT });

const submit = async (fields: any) => {
  await delay(1000)

  reset('form1', { 'name': 'Ten' })

  notify(JSON.stringify(fields))
}
</script>