<template>
    <div class="main">
        <PageComponent>
            <div slot="slot-pages" class="content-pages">

                <HelloWorld class="mt-5" :msg="'Reutilização de card'"/>

                <b-row class="mt-5">
                    <b-col md="4">
                        <Card :classVariant="'primary'" :text="'exemplo com card 1'" :title="'Teste 1'"/>
                    </b-col>

                    <b-col md="4">
                        <Card :classVariant="'secondary'" :text="'exemplo com card 2'" :title="'Teste 2'"/>
                    </b-col>

                    <b-col md="4">
                        <Card :classVariant="'success'" :text="'exemplo com card 3'" :title="'Teste 3'"/>
                    </b-col>

                </b-row>

            </div>
        </PageComponent> 
    </div>
</template>

<script>
import PageComponent from './PageComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Card from '../components/cards/CardComponent.vue';

export default {
    name: 'ExampleCardComponent',
    components: {
        PageComponent,
        HelloWorld,
        Card
    },
}

</script>
