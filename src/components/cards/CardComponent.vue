<template>
    <div>
        <b-card :bg-variant="classVariant" text-variant="white" :header="title" class="text-center">
            <b-card-text>{{text}}</b-card-text>
        </b-card>

    </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    classVariant: String,
    text: String,
    title: String
  },

  data: function () {
    return {
    }
  },

}
</script>
