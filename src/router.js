import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login'
import MainPage from './components/user/MainPage'
import CadastroClientes from './components/user/CadastroDeClientes'
import CadastroEMpresa from './components/user/CadastroDeEmpresa'
import CadastroProduto from './components/user/CadastroDeProduto'
import CadastroPessoas from './components/Cadastro'
import CadastroCategproa from './components/user/CadastroDeCategoria'
import CadastroNcm from './components/user/CadastroDeNcm.vue'
import CadastroAliquota from './components/user/CadastroDeAliquota.vue'

Vue.use(Router)


export default new Router({
    
    mode: "history",
    routes:[
        {
        path:'/',
        component:Login
    },
    
    {
        path:'/main',
        component:MainPage
    },
    {
        path:'/cadastroclientes',
        component: CadastroClientes
    },
    {
        path:'/cadastroempresa',
        component:CadastroEMpresa
    },
    {
        path:'/cadastroprodutos',
        component: CadastroProduto
    },
    {
        path:'/cadastrar',
        component:CadastroPessoas
    },
    {
        path:'/cadastrocategoria',
        component:CadastroCategproa
    },
    {
        path:'/cadastroaliquota',
        component:CadastroAliquota
    },
    {
        path:'/cadastroNcm',
        component:CadastroNcm
    }
   
]
})
