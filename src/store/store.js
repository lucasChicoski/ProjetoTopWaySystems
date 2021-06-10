import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        clientes:[
       // {id:1, tipocliente:'esse é um teste/', identificationcliente:'esse é um teste/', nomecliente:'esse é um teste/'}
        ],

        rotina:[
            {rotina:'Cadastro de Clientes'},
            {rotina:'Página Principal'}
        ],

        usuario:{
            Nome:'',
            Email:''
        }

    }
})