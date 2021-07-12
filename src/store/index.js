import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import fileUpload from './modules/file-upload'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    fileUpload
  },
  getters
})

export default store
