(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@vue/composition-api'), require('lodash/maxBy'), require('@jsonforms/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@vue/composition-api', 'lodash/maxBy', '@jsonforms/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JSONFormsVue2 = {}, global.VueCompositionAPI, global._.maxBy, global.JSONFormsCore));
}(this, (function (exports, compositionApi, maxBy, core) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var maxBy__default = /*#__PURE__*/_interopDefaultLegacy(maxBy);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var script$3 = compositionApi.defineComponent({
    name: 'unknown-renderer'
  });

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm._v("No applicable renderer found.")]);
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  /**
   * Constructs a props declaration for Vue components which can be used
   * for registered renderers and cells. These are typically used in combination
   * with one of the provided bindings, e.g. 'useJsonFormsControl'.
   *
   * Use the generic type parameter when using a specialized binding, e.g.
   * `rendererProps<Layout>()` in combination with `useJsonFormsLayout` or
   * `rendererProps<ControlElement>()` in combination with `useJsonFormsControl`.
   */

  var rendererProps = function rendererProps() {
    return {
      schema: {
        required: true,
        type: [Object, Boolean]
      },
      uischema: {
        required: true,
        type: Object
      },
      path: {
        required: true,
        type: String
      },
      enabled: {
        required: false,
        type: Boolean,
        "default": undefined
      },
      renderers: {
        required: false,
        type: Array,
        "default": undefined
      },
      cells: {
        required: false,
        type: Array,
        "default": undefined
      }
    };
  };
  /**
   * Constructs a props declaration for Vue components which shall be used as
   * master list items.
   */

  var masterListItemProps = function masterListItemProps() {
    return {
      index: {
        required: true,
        type: Number
      },
      selected: {
        required: true,
        type: Boolean
      },
      path: {
        required: true,
        type: String
      },
      schema: {
        required: true,
        type: [Object, Boolean]
      },
      handleSelect: {
        required: false,
        type: Function,
        "default": undefined
      },
      removeItem: {
        required: false,
        type: Function,
        "default": undefined
      }
    };
  };
  var controlInit = function controlInit() {
    return {
      data: null,
      description: null,
      errors: null,
      label: null,
      visible: null,
      enabled: null,
      id: null,
      path: null,
      required: null,
      uischema: null,
      schema: null,
      config: null,
      cells: null,
      rootSchema: null
    };
  };
  var controlWithDetailInit = function controlWithDetailInit() {
    return _objectSpread2(_objectSpread2({}, controlInit()), {}, {
      uischemas: null
    });
  };
  var arrayControlInit = function arrayControlInit() {
    return _objectSpread2(_objectSpread2({}, controlWithDetailInit()), {}, {
      childErrors: null,
      renderers: null,
      cells: null
    });
  };
  var arrayLayoutInit = function arrayLayoutInit() {
    return _objectSpread2(_objectSpread2({}, controlWithDetailInit()), {}, {
      minItems: null,
      renderers: null,
      cells: null
    });
  };
  var enumControlInit = function enumControlInit() {
    return _objectSpread2(_objectSpread2({}, controlInit()), {}, {
      options: null
    });
  };
  var combinatorControlInit = function combinatorControlInit() {
    return _objectSpread2(_objectSpread2({}, controlWithDetailInit()), {}, {
      indexOfFittingSchema: null
    });
  };
  var layoutInit = function layoutInit() {
    return {
      renderers: null,
      cells: null,
      visible: null,
      enabled: null,
      path: null,
      data: null,
      uischema: null,
      schema: null,
      direction: null
    };
  };
  var rendererInit = function rendererInit() {
    return {
      renderers: null,
      cells: null,
      schema: null,
      rootSchema: null,
      uischema: null,
      path: null
    };
  };
  var masterListItemInit = function masterListItemInit() {
    return {
      index: null,
      selected: null,
      path: null,
      schema: null,
      childLabel: null
    };
  };
  var cellInit = function cellInit() {
    return {
      data: null,
      visible: null,
      enabled: null,
      id: null,
      path: null,
      errors: null,
      isValid: null,
      schema: null,
      uischema: null,
      config: null,
      rootSchema: null,
      renderers: null,
      cells: null
    };
  };
  var enumCellInit = function enumCellInit() {
    return _objectSpread2(_objectSpread2({}, cellInit()), {}, {
      options: null
    });
  };
  function useControl(props, stateInit, stateMap, dispatchMap) {
    var jsonforms = compositionApi.inject('jsonforms');
    var dispatch = compositionApi.inject('dispatch');

    if (!jsonforms || !dispatch) {
      throw "'jsonforms' or 'dispatch' couldn't be injected. Are you within JSON Forms?";
    }

    var control = compositionApi.ref(stateInit());

    var updateControl = function updateControl(jsonforms, props) {
      var _control$value$id;

      Object.assign(control.value, stateMap({
        jsonforms: jsonforms
      }, _objectSpread2(_objectSpread2({}, props), {}, {
        id: (_control$value$id = control.value.id) !== null && _control$value$id !== void 0 ? _control$value$id : undefined
      })));
    };

    updateControl(jsonforms, props);
    compositionApi.watch(function () {
      return [].concat(_toConsumableArray(Object.values(jsonforms)), [props]);
    }, function () {
      updateControl(jsonforms, props);
    });
    var dispatchMethods = dispatchMap === null || dispatchMap === void 0 ? void 0 : dispatchMap(dispatch);
    compositionApi.onBeforeMount(function () {
      if (control.value.uischema.scope) {
        control.value.id = core.createId(control.value.uischema.scope);
      }
    });
    compositionApi.onUnmounted(function () {
      if (control.value.id) {
        core.removeId(control.value.id);
      }
    });
    return _objectSpread2({
      control: control
    }, dispatchMethods);
  }
  /**
   * Provides generic bindings for 'Control' elements.
   * Should be used when no specialized bindings are appropriate.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsControl = function useJsonFormsControl(props) {
    return useControl(props, controlInit, core.mapStateToControlProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which can provide a 'detail',
   * for example array and object renderers.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsControlWithDetail = function useJsonFormsControlWithDetail(props) {
    return useControl(props, controlWithDetailInit, core.mapStateToControlWithDetailProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'enum' schema elements.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsEnumControl = function useJsonFormsEnumControl(props) {
    return useControl(props, enumControlInit, core.mapStateToEnumControlProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to manually constructed
   * 'oneOf' enums. These are used to enhance enums with label support.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsOneOfEnumControl = function useJsonFormsOneOfEnumControl(props) {
    return useControl(props, enumControlInit, core.mapStateToOneOfEnumControlProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'array' schema elements.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsArrayControl = function useJsonFormsArrayControl(props) {
    return useControl(props, arrayControlInit, core.mapStateToArrayControlProps, core.mapDispatchToArrayControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'allOf' schema elements.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsAllOfControl = function useJsonFormsAllOfControl(props) {
    return useControl(props, combinatorControlInit, core.mapStateToAllOfProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'anyOf' schema elements.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsAnyOfControl = function useJsonFormsAnyOfControl(props) {
    return useControl(props, combinatorControlInit, core.mapStateToAnyOfProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'oneOf' schema elements.
   *
   * Access bindings via the provided reactive `control` object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsOneOfControl = function useJsonFormsOneOfControl(props) {
    return useControl(props, combinatorControlInit, core.mapStateToOneOfProps, core.mapDispatchToControlProps);
  };
  /**
   * Provides bindings for 'Layout' elements, e.g. VerticalLayout, HorizontalLayout, Group.
   *
   * Access bindings via the provided reactive 'layout' object.
   */

  var useJsonFormsLayout = function useJsonFormsLayout(props) {
    var _useControl = useControl(props, layoutInit, core.mapStateToLayoutProps),
        control = _useControl.control,
        other = _objectWithoutProperties(_useControl, ["control"]);

    return _objectSpread2({
      layout: control
    }, other);
  };
  /**
   * Provides bindings for 'Control' elements which resolve to 'array' elements which
   * shall be rendered as a layout instead of a control.
   *
   * Access bindings via the provided reactive 'layout' object.
   */

  var useJsonFormsArrayLayout = function useJsonFormsArrayLayout(props) {
    var _useControl2 = useControl(props, arrayLayoutInit, core.mapStateToArrayLayoutProps),
        control = _useControl2.control,
        other = _objectWithoutProperties(_useControl2, ["control"]);

    return _objectSpread2({
      layout: control
    }, other);
  };
  /**
   * Provides bindings for list elements of a master-list-detail control setup.
   * The element using this binding is not supposed to be registered as an own renderer
   * but used in a more specialized control.
   *
   * Access bindings via the provided reactive 'item' object.
   */

  var useJsonFormsMasterListItem = function useJsonFormsMasterListItem(props) {
    var _useControl3 = useControl(props, masterListItemInit, core.mapStateToMasterListItemProps),
        control = _useControl3.control,
        other = _objectWithoutProperties(_useControl3, ["control"]);

    return _objectSpread2({
      item: control
    }, other);
  };
  /**
   * Provides specialized bindings which can be used for any renderer.
   * Useful for meta elements like dispatchers.
   *
   * Access bindings via the provided reactive 'renderer' object.
   * Offers a 'refResolver' method to trigger json-schema-ref-resolver.
   */

  var useJsonFormsRenderer = function useJsonFormsRenderer(props) {
    console.log('useJsonFormsRenderer:', props)
    var jsonforms = compositionApi.inject('jsonforms');
    var dispatch = compositionApi.inject('dispatch');

    if (!jsonforms || !dispatch) {
      throw "'jsonforms' or 'dispatch' couldn't be injected. Are you within JSON Forms?";
    }

    var renderer = compositionApi.ref(rendererInit());
    var resolver = {
      refResolver: null
    };

    var updateRenderer = function updateRenderer(jsonforms, props) {
      var _mapStateToJsonFormsR = core.mapStateToJsonFormsRendererProps({
        jsonforms: jsonforms
      }, props),
          refResolver = _mapStateToJsonFormsR.refResolver,
          other = _objectWithoutProperties(_mapStateToJsonFormsR, ["refResolver"]);

      Object.assign(renderer.value, other);
      resolver.refResolver = refResolver;
    };

    updateRenderer(jsonforms, props);
    compositionApi.watch(function () {
      return [].concat(_toConsumableArray(Object.values(jsonforms)), [props]);
    }, function () {
      updateRenderer(jsonforms, props);
    });

    var refResolver = function refResolver(schema) {
      return resolver.refResolver(schema);
    };

    return {
      renderer: renderer,
      refResolver: refResolver
    };
  };
  /**
   * Provides bindings for cell elements. Cells are meant to show simple inputs,
   * for example without error validation, within a larger structure like tables.
   *
   * Access bindings via the provided reactive 'cell' object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsCell = function useJsonFormsCell(props) {
    var _useControl4 = useControl(props, cellInit, core.mapStateToCellProps, core.mapDispatchToControlProps),
        control = _useControl4.control,
        other = _objectWithoutProperties(_useControl4, ["control"]);

    return _objectSpread2({
      cell: control
    }, other);
  };
  /**
   * Provides bindings for enum cell elements. Cells are meant to show simple inputs,
   * for example without error validation, within a larger structure like tables.
   *
   * Access bindings via the provided reactive 'cell' object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsEnumCell = function useJsonFormsEnumCell(props) {
    var _useControl5 = useControl(props, enumCellInit, core.defaultMapStateToEnumCellProps, core.mapDispatchToControlProps),
        control = _useControl5.control,
        other = _objectWithoutProperties(_useControl5, ["control"]);

    return _objectSpread2({
      cell: control
    }, other);
  };
  /**
   * Provides bindings for a cell dispatcher. Cells are meant to show simple inputs,
   * for example without error validation, within a larger structure like tables.
   *
   * Access bindings via the provided reactive 'cell' object.
   * Dispatch changes via the provided `handleChange` method.
   */

  var useJsonFormsDispatchCell = function useJsonFormsDispatchCell(props) {
    var _useControl6 = useControl(props, cellInit, core.mapStateToDispatchCellProps, core.mapDispatchToControlProps),
        control = _useControl6.control,
        other = _objectWithoutProperties(_useControl6, ["control"]);

    return _objectSpread2({
      cell: control
    }, other);
  };

  var script$2 = compositionApi.defineComponent({
    name: 'dispatch-renderer',
    props: _objectSpread2({}, rendererProps()),
    setup: function setup(props) {
      return useJsonFormsRenderer(props);
    },
    computed: {
      determinedRenderer: function determinedRenderer() {
        var _this = this;

        var renderer = maxBy__default['default'](this.renderer.renderers, function (r) {
          return r.tester(_this.renderer.uischema, _this.renderer.schema);
        });

        if (renderer === undefined || renderer.tester(this.renderer.uischema, this.renderer.schema) === -1) {
          return __vue_component__$3;
        } else {
          return renderer.renderer;
        }
      }
    }
  });

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.determinedRenderer, _vm._b({
      tag: "component"
    }, 'component', _vm.renderer, false));
  };

  var __vue_staticRenderFns__$2 = [];
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  var script$1 = compositionApi.defineComponent({
    name: 'dispatch-cell',
    props: _objectSpread2({}, rendererProps()),
    setup: function setup(props) {
      return useJsonFormsDispatchCell(props);
    },
    computed: {
      determinedCell: function determinedCell() {
        var _this = this;

        var cell = maxBy__default['default'](this.cell.cells, function (r) {
          return r.tester(_this.cell.uischema, _this.cell.schema);
        });

        if (cell === undefined || cell.tester(this.cell.uischema, this.cell.schema) === -1) {
          return __vue_component__$3;
        } else {
          return cell.cell;
        }
      }
    }
  });

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.determinedCell, _vm._b({
      tag: "component"
    }, 'component', _vm.cell, false));
  };

  var __vue_staticRenderFns__$1 = [];
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  var isObject = function isObject(elem) {
    return elem && _typeof(elem) === 'object';
  };

  var script = compositionApi.defineComponent({
    name: 'json-forms',
    components: {
      DispatchRenderer: __vue_component__$2
    },
    emits: ['change'],
    props: {
      data: {
        required: true,
        type: [String, Number, Boolean, Array, Object]
      },
      schema: {
        required: false,
        type: [Object, Boolean],
        "default": undefined
      },
      uischema: {
        required: false,
        type: Object,
        "default": undefined
      },
      renderers: {
        required: true,
        type: Array
      },
      cells: {
        required: false,
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      config: {
        required: false,
        type: Object,
        "default": undefined
      },
      readonly: {
        required: false,
        type: Boolean,
        "default": false
      },
      uischemas: {
        required: false,
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      validationMode: {
        required: false,
        type: String,
        "default": 'ValidateAndShow'
      },
      ajv: {
        required: false,
        type: Object,
        "default": undefined
      },
      refParserOptions: {
        required: false,
        type: Object,
        "default": undefined
      }
    },
    data: function data() {
      var _this$schema,
          _this$uischema,
          _this = this;

      var generatorData = isObject(this.data) ? this.data : {};
      var schemaToUse = (_this$schema = this.schema) !== null && _this$schema !== void 0 ? _this$schema : core.Generate.jsonSchema(generatorData);
      var uischemaToUse = (_this$uischema = this.uischema) !== null && _this$uischema !== void 0 ? _this$uischema : core.Generate.uiSchema(schemaToUse);

      var initCore = function initCore() {
        var initialCore = {
          data: _this.data,
          schema: schemaToUse,
          uischema: uischemaToUse
        };
        var core$1 = core.coreReducer(initialCore, core.Actions.init(_this.data, schemaToUse, uischemaToUse, {
          validationMode: _this.validationMode,
          ajv: _this.ajv,
          refParserOptions: _this.refParserOptions
        }));
        return core$1;
      };

      return {
        schemaToUse: schemaToUse,
        uischemaToUse: uischemaToUse,
        jsonforms: {
          core: initCore(),
          config: core.configReducer(undefined, core.Actions.setConfig(this.config)),
          renderers: this.renderers,
          cells: this.cells,
          uischemas: this.uischemas,
          readonly: this.readonly
        }
      };
    },
    watch: {
      schema: function schema(newSchema) {
        var generatorData = isObject(this.data) ? this.data : {};
        this.schemaToUse = newSchema !== null && newSchema !== void 0 ? newSchema : core.Generate.jsonSchema(generatorData);

        if (!this.uischema) {
          this.uischemaToUse = core.Generate.uiSchema(this.schemaToUse);
        }
      },
      uischema: function uischema(newUischema) {
        this.uischemaToUse = newUischema !== null && newUischema !== void 0 ? newUischema : core.Generate.uiSchema(this.schemaToUse);
      },
      renderers: function renderers(newRenderers) {
        this.jsonforms.renderers = newRenderers;
      },
      cells: function cells(newCells) {
        this.jsonforms.cells = newCells;
      },
      uischemas: function uischemas(newUischemas) {
        this.jsonforms.uischemas = newUischemas;
      },
      config: {
        handler: function handler(newConfig) {
          this.jsonforms.config = core.configReducer(undefined, core.Actions.setConfig(newConfig));
        },
        deep: true
      },
      readonly: function readonly(newReadonly) {
        this.jsonforms.readonly = newReadonly;
      },
      coreDataToUpdate: function coreDataToUpdate() {
        this.jsonforms.core = core.coreReducer(this.jsonforms.core, core.Actions.updateCore(this.data, this.schemaToUse, this.uischemaToUse, {
          validationMode: this.validationMode,
          ajv: this.ajv,
          refParserOptions: this.refParserOptions
        }));
      },
      eventToEmit: function eventToEmit(newEvent) {
        this.$emit('change', newEvent);
      }
    },
    computed: {
      coreDataToUpdate: function coreDataToUpdate() {
        return [this.data, this.schemaToUse, this.uischemaToUse, this.validationMode, this.ajv, this.refParserOptions];
      },
      eventToEmit: function eventToEmit() {
        return {
          data: this.jsonforms.core.data,
          errors: this.jsonforms.core.errors
        };
      }
    },
    mounted: function mounted() {
      // emit an inital change so clients can react to error validation and default data insertion
      this.$emit('change', {
        data: this.jsonforms.core.data,
        errors: this.jsonforms.core.errors
      });
    },
    methods: {
      dispatch: function dispatch(action) {
        this.jsonforms.core = core.coreReducer(this.jsonforms.core, action);
      }
    },
    provide: function provide() {
      return {
        jsonforms: this.jsonforms,
        dispatch: this.dispatch
      };
    }
  });

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('dispatch-renderer', {
      attrs: {
        "schema": _vm.jsonforms.core.schema,
        "uischema": _vm.jsonforms.core.uischema,
        "path": ''
      }
    });
  };

  var __vue_staticRenderFns__ = [];
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

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  exports.DispatchCell = __vue_component__$1;
  exports.DispatchRenderer = __vue_component__$2;
  exports.JsonForms = __vue_component__;
  exports.UnknownRenderer = __vue_component__$3;
  exports.arrayControlInit = arrayControlInit;
  exports.arrayLayoutInit = arrayLayoutInit;
  exports.cellInit = cellInit;
  exports.combinatorControlInit = combinatorControlInit;
  exports.controlInit = controlInit;
  exports.controlWithDetailInit = controlWithDetailInit;
  exports.enumCellInit = enumCellInit;
  exports.enumControlInit = enumControlInit;
  exports.layoutInit = layoutInit;
  exports.masterListItemInit = masterListItemInit;
  exports.masterListItemProps = masterListItemProps;
  exports.rendererInit = rendererInit;
  exports.rendererProps = rendererProps;
  exports.useControl = useControl;
  exports.useJsonFormsAllOfControl = useJsonFormsAllOfControl;
  exports.useJsonFormsAnyOfControl = useJsonFormsAnyOfControl;
  exports.useJsonFormsArrayControl = useJsonFormsArrayControl;
  exports.useJsonFormsArrayLayout = useJsonFormsArrayLayout;
  exports.useJsonFormsCell = useJsonFormsCell;
  exports.useJsonFormsControl = useJsonFormsControl;
  exports.useJsonFormsControlWithDetail = useJsonFormsControlWithDetail;
  exports.useJsonFormsDispatchCell = useJsonFormsDispatchCell;
  exports.useJsonFormsEnumCell = useJsonFormsEnumCell;
  exports.useJsonFormsEnumControl = useJsonFormsEnumControl;
  exports.useJsonFormsLayout = useJsonFormsLayout;
  exports.useJsonFormsMasterListItem = useJsonFormsMasterListItem;
  exports.useJsonFormsOneOfControl = useJsonFormsOneOfControl;
  exports.useJsonFormsOneOfEnumControl = useJsonFormsOneOfEnumControl;
  exports.useJsonFormsRenderer = useJsonFormsRenderer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
