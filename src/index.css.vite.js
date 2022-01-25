import { createHotContext as __vite__createHotContext } from "/@vite/client"; import.meta.hot = __vite__createHotContext("/src/index.css"); import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/@vite/client"
const __vite__id = "/Users/10022072/Documents/Shein Projects/vite-react/src/index.css"
const __vite__css = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
export default __vite__css
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))