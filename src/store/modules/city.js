import axios from 'axios'
export default {
    namespaced: true,
    state: { 
        city: {icon:'undefined'},
      },
    mutations: {
        city(state,data) {
            state.city.id= data.id,
            state.city.nombre= data.name,
            state.city.temp=data.main.temp.toFixed(0),
            state.city.temp_min=data.main.temp_min.toFixed(0),
            state.city.temp_max=data.main.temp_max.toFixed(0),
            state.city.icon=data.weather[0].icon,
            state.city.descripcion=data.weather[0].description,
            state.city.viento=data.wind.speed,
            state.city.visibilidad= data.visibility/1000,
            state.city.humedad= data.main.humidity,
            state.city.barometro= data.main.pressure
        }
    },
    getters:{
          get_city(state){
            return state.city
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