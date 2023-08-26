import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contatos:[
      {id : 1,nome:"leo",numero:"99999-8888",email:"leo@gmail.com",selecionado : false},
      {id : 2,nome:"pedro",numero:"99999-3333",email:"pedro@gmail.com",selecionado : false}
    ]
  },
  getters: {
  },
  mutations: {
    addContato(state,cont){
      if(cont[0] && cont[1] && cont[2]){
        state.contatos.push({
          id: new Date().getTime(),
          nome:cont[0],
          numero:cont[1],
          email:cont[2],  
          selecionado : false
       })
      }
    },
    removeContato(state,id){
      state.contatos = state.contatos.filter(contato => contato.id !== id)

    }    
  },
  actions: {
  },
  modules: {
  }
})
