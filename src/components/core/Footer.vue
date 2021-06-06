<template>
    <ion-footer>
        <ion-grid>
           
            <ion-row class="ion-text-center ion-justify-content-center">
                <ion-col size="12">
                    <p >{{message}} 
                        
                        <router-link :to="{ name: linkPath }">
                            <span class="custom-link">{{text}}  &rarr;</span>
                        </router-link>
                    </p>
           
                    
                </ion-col>
               
            </ion-row>
        </ion-grid>
         <svg style="margin-bottom:-0.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7a506f" fill-opacity="1" d="M0,288L40,277.3C80,267,160,245,240,224C320,203,400,181,480,176C560,171,640,181,720,181.3C800,181,880,171,960,144C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    
    </ion-footer>
   
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import {  
    IonFooter,
    IonGrid, IonCol, IonRow, 
} from '@ionic/vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: {
        IonFooter, 
        IonGrid, IonCol, IonRow, 

    },
    props: ['message', 'text', 'linkPath'],
    setup () {
        const router = useRouter();
        onMounted(()=> {
            console.log('Footer Component')
        })

        
        return { router };
    }
})
</script>

<style scoped lang="scss">
ion-footer {
    ion-toolbar {
        --background: #7c3b6a;
        color: white;
        text-align: center;
    }
}
</style>