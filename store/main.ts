import { defineStore } from 'pinia'
import { delay } from '~/lib/extensions/generics'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    loading: true,
  }),
  actions: {
    increment() {
      // `this` is the store instance
      this.counter++
    },
    async fetchData() {
      this.loading = true

      await delay(1000)

      this.loading = false
    },
  },
})
