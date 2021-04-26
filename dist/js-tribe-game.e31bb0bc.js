// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/knight.png":[function(require,module,exports) {
module.exports = "/knight.b4e9b365.png";
},{}],"assets/images/orc.png":[function(require,module,exports) {
module.exports = "/orc.efbde037.png";
},{}],"assets/images/elf.png":[function(require,module,exports) {
module.exports = "/elf.e93b3a29.png";
},{}],"Components/Characters/character/Character.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knight = _interopRequireDefault(require("../../../assets/images/knight.png"));

var _orc = _interopRequireDefault(require("../../../assets/images/orc.png"));

var _elf = _interopRequireDefault(require("../../../assets/images/elf.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Character = /*#__PURE__*/function () {
  function Character() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "player";
    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var defence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Character);

    this.name = name;
    this.position = {
      x: 0,
      y: null
    };
    this.attack = attack;
    this.defence = defence;
    this.speed = speed;
    this.race = null;
    this.color = this.getRaceColor(this.race);
    console.log("Character Created!");
  }

  _createClass(Character, [{
    key: "getRaceColor",
    value: function getRaceColor(race) {
      switch (race) {
        case "human":
          return "blue";

        case "orc":
          return "red";

        case "elf":
          return "green";

        default:
          return "yellow";
      }
    }
  }, {
    key: "getRaceImage",
    value: function getRaceImage(race) {
      switch (race) {
        case "human":
          return _knight.default;

        case "orc":
          return _orc.default;

        case "elf":
          return _elf.default;

        default:
          return null;
      }
    }
  }, {
    key: "show",
    value: function show() {
      console.log("Attack: ".concat(this.attack, ", Defence: ").concat(this.defence, ", Speed: ").concat(this.speed));
    }
  }, {
    key: "draw",
    value: function draw(ctx, positionY) {
      this.position.y = positionY; // this.position.y = (this.position.y * this.defence - this.defence) * 10;

      this.position.y = this.position.y * 80 + 20;
      ctx.fillStyle = this.color; // ctx.fillRect(
      //     this.position.x,
      //     this.position.y,
      //     this.attack * 3,
      //     this.defence * 3
      // );

      ctx.font = "20px Arial";
      ctx.fillText(this.name, this.position.x, this.position.y);
      var img = new Image();
      img.src = this.getRaceImage(this.race);
      ctx.drawImage(img, this.position.x, this.position.y, 50, 50); // img.onload = function(x = this.position.x) {
      //     ctx.drawImage(img, x, 0, 100, 100);
      // };
    }
  }, {
    key: "move",
    value: function move() {
      this.position.x += this.speed;
    }
  }, {
    key: "resetPosition",
    value: function resetPosition() {
      this.position.x = 0;
    }
  }]);

  return Character;
}();

var _default = Character;
exports.default = _default;
},{"../../../assets/images/knight.png":"assets/images/knight.png","../../../assets/images/orc.png":"assets/images/orc.png","../../../assets/images/elf.png":"assets/images/elf.png"}],"Components/Characters/human/Human.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character2 = _interopRequireDefault(require("../character/Character"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Human = /*#__PURE__*/function (_Character) {
  _inherits(Human, _Character);

  var _super = _createSuper(Human);

  function Human(name) {
    var _this;

    _classCallCheck(this, Human);

    _this = _super.call(this);
    _this.name = name;
    _this.attack += 5;
    _this.defence += 2;
    _this.speed += 2;
    _this.race = "human";
    _this.color = _this.getRaceColor(_this.race);
    console.log("Human was created");
    return _this;
  }

  return Human;
}(_Character2.default);

var _default = Human;
exports.default = _default;
},{"../character/Character":"Components/Characters/character/Character.js"}],"Components/Characters/orc/Orc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character2 = _interopRequireDefault(require("../character/Character"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Orc = /*#__PURE__*/function (_Character) {
  _inherits(Orc, _Character);

  var _super = _createSuper(Orc);

  function Orc(name) {
    var _this;

    _classCallCheck(this, Orc);

    _this = _super.call(this);
    _this.name = name;
    _this.attack += 3;
    _this.defence += 4;
    _this.speed += 1;
    _this.race = "orc";
    _this.color = _this.getRaceColor(_this.race);
    console.log("Orc was created!");
    return _this;
  }

  return Orc;
}(_Character2.default);

var _default = Orc;
exports.default = _default;
},{"../character/Character":"Components/Characters/character/Character.js"}],"Components/Characters/elf/Elf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character2 = _interopRequireDefault(require("../character/Character"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Elf = /*#__PURE__*/function (_Character) {
  _inherits(Elf, _Character);

  var _super = _createSuper(Elf);

  function Elf(name) {
    var _this;

    _classCallCheck(this, Elf);

    _this = _super.call(this);
    _this.name = name;
    _this.attack += 1;
    _this.ability += 1;
    _this.defence += 1;
    _this.speed += 4;
    _this.race = "elf";
    _this.color = _this.getRaceColor(_this.race);
    console.log("Elf was created");
    return _this;
  }

  return Elf;
}(_Character2.default);

var _default = Elf;
exports.default = _default;
},{"../character/Character":"Components/Characters/character/Character.js"}],"Components/Characters/characters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Character = _interopRequireDefault(require("./character/Character"));

var _Human = _interopRequireDefault(require("./human/Human"));

var _Orc = _interopRequireDefault(require("./orc/Orc"));

var _Elf = _interopRequireDefault(require("./elf/Elf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Characters = {
  character: _Character.default,
  human: _Human.default,
  orc: _Orc.default,
  elf: _Elf.default
};
var _default = Characters;
exports.default = _default;
},{"./character/Character":"Components/Characters/character/Character.js","./human/Human":"Components/Characters/human/Human.js","./orc/Orc":"Components/Characters/orc/Orc.js","./elf/Elf":"Components/Characters/elf/Elf.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _characters = _interopRequireDefault(require("./Components/Characters/characters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var players = ["Paul", "Goruk"];
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 500;
var intervalRun = false;

var createCanvas = function createCanvas() {
  var canvas = document.querySelector("#can");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT; // document.body.appendChild(canvas);
};

var clearCanvas = function clearCanvas() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}; // EXECUTE
// Create the Elements


createCanvas();
var app = document.getElementById("app");
app.style.textAlign = "center";
var btnStartRace = document.querySelector("#btnStartRace");
btnStartRace.style.display = "block";
btnStartRace.style.margin = "10px";
var btnStopRace = document.querySelector("#btnStopRace");
btnStopRace.style.display = "block";
btnStopRace.style.margin = "10px";
var btnResetRace = document.querySelector("#btnResetRace");
btnResetRace.style.display = "block";
btnResetRace.style.margin = "10px";

var createPlayer = function createPlayer(name, race) {
  switch (race) {
    case "human":
      return new _characters.default.human(name);

    case "orc":
      return new _characters.default.orc(name);

    case "elf":
      return new _characters.default.elf(name);

    default:
      return null;
  }
};

var playerNameInput = document.querySelector("#playerName");
var playerRaceInput = document.querySelector("#playerRace");
var createPlayerBtn = document.querySelector("#createPlayerBtn");
createPlayerBtn.addEventListener("click", function () {
  var player = createPlayer(playerNameInput.value, playerRaceInput.value);
  players.push(player);
});
var deletePlayersBtn = document.querySelector("#deletePlayersBtn");
deletePlayersBtn.addEventListener("click", function () {
  players = (_readOnlyError("players"), []);
  drawPlayers();
});
btnStartRace.addEventListener("click", function () {
  intervalRun = true;
  var myInterval = setInterval(function () {
    if (intervalRun) {
      drawPlayers();
      players.forEach(function (player) {
        player.move();
      });
    }
  }, 100);
});
btnStopRace.addEventListener("click", function () {
  intervalRun = false;
  drawPlayers();
});
btnResetRace.addEventListener("click", function () {
  intervalRun = false;
  Paul.resetPosition();
  Goruk.resetPosition();
  Raya.resetPosition();
  drawPlayers();
}); // Create Canvas

var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d"); // Create Players

players[0] = new _characters.default.human("Paul");
players[1] = new _characters.default.orc("Goruk");
players[2] = new _characters.default.elf("Raya"); // The Loop

var myInterval = setInterval(function () {
  drawPlayers();
}, 100);

var drawPlayers = function drawPlayers() {
  if (players.length === 0) {
    clearCanvas();
  } else {
    clearCanvas();
    players.forEach(function (player, key) {
      player.show();
      player.draw(ctx, key);
    });
  }
};
},{"./Components/Characters/characters":"Components/Characters/characters.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60171" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-tribe-game.e31bb0bc.js.map