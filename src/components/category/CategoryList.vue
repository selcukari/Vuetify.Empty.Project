<template lang="pug">
.d-flex.align-center.flex-column
  v-card.mt-2(v-for='(item, index) in mockDataCategories' :key='index' width='400' 
    :title='item.title' :subtitle='item.subtitle' :text='item.text'
  )
</template>

<script>
import mockDataCategories from './constants'

export default {
  name: 'CategoryList',
  setup() {
    return {
        mockDataCategories
    }
  }
}
</script>