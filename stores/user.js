import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        count: 0,
        token:''
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count=this.count-1
        },
        set(value){
            this.count=value
        }
    },
    persist: true
})