const {resolve} = require('path');
const {path: PROJECT_ROOT} = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './source');
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build');
exports.DIST_DIRECTORY = resolve(PROJECT_ROOT, './dist');
exports.HOST = 'localhost';
exports.PORT = '3000';




