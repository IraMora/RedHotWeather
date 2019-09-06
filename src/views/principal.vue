<template>
    <div class="content-fluid">
        <cabecera />
        <section>
            <div class="row d-flex justify-content-center align-items-center p-5">
                <div class="col-sm-4 d-flex justify-content-center align-items-center p-3">
                    <miniciudad :idpasa="mini" @onRecibir="pasarid"/>

                </div>
                <div class="col-sm-4 d-flex justify-content-center align-items-center p-3">
                    <ciudad  :ocultar="ver" :pcity="city"  @onOcultar="ocultarcaja" />
                </div>
                <div class="col-sm-4 d-flex justify-content-center align-items-center p-3">
                    <miniciudad :idpasa="mini2" @onRecibir="pasarid"/>
                </div>
            </div>
            <div class="row">
                <transition name="slide"> 
                    <div id="caja" ref="caja" class="row col-sm p-5" v-show="ver" >
                        <div class="col-sm-6 p-1">
                            <h2>Más información</h2>
                            <p>
                                <span>Viento: {{city.viento}} km/h </span><br>
                                <span>Visibilidad: {{city.visibilidad}} km </span><br>
                                <span>Humedad: {{city.humedad}} % </span><br>
                                <span>Barómetro: {{city.barometro}} mbar</span><br>
                            </p>
                        </div>
                        <div class="row col-sm-6 justify-content-center align-items-center p-1" > 
                         <div class="row">
                            <!-- <div class="col-sm-6" v-for="dia in days" :key="dia"> -->
                            <!-- <div v-for="(dia,i) in days" :key="i"> -->
                                <dia :paso="this.id_default"/>
                            <!-- </div> -->
                          </div>  
                        </div>
                    </div>
                </transition>
            </div>
        </section>
        <pie />  
    </div>   
</template>
<script>
    import Cabecera from "@/components/cabecera.vue"
    import Pie from "@/components/pie.vue"
    import Ciudad from "@/components/ciudad.vue"
    import Miniciudad from "@/components/miniciudad.vue"
    import Dia from "@/components/dia.vue"

    export default {
        components: {Cabecera, Pie, Ciudad, Miniciudad, Dia},
        data() {
            return {
                ver: false,
                id_default: 2510409,
                id_minc1: 3128026,
                id_minc2: 6697039
            }
        },
        computed: {
            city(){
                return this.$store.getters['City/get_city']
                },
            mini(){
                return this.$store.getters['Mini/get_mini']
                },
            mini2(){
                return this.$store.getters['Mini2/get_mini']
                },
            days(){
                return this.$store.getters['Days/get_days']
                }
        },
        mounted(){
            this.$store.dispatch('City/readapi', this.id_default)
            this.$store.dispatch('Days/readay', this.id_default)
            this.$store.dispatch('Mini/readapi', this.id_minc1)
            this.$store.dispatch('Mini2/readapi', this.id_minc2)
        },
        methods: {
            ocultarcaja(ocultar){
                this.ver=ocultar
            },
            pasarid(recibir){
                this.ver=!this.ver
                if(this.id_minc1==recibir){
                    this.id_minc1=this.id_default 
                }
                else if(this.id_minc2==recibir){
                    this.id_minc2=this.id_default
                }
                this.id_default=recibir
                this.$store.dispatch('City/readapi', this.id_default)  
                this.$store.dispatch('Days/readay', this.id_default)
                this.$store.dispatch('Mini/readapi', this.id_minc1)                 
                this.$store.dispatch('Mini2/readapi', this.id_minc2)
            }
        }
    }
</script>
<style>
    section{
        padding: 50px;
        background-color: #000;
    }
    .row{margin:0;}
    #caja{
        margin: auto;
        background-color: #fff;
        border-radius: .25rem;
        -webkit-box-shadow:  0px 5px 5px 0px #ff0000; 
        box-shadow:  0px 5px 5px 0px #FF0000;
    }
    #caja h2{font-size: 1.25rem;}
    #info{
        height: 100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: opacity .5s;
    }
    .slide-enter, .slide-leave-to{
        opacity: 0;
    }

</style>