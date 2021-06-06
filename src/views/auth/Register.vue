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
            <ion-card-title>Sign up</ion-card-title>
            <h5>Lets get to know each other</h5>
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
                        Register
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
      message="Already got an account?" 
      text="Login" 
      linkPath="Login"
    />

    
  
</template>

<script lang="ts">
import { IonCardTitle, IonCol, IonContent,  IonGrid, IonRow, IonButton } from '@ionic/vue';
import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from '@/components/CustomField.vue'
import { useCustomFields }  from '@/composables/useFields'
import { useSchema }  from '@/composables/useSchema'
import CoreHeader from '@/components/core/Header.vue'
import CoreFooter from '@/components/core/Footer.vue'
import { defineComponent } from 'vue';
import { Form  } from 'vee-validate';
import { RegisterData } from '@/components/models'
import { authStore } from '@/store/auth';
import { useIonic } from '@/composables/useIonic';

export default defineComponent({
  name: 'AuthRegisterView',
  components: {
    IonCardTitle, IonCol, IonContent, IonGrid,  IonRow,  IonButton,
    CustomField,
    CoreHeader, 
    CoreFooter,
    Form,
  },
  setup() {
    const { showLoader, hideLoader} = useIonic()
    const { register } = useCustomFields()
    const { registrationSchema } = useSchema()
    const auth = authStore()
    
    const initialValues  = {
      firstName: 'Don',
      lastName: 'Puerto',
      email: 'don.puerto@hotmail.com',
      password: 'Siemens1003++',
      confirmPassword: 'Siemens1003++'
    };

    // const initialValues  = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    // };
        
    const onSubmit = (values: RegisterData, { resetForm }: any): void => {
      showLoader (
        'loading-custom-class',
        'Loading please wait...', 
        4000 ,
        false,
        false,
        'dots',
      )

      try {
          auth.addUser(values).then((response: boolean): void => {
            if (response) hideLoader()
          })
         
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          resetForm()
      } catch (error) {
          console.log('Login Error')
      }
    }

  

    return {
      onSubmit,
      schema: registrationSchema(),
      initialValues,
      // icons
      arrowBack, shapesOutline,
      fields: register(),
     
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