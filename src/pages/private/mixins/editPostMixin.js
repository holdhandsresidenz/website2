import axios from 'axios'
export const editPostMixin = {
	name: "editPostMixin",

	data: function () {
		return {
			success: null
		}
	},

	methods: {

		createPostInDB(category, author, contentHTML,) {
			let url = this.$store.getters.getBaseURL + 'insertPost.php'
			let data = new FormData()
			data.append('category', category)
			data.append('contentHTML', contentHTML)
			data.append('author', author)
			axios.post(url, data).then(
				resp => {
					console.log(resp.data)
					this.success = true
					return resp.data

				}
			)
		},
		createAssetsInDB(filepathToAsset, idposts) {
			let url = this.$store.getters.getBaseURL + 'insertAsset.php'
			let data = new FormData()
			data.append('filepath', filepathToAsset)
			data.append('post', idposts)
			axios.post(url, data).then(
				resp => {
					console.log('asset in db eingetragen: ' + resp.data)
					return resp.data
				}
			)
		},
		userPath() {
			return "../posts/" + this.$store.getters.getCurrentUser.username + "/"
		},
		randomString() {
			return Math.random().toString(36).substring(4, 8)
		},
		createPostWithAssets(assets, category) {
			let authorID = this.$store.getters.getCurrentUser.idusers
			let url = this.$store.getters.getBaseURL + 'insertPost.php'
			let data = new FormData()
			data.append('category', category)
			data.append('contentHTML', '')
			data.append('author', authorID)
			axios.post(url, data).then(
				resp => {
					let postID = resp.data
					console.log('postID:', postID)

					const URL = this.$store.getters.getBaseURL + "saveFile.php";
					Array.from(assets).forEach(asset => {
						let data = new FormData();
						data.append("file", asset);
						data.append("name", this.randomString());
						data.append("path", this.userPath());
						axios.post(URL, data,).then((response) => {
							if (response.data === 'failed') {
								this.success = false
								return
							}
							let filepath = response.data.substring(3)
							console.log('datei hochgeladen:', filepath)
							this.createAssetsInDB(filepath, postID)
							this.success = true
							return
						})
					})
				})
			this.success = false

		}
	}
}

