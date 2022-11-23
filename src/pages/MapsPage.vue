<template>
    <base-layout>

        <div class="ion-padding">
            <maps-google></maps-google>
        </div>
     



        <ion-card>
            <button class="check" expand="full" @click="change()  ">Click here to see hospitals
                around you</button>
        </ion-card>

        <ion-card class="card">
            <ion-list class="onel" v-for="hospital in allHospitals" :key="hospital.id">
                <ion-item class="item" lines="none" router-link="/maps1"> {{ hospital.properties.Name }}</ion-item>

            </ion-list>
        </ion-card>




    </base-layout>


</template>

<script>

import MapsGoogle from './MapsGoogle.vue';
import { IonList, IonItem, IonCard, } from '@ionic/vue';
import { mapGetters, mapActions } from 'vuex';


export default {
    components: {
        MapsGoogle,
        IonList,
        IonItem,
        IonCard,





    },
    setup() {
        const markers = []
        return {
            markers
        }

    },
  
    computed: {
        ...mapGetters('hospitals', {
            allHospitals: 'allHospitals'
        })

    },
    methods: {
        ...mapActions('hospitals', {
            fetchHospitals: 'fetchHospitals'
        }),
        async showHospitals() {
            await this.fetchHospitals();


        },
        handleClick() {
           prompt('your region')
          
        }

    }
   






}

</script>