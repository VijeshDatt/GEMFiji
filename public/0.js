(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fixed-position-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-left: 20%;\n  margin-top: 10rem;\n  font-size: 3.5em;\n  z-index: 1;\n}\n.fixed-position-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-left: 20%;\n  margin-top: 15rem;\n  font-size: 3.5em;\n  z-index: 1;\n}\n.fixed-position-jumbo {\n  top: 0;\n  right: 0;\n  margin-left: 20%;\n  margin-top: 10rem;\n  font-size: 3.5em;\n  width: 70vw;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-sheet",
                [
                  _vm.$vuetify.breakpoint.lgAndUp
                    ? _c(
                        "div",
                        { staticStyle: { "margin-top": "-8% !important" } },
                        [
                          _c(
                            "h2",
                            { staticClass: "text-center fixed-position-text" },
                            [_vm._v("Welcome to")]
                          ),
                          _vm._v(" "),
                          _c("v-img", {
                            staticClass: "fixed-position-image",
                            attrs: {
                              src: __webpack_require__(/*! ../../assets/images/logo/gem-fiji-svg.svg */ "./resources/assets/images/logo/gem-fiji-svg.svg"),
                              alt: "GEM (Fiji) Logo"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-img", {
                            staticClass: "fixed-position-jumbo",
                            attrs: {
                              src: __webpack_require__(/*! ../../assets/images/home-jumbo.svg */ "./resources/assets/images/home-jumbo.svg")
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("h2", { staticClass: "text-center" }, [
                              _vm._v("Welcome to")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/logo/gem-fiji-svg.svg */ "./resources/assets/images/logo/gem-fiji-svg.svg"),
                                  alt: "GEM (Fiji) Logo",
                                  width: "150"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-title",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { id: "aboutus" }
                },
                [_c("h1", [_vm._v("About Us")])]
              ),
              _vm._v(" "),
              _c("v-card-text", [
                _c("p", { staticClass: "text-justify" }, [
                  _vm._v(
                    "\n          GEM (Fiji) Limited, formerly called Graphics Equipments Limited was established in 1972 with a vision of reaching out to customers and providing business solutions. We are a unique family business providing business solutions for organizations to be more efficient, improve performance and provide better results. We work with organizations in every industry in the public and private sectors and of every size from start-ups to multinationals.\n        "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-justify" }, [
                  _vm._v(
                    "\n          GEM (Fiji) Limited, formerly called Graphics Equipments Limited was established in 1972 with a vision of reaching out to customers and providing business solutions. We are a unique family business providing business solutions for organizations to be more efficient, improve performance and provide better results. We work with organizations in every industry in the public and private sectors and of every size from start-ups to multinationals.\n        "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-justify" }, [
                  _vm._v(
                    "\n          GEM IT SOLUTIONS is the ONLY PLATINUM PARTNER of DELL in Fiji with Authorized Service Centre here to cater to all warranty and service needs, making sure our clients get the best after-sales services.\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-title",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { id: "subsidiaries" }
                },
                [_c("h1", [_vm._v("Subsidiaries")])]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "text-md-end text-center",
                          attrs: { cols: "12", md: "6" }
                        },
                        [
                          _c("h1", { staticClass: "py-4" }, [
                            _vm._v("GEM Office Products")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "GEM Office Products is a customer focused business solutions company with the prime objective of providing each of our customers with an unparalleled level of service, coupled with the most competitive prices in the industry. In order to differentiate ourselves from our competitors, we have taken positive steps to ensure that all our customers are treated with equal care, from large corporate accounts through to small office / home office customers."
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.mdAndUp
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/home-op.svg */ "./resources/assets/images/home-op.svg"),
                                  contain: ""
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.mdAndUp
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/home-it.svg */ "./resources/assets/images/home-it.svg"),
                                  contain: ""
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-md-start text-center",
                          attrs: { cols: "12", md: "6" }
                        },
                        [
                          _c("h1", { staticClass: "py-4" }, [
                            _vm._v("GEM IT Solutions")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "GEM IT Solutions is the IT arm of GEM (Fiji) Limited. GEM IT Solutions primary objective is to help our customers achieve their business goals with the application of pertinent technology solutions. Our business model combines industry leading technology accreditations, diligent account managers, supported by a large team of experienced technical consultants and engineers. Our success has come from providing our clients with unrivalled technical expertise along with extremely high service levels."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "GEM IT Technical Engineers have a wealth of experience in solution design and deployment, and have the confidence in technology required to deliver integrated solutions that meet your business demands. With our comprehensive portfolio of leading technology partners, our in-house Dell-certified expert team of technical resource are here to meet your day-to-day business challenges."
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "text-md-end text-center",
                          attrs: { cols: "12", md: "6" }
                        },
                        [
                          _c("h1", { staticClass: "py-4" }, [
                            _vm._v("GEM Visual Concepts")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-justify" }, [
                            _vm._v(
                              "GEM Visual Concepts understand that the success of a company depends in part to creating visibility in the market place. We are a fully-fledged design, marketing and print production setup. Our products and services include design concepts, wide format printing, promotional displays, sign boards, desktop publishing, promotional products and I.D. card printing and related accessories. Our team strives to develop creative concepts that accurately capture our clients’ communication and marketing requirements. We value simplicity and emphasize on friendly and personal service. Let us enhance your business with outstanding visual and communication concepts."
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.mdAndUp
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/images/home-vc.svg */ "./resources/assets/images/home-vc.svg"),
                                  contain: ""
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/home-it.svg":
/*!*********************************************!*\
  !*** ./resources/assets/images/home-it.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home-it.svg?42ab0a60f537f98d1cf961ddedc5a34d";

/***/ }),

/***/ "./resources/assets/images/home-jumbo.svg":
/*!************************************************!*\
  !*** ./resources/assets/images/home-jumbo.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home-jumbo.svg?a62fae30c0db5d0800283423395cdae4";

/***/ }),

/***/ "./resources/assets/images/home-op.svg":
/*!*********************************************!*\
  !*** ./resources/assets/images/home-op.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home-op.svg?e66a04ef1fd653c5fefd12351bb169b5";

/***/ }),

/***/ "./resources/assets/images/home-vc.svg":
/*!*********************************************!*\
  !*** ./resources/assets/images/home-vc.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home-vc.svg?a856b4c031dddadd7dab4935181991ef";

/***/ }),

/***/ "./resources/js/Home/Home.vue":
/*!************************************!*\
  !*** ./resources/js/Home/Home.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=7b8dbffe& */ "./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Home/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Home/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe&":
/*!*******************************************************************!*\
  !*** ./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=7b8dbffe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/Home.vue?vue&type=template&id=7b8dbffe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7b8dbffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);