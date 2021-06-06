<template>
    <ion-header :translucent="translucent">
        <ion-img
            v-if="displayImage"
            :src="imagePath"
        >
        </ion-img>
        <ion-toolbar v-if="displayToolbar">

            <ion-buttons slot="start">
                <ion-back-button class="custom-back" :default-href="{name: 'Home'}"></ion-back-button>
                
            </ion-buttons>

            <ion-buttons slot="end">
                <ion-button icon="arrowBack" class="custom-button">
                    <ion-icon :icon="shapesOutline" />
                </ion-button>
            </ion-buttons>

        </ion-toolbar>
    </ion-header>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import {  IonHeader, IonImg, IonToolbar, IonBackButton, IonButton, IonButtons,  IonIcon, } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { arrowBack, shapesOutline } from "ionicons/icons";
export default defineComponent({
    components: {
        IonHeader, IonImg,
        IonToolbar, IonBackButton, IonButton, IonButtons,  IonIcon, 
    },
    props: {
        displayImage: {
            type: Boolean,
            required: false
        },

        displayToolbar: {
            type: Boolean,
            required: false
        },

        imagePath: {
            type: String,
           
        },
        translucent: {
            type: Boolean,
            default: false
        },

    },
    setup () {
        const router = useRouter();
        onMounted(()=> {
            console.log('Header Component')
        })
        
        
        return { 
            // icons
            arrowBack, shapesOutline,
            router 
        };
    }
})
</script>

<style lang="scss">
ion-header {
  ion-img {
    border-bottom: 3px solid rgb(236, 149, 35);
  }

}

ion-toolbar {

    --border-style: none;
    --border-color: transparent;
    --padding-top: 1rem;
    --padding-bottom: 1rem;
    --padding-start: 1rem;
    --padding-end: 1rem;
}
</style>