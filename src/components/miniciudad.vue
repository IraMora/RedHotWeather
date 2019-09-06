<template>
    <div class="card" @click="pasarid">
        <div class="card-body">
            <h3 class="card-title">{{mini.nombre}}</h3>
            <div class="d-flex justify-content-center align-items-center">
                    <img v-bind:src="require('../assets/icons/'+mini.icon+'.png')" 
                    :alt="''+ mini.descripcion +''"
                    :title="''+ mini.descripcion +''"
                    class="img-fluid" />
            </div>
           <div class="row">
                <div class="col-sm-6">
                    <span class="min" title="Temperatura mínima"><i class="fas fa-temperature-low"></i> {{mini.temp_min}}Cº</span>
                </div>
                <div class="col-sm-6">
                    <span class="max" title="Temperatura máxima"><i class="fas fa-temperature-high"></i> {{mini.temp_max}}Cº</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['idpasa'],
        data() {
            return {
                mini: null
            }
        }, 
        methods: {
            pasarid(){
                this.mini=this.idpasa
                this.$emit('onRecibir',this.mini.id)              
            },
        },
        computed: {
            // mini(){
            //     return this.$store.getters['Mini/get_mini']
            // }
        },
        mounted(){ 
            // this.$store.dispatch('Mini/readapi', this.id)
        },
        created() {
            this.mini=this.idpasa
        } 
    }
</script>
<style scoped>
    .card, .card span, .card h3{cursor: pointer;}
    .col-sm-6{padding: 5px;}
    .card h3 {
        font-size: 1.0rem;
    }
    .min,.max{
        font-size: 75%;
    }
    @media (min-width: 768px){ 
        img{
            width: 50%;
        }
        .min,.max{
            font-size: 75%;
        }
    }
</style>
