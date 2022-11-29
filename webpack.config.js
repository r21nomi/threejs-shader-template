const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.(vert|frag)$/i,
                use: ['raw-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};