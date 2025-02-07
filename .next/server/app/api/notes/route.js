/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/notes/route";
exports.ids = ["app/api/notes/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ahmadmahmoud_notes_v2_src_app_api_notes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/notes/route.js */ \"(rsc)/./src/app/api/notes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/notes/route\",\n        pathname: \"/api/notes\",\n        filename: \"route\",\n        bundlePath: \"app/api/notes/route\"\n    },\n    resolvedPagePath: \"/Users/ahmadmahmoud/notes-v2/src/app/api/notes/route.js\",\n    nextConfigOutput,\n    userland: _Users_ahmadmahmoud_notes_v2_src_app_api_notes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZub3RlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbm90ZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZub3RlcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFobWFkbWFobW91ZCUyRm5vdGVzLXYyJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFobWFkbWFobW91ZCUyRm5vdGVzLXYyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvYWhtYWRtYWhtb3VkL25vdGVzLXYyL3NyYy9hcHAvYXBpL25vdGVzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ub3Rlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL25vdGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ub3Rlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9haG1hZG1haG1vdWQvbm90ZXMtdjIvc3JjL2FwcC9hcGkvbm90ZXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _src_utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/src/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                const user = await _src_models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) throw new Error(\"No user found with this email\");\n                const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_6___default().compare(credentials.password, user.password);\n                if (!isPasswordCorrect) throw new Error(\"Incorrect password\");\n                return user;\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ],\n    // Ensure user ID is added to the session\n    callbacks: {\n        async session ({ session }) {\n            await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n            const dbUser = await _src_models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                email: session.user.email\n            });\n            // Debugging logs\n            console.log(\"Session Email:\", session.user.email);\n            console.log(\"DB User Found:\", dbUser);\n            if (dbUser) {\n                session.user.id = dbUser._id.toString(); // Attach the user ID to the session\n                console.log(\"User ID added to session:\", session.user.id);\n            } else {\n                session.user.id = null;\n                console.log(\"No user found in DB, User ID set to null\");\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lDO0FBQ1Y7QUFDQTtBQUNuQjtBQUNBO0FBQ1A7QUFFdkIsTUFBTU8sY0FBYztJQUN6QkMsV0FBVztRQUNUUCwyRUFBbUJBLENBQUM7WUFDbEJRLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixNQUFNTCx5REFBT0E7Z0JBRWIsTUFBTVcsT0FBTyxNQUFNWix3REFBSUEsQ0FBQ2EsT0FBTyxDQUFDO29CQUFFTixPQUFPRCxZQUFZQyxLQUFLO2dCQUFDO2dCQUMzRCxJQUFJLENBQUNLLE1BQU0sTUFBTSxJQUFJRSxNQUFNO2dCQUUzQixNQUFNQyxvQkFBb0IsTUFBTWIsdURBQWMsQ0FDNUNJLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtGLFFBQVE7Z0JBR2YsSUFBSSxDQUFDSyxtQkFBbUIsTUFBTSxJQUFJRCxNQUFNO2dCQUV4QyxPQUFPRjtZQUNUO1FBQ0Y7UUFDQWQsc0VBQWNBLENBQUM7WUFDYm1CLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0F2QixzRUFBY0EsQ0FBQztZQUNia0IsVUFBVUMsUUFBUUMsR0FBRyxDQUFDSSxTQUFTO1lBQy9CRixjQUFjSCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDekM7S0FDRDtJQUVELHlDQUF5QztJQUN6Q0MsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFO1lBQ3ZCLE1BQU16Qix5REFBT0E7WUFFYixNQUFNMEIsU0FBUyxNQUFNM0Isd0RBQUlBLENBQUNhLE9BQU8sQ0FBQztnQkFBRU4sT0FBT21CLFFBQVFkLElBQUksQ0FBQ0wsS0FBSztZQUFDO1lBRTlELGlCQUFpQjtZQUNqQnFCLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JILFFBQVFkLElBQUksQ0FBQ0wsS0FBSztZQUNoRHFCLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO1lBRTlCLElBQUlBLFFBQVE7Z0JBQ1ZELFFBQVFkLElBQUksQ0FBQ2tCLEVBQUUsR0FBR0gsT0FBT0ksR0FBRyxDQUFDQyxRQUFRLElBQUssb0NBQW9DO2dCQUM5RUosUUFBUUMsR0FBRyxDQUFDLDZCQUE2QkgsUUFBUWQsSUFBSSxDQUFDa0IsRUFBRTtZQUMxRCxPQUFPO2dCQUNMSixRQUFRZCxJQUFJLENBQUNrQixFQUFFLEdBQUc7Z0JBQ2xCRixRQUFRQyxHQUFHLENBQUM7WUFDZDtZQUVBLE9BQU9IO1FBQ1Q7SUFDRjtJQUVBTyxRQUFRZixRQUFRQyxHQUFHLENBQUNlLGVBQWU7QUFDckMsRUFBRTtBQUVGLE1BQU1DLFVBQVV2QyxnREFBUUEsQ0FBQ087QUFDa0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1hZG1haG1vdWQvbm90ZXMtdjIvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvc3JjL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9zcmMvdXRpbHMvZGJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsXCIpO1xuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNQYXNzd29yZENvcnJlY3QpIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBwYXNzd29yZFwiKTtcblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIEVuc3VyZSB1c2VyIElEIGlzIGFkZGVkIHRvIHRoZSBzZXNzaW9uXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uIH0pIHtcbiAgICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9KTtcblxuICAgICAgLy8gRGVidWdnaW5nIGxvZ3NcbiAgICAgIGNvbnNvbGUubG9nKFwiU2Vzc2lvbiBFbWFpbDpcIiwgc2Vzc2lvbi51c2VyLmVtYWlsKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiREIgVXNlciBGb3VuZDpcIiwgZGJVc2VyKTtcblxuICAgICAgaWYgKGRiVXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSBkYlVzZXIuX2lkLnRvU3RyaW5nKCk7ICAvLyBBdHRhY2ggdGhlIHVzZXIgSUQgdG8gdGhlIHNlc3Npb25cbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElEIGFkZGVkIHRvIHNlc3Npb246XCIsIHNlc3Npb24udXNlci5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHVzZXIgZm91bmQgaW4gREIsIFVzZXIgSUQgc2V0IHRvIG51bGxcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG5cbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiR2l0aHViUHJvdmlkZXIiLCJVc2VyIiwiY29ubmVjdCIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiRXJyb3IiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiR0lUSFVCX0lEIiwiR0lUSFVCX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJkYlVzZXIiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJfaWQiLCJ0b1N0cmluZyIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/notes/route.js":
/*!************************************!*\
  !*** ./src/app/api/notes/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _src_utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var _src_models_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/models/Note */ \"(rsc)/./src/models/Note.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\n// Get the Notes\nconst GET = async (request)=>{\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const notes = await _src_models_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n            userId: session.user.id\n        });\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(JSON.stringify(notes), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Failed to fetch notes\", {\n            status: 500\n        });\n    }\n};\n// Create Notes\nconst POST = async (request)=>{\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const { title, content, tags } = await request.json();\n    if (!title || !content) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Title and content are required\", {\n            status: 400\n        });\n    }\n    await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const newNote = new _src_models_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            userId: session.user.id,\n            title,\n            content,\n            tags: tags || [],\n            archived: false\n        });\n        await newNote.save();\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note created successfully\", {\n            status: 201\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Failed to create note\", {\n            status: 500\n        });\n    }\n};\n// Update Notes\nconst PATCH = async (request)=>{\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const { id, title, content, tags, archived } = await request.json();\n    if (!id) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note ID is required\", {\n            status: 400\n        });\n    }\n    await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const updatedNote = await _src_models_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndUpdate({\n            _id: id,\n            userId: session.user.id\n        }, {\n            ...title && {\n                title\n            },\n            ...content && {\n                content\n            },\n            ...tags && {\n                tags\n            },\n            ...archived !== undefined && {\n                archived\n            }\n        }, {\n            new: true\n        } // Return the updated document\n        );\n        console.log(\"Updated Note in DB:\", updatedNote); // Log after updating\n        if (!updatedNote) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note not found\", {\n                status: 404\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(JSON.stringify(updatedNote), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error updating note:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Failed to update note\", {\n            status: 500\n        });\n    }\n};\n// Delete Note\nconst DELETE = async (request)=>{\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const { id } = await request.json(); // Get note ID from request body\n    if (!id) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note ID is required\", {\n            status: 400\n        });\n    }\n    await (0,_src_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    try {\n        const deletedNote = await _src_models_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndDelete({\n            _id: id,\n            userId: session.user.id\n        });\n        if (!deletedNote) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note not found\", {\n                status: 404\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Note deleted successfully\", {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error deleting note:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_4__.NextResponse(\"Failed to delete note\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxPQUFPO1FBQ2RlLFFBQVFmLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU8sSUFBSVoscURBQVlBLENBQUMseUJBQXlCO1lBQUVJLFFBQVE7UUFBSTtJQUNqRTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1hZG1haG1vdWQvbm90ZXMtdjIvc3JjL2FwcC9hcGkvbm90ZXMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9zcmMvdXRpbHMvZGJcIjtcbmltcG9ydCBOb3RlIGZyb20gXCJAL3NyYy9tb2RlbHMvTm90ZVwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbi8vIEdldCB0aGUgTm90ZXNcbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIFxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgYXdhaXQgY29ubmVjdCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBOb3RlLmZpbmQoeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9KTtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShub3RlcyksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGYWlsZWQgdG8gZmV0Y2ggbm90ZXNcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcblxuLy8gQ3JlYXRlIE5vdGVzXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCB7IHRpdGxlLCBjb250ZW50LCB0YWdzIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICBpZiAoIXRpdGxlIHx8ICFjb250ZW50KSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJUaXRsZSBhbmQgY29udGVudCBhcmUgcmVxdWlyZWRcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGF3YWl0IGNvbm5lY3QoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgTm90ZSh7XG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudCxcbiAgICAgIHRhZ3M6IHRhZ3MgfHwgW10sICAgICAgICAgLy8gT3B0aW9uYWwgdGFnc1xuICAgICAgYXJjaGl2ZWQ6IGZhbHNlLCAgICAgICAgICAvLyBEZWZhdWx0IHRvIG5vdCBhcmNoaXZlZFxuICAgIH0pO1xuXG4gICAgYXdhaXQgbmV3Tm90ZS5zYXZlKCk7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJOb3RlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGYWlsZWQgdG8gY3JlYXRlIG5vdGVcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcblxuLy8gVXBkYXRlIE5vdGVzXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBhc3luYyAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIFxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgeyBpZCwgdGl0bGUsIGNvbnRlbnQsIHRhZ3MsIGFyY2hpdmVkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICBpZiAoIWlkKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJOb3RlIElEIGlzIHJlcXVpcmVkXCIsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGVkTm90ZSA9IGF3YWl0IE5vdGUuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHsgX2lkOiBpZCwgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSwgIC8vIEVuc3VyZSB0aGUgbm90ZSBiZWxvbmdzIHRvIHRoZSB1c2VyXG4gICAgICB7IFxuICAgICAgICAuLi4odGl0bGUgJiYgeyB0aXRsZSB9KSxcbiAgICAgICAgLi4uKGNvbnRlbnQgJiYgeyBjb250ZW50IH0pLFxuICAgICAgICAuLi4odGFncyAmJiB7IHRhZ3MgfSksXG4gICAgICAgIC4uLihhcmNoaXZlZCAhPT0gdW5kZWZpbmVkICYmIHsgYXJjaGl2ZWQgfSlcbiAgICAgIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9ICAvLyBSZXR1cm4gdGhlIHVwZGF0ZWQgZG9jdW1lbnRcbiAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZWQgTm90ZSBpbiBEQjpcIiwgdXBkYXRlZE5vdGUpOyAgLy8gTG9nIGFmdGVyIHVwZGF0aW5nXG5cblxuICAgIGlmICghdXBkYXRlZE5vdGUpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiTm90ZSBub3QgZm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh1cGRhdGVkTm90ZSksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIG5vdGU6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkZhaWxlZCB0byB1cGRhdGUgbm90ZVwiLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59O1xuXG4vLyBEZWxldGUgTm90ZVxuZXhwb3J0IGNvbnN0IERFTEVURSA9IGFzeW5jIChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7ICAvLyBHZXQgbm90ZSBJRCBmcm9tIHJlcXVlc3QgYm9keVxuXG4gIGlmICghaWQpIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIk5vdGUgSUQgaXMgcmVxdWlyZWRcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGF3YWl0IGNvbm5lY3QoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRlbGV0ZWROb3RlID0gYXdhaXQgTm90ZS5maW5kT25lQW5kRGVsZXRlKHtcbiAgICAgIF9pZDogaWQsXG4gICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgIC8vIEVuc3VyZSB0aGUgbm90ZSBiZWxvbmdzIHRvIHRoZSBsb2dnZWQtaW4gdXNlclxuICAgIH0pO1xuXG4gICAgaWYgKCFkZWxldGVkTm90ZSkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJOb3RlIG5vdCBmb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiTm90ZSBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBub3RlOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXCJGYWlsZWQgdG8gZGVsZXRlIG5vdGVcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjb25uZWN0IiwiTm90ZSIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwic3RhdHVzIiwibm90ZXMiLCJmaW5kIiwidXNlcklkIiwidXNlciIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiUE9TVCIsInRpdGxlIiwiY29udGVudCIsInRhZ3MiLCJqc29uIiwibmV3Tm90ZSIsImFyY2hpdmVkIiwic2F2ZSIsIlBBVENIIiwidXBkYXRlZE5vdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwidW5kZWZpbmVkIiwibmV3IiwiY29uc29sZSIsImxvZyIsIkRFTEVURSIsImRlbGV0ZWROb3RlIiwiZmluZE9uZUFuZERlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/notes/route.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Note.js":
/*!****************************!*\
  !*** ./src/models/Note.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst noteSchema = new Schema({\n    userId: {\n        type: Schema.Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    tags: {\n        type: [\n            String\n        ],\n        default: []\n    },\n    lastEdited: {\n        type: Date,\n        default: Date.now\n    },\n    body: {\n        type: String,\n        required: true\n    },\n    archived: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Note || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Note\", noteSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL05vdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBQ0VFLFFBQVE7UUFDTkMsTUFBTUgsT0FBT0ksS0FBSyxDQUFDQyxRQUFRO1FBQzNCQyxLQUFLO1FBQ0xDLFVBQVU7SUFDWjtJQUNBQyxNQUFNO1FBQ0pMLE1BQU1NO1FBQ05GLFVBQVU7SUFDWjtJQUNBRyxNQUFNO1FBQ0pQLE1BQU07WUFBQ007U0FBTztRQUNkRSxTQUFTLEVBQUU7SUFDYjtJQUNBQyxZQUFZO1FBQ1ZULE1BQU1VO1FBQ05GLFNBQVNFLEtBQUtDLEdBQUc7SUFDbkI7SUFDQUMsTUFBTTtRQUNKWixNQUFNTTtRQUNORixVQUFVO0lBQ1o7SUFDQVMsVUFBVTtRQUNSYixNQUFNYztRQUNOTixTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQUVPLFlBQVk7QUFBSztBQUlyQixpRUFBZW5CLHdEQUFlLENBQUNxQixJQUFJLElBQUlyQixxREFBYyxDQUFDLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1hZG1haG1vdWQvbm90ZXMtdjIvc3JjL21vZGVscy9Ob3RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBub3RlU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVmOiBcIlVzZXJcIixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0YWdzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IFtdLFxuICAgIH0sXG4gICAgbGFzdEVkaXRlZDoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBhcmNoaXZlZDogeyAgLy8gTWFrZSBzdXJlIHRoaXMgaXMgdGhlIG9ubHkgYXJjaGl2ZS1yZWxhdGVkIGZpZWxkXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLk5vdGUgfHwgbW9uZ29vc2UubW9kZWwoXCJOb3RlXCIsIG5vdGVTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibm90ZVNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwidGFncyIsImRlZmF1bHQiLCJsYXN0RWRpdGVkIiwiRGF0ZSIsIm5vdyIsImJvZHkiLCJhcmNoaXZlZCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiTm90ZSIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Note.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    password: {\n        type: String,\n        required: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBQ0VFLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsUUFBUTtRQUNSQyxVQUFVO0lBQ1o7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO0lBQ1o7QUFDRixHQUNBO0lBQUVFLFlBQVk7QUFBSztBQUdyQixpRUFBZVQsd0RBQWUsQ0FBQ1csSUFBSSxJQUFJWCxxREFBYyxDQUFDLFFBQVFFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1hZG1haG1vdWQvbm90ZXMtdjIvc3JjL21vZGVscy9Vc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        console.log(\"Already connected to MongoDB.\");\n        return;\n    }\n    try {\n        console.log(\"Attempting to connect to MongoDB...\");\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"MongoDB connection established successfully.\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error.message); // Log the exact error message\n        throw new Error(`Error connecting to MongoDB: ${error.message}`);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFVBQVU7SUFHZCxJQUFJRCw2REFBb0IsQ0FBQyxFQUFFLENBQUNHLFVBQVUsRUFBRTtRQUN0Q0MsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRkQsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUwsdURBQWdCLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO1lBQzVDQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBTixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9NLE9BQU87UUFDZFAsUUFBUU8sS0FBSyxDQUFDLGdDQUFnQ0EsTUFBTUMsT0FBTyxHQUFJLDhCQUE4QjtRQUM3RixNQUFNLElBQUlDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRUYsTUFBTUMsT0FBTyxFQUFFO0lBQ2pFO0FBQ0Y7QUFFQSxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FobWFkbWFobW91ZC9ub3Rlcy12Mi9zcmMvdXRpbHMvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuXG5cbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkIHRvIE1vbmdvREIuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gTW9uZ29EQi4uLlwiKTtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IubWVzc2FnZSk7ICAvLyBMb2cgdGhlIGV4YWN0IGVycm9yIG1lc3NhZ2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjogJHtlcnJvci5tZXNzYWdlfWApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fnotes%2Froute&page=%2Fapi%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotes%2Froute.js&appDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fahmadmahmoud%2Fnotes-v2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();