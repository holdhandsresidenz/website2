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
        filteredPosts: [],
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
        setPosts (state, payload) {
          state.filteredPosts = payload
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
            // Logischen Ausdruck zum filtern nach Fragen erstellen: ...WHERE  question=1 OR question=3 OR ...
            let question_ids_exp_array = []
            Array.from(context.state.selectedQuestions).forEach(question => {
                let exp =  'question=' + question.id
                question_ids_exp_array.push(exp)
            })
            let question_ids_exp
            if (question_ids_exp_array.length === 0 ) {
                question_ids_exp = 'true'
            } else {
                question_ids_exp = question_ids_exp_array.join(' OR ')
            }
            console.log(question_ids_exp)

            // Logischen Ausdruck zum Filtern nach Residents erstellen: ...WHERE author=3 OR author=13 OR ...
            let author_ids_exp_array = []
            Array.from(context.state.selectedResidents).forEach(question => {
                let exp =  'question=' + question.id
                author_ids_exp_array.push(exp)
            })
            let author_ids_exp
            if (author_ids_exp_array.length === 0 ) {
                author_ids_exp = 'true'
            } else {
                author_ids_exp = author_ids_exp_array.join(' OR ')
            }
            console.log(author_ids_exp)


            let baseURL = context.state.baseURL
            axios.get(baseURL + 'getFilteredPosts.php',{
                params: {
                    question_ids_exp: question_ids_exp,
                    author_ids_exp: author_ids_exp
                }
                }).then(resp =>{
                context.commit('setPosts', resp.data)
            })
        }
    }
})

export default store
