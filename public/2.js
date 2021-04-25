(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/ContactUs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/ContactUs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      valid: true,
      form: {},
      categoryItems: [{
        header: 'General'
      }, {
        divider: true,
        inset: true
      }, {
        text: 'Office Products',
        value: 'officeproducts@gem.com.fj'
      }, {
        text: 'Visual Concepts',
        value: 'frontdesk.vc@gem.com.fj'
      }, {
        text: 'Administration',
        value: 'accounts@gem.com.fj'
      }, {
        divider: true
      }, {
        header: 'IT Solutions'
      }, {
        divider: true,
        inset: true
      }, {
        text: 'IT Sales',
        value: 'salesadmin.it@gem.com.fj'
      }, {
        text: 'Technical Support',
        value: 'helpdesk@gem.com.fj'
      }, {
        text: 'Infrastructure Solutions',
        value: 'infra-solutions@gem.com.fj'
      }, {
        text: 'Networking & Structured Cabling',
        value: 'nst@gem.com.fj'
      }],
      menuProps: {
        transition: 'slide-y-transition',
        offsetY: true
      }
    };
  },
  watch: {
    'form.category': function formCategory(newValue, oldValue) {
      if (newValue && newValue != oldValue) {
        this.$refs.form.resetValidation();
      }
    }
  },
  methods: {
    send: function send() {
      if (this.$refs.form.validate()) {
        this.message('Form Valid', 'success');
      } else {
        this.message('Form Invalid', 'error');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac& ***!
  \******************************************************************************************************************************************************************************************************/
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
              _c("v-card-title", { staticClass: "d-flex justify-center" }, [
                _c("h1", [_vm._v("Contact Us")])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v(
                    "Have a question or require a quote? Do not hesitate to send us a message via the form below"
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "justify-center" },
                [
                  _c(
                    "v-container",
                    {
                      style: [
                        _vm.$vuetify.breakpoint.mdAndDown
                          ? { width: "100%" }
                          : { width: "60%" }
                      ]
                    },
                    [
                      _c(
                        "v-form",
                        {
                          ref: "form",
                          attrs: { "lazy-validation": "" },
                          model: {
                            value: _vm.valid,
                            callback: function($$v) {
                              _vm.valid = $$v
                            },
                            expression: "valid"
                          }
                        },
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center", align: "center" } },
                            [
                              _c("v-col", { attrs: { md: "4" } }),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.categoryItems,
                                      label: "Choose a category",
                                      "item-text": "text",
                                      "item-value": "value",
                                      "menu-props": _vm.menuProps,
                                      rules: _vm.fieldRules,
                                      filled: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.form.category,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "category", $$v)
                                      },
                                      expression: "form.category"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-col", { attrs: { md: "4" } }),
                              _vm._v(" "),
                              _c("v-expand-transition", [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.form.category,
                                        expression: "form.category"
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "v-row",
                                      {
                                        attrs: {
                                          justify: "center",
                                          align: "center",
                                          dense: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "4" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Full Name*",
                                                rules: _vm.fieldRules,
                                                filled: "",
                                                counter: "255",
                                                maxlength: "255"
                                              },
                                              model: {
                                                value: _vm.form.full_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "full_name",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.full_name"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "4" } },
                                          [
                                            _c("v-text-field", {
                                              directives: [
                                                {
                                                  name: "mask",
                                                  rawName: "v-mask",
                                                  value: "#######",
                                                  expression: "'#######'"
                                                }
                                              ],
                                              attrs: {
                                                label: "Mobile Number*",
                                                rules: _vm.phoneRules,
                                                filled: "",
                                                counter: "7"
                                              },
                                              model: {
                                                value: _vm.form.mobile_number,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "mobile_number",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.mobile_number"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "4" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Email Address*",
                                                rules: _vm.emailRules,
                                                filled: "",
                                                counter: "255",
                                                maxlengt: "255"
                                              },
                                              model: {
                                                value: _vm.form.email_address,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "email_address",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.email_address"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "6" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Address",
                                                rules: _vm.fieldRules,
                                                filled: "",
                                                counter: "255",
                                                maxlength: "255"
                                              },
                                              model: {
                                                value: _vm.form.address,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "address",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.address"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "6" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                label: "Subject*",
                                                rules: _vm.fieldRules,
                                                filled: "",
                                                counter: "255",
                                                maxlength: "255"
                                              },
                                              model: {
                                                value: _vm.form.subject,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "subject",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.subject"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12" } },
                                          [
                                            _c("v-textarea", {
                                              attrs: {
                                                filled: "",
                                                label: "Message*",
                                                "auto-grow": "",
                                                rules: _vm.fieldRules,
                                                counter: "1000",
                                                maxlength: "1000"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-col", { attrs: { cols: "6" } }, [
                                          _c("p", { staticClass: "my-0" }, [
                                            _c("strong", [
                                              _vm._v(
                                                "Fields denoted with * are compulsory."
                                              )
                                            ])
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          {
                                            staticClass: "d-flex justify-end",
                                            attrs: { cols: "6" }
                                          },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "primary",
                                                attrs: {
                                                  large: "",
                                                  rounded: "",
                                                  disabled: !_vm.valid
                                                },
                                                on: { click: _vm.send }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Send "
                                                ),
                                                _c(
                                                  "v-icon",
                                                  { attrs: { right: "" } },
                                                  [_vm._v("mdi-send")]
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
                              ])
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

/***/ "./resources/js/Home/ContactUs.vue":
/*!*****************************************!*\
  !*** ./resources/js/Home/ContactUs.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=1cf630ac& */ "./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/Home/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Home/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Home/ContactUs.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Home/ContactUs.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac&":
/*!************************************************************************!*\
  !*** ./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=1cf630ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Home/ContactUs.vue?vue&type=template&id=1cf630ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_1cf630ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);