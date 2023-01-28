<template lang="pug">
v-footer.d-flex.flex-column
  .bg-teal.d-flex.w-100.align-center.px-4
    strong Get connected with us on social networks!
    v-spacer
    v-btn.mx-4(v-for='icon in icons' :key='icon' :icon='icon' variant='plain' size='small')
  .px-4.py-2.bg-black.text-center.w-100
    | {{ new Date().getFullYear() }} &mdash; 
    strong 
</template>
<script lang="ts">
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>