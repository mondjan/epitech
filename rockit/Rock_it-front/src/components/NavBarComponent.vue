<script setup>
import axios from 'axios'
import { createToaster } from '@meforma/vue-toaster'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useUserStore } from './../store/UserStore'
const UserStore = useUserStore()

let name = 'name'
let password = 'password'
let role = ref([])
let email = 'email'

let searchString = ref('')
const suggestions = ref([])

const isConnected = ref(UserStore.isConnected)
// let remember = false
const Lid = localStorage.getItem('id')
const Lname = localStorage.getItem('name')
const Lrole = localStorage.getItem('role')
const Lapi_token = localStorage.getItem('api_token')

// let cookie = document.cookie
// console.log(cookie)

const toaster = createToaster()
let getAUser = ref()

axios
  .get('http://127.0.0.1:8000/api/' + Lrole + 'byname/' + Lname)
  .then((response) => {
    getAUser.value = response.data
    console.log('token 1', getAUser.value[0].api_token)
    console.log('token 2', Lapi_token)
    if (getAUser.value[0].api_token == Lapi_token) {
      UserStore.isConnected = true
      isConnected.value = true
      console.log('user connected')
      console.log(isConnected)
      role.value = Lrole
    } else {
      UserStore.isConnected = false
      isConnected.value = false
      localStorage.clear()

      console.log("tokens didn't match")
    }
  })
  .catch((error) => {
    toaster.error('check login error')
    //console.log(error)
  })

function signup() {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
  if (regex.test(email) == false) {
    toaster.error('please enter a valid email adress')

    return
  }
  axios
    .post(
      'http://127.0.0.1:8000/api/register?name=' +
        name +
        '&email=' +
        email +
        '&password=' +
        password +
        '&role=' +
        role.value
    )
    .then((response) => {
      console.log(response)
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('id', response.data.id)
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('api_token', response.data.api_token)
      UserStore.isConnected = true
      isConnected.value = true
      toaster.success('account created')
      location.reload()
    })
    .catch((error) => {
      toaster.error('somethignwent wrong in creating your acount')
      console.log(error)
    })
}
function login() {
  axios
    .post('http://127.0.0.1:8000/api/login?email=' + email + '&password=' + password)
    .then((response) => {
      toaster.success(' succesfully Connected')
      // if (remember == true) {
      //   console.log('cookie')
      //   document.cookie = 'name=' + response.data.name
      //   document.cookie = 'role=' + response.data.role
      //   document.cookie = 'api_token=' + response.data.api_token
      // }
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('id', response.data.id)
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('api_token', response.data.api_token)
      UserStore.isConnected = true
      isConnected.value = true
      location.reload()
    })
    .catch((error) => {
      toaster.error('login failed')
      console.log(error)
    })
}

function logout() {
  localStorage.clear()

  UserStore.isConnected = false
  isConnected.value = false
  location.reload()
}
function search() {
  axios
    .get('http://127.0.0.1:8000/api/search/' + searchString.value)
    .then((response) => {
      console.log(response.data)
      suggestions.value = response.data
      console.log('suggetions', suggestions)
    })
    .catch((error) => {
      console.log(error)
    })
  console.log(searchString.value)
}
</script>

<template>
  <div class="navbar flex-1 flex-wrap">
    <div class="flex-1 flex-wrap">
      <RouterLink to="/">
        <img
          class="h-15 w-60"
          src="https://res.cloudinary.com/didthhgmq/image/upload/v1686126537/MicrosoftTeams-image_luswtc.png"
        />
      </RouterLink>
    </div>
    <div class="dropdown flex-1">
      <div class="flex self-start">
        <input
          type="text"
          placeholder=""
          v-model="searchString"
          class="input input-bordered px-40"
          @keyup="search()"
        />
      </div>
      <ul
        v-if="suggestions.length != 0"
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        <div v-for="suggestion in suggestions">
          <li>
            <a :href="'/profile/' + suggestion.id">
              {{ suggestion.name }}
            </a>
          </li>
        </div>
      </ul>
    </div>
    <div v-for="element in getAUser" v-if="isConnected == true">
      <div class="ElementName text-slate-50 text-2xl flex">
        <h1 class="flex-wrap">{{ element.name }}</h1>
      </div>
    </div>
    <div class="conditionalRendered" v-if="isConnected == true">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <a class="firstList"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
          </div>
        </label>
        <ul tabindex="0" class="Table">
          <li>
            <RouterLink :to="'/profile/' + Lid"
              ><a> <Icon icon="mdi:user" /> My Profile</a>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/venues"
              ><a><Icon icon="wpf:geo-fence" /> My venues</a>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/myBooking"
              ><a><Icon icon="ion:calendar" /> Bookings</a>
            </RouterLink>
          </li>
          <li v-if="role == 'admin'">
            <RouterLink to="/kpi"
              ><a> <Icon icon="dashicons:admin-generic" />Admin</a>
            </RouterLink>
          </li>
          <li>
            <a v-on:click="logout()"><Icon icon="mdi:logout" /> Log out</a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <a href="#my-modal-2" class="buttonColor">sign up</a>
      <a href="#my-modal-3" class="buttonColor">log in</a>
    </div>
  </div>

  <!-- The button to open modal -->

  <!-- Put this part before </body> tag -->
  <div class="modalSignUp">
    <div class="modal" id="my-modal-2">
      <div class="modal-box flex flex-col">
        <a href="#">X</a>
        <div class="flex items-center"></div>
        <div class="titleModal">Tell us about yourself!</div>
        <!-- <div class="titleModal">Tell us about yourself!</div> -->
        <label class="label">
          <span class="label-text">Your name</span>
        </label>
        <input
          type="text"
          :placeholder="name"
          class="input input-bordered w-full max-w-xs"
          v-model="name"
        />
        <label class="label">
          <span class="label-text-alt">Please enter your name</span>
        </label>
        <!-- <label class="label">
          <span class="label-text">Location</span>
        </label>
        <input
          type="text"
          :placeholder="location"
          class="input input-bordered w-full max-w-xs"
          v-model="location"
        />
        <label class="label">
          <span class="label-text-alt">Please enter your area of activity</span>
        </label> -->
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input
          type="email"
          :placeholder="email"
          class="input input-bordered w-full max-w-xs"
          v-model="email"
        />
        <label class="label">
          <span class="label-text-alt">please enter your email</span>
        </label>
        <label class="label">
          <span class="label-text">Your password</span>
        </label>
        <input
          type="password"
          :placeholder="password"
          class="input input-bordered w-full max-w-xs"
          v-model="password"
        />
        <label class="label">
          <span class="label-text-alt">Please choose a password</span>
        </label>
        <label class="label">
          <span class="label-text">what are you?</span>
        </label>
        <div class="divMajeur flex">
          <select v-model="role" multiple>
            <option>artist</option>
            <option>venue</option>
          </select>
        </div>

        <div class="modal-action">
          <a href="#" class="buttonColor" @click="signup()">Continue</a>
        </div>
      </div>
    </div>
  </div>

  <div class="modalSignIn">
    <div class="modal" id="my-modal-3">
      <div class="modal-box flex flex-col items-center">
        <a href="#">X</a>
        <label class="label">
          <span class="label-text">email </span>
        </label>
        <input type="text" class="input input-bordered w-full max-w-xs" v-model="email" />
        <label class="label">
          <span class="label-text">Your password</span>
        </label>
        <input
          type="password"
          placeholder=""
          class="input input-bordered w-full max-w-xs"
          v-model="password"
        />
        <label class="label">
          <span class="label-text-alt">Please enter your password</span>
        </label>

        <!-- <input type="checkbox" id="checkbox" v-model="remember" />
        <label for="checkbox">remember me</label> -->

        <div class="modal-action">
          <a href="#" class="buttonColor" @click="login()">send</a>
        </div>
      </div>
    </div>
  </div>
</template>
