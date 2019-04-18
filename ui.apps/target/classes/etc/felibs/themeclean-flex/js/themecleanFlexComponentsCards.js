var cmpThemecleanFlexComponentsCards = (function () {
    'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    var script = {
        props: ['model'],
        computed: {
            isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                //return (this.model.cards.length === 0)
                return this.$helper.areAllEmpty(this.model.cards)
            }
        }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
    /* server only */
    , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
      } // Vue.extend constructor export interop.


      var options = typeof script === 'function' ? script.options : script; // render functions

      if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true; // functional template

        if (isFunctionalTemplate) {
          options.functional = true;
        }
      } // scopedId


      if (scopeId) {
        options._scopeId = scopeId;
      }

      var hook;

      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true

          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          } // inject component styles


          if (style) {
            style.call(this, createInjectorSSR(context));
          } // register component module identifier for async chunk inference


          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        }; // used by ssr in case component is cached and beforeCreate
        // never gets called


        options._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function () {
          style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
        } : function (context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook) {
        if (options.functional) {
          // register for functional component in vue file
          var originalRender = options.render;

          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return script;
    }

    var normalizeComponent_1 = normalizeComponent;

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("themeclean-components-block", { attrs: { model: _vm.model } }, [
        _c(
          "div",
          { staticClass: "card-deck justify-content-center" },
          [
            _vm.isEditAndEmpty
              ? _c("div", { staticClass: "perIsEditAndEmpty" }, [
                  _vm._v("no content defined for component")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.model.cards, function(item, i) {
              return _c(
                "div",
                { key: i, staticClass: "col-12 col-md-6 col-lg p-0 pb-md-3" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card p-0 border-0 d-flex flex-column justify-content-between h-100",
                      class: {
                        "bg-dark":
                          _vm.model.customcardcolor !== "true" &&
                          _vm.model.colorscheme === "light",
                        "bg-light":
                          _vm.model.customcardcolor !== "true" &&
                          _vm.model.colorscheme === "dark",
                        "text-dark":
                          (_vm.model.showcard === "false" &&
                            _vm.model.colorscheme === "light") ||
                          (_vm.model.showcard === "true" &&
                            _vm.model.colorscheme === "dark"),
                        "text-light":
                          (_vm.model.showcard === "false" &&
                            _vm.model.colorscheme === "dark") ||
                          (_vm.model.showcard === "true" &&
                            _vm.model.colorscheme === "light"),
                        "bg-transparent": _vm.model.showcard === "false"
                      },
                      style:
                        "background-color:" +
                        (_vm.model.customcardcolor === "true"
                          ? _vm.model.cardcolor
                          : "") +
                        ";"
                    },
                    [
                      _c("div", [
                        item.image
                          ? _c("img", {
                              class:
                                _vm.model.showcard == "true"
                                  ? "card-img pb-1"
                                  : "card-img pb-3",
                              attrs: {
                                src: _vm.$helper.pathToUrl(item.image),
                                alt: item.imagealttext
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: {
                              "card-body": _vm.model.showcard === "true",
                              "px-3 p-md-0": _vm.model.showcard === "false"
                            }
                          },
                          [
                            _vm.model.showtitle == "true"
                              ? _c("h5", {
                                  staticClass: "card-title",
                                  style: "color:" + item.color + ";",
                                  domProps: { innerHTML: _vm._s(item.title) }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.model.showtext == "true"
                              ? _c("p", {
                                  domProps: { innerHTML: _vm._s(item.text) }
                                })
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      item.buttontext
                        ? _c("div", { staticClass: "text-center" }, [
                            _vm.model.showbutton == "true"
                              ? _c("a", {
                                  staticClass: "btn mb-3",
                                  class: {
                                    "btn-lg": item.buttonsize === "large",
                                    "btn-sm": item.buttonsize === "small",
                                    "btn-primary": item.buttoncolor === "primary",
                                    "btn-secondary":
                                      item.buttoncolor === "secondary",
                                    "btn-success": item.buttoncolor === "success",
                                    "btn-danger": item.buttoncolor === "danger",
                                    "btn-warning": item.buttoncolor === "warning",
                                    "btn-info": item.buttoncolor === "info",
                                    "btn-light": item.buttoncolor === "light",
                                    "btn-dark": item.buttoncolor === "dark"
                                  },
                                  attrs: {
                                    href: _vm.$helper.pathToUrl(item.buttonlink)
                                  },
                                  domProps: { innerHTML: _vm._s(item.buttontext) }
                                })
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]
                  )
                ]
              )
            })
          ],
          2
        )
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = undefined;
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject */
      
      /* style inject SSR */
      

      
      var template = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        undefined,
        undefined
      );

    return template;

}());
