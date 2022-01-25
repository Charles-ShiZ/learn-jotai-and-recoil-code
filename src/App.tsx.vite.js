import {
  createHotContext as __vite__createHotContext
} from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.tsx");
import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/10022072/Documents/Shein Projects/vite-react/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _jsxFileName = "/Users/10022072/Documents/Shein Projects/vite-react/src/App.tsx",
  _s = $RefreshSig$();

// 对应原代码
import __vite__cjsImport2_react from "/node_modules/.vite/react.js?v=8765055a";
const useState = __vite__cjsImport2_react["useState"];
import logo from "/src/logo.svg?import";
import "/src/App.css";

import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/react_jsx-dev-runtime.js?v=8765055a";
const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];

function App() {
  _s();
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ _jsxDEV("div", {
    className: "App",
    children: /* @__PURE__ */ _jsxDEV("header", {
      className: "App-header",
      children: [/* @__PURE__ */ _jsxDEV("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("p", {
        children: "Hello Vite + React!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("p", {
        children: /* @__PURE__ */ _jsxDEV("button", {
          type: "button",
          onClick: () => setCount((count2) => count2 + 1),
          children: ["count is: ", count]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("p", {
        children: ["Edit ", /* @__PURE__ */ _jsxDEV("code", {
          children: "App.tsx"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 16
        }, this), " and save to test HMR updates."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /* @__PURE__ */ _jsxDEV("p", {
        children: [/* @__PURE__ */ _jsxDEV("a", {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Learn React"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), " | ", /* @__PURE__ */ _jsxDEV("a", {
          className: "App-link",
          href: "https://vitejs.dev/guide/features.html",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Vite Docs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_s(App, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__vite_plugin_react_timeout) {
    window.__vite_plugin_react_timeout = setTimeout(() => {
      window.__vite_plugin_react_timeout = 0;
      RefreshRuntime.performReactRefresh();
    }, 30);
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFBQTtBQUNiLFFBQU0sQ0FBQ0EsT0FBT0MsWUFBWUMsU0FBUztBQUVuQyxTQUNFO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBZixVQUNFO0FBQUEsTUFBUSxXQUFVO0FBQUEsTUFBbEIsV0FDRTtBQUFBLFFBQUssS0FBS0M7QUFBQUEsUUFBTSxXQUFVO0FBQUEsUUFBVyxLQUFJO0FBQUEsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDQTtBQUFBLGtCQUNFO0FBQUEsVUFBUSxNQUFLO0FBQUEsVUFBUyxTQUFTLE1BQU1GLFNBQVVELFlBQVVBLFNBQVE7QUFBQSxVQUFqRSx5QkFDYUE7QUFBQUEsV0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUtBO0FBQUEsNEJBQ087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUdBO0FBQUEsbUJBQ0U7QUFBQSxVQUNFLFdBQVU7QUFBQSxVQUNWLE1BQUs7QUFBQSxVQUNMLFFBQU87QUFBQSxVQUNQLEtBQUk7QUFBQSxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFRQyxPQUNEO0FBQUEsVUFDRSxXQUFVO0FBQUEsVUFDVixNQUFLO0FBQUEsVUFDTCxRQUFPO0FBQUEsVUFDUCxLQUFJO0FBQUEsVUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtHQUpLSTtLQUFBQTtBQXdDVCxlQUFlQTs7Ozs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiY291bnQiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwibG9nbyIsIkFwcCJdLCJzb3VyY2VzIjpbIi9Vc2Vycy8xMDAyMjA3Mi9Eb2N1bWVudHMvU2hlaW4lMjBQcm9qZWN0cy92aXRlLXJlYWN0L3NyYy9BcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28uc3ZnJ1xuaW1wb3J0ICcuL0FwcC5jc3MnXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxuICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgPHA+SGVsbG8gVml0ZSArIFJlYWN0ITwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoKGNvdW50KSA9PiBjb3VudCArIDEpfT5cbiAgICAgICAgICAgIGNvdW50IGlzOiB7Y291bnR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRWRpdCA8Y29kZT5BcHAudHN4PC9jb2RlPiBhbmQgc2F2ZSB0byB0ZXN0IEhNUiB1cGRhdGVzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJBcHAtbGlua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZ1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGVhcm4gUmVhY3RcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgeycgfCAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJBcHAtbGlua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2ZlYXR1cmVzLmh0bWxcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpdGUgRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXX0=