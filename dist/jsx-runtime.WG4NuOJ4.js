var jsxRuntime={exports:{}},reactJsxRuntime_production={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production;function requireReactJsxRuntime_production(){if(hasRequiredReactJsxRuntime_production)return reactJsxRuntime_production;hasRequiredReactJsxRuntime_production=1;var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(maybeKey!==void 0&&(key=""+maybeKey),config.key!==void 0&&(key=""+config.key),"key"in config){maybeKey={};for(var propName in config)propName!=="key"&&(maybeKey[propName]=config[propName])}else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:config!==void 0?config:null,props:maybeKey}}return reactJsxRuntime_production.Fragment=REACT_FRAGMENT_TYPE,reactJsxRuntime_production.jsx=jsxProd,reactJsxRuntime_production.jsxs=jsxProd,reactJsxRuntime_production}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime();export{jsxRuntimeExports as j};
