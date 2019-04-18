var cmpThemecleanFlexComponentsAccordion = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false }
            return this.$helper.areAllEmpty( this.model.showtitle === 'true' && this.model.title, this.model.showmedia === 'true', this.model.accordiontoggle );
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
        _c("div", { staticClass: "col-12 col-md-10" }, [
          _vm.isEditAndEmpty
            ? _c("div", { staticClass: "perIsEditAndEmpty" }, [
                _vm._v("no content defined for component")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.model.showtitle == "true"
            ? _c("h2", {
                staticClass: "text-center pb-4",
                domProps: { innerHTML: _vm._s(_vm.model.title) }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row",
              class:
                _vm.model.mediaposition === "after"
                  ? "flex-row-reverse"
                  : "flex-row"
            },
            [
              _vm.model.showmedia === "true"
                ? _c(
                    "div",
                    {
                      staticClass: "col-12 col-md-auto p-0 pb-3 p-md-3",
                      style: { width: _vm.model.mediawidth + "%" }
                    },
                    [
                      _c("themeclean-components-media", {
                        attrs: { model: _vm.model }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-md p-0 border-0",
                  attrs: { id: "accordion" + _vm._uid }
                },
                _vm._l(_vm.model.accordiontoggle, function(item, i) {
                  return _c(
                    "div",
                    { key: i, staticClass: "item card bg-transparent border-0" },
                    [
                      _c(
                        "a",
                        {
                          ref: "collapsible",
                          refInFor: true,
                          staticClass:
                            "d-flex justify-content-between align-items-center card-header border-0 bg-transparent px-3",
                          attrs: {
                            "aria-expanded": "false",
                            "data-toggle": "collapse",
                            "data-parent":
                              _vm.model.toggletype === "accordion"
                                ? "#accordion" + _vm._uid
                                : "",
                            href: "#accordion" + _vm._uid + i,
                            "aria-controls": "accordion" + _vm._uid + i
                          }
                        },
                        [
                          _c("h4", { domProps: { innerHTML: _vm._s(item.title) } }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-chevron-down",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse",
                          attrs: {
                            role: "tabpanel",
                            id: "accordion" + _vm._uid + i
                          }
                        },
                        [
                          _c("div", {
                            staticClass:
                              "card-body p-0 px-3 bg-transparent border-0",
                            domProps: { innerHTML: _vm._s(item.text) }
                          })
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ])
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
