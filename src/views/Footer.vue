<template lang="pug">
v-footer.d-flex.flex-column
  .bg-teal.d-flex.w-100.align-center.px-4
    strong Get connected with us on social networks!
    v-spacer
    v-btn.mx-4(v-for='icon in socialIcons' :key="icon" size='small' color="primary")
      font-awesome-icon(:icon="icon")
  .px-4.py-2.bg-black.text-center.w-100
    | {{ new Date().getFullYear() }} &mdash; 
    strong Vuetify Selçuk Arı
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Footer',
  setup() {
    const socialIcons = ref([
      'fas fa-instagram',
      'mdi-cancel',
      'fa-solid fa-flag',
      'mdi-instagram',
    ])

    return {
      socialIcons,
    };
  },
}
</script>