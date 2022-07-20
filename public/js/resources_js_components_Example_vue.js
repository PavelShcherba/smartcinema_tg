"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Example_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Example",
  data: function data() {
    return {
      persons: null,
      cart: [],
      product_cart: null
    };
  },
  computed: {
    rows: function rows() {
      var row = [];
      var rows = [];
      var products = this.persons;

      for (var r in products) {
        row.push(products[r]);

        if (row.length === 3) {
          rows.push(row);
          row = [];
        }
      }

      if (row.length > 0) {
        rows.push(row);
      }

      return rows;
    }
  },
  mounted: function mounted() {
    this.getElipson();
    this.getProducts();
    $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
      }
    });
  },
  methods: {
    getElipson: function getElipson() {
      var cart = localStorage.getItem('cart');

      if (cart) {
        cart = JSON.parse(cart);

        if (cart.length !== 0) {
          $('.elipson').fadeIn();
        } else {
          $('.elipson').fadeOut();
        }
      } else {
        $('.elipson').fadeOut();
      }
    },
    getProducts: function getProducts() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api").then(function (res) {
        _this.persons = res.data.data;
      });
    },
    getVolumes: function getVolumes(e) {
      if ($(e.target).hasClass('open')) {
        $(e.target).removeClass('open');
        $(e.target).next().fadeOut();
      } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(e.target).addClass('open');
        $(e.target).next().fadeIn();
      }
    },
    setVolume: function setVolume(product_id, volume, price, event) {
      this.product_cart = null;
      $('.select__head').removeClass('open');
      $(event.target).parent().fadeOut();
      $(event.target).parent().prev().text($(event.target).text());
      $(event.target).parent().parent().next().html("Цена: " + price + " грн.");
      var product = {
        'product_id': product_id,
        'volume_id': volume
      };
      this.product_cart = product;
    },
    addToCart: function addToCart(product) {
      var newCart = [{
        'product_id': product.id,
        'volume_id': null,
        'qty': 1
      }];
      var cart = localStorage.getItem('cart');

      if (this.product_cart && product.volumes.length !== 0 && newCart[0].product_id === this.product_cart.product_id) {
        newCart[0].volume_id = this.product_cart.volume_id;
      } else if (product.volumes.length !== 0) {
        newCart[0].volume_id = product.volumes[0].id;
      }

      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newCart));
      } else {
        cart = JSON.parse(cart);
        cart.forEach(function (productInCart) {
          if (productInCart.product_id === product.id && productInCart.volume_id === newCart[0].volume_id) {
            productInCart.qty++;
            newCart = null;
          }
        });
        Array.prototype.push.apply(cart, newCart);
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      $('.elipson').fadeIn();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=template&id=63af75cf":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=template&id=63af75cf ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "conteiner"
};
var _hoisted_2 = {
  "class": "wrapper"
};
var _hoisted_3 = {
  "class": "cell_one"
};
var _hoisted_4 = {
  "class": "info"
};
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  "class": "main_text"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "select__input",
  type: "hidden",
  name: ""
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "select__head"
}, "Виберiть", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "select__list",
  style: {
    "display": "none"
  }
};
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  key: 1,
  "class": "secondary_text"
};
var _hoisted_12 = {
  key: 2,
  "class": "secondary_text"
};
var _hoisted_13 = {
  "class": "button"
};
var _hoisted_14 = ["onClick"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: ""
}, "Добавить к заказу", -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_15];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "to_basket"
};
var _hoisted_19 = {
  "class": "elipson",
  style: {
    "display": "none"
  }
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" До Кошику ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.rows, function (row) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row, function (item) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "pict",
        src: item.image
      }, null, 8
      /* PROPS */
      , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
      /* TEXT */
      ), item.volumes.length !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        "class": "select",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.getVolumes && $options.getVolumes.apply($options, arguments);
        })
      }, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.volumes, function (volume) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.setVolume(item.id, volume.id, volume.price[0].value, $event);
          }, ["stop"]),
          "class": "select__item"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(volume.value), 9
        /* TEXT, PROPS */
        , _hoisted_10);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.prices.length !== 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, "Цена: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.prices[0].value) + " грн.", 1
      /* TEXT */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_12, "Цена: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.prices[0].value) + " грн", 1
      /* TEXT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addToCart(item);
        }, ["prevent"]),
        "class": "btn btn-secondary"
      }, _hoisted_16, 8
      /* PROPS */
      , _hoisted_14)])]);
    }), 256
    /* UNKEYED_FRAGMENT */
    ))]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "btc btc-primary",
    to: "/cart"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_20];
    }),
    _: 1
    /* STABLE */

  })])])]);
}

/***/ }),

/***/ "./resources/js/components/Example.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Example.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Example_vue_vue_type_template_id_63af75cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Example.vue?vue&type=template&id=63af75cf */ "./resources/js/components/Example.vue?vue&type=template&id=63af75cf");
/* harmony import */ var _Example_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example.vue?vue&type=script&lang=js */ "./resources/js/components/Example.vue?vue&type=script&lang=js");
/* harmony import */ var D_site_localhost_tg_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_site_localhost_tg_shop_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Example_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Example_vue_vue_type_template_id_63af75cf__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Example.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Example.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Example.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Example_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Example_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Example.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Example.vue?vue&type=template&id=63af75cf":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Example.vue?vue&type=template&id=63af75cf ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Example_vue_vue_type_template_id_63af75cf__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Example_vue_vue_type_template_id_63af75cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Example.vue?vue&type=template&id=63af75cf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Example.vue?vue&type=template&id=63af75cf");


/***/ })

}]);