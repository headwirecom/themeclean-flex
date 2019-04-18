var cmpThemecleanFlexComponentsCarousel = (function () {
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

  var script = {
    props: ['model'],
    mounted: function mounted() {
      $(this.$refs.pcmscarousel).carousel({
        ride: this.model.autoplay === 'true' ? 'carousel' : false,
        interval: this.model.autoplay === 'true' ? parseInt(this.model.interval) * 1000: 0,
        pause: this.model.pause === 'true' ? 'hover' : false,
        wrap: this.model.wrap === 'true',
        keyboard: this.model.keyboard === 'true'
      });
    },
    computed: {
      name: function name() {
          return this.model.path.split('/').slice(1).join('-').slice(4)
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
        {
          ref: "pcmscarousel",
          staticClass: "carousel slide w-100 text-light",
          style: "height:" + _vm.model.carouselheight + "vh;",
          attrs: { id: _vm.name }
        },
        [
          _vm.model.indicators === "true"
            ? _c(
                "ol",
                { staticClass: "carousel-indicators" },
                _vm._l(_vm.model.slides, function(item, i) {
                  return _c("li", {
                    key: i,
                    class: { active: i === 0 },
                    attrs: { "data-target": "#" + _vm.name, "data-slide-to": i }
                  })
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-inner", attrs: { role: "listbox" } },
            _vm._l(_vm.model.slides, function(item, i) {
              return _c(
                "div",
                {
                  key: i,
                  staticClass: "carousel-item",
                  class: { active: i === 0 }
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-column justify-content-center" },
                    [
                      item.imagepath
                        ? _c("img", {
                            staticClass: "percms-carousel-image",
                            attrs: { src: item.imagepath, alt: item.alt }
                          })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  item.heading || item.text
                    ? _c(
                        "div",
                        {
                          staticClass: "percms-carousel-text p-3",
                          class: {
                            "percms-caption-bg": _vm.model.captionbg === "true"
                          }
                        },
                        [
                          item.heading
                            ? _c("h3", {
                                domProps: { innerHTML: _vm._s(item.heading) }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          item.text
                            ? _c("p", {
                                domProps: { innerHTML: _vm._s(item.text) }
                              })
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _vm.model.controls === "true"
            ? _c(
                "a",
                {
                  staticClass: "carousel-control-prev",
                  attrs: {
                    role: "button",
                    "data-slide": "prev",
                    href: "#" + _vm.name
                  }
                },
                [
                  _c(
                    "div",
                    {
                      class: {
                        "percms-caption-bg": _vm.model.captionbg === "true"
                      }
                    },
                    [_c("span", { staticClass: "carousel-control-prev-icon" })]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.model.controls === "true"
            ? _c(
                "a",
                {
                  staticClass: "carousel-control-next",
                  attrs: {
                    role: "button",
                    "data-slide": "next",
                    href: "#" + _vm.name
                  }
                },
                [
                  _c(
                    "div",
                    {
                      class: {
                        "percms-caption-bg": _vm.model.captionbg === "true"
                      }
                    },
                    [_c("span", { staticClass: "carousel-control-next-icon" })]
                  )
                ]
              )
            : _vm._e()
        ]
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
