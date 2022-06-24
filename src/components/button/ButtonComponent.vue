<template>
  <div class="hello">

    <b-button v-on:click="functionButton" :variant="classVariant">
      {{msg}}
    </b-button>


  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    msg: String,
    classVariant: String,
    functionButton: Function,
  },
    
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.hello{
    margin: 15px 0;
}
</style>
