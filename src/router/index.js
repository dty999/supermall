import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home')
const FenLei = ()=>import('views/fenlei/FenLei')
const GouWuChe = ()=>import('views/gouwuche/GouWuChe')
const Profile = ()=>import('views/dangan/Profile')
const Detail = ()=>import('views/detail/Detail')
Vue.use(VueRouter)

const routes = [
	{
				path:'',
				redirect:'/home'
			},
			{
				path: '/home',
				name: 'Home',
				component: Home
			},
			{
				path: '/fenlei',
				name: 'FenLei',
				component: FenLei
			},
			{
				path: '/gouwuche',
				name: 'GouWuChe',
				component: GouWuChe
			},
			{
				path: '/profile',
				name: 'Profile',
				component: Profile
			},
      {
        path:'/detail/:iid',
        name:'Detail',
        component:Detail
      }
      ,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
