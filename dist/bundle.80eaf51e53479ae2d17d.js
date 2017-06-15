webpackJsonp([1],{"./src/components/App.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),i=o(c),s=n("./node_modules/react-router-dom/es/index.js"),f=n("./src/components/Sidebar.jsx"),p=o(f),d=n("./src/components/Home.jsx"),m=o(d),b=n("./src/components/Dashboard.jsx"),y=o(b),h=n("./src/components/MyPolls.jsx"),_=o(h),v=n("./src/components/NewPoll.jsx"),j=o(v),w=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement(s.BrowserRouter,null,i.default.createElement("div",{className:"app-container"},i.default.createElement("div",{className:"header"},"FCC Voting App"),i.default.createElement("div",{className:"body-btm"},i.default.createElement(p.default,null),i.default.createElement("div",{className:"app-body"},i.default.createElement(s.Switch,null,i.default.createElement(s.Route,{exact:!0,path:"/",component:m.default}),i.default.createElement(s.Route,{path:"/mypolls",component:_.default}),i.default.createElement(s.Route,{path:"/newpoll",component:j.default}),i.default.createElement(s.Route,{path:"/dashboard",component:y.default}))))))}}]),t}(c.Component);t.default=w},"./src/components/Dashboard.jsx":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",null,"Render all polls with charts and add pagination")}}]),t}(u.Component);t.default=i},"./src/components/Home.jsx":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"Fetch All polls from Firebase"),c.default.createElement("div",null,"Open voting window and chart on click"),c.default.createElement("div",null,"Select option and submit to vote"),c.default.createElement("div",null,"If logged in editable options"))}}]),t}(u.Component);t.default=i},"./src/components/MyPolls.jsx":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"if logged in Fetch My Polls from Firebase."),c.default.createElement("div",null,"Open voting window and chart on click"),c.default.createElement("div",null,"I can vote, delete or edit my polls"))}}]),t}(u.Component);t.default=i},"./src/components/NewPoll.jsx":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"Create New Poll and push data to firebase"),c.default.createElement("div",null,"Re-render new poll component"))}}]),t}(u.Component);t.default=i},"./src/components/Sidebar.jsx":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),i=n("./node_modules/react-router-dom/es/index.js"),s=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"side-bar"},c.default.createElement("div",null,c.default.createElement("div",{className:"login-container"},c.default.createElement("div",{className:"twitter-logo"},c.default.createElement("img",{src:"/src/assets/twitter-logo.png",alt:"boohoo"})),c.default.createElement("span",{className:"login-link"},"Login")),c.default.createElement("div",{className:"routes-container"},c.default.createElement(i.Link,{to:"/",className:"routes"},"Home"),c.default.createElement(i.Link,{to:"/mypolls",className:"routes"},"My Polls"),c.default.createElement(i.Link,{to:"/newpoll",className:"routes"},"New Poll"),c.default.createElement(i.Link,{to:"/dashboard",className:"routes"},"Dashboard"))),c.default.createElement("div",{className:"logout"},"Logout"))}}]),t}(u.Component);t.default=s},"./src/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n("./node_modules/react/react.js"),l=o(r),a=n("./node_modules/react-dom/index.js"),u=o(a),c=n("./src/components/App.jsx"),i=o(c);n("./styles/main.scss"),u.default.render(l.default.createElement(i.default,null),document.getElementById("root"))},"./styles/main.scss":function(e,t,n){}},["./src/index.js"]);