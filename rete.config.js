import vue from 'rollup-plugin-vue';

export default {
    input: 'src/index.js',
    name: 'ConnectionReroutePlugin',
    globals: {
        'vue': 'Vue'
    },
    plugins: [
        vue()
    ]
}