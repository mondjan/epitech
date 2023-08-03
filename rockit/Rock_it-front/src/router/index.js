import { createRouter, createWebHistory } from 'vue-router'
import myBooking from '../components/myBooking.vue'
import Quotation from '../views/quotationView.vue'
import HomeView from '../views/HomeView.vue'
// import ProfileView from '../views/ProfileView.vue'
import test from "./../views/testVieuw.vue"
import TestView from '../views/TestView.vue'
import admin from "../views/adminView.vue"
import ProfileView from '../views/ProfileView.vue'
import EditProfilePage from '../components/editProfilePage.vue'
import myBookingView from  '../views/myBookingView.vue'
import Request from "../views/RequestVieuw.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'indexVenues',
      component: HomeView
    },
    {
      path: '/Test',
      name: 'test',
      component: TestView
    },
    
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileView
    },
   
    {
      path: '/myBookings',
      name: 'myBooking2',
      component: myBookingView
    },
    {
      path: '/myBooking',
      name: 'myBooking',
      component: myBooking
    },
    {
      path: '/request/:id',
      name: 'request', 
      component: Request
    },
    {
      path: '/quotation/:id',
      name: 'quotation',
      component: Quotation
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: '/editProfilePage/:id',
      name: 'editProfilePage',
      component: EditProfilePage
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
  ]
})

export default router