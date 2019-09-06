import axios from 'axios'
export default {
    namespaced: true,
    state: {
        days: []
      },
      mutations: {
        days(state,data) {
          state.days = [data.list[1],data.list[2],data.list[3],data.list[4]]
          return state.days
        }
      },
      getters:{
          get_days(state){
            return state.days
          }
      },
      actions: {
        readay: (context, id) =>{
          axios.get('https://api.openweathermap.org/data/2.5/forecast?id='+id+'&appid=d85a823da86d06c05b10ee6b1330f33e&units=metric')
          .then(response => {
            context.commit('days', response.data)
          })
          .catch(error => console.log(error))
        },
      }
}