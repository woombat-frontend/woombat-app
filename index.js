#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')

let appOption = process.argv[3]
let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
    let success = await createReactApp()
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
        return false;
    }
}



const createReactApp = () => {
    return new Promise(resolve => {
        if (appName) {
            shell.exec(`
            printf "\n\nCreando Aplicacion Agreste :v\n\n\n" &&
            git clone https://github.com/woombat-frontend/woombat-front-csr-boilerplate.git ${appName}
            cd ${appDirectory} &&
            sudo npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react css-loader favicons-webpack-plugin html-webpack-plugin style-loader url-loader webpack webpack-cli webpack-dev-server &&
            sudo npm install --save react react-dom &&
            npm start
            `,
                () => resolve(true))
        } else {
            console.log("\nHubo un problema amiguito. Dile a Ronald".red)
            resolve(false)
        }
    })
}




run()
