<template>
    <div class="main">
        <PageComponent>
            <div slot="slot-pages" class="content-pages">
                <HelloWorld class="mt-5" :msg="'Reutilização de componentes'"/>

                <ul class="mt-6">
                    <li> <b-link :to="`/card`"> Exemplo com Card </b-link> </li>
                    <li> <b-link :to="`/button`"> Exemplo com Botão </b-link> </li>
                    <li> <b-link :to="`/modal`"> Exemplo com Modal </b-link> </li>
                    <li> <b-link :to="`/fullcalendar`"> Exemplo com Fullcalendar </b-link> </li>
                </ul>
            </div>
        </PageComponent> 
    </div>
</template>

<script>
import PageComponent from '../pages/PageComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
    name: 'HomeComponent',
    components: {
        PageComponent,
        HelloWorld
    },
}

</script>

<style scoped>
li {
  list-style-type: none;
}
</style>