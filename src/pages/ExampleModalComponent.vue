<template>
    <div class="main">
        <PageComponent>
            <div slot="slot-pages" class="content-pages">
                <HelloWorld class="mt-5" :msg="'Reutilização de Modal'"/>

                <button v-b-modal="'modalId'" type="button" class="btn btn-modal" @click="openModal()">Open Modal</button>

                <ButtonComponent v-b-modal="'modalId'" type="button" :functionButton="openModal()" :msg="'Abrir Modal com Componente'"/>

                <Modal :id="'modalId'"  :title="'Status'" v-if="visible">
                  <template v-slot:header> Modal Header </template>

                  <template v-slot:body> Conteúdo da modal </template>

                </Modal>

            </div>
        </PageComponent> 
    </div>
</template>

<script>
import PageComponent from './PageComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Modal from '../components/modal/ModalComponent.vue';
import ButtonComponent from '../components/button/ButtonComponent.vue'

export default {
    name: 'ExampleModalComponent',
    components: {
        PageComponent,
        HelloWorld,
        Modal,
        ButtonComponent
    },

    data() {
      return {
        visible: false,
      };
    },
    methods: {
      openModal() {
        this.visible = true;
      },
    }

}

</script>

<style >

.btn-modal {
  background-color: rgb(96, 96, 214);
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  border: none;
  font-weight: bold;
}
</style>