<template>
    <div class="main">
        <PageComponent>
            <div slot="slot-pages" class="content-pages">

                <HelloWorld class="mt-5" :msg="'Reutilização de botão'"/>

                <Button :classVariant="'primary'" :msg="'O botão foi clicado ' + count" :functionButton="countClick"/>

                
            </div>
        </PageComponent> 
    </div>
</template>

<script>
import PageComponent from './PageComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Button from '../components/button/ButtonComponent.vue';

export default {
    name: 'ExampleButtonComponent',
    components: {
        PageComponent,
        HelloWorld,
        Button
    },

    data: function () {
        return {
            count: 0
        }
    },

    methods: {
      countClick() {
        this.count++;
      },
    }

}

</script>

<style scoped>
li {
  list-style-type: none;
}
</style>