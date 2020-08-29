const path = require("path");
const mode = process.env.NODE_ENV || "development";

const devtoolConfig = mode === "development" ? {
    devtool: "cheap-module-source-map",
} : {};

module.exports = {
    mode,
    ...devtoolConfig,
    target: "webworker",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "worker"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            context: path.resolve(__dirname, "src"),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
};
