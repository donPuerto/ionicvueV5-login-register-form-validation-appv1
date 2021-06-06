// import { ref } from 'vue';
import { loadingController } from '@ionic/vue';

export const useIonic = () => {
  return {
    showLoader,
    hideLoader
    
  }
}
async function showLoader  (
    cssClass= 'loading-custom-class',
    message = 'Please wait...', 
    duration = 0 ,
    translucent = false,
    backdropDismiss = false,
    spinner: any,

):  Promise<void>{
    const loading = await loadingController
    .create({
        cssClass,
        message,
        translucent,
        backdropDismiss,
        spinner,
        duration,
        // keyboardClose: true
    })
      // Show loader
      console.log('show loader')
      return await loading.present();
}

async function hideLoader ():  Promise<void> {
  console.log('hideLoader called')
  await loadingController.dismiss()
    // await loadingController
    // .dismiss().then((response) => {
    //     console.log('Loader closed!', response);
    // }).catch((err) => {
    //     console.log('hideLoader Error occured : ', err);
    // });

   
}

async function durationLoader (duration: number):  Promise<void> {
    setTimeout(function() {
        hideLoader()
    }, duration);
   
}




