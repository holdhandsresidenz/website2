import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios";
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        baseURL: "http://localhost:8081/",
        //baseURL: "php/",
        scrollLeftPos: 0,
        scrollLeftSuspendended: false,
        smallScreen: false,
        questions: [],
        selectedQuestions: [],
        selectedResidents: [],
        sortPostsBy: "date"

    },
    getters: {
        getQuestions: state => {
            return state.questions
        },
        scrollState: state =>  {
            return state.scrollLeftSuspendended
        },
        isQuestionByIdSelected: state => question =>{
            return state.selectedQuestions.includes(question)
        },
        getBaseURL: state => {
            return state.baseURL
        }
    },
    mutations: {
        updateScrollLeft (state, pos) {
            state.scrollLeftPos = pos
        },
        setQuestions (state, payload) {
            state.questions = payload
        },
         suspendScroll (state) {
            state.scrollLeftSuspendended = true
         },
        activateScroll (state) {
            state.scrollLeftSuspendended = false
        },
        toggleSelectionOfQuestion ( state, question ) {
            let currentlySelectedQuestions = state.selectedQuestions.length
            let filtered = Array.from(state.selectedQuestions).filter(q => q !== question)
            if ( currentlySelectedQuestions === filtered.length) {
                filtered.push(question)
            }
            state.selectedQuestions = filtered
        }

    },
    actions: {
        fetchQuestions (context) {
            let baseURL = context.state.baseURL
            axios.get(baseURL + 'getQuestions.php').then(resp =>{
                let acceptedQuestions = Array.from(resp.data).filter(question => question.acceptedBy !== null)
                context.commit('setQuestions', acceptedQuestions.sort(() => Math.random() - 0.5))
            })
        },
        updatePostList (context) {
            let baseURL = context.state.baseURL
            axios.get(baseURL + 'getQuestions.php').then(resp =>{
                let acceptedQuestions = Array.from(resp.data).filter(question => question.acceptedBy !== null)
                context.commit('setQuestions', acceptedQuestions.sort(() => Math.random() - 0.5))
            })
        }
    }
})

export default store
