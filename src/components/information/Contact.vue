<template lang="pug">
.container.mt-1
  form
    v-text-field(v-model='emailName' :counter='10' label='First name' required='')
    v-text-field(v-model='emailEmail' :counter='10' label='Your Email' required='')
    v-textarea(v-model='emailMessage' clearable='' label='Message...')
    v-btn(size='x-large' variant='text' color="#DC143C" icon='mdi-send' @click='sendEmail')

</template>
<script lang="ts">
import { ref, getCurrentInstance } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  setup() {
    const emailName = ref('')
    const emailEmail = ref('')
    const emailMessage = ref('')
    //const { $refs } = getCurrentInstance();
    const sendMail = ref({})

    const sendEmail = () => {
      sendMail.value= `<p>${emailName.value}</p>`;
      emailjs.sendForm('service_9htl5rf', 'template_23j1pgg', 'Nbnbm4_rtrZJVNERs')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }

    return {sendEmail, emailName, emailEmail, emailMessage}
  }
}
</script>
<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>