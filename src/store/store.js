import  services from './services.js'
import mockPlayers from './mockPlayers.json'

export default {
  state: {
    dataPlayers: mockPlayers,
    playersBlockShow: false
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getPlayersData: (state) => {
      return () => {
        return new Promise((resolve) => {

          state.playersBlockShow = false

          const response = services.getPlayersData()
          
          response.then( res => {
            if (res && res.status == 200){ 
              resolve('success')
            } else {
              resolve(state.dataPlayers)
            }
          })

        })
      }
    },
  }
}