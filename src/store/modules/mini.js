import axios from 'axios'
export default {
    namespaced: true,
    state: { //LLAMADA A LAS VARIABLES 
        mini: {icon:'undefined'},
      },
    mutations: {
        //asigna datos a la Variables
        city(state,data) {
            state.mini.id= data.id,
            state.mini.nombre= data.name,
            state.mini.temp_min=data.main.temp_min.toFixed(0),
            state.mini.temp_max=data.main.temp_max.toFixed(0),
            state.mini.icon=data.weather[0].icon,
            state.mini.descripcion=data.weather[0].description
         
        },
    },
    getters:{
          get_mini(state){
            return state.mini
          }
    },
    actions: {
        readapi: (context, id) =>{
            axios.get('https://api.openweathermap.org/data/2.5/weather?id='+id+'&appid=d85a823da86d06c05b10ee6b1330f33e&units=metric')
            .then(response => {
            context.commit('city', response.data)
            })
            .catch(error => console.log(error))
        }

    }
      
}