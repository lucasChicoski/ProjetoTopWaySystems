import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login'
import MainPage from './components/user/MainPage'
import CadastroClientes from './components/user/CadastroDeClientes'
import teste from './components/user/teste'

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
        path:'/teste',
        component:teste
    }
   
]
})
