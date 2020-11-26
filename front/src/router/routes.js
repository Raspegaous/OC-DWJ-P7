import Home from '@/views/Home'
import Login from "@/views/Login";
import Index from "@/views/post/Index"
import Show from "@/views/post/Show"
import Category from "@/views/post/Category"
import Create from "@/views/post/Create"
import Account from '@/views/user/Account'

import auth from '../middleware/auth'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Login
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
            middleware: auth
        }
    },
    {
        path: '/post/:category',
        name: 'Category',
        component: Category,
        props: true,
        meta: {
            middleware: auth
        }
    },
    {
        path: '/post/show/:id',
        name: 'Show',
        component: Show,
        props: true,
        meta: {
            middleware: auth
        }
    },
    {
        path: '/post/create',
        name: 'Create',
        component: Create,
        meta: {
            middleware: auth
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
        meta: {
            middleware: auth
        }
    }
]
