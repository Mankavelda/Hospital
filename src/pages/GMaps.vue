<template>
    <div class="map" ref="mapDivRef"></div>
    
    <center><button class="btn btn-success" @click="change()">click</button></center>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "GMap",
    props: {
      center: { lat: Number, lng: Number },
      zoom: Number,
      mapType: String,
      disableUI: Boolean
    },
    setup(props) {
      // the google map object
      const map = ref(null);
  
      // the map element in the templste
      const mapDivRef = ref(null);
  
      // load in the google script
      onMounted(() => {
        // key is is the .env file
        const key = 'AIzaSyBZbBspKF87trC3ilcWvkK4xIl6kHtnrOE';
  
        // create the script element to load
        const googleMapScript = document.createElement("SCRIPT");
        googleMapScript.setAttribute(
          "src",
          `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
        );
        googleMapScript.setAttribute("defer", "");
        googleMapScript.setAttribute("async", "");
        document.head.appendChild(googleMapScript);
      });
  
      /**
       * this function is called as soon as the map is initialized
       */
      window.initMap = () => {
        map.value = new window.google.maps.Map(mapDivRef.value, {
          mapTypeId: props.mapType || "roadmap",
          zoom: props.zoom || 12,
          disableDefaultUI: props.disableUI || false,
          center: props.center || { lat: 4.061536, lng: - 9.786072}
        });
      },
      window.change =()=> {
        map.value = new window.googgle.maps.Map(mapDivRef.value,{
            zoom:12,
            center:{lat: 3.45, lng:4.567}
        })
      }
  
      return {
        mapDivRef
      };

    
      
    }
  };
  </script>
  
  <style lang="css" scoped>
  .map {
    width: 100%;
    height: 300px;
    background-color: azure;
  }
  </style>