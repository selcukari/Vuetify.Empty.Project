<template lang="pug">
v-row.mt-2.mr-1.ml-1
  v-col.d-flex.child-flex(v-for='n in 9' :key='n' cols='3')
    v-img.bg-grey-lighten-2(:src='`https://picsum.photos/500/300?image=${n * 5 + 10}`' :lazy-src='`https://picsum.photos/10/6?image=${n * 5 + 10}`' aspect-ratio='1' cover='')
      template(v-slot:placeholder='')
        v-row.fill-height.ma-0(align='center' justify='center')
          v-progress-circular(indeterminate='' color='grey-lighten-5')

</template>
<script lang="ts">
</script>