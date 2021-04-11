import axios from "axios";
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		baseURL: "http://localhost:8081/",
		//baseURL: "php/",
		currentUser: {username: "", idusers: "", realname: ""},
		questions: [],
		posts: [],
		users: [],
		connectedQuestions: []
	},
	mutations: {
		setConnectionsQuestions(state, payload) {
			this.state.connectedQuestions = payload
		},
		setUser(state, payload) {
			this.state.currentUser = payload
		},
		setUsers(state, payload) {
			this.state.users = payload
		},
		clearUser() {
			this.state.currentUser = null
		},
		setQuestions(state, payload) {
			this.state.questions = payload
		},
		setPosts(state, payload) {
			this.state.posts = payload
		}
	},
	getters: {
		getConnectedQuestions: state => {
			return state.connectedQuestions
		},
		getQuestionByID: state => id => {
			return state.questions.find(q => q.id === id)
		},
		getCurrentUser: state => {
			return state.currentUser
		},
		getPosts: state => {
			return state.posts
		},
		getBaseURL: state => {
			return state.baseURL
		},
		getAcceptedQuestions: state => {
			return Array.from(state.questions).filter(question => question.acceptedBy !== null)
		},
		getNotAcceptedQuestions: state => {
			return Array.from(state.questions).filter(question => question.acceptedBy === null)
		},
		getUserNameById: state => id => {
			return Array.from(state.users).find(user => user.idusers === id)
		},
	},
	actions: {
		fetchQuestions(context) {
			let baseURL = context.state.baseURL
			axios.get(baseURL + 'getUsers.php').then(respU => {
				context.commit('setUsers', respU.data)
			})
			axios.get(baseURL + 'getQuestions.php').then(respQ => {
				let questions = []
				respQ.data.forEach(question => {
					let author = question.author
					let acceptedBy = question.acceptedBy
					if (acceptedBy) {
						question.acceptedBy = (Array.from(context.state.users).filter(user => user.idusers === acceptedBy))[0]
					}
					if (author) {
						question.author = (Array.from(context.state.users).filter(user => user.idusers === author))[0]
					}
					questions.push(question)
				})
				context.commit('setQuestions', questions)
			})
		},
		fetchPosts(context) {
			let baseURL = context.state.baseURL
			axios.get(baseURL + 'getPosts.php').then(resp => {
				context.commit('setPosts', resp.data)
			})
		},
		fetchConnectedQuestions(context, postid) {
			let baseURL = context.state.baseURL
			let data = new FormData()
			data.append('id', postid.postid)
			axios.post(baseURL + 'getConnectedQuestions.php', data).then(
				resp => {
					context.commit('setConnectionsQuestions', resp.data)
				}
			)
		}

	}
});

export default store
