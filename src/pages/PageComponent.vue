<template>
  <div class="main">
    <div class="page">
      <div class="">
        <NavbarComponent />
      </div>
      <div class="content-page-right">

        <div class="pages">
          <slot name="slot-pages"></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/navbar/NavbarComponent.vue";

export default {
  name: "PageComponent",
  components: {
    NavbarComponent,
  },
};
</script>

