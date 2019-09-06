<template>
<div class="row">
    <div class="dia card col-sm-4 m-1" v-for="(dia,i) in days" :key="i">
        <div class="card-body">
            <h3 class="card-title">{{dia.dt_txt | formatDate}}</h3>
            <h4>{{dia.dt_txt | formatHour}}</h4>
            <div class="d-flex justify-content-center align-items-center">
                    <img v-bind:src="require('../assets/icons/'+dia.weather[0].icon+'.png')" 
                    :alt="''+ dia.weather[0].description +''"
                    :title="''+ dia.weather[0].description +''"
                    class="img-fluid" />
            </div>
           <div class="row">
                <div class="col-sm">
                    <span class="min" title="Temperatura mínima"><i class="fas fa-temperature-low"></i> {{dia.main.temp_min.toFixed(0)}}Cº</span>
                </div>
                <div class="col-sm">
                    <span class="max" title="Temperatura máxima"><i class="fas fa-temperature-high"></i> {{dia.main.temp_max.toFixed(0)}}Cº</span>
                </div>
            </div>
        </div> 
    </div> 
</div>
</template>
<script>
    export default {
        props: ['paso'],
        data() {
            return {            
                id:''
            }
        },
        created() {    
            this.id= this.paso
        },
        computed: {
            days(){
                return this.$store.getters['Days/get_days']
                }
        },
        mounted(){
            this.$store.dispatch('Days/readay', this.id)
        },   
    }
</script>
<style scoped>
    .dia{
        margin:auto;
    }
    img{
        width: 25%;
    }
    .card h3{font-size: 85%;}
    .card h4{font-size: 80%;}
    .min, .max{
        font-size: 75%;
    }
</style>