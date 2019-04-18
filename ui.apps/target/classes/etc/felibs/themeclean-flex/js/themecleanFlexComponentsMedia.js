var cmpThemecleanFlexComponentsMedia = (function () {
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

  var script = {
    props: ["model"],
    computed: {
      noMedia: function noMedia() {
        var ref = this.model;
        var mediatype = ref.mediatype;
        var videosrc = ref.videosrc;
        var imagesrc = ref.imagesrc;
        var mediaicon = ref.mediaicon;
        if (mediatype !== 'image' && mediatype !== 'video' && mediatype !== 'icon') { return true; }
        if (mediatype === 'image' && imagesrc == null || imagesrc == "") { return true; }
        if (mediatype === 'video' && videosrc == null || videosrc == "") { return true; }
        if (mediatype === 'icon' && mediaicon == null || mediaicon == "") { return true; }
        return false
      },
      iconClass: function iconClass() {
        return this.model.mediaicon != null ? this.model.mediaicon.split(':')[1] : ''
      },
      iconContent: function iconContent() {
        return this.model.mediaicon != null ? this.model.mediaicon.split(':')[2] : ''
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
    return _c("div", { staticClass: "w-100" }, [
      _vm.model.mediatype === "video"
        ? _c("div", { staticClass: "embed-responsive embed-responsive-16by9" }, [
            _c("iframe", {
              attrs: {
                src: _vm.$helper.pathToUrl(_vm.model.videosrc),
                frameborder: "0",
                allowfullscreen: ""
              }
            })
          ])
        : _vm.model.mediatype === "icon"
        ? _c(
            "i",
            {
              staticClass: "w-100 text-center",
              class: _vm.iconClass,
              style: {
                "font-size": _vm.model.mediaiconsize + "px",
                color: _vm.model.mediaiconcolor
              }
            },
            [_vm._v("\n    " + _vm._s(_vm.iconContent) + "\n  ")]
          )
        : _vm.model.mediatype === "image"
        ? _c("img", {
            staticClass: "w-100",
            attrs: {
              src: _vm.$helper.pathToUrl(_vm.model.imagesrc),
              alt: _vm.model.mediaalttext
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.noMedia
        ? _c("h3", { staticClass: "w-100 text-center" }, [
            _vm._v("No media content")
          ])
        : _vm._e()
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
