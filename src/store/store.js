import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        clientes:[],
        empresa:[],
        produto:[],
        NCM:[],

        rotina:[
            {rotina:'Cadastro de Clientes'},
            {rotina:'Home'},
            {rotina:'Cadastro de Empresa'},
            {rotina: "Cadastro de Produtos"},
            {rotina: "Cadastro de Categoria"},
            {rotina: "Cadastro de NCM"},
            {rotina: "Cadastro de Alíquota"}
        ],

        usuario:{
            Nome:'',
            Email:''
        },
        usuarios:[{nome:'',email:'s',senha:''}]

    },
    getters:{
        retornoVariavelNCM(state){
            return state.NCM
        }
        
    },
    mutations:{
        cadastrarNCM(state, objectInfo){
            state.NCM.push(objectInfo)
        },
        editarNCM(state, objectInfo){
            state.NCM[objectInfo.array].campoCadastro1 = objectInfo.campoEdita1
            state.NCM[objectInfo.array].campoCadastro2 = objectInfo.campoEdita2
        }
    },
    actions:{
        cadastrarNCM(context, objectInfo){
            context.commit('cadastrarNCM', objectInfo)
        },

        editarNCM(context, objectInfo){
            context.commit('editarNCM', objectInfo)
        },
    }
})