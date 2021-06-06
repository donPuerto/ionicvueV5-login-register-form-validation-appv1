<template>
  <ion-page >
    <core-header
      :displayImage="true"
      translucent
      imagePath="/assets/login2.jpeg"
    />
   
    
    <ion-content :fullscreen="true">
      <div class="getStarted">
        <ion-grid>
          <ion-row class="ion-text-center ion-justify-content-center heading">
            <ion-col size="auto" >
              <ion-card-title>Join millions of other people discovering their creative side</ion-card-title>
            </ion-col>
          </ion-row>

          <ion-row class="`ion-text-center ion-justify-content-center">
            <ion-col size="auto">
              <div>
                <ion-button class="getStartedButton custom-button" @click="() => router.push('/auth/login')">
                  Get started &rarr;
                </ion-button>
              </div>
              
            </ion-col>
          </ion-row>
          
        </ion-grid>
      </div>

       
      
    </ion-content>

    <core-footer
      message="Already got an account?" 
      text="Login" 
      linkPath="Login"
    />
    

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonCardTitle, IonGrid, IonCol, IonRow, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import CoreHeader from '@/components/core/Header.vue';
import CoreFooter from '@/components/core/Footer.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {
    IonPage, IonContent, IonCardTitle, IonGrid, IonRow, IonCol, IonButton,
    CoreHeader, CoreFooter
  },
  setup() {
    const router = useRouter();
      return { router };
  }
});
</script>

<style scoped lang="scss">

.getStarted {

  height: 100%;
  --background: #ffffff;
  background-image: radial-gradient(#b8b8b8 1px, transparent 1px),
  radial-gradient(#b8b8b8 1px, #ffffff 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  border: 1px solid 1px;

  ion-card-title {
    color: black !important;
    letter-spacing: -0.08rem;
    font-weight: 900 !important;

  }
  .heading {
    margin-top: 7rem;
  }

  .getStartedButton {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
}
</style>