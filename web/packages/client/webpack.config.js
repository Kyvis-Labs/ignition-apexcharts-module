/**
 * Webpack build configuration file.  Uses generic configuration that is appropriate for development.  Depending on
 * the needs of your module, you'll likely want to add appropriate 'production' configuration to this file in order
 * do do things such as minify, postcss, etc.
 *
 * To learn more about webpack, visit https://webpack.js.org/
 */

const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    WebpackOnBuildPlugin = require('on-build-webpack');

const LibName = "Components";

// function that copies the result of the webpack from the dist/ folder into the gateway resources folder.  Used
// in a post-build step so that our web assets are packed into our jar when the module is built.
function copyToResources() {
    const resourceFolder = path.resolve(__dirname, '../../..', 'gateway/src/main/resources/mounted/');
    const jsToCopy = path.resolve(__dirname, "dist/", `${LibName}.js`);
    const cssToCopy = path.resolve(__dirname, "dist/", `${LibName}.css`);
    const jSResourcePath = path.resolve(resourceFolder, `${LibName}.js`);
    const cssResourcePath = path.resolve(resourceFolder, `${LibName}.css`);


    const toCopy = [{from:jsToCopy, to: jSResourcePath}, {from: cssToCopy, to: cssResourcePath}];

    // if the desired folder doesn't exist, create it
    if (!fs.existsSync(resourceFolder)){
        fs.mkdirSync(resourceFolder)
    }

    toCopy.forEach( file => {
        console.log(`copying ${file} into ${resourceFolder}...`);

        try {
            fs.access(file.from, fs.constants.R_OK, (err) => {
                if (!err) {
                    fs.createReadStream(file.from)
                        .pipe(fs.createWriteStream(file.to));
                } else {
                    console.log(`Error when attempting to copy ${file.from} into ${file.to}`)
                }
            });
        } catch (err) {
            console.error(err);
            // rethrow to fail build
            throw err;
        }
    });
}


const config = {

    // define our entry point, from which we build our source tree for bundling
    entry: {
        Components:  path.join(__dirname, "./typescript/client-components.ts")
    },

    output: {
        library: [LibName],  // name as it will be accessible by on the webpack when linked as a script
        path: path.join(__dirname, "dist"),
        filename: `${LibName}.js`,
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    // Enable sourcemaps for debugging webpack's output.  Should be changed for production builds.
    devtool: "source-map",

    resolve: {
        extensions: [".jsx", ".js", ".ts", ".tsx", ".d.ts", ".css", ".scss"],
        modules: [
            path.resolve(__dirname, "../../node_modules"),  // look at the local as well as shared node modules when resolving dependencies
            path.resolve(__dirname, "node_modules")
        ]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: false,
                        experimentalWatchApi: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$|.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: false }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: false }
                    },
                ]
            }
        ]
    },
    plugins: [
        new WebpackOnBuildPlugin(function(stats) {
            copyToResources();
        }),
        // pulls CSS out into a single file instead of dynamically inlining it
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],

    // IMPORTANT -- this tells the webpack build tooling "don't include these things as part of the webpack bundle".
    // They are 'provided' 'externally' via perspective/ignition at runtime, and we don't want multiple copies in the
    // browser.  Any libraries used that are also used in perspective should be excluded.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "mobx": "mobx",
        "mobx-react": "mobxReact",
        "@inductiveautomation/perspective-client": "PerspectiveClient"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};


module.exports = () => config;
