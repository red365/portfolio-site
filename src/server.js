import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import dotenv from 'dotenv';

const formidable = require('express-formidable');

const server = express();
server.use(formidable());

const args = process.argv;
if (args[2] == '--mode' && args[3] == 'dev') {
  dotenv.config({ path: "config/development.env"});
} else {
  dotenv.config({ path: "config/production.env"});
}

// PATHS
const STATIC_ASSETS_PATH = path.resolve(path.join(__dirname, '..', 'assets'));
const INDEX_FILE_PATH = path.join(__dirname, '..', 'public', 'index.html');
const BUNDLE_PATH = path.join(__dirname, '..', 'public', 'build', 'bundle.js');
const CSS_PATH = path.join(__dirname, '..', 'public', 'build', 'main.css');

// MODE

if (args[2] == '--mode' && args[3] == 'dev') {
	const compiler = webpack(require('../webpack.config.js'));
	server.use(webpackDevMiddleware(compiler, { publicPath: '/build' }));
	server.use(webpackHotMiddleware(compiler, {}));
} else {
	server.get('/build/bundle.js', (request, response) =>
		response.status(200).sendFile(path.resolve(BUNDLE_PATH)),
	);
	server.get('/build/main.css', (request, response) =>
		response.status(200).sendFile(path.resolve(CSS_PATH)),
	);
}

server.use('/static/', express.static(path.join(__dirname, '..', 'public', 'static')));

server.get('/*', (request, response) => {
	response.sendFile(INDEX_FILE_PATH);
});

// const serverAddress = '0.0.0.0';
// const port = 5000;
server.listen(process.env.PORT, process.env.SERVER_ADDRESS);
console.log(`Serving at http://${process.env.SERVER_ADDRESS}:${process.env.PORT}`);
