export default {

  async getPlayersData() {
    let response = await fetch(`/api/playersData`)
      .catch (() => {
        return 'error'
      }) 
    if (response.status == 200) { 
      await response.json().then( () => {  
        
      }).catch( () => {
        
      }) 
    }  else {
      return response
    }
  },

}