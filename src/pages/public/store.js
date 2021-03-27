import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        scrollLeftPos: 0,
        scrollLeftSuspendended: false,
        smallScreen: false,

    },
    getters: {},
    mutations: {
        updateScrollLeft (state, pos) {
            state.scrollLeftPos = pos
        }
    },

})

export default store
