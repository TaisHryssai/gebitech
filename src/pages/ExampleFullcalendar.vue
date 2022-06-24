<template>
    <div class="main">
        <PageComponent>
            <div slot="slot-pages" class="content-pages">
                <HelloWorld class="mt-5" :msg="'Reutilização de Calendar'"/>

                    <FullcalendarComponent
                      :events="events"
                      :eventClick="eventClick"
                      v-b-modal="'modalId'"
                    >
                    </FullcalendarComponent>

                    <Modal :id="'modalId'"  :label="'Status'" v-if="visible">
                        <template v-slot:header> Eventos </template>

                        <template v-slot:body> 
                            <p>Evento: {{dataObj.event.title}}</p> 
                            <p>Data: {{dataObj.event.start | formatDate}}</p> 
                        </template>

                        <template v-slot:footer>
                            <b-button @click="close()">Fechar</b-button>
                        </template>
                    </Modal>
            </div>
        </PageComponent> 
    </div>
</template>

<script>
import PageComponent from './PageComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';

import FullcalendarComponent from "../components/fullcalendar/Fullcalendar.vue";
import Modal from '../components/modal/ModalComponent.vue'
import moment from 'moment';

export default {
    name: 'ExampleFullcalendar',
    components: {
        PageComponent,
        HelloWorld,
        FullcalendarComponent,
        Modal
    },

    data(){
       return{
            events: [
                {
                    id: 1,
                    name: "Evento",
                    color: "#F8FB35",
                    date: "2022-06-24 18:00",
                },
                {
                    id: 2,
                    name: "Gebitech",
                    color: "#35E0FB",
                    date: "2022-06-24 18:00",
                },
            ],
            dataObj:"",
            visible: false,
        // CONFIGURAÇÃO DA AGENDA
       }
    },

    methods:{
        //EVENTO QUANDO CLICA NA PAUTA DO CALENDARIO ABRE A MODAL COM AS INFORMAÇÕES
        eventClick: function (info) {
            this.dataObj = info
            console.log("data " + info.event.start);
            this.openModal()
            this.dataObj = info;
        },    
        
        openModal() {
            this.visible = true;
        },
        close() {
            this.visible = false;
        },
    },

    filters: {
        formatDate: function(date){
            return moment(date).locale('pt-br').format('D/MM/Y H:mm');
        }
    }
}

</script>
