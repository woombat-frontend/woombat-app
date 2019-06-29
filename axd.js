// #!/usr/bin/env node
// let shell = require('shelljs')
// let colors = require('colors')
// let fs = require('fs')
//
// let appOption = process.argv[2]
// let appName = process.argv[3]
// let appDirectory = `${process.cwd()}/${appName}`
// 
// const run = async () => {
//     let success = await createReactApp()
//     if (!success) {
//         console.log('Cuidado con el formato'.yellow)
//         return false;
//     }
// }
//
//
//
// const createReactApp = () => {
//     return new Promise(resolve => {
//         if (appName) {
//             switch (appOption) {
//               case "csr": {
//                 shell.exec(`
//                 printf "\n\nCreando Aplicacion CSR (Agreste) \n\n\n" &&
//                 git clone https://github.com/woombat-frontend/woombat-front-csr-boilerplate.git ${appName}
//                 cd ${appDirectory} &&
//                 sudo npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react css-loader favicons-webpack-plugin html-webpack-plugin style-loader url-loader webpack webpack-cli webpack-dev-server &&
//                 sudo npm install --save react react-dom &&
//                 cd ${appDirectory} &&
//                 npm start
//                 `,
//                     () => resolve(true))
//               }break;
//
//               case "ssr": {
//                 shell.exec(`
//                 printf "\n\nCreando Aplicacion SSR (Agreste) \n\n\n" &&
//                 git clone https://github.com/woombat-frontend/woombat-front-ssr-boilerplate.git ${appName}
//                 cd ${appDirectory} &&
//                 sudo npm install &&
//                 sudo npm run start
//                 `,
//                     () => resolve(true))
//               }break;
//               default: {
//                 shell.exec(`
//                 printf "\n\nCreando Aplicacion CSR (Agreste) \n\n\n" &&
//                 git clone https://github.com/woombat-frontend/woombat-front-csr-boilerplate.git ${appName}
//                 cd ${appDirectory} &&
//                 sudo npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react css-loader favicons-webpack-plugin html-webpack-plugin style-loader url-loader webpack webpack-cli webpack-dev-server &&
//                 sudo npm install --save react react-dom &&
//                 cd ${appDirectory} &&
//                 npm start
//                 `,
//                     () => resolve(true))
//               }
//             }
//         } else {
//             console.log("\nHubo un problema amiguito. Dile a Ronald".red)
//             resolve(false)
//         }
//     })
// }
//
// // const cdIntoNewApp = () => {
// //     return new Promise(resolve => {
// //         shell.exec(`cd ${appName}`, () => { resolve() })
// //     })
// // }
//
//
// // run()
