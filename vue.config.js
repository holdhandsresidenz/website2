module.exports = {
    pages: {
        'index': {
            entry: './src/pages/public/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'private': {
            entry: './src/pages/private/main.js',
            template: 'public/index.html',
            title: 'Private',
            chunks: [ 'chunk-vendors', 'chunk-common', 'private' ]
        }
    }
}
