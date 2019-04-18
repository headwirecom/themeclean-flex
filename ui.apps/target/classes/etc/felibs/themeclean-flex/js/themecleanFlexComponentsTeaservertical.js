var cmpThemecleanFlexComponentsTeaservertical = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.showtitle === 'true', this.model.showsubtitle === 'true', this.model.showtext === 'true', this.model.showbutton === 'true')
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
        _c("div", { staticClass: "col-12 col-md-10 align-items-center" }, [
          _c(
            "div",
            {
              staticClass: "d-flex col-12 p-0",
              class: {
                "justify-content-start": _vm.model.aligncontent === "left",
                "justify-content-center": _vm.model.aligncontent === "center",
                "justify-content-end": _vm.model.aligncontent === "right"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "percms-w-sm-100",
                  class: {
                    "text-left": _vm.model.aligncontent === "left",
                    "text-center": _vm.model.aligncontent === "center",
                    "text-right": _vm.model.aligncontent === "right",
                    "percms-text-large": _vm.model.isprimary === "true"
                  },
                  style: "width:" + _vm.model.textwidth + "%;"
                },
                [
                  _vm.model.showtitle === "true"
                    ? _c("h2", { domProps: { innerHTML: _vm._s(_vm.model.title) } })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.model.showsubtitle === "true"
                    ? _c("h4", {
                        domProps: { innerHTML: _vm._s(_vm.model.subtitle) }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.model.showtext === "true"
                    ? _c("p", { domProps: { innerHTML: _vm._s(_vm.model.text) } })
                    : _vm._e()
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm.model.showbutton == "true"
            ? _c(
                "div",
                {
                  staticClass: "col-12 d-flex flex-wrap p-0 justify-content-center",
                  class: {
                    "justify-content-md-start": _vm.model.alignbuttons === "start",
                    "justify-content-md-center":
                      _vm.model.alignbuttons === "center",
                    "justify-content-md-end": _vm.model.alignbuttons === "end"
                  }
                },
                _vm._l(_vm.model.buttons, function(item, i) {
                  return _c("a", {
                    key: i,
                    staticClass: "btn m-2",
                    class: {
                      "btn-lg": _vm.model.buttonsize === "large",
                      "btn-sm": _vm.model.buttonsize === "small",
                      "btn-primary": item.buttoncolor === "primary",
                      "btn-secondary": item.buttoncolor === "secondary",
                      "btn-success": item.buttoncolor === "success",
                      "btn-danger": item.buttoncolor === "danger",
                      "btn-warning": item.buttoncolor === "warning",
                      "btn-info": item.buttoncolor === "info",
                      "btn-light": item.buttoncolor === "light",
                      "btn-dark": item.buttoncolor === "dark"
                    },
                    style:
                      "backgroundColor:" +
                      item.buttoncolor +
                      ";borderColor:" +
                      item.buttoncolor +
                      ";",
                    attrs: { href: _vm.$helper.pathToUrl(item.buttonlink) },
                    domProps: { innerHTML: _vm._s(item.buttontext) }
                  })
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isEditAndEmpty
            ? _c("div", [_vm._v("no content defined for component")])
            : _vm._e()
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
