// import, require, export, exports

// Example
const React = require("react")
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
import ReactDom from 'react';
import ReactDom from 'react-dom';
import hot from 'react-hot-loader/root';

// ES 2015
export const example = 'example'; // import { hello }
export default example2; // import example2
import example2, { example } from './Step01';

// Node Module System
exports.example = 'example2'; // == ( module.exports = { example: 'example2'} );

