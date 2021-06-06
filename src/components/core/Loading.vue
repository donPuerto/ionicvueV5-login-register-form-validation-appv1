<template>
  <!-- <ion-button @click="setOpen(true)">Show Loading</ion-button> -->
  <ion-loading
    :is-open="isOpenRef"
    cssClass="custom-loading"
    :message="message"
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
  {{message}}
</template>

<script>
import { IonLoading } from '@ionic/vue';
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
    message: { type: String, default: "Please wait..." },
    loadingStatus : { type: Boolean, default: false },
  },
  components: { IonLoading},
  setup(props) {
    const isOpenRef = ref(false);
    // @ts-ignore
    const setOpen = (state) => isOpenRef.value = state;
    
    watchEffect(() => {
        if(props.loadingStatus) setOpen(true)
        else setOpen(false)
    })


    return { isOpenRef, setOpen }
  }
});
</script>
<style lang="scss" scoped>
// .custom-loading{}
</style>