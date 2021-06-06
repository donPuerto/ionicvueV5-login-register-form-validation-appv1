<template>
  <ion-page>
  <router-view/>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { IonPage  } from '@ionic/vue';

export default defineComponent({
  name: 'DashboardLayout',
  components: {
    IonPage
  },
  setup() {
    onMounted(()=> {
      console.log('Dashboard Layout')
    }) 
    return {

    }
  }
});
</script>

<style scoped lang="scss">

</style>