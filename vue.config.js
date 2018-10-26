module.exports = {
    baseUrl: './',
    configureWebpack: {
        performance: {
            hints: "warning", // enum
            maxAssetSize: 1048576, // int (in bytes),
            maxEntrypointSize: 1048576, // int (in bytes)
        }
    }
}