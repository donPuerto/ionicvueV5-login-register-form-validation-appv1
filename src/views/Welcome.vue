<template>
    <ion-content>
        <div class="heading">
            <h1>Welcome</h1>
            <p>Please login or signup to continue using our app.</p>
        </div>
        <div class="image">
            <img src="/assets/welcome.svg" alt="welcome">
        </div>
        <div class="social-login">
            <p>Enter vial social network</p>
            <div class="links">
                <ion-button class="twitter">
                    <ion-icon :icon="logoTwitter"></ion-icon>
                </ion-button>
                <ion-button class="facebook" >
                    <ion-icon :icon="logoFacebook"></ion-icon>
                </ion-button>
            </div>
        </div>
    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent, IonButton, IonIcon } from '@ionic/vue'
import { logoFacebook, logoTwitter } from 'ionicons/icons'
export default defineComponent({
    components: {
        IonContent,
        IonButton,
        IonIcon
    },
    setup () {
        

        return {
            logoFacebook,
            logoTwitter
        }
    }
})
</script>

<style lang="scss" scoped>

</style>