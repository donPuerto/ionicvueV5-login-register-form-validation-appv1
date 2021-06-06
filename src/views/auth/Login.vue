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
            <ion-card-title>Log in</ion-card-title>
            <h5>Welcome back, hope you're doing well</h5>
          </ion-col>
        </ion-row>
        
        <ion-row class="ion-margin-top ion-padding-top">
          
          <ion-col size="12" >
            <Form
              :validation-schema="schema"
              :initial-values="initialValues"
              @submit="onSubmit"
              v-slot="{ resetForm }"
              
            >
              <div v-for="({id, name, label, required, input}, index) in fields" :key="index">
                <custom-field
                  :id= id
                  :name= name
                  :label= label
                  :required = required
                  :input = input
                />
              </div>
               
                  <ion-row class="ion-no-padding">
                    <ion-col size-md="8" size-xs="12" class="ion-no-padding">
                      <ion-button 
                        class="custom-button ion-text-wrap"
                        expand="block"  
                        type="submit" 
                      >
                        Login
                      </ion-button>
                    </ion-col>
                    <ion-col size-md="4" size-xs="12" class="ion-no-padding">
                      <ion-button 
                        class="custom-button ion-text-wrap"
                        expand="block"
                        @click="resetForm()"
                      >
                        Clear
                      </ion-button>
                    </ion-col>
                  </ion-row>
             
             
            </Form>
          
          </ion-col>
        </ion-row>

      </ion-grid>
    </ion-content>

    <core-footer 
      message="Don't have an account?" 
      text="Register" 
      linkPath="Register"
    />


    
  
</template>

<script lang="ts">
import { IonCardTitle, IonCol, IonContent,  IonGrid, IonRow, IonButton } from '@ionic/vue';
import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from '@/components/CustomField.vue'
import { useCustomFields }  from '@/composables/useFields'
import { useIonic }  from '@/composables/useIonic'
import { useSchema }  from '@/composables/useSchema'
import CoreHeader from '@/components/core/Header.vue'
import CoreFooter from '@/components/core/Footer.vue'
import CoreLoading from '@/components/core/Loading.vue'
import { defineComponent, ref } from 'vue';
import { Form  } from 'vee-validate';
import { LoginData } from '@/components/models'
import { useRouter } from 'vue-router'
import { authStore } from '@/store/auth';

export default defineComponent({
  name: 'AuthLoginView',
  components: {
    IonCardTitle, IonCol, IonContent, IonGrid,  IonRow,  IonButton,
    CustomField,
    CoreHeader, 
    CoreFooter,
    Form,

  },
  setup() {
    const { showLoader, hideLoader} = useIonic()
    const auth = authStore()
    const { login } = useCustomFields()
    const { loginSchema } = useSchema()
    const loadingStatus = ref(false)
    const router = useRouter()

    const initialValues  = {
      email: 'don.puerto@hotmail.com',
      password: 'Siemens1003++',
    };
        
    const onSubmit = async (values: LoginData, { resetForm }: any) => {
      const response = showLoader (
        'loading-custom-class',
        'Loading please wait...', 
        0 ,
        false,
        false,
        'dots',
      )
      console.log('response', response)
      try {
        if (response) {
            // auth.addUser(values).then((response) =>{
            //   console.log('login', response)
            //   hideLoader()
            //   router.push({name: 'Profile'})
            // })
              await hideLoader()
              router.push({name: 'Profile'})
          
        }

          resetForm()
      } catch (error) {
          console.log('Login Error')
      }
    }



    return {
      onSubmit,
      schema: loginSchema(),
      initialValues,
      // icons
      arrowBack, shapesOutline,
      
      fields: login(),
      loadingStatus
     
    }
  }
});
</script>

<style scoped lang="scss">
ion-content{ 
  font-family:Pacifico !important;
  font-size:1.1em;
}

.headingText {

    h5 {

        margin-top: 0.2rem;
        color: #d3a6c7;
        font-family:Pacifico !important;
        font-size:1.1em;
    }
}

</style>