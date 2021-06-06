<template>
  
    <core-header
      :displayToolbar="true"
      translucent
      imagePath="/assets/login2.jpeg"
    />

    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">
        <ion-row>
          <ion-col size="12" class="headingText ">
            <ion-card-title>Hi, Don!</ion-card-title>
            <h5>Glad to have you back</h5>
          </ion-col>
        </ion-row>
        
        <ion-row class="ion-margin-top ion-padding-top">
          
          <ion-col size="12" >
            {{auth.users}}
          </ion-col>
        </ion-row>

      </ion-grid>
    </ion-content>

  
</template>

<script lang="ts">
import { IonCardTitle, IonCol, IonContent,  IonGrid, IonRow} from '@ionic/vue';
import { arrowBack, shapesOutline } from "ionicons/icons";
import CoreHeader from '@/components/core/Header.vue'
import { defineComponent, onMounted } from 'vue';
import { authStore } from '@/store/auth';


export default defineComponent({
  name: 'AuthLoginView',
  components: {
    IonCardTitle, IonCol, IonContent, IonGrid,  IonRow,

    CoreHeader, 



  },
  setup() {

    const auth = authStore()
    console.log(auth.users)

    onMounted(() => {
        console.log('Pages Dashboard Profile')
    })
    return {
      auth,
      // icons
      arrowBack, shapesOutline,

     
    }
  }
});
</script>

<style scoped lang="scss">

.headingText {

    h5 {

        margin-top: 0.2rem;
        color: #d3a6c7;
    }
}

</style>