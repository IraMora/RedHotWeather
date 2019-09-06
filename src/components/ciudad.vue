<template>
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">{{ciudad.nombre}}</h2>
            <div class="row">
                <div class="col-sm">
                    <img v-bind:src="require('../assets/icons/'+ciudad.icon+'.png')" 
                    :alt="''+ ciudad.descripcion +''"
                    :title="''+ ciudad.descripcion +''"
                    class="img-fluid" />
                </div>
                <div id="temp" class="d-flex justify-content-center align-items-center col-sm">
                    <span title="Temperatura">{{ciudad.temp}}Cº</span>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <span class="min" title="Temperatura mínima"><i class="fas fa-temperature-low"></i> {{ciudad.temp_min}}Cº</span>
                </div>
                <div class="col-sm">
                    <span class="max" title="Temperatura máxima"><i class="fas fa-temperature-high"></i> {{ciudad.temp_max}}Cº</span>
                </div>
            </div>
        </div>
        <div class="card-footer justify-center">
            <a href="#caja" class="fas fa-angle-double-down" @click="ocultarcaja" title="Más información"></a>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['ocultar', 'pcity'],
        data() {
            return { 
                ver: 'null',            
                ciudad: {}
            }
        }, 
        methods: {
            ocultarcaja(){
                this.ver=!this.ver
                this.$emit('onOcultar',this.ver)              
            }
        },
        created() {
            this.ver=this.ocultar.ver
            this.ciudad=this.pcity
        }
    }
</script>

<style>
    #temp{
        font-size: 200%;
    }
    .card{
        color: #000;
        border: 1px solid #FF0000;
        -webkit-box-shadow:  0px 5px 5px 0px #ff0000; 
        box-shadow:  0px 5px 5px 0px #FF0000;
    }
    .card h2{
        font-size: 1.25rem;
    }
    .card h2, .card h3{
        color: rgb(0, 0, 0);
    }
    .card-header, .card-footer{
        background-color: #fff;    
        border:0px;
    }
    .min {
        color: blue;
    }
    .max, .fa-angle-double-down:hover{
        color: #ff0000;
    }
    .fa-angle-double-down{
        cursor: pointer;
    }
    @media (min-width: 768px){ 
        .card h2{
            font-size: 3.5rem;
        }
    }
</style>