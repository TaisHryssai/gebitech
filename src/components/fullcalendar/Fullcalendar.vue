<template>
  <FullCalendar ref="fullCalendars" :options="calendarOptions">
    <template v-slot:eventContent='arg' v-bind:style="{ 'background-color': arg.event.backgroundColor }">
        <div class="event-wrapper" v-bind:style="{ 'background-color': arg.event.backgroundColor }">
            <span>{{ arg.event.extendedProps.name }}</span> 
        </div>
    </template>  
  </FullCalendar>
</template>

<script>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'FullcalendarComponent',

    components: {
        FullCalendar,
    },
    props:{
        events:Array,
        eventClick: Function,
    },
    data(){
       return{
            title: '',
            inicio: '',    
            calendarOptions: {
            plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: "dayGridMonth",
                editable: true,
                locale: 'pt-br',
                //tamanho do calendario
                // height: 380,
                // contentHeight:300,

                //tamanho campo resources
                eventClick: this.eventClick,
                eventDataTransform: this.eventDataTransform,

                //EVENTOS
                events: this.events,
                
                // itens que iram aparecer no header
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: ''                
                },

                buttonText:{
                      today: 'Hoje',
                }
            }
        }
    },
    methods:{
        // por padrão o fullcalendar aceita start, usando está função ele altera start para date
        eventDataTransform: function(event){
            event.title = event.name;
            event.start = event.date;
        },
    },
}
</script>