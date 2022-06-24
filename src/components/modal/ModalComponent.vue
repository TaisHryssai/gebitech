<template>
    <div>
      <b-modal ref="myModal" centered :id="id" :title="`${title}`" size="lg" class="">
        <!-- HEADER -->
        <template #modal-header="{ close }">
          <slot name="header"> 
            <p>
              Default Header 
            </p>

            <b-button @click="close()">X</b-button>
          </slot>
        </template>

        <!-- BODY -->
        <template>
          <slot name="body"> 
            <p>
              Default Body 
            </p>
          </slot>
        </template>

        <!-- FOOTER -->
        <template #modal-footer="{ ok, cancel, hide }">
          <slot name="footer"> 
            <b-button size="sm" variant="success" @click="ok()">
              OK
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancel
            </b-button>
            <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
              Forget it
            </b-button>
          </slot>
        </template>
      </b-modal>

    </div>
</template>

<script>
  export default {
    name: 'ModalComponent',

    props:{
        title: String,
        id: String,
        data: Object,

        value: {
          type: String,
        },

        label: {
          type: String,
          required: true
        },
    }

  };
</script>
