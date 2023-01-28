<template lang="pug">
v-card(flat='')
  v-toolbar(color='primary' dark='' extended='' flat='')
    v-app-bar-nav-icon(@click="routerHomePage")
  v-card.mx-auto(max-width='800' style='margin-top: -64px;')
    v-toolbar(flat='')
      v-toolbar-title(style='font-size: 20px; color: #cc2900; text-align:center')
        .font-weight-bold
          v-icon(icon='mdi-cached' size='large' color='primary' start='')
          | Mersin Geri Dönüşüm 
          v-icon(icon='mdi-cached' size='large' color='primary' start='')
      v-spacer
      v-btn(icon='')
        v-icon mdi-magnify
      v-btn(icon='')
        v-icon mdi-apps
      v-btn(icon='')
        v-icon mdi-dots-vertical
    v-divider
    // v-card-text(style='height: 200px;')
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  name: 'AppBar',
  setup() {
const router = useRouter()

const routerHomePage = () => router.push({name: 'home'})

return { router, routerHomePage}
  },
}
</script>
