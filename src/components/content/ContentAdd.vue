<template lang="pug">
.wrapper
  v-card.mx-auto(max-width='500')
    v-container(fluid='')
      v-row(dense='')
        v-col(v-for='card in cards' :key='card.title' :cols='card.flex')
          v-card
            v-img.align-end(:src='card.src' gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)' height='200px' cover='')
              v-card-title.text-white(v-text='card.title')
            // like ve bookmark
            v-card-actions
              v-spacer
              v-btn(size='small' color='surface-variant' variant='text' icon='mdi-heart' @click='like(!isLike)')
              v-btn(size='small' color='surface-variant' variant='text' icon='mdi-bookmark')
            // gelen yorumlar
            v-card(text='...' variant='outlined')
            // yorum ve gönder butonu
            div
              v-textarea(v-model='writeComment')  
              v-btn(size='small' color='surface-variant' variant='text' icon='mdi-send' @click='sendComment')
</template>
<script>
import {ref} from 'vue';

export default {
  name: 'ContentAdd',
  setup(){
    const writeComment = ref('');
    const isLike = ref(false);
    const like = isLike => {
      console.log(isLike.value);
      isLike.value = !isLike
    }

    const cards = [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    ];

    return {
      cards,
      writeComment,
      isLike,
      like,
    }
  }
}

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
