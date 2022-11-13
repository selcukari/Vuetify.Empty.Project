<template lang="pug">
.row
  .col-12
    #nav
      router-link(to='/') HomePage
      |  |
      router-link(to='/contentadd') ContentAdd
  .col-12.bg-light
    router-view
</template>

<script>

import {ref} from "vue";

export default {
  components: {
  },
  setup(){
    const writeComment = ref('');
    const isLike = ref(false);
    const like = isLike => {
      console.log(isLike.value);
      isLike.value = !isLike
    }
    const displayShow = ref(true)

    const clickButton = () => {
      displayShow.value = false
    }

    const cards = [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    ];

    return {
      cards,
      writeComment,
      isLike,
      like,
      clickButton,
      displayShow
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
