/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graphql/connectionDefinitions.ts":
/*!**********************************************!*\
  !*** ./src/graphql/connectionDefinitions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forwardConnectionArgs": () => (/* binding */ forwardConnectionArgs),
/* harmony export */   "backwardConnectionArgs": () => (/* binding */ backwardConnectionArgs),
/* harmony export */   "connectionArgs": () => (/* binding */ connectionArgs),
/* harmony export */   "connectionDefinitions": () => (/* binding */ connectionDefinitions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var forwardConnectionArgs = {
  after: {
    type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLString
  },
  first: {
    type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt
  }
};
var backwardConnectionArgs = {
  before: {
    type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLString
  },
  last: {
    type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt
  }
};
var connectionArgs = _objectSpread(_objectSpread({}, forwardConnectionArgs), backwardConnectionArgs);
var pageInfoType = new graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLObjectType({
  name: "PageInfoExtended",
  description: "Information about pagination in a connection.",
  fields: function fields() {
    return {
      hasNextPage: {
        type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        description: "When paginating forwards, are there more items?"
      },
      hasPreviousPage: {
        type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        description: "When paginating backwards, are there more items?"
      },
      startCursor: {
        type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        description: "When paginating backwards, the cursor to continue."
      },
      endCursor: {
        type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        description: "When paginating forwards, the cursor to continue."
      }
    };
  }
});

function resolveMaybeThunk(thingOrThunk) {
  return typeof thingOrThunk === "function" ? thingOrThunk() : thingOrThunk;
}

function connectionDefinitions(config) {
  var nodeType = config.nodeType,
      resolveCursor = config.resolveCursor,
      resolveNode = config.resolveNode;
  var name = config.name || nodeType.name;
  var edgeFields = config.edgeFields || {};
  var connectionFields = config.connectionFields || {};
  var edgeType = new graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLObjectType({
    name: "".concat(name, "Edge"),
    description: "An edge in a connection.",
    fields: function fields() {
      return _objectSpread({
        node: {
          type: nodeType,
          resolve: resolveNode,
          description: "The item at the end of the edge"
        },
        cursor: {
          type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
          resolve: resolveCursor,
          description: "A cursor for use in pagination"
        }
      }, resolveMaybeThunk(edgeFields));
    }
  });
  var connectionType = new graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLObjectType({
    name: "".concat(name, "Connection"),
    description: "A connection to a list of items.",
    fields: function fields() {
      return _objectSpread({
        count: {
          type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt,
          description: "Number of items in this connection"
        },
        totalCount: {
          type: graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt,
          resolve: function resolve(connection) {
            return connection.count;
          },
          description: "A count of the total number of objects in this connection, ignoring pagination.\n  This allows a client to fetch the first five objects by passing \"5\" as the\n  argument to \"first\", then fetch the total count so it could display \"5 of 83\",\n  for example."
        },
        startCursorOffset: {
          type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt),
          description: "Offset from start"
        },
        endCursorOffset: {
          type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLInt),
          description: "Offset till end"
        },
        pageInfo: {
          type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)(pageInfoType),
          description: "Information to aid in pagination."
        },
        edges: {
          type: (0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull)((0,graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLList)(edgeType)),
          description: "A list of edges."
        }
      }, resolveMaybeThunk(connectionFields));
    }
  });
  return {
    edgeType: edgeType,
    connectionType: connectionType
  };
}

/***/ }),

/***/ "./src/graphql/createLoader.ts":
/*!*************************************!*\
  !*** ./src/graphql/createLoader.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLoader": () => (/* binding */ createLoader)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @entria/graphql-mongoose-loader */ "@entria/graphql-mongoose-loader");
/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dataloader */ "dataloader");
/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dataloader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @entria/graphql-mongo-helpers */ "@entria/graphql-mongo-helpers");
/* harmony import */ var _entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _withConnectionCursor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withConnectionCursor */ "./src/graphql/withConnectionCursor.ts");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// eslint-disable-next-line


 // import { validateContextUser } from './validateContextUser';



var defaultViewerCanSee = function defaultViewerCanSee(context, data) {
  return data;
};

var createLoader = function createLoader(_ref) {
  var model = _ref.model,
      _ref$viewerCanSee = _ref.viewerCanSee,
      viewerCanSee = _ref$viewerCanSee === void 0 ? defaultViewerCanSee : _ref$viewerCanSee,
      loaderName = _ref.loaderName,
      _ref$filterMapping = _ref.filterMapping,
      filterMapping = _ref$filterMapping === void 0 ? {} : _ref$filterMapping;

  var Loader = function Loader(data) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Loader);

    // TODO - improve this - get only model paths
    // eslint-disable-next-line
    Object.keys(data).map(function (key) {
      _this[key] = data[key];
    });
    this.id = data.id || data._id;
  };

  var nameIt = function nameIt(name, cls) {
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, name, /*#__PURE__*/function (_cls) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(_class, _cls);

      var _super = _createSuper(_class);

      function _class() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, _class);

        return _super.apply(this, arguments);
      }

      return _class;
    }(cls))[name];
  };

  var Wrapper = nameIt(model.collection.collectionName, Loader);

  var getLoader = function getLoader() {
    return new (dataloader__WEBPACK_IMPORTED_MODULE_8___default())(function (ids) {
      return (0,_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_7__.mongooseLoader)(model, ids);
    });
  };

  var load = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(context, id) {
      var _data, filteredData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", null);

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return context.dataloaders[loaderName].load(id.toString());

            case 5:
              _data = _context.sent;

              if (_data) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", null);

            case 8:
              _context.next = 10;
              return viewerCanSee(context, _data);

            case 10:
              filteredData = _context.sent;
              return _context.abrupt("return", filteredData ? new Wrapper(filteredData) : null);

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              console.log("err", _context.t0);
              return _context.abrupt("return", null);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));

    return function load(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var clearCache = function clearCache(_ref3, id) {
    var dataloaders = _ref3.dataloaders;
    return dataloaders[loaderName].clear(id.toString());
  }; // disable validate to simpify workshop
  // const loadAll = validateContextUser(


  var loadAll = (0,_withConnectionCursor__WEBPACK_IMPORTED_MODULE_10__.withConnectionCursor)(model, load, function (context, args) {
    var builtMongoConditions = (0,_entria_graphql_mongo_helpers__WEBPACK_IMPORTED_MODULE_9__.buildMongoConditionsFromFilters)(context, args.filters, filterMapping);

    var conditions = _objectSpread({}, builtMongoConditions.conditions);

    var sort = {
      createdAt: -1
    };
    return {
      conditions: conditions,
      sort: sort
    };
  });
  return {
    Wrapper: Wrapper,
    getLoader: getLoader,
    clearCache: clearCache,
    load: load,
    loadAll: loadAll
  };
};

/***/ }),

/***/ "./src/graphql/debugConsole.ts":
/*!*************************************!*\
  !*** ./src/graphql/debugConsole.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugConsole": () => (/* binding */ debugConsole)
/* harmony export */ });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
 // import prettyFormat from 'pretty-format';

var debugConsole = function debugConsole(obj) {
  // eslint-disable-next-line
  console.log(util__WEBPACK_IMPORTED_MODULE_0___default().inspect(obj, {
    showHidden: false,
    depth: null,
    colors: true,
    showProxy: false
  })); // eslint-disable-next-line
  // console.log(prettyFormat(obj));
};

/***/ }),

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugConsole": () => (/* reexport safe */ _debugConsole__WEBPACK_IMPORTED_MODULE_0__.debugConsole),
/* harmony export */   "createLoader": () => (/* reexport safe */ _createLoader__WEBPACK_IMPORTED_MODULE_1__.createLoader),
/* harmony export */   "withConnectionCursor": () => (/* reexport safe */ _withConnectionCursor__WEBPACK_IMPORTED_MODULE_2__.withConnectionCursor),
/* harmony export */   "registerLoader": () => (/* reexport safe */ _loaderRegister__WEBPACK_IMPORTED_MODULE_3__.registerLoader),
/* harmony export */   "getDataloaders": () => (/* reexport safe */ _loaderRegister__WEBPACK_IMPORTED_MODULE_3__.getDataloaders),
/* harmony export */   "connectionArgs": () => (/* reexport safe */ _connectionDefinitions__WEBPACK_IMPORTED_MODULE_4__.connectionArgs),
/* harmony export */   "connectionDefinitions": () => (/* reexport safe */ _connectionDefinitions__WEBPACK_IMPORTED_MODULE_4__.connectionDefinitions)
/* harmony export */ });
/* harmony import */ var _debugConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debugConsole */ "./src/graphql/debugConsole.ts");
/* harmony import */ var _createLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createLoader */ "./src/graphql/createLoader.ts");
/* harmony import */ var _withConnectionCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withConnectionCursor */ "./src/graphql/withConnectionCursor.ts");
/* harmony import */ var _loaderRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaderRegister */ "./src/graphql/loaderRegister.ts");
/* harmony import */ var _connectionDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionDefinitions */ "./src/graphql/connectionDefinitions.ts");






/***/ }),

/***/ "./src/graphql/loaderRegister.ts":
/*!***************************************!*\
  !*** ./src/graphql/loaderRegister.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerLoader": () => (/* binding */ registerLoader),
/* harmony export */   "getDataloaders": () => (/* binding */ getDataloaders)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var loaders = {};

var registerLoader = function registerLoader(key, getLoader) {
  loaders[key] = getLoader;
};

var getDataloaders = function getDataloaders() {
  return Object.keys(loaders).reduce(function (prev, loaderKey) {
    return _objectSpread(_objectSpread({}, prev), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, loaderKey, loaders[loaderKey]()));
  }, {});
};



/***/ }),

/***/ "./src/graphql/withConnectionCursor.ts":
/*!*********************************************!*\
  !*** ./src/graphql/withConnectionCursor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withConnectionCursor": () => (/* binding */ withConnectionCursor)
/* harmony export */ });
/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entria/graphql-mongoose-loader */ "@entria/graphql-mongoose-loader");
/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__);

var withConnectionCursor = function withConnectionCursor(model, loader, condFn) {
  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    var _condFn = condFn.apply(void 0, params),
        _condFn$conditions = _condFn.conditions,
        conditions = _condFn$conditions === void 0 ? {} : _condFn$conditions,
        _condFn$sort = _condFn.sort,
        sort = _condFn$sort === void 0 ? {} : _condFn$sort;

    var context = params[0],
        args = params[1];
    var cursor = model.find(conditions).sort(sort);
    return (0,_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__.connectionFromMongoCursor)({
      cursor: cursor,
      context: context,
      args: args,
      loader: loader
    });
  };
};

/***/ }),

/***/ "./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "generateToken": () => (/* binding */ generateToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/server/config.ts");
/* harmony import */ var _getUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUser */ "./src/server/getUser.ts");





var auth = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ctx, next) {
    var _ctx$header, authorization, domainname, result, unauthorized, user, team;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$header = ctx.header, authorization = _ctx$header.authorization, domainname = _ctx$header.domainname;
            _context.next = 3;
            return (0,_getUser__WEBPACK_IMPORTED_MODULE_4__.getUser)({
              authorization: authorization,
              domainname: domainname
            });

          case 3:
            result = _context.sent;
            unauthorized = result.unauthorized, user = result.user, team = result.team;
            console.log("unauthorized", unauthorized);

            if (!unauthorized) {
              _context.next = 10;
              break;
            }

            ctx.error = 401;
            ctx.body = {
              data: null,
              errors: [{
                message: "Invalid session",
                severity: "WARNING"
              }]
            };
            return _context.abrupt("return");

          case 10:
            ctx.user = user;
            ctx.team = team;
            _context.next = 14;
            return next();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function auth(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var generateToken = function generateToken(_ref2) {
  var user = _ref2.user;
  return "JWT ".concat(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
    id: user._id
  }, _config__WEBPACK_IMPORTED_MODULE_3__.jwtSecret));
};

/***/ }),

/***/ "./src/server/config.ts":
/*!******************************!*\
  !*** ./src/server/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "databaseConfig": () => (/* binding */ databaseConfig),
/* harmony export */   "graphqlPort": () => (/* binding */ graphqlPort),
/* harmony export */   "jwtSecret": () => (/* binding */ jwtSecret)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

var root = path__WEBPACK_IMPORTED_MODULE_0___default().join.bind(undefined, __dirname, "../");
var ENV = process.env; // Database Settings

var dBdevelopment = ENV.MONGO_URL || "mongodb://localhost/database";
var dBproduction = ENV.MONGO_URL || "mongodb://localhost/database"; // Test Database Settings
// const test = 'mongodb://localhost/awesome-test';
// Export DB Settings

var databaseConfig =  false ? 0 : dBdevelopment; // Export GraphQL Server settings

var graphqlPort = ENV.PORT || 9001;
var jwtSecret = ENV.JWT_KEY || "jwt_secret";

/***/ }),

/***/ "./src/server/getUser.ts":
/*!*******************************!*\
  !*** ./src/server/getUser.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUser": () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/server/config.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_team_TeamModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/team/TeamModel */ "./src/server/modules/team/TeamModel.ts");
/* harmony import */ var _modules_user_UserModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user/UserModel */ "./src/server/modules/user/UserModel.ts");






var getUser = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
    var authorization, domainname, team, decodedToken, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authorization = _ref.authorization, domainname = _ref.domainname;

            if (domainname) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              unauthorized: true,
              user: null,
              team: null
            });

          case 3:
            _context.next = 5;
            return _modules_team_TeamModel__WEBPACK_IMPORTED_MODULE_4__.default.findOne({
              domainName: domainname
            });

          case 5:
            team = _context.sent;

            if (team) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", {
              unauthorized: true,
              user: null,
              team: null
            });

          case 8:
            if (authorization) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              unauthorized: false,
              user: null,
              team: team
            });

          case 10:
            _context.prev = 10;
            decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(authorization.substring(4), _config__WEBPACK_IMPORTED_MODULE_2__.jwtSecret);
            _context.next = 14;
            return _modules_user_UserModel__WEBPACK_IMPORTED_MODULE_5__.default.findOne({
              _id: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.id,
              team: team._id
            });

          case 14:
            user = _context.sent;

            if (user) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", {
              unauthorized: true,
              user: null,
              team: null
            });

          case 17:
            return _context.abrupt("return", {
              unauthorized: false,
              user: user,
              team: team
            });

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](10);
            return _context.abrupt("return", {
              unauthorized: true,
              user: null,
              team: null
            });

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 20]]);
  }));

  return function getUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/server/modules/auth/mutations/UserRegisterEmailByEmailMutation.ts":
/*!*******************************************************************************!*\
  !*** ./src/server/modules/auth/mutations/UserRegisterEmailByEmailMutation.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-relay */ "graphql-relay");
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_UserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/UserModel */ "./src/server/modules/user/UserModel.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth */ "./src/server/auth.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,graphql_relay__WEBPACK_IMPORTED_MODULE_3__.mutationWithClientMutationId)({
  name: "UserRegisterEmailByEmail",
  inputFields: {
    name: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLNonNull(graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString)
    },
    email: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLNonNull(graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString)
    },
    password: {
      type: new graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLNonNull(graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString)
    }
  },
  mutateAndGetPayload: function () {
    var _mutateAndGetPayload = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref, ctx) {
      var name, email, password, team, hasUser, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name, email = _ref.email, password = _ref.password;
              team = ctx.team;
              _context.next = 4;
              return _user_UserModel__WEBPACK_IMPORTED_MODULE_4__.default.findOne({
                email: email.trim().toLowerCase(),
                team: team._id
              });

            case 4:
              hasUser = _context.sent;

              if (!hasUser) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", {
                token: null,
                error: "User already exists"
              });

            case 7:
              _context.next = 9;
              return new _user_UserModel__WEBPACK_IMPORTED_MODULE_4__.default({
                name: name,
                email: email,
                password: password,
                team: team._id
              }).save();

            case 9:
              user = _context.sent;
              return _context.abrupt("return", {
                token: (0,_auth__WEBPACK_IMPORTED_MODULE_5__.generateToken)({
                  user: user
                }),
                error: null
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function mutateAndGetPayload(_x, _x2) {
      return _mutateAndGetPayload.apply(this, arguments);
    }

    return mutateAndGetPayload;
  }(),
  outputFields: {
    token: {
      type: graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString,
      resolve: function resolve(_ref2) {
        var token = _ref2.token;
        return token;
      }
    },
    error: {
      type: graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString,
      resolve: function resolve(_ref3) {
        var error = _ref3.error;
        return error;
      }
    }
  }
}));

/***/ }),

/***/ "./src/server/modules/auth/mutations/index.ts":
/*!****************************************************!*\
  !*** ./src/server/modules/auth/mutations/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserRegisterEmailByEmailMutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRegisterEmailByEmailMutation */ "./src/server/modules/auth/mutations/UserRegisterEmailByEmailMutation.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  UserRegisterEmailByEmail: _UserRegisterEmailByEmailMutation__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./src/server/modules/node/typeRegister.ts":
/*!*************************************************!*\
  !*** ./src/server/modules/node/typeRegister.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerTypeLoader": () => (/* binding */ registerTypeLoader),
/* harmony export */   "nodeInterface": () => (/* binding */ nodeInterface),
/* harmony export */   "nodeField": () => (/* binding */ nodeField),
/* harmony export */   "nodesField": () => (/* binding */ nodesField)
/* harmony export */ });
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-relay */ "graphql-relay");
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_0__);
 // import { GraphQLContext } from '../../graphql/types';

var getTypeRegister = function getTypeRegister() {
  var typesLoaders = {};

  var getTypesLoaders = function getTypesLoaders() {
    return typesLoaders;
  };

  var registerTypeLoader = function registerTypeLoader(type, load) {
    typesLoaders[type.name] = {
      type: type,
      load: load
    };
    return type;
  };

  var idFetcher = function idFetcher(globalId, context) {
    var _fromGlobalId = (0,graphql_relay__WEBPACK_IMPORTED_MODULE_0__.fromGlobalId)(globalId),
        type = _fromGlobalId.type,
        id = _fromGlobalId.id;

    var _ref = typesLoaders[type] || {
      load: null
    },
        load = _ref.load;

    return load && load(context, id) || null;
  };

  var typeResolver = function typeResolver(obj) {
    var _ref2 = typesLoaders[obj.constructor.name] || {
      type: null
    },
        type = _ref2.type;

    return type;
  };

  var _nodeDefinitions = (0,graphql_relay__WEBPACK_IMPORTED_MODULE_0__.nodeDefinitions)(idFetcher, typeResolver),
      nodeField = _nodeDefinitions.nodeField,
      nodesField = _nodeDefinitions.nodesField,
      nodeInterface = _nodeDefinitions.nodeInterface;

  return {
    registerTypeLoader: registerTypeLoader,
    getTypesLoaders: getTypesLoaders,
    nodeField: nodeField,
    nodesField: nodesField,
    nodeInterface: nodeInterface
  };
};

var _getTypeRegister = getTypeRegister(),
    registerTypeLoader = _getTypeRegister.registerTypeLoader,
    nodeInterface = _getTypeRegister.nodeInterface,
    nodeField = _getTypeRegister.nodeField,
    nodesField = _getTypeRegister.nodesField;



/***/ }),

/***/ "./src/server/modules/team/TeamLoader.ts":
/*!***********************************************!*\
  !*** ./src/server/modules/team/TeamLoader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoader": () => (/* binding */ getLoader),
/* harmony export */   "clearCache": () => (/* binding */ clearCache),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _graphql_createLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/createLoader */ "./src/graphql/createLoader.ts");
/* harmony import */ var _graphql_loaderRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphql/loaderRegister */ "./src/graphql/loaderRegister.ts");
/* harmony import */ var _TeamModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamModel */ "./src/server/modules/team/TeamModel.ts");




var _createLoader = (0,_graphql_createLoader__WEBPACK_IMPORTED_MODULE_0__.createLoader)({
  model: _TeamModel__WEBPACK_IMPORTED_MODULE_2__.default,
  loaderName: "TeamLoader"
}),
    Team = _createLoader.Wrapper,
    getLoader = _createLoader.getLoader,
    clearCache = _createLoader.clearCache,
    load = _createLoader.load,
    loadAll = _createLoader.loadAll;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);
(0,_graphql_loaderRegister__WEBPACK_IMPORTED_MODULE_1__.registerLoader)("TeamLoader", getLoader);

/***/ }),

/***/ "./src/server/modules/team/TeamModel.ts":
/*!**********************************************!*\
  !*** ./src/server/modules/team/TeamModel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
var teamSchema = new Schema({
  name: {
    type: String,
    required: "name is required"
  },
  domainName: {
    type: String,
    description: "The name of the domain to be used on application",
    unique: true,
    lowercase: true,
    trim: true
  }
}, {
  collection: "Team",
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});
var TeamModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Team", teamSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamModel);

/***/ }),

/***/ "./src/server/modules/team/TeamType.ts":
/*!*********************************************!*\
  !*** ./src/server/modules/team/TeamType.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "TeamConnection": () => (/* binding */ TeamConnection)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ "graphql-relay");
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_typeRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node/typeRegister */ "./src/server/modules/node/typeRegister.ts");
/* harmony import */ var _TeamLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamLoader */ "./src/server/modules/team/TeamLoader.ts");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../graphql */ "./src/graphql/index.ts");





var TeamType = new graphql__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: "Team",
  description: "team data",
  fields: function fields() {
    return {
      id: (0,graphql_relay__WEBPACK_IMPORTED_MODULE_1__.globalIdField)("Team"),
      name: {
        type: graphql__WEBPACK_IMPORTED_MODULE_0__.GraphQLString,
        resolve: function resolve(team) {
          return team.name;
        }
      }
    };
  },
  interfaces: function interfaces() {
    return [_node_typeRegister__WEBPACK_IMPORTED_MODULE_2__.nodeInterface];
  }
});
(0,_node_typeRegister__WEBPACK_IMPORTED_MODULE_2__.registerTypeLoader)(TeamType, _TeamLoader__WEBPACK_IMPORTED_MODULE_3__.load);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamType);
var TeamConnection = (0,_graphql__WEBPACK_IMPORTED_MODULE_4__.connectionDefinitions)({
  name: "Team",
  nodeType: TeamType
});

/***/ }),

/***/ "./src/server/modules/user/UserLoader.ts":
/*!***********************************************!*\
  !*** ./src/server/modules/user/UserLoader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoader": () => (/* binding */ getLoader),
/* harmony export */   "clearCache": () => (/* binding */ clearCache),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _graphql_createLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/createLoader */ "./src/graphql/createLoader.ts");
/* harmony import */ var _graphql_loaderRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graphql/loaderRegister */ "./src/graphql/loaderRegister.ts");
/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserModel */ "./src/server/modules/user/UserModel.ts");




var _createLoader = (0,_graphql_createLoader__WEBPACK_IMPORTED_MODULE_0__.createLoader)({
  model: _UserModel__WEBPACK_IMPORTED_MODULE_2__.default,
  loaderName: "UserLoader"
}),
    User = _createLoader.Wrapper,
    getLoader = _createLoader.getLoader,
    clearCache = _createLoader.clearCache,
    load = _createLoader.load,
    loadAll = _createLoader.loadAll;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);
(0,_graphql_loaderRegister__WEBPACK_IMPORTED_MODULE_1__.registerLoader)("UserLoader", getLoader);

/***/ }),

/***/ "./src/server/modules/user/UserModel.ts":
/*!**********************************************!*\
  !*** ./src/server/modules/user/UserModel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


var ObjectId = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId);
var Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);
var UserSchema = new Schema({
  name: {
    type: String,
    required: "name is required"
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: "email is required"
  },
  password: {
    type: String,
    required: "password is required"
  },
  team: {
    type: ObjectId,
    ref: "Team",
    required: true
  },
  kind: {
    type: [String],
    "default": [],
    required: false
  }
}, {
  collection: "User",
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});
UserSchema.methods = {
  authenticate: function authenticate(plainTextPassword) {
    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(plainTextPassword, this.password);
  },
  encryptPassword: function encryptPassword(password) {
    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, 8);
  }
};
var UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);

/***/ }),

/***/ "./src/server/modules/user/UserType.ts":
/*!*********************************************!*\
  !*** ./src/server/modules/user/UserType.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "UserConnection": () => (/* binding */ UserConnection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-relay */ "graphql-relay");
/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _team_TeamType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team/TeamType */ "./src/server/modules/team/TeamType.ts");
/* harmony import */ var _team_TeamModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team/TeamModel */ "./src/server/modules/team/TeamModel.ts");
/* harmony import */ var _node_typeRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node/typeRegister */ "./src/server/modules/node/typeRegister.ts");
/* harmony import */ var _UserLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserLoader */ "./src/server/modules/user/UserLoader.ts");
/* harmony import */ var _graphql_connectionDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../graphql/connectionDefinitions */ "./src/graphql/connectionDefinitions.ts");









var UserType = new graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: function fields() {
    return {
      id: (0,graphql_relay__WEBPACK_IMPORTED_MODULE_3__.globalIdField)("User"),
      name: {
        type: graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString,
        resolve: function resolve(user) {
          return user.name;
        }
      },
      username: {
        type: graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString,
        resolve: function resolve(user) {
          return user.username;
        }
      },
      email: {
        type: graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString,
        resolve: function resolve(user) {
          return user.email;
        }
      },
      team: {
        type: _team_TeamType__WEBPACK_IMPORTED_MODULE_4__.default,
        resolve: function () {
          var _resolve = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(user) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _team_TeamModel__WEBPACK_IMPORTED_MODULE_5__.default.findOne({
                      _id: user.team
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function resolve(_x) {
            return _resolve.apply(this, arguments);
          }

          return resolve;
        }()
      },
      kind: {
        type: (0,graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLList)(graphql__WEBPACK_IMPORTED_MODULE_2__.GraphQLString),
        description: "Kind that this user belongs: coach or player",
        resolve: function resolve(user) {
          return (user === null || user === void 0 ? void 0 : user.kind) || [];
        }
      }
    };
  },
  interfaces: function interfaces() {
    return [_node_typeRegister__WEBPACK_IMPORTED_MODULE_6__.nodeInterface];
  }
});
(0,_node_typeRegister__WEBPACK_IMPORTED_MODULE_6__.registerTypeLoader)(UserType, _UserLoader__WEBPACK_IMPORTED_MODULE_7__.load);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserType);
var UserConnection = (0,_graphql_connectionDefinitions__WEBPACK_IMPORTED_MODULE_8__.connectionDefinitions)({
  name: "User",
  nodeType: UserType
});

/***/ }),

/***/ "./src/server/schema.ts":
/*!******************************!*\
  !*** ./src/server/schema.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schema": () => (/* binding */ schema)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_QueryType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/QueryType */ "./src/server/types/QueryType.ts");
/* harmony import */ var _types_MutationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/MutationType */ "./src/server/types/MutationType.ts");



var schema = new graphql__WEBPACK_IMPORTED_MODULE_0__.GraphQLSchema({
  query: _types_QueryType__WEBPACK_IMPORTED_MODULE_1__.default,
  mutation: _types_MutationType__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./src/server/types/MutationType.ts":
/*!******************************************!*\
  !*** ./src/server/types/MutationType.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_auth_mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/auth/mutations */ "./src/server/modules/auth/mutations/index.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new graphql__WEBPACK_IMPORTED_MODULE_1__.GraphQLObjectType({
  name: "Mutation",
  description: "Root of ... mutations",
  fields: function fields() {
    return _objectSpread({}, _modules_auth_mutations__WEBPACK_IMPORTED_MODULE_2__.default);
  }
}));

/***/ }),

/***/ "./src/server/types/QueryType.ts":
/*!***************************************!*\
  !*** ./src/server/types/QueryType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_user_UserType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/user/UserType */ "./src/server/modules/user/UserType.ts");
/* harmony import */ var _modules_user_UserLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/user/UserLoader */ "./src/server/modules/user/UserLoader.ts");
/* harmony import */ var _modules_team_TeamLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/team/TeamLoader */ "./src/server/modules/team/TeamLoader.ts");
/* harmony import */ var _modules_node_typeRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/node/typeRegister */ "./src/server/modules/node/typeRegister.ts");
/* harmony import */ var _graphql_connectionDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphql/connectionDefinitions */ "./src/graphql/connectionDefinitions.ts");
/* harmony import */ var _modules_team_TeamType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/team/TeamType */ "./src/server/modules/team/TeamType.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // import { version } from "../../../package.json";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: function fields() {
    return {
      node: _modules_node_typeRegister__WEBPACK_IMPORTED_MODULE_7__.nodeField,
      nodes: _modules_node_typeRegister__WEBPACK_IMPORTED_MODULE_7__.nodesField,
      version: {
        type: graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLString,
        resolve: function resolve() {
          return "1.0.0";
        }
      },
      me: {
        type: _modules_user_UserType__WEBPACK_IMPORTED_MODULE_4__.default,
        resolve: function resolve(root, args, context) {
          var _context$user;

          return _modules_user_UserLoader__WEBPACK_IMPORTED_MODULE_5__.load(context, (_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user._id);
        }
      },
      users: {
        type: (0,graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLNonNull)(_modules_user_UserType__WEBPACK_IMPORTED_MODULE_4__.UserConnection.connectionType),
        args: _objectSpread({}, _graphql_connectionDefinitions__WEBPACK_IMPORTED_MODULE_8__.connectionArgs),
        resolve: function () {
          var _resolve = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_, args, context) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _modules_user_UserLoader__WEBPACK_IMPORTED_MODULE_5__.loadAll(context, args);

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function resolve(_x, _x2, _x3) {
            return _resolve.apply(this, arguments);
          }

          return resolve;
        }()
      },
      teams: {
        type: (0,graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLNonNull)(_modules_team_TeamType__WEBPACK_IMPORTED_MODULE_9__.TeamConnection.connectionType),
        args: _objectSpread({}, _graphql_connectionDefinitions__WEBPACK_IMPORTED_MODULE_8__.connectionArgs),
        resolve: function () {
          var _resolve2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(_, args, context) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _modules_team_TeamLoader__WEBPACK_IMPORTED_MODULE_6__.loadAll(context, args);

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function resolve(_x4, _x5, _x6) {
            return _resolve2.apply(this, arguments);
          }

          return resolve;
        }()
      }
    };
  }
}));

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");;

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/inherits");;

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");;

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/toConsumableArray");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "@entria/graphql-mongo-helpers":
/*!************************************************!*\
  !*** external "@entria/graphql-mongo-helpers" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@entria/graphql-mongo-helpers");;

/***/ }),

/***/ "@entria/graphql-mongoose-loader":
/*!**************************************************!*\
  !*** external "@entria/graphql-mongoose-loader" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@entria/graphql-mongoose-loader");;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "dataloader":
/*!*****************************!*\
  !*** external "dataloader" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("dataloader");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("graphql");;

/***/ }),

/***/ "graphql-relay":
/*!********************************!*\
  !*** external "graphql-relay" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("graphql-relay");;

/***/ }),

/***/ "graphql/utilities":
/*!************************************!*\
  !*** external "graphql/utilities" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("graphql/utilities");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./scripts/updateSchema.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql/utilities */ "graphql/utilities");
/* harmony import */ var graphql_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_server_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/server/schema */ "./src/server/schema.ts");








var writeFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_5__.promisify)((fs__WEBPACK_IMPORTED_MODULE_3___default().writeFile));
var cwd = process.cwd();

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
  var configs;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          configs = [{
            schema: _src_server_schema__WEBPACK_IMPORTED_MODULE_7__.schema,
            path: path__WEBPACK_IMPORTED_MODULE_4___default().join(cwd, "./schema.graphql")
          }];
          _context2.next = 3;
          return Promise.all(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(configs.map( /*#__PURE__*/function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(config) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return writeFileAsync(config.path, (0,graphql_utilities__WEBPACK_IMPORTED_MODULE_6__.printSchema)(config.schema));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }())));

        case 3:
          process.exit(0);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();
})();

module.exports = __webpack_exports__;
/******/ })()
;