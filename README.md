# Wix Style React

## Created by configuring manually Webpack

`wix-style-react` is built with Stylable. Therefore, in order to use it we had to create a Stylable compatible app.


## How this project was created?

### Creating Typescript React app using Webpack

1. Generating an empty webpack project:
```bash
mkdir wix-style-react-webpack
cd wix-style-react-webpack
npm init -y
npm install webpack webpack-cli --save-dev
```

2. Adding Typescript & React:
```bash
yarn add react react-dom
yarn add ts-loader typescript html-webpack-plugin --dev
```

3. Modifying `package.json` scripts:
```
"typecheck": "tsc --noEmit",
"build": "webpack --mode production --no-devtool",
"start": "webpack serve --open"
```

### Adding Stylable to an existing App

1. Installing Stylable:
```bash
yarn add @stylable/core @stylable/webpack-plugin url-loader --dev
```

2. Modifying webpack config:
```js
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
...
{
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [{ loader: "url-loader" }]
            }
        ]
    }
    plugins: [
        new StylableWebpackPlugin()
    ]
}
```

### Integrating Wix Style React

1. Install Wix Style React as a dependency:
```bash
yarn add wix-style-react
```
2. Install required loaders:
```bash
yarn add style-loader css-loader node-sass resolve-url-loader sass-loader --dev
```
3. Use loaders in `webpack.config.js` file:
```diff
  const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const path = require('path');

  module.exports = {
      mode: 'development',
      devtool: 'source-map',
      module: {
          rules: [
              {
                  test: /\.tsx?$/,
                  loader: 'ts-loader',
              },
-             {
-                 test: /\.(png|jpg|jpeg|gif|svg)$/,
-                 loader: 'file-loader',
-             },
              {
                  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                  use: [
                      {
                          loader: 'url-loader',
                      }
                  ]
              },
+             {
+                 test: /\.scss$/,
+                 include: [
+                     path.join(__dirname, 'node_modules/wix-animations'),
+                     path.join(__dirname, 'node_modules/wix-style-react')
+                 ],
+                 use: [
+                     {
+                         loader: 'style-loader'
+                     },
+                     {
+                         loader: 'css-loader',
+                         options: {
+                             importLoaders: 1,
+                             modules: {
+                                 localIdentName: '[name]__[local]___[hash:base64:5]',
+                                 exportLocalsConvention: 'camelCase',
+                             }
+                         }
+                     },
+                     {
+                         loader: 'resolve-url-loader'
+                     },
+                     {
+                         loader: 'sass-loader',
+                         options: {
+                             sourceMap: true
+                         }
+                     },
+                 ],
+             },
          ],
      },
      resolve: {
          extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
      },
      plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
  };
```

4. Run your app:
```bash
yarn start
```

### Running the example
The project can be run from either the root directory or the package itself:
1. **root directory**:
```bash 
yarn
yarn start:wix-style-react-webpack
```

2. **package directory**:
```bash 
cd packages/wix-style-react-webpack
yarn
yarn start
```
