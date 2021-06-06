import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login'
import MainPage from './components/user/MainPage'
//import CadastroEmpresa from './components/user/Cadastro_Empresa'

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
   
]
})
