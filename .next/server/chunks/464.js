"use strict";
exports.id = 464;
exports.ids = [464];
exports.modules = {

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Album)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Album({ props  }) {
    const deleteAlbum = async ()=>{
        try {
            console.log("Try");
            // Delete post
            await fetch("/api/db_undangan", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _id: props._id
                })
            });
            // reset the deleting state
            // reload the page
            alert("data Terhapus");
        } catch (error) {
        // stop deleting state
        }
    };
    let i = [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center col-lg-10 col-md-10 form-group p-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: props.link,
                    children: [
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "book-a-table-btn",
                            children: [
                                "Contoh Undangan ",
                                i + 1
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    onClick: ()=>deleteAlbum(),
                    className: "btn btn-outline-secondary mx-3",
                    children: "HAPUS"
                })
            ]
        })
    });
}


/***/ })

};
;