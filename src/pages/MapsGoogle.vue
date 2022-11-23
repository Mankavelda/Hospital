<template>
  <div id="gmap"></div>
  <center><button @click="change()">click</button></center>
 
</template>

<script>
    const gscript= document.createElement("script")
        gscript.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZbBspKF87trC3ilcWvkK4xIl6kHtnrOE&callback=initMap")
        const coords ={ lat: 7.324, lng:12.345}
  export default{
    methods:{
        initMap(){
        new google.maps.Map(document.getElementById("gmap"),{
          zoom: 6,
          center: coords
        })
      },
      change(){
        const coords = {lat: 34.65, lng: 4.57}
         new google.maps.Map(document.getElementById("gmap"),{
          zoom:13,
          center:coords
        })
      }


    }
  }

</script>

<style scoped>
#gmap {
  width: 100%;
  height: 500px
}
</style>