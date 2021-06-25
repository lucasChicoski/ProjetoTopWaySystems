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
        retornoArrayNCM(state) {
            var array = [];

            for (var cont = 0; cont < state.NCM.length; cont++) {
                array.push(state.NCM[cont].campoCadastro1)
            }

            return array
        },


        //Getter Categoria
        retornoVariavelCategoria(state) {
            return state.Categoria
        },
        retornoArrayCategoria(state) {
            var array = [];

            for (var cont = 0; cont < state.Categoria.length; cont++) {
                array.push(state.Categoria[cont].campoCadastro1)
            }

            return array
        },

        //Getter Alíquota
        retornoVariavelAliquota(state) {
            return state.Aliquot
        },
        retornoArrayAliquota(state) {
            var array = [];

            for (var cont = 0; cont < state.Aliquot.length; cont++) {
                array.push(state.Aliquot[cont].campoCadastro2)
            }

            return array
        },
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
        },

        inserirProduto(state, objectInfo) {
            state.produto.push(objectInfo)
        },

        editarProduto(state,objectInfo){
            for(var array = 0; array < state.produto.length; array++){
                if(objectInfo.idEditar == state.produto[array].id){
                    var price = parseFloat(objectInfo.priceEdit);
                    var aliquot = parseFloat(objectInfo.aliquotEdit);
                    
                    var precoTotal = (price * (aliquot / 100)) + price

                    state.produto[array].productDescription = objectInfo.descriptionEdit;
                    state.produto[array].productPrice = objectInfo.priceEdit;
                    state.produto[array].productCategory = objectInfo.categoryEdit;
                    state.produto[array].productNCM = objectInfo.ncmEdit;
                    state.produto[array].productAliquot = objectInfo.aliquotEdit;
                    state.produto[array].calculedProdutc = precoTotal;

                }
            }
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
        },

        inserirProduto(context, objectInfo) {

            var price = parseFloat(objectInfo.productPrice);
            var aliquot = parseFloat(objectInfo.productAliquot)

            var precoTotal = (price * (aliquot / 100)) + price

            alert(objectInfo.productPrice)

            var obeject = {
                id: objectInfo.id,
                productDescription: objectInfo.productDescription,
                productPrice: objectInfo.productPrice,
                productCategory: objectInfo.productCategory,
                productNCM: objectInfo.productNCM,
                productAliquot: objectInfo.productAliquot,
                calculedProdutc: precoTotal
            }

            price = 0
            aliquot = 0

            context.commit('inserirProduto', obeject)

        },
        editarProduto(context, objectInfo){

            context.commit("editarProduto",objectInfo)
        }

    }
})