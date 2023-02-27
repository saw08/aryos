"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 8142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TambahPaket)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




function TambahPaket() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { waweding , wastudiutama , waselfstudio , waundangan , watenda , wakost , objectId  } = router.query;
    //State of Art
    const [_waweding, setWeding] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [_wastudiutama, setStudioutama] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [_waselfstudio, setSelfstudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [_waundangan, setUndangan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [_watenda, setTenda] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [_wakost, setKost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    //Set All
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (typeof waweding == "string") {
            setWeding(waweding);
        }
        if (typeof wastudiutama == "string") {
            setStudioutama(wastudiutama);
        }
        if (typeof waselfstudio == "string") {
            setSelfstudio(waselfstudio);
        }
        if (typeof waundangan == "string") {
            setUndangan(waundangan);
        }
        if (typeof watenda == "string") {
            setTenda(watenda);
        }
        if (typeof wakost == "string") {
            setKost(wakost);
        }
    }, [
        waweding,
        wastudiutama,
        waselfstudio,
        waundangan,
        watenda,
        wakost,
        objectId
    ]);
    //UPDATE
    const handlePost = async (e)=>{
        e.preventDefault();
        // fields check
        try {
            // Update post
            await fetch("/api/db_nowa", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    waweding: _waweding,
                    wastudiutama: _wastudiutama,
                    waselfstudio: _waselfstudio,
                    waundangan: _waundangan,
                    watenda: _watenda,
                    wakost: _wakost,
                    objectId: objectId
                })
            });
            // reload the page
            alert("nowa sukses diupdate");
            router.push("/admin/tambah-nowa");
        } catch (error) {
        // Stop publishing state
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "events",
        className: "events",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Tambah Data Menu"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handlePost,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " col-lg-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Wedong &Prawedong "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa weding",
                                        onChange: (e)=>setWeding(e.target.value),
                                        value: _waweding
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Studio Utama "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa Studio Utama",
                                        onChange: (e)=>setStudioutama(e.target.value),
                                        value: _wastudiutama
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Self Studio "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa self studio",
                                        onChange: (e)=>setSelfstudio(e.target.value),
                                        value: _waselfstudio
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Undangan "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa Undangan",
                                        onChange: (e)=>setUndangan(e.target.value),
                                        value: _waundangan
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Aryo's Tenda "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa aryos tenda",
                                        onChange: (e)=>setTenda(e.target.value),
                                        value: _watenda
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-6 col-md-10 mt-3 form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        style: {
                                            color: "white"
                                        },
                                        children: "Wa Aryo's Kost "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "form-control",
                                        placeholder: "Wa aryos Kost",
                                        onChange: (e)=>setKost(e.target.value),
                                        value: _wakost
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "validate"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center col-lg-6 col-md-10 form-group mt-3 mt-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "book-a-table-btn",
                                    type: "submit",
                                    children: "Simpan"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8142));
module.exports = __webpack_exports__;

})();