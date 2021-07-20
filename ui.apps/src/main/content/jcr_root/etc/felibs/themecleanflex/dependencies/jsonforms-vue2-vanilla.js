(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? factory(
				exports,
				require("@jsonforms/core"),
				require("@vue/composition-api"),
				require("@jsonforms/vue2"),
				require("lodash/merge"),
				require("lodash/cloneDeep"),
				require("lodash/mergeWith")
		  )
		: typeof define === "function" && define.amd
		? define([
				"exports",
				"@jsonforms/core",
				"@vue/composition-api",
				"@jsonforms/vue2",
				"lodash/merge",
				"lodash/cloneDeep",
				"lodash/mergeWith",
		  ], factory)
		: ((global =
				typeof globalThis !== "undefined"
					? globalThis
					: global || self),
		  factory(
				(global.JSONFormsVue2Vanilla = {}),
				global.JSONFormsCore,
				global.VueCompositionAPI,
				global.JSONFormsVue2,
				global._.merge,
				global._.cloneDeep,
				global._.mergeWith
		  ));
})(
	this,
	function (
		exports,
		core,
		compositionApi,
		vue2,
		merge,
		cloneDeep,
		mergeWith
	) {
		"use strict";

		function _interopDefaultLegacy(e) {
			return e && typeof e === "object" && "default" in e
				? e
				: { default: e };
		}

		var merge__default = /*#__PURE__*/ _interopDefaultLegacy(merge);
		var cloneDeep__default = /*#__PURE__*/ _interopDefaultLegacy(cloneDeep);
		var mergeWith__default = /*#__PURE__*/ _interopDefaultLegacy(mergeWith);

		function _defineProperty(obj, key, value) {
			if (key in obj) {
				Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true,
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
				if (enumerableOnly)
					symbols = symbols.filter(function (sym) {
						return Object.getOwnPropertyDescriptor(
							object,
							sym
						).enumerable;
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
					Object.defineProperties(
						target,
						Object.getOwnPropertyDescriptors(source)
					);
				} else {
					ownKeys(Object(source)).forEach(function (key) {
						Object.defineProperty(
							target,
							key,
							Object.getOwnPropertyDescriptor(source, key)
						);
					});
				}
			}

			return target;
		}

		function _taggedTemplateLiteral(strings, raw) {
			if (!raw) {
				raw = strings.slice(0);
			}

			return Object.freeze(
				Object.defineProperties(strings, {
					raw: {
						value: Object.freeze(raw),
					},
				})
			);
		}

		function _toConsumableArray(arr) {
			return (
				_arrayWithoutHoles(arr) ||
				_iterableToArray(arr) ||
				_unsupportedIterableToArray(arr) ||
				_nonIterableSpread()
			);
		}

		function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) return _arrayLikeToArray(arr);
		}

		function _iterableToArray(iter) {
			if (
				typeof Symbol !== "undefined" &&
				Symbol.iterator in Object(iter)
			)
				return Array.from(iter);
		}

		function _unsupportedIterableToArray(o, minLen) {
			if (!o) return;
			if (typeof o === "string") return _arrayLikeToArray(o, minLen);
			var n = Object.prototype.toString.call(o).slice(8, -1);
			if (n === "Object" && o.constructor) n = o.constructor.name;
			if (n === "Map" || n === "Set") return Array.from(o);
			if (
				n === "Arguments" ||
				/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
			)
				return _arrayLikeToArray(o, minLen);
		}

		function _arrayLikeToArray(arr, len) {
			if (len == null || len > arr.length) len = arr.length;

			for (var i = 0, arr2 = new Array(len); i < len; i++)
				arr2[i] = arr[i];

			return arr2;
		}

		function _nonIterableSpread() {
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
			);
		}

		var optionsInit = function optionsInit() {
			return {
				showUnfocusedDescription: null,
				hideRequiredAsterisk: null,
				focus: null,
				step: null,
			};
		};

		var defaultStyles = {
			control: {
				root: "control",
				wrapper: "wrapper",
				label: "label",
				description: "description",
				error: "error",
				textarea: "text-area",
				select: "select",
				option: "option",
			},
			verticalLayout: {
				root: "vertical-layout",
				item: "vertical-layout-item",
			},
			horizontalLayout: {
				root: "horizontal-layout",
				item: "horizontal-layout-item",
			},
			group: {
				root: "group",
				label: "group-label",
				item: "group-item",
			},
			arrayList: {
				root: "array-list",
				legend: "array-list-legend",
				addButton: "array-list-add",
				label: "array-list-label",
				itemWrapper: "array-list-item-wrapper",
				noData: "array-list-no-data",
				item: "array-list-item",
				itemToolbar: "array-list-item-toolbar",
				itemLabel: "array-list-item-label",
				itemContent: "array-list-item-content",
				itemExpanded: "expanded",
				itemMoveUp: "array-list-item-move-up",
				itemMoveDown: "array-list-item-move-down",
				itemDelete: "array-list-item-delete",
			},
			label: {
				root: "label-element",
			},
		};

		var createEmptyStyles = function createEmptyStyles() {
			return {
				control: {},
				verticalLayout: {},
				horizontalLayout: {},
				group: {},
				arrayList: {},
				label: {},
			};
		};

		var useStyles = function useStyles(element) {
			var _element$options, _element$options2;

			var userStyles = compositionApi.inject("styles", defaultStyles);

			if (
				!(
					element !== null &&
					element !== void 0 &&
					(_element$options = element.options) !== null &&
					_element$options !== void 0 &&
					_element$options.styles
				)
			) {
				return userStyles;
			}

			var styles = createEmptyStyles();

			if (userStyles) {
				merge__default["default"](styles, userStyles);
			} else {
				merge__default["default"](styles, defaultStyles);
			}

			if (
				element !== null &&
				element !== void 0 &&
				(_element$options2 = element.options) !== null &&
				_element$options2 !== void 0 &&
				_element$options2.styles
			) {
				merge__default["default"](styles, element.options.styles);
			}

			return styles;
		};

		var classes = function classes(strings) {
			for (
				var _len = arguments.length,
					variables = new Array(_len > 1 ? _len - 1 : 0),
					_key = 1;
				_key < _len;
				_key++
			) {
				variables[_key - 1] = arguments[_key];
			}

			return strings
				.reduce(function (acc, curr, index) {
					return ""
						.concat(acc)
						.concat(curr)
						.concat(variables[index] || "");
				}, "")
				.trim();
		};
		/**
		 * Helper function to merge two styles definitions. The contained classes will be combined, not overwritten.
		 *
		 * Example usage:
		 * ```ts
		 * const myStyles = mergeStyles(defaultStyles, { control: { root: 'mycontrol' } });
		 * ```
		 */

		var mergeStyles = function mergeStyles(stylesA, stylesB) {
			var styles = cloneDeep__default["default"](stylesA);
			mergeWith__default["default"](
				styles,
				stylesB,
				function (aValue, bValue) {
					if (
						typeof aValue === "string" &&
						typeof bValue === "string"
					) {
						return "".concat(aValue, " ").concat(bValue);
					}

					return undefined;
				}
			);
			return styles;
		};

		var updateOptions = function updateOptions(
			appliedOptionsRef,
			controlRef
		) {
			appliedOptionsRef.value = merge__default["default"](
				{},
				cloneDeep__default["default"](controlRef.value.config),
				cloneDeep__default["default"](controlRef.value.uischema.options)
			);
		};
		/**
		 * Adds styles, isFocused, appliedOptions and onChange
		 */

		var useVanillaControl = function useVanillaControl(input) {
			var adaptTarget =
				arguments.length > 1 && arguments[1] !== undefined
					? arguments[1]
					: function (v) {
							return v.value;
					  };
			var appliedOptions = compositionApi.ref(optionsInit());
			updateOptions(appliedOptions, input.control);
			compositionApi.watch(
				function () {
					return [
						input.control.value.config,
						input.control.value.uischema,
					];
				},
				function () {
					updateOptions(appliedOptions, input.control);
				}
			);
			var isFocused = compositionApi.ref(false);

			var onChange = function onChange(event) {
				input.handleChange(
					input.control.value.path,
					adaptTarget(event.target)
				);
			};

			return _objectSpread2(
				_objectSpread2({}, input),
				{},
				{
					styles: useStyles(input.control.value.uischema),
					isFocused: isFocused,
					appliedOptions: appliedOptions,
					onChange: onChange,
				}
			);
		};
		/**
		 * Adds styles and appliedOptions
		 */

		var useVanillaLayout = function useVanillaLayout(input) {
			var appliedOptions = compositionApi.ref(optionsInit());
			updateOptions(appliedOptions, input.layout);
			compositionApi.watch(
				function () {
					return [
						input.layout.value.config,
						input.layout.value.uischema,
					];
				},
				function () {
					updateOptions(appliedOptions, input.layout);
				}
			);
			return _objectSpread2(
				_objectSpread2({}, input),
				{},
				{
					styles: useStyles(input.layout.value.uischema),
					appliedOptions: appliedOptions,
				}
			);
		};

		var updateUiSchema = function updateUiSchema(uiSchemaRef, controlRef) {
			uiSchemaRef.value = core.findUISchema(
				controlRef.value.uischemas,
				controlRef.value.schema,
				controlRef.value.uischema.scope,
				controlRef.value.path
			);
		};
		/**
		 * Adds styles, appliedOptions and childUiSchema
		 */

		var useVanillaArrayControl = function useVanillaArrayControl(input) {
			var appliedOptions = compositionApi.ref(optionsInit());
			updateOptions(appliedOptions, input.control);
			compositionApi.watch(
				function () {
					return [
						input.control.value.config,
						input.control.value.uischema,
					];
				},
				function () {
					updateOptions(appliedOptions, input.control);
				}
			);
			var childUiSchema = compositionApi.ref();
			updateUiSchema(childUiSchema, input.control);
			compositionApi.watch(
				function () {
					return [
						input.control.value.uischemas,
						input.control.value.schema,
						input.control.value.uischema.scope,
						input.control.value.path,
					];
				},
				function () {
					updateUiSchema(childUiSchema, input.control);
				}
			);

			var childLabelForIndex = function childLabelForIndex(index) {
				var _input$control$value$, _input$control$value$2;

				var childLabelProp =
					(_input$control$value$ =
						(_input$control$value$2 =
							input.control.value.uischema.options) === null ||
						_input$control$value$2 === void 0
							? void 0
							: _input$control$value$2.childLabelProp) !== null &&
					_input$control$value$ !== void 0
						? _input$control$value$
						: core.getFirstPrimitiveProp(
								input.control.value.schema
						  );

				if (!childLabelProp) {
					return "".concat(index);
				}

				var labelValue = core.Resolve.data(
					input.control.value.data,
					core.composePaths("".concat(index), childLabelProp)
				);

				if (
					labelValue === undefined ||
					labelValue === null ||
					labelValue === NaN
				) {
					return "";
				}

				return "".concat(labelValue);
			};

			return _objectSpread2(
				_objectSpread2({}, input),
				{},
				{
					styles: useStyles(input.control.value.uischema),
					appliedOptions: appliedOptions,
					childUiSchema: childUiSchema,
					childLabelForIndex: childLabelForIndex,
				}
			);
		};

		var _templateObject, _templateObject2;
		var listItem = compositionApi.defineComponent({
			name: "array-list-element",
			props: {
				initiallyExpanded: {
					required: false,
					type: Boolean,
					default: false,
				},
				label: {
					required: false,
					type: String,
					default: "",
				},
				moveUpEnabled: {
					required: false,
					type: Boolean,
					default: true,
				},
				moveDownEnabled: {
					required: false,
					type: Boolean,
					default: true,
				},
				moveUp: {
					required: false,
					type: Function,
					default: undefined,
				},
				moveDown: {
					required: false,
					type: Function,
					default: undefined,
				},
				delete: {
					required: false,
					type: Function,
					default: undefined,
				},
				styles: {
					required: true,
					type: Object,
				},
			},
			data: function data() {
				return {
					expanded: this.initiallyExpanded,
				};
			},
			computed: {
				contentClasses: function contentClasses() {
					return classes(
						_templateObject ||
							(_templateObject = _taggedTemplateLiteral([
								"",
								" ",
								"",
							])),
						this.styles.arrayList.itemContent,
						this.expanded && this.styles.arrayList.itemExpanded
					);
				},
				toolbarClasses: function toolbarClasses() {
					return classes(
						_templateObject2 ||
							(_templateObject2 = _taggedTemplateLiteral([
								"",
								" ",
								"",
							])),
						this.styles.arrayList.itemToolbar,
						this.expanded && this.styles.arrayList.itemExpanded
					);
				},
			},
			methods: {
				expandClicked: function expandClicked() {
					this.expanded = !this.expanded;
				},
				moveUpClicked: function moveUpClicked(event) {
					var _this$moveUp;

					event.stopPropagation();
					(_this$moveUp = this.moveUp) === null ||
					_this$moveUp === void 0
						? void 0
						: _this$moveUp.call(this);
				},
				moveDownClicked: function moveDownClicked(event) {
					var _this$moveDown;

					event.stopPropagation();
					(_this$moveDown = this.moveDown) === null ||
					_this$moveDown === void 0
						? void 0
						: _this$moveDown.call(this);
				},
				deleteClicked: function deleteClicked(event) {
					var _this$delete;

					event.stopPropagation();
					(_this$delete = this["delete"]) === null ||
					_this$delete === void 0
						? void 0
						: _this$delete.call(this);
				},
			},
		});

		function normalizeComponent(
			template,
			style,
			script,
			scopeId,
			isFunctionalTemplate,
			moduleIdentifier /* server only */,
			shadowMode,
			createInjector,
			createInjectorSSR,
			createInjectorShadow
		) {
			if (typeof shadowMode !== "boolean") {
				createInjectorSSR = createInjector;
				createInjector = shadowMode;
				shadowMode = false;
			}
			// Vue.extend constructor export interop.
			const options =
				typeof script === "function" ? script.options : script;
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
						(this.parent &&
							this.parent.$vnode &&
							this.parent.$vnode.ssrContext); // functional
					// 2.2 with runInNewContext: true
					if (
						!context &&
						typeof __VUE_SSR_CONTEXT__ !== "undefined"
					) {
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
			} else if (style) {
				hook = shadowMode
					? function (context) {
							style.call(
								this,
								createInjectorShadow(
									context,
									this.$root.$options.shadowRoot
								)
							);
					  }
					: function (context) {
							style.call(this, createInjector(context));
					  };
			}
			if (hook) {
				if (options.functional) {
					// register for functional component in vue file
					const originalRender = options.render;
					options.render = function renderWithStyleInjection(
						h,
						context
					) {
						hook.call(context);
						return originalRender(h, context);
					};
				} else {
					// inject component registration as beforeCreate hook
					const existing = options.beforeCreate;
					options.beforeCreate = existing
						? [].concat(existing, hook)
						: [hook];
				}
			}
			return script;
		}

		/* script */
		var __vue_script__$f = listItem;
		/* template */

		var __vue_render__$f = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"div",
				{
					class: _vm.styles.arrayList.item,
				},
				[
					_c(
						"div",
						{
							class: _vm.toolbarClasses,
							on: {
								click: _vm.expandClicked,
							},
						},
						[
							_c(
								"div",
								{
									class: _vm.styles.arrayList.itemLabel,
								},
								[_vm._v(_vm._s(_vm.label))]
							),
							_vm._v(" "),
							_c(
								"button",
								{
									class: _vm.styles.arrayList.itemMoveUp,
									attrs: {
										disabled: !_vm.moveUpEnabled,
									},
									on: {
										click: _vm.moveUpClicked,
									},
								},
								[_vm._v("\n      ↑\n    ")]
							),
							_vm._v(" "),
							_c(
								"button",
								{
									class: _vm.styles.arrayList.itemMoveDown,
									attrs: {
										disabled: !_vm.moveDownEnabled,
									},
									on: {
										click: _vm.moveDownClicked,
									},
								},
								[_vm._v("\n      ↓\n    ")]
							),
							_vm._v(" "),
							_c(
								"button",
								{
									class: _vm.styles.arrayList.itemDelete,
									on: {
										click: _vm.deleteClicked,
									},
								},
								[_vm._v("\n      🗙\n    ")]
							),
						]
					),
					_vm._v(" "),
					_c(
						"div",
						{
							class: _vm.contentClasses,
						},
						[_vm._t("default")],
						2
					),
				]
			);
		};

		var __vue_staticRenderFns__$f = [];
		/* style */

		var __vue_inject_styles__$f = undefined;
		/* scoped */

		var __vue_scope_id__$f = undefined;
		/* module identifier */

		var __vue_module_identifier__$f = undefined;
		/* functional template */

		var __vue_is_functional_template__$f = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$f = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$f,
				staticRenderFns: __vue_staticRenderFns__$f,
			},
			__vue_inject_styles__$f,
			__vue_script__$f,
			__vue_scope_id__$f,
			__vue_is_functional_template__$f,
			__vue_module_identifier__$f,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$a = compositionApi.defineComponent({
			name: "array-list-renderer",
			components: {
				ArrayListElement: __vue_component__$f,
				DispatchRenderer: vue2.DispatchRenderer,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaArrayControl(
					vue2.useJsonFormsArrayControl(props)
				);
			},
			computed: {
				noData: function noData() {
					return !this.control.data || this.control.data.length === 0;
				},
			},
			methods: {
				composePaths: core.composePaths,
				createDefaultValue: core.createDefaultValue,
				addButtonClick: function addButtonClick() {
					this.addItem(
						this.control.path,
						core.createDefaultValue(this.control.schema)
					)();
				},
			},
		});
		var entry$d = {
			renderer: controlRenderer$a,
			tester: core.rankWith(2, core.schemaTypeIs("array")),
		};

		/* script */
		var __vue_script__$e = controlRenderer$a;
		/* template */

		var __vue_render__$e = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _vm.control.visible
				? _c(
						"fieldset",
						{
							class: _vm.styles.arrayList.root,
						},
						[
							_c(
								"legend",
								{
									class: _vm.styles.arrayList.legend,
								},
								[
									_c(
										"button",
										{
											class:
												_vm.styles.arrayList.addButton,
											on: {
												click: _vm.addButtonClick,
											},
										},
										[_vm._v("\n      +\n    ")]
									),
									_vm._v(" "),
									_c(
										"label",
										{
											class: _vm.styles.arrayList.label,
										},
										[
											_vm._v(
												"\n      " +
													_vm._s(_vm.control.label) +
													"\n    "
											),
										]
									),
								]
							),
							_vm._v(" "),
							_vm._l(_vm.control.data, function (element, index) {
								return _c(
									"div",
									{
										key: _vm.control.path + "-" + index,
										class: _vm.styles.arrayList.itemWrapper,
									},
									[
										_c(
											"array-list-element",
											{
												attrs: {
													moveUp: _vm.moveUp(
														_vm.control.path,
														index
													),
													moveUpEnabled: index > 0,
													moveDown: _vm.moveDown(
														_vm.control.path,
														index
													),
													moveDownEnabled:
														index <
														_vm.control.data
															.length -
															1,
													delete: _vm.removeItems(
														_vm.control.path,
														[index]
													),
													label: _vm.childLabelForIndex(
														index
													),
													styles: _vm.styles,
												},
											},
											[
												_c("dispatch-renderer", {
													attrs: {
														schema:
															_vm.control.schema,
														uischema:
															_vm.childUiSchema,
														path: _vm.composePaths(
															_vm.control.path,
															"" + index
														),
														enabled:
															_vm.control.enabled,
														renderers:
															_vm.control
																.renderers,
														cells:
															_vm.control.cells,
													},
												}),
											],
											1
										),
									],
									1
								);
							}),
							_vm._v(" "),
							_vm.noData
								? _c(
										"div",
										{
											class: _vm.styles.arrayList.noData,
										},
										[_vm._v("\n    No data\n  ")]
								  )
								: _vm._e(),
						],
						2
				  )
				: _vm._e();
		};

		var __vue_staticRenderFns__$e = [];
		/* style */

		var __vue_inject_styles__$e = undefined;
		/* scoped */

		var __vue_scope_id__$e = undefined;
		/* module identifier */

		var __vue_module_identifier__$e = undefined;
		/* functional template */

		var __vue_is_functional_template__$e = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$e = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$e,
				staticRenderFns: __vue_staticRenderFns__$e,
			},
			__vue_inject_styles__$e,
			__vue_script__$e,
			__vue_scope_id__$e,
			__vue_is_functional_template__$e,
			__vue_module_identifier__$e,
			false,
			undefined,
			undefined,
			undefined
		);

		var arrayRenderers = [entry$d];

		var script = compositionApi.defineComponent({
			name: "control-wrapper",
			props: {
				id: {
					required: true,
					type: String,
				},
				description: {
					required: false,
					type: String,
					default: undefined,
				},
				errors: {
					required: false,
					type: String,
					default: undefined,
				},
				label: {
					required: false,
					type: String,
					default: undefined,
				},
				appliedOptions: {
					required: false,
					type: Object,
					default: undefined,
				},
				visible: {
					required: false,
					type: Boolean,
					default: true,
				},
				required: {
					required: false,
					type: Boolean,
					default: false,
				},
				isFocused: {
					required: false,
					type: Boolean,
					default: false,
				},
				styles: {
					required: true,
					type: Object,
				},
			},
			computed: {
				showDescription: function showDescription() {
					var _this$appliedOptions;

					return !core.isDescriptionHidden(
						this.visible,
						this.description,
						this.isFocused,
						!!(
							(_this$appliedOptions = this.appliedOptions) !==
								null &&
							_this$appliedOptions !== void 0 &&
							_this$appliedOptions.showUnfocusedDescription
						)
					);
				},
				computedLabel: function computedLabel() {
					var _this$appliedOptions2;

					return core.computeLabel(
						this.label,
						this.required,
						!!(
							(_this$appliedOptions2 = this.appliedOptions) !==
								null &&
							_this$appliedOptions2 !== void 0 &&
							_this$appliedOptions2.hideRequiredAsterisk
						)
					);
				},
			},
		});

		/* script */
		var __vue_script__$d = script;
		/* template */

		var __vue_render__$d = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _vm.visible
				? _c(
						"div",
						{
							class: _vm.styles.control.root,
							attrs: {
								id: _vm.id,
							},
						},
						[
							_c(
								"label",
								{
									class: _vm.styles.control.label,
									attrs: {
										for: _vm.id + "-input",
									},
								},
								[
									_vm._v(
										"\n    " +
											_vm._s(_vm.computedLabel) +
											"\n  "
									),
								]
							),
							_vm._v(" "),
							_c(
								"div",
								{
									class: _vm.styles.control.wrapper,
								},
								[_vm._t("default")],
								2
							),
							_vm._v(" "),
							_c(
								"div",
								{
									class: _vm.errors
										? _vm.styles.control.error
										: _vm.styles.control.description,
								},
								[
									_vm._v(
										"\n    " +
											_vm._s(
												_vm.errors
													? _vm.errors
													: _vm.showDescription
													? _vm.description
													: null
											) +
											"\n  "
									),
								]
							),
						]
				  )
				: _vm._e();
		};

		var __vue_staticRenderFns__$d = [];
		/* style */

		var __vue_inject_styles__$d = undefined;
		/* scoped */

		var __vue_scope_id__$d = undefined;
		/* module identifier */

		var __vue_module_identifier__$d = undefined;
		/* functional template */

		var __vue_is_functional_template__$d = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$d = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$d,
				staticRenderFns: __vue_staticRenderFns__$d,
			},
			__vue_inject_styles__$d,
			__vue_script__$d,
			__vue_scope_id__$d,
			__vue_is_functional_template__$d,
			__vue_module_identifier__$d,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$9 = compositionApi.defineComponent({
			name: "string-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(vue2.useJsonFormsControl(props));
			},
		});
		var entry$c = {
			renderer: controlRenderer$9,
			tester: core.rankWith(1, core.isStringControl),
		};

		/* script */
		var __vue_script__$c = controlRenderer$9;
		/* template */

		var __vue_render__$c = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$c = [];
		/* style */

		var __vue_inject_styles__$c = undefined;
		/* scoped */

		var __vue_scope_id__$c = undefined;
		/* module identifier */

		var __vue_module_identifier__$c = undefined;
		/* functional template */

		var __vue_is_functional_template__$c = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$c = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$c,
				staticRenderFns: __vue_staticRenderFns__$c,
			},
			__vue_inject_styles__$c,
			__vue_script__$c,
			__vue_scope_id__$c,
			__vue_is_functional_template__$c,
			__vue_module_identifier__$c,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$8 = compositionApi.defineComponent({
			name: "multi-string-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(vue2.useJsonFormsControl(props));
			},
		});
		var entry$b = {
			renderer: controlRenderer$8,
			tester: core.rankWith(
				2,
				core.and(core.isStringControl, core.isMultiLineControl)
			),
		};

		/* script */
		var __vue_script__$b = controlRenderer$8;
		/* template */

		var __vue_render__$b = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("textarea", {
						class: _vm.styles.control.textarea,
						attrs: {
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$b = [];
		/* style */

		var __vue_inject_styles__$b = undefined;
		/* scoped */

		var __vue_scope_id__$b = undefined;
		/* module identifier */

		var __vue_module_identifier__$b = undefined;
		/* functional template */

		var __vue_is_functional_template__$b = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$b = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$b,
				staticRenderFns: __vue_staticRenderFns__$b,
			},
			__vue_inject_styles__$b,
			__vue_script__$b,
			__vue_scope_id__$b,
			__vue_is_functional_template__$b,
			__vue_module_identifier__$b,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$7 = compositionApi.defineComponent({
			name: "number-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(
					vue2.useJsonFormsControl(props),
					function (target) {
						return Number(target.value);
					}
				);
			},
			computed: {
				step: function step() {
					var _options$step;

					var options = this.appliedOptions;
					return (_options$step = options.step) !== null &&
						_options$step !== void 0
						? _options$step
						: 0.1;
				},
			},
		});
		var entry$a = {
			renderer: controlRenderer$7,
			tester: core.rankWith(1, core.isNumberControl),
		};

		/* script */
		var __vue_script__$a = controlRenderer$7;
		/* template */

		var __vue_render__$a = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "number",
							step: _vm.step,
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$a = [];
		/* style */

		var __vue_inject_styles__$a = undefined;
		/* scoped */

		var __vue_scope_id__$a = undefined;
		/* module identifier */

		var __vue_module_identifier__$a = undefined;
		/* functional template */

		var __vue_is_functional_template__$a = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$a = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$a,
				staticRenderFns: __vue_staticRenderFns__$a,
			},
			__vue_inject_styles__$a,
			__vue_script__$a,
			__vue_scope_id__$a,
			__vue_is_functional_template__$a,
			__vue_module_identifier__$a,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$6 = compositionApi.defineComponent({
			name: "integer-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(
					vue2.useJsonFormsControl(props),
					function (target) {
						return parseInt(target.value, 10);
					}
				);
			},
		});
		var entry$9 = {
			renderer: controlRenderer$6,
			tester: core.rankWith(1, core.isIntegerControl),
		};

		/* script */
		var __vue_script__$9 = controlRenderer$6;
		/* template */

		var __vue_render__$9 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "number",
							step: 1,
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$9 = [];
		/* style */

		var __vue_inject_styles__$9 = undefined;
		/* scoped */

		var __vue_scope_id__$9 = undefined;
		/* module identifier */

		var __vue_module_identifier__$9 = undefined;
		/* functional template */

		var __vue_is_functional_template__$9 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$9 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$9,
				staticRenderFns: __vue_staticRenderFns__$9,
			},
			__vue_inject_styles__$9,
			__vue_script__$9,
			__vue_scope_id__$9,
			__vue_is_functional_template__$9,
			__vue_module_identifier__$9,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$5 = compositionApi.defineComponent({
			name: "enum-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(vue2.useJsonFormsEnumControl(props));
			},
		});
		var entry$8 = {
			renderer: controlRenderer$5,
			tester: core.rankWith(2, core.isEnumControl),
		};

		/* script */
		var __vue_script__$8 = controlRenderer$5;
		/* template */

		var __vue_render__$8 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c(
						"select",
						{
							class: _vm.styles.control.select,
							attrs: {
								id: _vm.control.id + "-select",
								disabled: !_vm.control.enabled,
								autofocus: _vm.appliedOptions.focus,
							},
							domProps: {
								value: _vm.control.data,
							},
							on: {
								change: _vm.onChange,
								focus: function focus($event) {
									_vm.isFocused = true;
								},
								blur: function blur($event) {
									_vm.isFocused = false;
								},
							},
						},
						[
							_c("option", {
								key: "empty",
								class: _vm.styles.control.option,
								attrs: {
									value: "",
								},
							}),
							_vm._v(" "),
							_vm._l(
								_vm.control.options,
								function (optionElement) {
									return _c("option", {
										key: optionElement.value,
										class: _vm.styles.control.option,
										attrs: {
											label: optionElement.label,
										},
										domProps: {
											value: optionElement.value,
										},
									});
								}
							),
						],
						2
					),
				]
			);
		};

		var __vue_staticRenderFns__$8 = [];
		/* style */

		var __vue_inject_styles__$8 = undefined;
		/* scoped */

		var __vue_scope_id__$8 = undefined;
		/* module identifier */

		var __vue_module_identifier__$8 = undefined;
		/* functional template */

		var __vue_is_functional_template__$8 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$8 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$8,
				staticRenderFns: __vue_staticRenderFns__$8,
			},
			__vue_inject_styles__$8,
			__vue_script__$8,
			__vue_scope_id__$8,
			__vue_is_functional_template__$8,
			__vue_module_identifier__$8,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$4 = compositionApi.defineComponent({
			name: "enum-oneof-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(
					vue2.useJsonFormsOneOfEnumControl(props)
				);
			},
		});
		var entry$7 = {
			renderer: controlRenderer$4,
			tester: core.rankWith(2, core.isOneOfEnumControl),
		};

		/* script */
		var __vue_script__$7 = controlRenderer$4;
		/* template */

		var __vue_render__$7 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c(
						"select",
						{
							class: _vm.styles.control.select,
							attrs: {
								id: _vm.control.id + "-input",
								disabled: !_vm.control.enabled,
								autofocus: _vm.appliedOptions.focus,
							},
							domProps: {
								value: _vm.control.data,
							},
							on: {
								change: _vm.onChange,
								focus: function focus($event) {
									_vm.isFocused = true;
								},
								blur: function blur($event) {
									_vm.isFocused = false;
								},
							},
						},
						[
							_c("option", {
								key: "empty",
								class: _vm.styles.control.option,
								attrs: {
									value: "",
								},
							}),
							_vm._v(" "),
							_vm._l(
								_vm.control.options,
								function (optionElement) {
									return _c("option", {
										key: optionElement.value,
										class: _vm.styles.control.option,
										attrs: {
											label: optionElement.label,
										},
										domProps: {
											value: optionElement.value,
										},
									});
								}
							),
						],
						2
					),
				]
			);
		};

		var __vue_staticRenderFns__$7 = [];
		/* style */

		var __vue_inject_styles__$7 = undefined;
		/* scoped */

		var __vue_scope_id__$7 = undefined;
		/* module identifier */

		var __vue_module_identifier__$7 = undefined;
		/* functional template */

		var __vue_is_functional_template__$7 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$7 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$7,
				staticRenderFns: __vue_staticRenderFns__$7,
			},
			__vue_inject_styles__$7,
			__vue_script__$7,
			__vue_scope_id__$7,
			__vue_is_functional_template__$7,
			__vue_module_identifier__$7,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$3 = compositionApi.defineComponent({
			name: "date-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(vue2.useJsonFormsControl(props));
			},
		});
		var entry$6 = {
			renderer: controlRenderer$3,
			tester: core.rankWith(2, core.isDateControl),
		};

		/* script */
		var __vue_script__$6 = controlRenderer$3;
		/* template */

		var __vue_render__$6 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "date",
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$6 = [];
		/* style */

		var __vue_inject_styles__$6 = undefined;
		/* scoped */

		var __vue_scope_id__$6 = undefined;
		/* module identifier */

		var __vue_module_identifier__$6 = undefined;
		/* functional template */

		var __vue_is_functional_template__$6 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$6 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$6,
				staticRenderFns: __vue_staticRenderFns__$6,
			},
			__vue_inject_styles__$6,
			__vue_script__$6,
			__vue_scope_id__$6,
			__vue_is_functional_template__$6,
			__vue_module_identifier__$6,
			false,
			undefined,
			undefined,
			undefined
		);

		var toISOString = function toISOString(inputDateTime) {
			return inputDateTime === "" ? "" : inputDateTime + ":00.000Z";
		};

		var controlRenderer$2 = compositionApi.defineComponent({
			name: "datetime-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(
					vue2.useJsonFormsControl(props),
					function (target) {
						return toISOString(target.value);
					}
				);
			},
			computed: {
				dataTime: function dataTime() {
					var _this$control$data;

					return ((_this$control$data = this.control.data) !== null &&
					_this$control$data !== void 0
						? _this$control$data
						: ""
					).substr(0, 16);
				},
			},
		});
		var entry$5 = {
			renderer: controlRenderer$2,
			tester: core.rankWith(2, core.isDateTimeControl),
		};

		/* script */
		var __vue_script__$5 = controlRenderer$2;
		/* template */

		var __vue_render__$5 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "datetime-local",
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.dataTime,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$5 = [];
		/* style */

		var __vue_inject_styles__$5 = undefined;
		/* scoped */

		var __vue_scope_id__$5 = undefined;
		/* module identifier */

		var __vue_module_identifier__$5 = undefined;
		/* functional template */

		var __vue_is_functional_template__$5 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$5 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$5,
				staticRenderFns: __vue_staticRenderFns__$5,
			},
			__vue_inject_styles__$5,
			__vue_script__$5,
			__vue_scope_id__$5,
			__vue_is_functional_template__$5,
			__vue_module_identifier__$5,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer$1 = compositionApi.defineComponent({
			name: "time-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(vue2.useJsonFormsControl(props));
			},
		});
		var entry$4 = {
			renderer: controlRenderer$1,
			tester: core.rankWith(2, core.isTimeControl),
		};

		/* script */
		var __vue_script__$4 = controlRenderer$1;
		/* template */

		var __vue_render__$4 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "time",
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							value: _vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
		};

		var __vue_staticRenderFns__$4 = [];
		/* style */

		var __vue_inject_styles__$4 = undefined;
		/* scoped */

		var __vue_scope_id__$4 = undefined;
		/* module identifier */

		var __vue_module_identifier__$4 = undefined;
		/* functional template */

		var __vue_is_functional_template__$4 = false;
		/* style inject */

		/* style inject SSR */

		/* style inject shadow dom */

		var __vue_component__$4 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$4,
				staticRenderFns: __vue_staticRenderFns__$4,
			},
			__vue_inject_styles__$4,
			__vue_script__$4,
			__vue_scope_id__$4,
			__vue_is_functional_template__$4,
			__vue_module_identifier__$4,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderer = compositionApi.defineComponent({
			name: "boolean-control-renderer",
			components: {
				ControlWrapper: __vue_component__$d,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaControl(
					vue2.useJsonFormsControl(props),
					function (target) {
						return target.checked;
					}
				);
			},
		});
		var entry$3 = {
			renderer: controlRenderer,
			tester: core.rankWith(1, core.isBooleanControl),
		};

		/* script */
		var __vue_script__$3 = controlRenderer;
		/* template */

		var __vue_render__$3 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _c(
				"control-wrapper",
				_vm._b(
					{
						attrs: {
							styles: _vm.styles,
							isFocused: _vm.isFocused,
							appliedOptions: _vm.appliedOptions,
						},
					},
					"control-wrapper",
					_vm.control,
					false
				),
				[
					_c("input", {
						class: _vm.styles.control.input,
						attrs: {
							type: "checkbox",
							id: _vm.control.id + "-input",
							disabled: !_vm.control.enabled,
							autofocus: _vm.appliedOptions.focus,
						},
						domProps: {
							checked: !!_vm.control.data,
						},
						on: {
							change: _vm.onChange,
							focus: function focus($event) {
								_vm.isFocused = true;
							},
							blur: function blur($event) {
								_vm.isFocused = false;
							},
						},
					}),
				]
			);
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

		var __vue_component__$3 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$3,
				staticRenderFns: __vue_staticRenderFns__$3,
			},
			__vue_inject_styles__$3,
			__vue_script__$3,
			__vue_scope_id__$3,
			__vue_is_functional_template__$3,
			__vue_module_identifier__$3,
			false,
			undefined,
			undefined,
			undefined
		);

		var controlRenderers = [
			entry$c,
			entry$b,
			entry$a,
			entry$9,
			entry$8,
			entry$7,
			entry$6,
			entry$5,
			entry$4,
			entry$3,
		];

		var layoutRenderer$1 = compositionApi.defineComponent({
			name: "layout-renderer",
			components: {
				DispatchRenderer: vue2.DispatchRenderer,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaLayout(vue2.useJsonFormsLayout(props));
			},
			computed: {
				layoutClassObject: function layoutClassObject() {
					return this.layout.direction === "row"
						? this.styles.horizontalLayout
						: this.styles.verticalLayout;
				},
			},
		});
		var entry$2 = {
			renderer: layoutRenderer$1,
			tester: core.rankWith(1, core.isLayout),
		};

		/* script */
		var __vue_script__$2 = layoutRenderer$1;
		/* template */

		var __vue_render__$2 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _vm.layout.visible
				? _c(
						"div",
						{
							class: _vm.layoutClassObject.root,
						},
						_vm._l(
							_vm.layout.uischema.elements,
							function (element, index) {
								return _c(
									"div",
									{
										key: _vm.layout.path + "-" + index,
										class: _vm.layoutClassObject.item,
									},
									[
										_c("dispatch-renderer", {
											attrs: {
												schema: _vm.layout.schema,
												uischema: element,
												path: _vm.layout.path,
												enabled: _vm.layout.enabled,
												renderers: _vm.layout.renderers,
												cells: _vm.layout.cells,
											},
										}),
									],
									1
								);
							}
						),
						0
				  )
				: _vm._e();
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

		var __vue_component__$2 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$2,
				staticRenderFns: __vue_staticRenderFns__$2,
			},
			__vue_inject_styles__$2,
			__vue_script__$2,
			__vue_scope_id__$2,
			__vue_is_functional_template__$2,
			__vue_module_identifier__$2,
			false,
			undefined,
			undefined,
			undefined
		);

		var layoutRenderer = compositionApi.defineComponent({
			name: "group-renderer",
			components: {
				DispatchRenderer: vue2.DispatchRenderer,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				return useVanillaLayout(vue2.useJsonFormsLayout(props));
			},
		});
		var entry$1 = {
			renderer: layoutRenderer,
			tester: core.rankWith(
				2,
				core.and(core.isLayout, core.uiTypeIs("Group"))
			),
		};

		/* script */
		var __vue_script__$1 = layoutRenderer;
		/* template */

		var __vue_render__$1 = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _vm.layout.visible
				? _c(
						"fieldset",
						{
							class: _vm.styles.group.root,
						},
						[
							_vm.layout.uischema.label
								? _c(
										"legend",
										{
											class: _vm.styles.group.label,
										},
										[
											_vm._v(
												"\n    " +
													_vm._s(
														_vm.layout.uischema
															.label
													) +
													"\n  "
											),
										]
								  )
								: _vm._e(),
							_vm._v(" "),
							_vm._l(
								_vm.layout.uischema.elements,
								function (element, index) {
									return _c(
										"div",
										{
											key: _vm.layout.path + "-" + index,
											class: _vm.styles.group.item,
										},
										[
											_c("dispatch-renderer", {
												attrs: {
													schema: _vm.layout.schema,
													uischema: element,
													path: _vm.layout.path,
													enabled: _vm.layout.enabled,
													renderers:
														_vm.layout.renderers,
													cells: _vm.layout.cells,
												},
											}),
										],
										1
									);
								}
							),
						],
						2
				  )
				: _vm._e();
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

		var __vue_component__$1 = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__$1,
				staticRenderFns: __vue_staticRenderFns__$1,
			},
			__vue_inject_styles__$1,
			__vue_script__$1,
			__vue_scope_id__$1,
			__vue_is_functional_template__$1,
			__vue_module_identifier__$1,
			false,
			undefined,
			undefined,
			undefined
		);

		var layoutRenderers = [entry$2, entry$1];

		var labelRenderer = compositionApi.defineComponent({
			name: "label-renderer",
			components: {
				DispatchRenderer: vue2.DispatchRenderer,
			},
			props: _objectSpread2({}, vue2.rendererProps()),
			setup: function setup(props) {
				// reuse layout bindings for label
				return useVanillaLayout(vue2.useJsonFormsLayout(props));
			},
		});
		var entry = {
			renderer: labelRenderer,
			tester: core.rankWith(1, core.uiTypeIs("Label")),
		};

		/* script */
		var __vue_script__ = labelRenderer;
		/* template */

		var __vue_render__ = function __vue_render__() {
			var _vm = this;

			var _h = _vm.$createElement;

			var _c = _vm._self._c || _h;

			return _vm.layout.visible
				? _c(
						"label",
						{
							class: _vm.styles.label,
						},
						[
							_vm._v(
								"\n  " +
									_vm._s(this.layout.uischema.text) +
									"\n"
							),
						]
				  )
				: _vm._e();
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

		var __vue_component__ = /*#__PURE__*/ normalizeComponent(
			{
				render: __vue_render__,
				staticRenderFns: __vue_staticRenderFns__,
			},
			__vue_inject_styles__,
			__vue_script__,
			__vue_scope_id__,
			__vue_is_functional_template__,
			__vue_module_identifier__,
			false,
			undefined,
			undefined,
			undefined
		);

		var labelRenderers = [entry];

		var vanillaRenderers = [].concat(
			_toConsumableArray(controlRenderers),
			_toConsumableArray(layoutRenderers),
			_toConsumableArray(arrayRenderers),
			_toConsumableArray(labelRenderers)
		);

		exports.ArrayListRenderer = __vue_component__$e;
		exports.BooleanControlRenderer = __vue_component__$3;
		exports.ControlWrapper = __vue_component__$d;
		exports.DateControlRenderer = __vue_component__$6;
		exports.DateTimeControlRenderer = __vue_component__$5;
		exports.EnumControlRenderer = __vue_component__$8;
		exports.GroupRenderer = __vue_component__$1;
		exports.IntegerControlRenderer = __vue_component__$9;
		exports.LabelRenderer = __vue_component__;
		exports.LayoutRenderer = __vue_component__$2;
		exports.MultiStringControlRenderer = __vue_component__$b;
		exports.NumberControlRenderer = __vue_component__$a;
		exports.StringControlRenderer = __vue_component__$c;
		exports.TimeControlRenderer = __vue_component__$4;
		exports.arrayRenderers = arrayRenderers;
		exports.classes = classes;
		exports.controlRenderers = controlRenderers;
		exports.defaultStyles = defaultStyles;
		exports.labelRenderers = labelRenderers;
		exports.layoutRenderers = layoutRenderers;
		exports.mergeStyles = mergeStyles;
		exports.oneOfEnumControlRenderer = __vue_component__$7;
		exports.optionsInit = optionsInit;
		exports.useStyles = useStyles;
		exports.useVanillaArrayControl = useVanillaArrayControl;
		exports.useVanillaControl = useVanillaControl;
		exports.useVanillaLayout = useVanillaLayout;
		exports.vanillaRenderers = vanillaRenderers;

		Object.defineProperty(exports, "__esModule", { value: true });
	}
);
