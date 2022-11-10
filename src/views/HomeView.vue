<template lang="pug">
div(class="home")
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld(:msg="mesage")
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const mesage= ref('Welcome to Your Vue.js App-Selcuk');

    return {
      mesage,
    }
  },
}
</script>
