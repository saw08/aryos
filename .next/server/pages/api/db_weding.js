"use strict";
(() => {
var exports = {};
exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection mahasiswa
async function getWeing(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let weding = await db.collection("weding").find({}).sort({}).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(weding)),
            success: true
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
async function deleteWeing(req, res) {
    var ObjectId = (__webpack_require__(8013).ObjectId);
    const { _id  } = req.body;
    const convertedObjectId = new ObjectId(_id);
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection("weding").deleteOne({
            "_id": convertedObjectId
        });
        // returning a message
        return res.json({
            message: "Post deleted successfully",
            success: true
        });
    } catch (error) {
        // returning an error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
;
// menambah data kedalam collection mahasiswa
async function addWeding(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection("weding").insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: "Data album Telah di Tambahkan",
            success: true
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// CRUD handler
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case "GET":
            {
                return getWeing(req, res);
            }
        case "POST":
            {
                return addWeding(req, res);
            }
        case "DELETE":
            {
                return deleteWeing(req, res);
            }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(9270)));
module.exports = __webpack_exports__;

})();