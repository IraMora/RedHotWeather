<template>
  <div id="app">
    <principal />
  </div>
</template>
<script>
  import Principal from "@/views/principal.vue"
  export default {
    name: 'App',
    components: {Principal}
  }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap'); 
    *{
      padding: 0px; margin:0px;
    }
    ::selection{
      color: #fff;
      background-color:#FF0000;
    } 
    h1,h2,h3,h4{font-family: 'Orbitron', sans-serif;} 
    h1,h2,h3,h4, span  {cursor:default;}
    a, a:hover, a:link, a:visited, a:active, a:focus{
      text-decoration:none;
      color: #000;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      text-align: center;
      color: #000;
      scroll-snap-type: y mandatory;
    }
    .container-fluid{ margin-left: 0px; margin-right: 0px;}
  </style>
