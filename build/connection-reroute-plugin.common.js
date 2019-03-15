/*!
* rete-connection-reroute-plugin v0.2.0 
* (c) 2019  
* Released under the ISC license.
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var ConnectionPlugin = require('rete-connection-plugin');

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

//
//
//
//
//
//
//
//
//
var State = {
  PICKED: 0,
  MOVED: 1,
  DROPED: 2
};
var script = {
  props: ['pin', 'change', 'remove'],
  inject: ['editor', 'connection'],
  data: function data() {
    return {
      state: State.DROPED
    };
  },
  mounted: function mounted() {
    window.addEventListener('pointermove', this.move);
    window.addEventListener('pointerup', this.up);
  },
  destroyed: function destroyed() {
    window.removeEventListener('pointermove', this.move);
    window.removeEventListener('pointerup', this.up);
  },
  methods: {
    setPosition: function setPosition(x, y) {
      this.$emit('change', {
        x: x,
        y: y
      });
      this.$forceUpdate();
    },
    down: function down(e) {
      e.stopPropagation();
      this.state = State.PICKED;
    },
    move: function move(e) {
      if (this.state === State.DROPED) return;
      this.state = State.MOVED;
      e.preventDefault();
      var mouse = this.editor.view.area.mouse;
      this.setPosition(mouse.x, mouse.y);
    },
    up: function up(e) {
      this.state = State.DROPED;
    },
    pinup: function pinup() {
      if (this.state === State.MOVED) return;
      this.$emit('remove', this.pin);
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "pin",
    style: { left: _vm.pin.x + "px", top: _vm.pin.y + "px" },
    on: { pointerdown: _vm.down, pointerup: _vm.pinup }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-611622e4_0", { source: "\n.pin[data-v-611622e4] {\n  position: absolute;\n  display: inline;\n  width: 20px;\n  height: 20px;\n  background: #8db3d3;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/*# sourceMappingURL=Pin.vue.map */", map: {"version":3,"sources":["C:\\dev\\rete\\connection-reroute-plugin/C:\\dev\\rete\\connection-reroute-plugin/C:\\dev\\rete\\connection-reroute-plugin\\src\\Pin.vue","Pin.vue"],"names":[],"mappings":";AA+DA;EACA,mBAAA;EACA,gBAAA;EACA,YALA;EAMA,aANA;EAOA,oBAAA;EACA,mBAAA;EACA,iCAAA;CAAA;;AC7DA,mCAAmC","file":"Pin.vue","sourcesContent":[null,".pin {\n  position: absolute;\n  display: inline;\n  width: 20px;\n  height: 20px;\n  background: #8db3d3;\n  border-radius: 50%;\n  transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=Pin.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-611622e4";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "C:\\dev\\rete\\connection-reroute-plugin\\src\\Pin.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Pin = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//
var script$1 = {
  props: ['pins'],
  inject: ['editor', 'connection'],
  methods: {
    change: function change(pin, _ref) {
      var x = _ref.x,
          y = _ref.y;
      pin.x = x;
      pin.y = y;
      this.editor.view.connections.get(this.connection).update();
    },
    remove: function remove(pin) {
      this.pins.splice(this.pins.indexOf(pin), 1);
      this.editor.view.connections.get(this.connection).update();
      this.$forceUpdate();
    }
  },
  components: {
    Pin: Pin
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._l(_vm.pins, function(pin) {
      return _c("Pin", {
        key: pin.x + " " + pin.y,
        attrs: { pin: pin },
        on: {
          change: function($event) {
            _vm.change(pin, $event);
          },
          remove: function($event) {
            _vm.remove(pin);
          }
        }
      })
    })
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "C:\\dev\\rete\\connection-reroute-plugin\\src\\Pins.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Pins = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

function install(editor, params) {
  editor.on('connectionpath', function (data) {
    var connection = data.connection;

    var _data$points = _slicedToArray(data.points, 4),
        x1 = _data$points[0],
        y1 = _data$points[1],
        x2 = _data$points[2],
        y2 = _data$points[3];

    var pins = connection && connection.data.pins ? connection.data.pins : [];
    var p = [[x1, y1]].concat(_toConsumableArray(pins.map(function (p) {
      return [p.x, p.y];
    })), [[x2, y2]]);
    var d = '';

    for (var i = 1; i < p.length; i++) {
      d += ' ' + ConnectionPlugin.defaultPath([].concat(_toConsumableArray(p[i - 1]), _toConsumableArray(p[i])), 0.4);
    }

    data.d = d;
  });
  editor.on('renderconnection', function (_ref) {
    var el = _ref.el,
        connection = _ref.connection;
    var path = el.querySelector('.connection path');
    var pins = connection.data.pins || (connection.data.pins = []);
    if (!path) throw new Error('<path> not found');
    path.addEventListener('click', function () {
      var mouse = editor.view.area.mouse;

      var pin = _objectSpread({}, mouse);

      pins.push(pin);
      app.$children[0].$forceUpdate();
    });
    var vueContainer = document.createElement('div');
    el.appendChild(vueContainer);
    var app = new Vue({
      provide: {
        editor: editor,
        connection: connection
      },
      render: function render(h) {
        return h(Pins, {
          props: {
            pins: pins
          }
        });
      }
    }).$mount(vueContainer);
  });
}

var index = {
  install: install
};

exports.default = index;
//# sourceMappingURL=connection-reroute-plugin.common.js.map
