"use strict";
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
exports.id = "pages/api/db_studiou";
exports.ids = ["pages/api/db_studiou"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error(\"Define the MONGODB_URI environmental variable\");\n} // check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error(\"Define the MONGODB_DB environmental variable\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBQUUsTUFBTUcsYUFBYUYsUUFBUUMsR0FBRyxDQUFDRSxPQUFPO0FBQ25GLHdCQUF3QjtBQUN4QixJQUFJLENBQUNKLGFBQWE7SUFDZCxNQUFNLElBQUlLLE1BQU0saURBQWlEO0FBQ3JFLENBQUMsQ0FBQyx1QkFBdUI7QUFDekIsSUFBSSxDQUFDRixZQUFZO0lBQ2IsTUFBTSxJQUFJRSxNQUFNLGdEQUFnRDtBQUNwRSxDQUFDO0FBQUMsSUFBSUMsZUFDRixJQUFJO0FBQ1IsSUFBSUMsV0FBVyxJQUFJO0FBQ1osZUFBZUMsb0JBQW9CO0lBQ3RDLG9CQUFvQjtJQUNwQixJQUFJRixnQkFBZ0JDLFVBQVU7UUFDMUIsa0JBQWtCO1FBQ2xCLE9BQU87WUFDSEUsUUFBUUg7WUFDUkksSUFBSUg7UUFDUjtJQUNKLENBQUM7SUFDRCw2QkFBNkI7SUFDN0IsTUFBTUksT0FDTjtRQUNJQyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDNUI7SUFDQSxxQkFBcUI7SUFDckIsSUFBSUosU0FBUyxJQUFJVixnREFBV0EsQ0FBQ0MsYUFBYVc7SUFDMUMsTUFBTUYsT0FBT0ssT0FBTztJQUNwQixJQUFJSixLQUFLRCxPQUFPQyxFQUFFLENBQUNQO0lBQ25CLFlBQVk7SUFDWkcsZUFBZUc7SUFDZkYsV0FBV0c7SUFDWCxPQUFPO1FBQ0hELFFBQVFIO1FBQ1JJLElBQUlIO0lBQ1I7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzZXJ2YXNpLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTsgY29uc3QgTU9OR09EQl9EQiA9IHByb2Nlc3MuZW52LkRCX05BTUU7XG4vLyBjaGVjayB0aGUgTW9uZ29EQiBVUklcbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnRhbCB2YXJpYWJsZScpO1xufSAvLyBjaGVjayB0aGUgTW9uZ29EQiBEQlxuaWYgKCFNT05HT0RCX0RCKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnRhbCB2YXJpYWJsZScpO1xufSBsZXQgY2FjaGVkQ2xpZW50ID1cbiAgICBudWxsO1xubGV0IGNhY2hlZERiID0gbnVsbDtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgICAvLyBjaGVjayB0aGUgY2FjaGVkLlxuICAgIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcbiAgICAgICAgLy8gbG9hZCBmcm9tIGNhY2hlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcbiAgICAgICAgICAgIGRiOiBjYWNoZWREYixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gc2V0IHRoZSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID1cbiAgICB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH07XG4gICAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXG4gICAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBsZXQgZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG4gICAgLy8gc2V0IGNhY2hlXG4gICAgY2FjaGVkQ2xpZW50ID0gY2xpZW50O1xuICAgIGNhY2hlZERiID0gZGI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXG4gICAgICAgIGRiOiBjYWNoZWREYixcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfREIiLCJEQl9OQU1FIiwiRXJyb3IiLCJjYWNoZWRDbGllbnQiLCJjYWNoZWREYiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiZGIiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/db_studiou.js":
/*!*********************************!*\
  !*** ./pages/api/db_studiou.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { connectToDatabase  } = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\nconst ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectId);\n// mengambil data dari collection mahasiswa\nasync function getWeing(req, res) {\n    try {\n        // connect to the database\n        let { db  } = await connectToDatabase();\n        // fetch the posts\n        let studiou = await db.collection(\"studiou\").find({}).sort({}).toArray();\n        // return the posts\n        return res.json({\n            message: JSON.parse(JSON.stringify(studiou)),\n            success: true\n        });\n    } catch (error) {\n        // return the error\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\nasync function deleteWeing(req, res) {\n    var ObjectId = (__webpack_require__(/*! mongodb */ \"mongodb\").ObjectId);\n    const { _id  } = req.body;\n    const convertedObjectId = new ObjectId(_id);\n    try {\n        // Connecting to the database\n        let { db  } = await connectToDatabase();\n        // Deleting the post\n        await db.collection(\"studiou\").deleteOne({\n            \"_id\": convertedObjectId\n        });\n        // returning a message\n        return res.json({\n            message: \"Post deleted successfully\",\n            success: true\n        });\n    } catch (error) {\n        // returning an error\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n;\n// menambah data kedalam collection mahasiswa\nasync function addWeding(req, res) {\n    try {\n        // connect to the database\n        let { db  } = await connectToDatabase();\n        // add the post\n        await db.collection(\"studiou\").insertOne(JSON.parse(req.body));\n        // return a message\n        return res.json({\n            message: \"Data album Telah di Tambahkan\",\n            success: true\n        });\n    } catch (error) {\n        // return an error\n        return res.json({\n            message: new Error(error).message,\n            success: false\n        });\n    }\n}\n// CRUD handler\nasync function handler(req, res) {\n    // switch the methods\n    switch(req.method){\n        case \"GET\":\n            {\n                return getWeing(req, res);\n            }\n        case \"POST\":\n            {\n                return addWeding(req, res);\n            }\n        case \"DELETE\":\n            {\n                return deleteWeing(req, res);\n            }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGJfc3R1ZGlvdS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxrQkFBaUIsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUN0QyxNQUFNQyxXQUFXRCx3REFBMkI7QUFDNUMsMkNBQTJDO0FBQzNDLGVBQWVFLFNBQVNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2hDLElBQUk7UUFDRiwwQkFBMEI7UUFDMUIsSUFBSSxFQUFFQyxHQUFFLEVBQUUsR0FBRyxNQUFNTjtRQUNuQixrQkFBa0I7UUFDbEIsSUFBSU8sVUFBVSxNQUFNRCxHQUNqQkUsVUFBVSxDQUFDLFdBQ1hDLElBQUksQ0FBQyxDQUFDLEdBQ05DLElBQUksQ0FBQyxDQUFDLEdBQ05DLE9BQU87UUFDVixtQkFBbUI7UUFDbkIsT0FBT04sSUFBSU8sSUFBSSxDQUFDO1lBQ2RDLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDVDtZQUNuQ1UsU0FBUyxJQUFJO1FBQ2Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxtQkFBbUI7UUFDbkIsT0FBT2IsSUFBSU8sSUFBSSxDQUFDO1lBQ2RDLFNBQVMsSUFBSU0sTUFBTUQsT0FBT0wsT0FBTztZQUNqQ0ksU0FBUyxLQUFLO1FBQ2hCO0lBQ0Y7QUFDRjtBQUNBLGVBQWVHLFlBQVloQixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuQyxJQUFJSCxXQUFXRCx3REFBMkI7SUFDMUMsTUFBTSxFQUFFb0IsSUFBRyxFQUFFLEdBQUdqQixJQUFJa0IsSUFBSTtJQUN4QixNQUFNQyxvQkFBb0IsSUFBSXJCLFNBQVNtQjtJQUN2QyxJQUFJO1FBQ0YsNkJBQTZCO1FBQzdCLElBQUksRUFBRWYsR0FBRSxFQUFFLEdBQUcsTUFBTU47UUFDbkIsb0JBQW9CO1FBRXBCLE1BQU1NLEdBQUdFLFVBQVUsQ0FBQyxXQUFXZ0IsU0FBUyxDQUFDO1lBQ3ZDLE9BQU9EO1FBQ1Q7UUFDQSxzQkFBc0I7UUFDdEIsT0FBT2xCLElBQUlPLElBQUksQ0FBQztZQUNkQyxTQUFTO1lBQ1RJLFNBQVMsSUFBSTtRQUNmO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2QscUJBQXFCO1FBQ3JCLE9BQU9iLElBQUlPLElBQUksQ0FBQztZQUNkQyxTQUFTLElBQUlNLE1BQU1ELE9BQU9MLE9BQU87WUFDakNJLFNBQVMsS0FBSztRQUNoQjtJQUNGO0FBQ0Y7O0FBRUEsNkNBQTZDO0FBQzdDLGVBQWVRLFVBQVVyQixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQyxJQUFJO1FBQ0YsMEJBQTBCO1FBQzFCLElBQUksRUFBRUMsR0FBRSxFQUFFLEdBQUcsTUFBTU47UUFDbkIsZUFBZTtRQUNmLE1BQU1NLEdBQUdFLFVBQVUsQ0FBQyxXQUFXa0IsU0FBUyxDQUFDWixLQUFLQyxLQUFLLENBQUNYLElBQUlrQixJQUFJO1FBQzVELG1CQUFtQjtRQUNuQixPQUFPakIsSUFBSU8sSUFBSSxDQUFDO1lBQ2RDLFNBQVM7WUFDVEksU0FBUyxJQUFJO1FBQ2Y7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxrQkFBa0I7UUFDbEIsT0FBT2IsSUFBSU8sSUFBSSxDQUFDO1lBQ2RDLFNBQVMsSUFBSU0sTUFBTUQsT0FBT0wsT0FBTztZQUNqQ0ksU0FBUyxLQUFLO1FBQ2hCO0lBQ0Y7QUFDRjtBQUNBLGVBQWU7QUFDQSxlQUFlVSxRQUFRdkIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMscUJBQXFCO0lBQ3JCLE9BQVFELElBQUl3QixNQUFNO1FBQ2hCLEtBQUs7WUFBTztnQkFDVixPQUFPekIsU0FBU0MsS0FBS0M7WUFDdkI7UUFDQSxLQUFLO1lBQVE7Z0JBQ1gsT0FBT29CLFVBQVVyQixLQUFLQztZQUN4QjtRQUNBLEtBQUs7WUFBVTtnQkFDYixPQUFPZSxZQUFZaEIsS0FBS0M7WUFDMUI7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlcnZhc2kvLi9wYWdlcy9hcGkvZGJfc3R1ZGlvdS5qcz8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9tb25nb2RiJyk7XG5jb25zdCBPYmplY3RJZCA9IHJlcXVpcmUoJ21vbmdvZGInKS5PYmplY3RJZDtcbi8vIG1lbmdhbWJpbCBkYXRhIGRhcmkgY29sbGVjdGlvbiBtYWhhc2lzd2FcbmFzeW5jIGZ1bmN0aW9uIGdldFdlaW5nKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvLyBmZXRjaCB0aGUgcG9zdHNcbiAgICBsZXQgc3R1ZGlvdSA9IGF3YWl0IGRiXG4gICAgICAuY29sbGVjdGlvbignc3R1ZGlvdScpXG4gICAgICAuZmluZCh7fSlcbiAgICAgIC5zb3J0KHt9KVxuICAgICAgLnRvQXJyYXkoKTtcbiAgICAvLyByZXR1cm4gdGhlIHBvc3RzXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3R1ZGlvdSkpLFxuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyByZXR1cm4gdGhlIGVycm9yXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH0pO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBkZWxldGVXZWluZyhyZXEsIHJlcykge1xuICB2YXIgT2JqZWN0SWQgPSByZXF1aXJlKCdtb25nb2RiJykuT2JqZWN0SWQ7XG4gIGNvbnN0IHsgX2lkIH0gPSByZXEuYm9keTtcbiAgY29uc3QgY29udmVydGVkT2JqZWN0SWQgPSBuZXcgT2JqZWN0SWQoX2lkKTtcbiAgdHJ5IHtcbiAgICAvLyBDb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZVxuICAgIGxldCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgIC8vIERlbGV0aW5nIHRoZSBwb3N0XG5cbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdzdHVkaW91JykuZGVsZXRlT25lKHtcbiAgICAgICdfaWQnOiBjb252ZXJ0ZWRPYmplY3RJZFxuICAgIH0pO1xuICAgIC8vIHJldHVybmluZyBhIG1lc3NhZ2VcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ1Bvc3QgZGVsZXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyByZXR1cm5pbmcgYW4gZXJyb3JcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIG1lbmFtYmFoIGRhdGEga2VkYWxhbSBjb2xsZWN0aW9uIG1haGFzaXN3YVxuYXN5bmMgZnVuY3Rpb24gYWRkV2VkaW5nKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAvLyBhZGQgdGhlIHBvc3RcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdzdHVkaW91JykuaW5zZXJ0T25lKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcbiAgICAvLyByZXR1cm4gYSBtZXNzYWdlXG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIG1lc3NhZ2U6ICdEYXRhIGFsYnVtIFRlbGFoIGRpIFRhbWJhaGthbicsXG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIHJldHVybiBhbiBlcnJvclxuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICBtZXNzYWdlOiBuZXcgRXJyb3IoZXJyb3IpLm1lc3NhZ2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxufVxuLy8gQ1JVRCBoYW5kbGVyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIHN3aXRjaCB0aGUgbWV0aG9kc1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOiB7XG4gICAgICByZXR1cm4gZ2V0V2VpbmcocmVxLCByZXMpO1xuICAgIH1cbiAgICBjYXNlICdQT1NUJzoge1xuICAgICAgcmV0dXJuIGFkZFdlZGluZyhyZXEsIHJlcyk7XG4gICAgfVxuICAgIGNhc2UgJ0RFTEVURSc6IHtcbiAgICAgIHJldHVybiBkZWxldGVXZWluZyhyZXEsIHJlcyk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwicmVxdWlyZSIsIk9iamVjdElkIiwiZ2V0V2VpbmciLCJyZXEiLCJyZXMiLCJkYiIsInN0dWRpb3UiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJ0b0FycmF5IiwianNvbiIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwiZXJyb3IiLCJFcnJvciIsImRlbGV0ZVdlaW5nIiwiX2lkIiwiYm9keSIsImNvbnZlcnRlZE9iamVjdElkIiwiZGVsZXRlT25lIiwiYWRkV2VkaW5nIiwiaW5zZXJ0T25lIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db_studiou.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db_studiou.js"));
module.exports = __webpack_exports__;

})();