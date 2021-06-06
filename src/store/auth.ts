import { defineStore } from 'pinia'
import { LoginData } from '@/components/models'

export const authStore = defineStore({
  id: 'authStore',
  state() {
    return {
      users: [],
      currentUser: null
    }
  },
  getters: {},
  actions: {
    async addUser(payload: never) {
      
      await this.users.push(payload)
      return true
      
    },
    // removeUser () {}
  }
})