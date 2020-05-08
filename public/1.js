(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Catagory.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Catagory.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_CatagoryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/CatagoryService */ "./resources/js/services/CatagoryService.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "catagory",
  data: function data() {
    return {
      catagories: [],
      catagoryData: {
        nama_catagory: "",
        image: "",
        keterangan: ""
      },
      editCatagoryData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadCatagory();
  },
  methods: {
    loadCatagory: function () {
      var _loadCatagory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_CatagoryService__WEBPACK_IMPORTED_MODULE_1__["loadCatagory"]();

              case 3:
                response = _context.sent;
                this.catagories = response.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  title: "Errors ",
                  message: "Catagory, not found!",
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadCatagory() {
        return _loadCatagory.apply(this, arguments);
      }

      return loadCatagory;
    }(),
    attachImage: function attachImage() {
      // to use file reader
      this.catagoryData.image = this.$refs.newCatagoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.newCatagoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.catagoryData.image);
    },
    hideNewCatagoryModal: function hideNewCatagoryModal() {
      this.$refs.newCatagoryModal.hide();
    },
    showNewCatagoryModal: function showNewCatagoryModal() {
      this.$refs.newCatagoryModal.show();
    },
    createCatagory: function () {
      var _createCatagory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("nama_catagory", this.catagoryData.nama_catagory);
                formData.append("keterangan", this.catagoryData.keterangan);
                formData.append("image", this.catagoryData.image);
                _context2.prev = 4;
                _context2.next = 7;
                return _services_CatagoryService__WEBPACK_IMPORTED_MODULE_1__["createCatagory"](formData);

              case 7:
                response = _context2.sent;
                this.catagories.unshift(response.data);
                this.hideNewCatagoryModal();
                this.flashMessage.success({
                  title: "Success ",
                  message: "Catagory, has been save to database!",
                  time: 5000
                });
                this.catagoryData = {
                  nama_catagory: "",
                  image: "",
                  keterangan: ""
                };
                _context2.next = 24;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](4);
                console.log(_context2.t0.response.status);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 442 ? 20 : 22;
                break;

              case 20:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  title: "Errors ",
                  message: "Catagory, Failed to database!",
                  time: 5000
                });
                return _context2.abrupt("break", 24);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 14]]);
      }));

      function createCatagory() {
        return _createCatagory.apply(this, arguments);
      }

      return createCatagory;
    }(),
    deleteCatagory: function () {
      var _deleteCatagory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(catagory) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure want to delete ".concat(catagory.nama_catagory))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_CatagoryService__WEBPACK_IMPORTED_MODULE_1__["deleteCatagory"](catagory.id);

              case 5:
                this.catagories = this.catagories.filter(function (obj) {
                  return obj.id != catagory.id;
                });
                this.flashMessage.success({
                  title: "Success ",
                  message: "Catagory, has been deleted!",
                  time: 5000
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  title: "Errors ",
                  message: "Catagory, Failed to database!",
                  time: 5000
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function deleteCatagory(_x) {
        return _deleteCatagory.apply(this, arguments);
      }

      return deleteCatagory;
    }(),
    hideEditCatagoryModal: function hideEditCatagoryModal() {
      this.$refs.editCatagoryModal.hide();
    },
    showEditCatagoryModal: function showEditCatagoryModal() {
      this.$refs.editCatagoryModal.show();
    },
    editAttachImage: function editAttachImage() {
      // to use file reader
      this.editCatagoryData.image = this.$refs.editCatagoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        this.$refs.editCatagoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editCatagoryData.image);
    },
    editCatagory: function editCatagory(catagory) {
      this.editCatagoryData = _objectSpread({}, catagory);
      this.showEditCatagoryModal();
    },
    updateCatagory: function () {
      var _updateCatagory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append('nama_catagory', this.editCatagoryData.nama_catagory);
                formData.append('image', this.editCatagoryData.image);
                formData.append('keterangan', this.editCatagoryData.keterangan);
                formData.append('_method', 'put');
                _context4.next = 8;
                return _services_CatagoryService__WEBPACK_IMPORTED_MODULE_1__["updateCatagory"](this.editCatagoryData.id, formData);

              case 8:
                response = _context4.sent;
                this.catagories.map(function (catagory) {
                  if (catagory.id == response.data.id) {
                    for (var key in response.data.id) {
                      catagory = response.data;
                    }
                  }
                });
                this.hideEditCatagoryModal();
                this.flashMessage.success({
                  message: 'Catagory updated successfully',
                  time: 5000
                });
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  title: "Errors ",
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 14]]);
      }));

      function updateCatagory() {
        return _updateCatagory.apply(this, arguments);
      }

      return updateCatagory;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Catagory.vue?vue&type=template&id=136e5619&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Catagory.vue?vue&type=template&id=136e5619& ***!
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
    { staticClass: "container-fluid" },
    [
      _c("h1", { staticClass: "mt-4" }, [_vm._v("Catagory")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-header d-flex" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm ml-auto",
                  on: { click: _vm.showNewCatagoryModal }
                },
                [
                  _c("span", { staticClass: "fa fa-plus" }),
                  _vm._v("Tambah\n          ")
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.catagories, function(catagory, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(catagory.nama_catagory))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(catagory.keterangan))]),
                      _vm._v(" "),
                      _c("td", [
                        _c("img", {
                          staticClass: "table-image",
                          attrs: {
                            src:
                              _vm.$store.state.serverPath +
                              "/storage/" +
                              catagory.image,
                            width: "70px"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.editCatagory(catagory)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.deleteCatagory(catagory)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fa fa-trash" })]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newCatagoryModal",
          attrs: { "hide-footer": "", title: "Tambah Catagory" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createCatagory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nama_catagory" } }, [
                    _vm._v("Nama Catagory")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.catagoryData.nama_catagory,
                        expression: "catagoryData.nama_catagory"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nama_catagory",
                      "aria-describedby": "emailHelp"
                    },
                    domProps: { value: _vm.catagoryData.nama_catagory },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.catagoryData,
                          "nama_catagory",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.nama_catagory
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.nama_catagory[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Pilih Gambar")
                  ]),
                  _vm._v(" "),
                  _vm.catagoryData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newCatagoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newCatagoryImage",
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      id: "image",
                      "aria-describedby": "emailHelp"
                    },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "keterangan" } }, [
                    _vm._v("Keterangan")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.catagoryData.keterangan,
                        expression: "catagoryData.keterangan"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "keterangan", rows: "3" },
                    domProps: { value: _vm.catagoryData.keterangan },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.catagoryData,
                          "keterangan",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewCatagoryModal }
                    },
                    [_vm._v("Cencel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v("Save\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editCatagoryModal",
          attrs: { "hide-footer": "", title: "Tambah Catagory" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateCatagory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nama_catagory" } }, [
                    _vm._v("Nama Catagory")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editCatagoryData.nama_catagory,
                        expression: "editCatagoryData.nama_catagory"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "nama_catagory",
                      "aria-describedby": "emailHelp"
                    },
                    domProps: { value: _vm.editCatagoryData.nama_catagory },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editCatagoryData,
                          "nama_catagory",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.nama_catagory
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.nama_catagory[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Pilih Gambar")
                  ]),
                  _vm._v(" "),
                  _vm.editCatagoryData.image
                    ? _c("div", [
                        _c("img", {
                          ref: "editCatagoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: {
                            src:
                              _vm.$store.state.serverPath +
                              "/storage/" +
                              _vm.editCatagoryData.image
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editCatagoryImage",
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      id: "image",
                      "aria-describedby": "emailHelp"
                    },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "keterangan" } }, [
                    _vm._v("Keterangan")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editCatagoryData.keterangan,
                        expression: "editCatagoryData.keterangan"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "keterangan", rows: "3" },
                    domProps: { value: _vm.editCatagoryData.keterangan },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editCatagoryData,
                          "keterangan",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditCatagoryModal }
                    },
                    [_vm._v("Cencel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v("update\n          ")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Catagory")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v("Data Table\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("NO")]),
        _vm._v(" "),
        _c("td", [_vm._v("Nama Catagory")]),
        _vm._v(" "),
        _c("td", [_vm._v("Keterangan")]),
        _vm._v(" "),
        _c("td", [_vm._v("Image")]),
        _vm._v(" "),
        _c("td", [_vm._v("Aksi")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/CatagoryService.js":
/*!**************************************************!*\
  !*** ./resources/js/services/CatagoryService.js ***!
  \**************************************************/
/*! exports provided: createCatagory, loadCatagory, deleteCatagory, updateCatagory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatagory", function() { return createCatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCatagory", function() { return loadCatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCatagory", function() { return deleteCatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCatagory", function() { return updateCatagory; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCatagory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/catagory', data);
}
function loadCatagory() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/catagory');
}
function deleteCatagory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/catagory/".concat(id));
}
function updateCatagory(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("catagory/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/Catagory.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Catagory.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catagory.vue?vue&type=template&id=136e5619& */ "./resources/js/views/Catagory.vue?vue&type=template&id=136e5619&");
/* harmony import */ var _Catagory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catagory.vue?vue&type=script&lang=js& */ "./resources/js/views/Catagory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Catagory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Catagory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Catagory.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Catagory.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catagory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Catagory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Catagory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catagory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Catagory.vue?vue&type=template&id=136e5619&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Catagory.vue?vue&type=template&id=136e5619& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Catagory.vue?vue&type=template&id=136e5619& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Catagory.vue?vue&type=template&id=136e5619&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catagory_vue_vue_type_template_id_136e5619___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);