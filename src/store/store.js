import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clientes: [],
        empresa: [],
        produto: [],
        NCM: [],
        Aliquot: [],
        Categoria: [],

        rotina: [
            { rotina: 'Cadastro de Clientes' },
            { rotina: 'Home' },
            { rotina: 'Cadastro de Empresa' },
            { rotina: "Cadastro de Produtos" },
            { rotina: "Cadastro de Categoria" },
            { rotina: "Cadastro de NCM" },
            { rotina: "Cadastro de Alíquota" }
        ],

        usuario: {
            Nome: '',
            Email: ''
        },
        usuarios: [{ nome: '', email: 's', senha: '' }]

    },
    getters: {
        userHeader(state) {
            return state.usuario
        },

        //Getter NCM
        retornoVariavelNCM(state) {
            return state.NCM
        },

        //Getter Categoria
        retornoVariavelCategoria(state) {
            return state.Categoria
        },
        //Getter Alíquota
        retornoVariavelAliquota(state) {
            return state.Aliquot
        }

    },
    mutations: {
        //Mutation NCM
        cadastrarNCM(state, objectInfo) {
            state.NCM.push(objectInfo)
        },
        editarNCM(state, objectInfo) {
            state.NCM[objectInfo.array].campoCadastro1 = objectInfo.campoEdita1
            state.NCM[objectInfo.array].campoCadastro2 = objectInfo.campoEdita2
        },
        excluirNCM(state, indice) {
            state.NCM.splice(state.NCM.indexOf(state.NCM[indice]), 1)
        },

        //Mutation Categoria
        cadastrarCategoria(state, objectInfo) {
            state.Categoria.push(objectInfo)
        },
        editarCategoria(state, objectInfo) {
            state.Categoria[objectInfo.array].campoCadastro1 = objectInfo.campoCadastro1
            state.Categoria[objectInfo.array].campoCadastro2 = objectInfo.campoCadastro2
        },
        excluirCategoria(state, indice) {
            state.Categoria.splice(state.Categoria.indexOf(state.Categoria[indice]), 1)
        },

        //Mutation Alíquota
        cadastrarAliquot(state, objectInfo) {
            state.Aliquot.push(objectInfo)
        },
        editarAliquot(state, objectInfo) {
            state.Aliquot[objectInfo.array].campoCadastro1 = objectInfo.campoEdita1
            state.Aliquot[objectInfo.array].campoCadastro2 = objectInfo.campoEdita2
        },
        excluirAliquot(state, indice) {
            state.Aliquot.splice(state.Aliquot.indexOf(state.Aliquot[indice]), 1)
        }
    },
    actions: {
        //Ações NCM
        cadastrarNCM(context, objectInfo) {
            context.commit('cadastrarNCM', objectInfo)
        },

        editarNCM(context, objectInfo) {
            context.commit('editarNCM', objectInfo)
        },
        excluirNCM(context, indice) {
            context.commit('excluirNCM', indice)
        },

        //Ações Categoria
        cadastrarCategoria(context, objectInfo) {
            context.commit('cadastrarCategoria', objectInfo)
        },
        editarCategoria(context, objectInfo) {
            context.commit('editarCategoria', objectInfo)
        },
        excluirCategoria(context, objectInfo) {
            context.commit('excluirCategoria', objectInfo)
        },

        //Ações Alíquota
        cadastrarAliquot(context, objectInfo) {
            context.commit('cadastrarAliquot', objectInfo)
        },

        editarAliquot(context, objectInfo) {
            context.commit('editarAliquot', objectInfo)
        },
        excluirAliquot(context, indice) {
            context.commit('excluirAliquot', indice)
        }

    }
})