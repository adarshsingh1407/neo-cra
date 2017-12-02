'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _UserService = require('../services/UserService');

var _Internationalize = require('./Internationalize');

var _Internationalize2 = _interopRequireDefault(_Internationalize);

var _user2 = require('../actions/user');

var userActions = _interopRequireWildcard(_user2);

var _ApiContextProvider = require('./utils/ApiContextProvider');

var _CommonUtil = require('./utils/CommonUtil');

var _Main = require('./presentational/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainParent = function (_Component) {
  _inherits(MainParent, _Component);

  function MainParent() {
    _classCallCheck(this, MainParent);

    return _possibleConstructorReturn(this, (MainParent.__proto__ || Object.getPrototypeOf(MainParent)).apply(this, arguments));
  }

  _createClass(MainParent, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var apiContext, staticContext;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.props.userActions.setUser({ isLoading: true });
                apiContext = (0, _ApiContextProvider.getApiContext)(this.props);

                // StaticContext has been set in the props by StaticRouter

                staticContext = this.props.staticContext;
                //TODO: Find the purpose of this key

                this._handleData('github-user', staticContext, apiContext);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: '_handleData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(key, staticContext, apiContext) {
        var isServer, isBrowser, user, _user;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isServer = apiContext.isServer, isBrowser = apiContext.isBrowser;

                if (!(isServer && staticContext.data[key])) {
                  _context2.next = 6;
                  break;
                }

                // On Server (2nd-Rendering)
                // Get data from within staticContext which was set during 1st-Rendering
                // And use it to setState of the component
                user = staticContext.data[key];

                this.props.userActions.setUser(user);
                _context2.next = 20;
                break;

              case 6:
                if (!isServer) {
                  _context2.next = 10;
                  break;
                }

                // On Server (1st-Rendering)
                // Make API call to fetch data
                // And set data in staticContext for use in 2nd-Rendering
                staticContext.data[key] = this._getData(apiContext);
                _context2.next = 20;
                break;

              case 10:
                if (!(isBrowser && window.USE_SERVER_DATA)) {
                  _context2.next = 15;
                  break;
                }

                // On Browser and SERVER_DATA is fresh and can be used
                // SSRed page has been received
                // setState from window.DATA
                this.props.userActions.setUser(this.props.user);
                // This causes updated data to be received on further visits to this page
                // SERVER_DATA is old now as it has already been used
                window.USE_SERVER_DATA = false;
                _context2.next = 20;
                break;

              case 15:
                if (!isBrowser) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 18;
                return this._getData(apiContext);

              case 18:
                _user = _context2.sent;

                this.props.userActions.setUser(_user);

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handleData(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return _handleData;
    }()
  }, {
    key: '_getData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(apiContext) {
        var user;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _UserService.getUserDetails)(apiContext);

              case 2:
                user = _context3.sent;
                return _context3.abrupt('return', user);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _getData(_x4) {
        return _ref3.apply(this, arguments);
      }

      return _getData;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CommonUtil.Aux,
        null,
        _react2.default.createElement(_Main2.default, this.props),
        _react2.default.createElement(_Internationalize2.default, { user: this.props.user })
      );
    }
  }]);

  return MainParent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    userActions: (0, _redux.bindActionCreators)(userActions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainParent);