!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(S,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=u}function S(){var e=g();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,u-(e-c)):n}(e))}function T(e){return f=void 0,d&&i?y(e):(i=o=void 0,a)}function h(){var e=g(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=I(t)||0,b(n)&&(s=!!n.leading,u=(m="maxWait"in n)?v(I(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j="feedback-form-state",O=JSON.parse(localStorage.getItem(j))||{},S={form:document.querySelector(".feedback-form"),messageInput:document.querySelector("textarea"),emailInput:document.querySelector("input")};S.form.addEventListener("submit",(function(e){if(e.preventDefault(),!O.email||!O.message)return void alert("Будь ласка, заповніть всі обов'язкові поля.");localStorage.removeItem(j),e.currentTarget.reset(),O.email="",O.message=""})),S.form.addEventListener("input",e(t)((function(){!function(){O.email=S.emailInput.value,O.message=S.messageInput.value,localStorage.setItem(j,JSON.stringify(O)),O.email&&(S.emailInput.value=O.email);O.message&&(S.messageInput.value=O.message)}()}),500)),document.addEventListener("DOMContentLoaded",(function(){O.email&&(S.emailInput.value=O.email),O.message&&(S.messageInput.value=O.message)}))}();
//# sourceMappingURL=03-feedback.5337f1a4.js.map
