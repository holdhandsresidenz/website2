const store = {
    debug: true,
    state: {
       currentUser: {username: 'joni', realname:'Jonathan Schneider'}
    },
    setUser(newValue) {
        if (this.debug) console.log('setMessageAction triggered with', newValue)
        this.state.currentUser = newValue
    },
    clearUser() {
        if (this.debug) console.log('clearMessageAction triggered')
        this.state.currentUser = null
    }
};

export default store
