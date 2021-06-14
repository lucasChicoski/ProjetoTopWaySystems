import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        clientes:[],
        empresa:[],
        produto:[],

        rotina:[
            {rotina:'Cadastro de Clientes'},
            {rotina:'Home'},
            {rotina:'Cadastro de Empresa'},
            {rotina: "Cadastro de Produtos"}
        ],

        usuario:{
            Nome:'',
            Email:''
        },
        usuarios:[{nome:'',email:'s',senha:''}]

    }
})