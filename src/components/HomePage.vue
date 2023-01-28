<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in carouselItem"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
     </v-carousel>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            @click="galeryOpen"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-folder-multiple-image"
              size="x-large"
              color="#DC143C"
              start
            />

            Galeri
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            fiyatlar için
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            @click="contactOpen"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-information-outline"
              size="x-large"
              color="#DC143C"
              start
            />

             Iletişim
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
  import { ref } from "vue"
  import { useRouter } from "vue-router"

  export default {
    props: {
      name: {
        type: String,
        default: 'Selcuk-Mersin-33'
      }
    },
    
  setup() {
    const deneme = ref("selcuk-ari")
    const router = useRouter()

    const carouselItem = ref([
      {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
    ])

    const galeryOpen = () => router.push({name: 'galery'})
    const contactOpen = () => router.push({name: 'contact'})

    return {
      deneme,
      galeryOpen,
      contactOpen,
      carouselItem
    }
  }

  }
</script>
