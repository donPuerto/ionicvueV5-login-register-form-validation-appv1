<template>

        <div class="field">
           
            <ion-label class="fieldLabel" >{{$props.label}}</ion-label>
            <ion-input 
                class="customInput"
                :id="$props.id"
                :name="$props.name"
                :required="$props.required"
                :type="$props.input.props.type"
                :placeholder="$props.input.props.placeholder"
                v-model="value"
            />
            <ion-label class="errorFontSize" v-if="errorMessage" color="danger">{{errorMessage}}</ion-label>
        </div>
   
    
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import {  IonInput, IonLabel } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { Input } from '@/components/models'
import { useField } from 'vee-validate';


export default defineComponent({
    components: {
        IonInput, IonLabel
    },
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        required: {
            type: Boolean,
            required: false
        },
        input: {
            // @ts-ignore
            type: Object as PropType<Input>,
           
        },

    },
    setup (props) {
        const router = useRouter();
        const { errorMessage, value } = useField(props.name);
 

        onMounted(()=> {
            console.log('Custom Field Component')
        })

        

        return { 
            router,
            errorMessage,
            value,
        };
    }
})
</script>

<style lang="scss">

.errorFontSize {
   font-size: 14px !important;
   margin-top: 4px;
}

.field {
   margin-bottom: 1rem !important;
   &:last-child{
        margin: 0;
    }
}

.field {
    
    ion-label {

        padding-left: 0.2rem;
        padding-right: 0.5rem;
        color: #d3a6c7;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;

        p {

            color: rgb(236, 149, 35);
        }
    }
}




.customInput {

    --background: #834e76;
    --padding-bottom: 1rem;
    --padding-top: 1rem;
    --padding-start: 1rem;
    --padding-end: 1rem;
    border-radius: 10px;
    margin-top: 0.25rem;
    transition: all 0.2s linear;
}
</style>