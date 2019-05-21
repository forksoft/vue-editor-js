/*!
 * vue-editor-js v0.3.0 
 * (c) 2019 ChangJoo Park<pcjpcj2@gmail.com>
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports);

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

var editor = createCommonjsModule(function (module, exports) {
  /*!
   * Editor.js
   * 
   * @version 2.12.3
   * 
   * @licence Apache-2.0
   * @author CodeX <https://codex.so>
   * 
   * @uses html-janitor
   * @licence Apache-2.0 (https://github.com/guardian/html-janitor/blob/master/LICENSE)
   */
  !function (t, e) {
    module.exports = e();
  }(window, function () {
    return function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var r in t) {
          n.d(o, r, function (e) {
            return t[e];
          }.bind(null, r));
        }
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 159);
    }([function (t, e, n) {
      var o = n(9),
          r = n(16),
          i = n(22),
          a = n(19),
          s = n(31),
          c = function c(t, e, n) {
        var u,
            l,
            f,
            d,
            p = t & c.F,
            h = t & c.G,
            v = t & c.S,
            g = t & c.P,
            y = t & c.B,
            b = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
            m = h ? r : r[e] || (r[e] = {}),
            k = m.prototype || (m.prototype = {});

        for (u in h && (n = e), n) {
          f = ((l = !p && b && void 0 !== b[u]) ? b : n)[u], d = y && l ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, u, f, t & c.U), m[u] != f && i(m, u, d), g && k[u] != f && (k[u] = f);
        }
      };

      o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
    }, function (t, e) {
      t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      };
    }, function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      t.exports = function (t, e, o) {
        return e && n(t.prototype, e), o && n(t, o), t;
      };
    }, function (t, e) {
      t.exports = function (t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
    }, function (t, e, n) {
      var o = n(48),
          r = n(340);

      t.exports = function (t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e;
      };
    }, function (t, e) {
      function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, n(e);
      }

      t.exports = n;
    }, function (t, e, n) {
      var o = n(341);

      t.exports = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && o(t, e);
      };
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2)], void 0 === (i = "function" == typeof (o = function o(_o, r, i) {

        var a = n(3);
        Object.defineProperty(_o, "__esModule", {
          value: !0
        }), _o.default = void 0, r = a(r), i = a(i);

        var s = function () {
          function t(e) {
            var n = e.config;
            if ((0, r.default)(this, t), (this instanceof t ? this.constructor : void 0) === t) throw new TypeError("Constructors for abstract class Module are not allowed.");
            this.config = n;
          }

          return (0, i.default)(t, [{
            key: "state",
            set: function set(t) {
              this.Editor = t;
            }
          }]), t;
        }();

        _o.default = s, s.displayName = "Module", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }, function (t, e) {
      var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n);
    }, function (t, e) {
      t.exports = function (t) {
        return "object" == _typeof(t) ? null !== t : "function" == typeof t;
      };
    }, function (t, e, n) {
      var o = n(10);

      t.exports = function (t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    }, function (t, e, n) {
      var o = n(73)("wks"),
          r = n(41),
          i = n(9).Symbol,
          a = "function" == typeof i;
      (t.exports = function (t) {
        return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t));
      }).store = o;
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(48), n(97), n(1), n(2)], void 0 === (i = "function" == typeof (o = function o(_o2, r, i, a, s) {

        var c = n(3);
        Object.defineProperty(_o2, "__esModule", {
          value: !0
        }), _o2.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);

        var u = function () {
          function t() {
            (0, a.default)(this, t);
          }

          return (0, s.default)(t, null, [{
            key: "isSingleTag",
            value: function value(t) {
              return t.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t.tagName);
            }
          }, {
            key: "isLineBreakTag",
            value: function value(t) {
              return t && t.tagName && ["BR", "WBR"].includes(t.tagName);
            }
          }, {
            key: "make",
            value: function value(t) {
              var e,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  r = document.createElement(t);

              for (var a in Array.isArray(n) ? (e = r.classList).add.apply(e, (0, i.default)(n)) : n && r.classList.add(n), o) {
                o.hasOwnProperty(a) && (r[a] = o[a]);
              }

              return r;
            }
          }, {
            key: "text",
            value: function value(t) {
              return document.createTextNode(t);
            }
          }, {
            key: "svg",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
                  o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
            }
          }, {
            key: "append",
            value: function value(t, e) {
              Array.isArray(e) ? e.forEach(function (e) {
                return t.appendChild(e);
              }) : t.appendChild(e);
            }
          }, {
            key: "prepend",
            value: function value(t, e) {
              Array.isArray(e) ? (e = e.reverse()).forEach(function (e) {
                return t.prepend(e);
              }) : t.prepend(e);
            }
          }, {
            key: "swap",
            value: function value(t, e) {
              var n = document.createElement("div"),
                  o = t.parentNode;
              o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
            }
          }, {
            key: "find",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                  e = arguments.length > 1 ? arguments[1] : void 0;
              return t.querySelector(e);
            }
          }, {
            key: "get",
            value: function value(t) {
              return document.getElementById(t);
            }
          }, {
            key: "findAll",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                  e = arguments.length > 1 ? arguments[1] : void 0;
              return t.querySelectorAll(e);
            }
          }, {
            key: "getDeepestNode",
            value: function value(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  o = n ? "lastChild" : "firstChild",
                  r = n ? "previousSibling" : "nextSibling";

              if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                var i = e[o];
                if (t.isSingleTag(i) && !t.isNativeInput(i) && !t.isLineBreakTag(i)) if (i[r]) i = i[r];else {
                  if (!i.parentNode[r]) return i.parentNode;
                  i = i.parentNode[r];
                }
                return this.getDeepestNode(i, n);
              }

              return e;
            }
          }, {
            key: "isElement",
            value: function value(t) {
              return t && "object" === (0, r.default)(t) && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
            }
          }, {
            key: "isFragment",
            value: function value(t) {
              return t && "object" === (0, r.default)(t) && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
            }
          }, {
            key: "isContentEditable",
            value: function value(t) {
              return "true" === t.contentEditable;
            }
          }, {
            key: "isNativeInput",
            value: function value(t) {
              return !(!t || !t.tagName) && ["INPUT", "TEXTAREA"].includes(t.tagName);
            }
          }, {
            key: "canSetCaret",
            value: function value(e) {
              var n = !0;

              if (t.isNativeInput(e)) {
                var o = e;

                switch (o.type) {
                  case "file":
                  case "checkbox":
                  case "radio":
                  case "hidden":
                  case "submit":
                  case "button":
                  case "image":
                  case "reset":
                    n = !1;
                }
              } else n = t.isContentEditable(e);

              return n;
            }
          }, {
            key: "isNodeEmpty",
            value: function value(t) {
              return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length;
            }
          }, {
            key: "isLeaf",
            value: function value(t) {
              return !!t && 0 === t.childNodes.length;
            }
          }, {
            key: "isEmpty",
            value: function value(t) {
              var e = this,
                  n = [],
                  o = [];
              if (!t) return !0;
              if (!t.childNodes.length) return this.isNodeEmpty(t);

              for (n.push(t.firstChild); n.length > 0;) {
                if (t = n.shift()) {
                  for (this.isLeaf(t) ? o.push(t) : n.push(t.firstChild); t && t.nextSibling;) {
                    (t = t.nextSibling) && n.push(t);
                  }

                  if (t && !this.isNodeEmpty(t)) return !1;
                }
              }

              return o.every(function (t) {
                return e.isNodeEmpty(t);
              });
            }
          }, {
            key: "isHTMLString",
            value: function value(e) {
              var n = t.make("div");
              return n.innerHTML = e, n.childElementCount > 0;
            }
          }, {
            key: "getContentLength",
            value: function value(e) {
              return t.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
            }
          }, {
            key: "containsOnlyInlineElements",
            value: function value(e) {
              var n;
              return "string" == typeof e ? (n = document.createElement("div")).innerHTML = e : n = e, Array.from(n.children).every(function e(n) {
                return !t.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
              });
            }
          }, {
            key: "getDeepestBlockElements",
            value: function value(e) {
              return t.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce(function (e, n) {
                return [].concat((0, i.default)(e), (0, i.default)(t.getDeepestBlockElements(n)));
              }, []);
            }
          }, {
            key: "blockElements",
            get: function get() {
              return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"];
            }
          }]), t;
        }();

        _o2.default = u, u.displayName = "Dom", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o = n(11),
          r = n(99),
          i = n(38),
          a = Object.defineProperty;
      e.f = n(15) ? Object.defineProperty : function (t, e, n) {
        if (o(t), e = i(e, !0), o(n), r) try {
          return a(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t;
      };
    }, function (t, e, n) {
      t.exports = !n(8)(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e) {
      var n = t.exports = {
        version: "2.5.7"
      };
      "number" == typeof __e && (__e = n);
    }, function (t, e, n) {
      var o = n(35),
          r = Math.min;

      t.exports = function (t) {
        return t > 0 ? r(o(t), 9007199254740991) : 0;
      };
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(338), n(48), n(29), n(30), n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o3, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o3, "__esModule", {
          value: !0
        }), _o3.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function () {
          function t() {
            (0, c.default)(this, t);
          }

          var e;
          return (0, u.default)(t, null, [{
            key: "log",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log",
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "color: inherit";

              if ("console" in window && window.console[e]) {
                var r = "Editor.js ".concat("2.12.3"),
                    i = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";

                try {
                  ["time", "timeEnd"].includes(e) ? console[e]("( ".concat(r, " ) ").concat(t)) : n ? console[e]("%c".concat(r, "%c ").concat(t, " %o"), i, o, n) : console[e]("%c".concat(r, "%c ").concat(t), i, o);
                } catch (t) {}
              }
            }
          }, {
            key: "sequence",
            value: (e = (0, s.default)(a.default.mark(function t(e) {
              var n,
                  o,
                  r,
                  _i,
                  c = arguments;

              return a.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return _i = function i() {
                        return (_i = (0, s.default)(a.default.mark(function t(e, n, o) {
                          return a.default.wrap(function (t) {
                            for (;;) {
                              switch (t.prev = t.next) {
                                case 0:
                                  return t.prev = 0, t.next = 3, e.function(e.data);

                                case 3:
                                  return t.next = 5, n(void 0 !== e.data ? e.data : {});

                                case 5:
                                  t.next = 10;
                                  break;

                                case 7:
                                  t.prev = 7, t.t0 = t.catch(0), o(void 0 !== e.data ? e.data : {});

                                case 10:
                                case "end":
                                  return t.stop();
                              }
                            }
                          }, t, null, [[0, 7]]);
                        }))).apply(this, arguments);
                      }, r = function r(t, e, n) {
                        return _i.apply(this, arguments);
                      }, n = c.length > 1 && void 0 !== c[1] ? c[1] : function () {}, o = c.length > 2 && void 0 !== c[2] ? c[2] : function () {}, t.next = 6, e.reduce(function () {
                        var t = (0, s.default)(a.default.mark(function t(e, i) {
                          return a.default.wrap(function (t) {
                            for (;;) {
                              switch (t.prev = t.next) {
                                case 0:
                                  return t.next = 2, e;

                                case 2:
                                  return t.abrupt("return", r(i, n, o));

                                case 3:
                                case "end":
                                  return t.stop();
                              }
                            }
                          }, t);
                        }));
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      }(), Promise.resolve());

                    case 6:
                      return t.abrupt("return", t.sent);

                    case 7:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            })), function (t) {
              return e.apply(this, arguments);
            })
          }, {
            key: "array",
            value: function value(t) {
              return Array.prototype.slice.call(t);
            }
          }, {
            key: "isFunction",
            value: function value(t) {
              return "function" == typeof t;
            }
          }, {
            key: "isClass",
            value: function value(t) {
              return "function" == typeof t && /^\s*class\s+/.test(t.toString());
            }
          }, {
            key: "isEmpty",
            value: function value(t) {
              return !t || 0 === Object.keys(t).length && t.constructor === Object;
            }
          }, {
            key: "isPromise",
            value: function value(t) {
              return Promise.resolve(t) === t;
            }
          }, {
            key: "delay",
            value: function value(t, e) {
              return function () {
                var n = this,
                    o = arguments;
                window.setTimeout(function () {
                  return t.apply(n, o);
                }, e);
              };
            }
          }, {
            key: "getFileExtension",
            value: function value(t) {
              return t.name.split(".").pop();
            }
          }, {
            key: "isValidMimeType",
            value: function value(t) {
              return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
            }
          }, {
            key: "debounce",
            value: function value(t, e, n) {
              var o,
                  r = this,
                  i = arguments;
              return function () {
                var a = r,
                    s = i,
                    c = n && !o;
                window.clearTimeout(o), o = window.setTimeout(function () {
                  o = null, n || t.apply(a, s);
                }, e), c && t.apply(a, s);
              };
            }
          }, {
            key: "copyTextToClipboard",
            value: function value(t) {
              var e = l.default.make("div", "codex-editor-clipboard", {
                innerHTML: t
              });
              document.body.appendChild(e);
              var n = window.getSelection(),
                  o = document.createRange();
              o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
            }
          }, {
            key: "getUserOS",
            value: function value() {
              var t = {
                win: !1,
                mac: !1,
                x11: !1,
                linux: !1
              },
                  e = Object.keys(t).find(function (t) {
                return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
              });
              return e ? (t[e] = !0, t) : t;
            }
          }, {
            key: "capitalize",
            value: function value(t) {
              return t[0].toUpperCase() + t.slice(1);
            }
          }, {
            key: "deepMerge",
            value: function value(e) {
              for (var n = function n(t) {
                return t && "object" === (0, i.default)(t) && !Array.isArray(t);
              }, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) {
                a[s - 1] = arguments[s];
              }

              if (!a.length) return e;
              var c = a.shift();
              if (n(e) && n(c)) for (var u in c) {
                n(c[u]) ? (e[u] || Object.assign(e, (0, r.default)({}, u, {})), t.deepMerge(e[u], c[u])) : Object.assign(e, (0, r.default)({}, u, c[u]));
              }
              return t.deepMerge.apply(t, [e].concat(a));
            }
          }, {
            key: "keyCodes",
            get: function get() {
              return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                LEFT: 37,
                UP: 38,
                DOWN: 40,
                RIGHT: 39,
                DELETE: 46,
                META: 91
              };
            }
          }]), t;
        }();

        _o3.default = d, d.displayName = "Util", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o = n(9),
          r = n(22),
          i = n(21),
          a = n(41)("src"),
          s = Function.toString,
          c = ("" + s).split("toString");
      n(16).inspectSource = function (t) {
        return s.call(t);
      }, (t.exports = function (t, e, n, s) {
        var u = "function" == typeof n;
        u && (i(n, "name") || r(n, "name", e)), t[e] !== n && (u && (i(n, a) || r(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)));
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[a] || s.call(this);
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(8),
          i = n(34),
          a = /"/g,
          s = function s(t, e, n, o) {
        var r = String(i(t)),
            s = "<" + e;
        return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">";
      };

      t.exports = function (t, e) {
        var n = {};
        n[t] = e(s), o(o.P + o.F * r(function () {
          var e = ""[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        }), "String", n);
      };
    }, function (t, e) {
      var n = {}.hasOwnProperty;

      t.exports = function (t, e) {
        return n.call(t, e);
      };
    }, function (t, e, n) {
      var o = n(14),
          r = n(40);
      t.exports = n(15) ? function (t, e, n) {
        return o.f(t, e, r(1, n));
      } : function (t, e, n) {
        return t[e] = n, t;
      };
    }, function (t, e, n) {
      var o = n(56),
          r = n(34);

      t.exports = function (t) {
        return o(r(t));
      };
    }, function (t, e, n) {
      var o = n(34);

      t.exports = function (t) {
        return Object(o(t));
      };
    }, function (t, e, n) {

      var o = n(8);

      t.exports = function (t, e) {
        return !!t && o(function () {
          e ? t.call(null, function () {}, 1) : t.call(null);
        });
      };
    }, function (t, e, n) {
      var o = n(57),
          r = n(40),
          i = n(23),
          a = n(38),
          s = n(21),
          c = n(99),
          u = Object.getOwnPropertyDescriptor;
      e.f = n(15) ? u : function (t, e) {
        if (t = i(t), e = a(e, !0), c) try {
          return u(t, e);
        } catch (t) {}
        if (s(t, e)) return r(!o.f.call(t, e), t[e]);
      };
    }, function (t, e, n) {
      var o = n(0),
          r = n(16),
          i = n(8);

      t.exports = function (t, e) {
        var n = (r.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), o(o.S + o.F * i(function () {
          n(1);
        }), "Object", a);
      };
    }, function (t, e, n) {
      var o = n(31),
          r = n(56),
          i = n(24),
          a = n(17),
          s = n(254);

      t.exports = function (t, e) {
        var n = 1 == t,
            c = 2 == t,
            u = 3 == t,
            l = 4 == t,
            f = 6 == t,
            d = 5 == t || f,
            p = e || s;
        return function (e, s, h) {
          for (var v, g, y = i(e), b = r(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : c ? p(e, 0) : void 0; k > x; x++) {
            if ((d || x in b) && (g = m(v = b[x], x, y), t)) if (n) w[x] = g;else if (g) switch (t) {
              case 3:
                return !0;

              case 5:
                return v;

              case 6:
                return x;

              case 2:
                w.push(v);
            } else if (l) return !1;
          }

          return f ? -1 : u || l ? l : w;
        };
      };
    }, function (t, e, n) {
      t.exports = n(334);
    }, function (t, e) {
      function n(t, e, n, o, r, i, a) {
        try {
          var s = t[i](a),
              c = s.value;
        } catch (t) {
          return void n(t);
        }

        s.done ? e(c) : Promise.resolve(c).then(o, r);
      }

      t.exports = function (t) {
        return function () {
          var e = this,
              o = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, o);

            function s(t) {
              n(a, r, i, s, c, "next", t);
            }

            function c(t) {
              n(a, r, i, s, c, "throw", t);
            }

            s(void 0);
          });
        };
      };
    }, function (t, e, n) {
      var o = n(32);

      t.exports = function (t, e, n) {
        if (o(t), void 0 === e) return t;

        switch (n) {
          case 1:
            return function (n) {
              return t.call(e, n);
            };

          case 2:
            return function (n, o) {
              return t.call(e, n, o);
            };

          case 3:
            return function (n, o, r) {
              return t.call(e, n, o, r);
            };
        }

        return function () {
          return t.apply(e, arguments);
        };
      };
    }, function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    }, function (t, e) {
      var n = {}.toString;

      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }, function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function (t, e) {
      var n = Math.ceil,
          o = Math.floor;

      t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
      };
    }, function (t, e, n) {

      if (n(15)) {
        var o = n(42),
            r = n(9),
            i = n(8),
            a = n(0),
            s = n(69),
            c = n(96),
            u = n(31),
            l = n(53),
            f = n(40),
            d = n(22),
            p = n(54),
            h = n(35),
            v = n(17),
            g = n(124),
            y = n(44),
            b = n(38),
            m = n(21),
            k = n(61),
            x = n(10),
            w = n(24),
            S = n(89),
            E = n(45),
            T = n(47),
            _ = n(46).f,
            B = n(91),
            C = n(41),
            O = n(12),
            I = n(28),
            N = n(59),
            M = n(66),
            A = n(93),
            L = n(50),
            P = n(63),
            R = n(52),
            j = n(92),
            F = n(116),
            D = n(14),
            U = n(26),
            H = D.f,
            z = U.f,
            W = r.RangeError,
            G = r.TypeError,
            V = r.Uint8Array,
            X = Array.prototype,
            Y = c.ArrayBuffer,
            K = c.DataView,
            Z = I(0),
            q = I(2),
            J = I(3),
            $ = I(4),
            Q = I(5),
            tt = I(6),
            et = N(!0),
            nt = N(!1),
            ot = A.values,
            rt = A.keys,
            it = A.entries,
            at = X.lastIndexOf,
            st = X.reduce,
            ct = X.reduceRight,
            ut = X.join,
            lt = X.sort,
            ft = X.slice,
            dt = X.toString,
            pt = X.toLocaleString,
            ht = O("iterator"),
            vt = O("toStringTag"),
            gt = C("typed_constructor"),
            yt = C("def_constructor"),
            bt = s.CONSTR,
            mt = s.TYPED,
            kt = s.VIEW,
            xt = I(1, function (t, e) {
          return _t(M(t, t[yt]), e);
        }),
            wt = i(function () {
          return 1 === new V(new Uint16Array([1]).buffer)[0];
        }),
            St = !!V && !!V.prototype.set && i(function () {
          new V(1).set({});
        }),
            Et = function Et(t, e) {
          var n = h(t);
          if (n < 0 || n % e) throw W("Wrong offset!");
          return n;
        },
            Tt = function Tt(t) {
          if (x(t) && mt in t) return t;
          throw G(t + " is not a typed array!");
        },
            _t = function _t(t, e) {
          if (!(x(t) && gt in t)) throw G("It is not a typed array constructor!");
          return new t(e);
        },
            Bt = function Bt(t, e) {
          return Ct(M(t, t[yt]), e);
        },
            Ct = function Ct(t, e) {
          for (var n = 0, o = e.length, r = _t(t, o); o > n;) {
            r[n] = e[n++];
          }

          return r;
        },
            Ot = function Ot(t, e, n) {
          H(t, e, {
            get: function get() {
              return this._d[n];
            }
          });
        },
            It = function It(t) {
          var e,
              n,
              o,
              r,
              i,
              a,
              s = w(t),
              c = arguments.length,
              l = c > 1 ? arguments[1] : void 0,
              f = void 0 !== l,
              d = B(s);

          if (null != d && !S(d)) {
            for (a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++) {
              o.push(i.value);
            }

            s = o;
          }

          for (f && c > 2 && (l = u(l, arguments[2], 2)), e = 0, n = v(s.length), r = _t(this, n); n > e; e++) {
            r[e] = f ? l(s[e], e) : s[e];
          }

          return r;
        },
            Nt = function Nt() {
          for (var t = 0, e = arguments.length, n = _t(this, e); e > t;) {
            n[t] = arguments[t++];
          }

          return n;
        },
            Mt = !!V && i(function () {
          pt.call(new V(1));
        }),
            At = function At() {
          return pt.apply(Mt ? ft.call(Tt(this)) : Tt(this), arguments);
        },
            Lt = {
          copyWithin: function copyWithin(t, e) {
            return F.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          every: function every(t) {
            return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function fill(t) {
            return j.apply(Tt(this), arguments);
          },
          filter: function filter(t) {
            return Bt(this, q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0));
          },
          find: function find(t) {
            return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function findIndex(t) {
            return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          forEach: function forEach(t) {
            Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function indexOf(t) {
            return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          includes: function includes(t) {
            return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          join: function join(t) {
            return ut.apply(Tt(this), arguments);
          },
          lastIndexOf: function lastIndexOf(t) {
            return at.apply(Tt(this), arguments);
          },
          map: function map(t) {
            return xt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          reduce: function reduce(t) {
            return st.apply(Tt(this), arguments);
          },
          reduceRight: function reduceRight(t) {
            return ct.apply(Tt(this), arguments);
          },
          reverse: function reverse() {
            for (var t, e = Tt(this).length, n = Math.floor(e / 2), o = 0; o < n;) {
              t = this[o], this[o++] = this[--e], this[e] = t;
            }

            return this;
          },
          some: function some(t) {
            return J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function sort(t) {
            return lt.call(Tt(this), t);
          },
          subarray: function subarray(t, e) {
            var n = Tt(this),
                o = n.length,
                r = y(t, o);
            return new (M(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y(e, o)) - r));
          }
        },
            Pt = function Pt(t, e) {
          return Bt(this, ft.call(Tt(this), t, e));
        },
            Rt = function Rt(t) {
          Tt(this);
          var e = Et(arguments[1], 1),
              n = this.length,
              o = w(t),
              r = v(o.length),
              i = 0;
          if (r + e > n) throw W("Wrong length!");

          for (; i < r;) {
            this[e + i] = o[i++];
          }
        },
            jt = {
          entries: function entries() {
            return it.call(Tt(this));
          },
          keys: function keys() {
            return rt.call(Tt(this));
          },
          values: function values() {
            return ot.call(Tt(this));
          }
        },
            Ft = function Ft(t, e) {
          return x(t) && t[mt] && "symbol" != _typeof(e) && e in t && String(+e) == String(e);
        },
            Dt = function Dt(t, e) {
          return Ft(t, e = b(e, !0)) ? f(2, t[e]) : z(t, e);
        },
            Ut = function Ut(t, e, n) {
          return !(Ft(t, e = b(e, !0)) && x(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t);
        };

        bt || (U.f = Dt, D.f = Ut), a(a.S + a.F * !bt, "Object", {
          getOwnPropertyDescriptor: Dt,
          defineProperty: Ut
        }), i(function () {
          dt.call({});
        }) && (dt = pt = function pt() {
          return ut.call(this);
        });
        var Ht = p({}, Lt);
        p(Ht, jt), d(Ht, ht, jt.values), p(Ht, {
          slice: Pt,
          set: Rt,
          constructor: function constructor() {},
          toString: dt,
          toLocaleString: At
        }), Ot(Ht, "buffer", "b"), Ot(Ht, "byteOffset", "o"), Ot(Ht, "byteLength", "l"), Ot(Ht, "length", "e"), H(Ht, vt, {
          get: function get() {
            return this[mt];
          }
        }), t.exports = function (t, e, n, c) {
          var u = t + ((c = !!c) ? "Clamped" : "") + "Array",
              f = "get" + t,
              p = "set" + t,
              h = r[u],
              y = h || {},
              b = h && T(h),
              m = !h || !s.ABV,
              w = {},
              S = h && h.prototype,
              B = function B(t, n) {
            H(t, n, {
              get: function get() {
                return function (t, n) {
                  var o = t._d;
                  return o.v[f](n * e + o.o, wt);
                }(this, n);
              },
              set: function set(t) {
                return function (t, n, o) {
                  var r = t._d;
                  c && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p](n * e + r.o, o, wt);
                }(this, n, t);
              },
              enumerable: !0
            });
          };

          m ? (h = n(function (t, n, o, r) {
            l(t, h, u, "_d");
            var i,
                a,
                s,
                c,
                f = 0,
                p = 0;

            if (x(n)) {
              if (!(n instanceof Y || "ArrayBuffer" == (c = k(n)) || "SharedArrayBuffer" == c)) return mt in n ? Ct(h, n) : It.call(h, n);
              i = n, p = Et(o, e);
              var y = n.byteLength;

              if (void 0 === r) {
                if (y % e) throw W("Wrong length!");
                if ((a = y - p) < 0) throw W("Wrong length!");
              } else if ((a = v(r) * e) + p > y) throw W("Wrong length!");

              s = a / e;
            } else s = g(n), i = new Y(a = s * e);

            for (d(t, "_d", {
              b: i,
              o: p,
              l: a,
              e: s,
              v: new K(i)
            }); f < s;) {
              B(t, f++);
            }
          }), S = h.prototype = E(Ht), d(S, "constructor", h)) : i(function () {
            h(1);
          }) && i(function () {
            new h(-1);
          }) && P(function (t) {
            new h(), new h(null), new h(1.5), new h(t);
          }, !0) || (h = n(function (t, n, o, r) {
            var i;
            return l(t, h, u), x(n) ? n instanceof Y || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y(n, Et(o, e), r) : void 0 !== o ? new y(n, Et(o, e)) : new y(n) : mt in n ? Ct(h, n) : It.call(h, n) : new y(g(n));
          }), Z(b !== Function.prototype ? _(y).concat(_(b)) : _(y), function (t) {
            t in h || d(h, t, y[t]);
          }), h.prototype = S, o || (S.constructor = h));
          var C = S[ht],
              O = !!C && ("values" == C.name || null == C.name),
              I = jt.values;
          d(h, gt, !0), d(S, mt, u), d(S, kt, !0), d(S, yt, h), (c ? new h(1)[vt] == u : vt in S) || H(S, vt, {
            get: function get() {
              return u;
            }
          }), w[u] = h, a(a.G + a.W + a.F * (h != y), w), a(a.S, u, {
            BYTES_PER_ELEMENT: e
          }), a(a.S + a.F * i(function () {
            y.of.call(h, 1);
          }), u, {
            from: It,
            of: Nt
          }), "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", e), a(a.P, u, Lt), R(u), a(a.P + a.F * St, u, {
            set: Rt
          }), a(a.P + a.F * !O, u, jt), o || S.toString == dt || (S.toString = dt), a(a.P + a.F * i(function () {
            new h(1).slice();
          }), u, {
            slice: Pt
          }), a(a.P + a.F * (i(function () {
            return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
          }) || !i(function () {
            S.toLocaleString.call([1, 2]);
          })), u, {
            toLocaleString: At
          }), L[u] = O ? C : I, o || O || d(S, ht, I);
        };
      } else t.exports = function () {};
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(18)], void 0 === (i = "function" == typeof (o = function o(_o4, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o4, "__esModule", {
          value: !0
        }), _o4.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t() {
            (0, r.default)(this, t), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
          }

          return (0, i.default)(t, [{
            key: "removeFakeBackground",
            value: function value() {
              this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
            }
          }, {
            key: "setFakeBackground",
            value: function value() {
              document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
            }
          }, {
            key: "save",
            value: function value() {
              this.savedSelectionRange = t.range;
            }
          }, {
            key: "restore",
            value: function value() {
              if (this.savedSelectionRange) {
                var t = window.getSelection();
                t.removeAllRanges(), t.addRange(this.savedSelectionRange);
              }
            }
          }, {
            key: "clearSaved",
            value: function value() {
              this.savedSelectionRange = null;
            }
          }, {
            key: "findParentTag",
            value: function value(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                  o = window.getSelection(),
                  r = null;
              if (!o || !o.anchorNode || !o.focusNode) return null;
              var i = [o.anchorNode, o.focusNode];
              return i.forEach(function (o) {
                for (var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));) {
                  o = o.parentNode, i--;
                }
              }), r;
            }
          }, {
            key: "expandToTag",
            value: function value(t) {
              var e = window.getSelection();
              e.removeAllRanges();
              var n = document.createRange();
              n.selectNodeContents(t), e.addRange(n);
            }
          }], [{
            key: "get",
            value: function value() {
              return window.getSelection();
            }
          }, {
            key: "CSS",
            get: function get() {
              return {
                editorWrapper: "codex-editor",
                editorZone: "codex-editor__redactor"
              };
            }
          }, {
            key: "anchorNode",
            get: function get() {
              var t = window.getSelection();
              return t ? t.anchorNode : null;
            }
          }, {
            key: "anchorOffset",
            get: function get() {
              var t = window.getSelection();
              return t ? t.anchorOffset : null;
            }
          }, {
            key: "isCollapsed",
            get: function get() {
              var t = window.getSelection();
              return t ? t.isCollapsed : null;
            }
          }, {
            key: "isAtEditor",
            get: function get() {
              var e = t.get(),
                  n = e.anchorNode || e.focusNode;
              n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
              var o = null;
              return n && (o = n.closest(".".concat(t.CSS.editorZone))), o && o.nodeType === Node.ELEMENT_NODE;
            }
          }, {
            key: "range",
            get: function get() {
              var t = window.getSelection();
              return t && t.rangeCount ? t.getRangeAt(0) : null;
            }
          }, {
            key: "rect",
            get: function get() {
              var t,
                  e = document.selection,
                  n = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              };
              if (e && "Control" !== e.type) return t = (e = e).createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
              if (!window.getSelection) return a.default.log("Method window.getSelection is not supported", "warn"), n;
              if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.default.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;

              if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                var o = document.createElement("span");

                if (o.getBoundingClientRect) {
                  o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                  var r = o.parentNode;
                  r.removeChild(o), r.normalize();
                }
              }

              return n;
            }
          }, {
            key: "text",
            get: function get() {
              return window.getSelection ? window.getSelection().toString() : "";
            }
          }]), t;
        }();

        _o4.default = c, c.displayName = "SelectionUtils", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o = n(10);

      t.exports = function (t, e) {
        if (!o(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function (t, e, n) {
      var o = n(41)("meta"),
          r = n(10),
          i = n(21),
          a = n(14).f,
          s = 0,
          c = Object.isExtensible || function () {
        return !0;
      },
          u = !n(8)(function () {
        return c(Object.preventExtensions({}));
      }),
          l = function l(t) {
        a(t, o, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        });
      },
          f = t.exports = {
        KEY: o,
        NEED: !1,
        fastKey: function fastKey(t, e) {
          if (!r(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

          if (!i(t, o)) {
            if (!c(t)) return "F";
            if (!e) return "E";
            l(t);
          }

          return t[o].i;
        },
        getWeak: function getWeak(t, e) {
          if (!i(t, o)) {
            if (!c(t)) return !0;
            if (!e) return !1;
            l(t);
          }

          return t[o].w;
        },
        onFreeze: function onFreeze(t) {
          return u && f.NEED && c(t) && !i(t, o) && l(t), t;
        }
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    }, function (t, e) {
      var n = 0,
          o = Math.random();

      t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
      };
    }, function (t, e) {
      t.exports = !1;
    }, function (t, e, n) {
      var o = n(101),
          r = n(76);

      t.exports = Object.keys || function (t) {
        return o(t, r);
      };
    }, function (t, e, n) {
      var o = n(35),
          r = Math.max,
          i = Math.min;

      t.exports = function (t, e) {
        return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e);
      };
    }, function (t, e, n) {
      var o = n(11),
          r = n(102),
          i = n(76),
          a = n(75)("IE_PROTO"),
          s = function s() {},
          _c = function c() {
        var t,
            e = n(72)("iframe"),
            o = i.length;

        for (e.style.display = "none", n(78).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _c = t.F; o--;) {
          delete _c.prototype[i[o]];
        }

        return _c();
      };

      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s.prototype = o(t), n = new s(), s.prototype = null, n[a] = t) : n = _c(), void 0 === e ? n : r(n, e);
      };
    }, function (t, e, n) {
      var o = n(101),
          r = n(76).concat("length", "prototype");

      e.f = Object.getOwnPropertyNames || function (t) {
        return o(t, r);
      };
    }, function (t, e, n) {
      var o = n(21),
          r = n(24),
          i = n(75)("IE_PROTO"),
          a = Object.prototype;

      t.exports = Object.getPrototypeOf || function (t) {
        return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
      };
    }, function (t, e) {
      function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function o(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = o = function o(t) {
          return n(t);
        } : t.exports = o = function o(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
        }, o(e);
      }

      t.exports = o;
    }, function (t, e, n) {
      var o = n(14).f,
          r = n(21),
          i = n(12)("toStringTag");

      t.exports = function (t, e, n) {
        t && !r(t = n ? t : t.prototype, i) && o(t, i, {
          configurable: !0,
          value: e
        });
      };
    }, function (t, e) {
      t.exports = {};
    }, function (t, e, n) {
      var o = n(12)("unscopables"),
          r = Array.prototype;
      null == r[o] && n(22)(r, o, {}), t.exports = function (t) {
        r[o][t] = !0;
      };
    }, function (t, e, n) {

      var o = n(9),
          r = n(14),
          i = n(15),
          a = n(12)("species");

      t.exports = function (t) {
        var e = o[t];
        i && e && !e[a] && r.f(e, a, {
          configurable: !0,
          get: function get() {
            return this;
          }
        });
      };
    }, function (t, e) {
      t.exports = function (t, e, n, o) {
        if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
        return t;
      };
    }, function (t, e, n) {
      var o = n(19);

      t.exports = function (t, e, n) {
        for (var r in e) {
          o(t, r, e[r], n);
        }

        return t;
      };
    }, function (t, e, n) {
      var o = n(10);

      t.exports = function (t, e) {
        if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t;
      };
    }, function (t, e, n) {
      var o = n(33);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == o(t) ? t.split("") : Object(t);
      };
    }, function (t, e) {
      e.f = {}.propertyIsEnumerable;
    }, function (t, e, n) {
      var o = n(327),
          r = n(328),
          i = n(329);

      t.exports = function (t, e) {
        return o(t) || r(t, e) || i();
      };
    }, function (t, e, n) {
      var o = n(23),
          r = n(17),
          i = n(44);

      t.exports = function (t) {
        return function (e, n, a) {
          var s,
              c = o(e),
              u = r(c.length),
              l = i(a, u);

          if (t && n != n) {
            for (; u > l;) {
              if ((s = c[l++]) != s) return !0;
            }
          } else for (; u > l; l++) {
            if ((t || l in c) && c[l] === n) return t || l || 0;
          }

          return !t && -1;
        };
      };
    }, function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
      var o = n(33),
          r = n(12)("toStringTag"),
          i = "Arguments" == o(function () {
        return arguments;
      }());

      t.exports = function (t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
          try {
            return t[e];
          } catch (t) {}
        }(e = Object(t), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a;
      };
    }, function (t, e, n) {
      var o = n(0),
          r = n(34),
          i = n(8),
          a = n(80),
          s = "[" + a + "]",
          c = RegExp("^" + s + s + "*"),
          u = RegExp(s + s + "*$"),
          l = function l(t, e, n) {
        var r = {},
            s = i(function () {
          return !!a[t]() || "​" != "​"[t]();
        }),
            c = r[t] = s ? e(f) : a[t];
        n && (r[n] = c), o(o.P + o.F * s, "String", r);
      },
          f = l.trim = function (t, e) {
        return t = String(r(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t;
      };

      t.exports = l;
    }, function (t, e, n) {
      var o = n(12)("iterator"),
          r = !1;

      try {
        var i = [7][o]();
        i.return = function () {
          r = !0;
        }, Array.from(i, function () {
          throw 2;
        });
      } catch (t) {}

      t.exports = function (t, e) {
        if (!e && !r) return !1;
        var n = !1;

        try {
          var i = [7],
              a = i[o]();
          a.next = function () {
            return {
              done: n = !0
            };
          }, i[o] = function () {
            return a;
          }, t(i);
        } catch (t) {}

        return n;
      };
    }, function (t, e, n) {

      var o = n(22),
          r = n(19),
          i = n(8),
          a = n(34),
          s = n(12);

      t.exports = function (t, e, n) {
        var c = s(t),
            u = n(a, c, ""[t]),
            l = u[0],
            f = u[1];
        i(function () {
          var e = {};
          return e[c] = function () {
            return 7;
          }, 7 != ""[t](e);
        }) && (r(String.prototype, t, l), o(RegExp.prototype, c, 2 == e ? function (t, e) {
          return f.call(t, this, e);
        } : function (t) {
          return f.call(t, this);
        }));
      };
    }, function (t, e, n) {
      var o = n(31),
          r = n(114),
          i = n(89),
          a = n(11),
          s = n(17),
          c = n(91),
          u = {},
          l = {};
      (e = t.exports = function (t, e, n, f, d) {
        var p,
            h,
            v,
            g,
            y = d ? function () {
          return t;
        } : c(t),
            b = o(n, f, e ? 2 : 1),
            m = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");

        if (i(y)) {
          for (p = s(t.length); p > m; m++) {
            if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === u || g === l) return g;
          }
        } else for (v = y.call(t); !(h = v.next()).done;) {
          if ((g = r(v, b, h.value, e)) === u || g === l) return g;
        }
      }).BREAK = u, e.RETURN = l;
    }, function (t, e, n) {
      var o = n(11),
          r = n(32),
          i = n(12)("species");

      t.exports = function (t, e) {
        var n,
            a = o(t).constructor;
        return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
      };
    }, function (t, e, n) {
      var o = n(9).navigator;
      t.exports = o && o.userAgent || "";
    }, function (t, e, n) {

      var o = n(9),
          r = n(0),
          i = n(19),
          a = n(54),
          s = n(39),
          c = n(65),
          u = n(53),
          l = n(10),
          f = n(8),
          d = n(63),
          p = n(49),
          h = n(81);

      t.exports = function (t, e, n, v, g, y) {
        var b = o[t],
            m = b,
            k = g ? "set" : "add",
            x = m && m.prototype,
            w = {},
            S = function S(t) {
          var e = x[t];
          i(x, t, "delete" == t ? function (t) {
            return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t);
          } : "has" == t ? function (t) {
            return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t);
          } : "get" == t ? function (t) {
            return y && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
          } : "add" == t ? function (t) {
            return e.call(this, 0 === t ? 0 : t), this;
          } : function (t, n) {
            return e.call(this, 0 === t ? 0 : t, n), this;
          });
        };

        if ("function" == typeof m && (y || x.forEach && !f(function () {
          new m().entries().next();
        }))) {
          var E = new m(),
              T = E[k](y ? {} : -0, 1) != E,
              _ = f(function () {
            E.has(1);
          }),
              B = d(function (t) {
            new m(t);
          }),
              C = !y && f(function () {
            for (var t = new m(), e = 5; e--;) {
              t[k](e, e);
            }

            return !t.has(-0);
          });

          B || ((m = e(function (e, n) {
            u(e, m, t);
            var o = h(new b(), e, m);
            return null != n && c(n, g, o[k], o), o;
          })).prototype = x, x.constructor = m), (_ || C) && (S("delete"), S("has"), g && S("get")), (C || T) && S(k), y && x.clear && delete x.clear;
        } else m = v.getConstructor(e, t, g, k), a(m.prototype, n), s.NEED = !0;

        return p(m, t), w[t] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t, g), m;
      };
    }, function (t, e, n) {
      for (var o, r = n(9), i = n(22), a = n(41), s = a("typed_array"), c = a("view"), u = !(!r.ArrayBuffer || !r.DataView), l = u, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;) {
        (o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, c, !0)) : l = !1;
      }

      t.exports = {
        ABV: u,
        CONSTR: l,
        TYPED: s,
        VIEW: c
      };
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o5, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o5, "__esModule", {
          value: !0
        }), _o5.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "methods",
            get: function get() {
              return {
                blocks: this.Editor.BlocksAPI.methods,
                caret: this.Editor.CaretAPI.methods,
                events: this.Editor.EventsAPI.methods,
                listeners: this.Editor.ListenersAPI.methods,
                notifier: this.Editor.NotifierAPI.methods,
                sanitizer: this.Editor.SanitizerAPI.methods,
                saver: this.Editor.SaverAPI.methods,
                selection: this.Editor.SelectionAPI.methods,
                styles: this.Editor.StylesAPI.classes,
                toolbar: this.Editor.ToolbarAPI.methods
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o5.default = f, f.displayName = "API", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(13)], void 0 === (i = "function" == typeof (o = function o(_o6, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o6, "__esModule", {
          value: !0
        }), _o6.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
              wrapper: null,
              content: null,
              actions: null,
              plusButton: null,
              blockActionsButtons: null,
              settingsToggler: null
            }, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "make",
            value: function value() {
              var t = this;
              this.nodes.wrapper = l.default.make("div", e.CSS.toolbar), ["content", "actions"].forEach(function (n) {
                t.nodes[n] = l.default.make("div", e.CSS[n]), l.default.append(t.nodes.wrapper, t.nodes[n]);
              }), this.nodes.plusButton = l.default.make("div", e.CSS.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "mouseenter", function () {
                var e = t.Editor.Toolbox.nodes.tooltip,
                    n = document.createDocumentFragment();
                n.appendChild(document.createTextNode("Add")), n.appendChild(l.default.make("div", t.Editor.Toolbox.CSS.tooltipShortcut, {
                  textContent: "⇥ Tab"
                })), e.style.left = "-17px", e.innerHTML = "", e.appendChild(n), e.classList.add(t.Editor.Toolbox.CSS.tooltipShown);
              }), this.Editor.Listeners.on(this.nodes.plusButton, "mouseleave", function () {
                t.Editor.Toolbox.hideTooltip();
              }), l.default.append(this.nodes.plusButton, l.default.svg("plus", 14, 14)), l.default.append(this.nodes.content, this.nodes.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "click", function () {
                return t.plusButtonClicked();
              }, !1), this.Editor.Toolbox.make(), this.nodes.blockActionsButtons = l.default.make("div", e.CSS.blockActionsButtons), this.nodes.settingsToggler = l.default.make("span", e.CSS.settingsToggler);
              var n = l.default.svg("dots", 18, 4);
              l.default.append(this.nodes.settingsToggler, n), l.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), l.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.Editor.BlockSettings.make(), l.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), l.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.bindEvents();
            }
          }, {
            key: "move",
            value: function value() {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
              var e = this.Editor.BlockManager.currentBlock.holder;

              if (e) {
                var n = Math.floor(e.offsetHeight / 2);
                this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(n, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(n, "px - 50%), 0)"), this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(e.offsetTop), "px, 0)");
              }
            }
          }, {
            key: "open",
            value: function value() {
              var t = this,
                  n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              setTimeout(function () {
                t.move(o), t.nodes.wrapper.classList.add(e.CSS.toolbarOpened), n ? t.blockActions.show() : t.blockActions.hide();
              }, 50);
            }
          }, {
            key: "close",
            value: function value() {
              this.nodes.wrapper.classList.remove(e.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
            }
          }, {
            key: "plusButtonClicked",
            value: function value() {
              this.Editor.Toolbox.toggle();
            }
          }, {
            key: "bindEvents",
            value: function value() {
              var t = this;
              this.Editor.Listeners.on(this.nodes.settingsToggler, "click", function () {
                return t.settingsTogglerClicked();
              });
            }
          }, {
            key: "settingsTogglerClicked",
            value: function value() {
              this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
            }
          }, {
            key: "opened",
            get: function get() {
              return this.nodes.wrapper.classList.contains(e.CSS.toolbarOpened);
            }
          }, {
            key: "plusButton",
            get: function get() {
              var t = this;
              return {
                hide: function hide() {
                  return t.nodes.plusButton.classList.add(e.CSS.plusButtonHidden);
                },
                show: function show() {
                  t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(e.CSS.plusButtonHidden);
                }
              };
            }
          }, {
            key: "blockActions",
            get: function get() {
              var t = this;
              return {
                hide: function hide() {
                  t.nodes.actions.classList.remove(e.CSS.actionsOpened);
                },
                show: function show() {
                  t.nodes.actions.classList.add(e.CSS.actionsOpened);
                }
              };
            }
          }], [{
            key: "CSS",
            get: function get() {
              return {
                toolbar: "ce-toolbar",
                content: "ce-toolbar__content",
                actions: "ce-toolbar__actions",
                actionsOpened: "ce-toolbar__actions--opened",
                toolbarOpened: "ce-toolbar--opened",
                plusButton: "ce-toolbar__plus",
                plusButtonHidden: "ce-toolbar__plus--hidden",
                blockActionsButtons: "ce-toolbar__actions-buttons",
                settingsToggler: "ce-toolbar__settings-btn"
              };
            }
          }]), e;
        }(u.default);

        _o6.default = d, d.displayName = "Toolbar", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o = n(10),
          r = n(9).document,
          i = o(r) && o(r.createElement);

      t.exports = function (t) {
        return i ? r.createElement(t) : {};
      };
    }, function (t, e, n) {
      var o = n(16),
          r = n(9),
          i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: o.version,
        mode: n(42) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
      });
    }, function (t, e, n) {
      e.f = n(12);
    }, function (t, e, n) {
      var o = n(73)("keys"),
          r = n(41);

      t.exports = function (t) {
        return o[t] || (o[t] = r(t));
      };
    }, function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function (t, e, n) {
      var o = n(33);

      t.exports = Array.isArray || function (t) {
        return "Array" == o(t);
      };
    }, function (t, e, n) {
      var o = n(9).document;
      t.exports = o && o.documentElement;
    }, function (t, e, n) {
      var o = n(10),
          r = n(11),
          i = function i(t, e) {
        if (r(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
      };

      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
          try {
            (o = n(31)(Function.call, n(26).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
          } catch (t) {
            e = !0;
          }

          return function (t, n) {
            return i(t, n), e ? t.__proto__ = n : o(t, n), t;
          };
        }({}, !1) : void 0),
        check: i
      };
    }, function (t, e) {
      t.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }, function (t, e, n) {
      var o = n(10),
          r = n(79).set;

      t.exports = function (t, e, n) {
        var i,
            a = e.constructor;
        return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t;
      };
    }, function (t, e, n) {

      var o = n(35),
          r = n(34);

      t.exports = function (t) {
        var e = String(r(this)),
            n = "",
            i = o(t);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");

        for (; i > 0; (i >>>= 1) && (e += e)) {
          1 & i && (n += e);
        }

        return n;
      };
    }, function (t, e) {
      t.exports = Math.sign || function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
    }, function (t, e) {
      var n = Math.expm1;
      t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
      } : n;
    }, function (t, e, n) {

      var o = n(42),
          r = n(0),
          i = n(19),
          a = n(22),
          s = n(50),
          c = n(113),
          u = n(49),
          l = n(47),
          f = n(12)("iterator"),
          d = !([].keys && "next" in [].keys()),
          p = function p() {
        return this;
      };

      t.exports = function (t, e, n, h, v, g, y) {
        c(n, e, h);

        var b,
            m,
            k,
            x = function x(t) {
          if (!d && t in T) return T[t];

          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new n(this, t);
              };
          }

          return function () {
            return new n(this, t);
          };
        },
            w = e + " Iterator",
            S = "values" == v,
            E = !1,
            T = t.prototype,
            _ = T[f] || T["@@iterator"] || v && T[v],
            B = _ || x(v),
            C = v ? S ? x("entries") : B : void 0,
            O = "Array" == e && T.entries || _;

        if (O && (k = l(O.call(new t()))) !== Object.prototype && k.next && (u(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && _ && "values" !== _.name && (E = !0, B = function B() {
          return _.call(this);
        }), o && !y || !d && !E && T[f] || a(T, f, B), s[e] = B, s[w] = p, v) if (b = {
          values: S ? B : x("values"),
          keys: g ? B : x("keys"),
          entries: C
        }, y) for (m in b) {
          m in T || i(T, m, b[m]);
        } else r(r.P + r.F * (d || E), e, b);
        return b;
      };
    }, function (t, e, n) {
      var o = n(87),
          r = n(34);

      t.exports = function (t, e, n) {
        if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(r(t));
      };
    }, function (t, e, n) {
      var o = n(10),
          r = n(33),
          i = n(12)("match");

      t.exports = function (t) {
        var e;
        return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
      };
    }, function (t, e, n) {
      var o = n(12)("match");

      t.exports = function (t) {
        var e = /./;

        try {
          "/./"[t](e);
        } catch (n) {
          try {
            return e[o] = !1, !"/./"[t](e);
          } catch (t) {}
        }

        return !0;
      };
    }, function (t, e, n) {
      var o = n(50),
          r = n(12)("iterator"),
          i = Array.prototype;

      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || i[r] === t);
      };
    }, function (t, e, n) {

      var o = n(14),
          r = n(40);

      t.exports = function (t, e, n) {
        e in t ? o.f(t, e, r(0, n)) : t[e] = n;
      };
    }, function (t, e, n) {
      var o = n(61),
          r = n(12)("iterator"),
          i = n(50);

      t.exports = n(16).getIteratorMethod = function (t) {
        if (null != t) return t[r] || t["@@iterator"] || i[o(t)];
      };
    }, function (t, e, n) {

      var o = n(24),
          r = n(44),
          i = n(17);

      t.exports = function (t) {
        for (var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : r(c, n); u > s;) {
          e[s++] = t;
        }

        return e;
      };
    }, function (t, e, n) {

      var o = n(51),
          r = n(117),
          i = n(50),
          a = n(23);
      t.exports = n(85)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e;
      }, function () {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, function (t, e, n) {

      var o = n(11);

      t.exports = function () {
        var t = o(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
      };
    }, function (t, e, n) {
      var o,
          r,
          i,
          a = n(31),
          s = n(106),
          c = n(78),
          u = n(72),
          l = n(9),
          f = l.process,
          d = l.setImmediate,
          p = l.clearImmediate,
          h = l.MessageChannel,
          v = l.Dispatch,
          g = 0,
          y = {},
          b = function b() {
        var t = +this;

        if (y.hasOwnProperty(t)) {
          var e = y[t];
          delete y[t], e();
        }
      },
          m = function m(t) {
        b.call(t.data);
      };

      d && p || (d = function d(t) {
        for (var e = [], n = 1; arguments.length > n;) {
          e.push(arguments[n++]);
        }

        return y[++g] = function () {
          s("function" == typeof t ? t : Function(t), e);
        }, o(g), g;
      }, p = function p(t) {
        delete y[t];
      }, "process" == n(33)(f) ? o = function o(t) {
        f.nextTick(a(b, t, 1));
      } : v && v.now ? o = function o(t) {
        v.now(a(b, t, 1));
      } : h ? (i = (r = new h()).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function o(t) {
        l.postMessage(t + "", "*");
      }, l.addEventListener("message", m, !1)) : o = "onreadystatechange" in u("script") ? function (t) {
        c.appendChild(u("script")).onreadystatechange = function () {
          c.removeChild(this), b.call(t);
        };
      } : function (t) {
        setTimeout(a(b, t, 1), 0);
      }), t.exports = {
        set: d,
        clear: p
      };
    }, function (t, e, n) {

      var o = n(9),
          r = n(15),
          i = n(42),
          a = n(69),
          s = n(22),
          c = n(54),
          u = n(8),
          l = n(53),
          f = n(35),
          d = n(17),
          p = n(124),
          h = n(46).f,
          v = n(14).f,
          g = n(92),
          y = n(49),
          b = "prototype",
          m = "Wrong index!",
          _k2 = o.ArrayBuffer,
          _x = o.DataView,
          w = o.Math,
          S = o.RangeError,
          E = o.Infinity,
          T = _k2,
          _ = w.abs,
          B = w.pow,
          C = w.floor,
          O = w.log,
          I = w.LN2,
          N = r ? "_b" : "buffer",
          M = r ? "_l" : "byteLength",
          A = r ? "_o" : "byteOffset";

      function L(t, e, n) {
        var o,
            r,
            i,
            a = new Array(n),
            s = 8 * n - e - 1,
            c = (1 << s) - 1,
            u = c >> 1,
            l = 23 === e ? B(2, -24) - B(2, -77) : 0,
            f = 0,
            d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for ((t = _(t)) != t || t === E ? (r = t != t ? 1 : 0, o = c) : (o = C(O(t) / I), t * (i = B(2, -o)) < 1 && (o--, i *= 2), (t += o + u >= 1 ? l / i : l * B(2, 1 - u)) * i >= 2 && (o++, i /= 2), o + u >= c ? (r = 0, o = c) : o + u >= 1 ? (r = (t * i - 1) * B(2, e), o += u) : (r = t * B(2, u - 1) * B(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8) {
        }

        for (o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8) {
        }

        return a[--f] |= 128 * d, a;
      }

      function P(t, e, n) {
        var o,
            r = 8 * n - e - 1,
            i = (1 << r) - 1,
            a = i >> 1,
            s = r - 7,
            c = n - 1,
            u = t[c--],
            l = 127 & u;

        for (u >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8) {
        }

        for (o = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; o = 256 * o + t[c], c--, s -= 8) {
        }

        if (0 === l) l = 1 - a;else {
          if (l === i) return o ? NaN : u ? -E : E;
          o += B(2, e), l -= a;
        }
        return (u ? -1 : 1) * o * B(2, l - e);
      }

      function R(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
      }

      function j(t) {
        return [255 & t];
      }

      function F(t) {
        return [255 & t, t >> 8 & 255];
      }

      function D(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
      }

      function U(t) {
        return L(t, 52, 8);
      }

      function H(t) {
        return L(t, 23, 4);
      }

      function z(t, e, n) {
        v(t[b], e, {
          get: function get() {
            return this[n];
          }
        });
      }

      function W(t, e, n, o) {
        var r = p(+n);
        if (r + e > t[M]) throw S(m);
        var i = t[N]._b,
            a = r + t[A],
            s = i.slice(a, a + e);
        return o ? s : s.reverse();
      }

      function G(t, e, n, o, r, i) {
        var a = p(+n);
        if (a + e > t[M]) throw S(m);

        for (var s = t[N]._b, c = a + t[A], u = o(+r), l = 0; l < e; l++) {
          s[c + l] = u[i ? l : e - l - 1];
        }
      }

      if (a.ABV) {
        if (!u(function () {
          _k2(1);
        }) || !u(function () {
          new _k2(-1);
        }) || u(function () {
          return new _k2(), new _k2(1.5), new _k2(NaN), "ArrayBuffer" != _k2.name;
        })) {
          for (var V, X = (_k2 = function k(t) {
            return l(this, _k2), new T(p(t));
          })[b] = T[b], Y = h(T), K = 0; Y.length > K;) {
            (V = Y[K++]) in _k2 || s(_k2, V, T[V]);
          }

          i || (X.constructor = _k2);
        }

        var Z = new _x(new _k2(2)),
            q = _x[b].setInt8;
        Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || c(_x[b], {
          setInt8: function setInt8(t, e) {
            q.call(this, t, e << 24 >> 24);
          },
          setUint8: function setUint8(t, e) {
            q.call(this, t, e << 24 >> 24);
          }
        }, !0);
      } else _k2 = function _k(t) {
        l(this, _k2, "ArrayBuffer");
        var e = p(t);
        this._b = g.call(new Array(e), 0), this[M] = e;
      }, _x = function x(t, e, n) {
        l(this, _x, "DataView"), l(t, _k2, "DataView");
        var o = t[M],
            r = f(e);
        if (r < 0 || r > o) throw S("Wrong offset!");
        if (r + (n = void 0 === n ? o - r : d(n)) > o) throw S("Wrong length!");
        this[N] = t, this[A] = r, this[M] = n;
      }, r && (z(_k2, "byteLength", "_l"), z(_x, "buffer", "_b"), z(_x, "byteLength", "_l"), z(_x, "byteOffset", "_o")), c(_x[b], {
        getInt8: function getInt8(t) {
          return W(this, 1, t)[0] << 24 >> 24;
        },
        getUint8: function getUint8(t) {
          return W(this, 1, t)[0];
        },
        getInt16: function getInt16(t) {
          var e = W(this, 2, t, arguments[1]);
          return (e[1] << 8 | e[0]) << 16 >> 16;
        },
        getUint16: function getUint16(t) {
          var e = W(this, 2, t, arguments[1]);
          return e[1] << 8 | e[0];
        },
        getInt32: function getInt32(t) {
          return R(W(this, 4, t, arguments[1]));
        },
        getUint32: function getUint32(t) {
          return R(W(this, 4, t, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(t) {
          return P(W(this, 4, t, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(t) {
          return P(W(this, 8, t, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(t, e) {
          G(this, 1, t, j, e);
        },
        setUint8: function setUint8(t, e) {
          G(this, 1, t, j, e);
        },
        setInt16: function setInt16(t, e) {
          G(this, 2, t, F, e, arguments[2]);
        },
        setUint16: function setUint16(t, e) {
          G(this, 2, t, F, e, arguments[2]);
        },
        setInt32: function setInt32(t, e) {
          G(this, 4, t, D, e, arguments[2]);
        },
        setUint32: function setUint32(t, e) {
          G(this, 4, t, D, e, arguments[2]);
        },
        setFloat32: function setFloat32(t, e) {
          G(this, 4, t, H, e, arguments[2]);
        },
        setFloat64: function setFloat64(t, e) {
          G(this, 8, t, U, e, arguments[2]);
        }
      });

      y(_k2, "ArrayBuffer"), y(_x, "DataView"), s(_x[b], a.VIEW, !0), e.ArrayBuffer = _k2, e.DataView = _x;
    }, function (t, e, n) {
      var o = n(335),
          r = n(336),
          i = n(337);

      t.exports = function (t) {
        return o(t) || r(t) || i();
      };
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(97), n(29), n(30), n(1), n(2), n(13), n(18), n(342), n(343), n(344), n(37)], void 0 === (i = "function" == typeof (o = function o(_o7, r, i, a, s, c, u, l, f, d, p, h) {

        var v = n(3);
        Object.defineProperty(_o7, "__esModule", {
          value: !0
        }), _o7.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), c = v(c), u = v(u), l = v(l), f = v(f), d = v(d), p = v(p), h = v(h);

        var g = function () {
          function t(e, n, o, r, i) {
            var a = this;
            (0, s.default)(this, t), this.inputIndex = 0, this.didMutated = function () {
              a.updateCurrentInput();
            }, this.name = e, this.tool = n, this.class = o, this.settings = r, this.api = i, this.holder = this.compose(), this.mutationObserver = new MutationObserver(this.didMutated), this.tunes = this.makeTunes();
          }

          var e, n, o;
          return (0, c.default)(t, [{
            key: "call",
            value: function value(t, e) {
              this.tool[t] && this.tool[t] instanceof Function && this.tool[t].call(this.tool, e);
            }
          }, {
            key: "mergeWith",
            value: (o = (0, a.default)(i.default.mark(function t(e) {
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, this.tool.merge(e);

                    case 2:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return o.apply(this, arguments);
            })
          }, {
            key: "save",
            value: (n = (0, a.default)(i.default.mark(function t() {
              var e,
                  n,
                  o,
                  r = this;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, this.tool.save(this.pluginsContent);

                    case 2:
                      return e = t.sent, n = window.performance.now(), t.abrupt("return", Promise.resolve(e).then(function (t) {
                        return o = window.performance.now(), {
                          tool: r.name,
                          data: t,
                          time: o - n
                        };
                      }).catch(function (t) {
                        l.default.log("Saving proccess for ".concat(r.name, " tool failed due to the ").concat(t), "log", "red");
                      }));

                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return n.apply(this, arguments);
            })
          }, {
            key: "validate",
            value: (e = (0, a.default)(i.default.mark(function t(e) {
              var n;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = !0, !(this.tool.validate instanceof Function)) {
                        t.next = 5;
                        break;
                      }

                      return t.next = 4, this.tool.validate(e);

                    case 4:
                      n = t.sent;

                    case 5:
                      return t.abrupt("return", n);

                    case 6:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return e.apply(this, arguments);
            })
          }, {
            key: "makeTunes",
            value: function value() {
              var t = this,
                  e = [f.default, d.default, p.default];
              return e.map(function (e) {
                return new e({
                  api: t.api,
                  settings: t.settings
                });
              });
            }
          }, {
            key: "renderTunes",
            value: function value() {
              var t = document.createDocumentFragment();
              return this.tunes.forEach(function (e) {
                u.default.append(t, e.render());
              }), t;
            }
          }, {
            key: "updateCurrentInput",
            value: function value() {
              this.currentInput = h.default.anchorNode;
            }
          }, {
            key: "willSelect",
            value: function value() {
              this.mutationObserver.observe(this.holder, {
                childList: !0,
                subtree: !0
              });
            }
          }, {
            key: "willUnselect",
            value: function value() {
              this.mutationObserver.disconnect();
            }
          }, {
            key: "compose",
            value: function value() {
              var e = u.default.make("div", t.CSS.wrapper),
                  n = u.default.make("div", t.CSS.content),
                  o = this.tool.render();
              return n.appendChild(o), e.appendChild(n), e;
            }
          }, {
            key: "inputs",
            get: function get() {
              var t = this.holder,
                  e = "[contenteditable], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function (t) {
                return 'input[type="'.concat(t, '"]');
              }).join(", "),
                  n = l.default.array(t.querySelectorAll(e));
              return n = n.reduce(function (t, e) {
                return u.default.isNativeInput(e) || u.default.containsOnlyInlineElements(e) ? [].concat((0, r.default)(t), [e]) : [].concat((0, r.default)(t), (0, r.default)(u.default.getDeepestBlockElements(e)));
              }, []), this.inputIndex > n.length - 1 && (this.inputIndex = n.length - 1), n;
            }
          }, {
            key: "currentInput",
            get: function get() {
              return this.inputs[this.inputIndex];
            },
            set: function set(t) {
              var e = this.inputs.findIndex(function (e) {
                return e === t || e.contains(t);
              });
              -1 !== e && (this.inputIndex = e);
            }
          }, {
            key: "firstInput",
            get: function get() {
              return this.inputs[0];
            }
          }, {
            key: "lastInput",
            get: function get() {
              var t = this.inputs;
              return t[t.length - 1];
            }
          }, {
            key: "nextInput",
            get: function get() {
              return this.inputs[this.inputIndex + 1];
            }
          }, {
            key: "previousInput",
            get: function get() {
              return this.inputs[this.inputIndex - 1];
            }
          }, {
            key: "pluginsContent",
            get: function get() {
              var e = this.holder.querySelector(".".concat(t.CSS.content));
              return e && e.childNodes.length ? e.childNodes[0] : null;
            }
          }, {
            key: "data",
            get: function get() {
              return this.save().then(function (t) {
                return t && !l.default.isEmpty(t.data) ? t.data : {};
              });
            }
          }, {
            key: "sanitize",
            get: function get() {
              return this.tool.sanitize;
            }
          }, {
            key: "mergeable",
            get: function get() {
              return "function" == typeof this.tool.merge;
            }
          }, {
            key: "isEmpty",
            get: function get() {
              var t = u.default.isEmpty(this.pluginsContent),
                  e = !this.hasMedia;
              return t && e;
            }
          }, {
            key: "hasMedia",
            get: function get() {
              return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
            }
          }, {
            key: "focused",
            set: function set(e) {
              this.holder.classList.toggle(t.CSS.focused, e);
            }
          }, {
            key: "selected",
            set: function set(e) {
              e ? this.holder.classList.add(t.CSS.selected) : this.holder.classList.remove(t.CSS.selected);
            },
            get: function get() {
              return this.holder.classList.contains(t.CSS.selected);
            }
          }, {
            key: "stretched",
            set: function set(e) {
              this.holder.classList.toggle(t.CSS.wrapperStretched, e);
            }
          }, {
            key: "dropTarget",
            set: function set(e) {
              this.holder.classList.toggle(t.CSS.dropTarget, e);
            }
          }], [{
            key: "CSS",
            get: function get() {
              return {
                wrapper: "ce-block",
                wrapperStretched: "ce-block--stretched",
                content: "ce-block__content",
                focused: "ce-block--focused",
                selected: "ce-block--selected",
                dropTarget: "ce-block--drop-target"
              };
            }
          }]), t;
        }();

        _o7.default = g, g.displayName = "Block", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      t.exports = !n(15) && !n(8)(function () {
        return 7 != Object.defineProperty(n(72)("div"), "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e, n) {
      var o = n(9),
          r = n(16),
          i = n(42),
          a = n(74),
          s = n(14).f;

      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
          value: a.f(t)
        });
      };
    }, function (t, e, n) {
      var o = n(21),
          r = n(23),
          i = n(59)(!1),
          a = n(75)("IE_PROTO");

      t.exports = function (t, e) {
        var n,
            s = r(t),
            c = 0,
            u = [];

        for (n in s) {
          n != a && o(s, n) && u.push(n);
        }

        for (; e.length > c;) {
          o(s, n = e[c++]) && (~i(u, n) || u.push(n));
        }

        return u;
      };
    }, function (t, e, n) {
      var o = n(14),
          r = n(11),
          i = n(43);
      t.exports = n(15) ? Object.defineProperties : function (t, e) {
        r(t);

        for (var n, a = i(e), s = a.length, c = 0; s > c;) {
          o.f(t, n = a[c++], e[n]);
        }

        return t;
      };
    }, function (t, e, n) {
      var o = n(23),
          r = n(46).f,
          i = {}.toString,
          a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      t.exports.f = function (t) {
        return a && "[object Window]" == i.call(t) ? function (t) {
          try {
            return r(t);
          } catch (t) {
            return a.slice();
          }
        }(t) : r(o(t));
      };
    }, function (t, e, n) {

      var o = n(43),
          r = n(60),
          i = n(57),
          a = n(24),
          s = n(56),
          c = Object.assign;
      t.exports = !c || n(8)(function () {
        var t = {},
            e = {},
            n = Symbol(),
            o = "abcdefghijklmnopqrst";
        return t[n] = 7, o.split("").forEach(function (t) {
          e[t] = t;
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o;
      }) ? function (t, e) {
        for (var n = a(t), c = arguments.length, u = 1, l = r.f, f = i.f; c > u;) {
          for (var d, p = s(arguments[u++]), h = l ? o(p).concat(l(p)) : o(p), v = h.length, g = 0; v > g;) {
            f.call(p, d = h[g++]) && (n[d] = p[d]);
          }
        }

        return n;
      } : c;
    }, function (t, e, n) {

      var o = n(32),
          r = n(10),
          i = n(106),
          a = [].slice,
          s = {};

      t.exports = Function.bind || function (t) {
        var e = o(this),
            n = a.call(arguments, 1),
            c = function c() {
          var o = n.concat(a.call(arguments));
          return this instanceof c ? function (t, e, n) {
            if (!(e in s)) {
              for (var o = [], r = 0; r < e; r++) {
                o[r] = "a[" + r + "]";
              }

              s[e] = Function("F,a", "return new F(" + o.join(",") + ")");
            }

            return s[e](t, n);
          }(e, o.length, o) : i(e, o, t);
        };

        return r(e.prototype) && (c.prototype = e.prototype), c;
      };
    }, function (t, e) {
      t.exports = function (t, e, n) {
        var o = void 0 === n;

        switch (e.length) {
          case 0:
            return o ? t() : t.call(n);

          case 1:
            return o ? t(e[0]) : t.call(n, e[0]);

          case 2:
            return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

          case 3:
            return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

          case 4:
            return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
        }

        return t.apply(n, e);
      };
    }, function (t, e, n) {
      var o = n(9).parseInt,
          r = n(62).trim,
          i = n(80),
          a = /^[-+]?0[xX]/;
      t.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function (t, e) {
        var n = r(String(t), 3);
        return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
      } : o;
    }, function (t, e, n) {
      var o = n(9).parseFloat,
          r = n(62).trim;
      t.exports = 1 / o(n(80) + "-0") != -1 / 0 ? function (t) {
        var e = r(String(t), 3),
            n = o(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n;
      } : o;
    }, function (t, e, n) {
      var o = n(33);

      t.exports = function (t, e) {
        if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
        return +t;
      };
    }, function (t, e, n) {
      var o = n(10),
          r = Math.floor;

      t.exports = function (t) {
        return !o(t) && isFinite(t) && r(t) === t;
      };
    }, function (t, e) {
      t.exports = Math.log1p || function (t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
      };
    }, function (t, e, n) {
      var o = n(35),
          r = n(34);

      t.exports = function (t) {
        return function (e, n) {
          var i,
              a,
              s = String(r(e)),
              c = o(n),
              u = s.length;
          return c < 0 || c >= u ? t ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536;
        };
      };
    }, function (t, e, n) {

      var o = n(45),
          r = n(40),
          i = n(49),
          a = {};
      n(22)(a, n(12)("iterator"), function () {
        return this;
      }), t.exports = function (t, e, n) {
        t.prototype = o(a, {
          next: r(1, n)
        }), i(t, e + " Iterator");
      };
    }, function (t, e, n) {
      var o = n(11);

      t.exports = function (t, e, n, r) {
        try {
          return r ? e(o(n)[0], n[1]) : e(n);
        } catch (e) {
          var i = t.return;
          throw void 0 !== i && o(i.call(t)), e;
        }
      };
    }, function (t, e, n) {
      var o = n(32),
          r = n(24),
          i = n(56),
          a = n(17);

      t.exports = function (t, e, n, s, c) {
        o(e);
        var u = r(t),
            l = i(u),
            f = a(u.length),
            d = c ? f - 1 : 0,
            p = c ? -1 : 1;
        if (n < 2) for (;;) {
          if (d in l) {
            s = l[d], d += p;
            break;
          }

          if (d += p, c ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; c ? d >= 0 : f > d; d += p) {
          d in l && (s = e(s, l[d], d, u));
        }

        return s;
      };
    }, function (t, e, n) {

      var o = n(24),
          r = n(44),
          i = n(17);

      t.exports = [].copyWithin || function (t, e) {
        var n = o(this),
            a = i(n.length),
            s = r(t, a),
            c = r(e, a),
            u = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === u ? a : r(u, a)) - c, a - s),
            f = 1;

        for (c < s && s < c + l && (f = -1, c += l - 1, s += l - 1); l-- > 0;) {
          c in n ? n[s] = n[c] : delete n[s], s += f, c += f;
        }

        return n;
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          value: e,
          done: !!t
        };
      };
    }, function (t, e, n) {
      n(15) && "g" != /./g.flags && n(14).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(94)
      });
    }, function (t, e, n) {

      var o,
          r,
          i,
          a,
          s = n(42),
          c = n(9),
          u = n(31),
          l = n(61),
          f = n(0),
          d = n(10),
          p = n(32),
          h = n(53),
          v = n(65),
          g = n(66),
          y = n(95).set,
          b = n(275)(),
          m = n(120),
          k = n(276),
          x = n(67),
          w = n(121),
          S = c.TypeError,
          E = c.process,
          T = E && E.versions,
          _ = T && T.v8 || "",
          _B = c.Promise,
          C = "process" == l(E),
          O = function O() {},
          I = r = m.f,
          N = !!function () {
        try {
          var t = _B.resolve(1),
              e = (t.constructor = {})[n(12)("species")] = function (t) {
            t(O, O);
          };

          return (C || "function" == typeof PromiseRejectionEvent) && t.then(O) instanceof e && 0 !== _.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
        } catch (t) {}
      }(),
          M = function M(t) {
        var e;
        return !(!d(t) || "function" != typeof (e = t.then)) && e;
      },
          A = function A(t, e) {
        if (!t._n) {
          t._n = !0;
          var n = t._c;
          b(function () {
            for (var o = t._v, r = 1 == t._s, i = 0, a = function a(e) {
              var n,
                  i,
                  a,
                  s = r ? e.ok : e.fail,
                  c = e.resolve,
                  u = e.reject,
                  l = e.domain;

              try {
                s ? (r || (2 == t._h && R(t), t._h = 1), !0 === s ? n = o : (l && l.enter(), n = s(o), l && (l.exit(), a = !0)), n === e.promise ? u(S("Promise-chain cycle")) : (i = M(n)) ? i.call(n, c, u) : c(n)) : u(o);
              } catch (t) {
                l && !a && l.exit(), u(t);
              }
            }; n.length > i;) {
              a(n[i++]);
            }

            t._c = [], t._n = !1, e && !t._h && L(t);
          });
        }
      },
          L = function L(t) {
        y.call(c, function () {
          var e,
              n,
              o,
              r = t._v,
              i = P(t);
          if (i && (e = k(function () {
            C ? E.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
              promise: t,
              reason: r
            }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", r);
          }), t._h = C || P(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
        });
      },
          P = function P(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
          R = function R(t) {
        y.call(c, function () {
          var e;
          C ? E.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
            promise: t,
            reason: t._v
          });
        });
      },
          j = function j(t) {
        var e = this;
        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0));
      },
          F = function F(t) {
        var e,
            n = this;

        if (!n._d) {
          n._d = !0, n = n._w || n;

          try {
            if (n === t) throw S("Promise can't be resolved itself");
            (e = M(t)) ? b(function () {
              var o = {
                _w: n,
                _d: !1
              };

              try {
                e.call(t, u(F, o, 1), u(j, o, 1));
              } catch (t) {
                j.call(o, t);
              }
            }) : (n._v = t, n._s = 1, A(n, !1));
          } catch (t) {
            j.call({
              _w: n,
              _d: !1
            }, t);
          }
        }
      };

      N || (_B = function B(t) {
        h(this, _B, "Promise", "_h"), p(t), o.call(this);

        try {
          t(u(F, this, 1), u(j, this, 1));
        } catch (t) {
          j.call(this, t);
        }
      }, (o = function o(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }).prototype = n(54)(_B.prototype, {
        then: function then(t, e) {
          var n = I(g(this, _B));
          return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = C ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise;
        },
        catch: function _catch(t) {
          return this.then(void 0, t);
        }
      }), i = function i() {
        var t = new o();
        this.promise = t, this.resolve = u(F, t, 1), this.reject = u(j, t, 1);
      }, m.f = I = function I(t) {
        return t === _B || t === a ? new i(t) : r(t);
      }), f(f.G + f.W + f.F * !N, {
        Promise: _B
      }), n(49)(_B, "Promise"), n(52)("Promise"), a = n(16).Promise, f(f.S + f.F * !N, "Promise", {
        reject: function reject(t) {
          var e = I(this);
          return (0, e.reject)(t), e.promise;
        }
      }), f(f.S + f.F * (s || !N), "Promise", {
        resolve: function resolve(t) {
          return w(s && this === a ? _B : this, t);
        }
      }), f(f.S + f.F * !(N && n(63)(function (t) {
        _B.all(t).catch(O);
      })), "Promise", {
        all: function all(t) {
          var e = this,
              n = I(e),
              o = n.resolve,
              r = n.reject,
              i = k(function () {
            var n = [],
                i = 0,
                a = 1;
            v(t, !1, function (t) {
              var s = i++,
                  c = !1;
              n.push(void 0), a++, e.resolve(t).then(function (t) {
                c || (c = !0, n[s] = t, --a || o(n));
              }, r);
            }), --a || o(n);
          });
          return i.e && r(i.v), n.promise;
        },
        race: function race(t) {
          var e = this,
              n = I(e),
              o = n.reject,
              r = k(function () {
            v(t, !1, function (t) {
              e.resolve(t).then(n.resolve, o);
            });
          });
          return r.e && o(r.v), n.promise;
        }
      });
    }, function (t, e, n) {

      var o = n(32);

      function r(t) {
        var e, n;
        this.promise = new t(function (t, o) {
          if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
          e = t, n = o;
        }), this.resolve = o(e), this.reject = o(n);
      }

      t.exports.f = function (t) {
        return new r(t);
      };
    }, function (t, e, n) {
      var o = n(11),
          r = n(10),
          i = n(120);

      t.exports = function (t, e) {
        if (o(t), r(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise;
      };
    }, function (t, e, n) {

      var o = n(14).f,
          r = n(45),
          i = n(54),
          a = n(31),
          s = n(53),
          c = n(65),
          u = n(85),
          l = n(117),
          f = n(52),
          d = n(15),
          p = n(39).fastKey,
          h = n(55),
          v = d ? "_s" : "size",
          g = function g(t, e) {
        var n,
            o = p(e);
        if ("F" !== o) return t._i[o];

        for (n = t._f; n; n = n.n) {
          if (n.k == e) return n;
        }
      };

      t.exports = {
        getConstructor: function getConstructor(t, e, n, u) {
          var l = t(function (t, o) {
            s(t, l, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && c(o, n, t[u], t);
          });
          return i(l.prototype, {
            clear: function clear() {
              for (var t = h(this, e), n = t._i, o = t._f; o; o = o.n) {
                o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
              }

              t._f = t._l = void 0, t[v] = 0;
            },
            delete: function _delete(t) {
              var n = h(this, e),
                  o = g(n, t);

              if (o) {
                var r = o.n,
                    i = o.p;
                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--;
              }

              return !!o;
            },
            forEach: function forEach(t) {
              h(this, e);

              for (var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) {
                for (o(n.v, n.k, this); n && n.r;) {
                  n = n.p;
                }
              }
            },
            has: function has(t) {
              return !!g(h(this, e), t);
            }
          }), d && o(l.prototype, "size", {
            get: function get() {
              return h(this, e)[v];
            }
          }), l;
        },
        def: function def(t, e, n) {
          var o,
              r,
              i = g(t, e);
          return i ? i.v = n : (t._l = i = {
            i: r = p(e, !0),
            k: e,
            v: n,
            p: o = t._l,
            n: void 0,
            r: !1
          }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t;
        },
        getEntry: g,
        setStrong: function setStrong(t, e, n) {
          u(t, e, function (t, n) {
            this._t = h(t, e), this._k = n, this._l = void 0;
          }, function () {
            for (var t = this._k, e = this._l; e && e.r;) {
              e = e.p;
            }

            return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1));
          }, n ? "entries" : "values", !n, !0), f(e);
        }
      };
    }, function (t, e, n) {

      var o = n(54),
          r = n(39).getWeak,
          i = n(11),
          a = n(10),
          s = n(53),
          c = n(65),
          u = n(28),
          l = n(21),
          f = n(55),
          d = u(5),
          p = u(6),
          h = 0,
          v = function v(t) {
        return t._l || (t._l = new g());
      },
          g = function g() {
        this.a = [];
      },
          y = function y(t, e) {
        return d(t.a, function (t) {
          return t[0] === e;
        });
      };

      g.prototype = {
        get: function get(t) {
          var e = y(this, t);
          if (e) return e[1];
        },
        has: function has(t) {
          return !!y(this, t);
        },
        set: function set(t, e) {
          var n = y(this, t);
          n ? n[1] = e : this.a.push([t, e]);
        },
        delete: function _delete(t) {
          var e = p(this.a, function (e) {
            return e[0] === t;
          });
          return ~e && this.a.splice(e, 1), !!~e;
        }
      }, t.exports = {
        getConstructor: function getConstructor(t, e, n, i) {
          var u = t(function (t, o) {
            s(t, u, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && c(o, n, t[i], t);
          });
          return o(u.prototype, {
            delete: function _delete(t) {
              if (!a(t)) return !1;
              var n = r(t);
              return !0 === n ? v(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i];
            },
            has: function has(t) {
              if (!a(t)) return !1;
              var n = r(t);
              return !0 === n ? v(f(this, e)).has(t) : n && l(n, this._i);
            }
          }), u;
        },
        def: function def(t, e, n) {
          var o = r(i(e), !0);
          return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
        },
        ufstore: v
      };
    }, function (t, e, n) {
      var o = n(35),
          r = n(17);

      t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = o(t),
            n = r(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n;
      };
    }, function (t, e, n) {
      var o = n(46),
          r = n(60),
          i = n(11),
          a = n(9).Reflect;

      t.exports = a && a.ownKeys || function (t) {
        var e = o.f(i(t)),
            n = r.f;
        return n ? e.concat(n(t)) : e;
      };
    }, function (t, e, n) {
      var o = n(17),
          r = n(82),
          i = n(34);

      t.exports = function (t, e, n, a) {
        var s = String(i(t)),
            c = s.length,
            u = void 0 === n ? " " : String(n),
            l = o(e);
        if (l <= c || "" == u) return s;
        var f = l - c,
            d = r.call(u, Math.ceil(f / u.length));
        return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
      };
    }, function (t, e, n) {
      var o = n(43),
          r = n(23),
          i = n(57).f;

      t.exports = function (t) {
        return function (e) {
          for (var n, a = r(e), s = o(a), c = s.length, u = 0, l = []; c > u;) {
            i.call(a, n = s[u++]) && l.push(t ? [n, a[n]] : a[n]);
          }

          return l;
        };
      };
    }, function (t, e) {
      !function (e) {

        var n,
            o = Object.prototype,
            r = o.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag",
            u = "object" == _typeof(t),
            l = e.regeneratorRuntime;

        if (l) u && (t.exports = l);else {
          (l = e.regeneratorRuntime = u ? t.exports : {}).wrap = k;
          var f = "suspendedStart",
              d = "suspendedYield",
              p = "executing",
              h = "completed",
              v = {},
              g = {};

          g[a] = function () {
            return this;
          };

          var y = Object.getPrototypeOf,
              b = y && y(y(N([])));
          b && b !== o && r.call(b, a) && (g = b);
          var m = E.prototype = w.prototype = Object.create(g);
          S.prototype = m.constructor = E, E.constructor = S, E[c] = S.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === S || "GeneratorFunction" === (e.displayName || e.name));
          }, l.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(m), t;
          }, l.awrap = function (t) {
            return {
              __await: t
            };
          }, T(_.prototype), _.prototype[s] = function () {
            return this;
          }, l.AsyncIterator = _, l.async = function (t, e, n, o) {
            var r = new _(k(t, e, n, o));
            return l.isGeneratorFunction(e) ? r : r.next().then(function (t) {
              return t.done ? t.value : r.next();
            });
          }, T(m), m[c] = "Generator", m[a] = function () {
            return this;
          }, m.toString = function () {
            return "[object Generator]";
          }, l.keys = function (t) {
            var e = [];

            for (var n in t) {
              e.push(n);
            }

            return e.reverse(), function n() {
              for (; e.length;) {
                var o = e.pop();
                if (o in t) return n.value = o, n.done = !1, n;
              }

              return n.done = !0, n;
            };
          }, l.values = N, I.prototype = {
            constructor: I,
            reset: function reset(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(O), !t) for (var e in this) {
                "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
              }
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(t) {
              if (this.done) throw t;
              var e = this;

              function o(o, r) {
                return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = n), !!r;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                    s = a.completion;
                if ("root" === a.tryLoc) return o("end");

                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, "catchLoc"),
                      u = r.call(a, "finallyLoc");

                  if (c && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];

                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }

              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a);
            },
            complete: function complete(t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
            },
            finish: function finish(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function _catch(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];

                if (n.tryLoc === t) {
                  var o = n.completion;

                  if ("throw" === o.type) {
                    var r = o.arg;
                    O(n);
                  }

                  return r;
                }
              }

              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(t, e, o) {
              return this.delegate = {
                iterator: N(t),
                resultName: e,
                nextLoc: o
              }, "next" === this.method && (this.arg = n), v;
            }
          };
        }

        function k(t, e, n, o) {
          var r = e && e.prototype instanceof w ? e : w,
              i = Object.create(r.prototype),
              a = new I(o || []);
          return i._invoke = function (t, e, n) {
            var o = f;
            return function (r, i) {
              if (o === p) throw new Error("Generator is already running");

              if (o === h) {
                if ("throw" === r) throw i;
                return M();
              }

              for (n.method = r, n.arg = i;;) {
                var a = n.delegate;

                if (a) {
                  var s = B(a, n);

                  if (s) {
                    if (s === v) continue;
                    return s;
                  }
                }

                if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                  if (o === f) throw o = h, n.arg;
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = p;
                var c = x(t, e, n);

                if ("normal" === c.type) {
                  if (o = n.done ? h : d, c.arg === v) continue;
                  return {
                    value: c.arg,
                    done: n.done
                  };
                }

                "throw" === c.type && (o = h, n.method = "throw", n.arg = c.arg);
              }
            };
          }(t, n, a), i;
        }

        function x(t, e, n) {
          try {
            return {
              type: "normal",
              arg: t.call(e, n)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }

        function w() {}

        function S() {}

        function E() {}

        function T(t) {
          ["next", "throw", "return"].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t);
            };
          });
        }

        function _(t) {
          var e;

          this._invoke = function (n, o) {
            function i() {
              return new Promise(function (e, i) {
                !function e(n, o, i, a) {
                  var s = x(t[n], t, o);

                  if ("throw" !== s.type) {
                    var c = s.arg,
                        u = c.value;
                    return u && "object" == _typeof(u) && r.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                      e("next", t, i, a);
                    }, function (t) {
                      e("throw", t, i, a);
                    }) : Promise.resolve(u).then(function (t) {
                      c.value = t, i(c);
                    }, function (t) {
                      return e("throw", t, i, a);
                    });
                  }

                  a(s.arg);
                }(n, o, e, i);
              });
            }

            return e = e ? e.then(i, i) : i();
          };
        }

        function B(t, e) {
          var o = t.iterator[e.method];

          if (o === n) {
            if (e.delegate = null, "throw" === e.method) {
              if (t.iterator.return && (e.method = "return", e.arg = n, B(t, e), "throw" === e.method)) return v;
              e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return v;
          }

          var r = x(o, t.iterator, e.arg);
          if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, v;
          var i = r.arg;
          return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
        }

        function C(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }

        function O(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }

        function I(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(C, this), this.reset(!0);
        }

        function N(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;

            if (!isNaN(t.length)) {
              var o = -1,
                  i = function e() {
                for (; ++o < t.length;) {
                  if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                }

                return e.value = n, e.done = !0, e;
              };

              return i.next = i;
            }
          }

          return {
            next: M
          };
        }

        function M() {
          return {
            value: n,
            done: !0
          };
        }
      }(function () {
        return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
      }() || Function("return this")());
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o8, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o8, "__esModule", {
          value: !0
        }), _o8.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "getBlocksCount",
            value: function value() {
              return this.Editor.BlockManager.blocks.length;
            }
          }, {
            key: "getCurrentBlockIndex",
            value: function value() {
              return this.Editor.BlockManager.currentBlockIndex;
            }
          }, {
            key: "getBlockByIndex",
            value: function value(t) {
              var e = this.Editor.BlockManager.getBlockByIndex(t);
              return e.holder;
            }
          }, {
            key: "swap",
            value: function value(t, e) {
              this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1);
            }
          }, {
            key: "delete",
            value: function value(t) {
              this.Editor.BlockManager.removeBlock(t), 0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), 0 === this.Editor.BlockManager.currentBlockIndex ? this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock) : this.Editor.Caret.navigatePrevious(!0), this.Editor.Toolbar.close();
            }
          }, {
            key: "clear",
            value: function value() {
              this.Editor.BlockManager.clear(!0);
            }
          }, {
            key: "render",
            value: function value(t) {
              return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
            }
          }, {
            key: "renderFromHTML",
            value: function value(t) {
              return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
            }
          }, {
            key: "stretchBlock",
            value: function value(t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  n = this.Editor.BlockManager.getBlockByIndex(t);
              n && (n.stretched = e);
            }
          }, {
            key: "insertNewBlock",
            value: function value() {
              var t = this.Editor.BlockManager.insert();
              this.Editor.Caret.setToBlock(t);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                clear: function clear() {
                  return t.clear();
                },
                render: function render(e) {
                  return t.render(e);
                },
                renderFromHTML: function renderFromHTML(e) {
                  return t.renderFromHTML(e);
                },
                delete: function _delete() {
                  return t.delete();
                },
                swap: function swap(e, n) {
                  return t.swap(e, n);
                },
                getBlockByIndex: function getBlockByIndex(e) {
                  return t.getBlockByIndex(e);
                },
                getCurrentBlockIndex: function getCurrentBlockIndex() {
                  return t.getCurrentBlockIndex();
                },
                getBlocksCount: function getBlocksCount() {
                  return t.getBlocksCount();
                },
                stretchBlock: function stretchBlock(e) {
                  var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  return t.stretchBlock(e, n);
                },
                insertNewBlock: function insertNewBlock() {
                  return t.insertNewBlock();
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o8.default = f, f.displayName = "BlocksAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o9, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o9, "__esModule", {
          value: !0
        }), _o9.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).setToFirstBlock = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
            }, t.setToLastBlock = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
            }, t.setToPreviousBlock = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
            }, t.setToNextBlock = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
            }, t.setToBlock = function (e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
            }, t.focus = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
            }, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "methods",
            get: function get() {
              return {
                setToFirstBlock: this.setToFirstBlock,
                setToLastBlock: this.setToLastBlock,
                setToPreviousBlock: this.setToPreviousBlock,
                setToNextBlock: this.setToNextBlock,
                setToBlock: this.setToBlock,
                focus: this.focus
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o9.default = f, f.displayName = "CaretAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o10, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o10, "__esModule", {
          value: !0
        }), _o10.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "on",
            value: function value(t, e) {
              this.Editor.Events.on(t, e);
            }
          }, {
            key: "emit",
            value: function value(t, e) {
              this.Editor.Events.emit(t, e);
            }
          }, {
            key: "off",
            value: function value(t, e) {
              this.Editor.Events.off(t, e);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                emit: function emit(e, n) {
                  return t.emit(e, n);
                },
                off: function off(e, n) {
                  return t.off(e, n);
                },
                on: function on(e, n) {
                  return t.on(e, n);
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o10.default = f, f.displayName = "EventsAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o11, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o11, "__esModule", {
          value: !0
        }), _o11.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "on",
            value: function value(t, e, n, o) {
              this.Editor.Listeners.on(t, e, n, o);
            }
          }, {
            key: "off",
            value: function value(t, e, n) {
              this.Editor.Listeners.off(t, e, n);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                on: function on(e, n, o, r) {
                  return t.on(e, n, o, r);
                },
                off: function off(e, n, o) {
                  return t.off(e, n, o);
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o11.default = f, f.displayName = "ListenersAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o12, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o12, "__esModule", {
          value: !0
        }), _o12.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "show",
            value: function value(t) {
              return this.Editor.Notifier.show(t);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                show: function show(e) {
                  return t.show(e);
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o12.default = f, f.displayName = "NotifierAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o13, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o13, "__esModule", {
          value: !0
        }), _o13.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "clean",
            value: function value(t, e) {
              return this.Editor.Sanitizer.clean(t, e);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                clean: function clean(e, n) {
                  return t.clean(e, n);
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o13.default = f, f.displayName = "SanitizerAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o14, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o14, "__esModule", {
          value: !0
        }), _o14.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "save",
            value: function value() {
              return this.Editor.Saver.save();
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                save: function save() {
                  return t.save();
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o14.default = f, f.displayName = "SaverAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(37)], void 0 === (i = "function" == typeof (o = function o(_o15, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o15, "__esModule", {
          value: !0
        }), _o15.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "findParentTag",
            value: function value(t, e) {
              return new l.default().findParentTag(t, e);
            }
          }, {
            key: "expandToTag",
            value: function value(t) {
              new l.default().expandToTag(t);
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                findParentTag: function findParentTag(e, n) {
                  return t.findParentTag(e, n);
                },
                expandToTag: function expandToTag(e) {
                  return t.expandToTag(e);
                }
              };
            }
          }]), e;
        }(u.default);

        _o15.default = d, d.displayName = "SelectionAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o16, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o16, "__esModule", {
          value: !0
        }), _o16.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "classes",
            get: function get() {
              return {
                block: "cdx-block",
                inlineToolButton: "ce-inline-tool",
                inlineToolButtonActive: "ce-inline-tool--active",
                input: "cdx-input",
                loader: "cdx-loader",
                button: "cdx-button",
                settingsButton: "cdx-settings-button",
                settingsButtonActive: "cdx-settings-button--active"
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o16.default = f, f.displayName = "StylesAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o17, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o17, "__esModule", {
          value: !0
        }), _o17.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "open",
            value: function value() {
              this.Editor.Toolbar.open();
            }
          }, {
            key: "close",
            value: function value() {
              this.Editor.Toolbar.close();
            }
          }, {
            key: "methods",
            get: function get() {
              var t = this;
              return {
                close: function close() {
                  return t.close();
                },
                open: function open() {
                  return t.open();
                }
              };
            }
          }]), e;
        }((u = l(u)).default);

        _o17.default = f, f.displayName = "ToolbarAPI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(18)], void 0 === (i = "function" == typeof (o = function o(_o18, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o18, "__esModule", {
          value: !0
        }), _o18.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "keydown",
            value: function value(t) {
              switch (this.beforeKeydownProcessing(t), t.keyCode) {
                case l.default.keyCodes.BACKSPACE:
                  this.backspace(t);
                  break;

                case l.default.keyCodes.ENTER:
                  this.enter(t);
                  break;

                case l.default.keyCodes.DOWN:
                case l.default.keyCodes.RIGHT:
                  this.arrowRightAndDown(t);
                  break;

                case l.default.keyCodes.UP:
                case l.default.keyCodes.LEFT:
                  this.arrowLeftAndUp(t);
                  break;

                case l.default.keyCodes.TAB:
                  this.tabPressed(t);
                  break;

                case l.default.keyCodes.ESC:
                  this.escapePressed(t);
                  break;

                default:
                  this.defaultHandler();
              }
            }
          }, {
            key: "beforeKeydownProcessing",
            value: function value(t) {
              if (this.needToolbarClosing(t)) {
                this.Editor.Toolbar.close();
                var e = t.ctrlKey || t.metaKey,
                    n = t.altKey,
                    o = t.shiftKey;
                e || n || o || (this.Editor.BlockManager.clearFocused(), t.keyCode !== l.default.keyCodes.ENTER && t.keyCode !== l.default.keyCodes.BACKSPACE && this.Editor.BlockSelection.clearSelection(!0));
              }
            }
          }, {
            key: "keyup",
            value: function value(t) {
              this.Editor.InlineToolbar.handleShowingEvent(t);
            }
          }, {
            key: "mouseUp",
            value: function value(t) {
              this.Editor.InlineToolbar.handleShowingEvent(t);
            }
          }, {
            key: "tabPressed",
            value: function value(t) {
              var e = this.Editor.BlockManager.currentBlock;
              t.preventDefault(), t.stopPropagation();
              var n = t.shiftKey,
                  o = n ? "left" : "right";
              this.Editor.Tools.isInitial(e.tool) && (e.isEmpty && (this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open()), this.Editor.Toolbox.opened && this.Editor.Toolbox.leaf(o));
            }
          }, {
            key: "escapePressed",
            value: function value(t) {}
          }, {
            key: "dragOver",
            value: function value(t) {
              var e = this.Editor.BlockManager.getBlockByChildNode(t.target);
              e.dropTarget = !0;
            }
          }, {
            key: "dragLeave",
            value: function value(t) {
              var e = this.Editor.BlockManager.getBlockByChildNode(t.target);
              e.dropTarget = !1;
            }
          }, {
            key: "handleCommandC",
            value: function value(t) {
              var e = this.Editor.BlockSelection;
              e.anyBlockSelected && (t.preventDefault(), e.copySelectedBlocks());
            }
          }, {
            key: "handleCommandX",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockSelection,
                  o = e.BlockManager,
                  r = e.Caret;

              if (n.anyBlockSelected) {
                t.preventDefault(), n.copySelectedBlocks();
                var i = o.removeSelectedBlocks();
                r.setToBlock(o.insertAtIndex(i, !0), r.positions.START), n.clearSelection();
              }
            }
          }, {
            key: "enter",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = e.Tools,
                  r = n.currentBlock,
                  i = o.available[r.name];

              if (!i || !i[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS]) {
                if (this.Editor.Toolbox.opened && this.Editor.Toolbox.getActiveTool) return t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), void this.Editor.Toolbox.toolButtonActivate(t, this.Editor.Toolbox.getActiveTool);

                if (!t.shiftKey) {
                  var a = this.Editor.BlockManager.currentBlock;
                  this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertAtIndex(this.Editor.BlockManager.currentBlockIndex) : a = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(a), this.Editor.Tools.isInitial(a.tool) && a.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                }
              }
            }
          }, {
            key: "backspace",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = e.BlockSelection,
                  r = e.Caret,
                  i = n.currentBlock,
                  a = this.Editor.Tools.available[i.name];

              if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                t.preventDefault();
                var s = n.currentBlockIndex;
                return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection();
              }

              if (!a || !a[this.Editor.Tools.apiSettings.IS_ENABLED_LINE_BREAKS] || r.isAtStart) {
                var c = 0 === n.currentBlockIndex,
                    u = r.isAtStart && i.currentInput === i.firstInput && !c;
                u && (t.preventDefault(), this.mergeBlocks());
              }
            }
          }, {
            key: "mergeBlocks",
            value: function value() {
              var t = this.Editor,
                  e = t.BlockManager,
                  n = t.Caret,
                  o = t.Toolbar,
                  r = e.previousBlock,
                  i = e.currentBlock;
              if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
              n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then(function () {
                n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close();
              });
            }
          }, {
            key: "arrowRightAndDown",
            value: function value(t) {
              var e = this;
              this.Editor.Caret.navigateNext() ? t.preventDefault() : l.default.delay(function () {
                e.Editor.BlockManager.currentBlock.updateCurrentInput();
              }, 20)();
            }
          }, {
            key: "arrowLeftAndUp",
            value: function value(t) {
              var e = this;
              this.Editor.Caret.navigatePrevious() ? t.preventDefault() : l.default.delay(function () {
                e.Editor.BlockManager.currentBlock.updateCurrentInput();
              }, 20)();
            }
          }, {
            key: "defaultHandler",
            value: function value() {}
          }, {
            key: "needToolbarClosing",
            value: function value(t) {
              var e = t.keyCode === l.default.keyCodes.ENTER && this.Editor.Toolbox.opened,
                  n = t.keyCode === l.default.keyCodes.TAB;
              return !(t.shiftKey || n || e);
            }
          }]), e;
        }(u.default);

        _o18.default = d, d.displayName = "BlockEvents", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(98), n(7), n(13), n(18), n(345)], void 0 === (i = "function" == typeof (o = function o(_o19, r, i, a, s, c, u, l, f, d, p, h, v) {

        var g = n(3);
        Object.defineProperty(_o19, "__esModule", {
          value: !0
        }), _o19.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), c = g(c), u = g(u), l = g(l), f = g(f), d = g(d), p = g(p), h = g(h), v = g(v);

        var y = function (t) {
          function e() {
            var t;
            return (0, a.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments)))._currentBlockIndex = -1, t._blocks = null, t;
          }

          var n, o;
          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "prepare",
            value: (o = (0, i.default)(r.default.mark(function t() {
              var e, n, o, i;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      e = new v.default(this.Editor.UI.nodes.redactor), n = this.Editor, o = n.BlockEvents, i = n.Shortcuts, this._blocks = new Proxy(e, {
                        set: v.default.set,
                        get: v.default.get
                      }), i.add({
                        name: "CMD+C",
                        handler: function handler(t) {
                          o.handleCommandC(t);
                        }
                      }), i.add({
                        name: "CMD+X",
                        handler: function handler(t) {
                          o.handleCommandX(t);
                        }
                      });

                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return o.apply(this, arguments);
            })
          }, {
            key: "composeBlock",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = this.Editor.Tools.construct(t, e),
                  r = this.Editor.Tools.available[t],
                  i = new f.default(t, o, r, n, this.Editor.API.methods);
              return this.bindEvents(i), i;
            }
          }, {
            key: "insert",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = ++this.currentBlockIndex,
                  r = this.composeBlock(t, e, n);
              return this._blocks[o] = r, r;
            }
          }, {
            key: "paste",
            value: function value(t, e) {
              var n,
                  o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              n = o ? this.replace(t) : this.insert(t);

              try {
                n.call("onPaste", e);
              } catch (e) {
                h.default.log("".concat(t, ": onPaste callback call is failed"), "error", e);
              }

              return n;
            }
          }, {
            key: "insertAtIndex",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = this.composeBlock(this.config.initialBlock, {}, {});
              return this._blocks[t] = n, e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
            }
          }, {
            key: "insertAtEnd",
            value: function value() {
              return this.currentBlockIndex = this.blocks.length - 1, this.insert();
            }
          }, {
            key: "mergeBlocks",
            value: (n = (0, i.default)(r.default.mark(function t(e, n) {
              var o, i;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (o = this._blocks.indexOf(n), !n.isEmpty) {
                        t.next = 3;
                        break;
                      }

                      return t.abrupt("return");

                    case 3:
                      return t.next = 5, n.data;

                    case 5:
                      if (i = t.sent, h.default.isEmpty(i)) {
                        t.next = 9;
                        break;
                      }

                      return t.next = 9, e.mergeWith(i);

                    case 9:
                      this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);

                    case 11:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t, e) {
              return n.apply(this, arguments);
            })
          }, {
            key: "removeBlock",
            value: function value(t) {
              if (void 0 === t && (t = this.currentBlockIndex), this._blocks.remove(t), this.currentBlockIndex >= t && this.currentBlockIndex--, !this.blocks.length) return this.currentBlockIndex = -1, void this.insert();
              0 === t && (this.currentBlockIndex = 0);
            }
          }, {
            key: "removeSelectedBlocks",
            value: function value() {
              for (var t, e = this.blocks.length - 1; e >= 0; e--) {
                this.blocks[e].selected && (this.removeBlock(e), t = e);
              }

              return t;
            }
          }, {
            key: "removeAllBlocks",
            value: function value() {
              for (var t = this.blocks.length - 1; t >= 0; t--) {
                this._blocks.remove(t);
              }

              this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
            }
          }, {
            key: "split",
            value: function value() {
              var t = this.Editor.Caret.extractFragmentFromCaretPosition(),
                  e = p.default.make("div");
              e.appendChild(t);
              var n = {
                text: p.default.isEmpty(e) ? "" : e.innerHTML
              };
              return this.insert(this.config.initialBlock, n);
            }
          }, {
            key: "replace",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = this.composeBlock(t, e);
              return this._blocks.insert(this.currentBlockIndex, n, !0), n;
            }
          }, {
            key: "getBlockByIndex",
            value: function value(t) {
              return this._blocks[t];
            }
          }, {
            key: "getBlock",
            value: function value(t) {
              p.default.isElement(t) || (t = t.parentNode);
              var e = this._blocks.nodes,
                  n = t.closest(".".concat(f.default.CSS.wrapper)),
                  o = e.indexOf(n);
              if (o >= 0) return this._blocks[o];
            }
          }, {
            key: "highlightCurrentNode",
            value: function value() {
              this.clearFocused(), this.currentBlock.focused = !0;
            }
          }, {
            key: "clearFocused",
            value: function value() {
              this.blocks.forEach(function (t) {
                return t.focused = !1;
              });
            }
          }, {
            key: "setCurrentBlockByChildNode",
            value: function value(t) {
              p.default.isElement(t) || (t = t.parentNode);
              var e = t.closest(".".concat(f.default.CSS.wrapper));
              if (e) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock;
              throw new Error("Can not find a Block from this child Node");
            }
          }, {
            key: "getBlockByChildNode",
            value: function value(t) {
              p.default.isElement(t) || (t = t.parentNode);
              var e = t.closest(".".concat(f.default.CSS.wrapper));
              return this.blocks.find(function (t) {
                return t.holder === e;
              });
            }
          }, {
            key: "swap",
            value: function value(t, e) {
              this._blocks.swap(t, e), this.currentBlockIndex = e;
            }
          }, {
            key: "dropPointer",
            value: function value() {
              this.currentBlockIndex = -1, this.clearFocused();
            }
          }, {
            key: "clear",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this._blocks.removeAll(), this.dropPointer(), t && this.insert(this.config.initialBlock);
            }
          }, {
            key: "bindEvents",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockEvents,
                  o = e.Listeners;
              o.on(t.holder, "keydown", function (t) {
                return n.keydown(t);
              }, !0), o.on(t.holder, "mouseup", function (t) {
                return n.mouseUp(t);
              }), o.on(t.holder, "keyup", function (t) {
                return n.keyup(t);
              }), o.on(t.holder, "dragover", function (t) {
                return n.dragOver(t);
              }), o.on(t.holder, "dragleave", function (t) {
                return n.dragLeave(t);
              });
            }
          }, {
            key: "currentBlockIndex",
            get: function get() {
              return this._currentBlockIndex;
            },
            set: function set(t) {
              this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
            }
          }, {
            key: "firstBlock",
            get: function get() {
              return this._blocks[0];
            }
          }, {
            key: "lastBlock",
            get: function get() {
              return this._blocks[this._blocks.length - 1];
            }
          }, {
            key: "currentBlock",
            get: function get() {
              return this._blocks[this.currentBlockIndex];
            }
          }, {
            key: "nextBlock",
            get: function get() {
              var t = this.currentBlockIndex === this._blocks.length - 1;
              return t ? null : this._blocks[this.currentBlockIndex + 1];
            }
          }, {
            key: "nextContentfulBlock",
            get: function get() {
              var t = this.blocks.slice(this.currentBlockIndex + 1);
              return t.find(function (t) {
                return !!t.inputs.length;
              });
            }
          }, {
            key: "previousContentfulBlock",
            get: function get() {
              var t = this.blocks.slice(0, this.currentBlockIndex).reverse();
              return t.find(function (t) {
                return !!t.inputs.length;
              });
            }
          }, {
            key: "previousBlock",
            get: function get() {
              var t = 0 === this.currentBlockIndex;
              return t ? null : this._blocks[this.currentBlockIndex - 1];
            }
          }, {
            key: "blocks",
            get: function get() {
              return this._blocks.array;
            }
          }, {
            key: "isEditorEmpty",
            get: function get() {
              return this.blocks.every(function (t) {
                return t.isEmpty;
              });
            }
          }]), e;
        }(d.default);

        _o19.default = y, y.displayName = "BlockManager", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(18), n(13), n(37)], void 0 === (i = "function" == typeof (o = function o(_o20, r, i, a, s, c, u, l, f, d) {

        var p = n(3);
        Object.defineProperty(_o20, "__esModule", {
          value: !0
        }), _o20.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), u = p(u), l = p(l), f = p(f), d = p(d);

        var h = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).needToSelectAll = !1, t.nativeInputSelected = !1, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "prepare",
            value: function value() {
              var t = this,
                  e = this.Editor.Shortcuts;
              e.add({
                name: "CMD+A",
                handler: function handler(e) {
                  var n = t.Editor.BlockManager;
                  n.currentBlock && t.handleCommandA(e);
                }
              }), this.selection = new d.default();
            }
          }, {
            key: "unSelectBlockByIndex",
            value: function value(t) {
              var e = this.Editor.BlockManager;
              (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1;
            }
          }, {
            key: "clearSelection",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.needToSelectAll = !1, this.nativeInputSelected = !1, this.anyBlockSelected && !this.Editor.RectangleSelection.isRectActivated() ? (t && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
            }
          }, {
            key: "copySelectedBlocks",
            value: function value() {
              var t = this,
                  e = this.Editor,
                  n = e.BlockManager,
                  o = e.Sanitizer,
                  r = f.default.make("div");
              n.blocks.filter(function (t) {
                return t.selected;
              }).forEach(function (e) {
                var n = o.clean(e.holder.innerHTML, t.sanitizerConfig),
                    i = f.default.make("p");
                i.innerHTML = n, r.appendChild(i);
              }), l.default.copyTextToClipboard(r.innerHTML);
            }
          }, {
            key: "selectBlockByIndex",
            value: function value(t) {
              var e,
                  n = this.Editor.BlockManager;
              n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), d.default.get().removeAllRanges(), e.selected = !0;
            }
          }, {
            key: "handleCommandA",
            value: function value(t) {
              this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.nativeInputSelected ? (t.preventDefault(), this.needToSelectAll ? (this.selectAllBlocks(), this.needToSelectAll = !1) : (this.selectBlockByIndex(), this.needToSelectAll = !0)) : this.nativeInputSelected = !0;
            }
          }, {
            key: "selectAllBlocks",
            value: function value() {
              this.allBlocksSelected = !0;
            }
          }, {
            key: "sanitizerConfig",
            get: function get() {
              return {
                p: {},
                h1: {},
                h2: {},
                h3: {},
                h4: {},
                h5: {},
                h6: {},
                ol: {},
                ul: {},
                li: {},
                br: !0,
                img: {
                  src: !0,
                  width: !0,
                  height: !0
                },
                a: {
                  href: !0
                },
                b: {},
                i: {},
                u: {}
              };
            }
          }, {
            key: "allBlocksSelected",
            get: function get() {
              var t = this.Editor.BlockManager;
              return t.blocks.every(function (t) {
                return !0 === t.selected;
              });
            },
            set: function set(t) {
              var e = this.Editor.BlockManager;
              e.blocks.forEach(function (e) {
                return e.selected = t;
              });
            }
          }, {
            key: "anyBlockSelected",
            get: function get() {
              var t = this.Editor.BlockManager;
              return t.blocks.some(function (t) {
                return !0 === t.selected;
              });
            }
          }]), e;
        }(u.default);

        _o20.default = h, h.displayName = "BlockSelection", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(37), n(7), n(13), n(18)], void 0 === (i = "function" == typeof (o = function o(_o21, r, i, a, s, c, u, l, f, d) {

        var p = n(3);
        Object.defineProperty(_o21, "__esModule", {
          value: !0
        }), _o21.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), u = p(u), l = p(l), f = p(f), d = p(d);

        var h = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "setToBlock",
            value: function value(t) {
              var e,
                  n = this,
                  o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  i = this.Editor.BlockManager;

              switch (o) {
                case this.positions.START:
                  e = t.firstInput;
                  break;

                case this.positions.END:
                  e = t.lastInput;
                  break;

                default:
                  e = t.currentInput;
              }

              if (e) {
                var a = f.default.getDeepestNode(e, o === this.positions.END),
                    s = f.default.getContentLength(a);

                switch (!0) {
                  case o === this.positions.START:
                    r = 0;
                    break;

                  case o === this.positions.END:
                  case r > s:
                    r = s;
                }

                d.default.delay(function () {
                  n.set(a, r);
                }, 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e;
              }
            }
          }, {
            key: "setToInput",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  o = this.Editor.BlockManager.currentBlock,
                  r = f.default.getDeepestNode(t);

              switch (e) {
                case this.positions.START:
                  this.set(r, 0);
                  break;

                case this.positions.END:
                  var i = f.default.getContentLength(r);
                  this.set(r, i);
                  break;

                default:
                  n && this.set(r, n);
              }

              o.currentInput = t;
            }
          }, {
            key: "set",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = document.createRange(),
                  o = u.default.get();

              if (f.default.isNativeInput(t)) {
                if (!f.default.canSetCaret(t)) return;
                return t.focus(), void (t.selectionStart = t.selectionEnd = e);
              }

              n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n);
              var r = t.nodeType === Node.ELEMENT_NODE ? t.getBoundingClientRect() : n.getBoundingClientRect(),
                  i = r.top,
                  a = r.bottom,
                  s = window,
                  c = s.innerHeight;
              i < 0 && window.scrollBy(0, i), a > c && window.scrollBy(0, a - c);
            }
          }, {
            key: "setToTheLastBlock",
            value: function value() {
              var t = this.Editor.BlockManager.lastBlock;
              if (t) if (this.Editor.Tools.isInitial(t.tool) && t.isEmpty) this.setToBlock(t);else {
                var e = this.Editor.BlockManager.insertAtEnd();
                this.setToBlock(e);
              }
            }
          }, {
            key: "extractFragmentFromCaretPosition",
            value: function value() {
              var t = u.default.get();

              if (t.rangeCount) {
                var e = t.getRangeAt(0),
                    n = this.Editor.BlockManager.currentBlock.currentInput;

                if (e.deleteContents(), n) {
                  var o = e.cloneRange();
                  return o.selectNodeContents(n), o.setStart(e.endContainer, e.endOffset), o.extractContents();
                }
              }
            }
          }, {
            key: "navigateNext",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  e = this.Editor.BlockManager,
                  n = e.currentBlock,
                  o = e.nextContentfulBlock,
                  r = n.nextInput;
              return !(!o && !r || !t && !this.isAtEnd || (r ? this.setToInput(r, this.positions.START) : this.setToBlock(o, this.positions.START), 0));
            }
          }, {
            key: "navigatePrevious",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  e = this.Editor.BlockManager,
                  n = e.currentBlock,
                  o = e.previousContentfulBlock;
              if (!n) return !1;
              var r = n.previousInput;
              return !(!o && !r || !t && !this.isAtStart || (r ? this.setToInput(r, this.positions.END) : this.setToBlock(o, this.positions.END), 0));
            }
          }, {
            key: "createShadow",
            value: function value(t) {
              var n = document.createElement("span");
              n.classList.add(e.CSS.shadowCaret), t.insertAdjacentElement("beforeEnd", n);
            }
          }, {
            key: "restoreCaret",
            value: function value(t) {
              var n = t.querySelector(".".concat(e.CSS.shadowCaret));

              if (n) {
                var o = new u.default();
                o.expandToTag(n), setTimeout(function () {
                  var t = document.createRange();
                  t.selectNode(n), t.extractContents();
                }, 50);
              }
            }
          }, {
            key: "insertContentAtCaretPosition",
            value: function value(t) {
              var e = document.createDocumentFragment(),
                  n = document.createElement("div"),
                  o = u.default.get(),
                  r = u.default.range;
              n.innerHTML = t, Array.from(n.childNodes).forEach(function (t) {
                return e.appendChild(t);
              });
              var i = e.lastChild;
              r.deleteContents(), r.insertNode(e);
              var a = document.createRange();
              a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a);
            }
          }, {
            key: "getHigherLevelSiblings",
            value: function value(t, e) {
              for (var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;) {
                n = n.parentNode;
              }

              for (var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];) {
                n = n[r], o.push(n);
              }

              return o;
            }
          }, {
            key: "positions",
            get: function get() {
              return {
                START: "start",
                END: "end",
                DEFAULT: "default"
              };
            }
          }, {
            key: "isAtStart",
            get: function get() {
              if (!u.default.isCollapsed) return !1;
              var t = u.default.get(),
                  e = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),
                  n = t.anchorNode;
              if (f.default.isNativeInput(e)) return 0 === e.selectionEnd;
              var o = n.textContent.search(/\S/);
              -1 === o && (o = 0);
              var r = t.anchorOffset;

              if (n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[r] ? (n = n.childNodes[r], r = 0) : (n = n.childNodes[r - 1], r = n.textContent.length)), f.default.isLineBreakTag(e) || f.default.isEmpty(e)) {
                var i = this.getHigherLevelSiblings(n, "left"),
                    a = i.every(function (t, e) {
                  return f.default.isEmpty(t);
                });
                if (a && r === o) return !0;
              }

              return null === e || n === e && r <= o;
            }
          }, {
            key: "isAtEnd",
            get: function get() {
              if (!u.default.isCollapsed) return !1;
              var t = u.default.get(),
                  e = t.anchorNode,
                  n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
              if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
              var o = t.anchorOffset;

              if (e.nodeType !== Node.TEXT_NODE && e.childNodes.length && (e.childNodes[o - 1] ? (e = e.childNodes[o - 1], o = e.textContent.length) : (e = e.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
                var r = this.getHigherLevelSiblings(e, "right"),
                    i = r.every(function (t, e) {
                  return 0 === e && f.default.isLineBreakTag(t) || f.default.isEmpty(t);
                });
                if (i && o === e.textContent.length) return !0;
              }

              var a = n.textContent.replace(/\s+$/, "");
              return e === n && o >= a.length;
            }
          }], [{
            key: "CSS",
            get: function get() {
              return {
                shadowCaret: "cdx-shadow-caret"
              };
            }
          }]), e;
        }(l.default);

        _o21.default = h, h.displayName = "Caret", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(37), n(7)], void 0 === (i = "function" == typeof (o = function o(_o22, r, i, a, s, c, u, l, f, d) {

        var p = n(3);
        Object.defineProperty(_o22, "__esModule", {
          value: !0
        }), _o22.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), u = p(u), l = p(l), f = p(f);

        var h = function (t) {
          function e() {
            var t, n;
            return (0, a.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).isStartedAtEditor = !1, t.processDrop = (n = (0, i.default)(r.default.mark(function e(n) {
              var o, i, a, s, c, u;
              return r.default.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      o = t.Editor, i = o.BlockManager, a = o.Caret, s = o.Paste, n.preventDefault(), i.blocks.forEach(function (t) {
                        return t.dropTarget = !1;
                      }), f.default.isAtEditor && !f.default.isCollapsed && t.isStartedAtEditor && document.execCommand("delete"), t.isStartedAtEditor = !1;

                      try {
                        c = i.setCurrentBlockByChildNode(n.target), t.Editor.Caret.setToBlock(c, a.positions.END);
                      } catch (e) {
                        u = i.setCurrentBlockByChildNode(i.lastBlock.holder), t.Editor.Caret.setToBlock(u, a.positions.END);
                      }

                      s.processDataTransfer(n.dataTransfer, !0);

                    case 7:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            })), function (t) {
              return n.apply(this, arguments);
            }), t;
          }

          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "prepare",
            value: function value() {
              this.bindEvents();
            }
          }, {
            key: "bindEvents",
            value: function value() {
              var t = this;
              this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "drop", this.processDrop, !0), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragstart", function (e) {
                f.default.isAtEditor && !f.default.isCollapsed && (t.isStartedAtEditor = !0), t.Editor.InlineToolbar.close();
              }), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragover", function (t) {
                return t.preventDefault();
              }, !0);
            }
          }]), e;
        }((d = p(d)).default);

        _o22.default = h, h.displayName = "DragNDrop", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o23, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o23, "__esModule", {
          value: !0
        }), _o23.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).subscribers = {}, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "on",
            value: function value(t, e) {
              t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
            }
          }, {
            key: "emit",
            value: function value(t, e) {
              this.subscribers[t] && this.subscribers[t].reduce(function (t, e) {
                var n = e(t);
                return n || t;
              }, e);
            }
          }, {
            key: "off",
            value: function value(t, e) {
              for (var n = 0; n < this.subscribers[t].length; n++) {
                if (this.subscribers[t][n] === e) {
                  delete this.subscribers[t][n];
                  break;
                }
              }
            }
          }, {
            key: "destroy",
            value: function value() {
              this.subscribers = null;
            }
          }]), e;
        }((u = l(u)).default);

        _o23.default = f, f.displayName = "Events", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o24, r, i, a, s, c, u) {

        var l = n(3);
        Object.defineProperty(_o24, "__esModule", {
          value: !0
        }), _o24.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);

        var f = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).allListeners = [], t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "on",
            value: function value(t, e, n) {
              var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  r = {
                element: t,
                eventType: e,
                handler: n,
                useCapture: o
              },
                  i = this.findOne(t, e, n);
              i || (this.allListeners.push(r), t.addEventListener(e, n, o));
            }
          }, {
            key: "off",
            value: function value(t, e, n) {
              var o = this,
                  r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  i = this.findAll(t, e, n);
              i.forEach(function (t, e) {
                var n = o.allListeners.indexOf(i[e]);
                n > 0 && o.allListeners.splice(n, 1);
              }), t.removeEventListener(e, n, r);
            }
          }, {
            key: "findOne",
            value: function value(t, e, n) {
              var o = this.findAll(t, e, n);
              return o.length > 0 ? o[0] : null;
            }
          }, {
            key: "findAll",
            value: function value(t, e, n) {
              var o = t ? this.findByEventTarget(t) : [];
              return t && e && n ? o.filter(function (t) {
                return t.eventType === e && t.handler === n;
              }) : t && e ? o.filter(function (t) {
                return t.eventType === e;
              }) : o;
            }
          }, {
            key: "removeAll",
            value: function value() {
              this.allListeners.map(function (t) {
                t.element.removeEventListener(t.eventType, t.handler);
              }), this.allListeners = [];
            }
          }, {
            key: "findByEventTarget",
            value: function value(t) {
              return this.allListeners.filter(function (e) {
                if (e.element === t) return e;
              });
            }
          }, {
            key: "findByType",
            value: function value(t) {
              return this.allListeners.filter(function (e) {
                if (e.eventType === t) return e;
              });
            }
          }, {
            key: "findByHandler",
            value: function value(t) {
              return this.allListeners.filter(function (e) {
                if (e.handler === t) return e;
              });
            }
          }]), e;
        }((u = l(u)).default);

        _o24.default = f, f.displayName = "Listeners", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(7), n(18), n(98)], void 0 === (i = "function" == typeof (o = function o(_o25, r, i, a, s, c, u, l, f, d, p) {

        var h = n(3);
        Object.defineProperty(_o25, "__esModule", {
          value: !0
        }), _o25.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), c = h(c), u = h(u), l = h(l), f = h(f), d = h(d), p = h(p);

        var v = function (t) {
          function e() {
            var t;
            return (0, a.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).mutationDebouncer = d.default.debounce(function () {
              t.checkEmptiness(), t.config.onChange();
            }, e.DebounceTimer), t;
          }

          var n;
          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "destroy",
            value: function value() {
              this.mutationDebouncer = null, this.observer.disconnect(), this.observer = null;
            }
          }, {
            key: "prepare",
            value: (n = (0, i.default)(r.default.mark(function t() {
              var e = this;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      window.setTimeout(function () {
                        e.setObserver();
                      }, 1e3);

                    case 1:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            })), function () {
              return n.apply(this, arguments);
            })
          }, {
            key: "disable",
            value: function value() {
              this.disabled = !0;
            }
          }, {
            key: "enable",
            value: function value() {
              this.disabled = !1;
            }
          }, {
            key: "setObserver",
            value: function value() {
              var t = this,
                  e = this.Editor.UI;
              this.observer = new MutationObserver(function (e, n) {
                t.mutationHandler(e, n);
              }), this.observer.observe(e.nodes.redactor, {
                childList: !0,
                attributes: !0,
                subtree: !0,
                characterData: !0,
                characterDataOldValue: !0
              });
            }
          }, {
            key: "mutationHandler",
            value: function value(t, e) {
              if (!this.disabled) {
                var n = !1;
                t.forEach(function (t) {
                  switch (t.type) {
                    case "childList":
                    case "subtree":
                    case "characterData":
                    case "characterDataOldValue":
                      n = !0;
                      break;

                    case "attributes":
                      var e = t.target;
                      if (!e.classList.contains(p.default.CSS.wrapper)) return void (n = !0);
                  }
                }), n && this.mutationDebouncer();
              }
            }
          }, {
            key: "checkEmptiness",
            value: function value() {
              var t = this.Editor,
                  e = t.BlockManager,
                  n = t.UI;
              n.nodes.wrapper.classList.toggle(n.CSS.editorEmpty, e.isEditorEmpty);
            }
          }]), e;
        }(f.default);

        _o25.default = v, v.displayName = "ModificationsObserver", v.DebounceTimer = 450, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(346)], void 0 === (i = "function" == typeof (o = function o(_o26, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o26, "__esModule", {
          value: !0
        }), _o26.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function (t) {
          function e() {
            return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "show",
            value: function value(t) {
              l.default.show(t);
            }
          }]), e;
        }(u.default);

        _o26.default = d, d.displayName = "Notifier", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(97), n(29), n(30), n(58), n(1), n(2), n(4), n(5), n(6), n(7), n(13), n(18)], void 0 === (i = "function" == typeof (o = function o(_o27, r, i, a, s, c, u, l, f, d, p, h, v) {

        var g = n(3);
        Object.defineProperty(_o27, "__esModule", {
          value: !0
        }), _o27.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), c = g(c), u = g(u), l = g(l), f = g(f), d = g(d), p = g(p), h = g(h), v = g(v);

        var y = function (t) {
          function e() {
            var t, n;
            return (0, c.default)(this, e), (t = (0, l.default)(this, (0, f.default)(e).apply(this, arguments))).toolsTags = {}, t.tagsByTool = {}, t.toolsPatterns = [], t.toolsFiles = {}, t.processTool = function (e) {
              var n = (0, s.default)(e, 2),
                  o = n[0],
                  r = n[1];

              try {
                var i = new t.Editor.Tools.blockTools[o]({
                  api: t.Editor.API.methods,
                  config: {},
                  data: {}
                });
                if (!i.onPaste || "function" != typeof i.onPaste) return;
                var a = r.pasteConfig || {};
                t.getTagsConfig(o, a), t.getFilesConfig(o, a), t.getPatternsConfig(o, a);
              } catch (t) {
                v.default.log("Paste handling for «".concat(o, "» Tool hasn't been set up because of the error"), "warn", t);
              }
            }, t.handlePasteEvent = (n = (0, a.default)(i.default.mark(function e(n) {
              var o, r, a;
              return i.default.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (o = t.Editor, r = o.BlockManager, o.Tools, a = o.Toolbar, r.currentBlock && (!t.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                        e.next = 3;
                        break;
                      }

                      return e.abrupt("return");

                    case 3:
                      n.preventDefault(), t.processDataTransfer(n.clipboardData), r.clearFocused(), a.close();

                    case 7:
                    case "end":
                      return e.stop();
                  }
                }
              }, e);
            })), function (t) {
              return n.apply(this, arguments);
            }), t;
          }

          var n, o, p, g, y, b, m, k, x;
          return (0, d.default)(e, t), (0, u.default)(e, [{
            key: "prepare",
            value: (x = (0, a.default)(i.default.mark(function t() {
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      this.setCallback(), this.processTools();

                    case 2:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return x.apply(this, arguments);
            })
          }, {
            key: "processDataTransfer",
            value: (k = (0, a.default)(i.default.mark(function t(e) {
              var n,
                  o,
                  r,
                  a,
                  s,
                  c,
                  u,
                  l,
                  f = arguments;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = f.length > 1 && void 0 !== f[1] && f[1], o = this.Editor.Sanitizer, !((r = e.types).includes ? r.includes("Files") : r.contains("Files"))) {
                        t.next = 8;
                        break;
                      }

                      return t.next = 7, this.processFiles(e.files);

                    case 7:
                      return t.abrupt("return");

                    case 8:
                      if (a = e.getData("text/plain"), s = e.getData("text/html"), n && a.trim() && s.trim() && (s = "<p>" + (s.trim() ? s : a) + "</p>"), c = Object.keys(this.toolsTags).reduce(function (t, e) {
                        return t[e.toLowerCase()] = !0, t;
                      }, {}), u = Object.assign({}, c, o.getAllInlineToolsConfig(), {
                        br: {}
                      }), (l = o.clean(s, u)).trim() && l.trim() !== a && h.default.isHTMLString(l)) {
                        t.next = 19;
                        break;
                      }

                      return t.next = 17, this.processText(a);

                    case 17:
                      t.next = 21;
                      break;

                    case 19:
                      return t.next = 21, this.processText(l, !0);

                    case 21:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return k.apply(this, arguments);
            })
          }, {
            key: "processText",
            value: (m = (0, a.default)(i.default.mark(function t(e) {
              var n,
                  o,
                  r,
                  s,
                  c,
                  u,
                  l,
                  f,
                  d = this,
                  p = arguments;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = p.length > 1 && void 0 !== p[1] && p[1], o = this.Editor, r = o.Caret, s = o.BlockManager, c = o.Tools, (u = n ? this.processHTML(e) : this.processPlain(e)).length) {
                        t.next = 5;
                        break;
                      }

                      return t.abrupt("return");

                    case 5:
                      if (1 !== u.length) {
                        t.next = 8;
                        break;
                      }

                      return u[0].isBlock ? this.processSingleBlock(u.pop()) : this.processInlinePaste(u.pop()), t.abrupt("return");

                    case 8:
                      return l = s.currentBlock && c.isInitial(s.currentBlock.tool), f = l && s.currentBlock.isEmpty, t.next = 12, Promise.all(u.map(function () {
                        var t = (0, a.default)(i.default.mark(function t(e, n) {
                          return i.default.wrap(function (t) {
                            for (;;) {
                              switch (t.prev = t.next) {
                                case 0:
                                  return t.next = 2, d.insertBlock(e, 0 === n && f);

                                case 2:
                                  return t.abrupt("return", t.sent);

                                case 3:
                                case "end":
                                  return t.stop();
                              }
                            }
                          }, t);
                        }));
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      }()));

                    case 12:
                      s.currentBlock && r.setToBlock(s.currentBlock, r.positions.END);

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return m.apply(this, arguments);
            })
          }, {
            key: "setCallback",
            value: function value() {
              var t = this.Editor.Listeners;
              t.on(document, "paste", this.handlePasteEvent);
            }
          }, {
            key: "processTools",
            value: function value() {
              var t = this.Editor.Tools.blockTools;
              Object.entries(t).forEach(this.processTool);
            }
          }, {
            key: "getTagsConfig",
            value: function value(t, e) {
              var n = this,
                  o = e.tags || [];
              o.forEach(function (e) {
                n.toolsTags.hasOwnProperty(e) ? v.default.log("Paste handler for «".concat(t, "» Tool on «").concat(e, "» tag is skipped ") + "because it is already used by «".concat(n.toolsTags[e].tool, "» Tool."), "warn") : n.toolsTags[e.toUpperCase()] = {
                  tool: t
                };
              }), this.tagsByTool[t] = o.map(function (t) {
                return t.toUpperCase();
              });
            }
          }, {
            key: "getFilesConfig",
            value: function value(t, e) {
              var n = e.files,
                  o = void 0 === n ? {} : n,
                  r = o.extensions,
                  i = o.mimeTypes;
              (r || i) && (r && !Array.isArray(r) && (v.default.log("«extensions» property of the onDrop config for «".concat(t, "» Tool should be an array")), r = []), i && !Array.isArray(i) && (v.default.log("«mimeTypes» property of the onDrop config for «".concat(t, "» Tool should be an array")), i = []), i && (i = i.filter(function (e) {
                return !!v.default.isValidMimeType(e) || (v.default.log("MIME type value «".concat(e, "» for the «").concat(t, "» Tool is not a valid MIME type"), "warn"), !1);
              })), this.toolsFiles[t] = {
                extensions: r || [],
                mimeTypes: i || []
              });
            }
          }, {
            key: "getPatternsConfig",
            value: function value(t, e) {
              var n = this;
              e.patterns && !v.default.isEmpty(e.patterns) && Object.entries(e.patterns).forEach(function (e) {
                var o = (0, s.default)(e, 2),
                    r = o[0],
                    i = o[1];
                i instanceof RegExp || v.default.log("Pattern ".concat(i, " for «").concat(t, "» Tool is skipped because it should be a Regexp instance."), "warn"), n.toolsPatterns.push({
                  key: r,
                  pattern: i,
                  tool: t
                });
              });
            }
          }, {
            key: "isNativeBehaviour",
            value: function value(t) {
              return h.default.isNativeInput(t);
            }
          }, {
            key: "processFiles",
            value: (b = (0, a.default)(i.default.mark(function t(e) {
              var n,
                  o,
                  r,
                  a,
                  s,
                  c,
                  u = this;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return n = this.Editor, o = n.BlockManager, r = n.Tools, t.next = 3, Promise.all(Array.from(e).map(function (t) {
                        return u.processFile(t);
                      }));

                    case 3:
                      a = (a = t.sent).filter(function (t) {
                        return !!t;
                      }), s = r.isInitial(o.currentBlock.tool), c = s && o.currentBlock.isEmpty, a.forEach(function (t, e) {
                        o.paste(t.type, t.event, 0 === e && c);
                      });

                    case 8:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return b.apply(this, arguments);
            })
          }, {
            key: "processFile",
            value: (y = (0, a.default)(i.default.mark(function t(e) {
              var n, o, r, a, c;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = v.default.getFileExtension(e), o = Object.entries(this.toolsFiles).find(function (t) {
                        var o = (0, s.default)(t, 2),
                            r = (o[0], o[1]),
                            i = r.mimeTypes,
                            a = r.extensions,
                            c = e.type.split("/"),
                            u = (0, s.default)(c, 2),
                            l = u[0],
                            f = u[1],
                            d = a.find(function (t) {
                          return t.toLowerCase() === n.toLowerCase();
                        }),
                            p = i.find(function (t) {
                          var e = t.split("/"),
                              n = (0, s.default)(e, 2),
                              o = n[0],
                              r = n[1];
                          return o === l && (r === f || "*" === r);
                        });
                        return !!d || !!p;
                      })) {
                        t.next = 4;
                        break;
                      }

                      return t.abrupt("return");

                    case 4:
                      return r = (0, s.default)(o, 1), a = r[0], c = this.composePasteEvent("file", {
                        file: e
                      }), t.abrupt("return", {
                        event: c,
                        type: a
                      });

                    case 7:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return y.apply(this, arguments);
            })
          }, {
            key: "processHTML",
            value: function value(t) {
              var e = this,
                  n = this.Editor,
                  o = n.Tools,
                  r = n.Sanitizer,
                  i = this.config.initialBlock,
                  a = h.default.make("DIV");
              a.innerHTML = t;
              var s = this.getNodes(a);
              return s.map(function (t) {
                var n,
                    a = i,
                    s = !1;

                switch (t.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    (n = h.default.make("div")).appendChild(t);
                    break;

                  case Node.ELEMENT_NODE:
                    n = t, s = !0, e.toolsTags[n.tagName] && (a = e.toolsTags[n.tagName].tool);
                }

                var c = o.blockTools[a].pasteConfig.tags,
                    u = c.reduce(function (t, e) {
                  return t[e.toLowerCase()] = {}, t;
                }, {}),
                    l = Object.assign({}, u, r.getInlineToolsConfig(a));
                n.innerHTML = r.clean(n.innerHTML, l);
                var f = e.composePasteEvent("tag", {
                  data: n
                });
                return {
                  content: n,
                  isBlock: s,
                  tool: a,
                  event: f
                };
              }).filter(function (t) {
                return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content);
              });
            }
          }, {
            key: "processPlain",
            value: function value(t) {
              var e = this,
                  n = this.config.initialBlock;
              if (this.Editor.Tools, !t) return [];
              var o = n;
              return t.split(/\r?\n/).filter(function (t) {
                return t.trim();
              }).map(function (t) {
                var n = h.default.make("div");
                n.innerHTML = t;
                var r = e.composePasteEvent("tag", {
                  data: n
                });
                return {
                  content: n,
                  tool: o,
                  isBlock: !1,
                  event: r
                };
              });
            }
          }, {
            key: "processSingleBlock",
            value: (g = (0, a.default)(i.default.mark(function t(e) {
              var n, o, r, a, s;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = this.Editor, o = n.Caret, r = n.BlockManager, a = n.Tools, (s = r.currentBlock) && e.tool === s.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) {
                        t.next = 5;
                        break;
                      }

                      return this.insertBlock(e, s && a.isInitial(s.tool) && s.isEmpty), t.abrupt("return");

                    case 5:
                      o.insertContentAtCaretPosition(e.content.innerHTML);

                    case 6:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return g.apply(this, arguments);
            })
          }, {
            key: "processInlinePaste",
            value: (p = (0, a.default)(i.default.mark(function t(n) {
              var o, r, a, s, c, u, l, f, d, p;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (o = this.Editor, r = o.BlockManager, a = o.Caret, s = o.Sanitizer, c = o.Tools, u = n.content, n.tool, !(r.currentBlock && c.isInitial(r.currentBlock.tool) && u.textContent.length < e.PATTERN_PROCESSING_MAX_LENGTH)) {
                        t.next = 12;
                        break;
                      }

                      return t.next = 6, this.processPattern(u.textContent);

                    case 6:
                      if (!(l = t.sent)) {
                        t.next = 12;
                        break;
                      }

                      return d = r.currentBlock && c.isInitial(r.currentBlock.tool) && r.currentBlock.isEmpty, f = r.paste(l.tool, l.event, d), a.setToBlock(f, a.positions.END), t.abrupt("return");

                    case 12:
                      r.currentBlock && r.currentBlock.currentInput ? (p = s.getInlineToolsConfig(r.currentBlock.name), document.execCommand("insertHTML", !1, s.clean(u.innerHTML, p))) : this.insertBlock(n);

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return p.apply(this, arguments);
            })
          }, {
            key: "processPattern",
            value: (o = (0, a.default)(i.default.mark(function t(e) {
              var n, o;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = this.toolsPatterns.find(function (t) {
                        var n = t.pattern.exec(e);
                        return !!n && e === n.shift();
                      })) {
                        t.next = 3;
                        break;
                      }

                      return t.abrupt("return");

                    case 3:
                      return o = this.composePasteEvent("pattern", {
                        key: n.key,
                        data: e
                      }), t.abrupt("return", {
                        event: o,
                        tool: n.tool
                      });

                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return o.apply(this, arguments);
            })
          }, {
            key: "insertBlock",
            value: (n = (0, a.default)(i.default.mark(function t(e) {
              var n,
                  o,
                  r,
                  a,
                  s,
                  c,
                  u = arguments;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = u.length > 1 && void 0 !== u[1] && u[1], o = this.Editor, r = o.BlockManager, a = o.Caret, s = r.currentBlock, !(n && s && s.isEmpty)) {
                        t.next = 7;
                        break;
                      }

                      return c = r.paste(e.tool, e.event, !0), a.setToBlock(c, a.positions.END), t.abrupt("return");

                    case 7:
                      c = r.paste(e.tool, e.event), a.setToBlock(c, a.positions.END);

                    case 9:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function (t) {
              return n.apply(this, arguments);
            })
          }, {
            key: "getNodes",
            value: function value(t) {
              var e = this,
                  n = Array.from(t.childNodes),
                  o = Object.keys(this.toolsTags);
              return n.reduce(function t(n, i) {
                if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return n;
                var a = n[n.length - 1],
                    s = new DocumentFragment();

                switch (a && h.default.isFragment(a) && (s = n.pop()), i.nodeType) {
                  case Node.ELEMENT_NODE:
                    var c = i;
                    if ("BR" === c.tagName) return [].concat((0, r.default)(n), [s, new DocumentFragment()]);
                    var u = e.toolsTags[c.tagName] || {},
                        l = u.tool,
                        f = void 0 === l ? "" : l,
                        d = e.tagsByTool[f] || [],
                        p = o.includes(c.tagName),
                        v = h.default.blockElements.includes(c.tagName.toLowerCase()),
                        g = Array.from(c.children).some(function (t) {
                      var e = t.tagName;
                      return o.includes(e) && !d.includes(e);
                    }),
                        y = Array.from(c.children).some(function (t) {
                      var e = t.tagName;
                      return h.default.blockElements.includes(e.toLowerCase());
                    });
                    if (!v && !p && !g) return s.appendChild(c), [].concat((0, r.default)(n), [s]);
                    if (p && !g || v && !y && !g) return [].concat((0, r.default)(n), [s, c]);
                    break;

                  case Node.TEXT_NODE:
                    return s.appendChild(i), [].concat((0, r.default)(n), [s]);

                  default:
                    return [].concat((0, r.default)(n), [s]);
                }

                return [].concat((0, r.default)(n), (0, r.default)(Array.from(i.childNodes).reduce(t, [])));
              }, []);
            }
          }, {
            key: "composePasteEvent",
            value: function value(t, e) {
              return new CustomEvent(t, {
                detail: e
              });
            }
          }]), e;
        }(p.default);

        _o27.default = y, y.displayName = "Paste", y.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(13), n(37), n(98)], void 0 === (i = "function" == typeof (o = function o(_o28, r, i, a, s, c, u, l, f, d) {

        var p = n(3);
        Object.defineProperty(_o28, "__esModule", {
          value: !0
        }), _o28.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), u = p(u), l = p(l), f = p(f), d = p(d);

        var h = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "prepare",
            value: function value() {
              var t = this,
                  e = this.Editor.Listeners,
                  n = this.genHTML(),
                  o = n.container;
              e.on(o, "mousedown", function (e) {
                e.button === t.MAIN_MOUSE_BUTTON && t.startSelection(e.pageX, e.pageY);
              }, !1), e.on(document.body, "mousemove", function (e) {
                t.changingRectangle(e), t.scrollByZones(e.clientY);
              }, !1), e.on(document.body, "mouseleave", function () {
                t.clearSelection(), t.endSelection();
              }), e.on(window, "scroll", function (e) {
                t.changingRectangle(e);
              }, !1), e.on(document.body, "mouseup", function () {
                t.endSelection();
              }, !1);
            }
          }, {
            key: "startSelection",
            value: function value(t, e) {
              this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = [];
              var n = document.elementFromPoint(t - window.pageXOffset, e - window.pageYOffset);
              n.closest("." + this.Editor.UI.CSS.editorWrapper) && !n.closest("." + d.default.CSS.content) && (this.mousedown = !0, this.startX = t, this.startY = e);
            }
          }, {
            key: "endSelection",
            value: function value() {
              this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
            }
          }, {
            key: "isRectActivated",
            value: function value() {
              return this.isRectSelectionActivated;
            }
          }, {
            key: "clearSelection",
            value: function value() {
              this.isRectSelectionActivated = !1;
            }
          }, {
            key: "scrollByZones",
            value: function value(t) {
              this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
            }
          }, {
            key: "genHTML",
            value: function value() {
              var t = this.Editor.UI,
                  n = t.nodes.holder.querySelector("." + t.CSS.editorWrapper),
                  o = l.default.make("div", e.CSS.overlay, {}),
                  r = l.default.make("div", e.CSS.overlayContainer, {}),
                  i = l.default.make("div", e.CSS.rect, {});
              return r.appendChild(i), o.appendChild(r), n.appendChild(o), this.overlayRectangle = i, {
                container: n,
                overlay: o
              };
            }
          }, {
            key: "scrollVertical",
            value: function value(t) {
              var e = this;

              if (this.inScrollZone && this.mousedown) {
                var n = window.pageYOffset;
                window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function () {
                  e.scrollVertical(t);
                }, 0);
              }
            }
          }, {
            key: "changingRectangle",
            value: function value(t) {
              if (this.mousedown) {
                void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                var e = this.genInfoForMouseSelection(),
                    n = e.rightPos,
                    o = e.leftPos,
                    r = e.index,
                    i = this.startX > n && this.mouseX > n,
                    a = this.startX < o && this.mouseX < o;
                this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f.default.get().removeAllRanges(), t.preventDefault());
              }
            }
          }, {
            key: "shrinkRectangleToPoint",
            value: function value() {
              this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
            }
          }, {
            key: "inverseSelection",
            value: function value() {
              var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]),
                  e = t.selected;

              if (this.rectCrossesBlocks && !e) {
                var n = !0,
                    o = !1,
                    r = void 0;

                try {
                  for (var i, a = this.stackOfSelected[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var s = i.value;
                    this.Editor.BlockSelection.selectBlockByIndex(s);
                  }
                } catch (t) {
                  o = !0, r = t;
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (o) throw r;
                  }
                }
              }

              if (!this.rectCrossesBlocks && e) {
                var c = !0,
                    u = !1,
                    l = void 0;

                try {
                  for (var f, d = this.stackOfSelected[Symbol.iterator](); !(c = (f = d.next()).done); c = !0) {
                    var p = f.value;
                    this.Editor.BlockSelection.unSelectBlockByIndex(p);
                  }
                } catch (t) {
                  u = !0, l = t;
                } finally {
                  try {
                    c || null == d.return || d.return();
                  } finally {
                    if (u) throw l;
                  }
                }
              }
            }
          }, {
            key: "updateRectangleSize",
            value: function value() {
              this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
            }
          }, {
            key: "genInfoForMouseSelection",
            value: function value() {
              var t,
                  e = document.body.offsetWidth,
                  n = e / 2,
                  o = this.mouseY - window.pageYOffset,
                  r = document.elementFromPoint(n, o),
                  i = this.Editor.BlockManager.getBlockByChildNode(r);
              void 0 !== i && (t = this.Editor.BlockManager.blocks.findIndex(function (t) {
                return t.holder === i.holder;
              }));
              var a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content),
                  s = Number.parseInt(window.getComputedStyle(a).width, 10) / 2,
                  c = n - s,
                  u = n + s;
              return {
                index: t,
                leftPos: c,
                rightPos: u
              };
            }
          }, {
            key: "addBlockInSelection",
            value: function value(t) {
              this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
            }
          }, {
            key: "trySelectNextBlock",
            value: function value(t) {
              var e = this,
                  n = this.stackOfSelected[this.stackOfSelected.length - 1] === t,
                  o = this.stackOfSelected.length;

              if (!n) {
                var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0,
                    i = o <= 1 ? 0 : r ? 1 : -1,
                    a = t > this.stackOfSelected[o - 1] && 1 === i,
                    s = t < this.stackOfSelected[o - 1] && -1 === i,
                    c = a || s || 0 === i,
                    u = !c;

                if (u || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                  if (!u && t < this.stackOfSelected[o - 1]) for (var l = this.stackOfSelected[o - 1] - 1; l >= t; l--) {
                    this.addBlockInSelection(l);
                  } else if (u) {
                    var f,
                        d = o - 1;

                    for (f = t > this.stackOfSelected[o - 1] ? function () {
                      return t > e.stackOfSelected[d];
                    } : function () {
                      return t < e.stackOfSelected[d];
                    }; f();) {
                      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[d]), this.stackOfSelected.pop(), d--;
                    }
                  }
                } else for (var p = this.stackOfSelected[o - 1] + 1 || t; p <= t; p++) {
                  this.addBlockInSelection(p);
                }
              }
            }
          }], [{
            key: "CSS",
            get: function get() {
              return {
                overlay: "codex-editor-overlay",
                overlayContainer: "codex-editor-overlay__container",
                rect: "codex-editor-overlay__rectangle",
                topScrollZone: "codex-editor-overlay__scroll-zone--top",
                bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
              };
            }
          }]), e;
        }(u.default);

        _o28.default = h, h.displayName = "RectangleSelection", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(7), n(18)], void 0 === (i = "function" == typeof (o = function o(_o29, r, i, a, s, c, u, l, f, d) {

        var p = n(3);
        Object.defineProperty(_o29, "__esModule", {
          value: !0
        }), _o29.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), u = p(u), l = p(l), f = p(f), d = p(d);

        var h = function (t) {
          function e() {
            return (0, a.default)(this, e), (0, c.default)(this, (0, u.default)(e).apply(this, arguments));
          }

          var n;
          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "render",
            value: function value(t) {
              var e = this,
                  n = t.map(function (t) {
                return {
                  function: function _function() {
                    return e.insertBlock(t);
                  }
                };
              });
              return d.default.sequence(n);
            }
          }, {
            key: "insertBlock",
            value: (n = (0, i.default)(r.default.mark(function t(e) {
              var n, o, i, a, s, c, u, l, f;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (n = this.Editor, o = n.Tools, i = n.BlockManager, a = e.type, s = e.data, c = e.settings, !(a in o.available)) {
                        t.next = 15;
                        break;
                      }

                      t.prev = 5, i.insert(a, s, c), t.next = 13;
                      break;

                    case 9:
                      throw t.prev = 9, t.t0 = t.catch(5), d.default.log("Block «".concat(a, "» skipped because of plugins error"), "warn", s), Error(t.t0);

                    case 13:
                      t.next = 20;
                      break;

                    case 15:
                      u = {
                        savedData: {
                          type: a,
                          data: s
                        },
                        title: a
                      }, a in o.unavailable && (l = o.unavailable[a].toolbox, f = o.getToolSettings(a).toolbox, u.title = l.title || f.title || u.title), i.insert(o.stubTool, u, c).stretched = !0, d.default.log("Tool «".concat(a, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");

                    case 20:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this, [[5, 9]]);
            })), function (t) {
              return n.apply(this, arguments);
            })
          }]), e;
        }(f.default);

        _o29.default = h, h.displayName = "Renderer", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(58), n(48), n(1), n(2), n(4), n(5), n(6), n(7), n(18), n(347)], void 0 === (i = "function" == typeof (o = function o(_o30, r, i, a, s, c, u, l, f, d, p) {

        var h = n(3);
        Object.defineProperty(_o30, "__esModule", {
          value: !0
        }), _o30.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), c = h(c), u = h(u), l = h(l), f = h(f), d = h(d), p = h(p);

        var v = function (t) {
          function e() {
            var t;
            return (0, a.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).configCache = {}, t.inlineToolsConfigCache = null, t;
          }

          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "sanitizeBlocks",
            value: function value(t) {
              var e = this;
              return t.map(function (t) {
                var n = e.composeToolConfig(t.tool);
                return d.default.isEmpty(n) ? t : (t.data = e.deepSanitize(t.data, n), t);
              });
            }
          }, {
            key: "deepSanitize",
            value: function value(t, e) {
              return Array.isArray(t) ? this.cleanArray(t, e) : "object" === (0, i.default)(t) ? this.cleanObject(t, e) : "string" == typeof t ? this.cleanOneItem(t, e) : t;
            }
          }, {
            key: "clean",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = {
                tags: e
              },
                  o = this.createHTMLJanitorInstance(n);
              return o.clean(t);
            }
          }, {
            key: "composeToolConfig",
            value: function value(t) {
              if (this.configCache[t]) return this.configCache[t];
              var e = this.Editor.Tools.apiSettings.SANITIZE_CONFIG,
                  n = this.Editor.Tools.available[t],
                  o = this.getInlineToolsConfig(t);
              if (!n.sanitize || n[e] && d.default.isEmpty(n[e])) return o;
              var r = n.sanitize,
                  a = {};

              for (var s in r) {
                if (r.hasOwnProperty(s)) {
                  var c = r[s];
                  "object" === (0, i.default)(c) ? a[s] = Object.assign({}, o, c) : a[s] = c;
                }
              }

              return this.configCache[t] = a, a;
            }
          }, {
            key: "getInlineToolsConfig",
            value: function value(t) {
              var e = this.Editor.Tools,
                  n = e.getToolSettings(t),
                  o = n.inlineToolbar || [],
                  r = {};
              return "boolean" == typeof o && o ? r = this.getAllInlineToolsConfig() : o.map(function (t) {
                r = Object.assign(r, e.inline[t][e.apiSettings.SANITIZE_CONFIG]);
              }), r;
            }
          }, {
            key: "getAllInlineToolsConfig",
            value: function value() {
              var t = this.Editor.Tools;
              if (this.inlineToolsConfigCache) return this.inlineToolsConfigCache;
              var e = {};
              return Object.entries(t.inline).forEach(function (n) {
                var o = (0, r.default)(n, 2),
                    i = (o[0], o[1]);
                Object.assign(e, i[t.apiSettings.SANITIZE_CONFIG]);
              }), this.inlineToolsConfigCache = e, this.inlineToolsConfigCache;
            }
          }, {
            key: "cleanArray",
            value: function value(t, e) {
              var n = this;
              return t.map(function (t) {
                return n.deepSanitize(t, e);
              });
            }
          }, {
            key: "cleanObject",
            value: function value(t, e) {
              var n = {};

              for (var o in t) {
                if (t.hasOwnProperty(o)) {
                  var r = t[o],
                      i = this.isRule(e[o]) ? e[o] : e;
                  n[o] = this.deepSanitize(r, i);
                }
              }

              return n;
            }
          }, {
            key: "cleanOneItem",
            value: function value(t, e) {
              return "object" === (0, i.default)(e) ? this.clean(t, e) : !1 === e ? this.clean(t, {}) : t;
            }
          }, {
            key: "isRule",
            value: function value(t) {
              return "object" === (0, i.default)(t) || "boolean" == typeof t || "function" == typeof t;
            }
            /**
                   * If developer uses editor's API, then he can customize sanitize restrictions.
                   * Or, sanitizing config can be defined globally in editors initialization. That config will be used everywhere
                   * At least, if there is no config overrides, that API uses Default configuration
                   *
                   * @uses https://www.npmjs.com/package/html-janitor
                   * @license https://github.com/guardian/html-janitor/blob/master/LICENSE
                   *
                   * @param {SanitizerConfig} config - sanitizer extension
                   */

          }, {
            key: "createHTMLJanitorInstance",
            value: function value(t) {
              return t ? new p.default(t) : null;
            }
          }]), e;
        }(f.default);

        _o30.default = v, v.displayName = "Sanitizer", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function o(_o31, r, i, a, s, c, u, l, f) {

        var d = n(3);
        Object.defineProperty(_o31, "__esModule", {
          value: !0
        }), _o31.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), c = d(c), u = d(u), l = d(l);

        var p = function (t) {
          function e() {
            return (0, a.default)(this, e), (0, c.default)(this, (0, u.default)(e).apply(this, arguments));
          }

          var n, o;
          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "save",
            value: (o = (0, i.default)(r.default.mark(function t() {
              var e,
                  n,
                  o,
                  i,
                  a,
                  s,
                  c,
                  u,
                  l = this;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return e = this.Editor, n = e.BlockManager, o = e.Sanitizer, i = e.ModificationsObserver, a = n.blocks, s = [], i.disable(), a.forEach(function (t) {
                        s.push(l.getSavedData(t));
                      }), t.next = 6, Promise.all(s);

                    case 6:
                      return c = t.sent, t.next = 9, o.sanitizeBlocks(c);

                    case 9:
                      return u = t.sent, i.enable(), t.abrupt("return", this.makeOutput(u));

                    case 12:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return o.apply(this, arguments);
            })
          }, {
            key: "getSavedData",
            value: (n = (0, i.default)(r.default.mark(function t(e) {
              var n, o;
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.save();

                    case 2:
                      if (n = t.sent, t.t0 = n, !t.t0) {
                        t.next = 8;
                        break;
                      }

                      return t.next = 7, e.validate(n.data);

                    case 7:
                      t.t0 = t.sent;

                    case 8:
                      return o = t.t0, t.abrupt("return", Object.assign({}, n, {
                        isValid: o
                      }));

                    case 10:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            })), function (t) {
              return n.apply(this, arguments);
            })
          }, {
            key: "makeOutput",
            value: function value(t) {
              var e = this,
                  n = 0,
                  o = [];
              return console.groupCollapsed("[Editor.js saving]:"), t.forEach(function (t) {
                var r = t.tool,
                    i = t.data,
                    a = t.time,
                    s = t.isValid;
                if (n += a, console.group("".concat(r.charAt(0).toUpperCase() + r.slice(1))), !s) return console.log("Block «".concat(r, "» skipped because saved data is invalid")), void console.groupEnd();
                console.log(i), console.groupEnd(), r !== e.Editor.Tools.stubTool ? o.push({
                  type: r,
                  data: i
                }) : o.push(i);
              }), console.log("Total", n), console.groupEnd(), {
                time: +new Date(),
                blocks: o,
                version: "2.12.3"
              };
            }
          }]), e;
        }((f = d(f)).default);

        _o31.default = p, p.displayName = "Saver", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(348), n(7)], void 0 === (i = "function" == typeof (o = function o(_o32, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o32, "__esModule", {
          value: !0
        }), _o32.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u);

        var d = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).registeredShortcuts = [], t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "add",
            value: function value(t) {
              this.Editor.UI;
              var e = new u.default({
                name: t.name,
                on: document,
                callback: t.handler
              });
              this.registeredShortcuts.push(e);
            }
          }, {
            key: "remove",
            value: function value(t) {
              var e = this.registeredShortcuts.findIndex(function (e) {
                return e.name === t;
              });
              this.registeredShortcuts[e].remove(), this.registeredShortcuts.splice(e, 1);
            }
          }]), e;
        }((l = f(l)).default);

        _o32.default = d, d.displayName = "Shortcuts", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(13)], void 0 === (i = "function" == typeof (o = function o(_o33, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o33, "__esModule", {
          value: !0
        }), _o33.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);

        var d = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
              wrapper: null,
              toolSettings: null,
              defaultSettings: null
            }, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "make",
            value: function value() {
              this.nodes.wrapper = l.default.make("div", e.CSS.wrapper), this.nodes.toolSettings = l.default.make("div", e.CSS.toolSettings), this.nodes.defaultSettings = l.default.make("div", e.CSS.defaultSettings), l.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]);
            }
          }, {
            key: "open",
            value: function value() {
              this.nodes.wrapper.classList.add(e.CSS.wrapperOpened), this.addToolSettings(), this.addDefaultSettings(), this.Editor.Events.emit(this.events.opened);
            }
          }, {
            key: "close",
            value: function value() {
              this.nodes.wrapper.classList.remove(e.CSS.wrapperOpened), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.Editor.Events.emit(this.events.closed);
            }
          }, {
            key: "addToolSettings",
            value: function value() {
              "function" == typeof this.Editor.BlockManager.currentBlock.tool.renderSettings && l.default.append(this.nodes.toolSettings, this.Editor.BlockManager.currentBlock.tool.renderSettings());
            }
          }, {
            key: "addDefaultSettings",
            value: function value() {
              l.default.append(this.nodes.defaultSettings, this.Editor.BlockManager.currentBlock.renderTunes());
            }
          }, {
            key: "events",
            get: function get() {
              return {
                opened: "block-settings-opened",
                closed: "block-settings-closed"
              };
            }
          }, {
            key: "opened",
            get: function get() {
              return this.nodes.wrapper.classList.contains(e.CSS.wrapperOpened);
            }
          }], [{
            key: "CSS",
            get: function get() {
              return {
                wrapper: "ce-settings",
                wrapperOpened: "ce-settings--opened",
                toolSettings: "ce-settings__plugin-zone",
                defaultSettings: "ce-settings__default-zone",
                button: "ce-settings__button"
              };
            }
          }]), e;
        }(u.default);

        _o33.default = d, d.displayName = "BlockSettings", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(58), n(1), n(2), n(4), n(5), n(6), n(7), n(13), n(37), n(18)], void 0 === (i = "function" == typeof (o = function o(_o34, r, i, a, s, c, u, l, f, d, p) {

        var h = n(3);
        Object.defineProperty(_o34, "__esModule", {
          value: !0
        }), _o34.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), c = h(c), u = h(u), l = h(l), f = h(f), d = h(d), p = h(p);

        var v = function (t) {
          function e() {
            var t;
            return (0, i.default)(this, e), (t = (0, s.default)(this, (0, c.default)(e).apply(this, arguments))).CSS = {
              inlineToolbar: "ce-inline-toolbar",
              inlineToolbarShowed: "ce-inline-toolbar--showed",
              buttonsWrapper: "ce-inline-toolbar__buttons",
              actionsWrapper: "ce-inline-toolbar__actions",
              inlineToolButton: "ce-inline-tool",
              inlineToolButtonLast: "ce-inline-tool--last",
              inputField: "cdx-input"
            }, t.nodes = {
              wrapper: null,
              buttons: null,
              actions: null
            }, t.toolbarVerticalMargin = 20, t;
          }

          return (0, u.default)(e, t), (0, a.default)(e, [{
            key: "make",
            value: function value() {
              this.nodes.wrapper = f.default.make("div", this.CSS.inlineToolbar), this.nodes.buttons = f.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = f.default.make("div", this.CSS.actionsWrapper), this.Editor.Listeners.on(this.nodes.wrapper, "mousedown", function (t) {
                t.preventDefault();
              }), f.default.append(this.nodes.wrapper, [this.nodes.buttons, this.nodes.actions]), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addTools();
            }
          }, {
            key: "handleShowingEvent",
            value: function value(t) {
              this.allowedToShow() ? (this.move(), this.open(), this.checkToolsState(), this.Editor.BlockSelection.clearSelection()) : this.close();
            }
          }, {
            key: "move",
            value: function value() {
              var t = d.default.rect,
                  e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                  n = {
                x: t.x - e.left,
                y: t.y + t.height - e.top + this.toolbarVerticalMargin
              };
              t.width && (n.x += Math.floor(t.width / 2)), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
            }
          }, {
            key: "close",
            value: function value() {
              this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
                "function" == typeof t.clear && t.clear();
              });
            }
          }, {
            key: "open",
            value: function value() {
              this.filterTools(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
                "function" == typeof t.clear && t.clear();
              });
            }
          }, {
            key: "allowedToShow",
            value: function value() {
              var t = d.default.get(),
                  e = d.default.text;
              if (!t || !t.anchorNode) return !1;
              if (t.isCollapsed || e.length < 1) return !1;
              var n = t.anchorNode.parentElement;
              if (t && ["IMG", "INPUT"].includes(n.tagName)) return !1;
              var o = n.closest('[contenteditable="true"]');
              if (null === o) return !1;
              var r = this.Editor.BlockManager.getBlock(t.anchorNode);
              if (!r) return !1;
              var i = this.Editor.Tools.getToolSettings(r.name);
              return i && i[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR];
            }
          }, {
            key: "filterTools",
            value: function value() {
              var t = this,
                  e = d.default.get(),
                  n = this.Editor.BlockManager.getBlock(e.anchorNode),
                  o = this.Editor.Tools.getToolSettings(n.name),
                  r = o && o[this.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR],
                  i = Array.from(this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)));
              i.forEach(function (e) {
                e.hidden = !1, e.classList.remove(t.CSS.inlineToolButtonLast);
              }), Array.isArray(r) && i.forEach(function (t) {
                t.hidden = !r.includes(t.dataset.tool);
              });
              var a = i.filter(function (t) {
                return !t.hidden;
              }).pop();
              a && a.classList.add(this.CSS.inlineToolButtonLast);
            }
          }, {
            key: "addTools",
            value: function value() {
              var t = this;
              this.tools.forEach(function (e, n) {
                t.addTool(n, e);
              });
            }
          }, {
            key: "addTool",
            value: function value(t, e) {
              var n = this,
                  o = this.Editor,
                  i = o.Listeners,
                  a = o.Tools,
                  s = e.render();

              if (s) {
                if (s.dataset.tool = t, this.nodes.buttons.appendChild(s), "function" == typeof e.renderActions) {
                  var c = e.renderActions();
                  this.nodes.actions.appendChild(c);
                }

                i.on(s, "click", function (t) {
                  n.toolClicked(e), t.preventDefault();
                });
                var u = a.getToolSettings(t),
                    l = null,
                    f = Object.entries(a.internalTools).filter(function (t) {
                  var e = (0, r.default)(t, 2),
                      n = (e[0], e[1]);
                  return p.default.isFunction(n) ? n[a.apiSettings.IS_INLINE] : n.class[a.apiSettings.IS_INLINE];
                }).map(function (t) {
                  var e = (0, r.default)(t, 1),
                      n = e[0];
                  return n;
                });
                f.includes(t) ? l = this.inlineTools[t].shortcut : u && u[a.apiSettings.SHORTCUT] && (l = u[a.apiSettings.SHORTCUT]), l && this.enableShortcuts(e, l);
              } else p.default.log("Render method must return an instance of Node", "warn", t);
            }
          }, {
            key: "enableShortcuts",
            value: function value(t, e) {
              var n = this;
              this.Editor.Shortcuts.add({
                name: e,
                handler: function handler(e) {
                  var o = n.Editor.BlockManager.currentBlock;

                  if (o) {
                    var r = n.Editor.Tools.getToolSettings(o.name);
                    r && r[n.Editor.Tools.apiSettings.IS_ENABLED_INLINE_TOOLBAR] && (e.preventDefault(), n.toolClicked(t));
                  }
                }
              });
            }
          }, {
            key: "toolClicked",
            value: function value(t) {
              var e = d.default.range;
              t.surround(e), this.checkToolsState();
            }
          }, {
            key: "checkToolsState",
            value: function value() {
              this.tools.forEach(function (t) {
                t.checkState(d.default.get());
              });
            }
          }, {
            key: "tools",
            get: function get() {
              if (!this.toolsInstances || 0 === this.toolsInstances.size) {
                var t = this.inlineTools;

                for (var e in this.toolsInstances = new Map(), t) {
                  t.hasOwnProperty(e) && this.toolsInstances.set(e, t[e]);
                }
              }

              return this.toolsInstances;
            }
          }, {
            key: "inlineTools",
            get: function get() {
              var t = {};

              for (var e in this.Editor.Tools.inline) {
                if (this.Editor.Tools.inline.hasOwnProperty(e)) {
                  var n = this.Editor.Tools.getToolSettings(e);
                  t[e] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[e], n);
                }
              }

              return t;
            }
          }]), e;
        }(l.default);

        _o34.default = v, v.displayName = "InlineToolbar", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(13), n(18)], void 0 === (i = "function" == typeof (o = function o(_o35, r, i, a, s, c, u, l, f) {

        var d = n(3);
        Object.defineProperty(_o35, "__esModule", {
          value: !0
        }), _o35.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), c = d(c), u = d(u), l = d(l), f = d(f);

        var p = function (t) {
          function e() {
            var t;
            return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).opened = !1, t.nodes = {
              toolbox: null,
              tooltip: null,
              buttons: []
            }, t.activeButtonIndex = -1, t.displayedToolsCount = 0, t;
          }

          return (0, c.default)(e, t), (0, i.default)(e, [{
            key: "make",
            value: function value() {
              this.nodes.toolbox = l.default.make("div", this.CSS.toolbox), l.default.append(this.Editor.Toolbar.nodes.content, this.nodes.toolbox), this.addTools(), this.addTooltip();
            }
          }, {
            key: "toolButtonActivate",
            value: function value(t, e) {
              var n = this.Editor.Tools.toolsClasses[e];
              this.insertNewBlock(n, e);
            }
          }, {
            key: "open",
            value: function value() {
              this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0);
            }
          }, {
            key: "close",
            value: function value() {
              this.hideTooltip(), this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.activeButtonIndex = -1;
              var t = this.nodes.toolbox.querySelector(".".concat(this.CSS.toolboxButtonActive));
              t && t.classList.remove(this.CSS.toolboxButtonActive);
            }
          }, {
            key: "toggle",
            value: function value() {
              this.opened ? this.close() : this.open();
            }
          }, {
            key: "leaf",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.LEAF_DIRECTIONS.RIGHT,
                  n = this.nodes.toolbox.childNodes;
              -1 === this.activeButtonIndex ? this.activeButtonIndex = t === e.LEAF_DIRECTIONS.RIGHT ? -1 : 0 : n[this.activeButtonIndex].classList.remove(this.CSS.toolboxButtonActive), t === e.LEAF_DIRECTIONS.RIGHT ? this.activeButtonIndex = (this.activeButtonIndex + 1) % n.length : this.activeButtonIndex = (n.length + this.activeButtonIndex - 1) % n.length, n[this.activeButtonIndex].classList.add(this.CSS.toolboxButtonActive);
            }
          }, {
            key: "hideTooltip",
            value: function value() {
              this.nodes.tooltip.classList.remove(this.CSS.tooltipShown);
            }
          }, {
            key: "addTools",
            value: function value() {
              var t = this.Editor.Tools.available;

              for (var e in t) {
                t.hasOwnProperty(e) && this.addTool(e, t[e]);
              }
            }
          }, {
            key: "addTool",
            value: function value(t, e) {
              var n = this,
                  o = this.Editor.Tools.apiSettings,
                  r = e[o.TOOLBOX];
              if (!f.default.isEmpty(r)) if (!r || r.icon) {
                var i = this.Editor.Tools.getToolSettings(t),
                    a = i.toolbox,
                    s = void 0 === a ? {} : a,
                    c = l.default.make("li", [this.CSS.toolboxButton]);
                c.dataset.tool = t, c.innerHTML = s.icon || r.icon, l.default.append(this.nodes.toolbox, c), this.nodes.toolbox.appendChild(c), this.nodes.buttons.push(c), this.Editor.Listeners.on(c, "click", function (e) {
                  n.toolButtonActivate(e, t);
                }), this.Editor.Listeners.on(c, "mouseenter", function () {
                  n.showTooltip(c, t);
                }), this.Editor.Listeners.on(c, "mouseleave", function () {
                  n.hideTooltip();
                });
                var u = this.Editor.Tools.getToolSettings(t);
                u && u[this.Editor.Tools.apiSettings.SHORTCUT] && this.enableShortcut(e, t, u[this.Editor.Tools.apiSettings.SHORTCUT]), this.displayedToolsCount++;
              } else f.default.log("Toolbar icon is missed. Tool %o skipped", "warn", t);
            }
          }, {
            key: "addTooltip",
            value: function value() {
              this.nodes.tooltip = l.default.make("div", this.CSS.tooltip, {
                innerHTML: ""
              }), l.default.append(this.Editor.Toolbar.nodes.content, this.nodes.tooltip);
            }
          }, {
            key: "showTooltip",
            value: function value(t, e) {
              var n = this.Editor.Tools.getToolSettings(e),
                  o = this.Editor.Tools.available[e][this.Editor.Tools.apiSettings.TOOLBOX] || {},
                  r = n.toolbox || {},
                  i = r.title || o.title || e,
                  a = n[this.Editor.Tools.apiSettings.SHORTCUT],
                  s = document.createDocumentFragment(),
                  c = document.createTextNode(f.default.capitalize(i));

              if (s.appendChild(c), a) {
                var u = f.default.getUserOS();
                a = a.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), a = u.mac ? a.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : a.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s.appendChild(l.default.make("div", this.CSS.tooltipShortcut, {
                  textContent: a
                }));
              }

              var d = t.offsetLeft,
                  p = Math.floor(this.Editor.BlockManager.currentBlock.holder.offsetHeight / 2);
              this.nodes.tooltip.innerHTML = "", this.nodes.tooltip.appendChild(s), this.nodes.tooltip.style.left = "".concat(d + 16, "px"), this.nodes.tooltip.style.transform = "translate3d(-50%, ".concat(p, "px, 0)"), this.nodes.tooltip.classList.add(this.CSS.tooltipShown);
            }
          }, {
            key: "enableShortcut",
            value: function value(t, e, n) {
              var o = this;
              this.Editor.Shortcuts.add({
                name: n,
                handler: function handler(n) {
                  n.preventDefault(), o.insertNewBlock(t, e);
                }
              });
            }
          }, {
            key: "insertNewBlock",
            value: function value(t, e) {
              var n,
                  o = this.Editor,
                  r = o.BlockManager,
                  i = o.Caret,
                  a = r.currentBlock;
              (n = a.isEmpty ? r.replace(e) : r.insert(e)).call("appendCallback", {}), this.Editor.Caret.setToBlock(n), 0 === n.inputs.length && (n === r.lastBlock ? (r.insertAtEnd(), i.setToBlock(r.lastBlock)) : i.setToBlock(r.nextBlock)), this.Editor.Toolbar.close();
            }
          }, {
            key: "CSS",
            get: function get() {
              return {
                toolbox: "ce-toolbox",
                toolboxButton: "ce-toolbox__button",
                toolboxButtonActive: "ce-toolbox__button--active",
                toolboxOpened: "ce-toolbox--opened",
                tooltip: "ce-toolbox__tooltip",
                tooltipShown: "ce-toolbox__tooltip--shown",
                tooltipShortcut: "ce-toolbox__tooltip-shortcut",
                openedToolbarHolderModifier: "codex-editor--toolbox-opened"
              };
            }
          }, {
            key: "getActiveTool",
            get: function get() {
              var t = this.nodes.toolbox.childNodes;
              return -1 === this.activeButtonIndex ? null : t[this.activeButtonIndex].dataset.tool;
            }
          }, {
            key: "isEmpty",
            get: function get() {
              return 0 === this.displayedToolsCount;
            }
          }]), e;
        }(u.default);

        _o35.default = p, p.displayName = "Toolbox", p.LEAF_DIRECTIONS = {
          RIGHT: "right",
          LEFT: "left"
        }, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(58), n(48), n(1), n(2), n(4), n(5), n(6), n(349), n(7), n(18), n(350), n(351), n(352), n(353)], void 0 === (i = "function" == typeof (o = function o(_o36, r, i, a, s, c, u, l, f, d, p, h, v, g, y) {

        var b = n(3);
        Object.defineProperty(_o36, "__esModule", {
          value: !0
        }), _o36.default = void 0, r = b(r), i = b(i), a = b(a), s = b(s), c = b(c), u = b(u), l = b(l), f = b(f), d = b(d), p = b(p), h = b(h), v = b(v), g = b(g), y = b(y);

        var m = function (t) {
          function e(t) {
            var n,
                o = t.config;
            return (0, a.default)(this, e), (n = (0, c.default)(this, (0, u.default)(e).call(this, {
              config: o
            }))).stubTool = "stub", n.toolsClasses = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n.toolsSettings = {}, n._inlineTools = {}, n.toolsClasses = {}, n.toolsSettings = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n._inlineTools = null, n;
          }

          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "prepare",
            value: function value() {
              var t = this;
              if (this.validateTools(), p.default.deepMerge(this.config.tools, this.internalTools), !this.config.hasOwnProperty("tools") || 0 === Object.keys(this.config.tools).length) throw Error("Can't start without tools");

              for (var e in this.config.tools) {
                "object" === (0, i.default)(this.config.tools[e]) ? (this.toolsClasses[e] = this.config.tools[e].class, this.toolsSettings[e] = this.config.tools[e], delete this.toolsSettings[e].class) : (this.toolsClasses[e] = this.config.tools[e], this.toolsSettings[e] = {
                  class: this.config.tools[e]
                });
              }

              var n = this.getListOfPrepareFunctions();
              return 0 === n.length ? Promise.resolve() : p.default.sequence(n, function (e) {
                t.success(e);
              }, function (e) {
                t.fallback(e);
              });
            }
          }, {
            key: "success",
            value: function value(t) {
              this.toolsAvailable[t.toolName] = this.toolsClasses[t.toolName];
            }
          }, {
            key: "fallback",
            value: function value(t) {
              this.toolsUnavailable[t.toolName] = this.toolsClasses[t.toolName];
            }
          }, {
            key: "construct",
            value: function value(t, e) {
              var n = this.toolsClasses[t],
                  o = this.toolsSettings[t][this.apiSettings.CONFIG],
                  r = {
                api: this.Editor.API.methods,
                config: o || {},
                data: e
              };
              return new n(r);
            }
          }, {
            key: "constructInline",
            value: function value(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = {
                api: this.Editor.API.methods,
                config: e[this.apiSettings.CONFIG] || {}
              };
              return new t(n);
            }
          }, {
            key: "isInitial",
            value: function value(t) {
              return t instanceof this.available[this.config.initialBlock];
            }
          }, {
            key: "getToolSettings",
            value: function value(t) {
              return this.toolsSettings[t];
            }
          }, {
            key: "getListOfPrepareFunctions",
            value: function value() {
              var t = [];

              for (var e in this.toolsClasses) {
                if (this.toolsClasses.hasOwnProperty(e)) {
                  var n = this.toolsClasses[e];
                  "function" == typeof n.prepare ? t.push({
                    function: n.prepare,
                    data: {
                      toolName: e,
                      config: this.toolsSettings[e][this.apiSettings.CONFIG]
                    }
                  }) : this.toolsAvailable[e] = n;
                }
              }

              return t;
            }
          }, {
            key: "validateTools",
            value: function value() {
              for (var t in this.config.tools) {
                if (this.config.tools.hasOwnProperty(t)) {
                  if (t in this.internalTools) return;
                  var e = this.config.tools[t];
                  if (!p.default.isFunction(e) && !p.default.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"));
                }
              }
            }
          }, {
            key: "available",
            get: function get() {
              return this.toolsAvailable;
            }
          }, {
            key: "unavailable",
            get: function get() {
              return this.toolsUnavailable;
            }
          }, {
            key: "inline",
            get: function get() {
              var t = this;
              if (this._inlineTools) return this._inlineTools;
              var e = Object.entries(this.available).filter(function (e) {
                var n = (0, r.default)(e, 2),
                    o = (n[0], n[1]);
                if (!o[t.apiSettings.IS_INLINE]) return !1;
                var i = ["render", "surround", "checkState"].filter(function (e) {
                  return !t.constructInline(o)[e];
                });
                return !i.length || (p.default.log("Incorrect Inline Tool: ".concat(o.name, ". Some of required methods is not implemented %o"), "warn", i), !1);
              }),
                  n = {};
              return e.forEach(function (t) {
                var e = (0, r.default)(t, 2),
                    o = e[0],
                    i = e[1];
                return n[o] = i;
              }), this._inlineTools = n, this._inlineTools;
            }
          }, {
            key: "blockTools",
            get: function get() {
              var t = this,
                  e = Object.entries(this.available).filter(function (e) {
                var n = (0, r.default)(e, 2),
                    o = (n[0], n[1]);
                return !o[t.apiSettings.IS_INLINE];
              }),
                  n = {};
              return e.forEach(function (t) {
                var e = (0, r.default)(t, 2),
                    o = e[0],
                    i = e[1];
                return n[o] = i;
              }), n;
            }
          }, {
            key: "apiSettings",
            get: function get() {
              return {
                CONFIG: "config",
                IS_ENABLED_INLINE_TOOLBAR: "inlineToolbar",
                IS_ENABLED_LINE_BREAKS: "enableLineBreaks",
                IS_INLINE: "isInline",
                IS_PASTE_DISALLOWED: "disallowPaste",
                SHORTCUT: "shortcut",
                TOOLBOX: "toolbox",
                SANITIZE_CONFIG: "sanitize"
              };
            }
          }, {
            key: "internalTools",
            get: function get() {
              return {
                bold: {
                  class: h.default
                },
                italic: {
                  class: v.default
                },
                link: {
                  class: g.default
                },
                paragraph: {
                  class: f.default,
                  inlineToolbar: !0
                },
                stub: {
                  class: y.default
                }
              };
            }
          }]), e;
        }(d.default);

        _o36.default = m, m.displayName = "Tools", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(29), n(30), n(1), n(2), n(4), n(5), n(6), n(354), n(7), n(13), n(18), n(37)], void 0 === (i = "function" == typeof (o = function o(_o37, r, i, a, s, c, u, l, f, d, p, h, v) {

        var g = n(3);
        Object.defineProperty(_o37, "__esModule", {
          value: !0
        }), _o37.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), c = g(c), u = g(u), l = g(l), f = g(f), d = g(d), p = g(p), h = g(h), v = g(v);

        var y = function (t) {
          function e() {
            var t;
            return (0, a.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).contentWidth = 650, t.nodes = {
              holder: null,
              wrapper: null,
              redactor: null
            }, t;
          }

          var o, d;
          return (0, l.default)(e, t), (0, s.default)(e, [{
            key: "addLoader",
            value: function value() {
              this.nodes.loader = p.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
            }
          }, {
            key: "removeLoader",
            value: function value() {
              this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
            }
          }, {
            key: "prepare",
            value: (d = (0, i.default)(r.default.mark(function t() {
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, this.make();

                    case 2:
                      return this.addLoader(), t.next = 5, this.appendSVGSprite();

                    case 5:
                      return t.next = 7, this.Editor.Toolbar.make();

                    case 7:
                      return t.next = 9, this.Editor.InlineToolbar.make();

                    case 9:
                      return t.next = 11, this.loadStyles();

                    case 11:
                      return t.next = 13, this.bindEvents();

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return d.apply(this, arguments);
            })
          }, {
            key: "destroy",
            value: function value() {
              this.nodes.holder.innerHTML = "";
            }
          }, {
            key: "make",
            value: (o = (0, i.default)(r.default.mark(function t() {
              return r.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (this.nodes.holder = document.getElementById(this.config.holderId), this.nodes.holder) {
                        t.next = 3;
                        break;
                      }

                      throw Error("Holder wasn't found by ID: #" + this.config.holderId);

                    case 3:
                      this.nodes.wrapper = p.default.make("div", this.CSS.editorWrapper), this.nodes.redactor = p.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentWidth && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);

                    case 8:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return o.apply(this, arguments);
            })
          }, {
            key: "loadStyles",
            value: function value() {
              var t = n(355),
                  e = p.default.make("style", null, {
                textContent: t.toString()
              });
              p.default.prepend(document.head, e);
            }
          }, {
            key: "bindEvents",
            value: function value() {
              var t = this;
              this.Editor.Listeners.on(this.nodes.redactor, "click", function (e) {
                return t.redactorClicked(e);
              }, !1), this.Editor.Listeners.on(document, "keydown", function (e) {
                return t.documentKeydown(e);
              }, !0), this.Editor.Listeners.on(document, "click", function (e) {
                return t.documentClicked(e);
              }, !0);
            }
          }, {
            key: "documentKeydown",
            value: function value(t) {
              switch (t.keyCode) {
                case h.default.keyCodes.ENTER:
                  this.enterPressed(t);
                  break;

                case h.default.keyCodes.BACKSPACE:
                  this.backspacePressed(t);
                  break;

                default:
                  this.defaultBehaviour(t);
              }
            }
          }, {
            key: "defaultBehaviour",
            value: function value(t) {
              var e = t.target.closest(".".concat(this.CSS.editorWrapper)),
                  n = this.Editor.BlockManager.currentBlock,
                  o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              e || n && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
            }
          }, {
            key: "backspacePressed",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = e.BlockSelection,
                  r = e.Caret;

              if (o.anyBlockSelected) {
                var i = n.removeSelectedBlocks();
                r.setToBlock(n.insertAtIndex(i, !0), r.positions.START), o.clearSelection(), t.stopPropagation(), t.stopImmediatePropagation();
              }
            }
          }, {
            key: "enterPressed",
            value: function value(t) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = e.BlockSelection,
                  r = e.Caret,
                  i = n.currentBlockIndex >= 0;

              if (o.anyBlockSelected) {
                var a = n.removeSelectedBlocks();
                return r.setToBlock(n.insertAtIndex(a, !0), r.positions.START), o.clearSelection(), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
              }

              if (i && "BODY" === t.target.tagName) {
                var s = this.Editor.BlockManager.insert();
                this.Editor.Caret.setToBlock(s), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
              }

              this.Editor.BlockSelection.clearSelection();
            }
          }, {
            key: "documentClicked",
            value: function value(t) {
              var e = t.target,
                  n = e.closest(".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)),
                  o = e.closest("#".concat(this.config.holderId));
              o ? n ? v.default.isAtEditor && this.Editor.BlockManager.setCurrentBlockByChildNode(v.default.anchorNode) : this.Editor.InlineToolbar.handleShowingEvent(t) : (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.BlockSelection.clearSelection());
            }
          }, {
            key: "redactorClicked",
            value: function value(t) {
              if (v.default.isCollapsed) {
                var e = t.target;
                e === this.nodes.redactor && (e = document.elementFromPoint(t.clientX, t.clientY));

                try {
                  this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
                } catch (t) {
                  this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                }

                t.stopImmediatePropagation(), t.stopPropagation(), this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide(), this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.insert();
                var n = this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool);

                if (n) {
                  var o = this.Editor.BlockManager.currentBlock.isEmpty;
                  o && this.Editor.Toolbar.plusButton.show();
                }

                this.Editor.BlockSelection.clearSelection();
              }
            }
          }, {
            key: "appendSVGSprite",
            value: function value() {
              var t = p.default.make("div");
              t.hidden = !0, t.style.display = "none", t.innerHTML = f.default, p.default.append(this.nodes.wrapper, t);
            }
          }, {
            key: "CSS",
            get: function get() {
              return {
                editorWrapper: "codex-editor",
                editorWrapperNarrow: "codex-editor--narrow",
                editorZone: "codex-editor__redactor",
                editorZoneHidden: "codex-editor__redactor--hidden",
                editorLoader: "codex-editor__loader",
                editorEmpty: "codex-editor--empty"
              };
            }
          }]), e;
        }(d.default);

        _o37.default = y, y.displayName = "UI", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      n(160), t.exports = n(326);
    }, function (t, e, n) {
      n(161);
    }, function (t, e, n) {

      n(162), n(306), n(308), n(310), n(312), n(314), n(316), n(318), n(320), n(322), n(128);
    }, function (t, e, n) {
      n(163), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(244), n(245), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(93), n(269), n(270), n(118), n(271), n(272), n(273), n(274), n(119), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), t.exports = n(16);
    }, function (t, e, n) {

      var o = n(9),
          r = n(21),
          i = n(15),
          a = n(0),
          s = n(19),
          c = n(39).KEY,
          u = n(8),
          l = n(73),
          f = n(49),
          d = n(41),
          p = n(12),
          h = n(74),
          v = n(100),
          g = n(164),
          y = n(77),
          b = n(11),
          m = n(10),
          k = n(23),
          x = n(38),
          w = n(40),
          S = n(45),
          E = n(103),
          T = n(26),
          _ = n(14),
          B = n(43),
          C = T.f,
          O = _.f,
          I = E.f,
          _N = o.Symbol,
          M = o.JSON,
          A = M && M.stringify,
          L = p("_hidden"),
          P = p("toPrimitive"),
          R = {}.propertyIsEnumerable,
          j = l("symbol-registry"),
          F = l("symbols"),
          D = l("op-symbols"),
          U = Object.prototype,
          H = "function" == typeof _N,
          z = o.QObject,
          W = !z || !z.prototype || !z.prototype.findChild,
          G = i && u(function () {
        return 7 != S(O({}, "a", {
          get: function get() {
            return O(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, e, n) {
        var o = C(U, e);
        o && delete U[e], O(t, e, n), o && t !== U && O(U, e, o);
      } : O,
          V = function V(t) {
        var e = F[t] = S(_N.prototype);
        return e._k = t, e;
      },
          X = H && "symbol" == _typeof(_N.iterator) ? function (t) {
        return "symbol" == _typeof(t);
      } : function (t) {
        return t instanceof _N;
      },
          Y = function Y(t, e, n) {
        return t === U && Y(D, e, n), b(t), e = x(e, !0), b(n), r(F, e) ? (n.enumerable ? (r(t, L) && t[L][e] && (t[L][e] = !1), n = S(n, {
          enumerable: w(0, !1)
        })) : (r(t, L) || O(t, L, w(1, {})), t[L][e] = !0), G(t, e, n)) : O(t, e, n);
      },
          K = function K(t, e) {
        b(t);

        for (var n, o = g(e = k(e)), r = 0, i = o.length; i > r;) {
          Y(t, n = o[r++], e[n]);
        }

        return t;
      },
          Z = function Z(t) {
        var e = R.call(this, t = x(t, !0));
        return !(this === U && r(F, t) && !r(D, t)) && (!(e || !r(this, t) || !r(F, t) || r(this, L) && this[L][t]) || e);
      },
          q = function q(t, e) {
        if (t = k(t), e = x(e, !0), t !== U || !r(F, e) || r(D, e)) {
          var n = C(t, e);
          return !n || !r(F, e) || r(t, L) && t[L][e] || (n.enumerable = !0), n;
        }
      },
          J = function J(t) {
        for (var e, n = I(k(t)), o = [], i = 0; n.length > i;) {
          r(F, e = n[i++]) || e == L || e == c || o.push(e);
        }

        return o;
      },
          $ = function $(t) {
        for (var e, n = t === U, o = I(n ? D : k(t)), i = [], a = 0; o.length > a;) {
          !r(F, e = o[a++]) || n && !r(U, e) || i.push(F[e]);
        }

        return i;
      };

      H || (s((_N = function N() {
        if (this instanceof _N) throw TypeError("Symbol is not a constructor!");

        var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function e(n) {
          this === U && e.call(D, n), r(this, L) && r(this[L], t) && (this[L][t] = !1), G(this, t, w(1, n));
        };

        return i && W && G(U, t, {
          configurable: !0,
          set: e
        }), V(t);
      }).prototype, "toString", function () {
        return this._k;
      }), T.f = q, _.f = Y, n(46).f = E.f = J, n(57).f = Z, n(60).f = $, i && !n(42) && s(U, "propertyIsEnumerable", Z, !0), h.f = function (t) {
        return V(p(t));
      }), a(a.G + a.W + a.F * !H, {
        Symbol: _N
      });

      for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) {
        p(Q[tt++]);
      }

      for (var et = B(p.store), nt = 0; et.length > nt;) {
        v(et[nt++]);
      }

      a(a.S + a.F * !H, "Symbol", {
        for: function _for(t) {
          return r(j, t += "") ? j[t] : j[t] = _N(t);
        },
        keyFor: function keyFor(t) {
          if (!X(t)) throw TypeError(t + " is not a symbol!");

          for (var e in j) {
            if (j[e] === t) return e;
          }
        },
        useSetter: function useSetter() {
          W = !0;
        },
        useSimple: function useSimple() {
          W = !1;
        }
      }), a(a.S + a.F * !H, "Object", {
        create: function create(t, e) {
          return void 0 === e ? S(t) : K(S(t), e);
        },
        defineProperty: Y,
        defineProperties: K,
        getOwnPropertyDescriptor: q,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: $
      }), M && a(a.S + a.F * (!H || u(function () {
        var t = _N();

        return "[null]" != A([t]) || "{}" != A({
          a: t
        }) || "{}" != A(Object(t));
      })), "JSON", {
        stringify: function stringify(t) {
          for (var e, n, o = [t], r = 1; arguments.length > r;) {
            o.push(arguments[r++]);
          }

          if (n = e = o[1], (m(e) || void 0 !== t) && !X(t)) return y(e) || (e = function e(t, _e) {
            if ("function" == typeof n && (_e = n.call(this, t, _e)), !X(_e)) return _e;
          }), o[1] = e, A.apply(M, o);
        }
      }), _N.prototype[P] || n(22)(_N.prototype, P, _N.prototype.valueOf), f(_N, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0);
    }, function (t, e, n) {
      var o = n(43),
          r = n(60),
          i = n(57);

      t.exports = function (t) {
        var e = o(t),
            n = r.f;
        if (n) for (var a, s = n(t), c = i.f, u = 0; s.length > u;) {
          c.call(t, a = s[u++]) && e.push(a);
        }
        return e;
      };
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Object", {
        create: n(45)
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S + o.F * !n(15), "Object", {
        defineProperty: n(14).f
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S + o.F * !n(15), "Object", {
        defineProperties: n(102)
      });
    }, function (t, e, n) {
      var o = n(23),
          r = n(26).f;
      n(27)("getOwnPropertyDescriptor", function () {
        return function (t, e) {
          return r(o(t), e);
        };
      });
    }, function (t, e, n) {
      var o = n(24),
          r = n(47);
      n(27)("getPrototypeOf", function () {
        return function (t) {
          return r(o(t));
        };
      });
    }, function (t, e, n) {
      var o = n(24),
          r = n(43);
      n(27)("keys", function () {
        return function (t) {
          return r(o(t));
        };
      });
    }, function (t, e, n) {
      n(27)("getOwnPropertyNames", function () {
        return n(103).f;
      });
    }, function (t, e, n) {
      var o = n(10),
          r = n(39).onFreeze;
      n(27)("freeze", function (t) {
        return function (e) {
          return t && o(e) ? t(r(e)) : e;
        };
      });
    }, function (t, e, n) {
      var o = n(10),
          r = n(39).onFreeze;
      n(27)("seal", function (t) {
        return function (e) {
          return t && o(e) ? t(r(e)) : e;
        };
      });
    }, function (t, e, n) {
      var o = n(10),
          r = n(39).onFreeze;
      n(27)("preventExtensions", function (t) {
        return function (e) {
          return t && o(e) ? t(r(e)) : e;
        };
      });
    }, function (t, e, n) {
      var o = n(10);
      n(27)("isFrozen", function (t) {
        return function (e) {
          return !o(e) || !!t && t(e);
        };
      });
    }, function (t, e, n) {
      var o = n(10);
      n(27)("isSealed", function (t) {
        return function (e) {
          return !o(e) || !!t && t(e);
        };
      });
    }, function (t, e, n) {
      var o = n(10);
      n(27)("isExtensible", function (t) {
        return function (e) {
          return !!o(e) && (!t || t(e));
        };
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S + o.F, "Object", {
        assign: n(104)
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Object", {
        is: n(180)
      });
    }, function (t, e) {
      t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      };
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Object", {
        setPrototypeOf: n(79).set
      });
    }, function (t, e, n) {

      var o = n(61),
          r = {};
      r[n(12)("toStringTag")] = "z", r + "" != "[object z]" && n(19)(Object.prototype, "toString", function () {
        return "[object " + o(this) + "]";
      }, !0);
    }, function (t, e, n) {
      var o = n(0);
      o(o.P, "Function", {
        bind: n(105)
      });
    }, function (t, e, n) {
      var o = n(14).f,
          r = Function.prototype,
          i = /^\s*function ([^ (]*)/;
      "name" in r || n(15) && o(r, "name", {
        configurable: !0,
        get: function get() {
          try {
            return ("" + this).match(i)[1];
          } catch (t) {
            return "";
          }
        }
      });
    }, function (t, e, n) {

      var o = n(10),
          r = n(47),
          i = n(12)("hasInstance"),
          a = Function.prototype;
      i in a || n(14).f(a, i, {
        value: function value(t) {
          if ("function" != typeof this || !o(t)) return !1;
          if (!o(this.prototype)) return t instanceof this;

          for (; t = r(t);) {
            if (this.prototype === t) return !0;
          }

          return !1;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(107);
      o(o.G + o.F * (parseInt != r), {
        parseInt: r
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(108);
      o(o.G + o.F * (parseFloat != r), {
        parseFloat: r
      });
    }, function (t, e, n) {

      var o = n(9),
          r = n(21),
          i = n(33),
          a = n(81),
          s = n(38),
          c = n(8),
          u = n(46).f,
          l = n(26).f,
          f = n(14).f,
          d = n(62).trim,
          _p = o.Number,
          h = _p,
          v = _p.prototype,
          g = "Number" == i(n(45)(v)),
          y = "trim" in String.prototype,
          b = function b(t) {
        var e = s(t, !1);

        if ("string" == typeof e && e.length > 2) {
          var n,
              o,
              r,
              i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);

          if (43 === i || 45 === i) {
            if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === i) {
            switch (e.charCodeAt(1)) {
              case 66:
              case 98:
                o = 2, r = 49;
                break;

              case 79:
              case 111:
                o = 8, r = 55;
                break;

              default:
                return +e;
            }

            for (var a, c = e.slice(2), u = 0, l = c.length; u < l; u++) {
              if ((a = c.charCodeAt(u)) < 48 || a > r) return NaN;
            }

            return parseInt(c, o);
          }
        }

        return +e;
      };

      if (!_p(" 0o1") || !_p("0b1") || _p("+0x1")) {
        _p = function p(t) {
          var e = arguments.length < 1 ? 0 : t,
              n = this;
          return n instanceof _p && (g ? c(function () {
            v.valueOf.call(n);
          }) : "Number" != i(n)) ? a(new h(b(e)), n, _p) : b(e);
        };

        for (var m, k = n(15) ? u(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) {
          r(h, m = k[x]) && !r(_p, m) && f(_p, m, l(h, m));
        }

        _p.prototype = v, v.constructor = _p, n(19)(o, "Number", _p);
      }
    }, function (t, e, n) {

      var o = n(0),
          r = n(35),
          i = n(109),
          a = n(82),
          s = 1..toFixed,
          c = Math.floor,
          u = [0, 0, 0, 0, 0, 0],
          l = "Number.toFixed: incorrect invocation!",
          f = function f(t, e) {
        for (var n = -1, o = e; ++n < 6;) {
          o += t * u[n], u[n] = o % 1e7, o = c(o / 1e7);
        }
      },
          d = function d(t) {
        for (var e = 6, n = 0; --e >= 0;) {
          n += u[e], u[e] = c(n / t), n = n % t * 1e7;
        }
      },
          p = function p() {
        for (var t = 6, e = ""; --t >= 0;) {
          if ("" !== e || 0 === t || 0 !== u[t]) {
            var n = String(u[t]);
            e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
          }
        }

        return e;
      },
          h = function h(t, e, n) {
        return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
      };

      o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(8)(function () {
        s.call({});
      })), "Number", {
        toFixed: function toFixed(t) {
          var e,
              n,
              o,
              s,
              c = i(this, l),
              u = r(t),
              v = "",
              g = "0";
          if (u < 0 || u > 20) throw RangeError(l);
          if (c != c) return "NaN";
          if (c <= -1e21 || c >= 1e21) return String(c);
          if (c < 0 && (v = "-", c = -c), c > 1e-21) if (n = (e = function (t) {
            for (var e = 0, n = t; n >= 4096;) {
              e += 12, n /= 4096;
            }

            for (; n >= 2;) {
              e += 1, n /= 2;
            }

            return e;
          }(c * h(2, 69, 1)) - 69) < 0 ? c * h(2, -e, 1) : c / h(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
            for (f(0, n), o = u; o >= 7;) {
              f(1e7, 0), o -= 7;
            }

            for (f(h(10, o, 1), 0), o = e - 1; o >= 23;) {
              d(1 << 23), o -= 23;
            }

            d(1 << o), f(1, 1), d(2), g = p();
          } else f(0, n), f(1 << -e, 0), g = p() + a.call("0", u);
          return g = u > 0 ? v + ((s = g.length) <= u ? "0." + a.call("0", u - s) + g : g.slice(0, s - u) + "." + g.slice(s - u)) : v + g;
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(8),
          i = n(109),
          a = 1..toPrecision;
      o(o.P + o.F * (r(function () {
        return "1" !== a.call(1, void 0);
      }) || !r(function () {
        a.call({});
      })), "Number", {
        toPrecision: function toPrecision(t) {
          var e = i(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === t ? a.call(e) : a.call(e, t);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Number", {
        EPSILON: Math.pow(2, -52)
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(9).isFinite;
      o(o.S, "Number", {
        isFinite: function isFinite(t) {
          return "number" == typeof t && r(t);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Number", {
        isInteger: n(110)
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Number", {
        isNaN: function isNaN(t) {
          return t != t;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(110),
          i = Math.abs;
      o(o.S, "Number", {
        isSafeInteger: function isSafeInteger(t) {
          return r(t) && i(t) <= 9007199254740991;
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(108);
      o(o.S + o.F * (Number.parseFloat != r), "Number", {
        parseFloat: r
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(107);
      o(o.S + o.F * (Number.parseInt != r), "Number", {
        parseInt: r
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(111),
          i = Math.sqrt,
          a = Math.acosh;
      o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function acosh(t) {
          return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1));
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = Math.asinh;
      o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
        asinh: function t(e) {
          return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = Math.atanh;
      o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
        atanh: function atanh(t) {
          return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(83);
      o(o.S, "Math", {
        cbrt: function cbrt(t) {
          return r(t = +t) * Math.pow(Math.abs(t), 1 / 3);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        clz32: function clz32(t) {
          return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = Math.exp;
      o(o.S, "Math", {
        cosh: function cosh(t) {
          return (r(t = +t) + r(-t)) / 2;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(84);
      o(o.S + o.F * (r != Math.expm1), "Math", {
        expm1: r
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        fround: n(208)
      });
    }, function (t, e, n) {
      var o = n(83),
          r = Math.pow,
          i = r(2, -52),
          a = r(2, -23),
          s = r(2, 127) * (2 - a),
          c = r(2, -126);

      t.exports = Math.fround || function (t) {
        var e,
            n,
            r = Math.abs(t),
            u = o(t);
        return r < c ? u * (r / c / a + 1 / i - 1 / i) * c * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? u * (1 / 0) : u * n;
      };
    }, function (t, e, n) {
      var o = n(0),
          r = Math.abs;
      o(o.S, "Math", {
        hypot: function hypot(t, e) {
          for (var n, o, i = 0, a = 0, s = arguments.length, c = 0; a < s;) {
            c < (n = r(arguments[a++])) ? (i = i * (o = c / n) * o + 1, c = n) : i += n > 0 ? (o = n / c) * o : n;
          }

          return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = Math.imul;
      o(o.S + o.F * n(8)(function () {
        return -5 != r(4294967295, 5) || 2 != r.length;
      }), "Math", {
        imul: function imul(t, e) {
          var n = +t,
              o = +e,
              r = 65535 & n,
              i = 65535 & o;
          return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        log10: function log10(t) {
          return Math.log(t) * Math.LOG10E;
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        log1p: n(111)
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        log2: function log2(t) {
          return Math.log(t) / Math.LN2;
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        sign: n(83)
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(84),
          i = Math.exp;
      o(o.S + o.F * n(8)(function () {
        return -2e-17 != !Math.sinh(-2e-17);
      }), "Math", {
        sinh: function sinh(t) {
          return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(84),
          i = Math.exp;
      o(o.S, "Math", {
        tanh: function tanh(t) {
          var e = r(t = +t),
              n = r(-t);
          return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Math", {
        trunc: function trunc(t) {
          return (t > 0 ? Math.floor : Math.ceil)(t);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(44),
          i = String.fromCharCode,
          a = String.fromCodePoint;
      o(o.S + o.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function fromCodePoint(t) {
          for (var e, n = [], o = arguments.length, a = 0; o > a;) {
            if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
            n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
          }

          return n.join("");
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(23),
          i = n(17);
      o(o.S, "String", {
        raw: function raw(t) {
          for (var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;) {
            a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
          }

          return a.join("");
        }
      });
    }, function (t, e, n) {

      n(62)("trim", function (t) {
        return function () {
          return t(this, 3);
        };
      });
    }, function (t, e, n) {

      var o = n(112)(!0);
      n(85)(String, "String", function (t) {
        this._t = String(t), this._i = 0;
      }, function () {
        var t,
            e = this._t,
            n = this._i;
        return n >= e.length ? {
          value: void 0,
          done: !0
        } : (t = o(e, n), this._i += t.length, {
          value: t,
          done: !1
        });
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(112)(!1);
      o(o.P, "String", {
        codePointAt: function codePointAt(t) {
          return r(this, t);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(17),
          i = n(86),
          a = "".endsWith;
      o(o.P + o.F * n(88)("endsWith"), "String", {
        endsWith: function endsWith(t) {
          var e = i(this, t, "endsWith"),
              n = arguments.length > 1 ? arguments[1] : void 0,
              o = r(e.length),
              s = void 0 === n ? o : Math.min(r(n), o),
              c = String(t);
          return a ? a.call(e, c, s) : e.slice(s - c.length, s) === c;
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(86);
      o(o.P + o.F * n(88)("includes"), "String", {
        includes: function includes(t) {
          return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.P, "String", {
        repeat: n(82)
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(17),
          i = n(86),
          a = "".startsWith;
      o(o.P + o.F * n(88)("startsWith"), "String", {
        startsWith: function startsWith(t) {
          var e = i(this, t, "startsWith"),
              n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
              o = String(t);
          return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
        }
      });
    }, function (t, e, n) {

      n(20)("anchor", function (t) {
        return function (e) {
          return t(this, "a", "name", e);
        };
      });
    }, function (t, e, n) {

      n(20)("big", function (t) {
        return function () {
          return t(this, "big", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("blink", function (t) {
        return function () {
          return t(this, "blink", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("bold", function (t) {
        return function () {
          return t(this, "b", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("fixed", function (t) {
        return function () {
          return t(this, "tt", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("fontcolor", function (t) {
        return function (e) {
          return t(this, "font", "color", e);
        };
      });
    }, function (t, e, n) {

      n(20)("fontsize", function (t) {
        return function (e) {
          return t(this, "font", "size", e);
        };
      });
    }, function (t, e, n) {

      n(20)("italics", function (t) {
        return function () {
          return t(this, "i", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("link", function (t) {
        return function (e) {
          return t(this, "a", "href", e);
        };
      });
    }, function (t, e, n) {

      n(20)("small", function (t) {
        return function () {
          return t(this, "small", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("strike", function (t) {
        return function () {
          return t(this, "strike", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("sub", function (t) {
        return function () {
          return t(this, "sub", "", "");
        };
      });
    }, function (t, e, n) {

      n(20)("sup", function (t) {
        return function () {
          return t(this, "sup", "", "");
        };
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Date", {
        now: function now() {
          return new Date().getTime();
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(24),
          i = n(38);
      o(o.P + o.F * n(8)(function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
          toISOString: function toISOString() {
            return 1;
          }
        });
      }), "Date", {
        toJSON: function toJSON(t) {
          var e = r(this),
              n = i(e);
          return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(243);
      o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
        toISOString: r
      });
    }, function (t, e, n) {

      var o = n(8),
          r = Date.prototype.getTime,
          i = Date.prototype.toISOString,
          a = function a(t) {
        return t > 9 ? t : "0" + t;
      };

      t.exports = o(function () {
        return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1));
      }) || !o(function () {
        i.call(new Date(NaN));
      }) ? function () {
        if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            o = e < 0 ? "-" : e > 9999 ? "+" : "";
        return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
      } : i;
    }, function (t, e, n) {
      var o = Date.prototype,
          r = o.toString,
          i = o.getTime;
      new Date(NaN) + "" != "Invalid Date" && n(19)(o, "toString", function () {
        var t = i.call(this);
        return t == t ? r.call(this) : "Invalid Date";
      });
    }, function (t, e, n) {
      var o = n(12)("toPrimitive"),
          r = Date.prototype;
      o in r || n(22)(r, o, n(246));
    }, function (t, e, n) {

      var o = n(11),
          r = n(38);

      t.exports = function (t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return r(o(this), "number" != t);
      };
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Array", {
        isArray: n(77)
      });
    }, function (t, e, n) {

      var o = n(31),
          r = n(0),
          i = n(24),
          a = n(114),
          s = n(89),
          c = n(17),
          u = n(90),
          l = n(91);
      r(r.S + r.F * !n(63)(function (t) {
      }), "Array", {
        from: function from(t) {
          var e,
              n,
              r,
              f,
              d = i(t),
              p = "function" == typeof this ? this : Array,
              h = arguments.length,
              v = h > 1 ? arguments[1] : void 0,
              g = void 0 !== v,
              y = 0,
              b = l(d);
          if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for (n = new p(e = c(d.length)); e > y; y++) {
            u(n, y, g ? v(d[y], y) : d[y]);
          } else for (f = b.call(d), n = new p(); !(r = f.next()).done; y++) {
            u(n, y, g ? a(f, v, [r.value, y], !0) : r.value);
          }
          return n.length = y, n;
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(90);
      o(o.S + o.F * n(8)(function () {
        function t() {}

        return !(Array.of.call(t) instanceof t);
      }), "Array", {
        of: function of() {
          for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) {
            r(n, t, arguments[t++]);
          }

          return n.length = e, n;
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(23),
          i = [].join;
      o(o.P + o.F * (n(56) != Object || !n(25)(i)), "Array", {
        join: function join(t) {
          return i.call(r(this), void 0 === t ? "," : t);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(78),
          i = n(33),
          a = n(44),
          s = n(17),
          c = [].slice;
      o(o.P + o.F * n(8)(function () {
        r && c.call(r);
      }), "Array", {
        slice: function slice(t, e) {
          var n = s(this.length),
              o = i(this);
          if (e = void 0 === e ? n : e, "Array" == o) return c.call(this, t, e);

          for (var r = a(t, n), u = a(e, n), l = s(u - r), f = new Array(l), d = 0; d < l; d++) {
            f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
          }

          return f;
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(32),
          i = n(24),
          a = n(8),
          s = [].sort,
          c = [1, 2, 3];
      o(o.P + o.F * (a(function () {
        c.sort(void 0);
      }) || !a(function () {
        c.sort(null);
      }) || !n(25)(s)), "Array", {
        sort: function sort(t) {
          return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t));
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(0),
          i = n(25)([].forEach, !0);
      o(o.P + o.F * !i, "Array", {
        forEach: function forEach(t) {
          return r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {
      var o = n(255);

      t.exports = function (t, e) {
        return new (o(t))(e);
      };
    }, function (t, e, n) {
      var o = n(10),
          r = n(77),
          i = n(12)("species");

      t.exports = function (t) {
        var e;
        return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
      };
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(1);
      o(o.P + o.F * !n(25)([].map, !0), "Array", {
        map: function map(t) {
          return r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(2);
      o(o.P + o.F * !n(25)([].filter, !0), "Array", {
        filter: function filter(t) {
          return r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(3);
      o(o.P + o.F * !n(25)([].some, !0), "Array", {
        some: function some(t) {
          return r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(4);
      o(o.P + o.F * !n(25)([].every, !0), "Array", {
        every: function every(t) {
          return r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(115);
      o(o.P + o.F * !n(25)([].reduce, !0), "Array", {
        reduce: function reduce(t) {
          return r(this, t, arguments.length, arguments[1], !1);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(115);
      o(o.P + o.F * !n(25)([].reduceRight, !0), "Array", {
        reduceRight: function reduceRight(t) {
          return r(this, t, arguments.length, arguments[1], !0);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(59)(!1),
          i = [].indexOf,
          a = !!i && 1 / [1].indexOf(1, -0) < 0;
      o(o.P + o.F * (a || !n(25)(i)), "Array", {
        indexOf: function indexOf(t) {
          return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1]);
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(23),
          i = n(35),
          a = n(17),
          s = [].lastIndexOf,
          c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
      o(o.P + o.F * (c || !n(25)(s)), "Array", {
        lastIndexOf: function lastIndexOf(t) {
          if (c) return s.apply(this, arguments) || 0;
          var e = r(this),
              n = a(e.length),
              o = n - 1;

          for (arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) {
            if (o in e && e[o] === t) return o || 0;
          }

          return -1;
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.P, "Array", {
        copyWithin: n(116)
      }), n(51)("copyWithin");
    }, function (t, e, n) {
      var o = n(0);
      o(o.P, "Array", {
        fill: n(92)
      }), n(51)("fill");
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(5),
          i = !0;
      "find" in [] && Array(1).find(function () {
        i = !1;
      }), o(o.P + o.F * i, "Array", {
        find: function find(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }), n(51)("find");
    }, function (t, e, n) {

      var o = n(0),
          r = n(28)(6),
          i = "findIndex",
          a = !0;
      i in [] && Array(1)[i](function () {
        a = !1;
      }), o(o.P + o.F * a, "Array", {
        findIndex: function findIndex(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }), n(51)(i);
    }, function (t, e, n) {
      n(52)("Array");
    }, function (t, e, n) {
      var o = n(9),
          r = n(81),
          i = n(14).f,
          a = n(46).f,
          s = n(87),
          c = n(94),
          _u = o.RegExp,
          l = _u,
          f = _u.prototype,
          d = /a/g,
          p = /a/g,
          h = new _u(d) !== d;

      if (n(15) && (!h || n(8)(function () {
        return p[n(12)("match")] = !1, _u(d) != d || _u(p) == p || "/a/i" != _u(d, "i");
      }))) {
        _u = function u(t, e) {
          var n = this instanceof _u,
              o = s(t),
              i = void 0 === e;
          return !n && o && t.constructor === _u && i ? t : r(h ? new l(o && !i ? t.source : t, e) : l((o = t instanceof _u) ? t.source : t, o && i ? c.call(t) : e), n ? this : f, _u);
        };

        for (var v = function v(t) {
          (t in _u) || i(_u, t, {
            configurable: !0,
            get: function get() {
              return l[t];
            },
            set: function set(e) {
              l[t] = e;
            }
          });
        }, g = a(l), y = 0; g.length > y;) {
          v(g[y++]);
        }

        f.constructor = _u, _u.prototype = f, n(19)(o, "RegExp", _u);
      }

      n(52)("RegExp");
    }, function (t, e, n) {

      n(118);

      var o = n(11),
          r = n(94),
          i = n(15),
          a = /./.toString,
          s = function s(t) {
        n(19)(RegExp.prototype, "toString", t, !0);
      };

      n(8)(function () {
        return "/a/b" != a.call({
          source: "a",
          flags: "b"
        });
      }) ? s(function () {
        var t = o(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0);
      }) : "toString" != a.name && s(function () {
        return a.call(this);
      });
    }, function (t, e, n) {
      n(64)("match", 1, function (t, e, n) {
        return [function (n) {

          var o = t(this),
              r = null == n ? void 0 : n[e];
          return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o));
        }, n];
      });
    }, function (t, e, n) {
      n(64)("replace", 2, function (t, e, n) {
        return [function (o, r) {

          var i = t(this),
              a = null == o ? void 0 : o[e];
          return void 0 !== a ? a.call(o, i, r) : n.call(String(i), o, r);
        }, n];
      });
    }, function (t, e, n) {
      n(64)("search", 1, function (t, e, n) {
        return [function (n) {

          var o = t(this),
              r = null == n ? void 0 : n[e];
          return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o));
        }, n];
      });
    }, function (t, e, n) {
      n(64)("split", 2, function (t, e, o) {

        var r = n(87),
            i = o,
            a = [].push;

        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
          var s = void 0 === /()??/.exec("")[1];

          o = function o(t, e) {
            var n = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return i.call(n, t, e);
            var o,
                c,
                u,
                l,
                f,
                d = [],
                p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                h = 0,
                v = void 0 === e ? 4294967295 : e >>> 0,
                g = new RegExp(t.source, p + "g");

            for (s || (o = new RegExp("^" + g.source + "$(?!\\s)", p)); (c = g.exec(n)) && !((u = c.index + c[0].length) > h && (d.push(n.slice(h, c.index)), !s && c.length > 1 && c[0].replace(o, function () {
              for (f = 1; f < arguments.length - 2; f++) {
                void 0 === arguments[f] && (c[f] = void 0);
              }
            }), c.length > 1 && c.index < n.length && a.apply(d, c.slice(1)), l = c[0].length, h = u, d.length >= v));) {
              g.lastIndex === c.index && g.lastIndex++;
            }

            return h === n.length ? !l && g.test("") || d.push("") : d.push(n.slice(h)), d.length > v ? d.slice(0, v) : d;
          };
        } else "0".split(void 0, 0).length && (o = function o(t, e) {
          return void 0 === t && 0 === e ? [] : i.call(this, t, e);
        });

        return [function (n, r) {
          var i = t(this),
              a = null == n ? void 0 : n[e];
          return void 0 !== a ? a.call(n, i, r) : o.call(String(i), n, r);
        }, o];
      });
    }, function (t, e, n) {
      var o = n(9),
          r = n(95).set,
          i = o.MutationObserver || o.WebKitMutationObserver,
          a = o.process,
          s = o.Promise,
          c = "process" == n(33)(a);

      t.exports = function () {
        var t,
            e,
            n,
            u = function u() {
          var o, r;

          for (c && (o = a.domain) && o.exit(); t;) {
            r = t.fn, t = t.next;

            try {
              r();
            } catch (o) {
              throw t ? n() : e = void 0, o;
            }
          }

          e = void 0, o && o.enter();
        };

        if (c) n = function n() {
          a.nextTick(u);
        };else if (!i || o.navigator && o.navigator.standalone) {
          if (s && s.resolve) {
            var l = s.resolve(void 0);

            n = function n() {
              l.then(u);
            };
          } else n = function n() {
            r.call(o, u);
          };
        } else {
          var f = !0,
              d = document.createTextNode("");
          new i(u).observe(d, {
            characterData: !0
          }), n = function n() {
            d.data = f = !f;
          };
        }
        return function (o) {
          var r = {
            fn: o,
            next: void 0
          };
          e && (e.next = r), t || (t = r, n()), e = r;
        };
      };
    }, function (t, e) {
      t.exports = function (t) {
        try {
          return {
            e: !1,
            v: t()
          };
        } catch (t) {
          return {
            e: !0,
            v: t
          };
        }
      };
    }, function (t, e, n) {

      var o = n(122),
          r = n(55);
      t.exports = n(68)("Map", function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        get: function get(t) {
          var e = o.getEntry(r(this, "Map"), t);
          return e && e.v;
        },
        set: function set(t, e) {
          return o.def(r(this, "Map"), 0 === t ? 0 : t, e);
        }
      }, o, !0);
    }, function (t, e, n) {

      var o = n(122),
          r = n(55);
      t.exports = n(68)("Set", function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        add: function add(t) {
          return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t);
        }
      }, o);
    }, function (t, e, n) {

      var o,
          r = n(28)(0),
          i = n(19),
          a = n(39),
          s = n(104),
          c = n(123),
          u = n(10),
          l = n(8),
          f = n(55),
          d = a.getWeak,
          p = Object.isExtensible,
          h = c.ufstore,
          v = {},
          g = function g(t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
          y = {
        get: function get(t) {
          if (u(t)) {
            var e = d(t);
            return !0 === e ? h(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
          }
        },
        set: function set(t, e) {
          return c.def(f(this, "WeakMap"), t, e);
        }
      },
          b = t.exports = n(68)("WeakMap", g, y, c, !0, !0);

      l(function () {
        return 7 != new b().set((Object.freeze || Object)(v), 7).get(v);
      }) && (s((o = c.getConstructor(g, "WeakMap")).prototype, y), a.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
        var e = b.prototype,
            n = e[t];
        i(e, t, function (e, r) {
          if (u(e) && !p(e)) {
            this._f || (this._f = new o());

            var i = this._f[t](e, r);

            return "set" == t ? this : i;
          }

          return n.call(this, e, r);
        });
      }));
    }, function (t, e, n) {

      var o = n(123),
          r = n(55);
      n(68)("WeakSet", function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        add: function add(t) {
          return o.def(r(this, "WeakSet"), t, !0);
        }
      }, o, !1, !0);
    }, function (t, e, n) {

      var o = n(0),
          r = n(69),
          i = n(96),
          a = n(11),
          s = n(44),
          c = n(17),
          u = n(10),
          l = n(9).ArrayBuffer,
          f = n(66),
          d = i.ArrayBuffer,
          p = i.DataView,
          h = r.ABV && l.isView,
          v = d.prototype.slice,
          g = r.VIEW;
      o(o.G + o.W + o.F * (l !== d), {
        ArrayBuffer: d
      }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", {
        isView: function isView(t) {
          return h && h(t) || u(t) && g in t;
        }
      }), o(o.P + o.U + o.F * n(8)(function () {
        return !new d(2).slice(1, void 0).byteLength;
      }), "ArrayBuffer", {
        slice: function slice(t, e) {
          if (void 0 !== v && void 0 === e) return v.call(a(this), t);

          for (var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new (f(this, d))(c(r - o)), u = new p(this), l = new p(i), h = 0; o < r;) {
            l.setUint8(h++, u.getUint8(o++));
          }

          return i;
        }
      }), n(52)("ArrayBuffer");
    }, function (t, e, n) {
      var o = n(0);
      o(o.G + o.W + o.F * !n(69).ABV, {
        DataView: n(96).DataView
      });
    }, function (t, e, n) {
      n(36)("Int8", 1, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Uint8", 1, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Uint8", 1, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      }, !0);
    }, function (t, e, n) {
      n(36)("Int16", 2, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Uint16", 2, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Int32", 4, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Uint32", 4, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Float32", 4, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      n(36)("Float64", 8, function (t) {
        return function (e, n, o) {
          return t(this, e, n, o);
        };
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(32),
          i = n(11),
          a = (n(9).Reflect || {}).apply,
          s = Function.apply;
      o(o.S + o.F * !n(8)(function () {
        a(function () {});
      }), "Reflect", {
        apply: function apply(t, e, n) {
          var o = r(t),
              c = i(n);
          return a ? a(o, e, c) : s.call(o, e, c);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(45),
          i = n(32),
          a = n(11),
          s = n(10),
          c = n(8),
          u = n(105),
          l = (n(9).Reflect || {}).construct,
          f = c(function () {
        function t() {}

        return !(l(function () {}, [], t) instanceof t);
      }),
          d = !c(function () {
        l(function () {});
      });
      o(o.S + o.F * (f || d), "Reflect", {
        construct: function construct(t, e) {
          i(t), a(e);
          var n = arguments.length < 3 ? t : i(arguments[2]);
          if (d && !f) return l(t, e, n);

          if (t == n) {
            switch (e.length) {
              case 0:
                return new t();

              case 1:
                return new t(e[0]);

              case 2:
                return new t(e[0], e[1]);

              case 3:
                return new t(e[0], e[1], e[2]);

              case 4:
                return new t(e[0], e[1], e[2], e[3]);
            }

            var o = [null];
            return o.push.apply(o, e), new (u.apply(t, o))();
          }

          var c = n.prototype,
              p = r(s(c) ? c : Object.prototype),
              h = Function.apply.call(t, p, e);
          return s(h) ? h : p;
        }
      });
    }, function (t, e, n) {
      var o = n(14),
          r = n(0),
          i = n(11),
          a = n(38);
      r(r.S + r.F * n(8)(function () {
        Reflect.defineProperty(o.f({}, 1, {
          value: 1
        }), 1, {
          value: 2
        });
      }), "Reflect", {
        defineProperty: function defineProperty(t, e, n) {
          i(t), e = a(e, !0), i(n);

          try {
            return o.f(t, e, n), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(26).f,
          i = n(11);
      o(o.S, "Reflect", {
        deleteProperty: function deleteProperty(t, e) {
          var n = r(i(t), e);
          return !(n && !n.configurable) && delete t[e];
        }
      });
    }, function (t, e, n) {

      var o = n(0),
          r = n(11),
          i = function i(t) {
        this._t = r(t), this._i = 0;
        var e,
            n = this._k = [];

        for (e in t) {
          n.push(e);
        }
      };

      n(113)(i, "Object", function () {
        var t,
            e = this._k;

        do {
          if (this._i >= e.length) return {
            value: void 0,
            done: !0
          };
        } while (!((t = e[this._i++]) in this._t));

        return {
          value: t,
          done: !1
        };
      }), o(o.S, "Reflect", {
        enumerate: function enumerate(t) {
          return new i(t);
        }
      });
    }, function (t, e, n) {
      var o = n(26),
          r = n(47),
          i = n(21),
          a = n(0),
          s = n(10),
          c = n(11);
      a(a.S, "Reflect", {
        get: function t(e, n) {
          var a,
              u,
              l = arguments.length < 3 ? e : arguments[2];
          return c(e) === l ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(u = r(e)) ? t(u, n, l) : void 0;
        }
      });
    }, function (t, e, n) {
      var o = n(26),
          r = n(0),
          i = n(11);
      r(r.S, "Reflect", {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
          return o.f(i(t), e);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(47),
          i = n(11);
      o(o.S, "Reflect", {
        getPrototypeOf: function getPrototypeOf(t) {
          return r(i(t));
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Reflect", {
        has: function has(t, e) {
          return e in t;
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(11),
          i = Object.isExtensible;
      o(o.S, "Reflect", {
        isExtensible: function isExtensible(t) {
          return r(t), !i || i(t);
        }
      });
    }, function (t, e, n) {
      var o = n(0);
      o(o.S, "Reflect", {
        ownKeys: n(125)
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(11),
          i = Object.preventExtensions;
      o(o.S, "Reflect", {
        preventExtensions: function preventExtensions(t) {
          r(t);

          try {
            return i && i(t), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, function (t, e, n) {
      var o = n(14),
          r = n(26),
          i = n(47),
          a = n(21),
          s = n(0),
          c = n(40),
          u = n(11),
          l = n(10);
      s(s.S, "Reflect", {
        set: function t(e, n, s) {
          var f,
              d,
              p = arguments.length < 4 ? e : arguments[3],
              h = r.f(u(e), n);

          if (!h) {
            if (l(d = i(e))) return t(d, n, s, p);
            h = c(0);
          }

          if (a(h, "value")) {
            if (!1 === h.writable || !l(p)) return !1;

            if (f = r.f(p, n)) {
              if (f.get || f.set || !1 === f.writable) return !1;
              f.value = s, o.f(p, n, f);
            } else o.f(p, n, c(0, s));

            return !0;
          }

          return void 0 !== h.set && (h.set.call(p, s), !0);
        }
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(79);
      r && o(o.S, "Reflect", {
        setPrototypeOf: function setPrototypeOf(t, e) {
          r.check(t, e);

          try {
            return r.set(t, e), !0;
          } catch (t) {
            return !1;
          }
        }
      });
    }, function (t, e, n) {
      n(307), t.exports = n(16).Array.includes;
    }, function (t, e, n) {

      var o = n(0),
          r = n(59)(!0);
      o(o.P, "Array", {
        includes: function includes(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }), n(51)("includes");
    }, function (t, e, n) {
      n(309), t.exports = n(16).String.padStart;
    }, function (t, e, n) {

      var o = n(0),
          r = n(126),
          i = n(67);
      o(o.P + o.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
        padStart: function padStart(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
        }
      });
    }, function (t, e, n) {
      n(311), t.exports = n(16).String.padEnd;
    }, function (t, e, n) {

      var o = n(0),
          r = n(126),
          i = n(67);
      o(o.P + o.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
        padEnd: function padEnd(t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
        }
      });
    }, function (t, e, n) {
      n(313), t.exports = n(74).f("asyncIterator");
    }, function (t, e, n) {
      n(100)("asyncIterator");
    }, function (t, e, n) {
      n(315), t.exports = n(16).Object.getOwnPropertyDescriptors;
    }, function (t, e, n) {
      var o = n(0),
          r = n(125),
          i = n(23),
          a = n(26),
          s = n(90);
      o(o.S, "Object", {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
          for (var e, n, o = i(t), c = a.f, u = r(o), l = {}, f = 0; u.length > f;) {
            void 0 !== (n = c(o, e = u[f++])) && s(l, e, n);
          }

          return l;
        }
      });
    }, function (t, e, n) {
      n(317), t.exports = n(16).Object.values;
    }, function (t, e, n) {
      var o = n(0),
          r = n(127)(!1);
      o(o.S, "Object", {
        values: function values(t) {
          return r(t);
        }
      });
    }, function (t, e, n) {
      n(319), t.exports = n(16).Object.entries;
    }, function (t, e, n) {
      var o = n(0),
          r = n(127)(!0);
      o(o.S, "Object", {
        entries: function entries(t) {
          return r(t);
        }
      });
    }, function (t, e, n) {

      n(119), n(321), t.exports = n(16).Promise.finally;
    }, function (t, e, n) {

      var o = n(0),
          r = n(16),
          i = n(9),
          a = n(66),
          s = n(121);
      o(o.P + o.R, "Promise", {
        finally: function _finally(t) {
          var e = a(this, r.Promise || i.Promise),
              n = "function" == typeof t;
          return this.then(n ? function (n) {
            return s(e, t()).then(function () {
              return n;
            });
          } : t, n ? function (n) {
            return s(e, t()).then(function () {
              throw n;
            });
          } : t);
        }
      });
    }, function (t, e, n) {
      n(323), n(324), n(325), t.exports = n(16);
    }, function (t, e, n) {
      var o = n(9),
          r = n(0),
          i = n(67),
          a = [].slice,
          s = /MSIE .\./.test(i),
          c = function c(t) {
        return function (e, n) {
          var o = arguments.length > 2,
              r = !!o && a.call(arguments, 2);
          return t(o ? function () {
            ("function" == typeof e ? e : Function(e)).apply(this, r);
          } : e, n);
        };
      };

      r(r.G + r.B + r.F * s, {
        setTimeout: c(o.setTimeout),
        setInterval: c(o.setInterval)
      });
    }, function (t, e, n) {
      var o = n(0),
          r = n(95);
      o(o.G + o.B, {
        setImmediate: r.set,
        clearImmediate: r.clear
      });
    }, function (t, e, n) {
      for (var o = n(93), r = n(43), i = n(19), a = n(9), s = n(22), c = n(50), u = n(12), l = u("iterator"), f = u("toStringTag"), d = c.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
      }, h = r(p), v = 0; v < h.length; v++) {
        var g,
            y = h[v],
            b = p[y],
            m = a[y],
            k = m && m.prototype;
        if (k && (k[l] || s(k, l, d), k[f] || s(k, f, y), c[y] = d, b)) for (g in o) {
          k[g] || i(k, g, o[g], !0);
        }
      }
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(58), n(48), n(1), n(2), n(330), n(332), n(333)], void 0 === (i = "function" == typeof (o = function o(_o38, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o38, "__esModule", {
          value: !0
        }), _o38.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);

        var d = function () {
          function t(e) {
            var n = this;
            (0, a.default)(this, t);

            var o = function o() {};

            "object" === (0, i.default)(e) && "function" == typeof e.onReady && (o = e.onReady);
            var r = new l.default(e);
            this.isReady = r.isReady.then(function () {
              n.exportAPI(r), o();
            });
          }

          return (0, s.default)(t, null, [{
            key: "version",
            get: function get() {
              return "2.12.3";
            }
          }]), (0, s.default)(t, [{
            key: "exportAPI",
            value: function value(t) {
              var e = this;
              ["configuration"].forEach(function (n) {
                e[n] = t[n];
              }), this.destroy = function () {
                for (var n in t.moduleInstances.Listeners.removeAll(), t.moduleInstances.UI.destroy(), t.moduleInstances.ModificationsObserver.destroy(), t = null, e) {
                  e.hasOwnProperty(n) && delete e[n];
                }

                Object.setPrototypeOf(e, null);
              }, Object.setPrototypeOf(this, t.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                blocks: {
                  clear: "clear",
                  render: "render"
                },
                caret: {
                  focus: "focus"
                },
                events: {
                  on: "on",
                  off: "off",
                  emit: "emit"
                },
                saver: {
                  save: "save"
                }
              }).forEach(function (n) {
                var o = (0, r.default)(n, 2),
                    i = o[0],
                    a = o[1];
                Object.entries(a).forEach(function (n) {
                  var o = (0, r.default)(n, 2),
                      a = o[0],
                      s = o[1];
                  e[s] = t.moduleInstances.API.methods[i][a];
                });
              });
            }
          }]), t;
        }();

        _o38.default = d, d.displayName = "EditorJS", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) return t;
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        var n = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0) {
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            o || null == s.return || s.return();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      };
    }, function (t, e) {
      t.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }, function (t, e, n) {
      (e = t.exports = function () {
        return r.apply(void 0, arguments);
      }).__esModule = !0;
      var o = n(331),
          r = o.default;
      Object.assign(e, o);
    }, function (t, e, n) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function () {}, e.revert = function () {};
    }, function (t, e, n) {
      var o, r, i;
      r = [], void 0 === (i = "function" == typeof (o = function o() {

        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
          for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;) {
          }

          return n > -1;
        }), Element.prototype.closest || (Element.prototype.closest = function (t) {
          var e = this;
          if (!document.documentElement.contains(e)) return null;

          do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e);

          return null;
        }), Element.prototype.prepend || (Element.prototype.prepend = function (t) {
          var e = document.createDocumentFragment();
          Array.isArray(t) || (t = [t]), t.forEach(function (t) {
            var n = t instanceof Node;
            e.appendChild(n ? t : document.createTextNode(String(t)));
          }), this.insertBefore(e, this.firstChild);
        });
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(48), n(29), n(30), n(1), n(2), n(13), n(18)], void 0 === (i = "function" == typeof (o = function o(_o39, r, i, a, s, c, u, l) {

        var f = n(3);
        Object.defineProperty(_o39, "__esModule", {
          value: !0
        }), _o39.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), u = f(u), l = f(l);
        var d = n(339),
            p = [];
        d.keys().forEach(function (t) {
          t.match(/^\.\/[^_][\w\/]*\.([tj])s$/) && p.push(d(t));
        });

        var h = function () {
          function t(e) {
            var n,
                o,
                r = this;
            (0, s.default)(this, t), this.moduleInstances = {}, this.isReady = new Promise(function (t, e) {
              n = t, o = e;
            }), Promise.resolve().then((0, a.default)(i.default.mark(function t() {
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return r.configuration = e, t.next = 3, r.validate();

                    case 3:
                      return t.next = 5, r.init();

                    case 5:
                      return t.next = 7, r.start();

                    case 7:
                      l.default.log("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(function () {
                        if (r.configuration.autofocus) {
                          var t = r.moduleInstances,
                              e = t.BlockManager,
                              o = t.Caret;
                          o.setToBlock(e.blocks[0], o.positions.START);
                        }

                        r.moduleInstances.UI.removeLoader(), n();
                      }, 500);

                    case 9:
                    case "end":
                      return t.stop();
                  }
                }
              }, t);
            }))).catch(function (t) {
              l.default.log("Editor.js is not ready because of ".concat(t), "error"), o(t);
            });
          }

          var e, n;
          return (0, c.default)(t, [{
            key: "validate",
            value: (n = (0, a.default)(i.default.mark(function t() {
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (this.config.holderId) {
                        t.next = 2;
                        break;
                      }

                      throw Error("«holderId» param must being not empty");

                    case 2:
                      if (u.default.get(this.config.holderId)) {
                        t.next = 4;
                        break;
                      }

                      throw Error("element with ID «".concat(this.config.holderId, "» is missing. Pass correct holder's ID."));

                    case 4:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return n.apply(this, arguments);
            })
          }, {
            key: "init",
            value: function value() {
              this.constructModules(), this.configureModules();
            }
          }, {
            key: "start",
            value: (e = (0, a.default)(i.default.mark(function t() {
              var e,
                  n = this;
              return i.default.wrap(function (t) {
                for (;;) {
                  switch (t.prev = t.next) {
                    case 0:
                      return e = ["Tools", "UI", "BlockManager", "Paste", "DragNDrop", "ModificationsObserver", "BlockSelection", "RectangleSelection"], t.next = 3, e.reduce(function (t, e) {
                        return t.then((0, a.default)(i.default.mark(function t() {
                          return i.default.wrap(function (t) {
                            for (;;) {
                              switch (t.prev = t.next) {
                                case 0:
                                  return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();

                                case 3:
                                  t.next = 8;
                                  break;

                                case 5:
                                  t.prev = 5, t.t0 = t.catch(0), l.default.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);

                                case 8:
                                case "end":
                                  return t.stop();
                              }
                            }
                          }, t, null, [[0, 5]]);
                        })));
                      }, Promise.resolve());

                    case 3:
                      return t.abrupt("return", this.moduleInstances.Renderer.render(this.config.data.blocks));

                    case 4:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            })), function () {
              return e.apply(this, arguments);
            })
          }, {
            key: "constructModules",
            value: function value() {
              var t = this;
              p.forEach(function (e) {
                try {
                  t.moduleInstances[e.displayName] = new e({
                    config: t.configuration
                  });
                } catch (t) {
                  l.default.log("Module ".concat(e.displayName, " skipped because"), "warn", t);
                }
              });
            }
          }, {
            key: "configureModules",
            value: function value() {
              for (var t in this.moduleInstances) {
                this.moduleInstances.hasOwnProperty(t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
              }
            }
          }, {
            key: "getModulesDiff",
            value: function value(t) {
              var e = {};

              for (var n in this.moduleInstances) {
                n !== t && (e[n] = this.moduleInstances[n]);
              }

              return e;
            }
          }, {
            key: "configuration",
            set: function set(t) {
              "object" !== (0, r.default)(t) && (t = {
                holderId: t
              }), this.config = t, this.config.holderId && "string" == typeof this.config.holderId || (this.config.holderId = "editorjs"), this.config.initialBlock = this.config.initialBlock || "paragraph";
              var e = {
                type: this.config.initialBlock,
                data: {}
              };
              this.config.placeholder = this.config.placeholder || "write your story...", this.config.sanitizer = this.config.sanitizer || {
                p: !0,
                b: !0,
                a: !0
              }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.data = this.config.data || {}, this.config.onReady = this.config.onReady || function () {}, this.config.onChange = this.config.onChange || function () {}, l.default.isEmpty(this.config.data) ? (this.config.data = {}, this.config.data.blocks = [e]) : this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data.blocks = [e]);
            },
            get: function get() {
              return this.config;
            }
          }]), t;
        }();

        _o39.default = h, h.displayName = "Core", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o = function () {
        return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
      }() || Function("return this")(),
          r = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0,
          i = r && o.regeneratorRuntime;

      if (o.regeneratorRuntime = void 0, t.exports = n(128), r) o.regeneratorRuntime = i;else try {
        delete o.regeneratorRuntime;
      } catch (t) {
        o.regeneratorRuntime = void 0;
      }
    }, function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) {
            n[e] = t[e];
          }

          return n;
        }
      };
    }, function (t, e) {
      t.exports = function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      };
    }, function (t, e) {
      t.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      };
    }, function (t, e) {
      t.exports = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      };
    }, function (t, e, n) {
      var o = {
        "./api": 70,
        "./api/": 70,
        "./api/blocks": 129,
        "./api/blocks.ts": 129,
        "./api/caret": 130,
        "./api/caret.ts": 130,
        "./api/events": 131,
        "./api/events.ts": 131,
        "./api/index": 70,
        "./api/index.ts": 70,
        "./api/listeners": 132,
        "./api/listeners.ts": 132,
        "./api/notifier": 133,
        "./api/notifier.ts": 133,
        "./api/sanitizer": 134,
        "./api/sanitizer.ts": 134,
        "./api/saver": 135,
        "./api/saver.ts": 135,
        "./api/selection": 136,
        "./api/selection.ts": 136,
        "./api/styles": 137,
        "./api/styles.ts": 137,
        "./api/toolbar": 138,
        "./api/toolbar.ts": 138,
        "./blockEvents": 139,
        "./blockEvents.ts": 139,
        "./blockManager": 140,
        "./blockManager.ts": 140,
        "./blockSelection": 141,
        "./blockSelection.ts": 141,
        "./caret": 142,
        "./caret.ts": 142,
        "./dragNDrop": 143,
        "./dragNDrop.ts": 143,
        "./events": 144,
        "./events.ts": 144,
        "./listeners": 145,
        "./listeners.ts": 145,
        "./modificationsObserver": 146,
        "./modificationsObserver.ts": 146,
        "./notifier": 147,
        "./notifier.ts": 147,
        "./paste": 148,
        "./paste.ts": 148,
        "./rectangleSelection": 149,
        "./rectangleSelection.ts": 149,
        "./renderer": 150,
        "./renderer.ts": 150,
        "./sanitizer": 151,
        "./sanitizer.ts": 151,
        "./saver": 152,
        "./saver.ts": 152,
        "./shortcuts": 153,
        "./shortcuts.ts": 153,
        "./toolbar": 71,
        "./toolbar/": 71,
        "./toolbar/blockSettings": 154,
        "./toolbar/blockSettings.ts": 154,
        "./toolbar/index": 71,
        "./toolbar/index.ts": 71,
        "./toolbar/inline": 155,
        "./toolbar/inline.ts": 155,
        "./toolbar/toolbox": 156,
        "./toolbar/toolbox.ts": 156,
        "./tools": 157,
        "./tools.ts": 157,
        "./ui": 158,
        "./ui.ts": 158
      };

      function r(t) {
        var e = i(t);
        return n(e);
      }

      function i(t) {
        if (!n.o(o, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw e.code = "MODULE_NOT_FOUND", e;
        }

        return o[t];
      }

      r.keys = function () {
        return Object.keys(o);
      }, r.resolve = i, t.exports = r, r.id = 339;
    }, function (t, e) {
      t.exports = function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      };
    }, function (t, e) {
      function n(e, o) {
        return t.exports = n = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        }, n(e, o);
      }

      t.exports = n;
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o40, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o40, "__esModule", {
          value: !0
        }), _o40.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t(e) {
            var n = e.api;
            (0, r.default)(this, t), this.CSS = {
              button: "ce-settings__button",
              wrapper: "ce-tune-move-up",
              animation: "wobble"
            }, this.api = n;
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              var t = this,
                  e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
              return e.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function (n) {
                return t.handleClick(n, e);
              }, !1), e;
            }
          }, {
            key: "handleClick",
            value: function value(t, e) {
              var n = this,
                  o = this.api.blocks.getCurrentBlockIndex();
              if (0 === o) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
                e.classList.remove(n.CSS.animation);
              }, 500);
              var r,
                  i = this.api.blocks.getBlockByIndex(o),
                  a = this.api.blocks.getBlockByIndex(o - 1),
                  s = i.getBoundingClientRect(),
                  c = a.getBoundingClientRect();
              r = c.top > 0 ? Math.abs(s.top) - Math.abs(c.top) : window.innerHeight - Math.abs(s.top) + Math.abs(c.top), window.scrollBy(0, -1 * r), this.api.blocks.swap(o, o - 1);
            }
          }]), t;
        }();

        _o40.default = c, c.displayName = "MoveUpTune", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o41, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o41, "__esModule", {
          value: !0
        }), _o41.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t(e) {
            var n = this,
                o = e.api;
            (0, r.default)(this, t), this.CSS = {
              wrapper: "ass",
              button: "ce-settings__button",
              buttonDelete: "ce-settings__button--delete",
              buttonConfirm: "ce-settings__button--confirm"
            }, this.nodes = {
              button: null
            }, this.api = o, this.resetConfirmation = function () {
              n.setConfirmation(!1);
            };
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              var t = this;
              return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function (e) {
                return t.handleClick(e);
              }, !1), this.nodes.button;
            }
          }, {
            key: "handleClick",
            value: function value(t) {
              this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
            }
          }, {
            key: "setConfirmation",
            value: function value(t) {
              this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
            }
          }]), t;
        }();

        _o41.default = c, c.displayName = "DeleteTune", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o42, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o42, "__esModule", {
          value: !0
        }), _o42.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t(e) {
            var n = e.api;
            (0, r.default)(this, t), this.CSS = {
              button: "ce-settings__button",
              wrapper: "ce-tune-move-down",
              animation: "wobble"
            }, this.api = n;
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              var t = this,
                  e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
              return e.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function (n) {
                return t.handleClick(n, e);
              }, !1), e;
            }
          }, {
            key: "handleClick",
            value: function value(t, e) {
              var n = this,
                  o = this.api.blocks.getCurrentBlockIndex();
              if (o === this.api.blocks.getBlocksCount() - 1) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
                e.classList.remove(n.CSS.animation);
              }, 500);
              var r = this.api.blocks.getBlockByIndex(o + 1),
                  i = r.getBoundingClientRect(),
                  a = Math.abs(window.innerHeight - r.offsetHeight);
              i.top < window.innerHeight && (a = window.scrollY + r.offsetHeight), window.scrollTo(0, a), this.api.blocks.swap(o, o + 1);
            }
          }]), t;
        }();

        _o42.default = c, c.displayName = "MoveDownTune", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(18), n(13)], void 0 === (i = "function" == typeof (o = function o(_o43, r, i, a, s) {

        var c = n(3);
        Object.defineProperty(_o43, "__esModule", {
          value: !0
        }), _o43.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);

        var u = function () {
          function t(e) {
            (0, r.default)(this, t), this.blocks = [], this.workingArea = e;
          }

          return (0, i.default)(t, [{
            key: "length",
            get: function get() {
              return this.blocks.length;
            }
          }, {
            key: "array",
            get: function get() {
              return this.blocks;
            }
          }, {
            key: "nodes",
            get: function get() {
              return a.default.array(this.workingArea.children);
            }
          }], [{
            key: "set",
            value: function value(t, e, n) {
              return !isNaN(Number(e)) && (t.insert(+e, n), !0);
            }
          }, {
            key: "get",
            value: function value(t, e) {
              return isNaN(Number(e)) ? t[e] : t.get(+e);
            }
          }]), (0, i.default)(t, [{
            key: "push",
            value: function value(t) {
              this.blocks.push(t), this.workingArea.appendChild(t.holder);
            }
          }, {
            key: "swap",
            value: function value(t, e) {
              var n = this.blocks[e];
              s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
            }
          }, {
            key: "insert",
            value: function value(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

              if (this.length) {
                t > this.length && (t = this.length), n && this.blocks[t].holder.remove();
                var o = n ? 1 : 0;

                if (this.blocks.splice(t, o, e), t > 0) {
                  var r = this.blocks[t - 1];
                  r.holder.insertAdjacentElement("afterend", e.holder);
                } else {
                  var i = this.blocks[t + 1];
                  i ? i.holder.insertAdjacentElement("beforebegin", e.holder) : this.workingArea.appendChild(e.holder);
                }
              } else this.push(e);
            }
          }, {
            key: "remove",
            value: function value(t) {
              isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks.splice(t, 1);
            }
          }, {
            key: "removeAll",
            value: function value() {
              this.workingArea.innerHTML = "", this.blocks.length = 0;
            }
          }, {
            key: "insertAfter",
            value: function value(t, e) {
              var n = this.blocks.indexOf(t);
              this.insert(n + 1, e);
            }
          }, {
            key: "get",
            value: function value(t) {
              return this.blocks[t];
            }
          }, {
            key: "indexOf",
            value: function value(t) {
              return this.blocks.indexOf(t);
            }
          }]), t;
        }();

        _o43.default = u, u.displayName = "Blocks", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      t.exports = function (t) {
        var e = {};

        function n(o) {
          if (e[o]) return e[o].exports;
          var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }

        return n.m = t, n.c = e, n.d = function (t, e, o) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
          });
        }, n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, n.t = function (t, e) {
          if (1 & e && (t = n(t)), 8 & e) return t;
          if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var r in t) {
            n.d(o, r, function (e) {
              return t[e];
            }.bind(null, r));
          }
          return o;
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "/", n(n.s = 0);
      }([function (t, e, n) {

        n(1),
        /*!
         * Codex JavaScript Notification module
         * https://github.com/codex-team/js-notifier
         */
        t.exports = function () {
          var t = n(6),
              e = null;
          return {
            show: function show(n) {
              if (n.message) {
                !function () {
                  if (e) return !0;
                  e = t.getWrapper(), document.body.appendChild(e);
                }();
                var o = null,
                    r = n.time || 8e3;

                switch (n.type) {
                  case "confirm":
                    o = t.confirm(n);
                    break;

                  case "prompt":
                    o = t.prompt(n);
                    break;

                  default:
                    o = t.alert(n), window.setTimeout(function () {
                      o.remove();
                    }, r);
                }

                e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
              }
            }
          };
        }();
      }, function (t, e, n) {
        var o = n(2);
        "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
          hmr: !0,
          transform: void 0,
          insertInto: void 0
        }), o.locals && (t.exports = o.locals);
      }, function (t, e, n) {
        (t.exports = n(3)(!1)).push([t.i, '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}', ""]);
      }, function (t, e) {
        t.exports = function (t) {
          var e = [];
          return e.toString = function () {
            return this.map(function (e) {
              var n = function (t, e) {
                var n,
                    o = t[1] || "",
                    r = t[3];
                if (!r) return o;

                if (e && "function" == typeof btoa) {
                  var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                      a = r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                  return [o].concat(a).concat([i]).join("\n");
                }

                return [o].join("\n");
              }(e, t);

              return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
            }).join("");
          }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);

            for (var o = {}, r = 0; r < this.length; r++) {
              var i = this[r][0];
              "number" == typeof i && (o[i] = !0);
            }

            for (r = 0; r < t.length; r++) {
              var a = t[r];
              "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
            }
          }, e;
        };
      }, function (t, e, n) {
        var o,
            r,
            i = {},
            a = (o = function o() {
          return window && document && document.all && !window.atob;
        }, function () {
          return void 0 === r && (r = o.apply(this, arguments)), r;
        }),
            s = function (t) {
          var e = {};
          return function (t) {
            if ("function" == typeof t) return t();

            if (void 0 === e[t]) {
              var n = function (t) {
                return document.querySelector(t);
              }.call(this, t);

              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
              e[t] = n;
            }

            return e[t];
          };
        }(),
            c = null,
            u = 0,
            l = [],
            f = n(5);

        function d(t, e) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n],
                r = i[o.id];

            if (r) {
              r.refs++;

              for (var a = 0; a < r.parts.length; a++) {
                r.parts[a](o.parts[a]);
              }

              for (; a < o.parts.length; a++) {
                r.parts.push(b(o.parts[a], e));
              }
            } else {
              var s = [];

              for (a = 0; a < o.parts.length; a++) {
                s.push(b(o.parts[a], e));
              }

              i[o.id] = {
                id: o.id,
                refs: 1,
                parts: s
              };
            }
          }
        }

        function p(t, e) {
          for (var n = [], o = {}, r = 0; r < t.length; r++) {
            var i = t[r],
                a = e.base ? i[0] + e.base : i[0],
                s = {
              css: i[1],
              media: i[2],
              sourceMap: i[3]
            };
            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
              id: a,
              parts: [s]
            });
          }

          return n;
        }

        function h(t, e) {
          var n = s(t.insertInto);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var o = l[l.length - 1];
          if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
            if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = s(t.insertInto + " " + t.insertAt.before);
            n.insertBefore(e, r);
          }
        }

        function v(t) {
          if (null === t.parentNode) return !1;
          t.parentNode.removeChild(t);
          var e = l.indexOf(t);
          e >= 0 && l.splice(e, 1);
        }

        function g(t) {
          var e = document.createElement("style");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
        }

        function y(t, e) {
          Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n]);
          });
        }

        function b(t, e) {
          var n, o, r, i;

          if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function () {};
            t.css = i;
          }

          if (e.singleton) {
            var a = u++;
            n = c || (c = g(e)), o = x.bind(null, n, a, !1), r = x.bind(null, n, a, !0);
          } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
          }(e), o = function (t, e, n) {
            var o = n.css,
                r = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([o], {
              type: "text/css"
            }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
          }.bind(null, n, e), r = function r() {
            v(n), n.href && URL.revokeObjectURL(n.href);
          }) : (n = g(e), o = function (t, e) {
            var n = e.css,
                o = e.media;
            if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
              for (; t.firstChild;) {
                t.removeChild(t.firstChild);
              }

              t.appendChild(document.createTextNode(n));
            }
          }.bind(null, n), r = function r() {
            v(n);
          });

          return o(t), function (e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              o(t = e);
            } else r();
          };
        }

        t.exports = function (t, e) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
          (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
          var n = p(t, e);
          return d(n, e), function (t) {
            for (var o = [], r = 0; r < n.length; r++) {
              var a = n[r];
              (s = i[a.id]).refs--, o.push(s);
            }

            for (t && d(p(t, e), e), r = 0; r < o.length; r++) {
              var s;

              if (0 === (s = o[r]).refs) {
                for (var c = 0; c < s.parts.length; c++) {
                  s.parts[c]();
                }

                delete i[s.id];
              }
            }
          };
        };

        var m,
            k = (m = [], function (t, e) {
          return m[t] = e, m.filter(Boolean).join("\n");
        });

        function x(t, e, n, o) {
          var r = n ? "" : o.css;
          if (t.styleSheet) t.styleSheet.cssText = k(e, r);else {
            var i = document.createTextNode(r),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
          }
        }
      }, function (t, e) {
        t.exports = function (t) {
          var e = "undefined" != typeof window && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!t || "string" != typeof t) return t;
          var n = e.protocol + "//" + e.host,
              o = n + e.pathname.replace(/\/[^\/]*$/, "/");
          return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var r,
                i = e.trim().replace(/^"(.*)"$/, function (t, e) {
              return e;
            }).replace(/^'(.*)'$/, function (t, e) {
              return e;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
          });
        };
      }, function (t, e, n) {

        var o, r, i, a, s, c;
        t.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
          alert: c = function c(t) {
            var e = document.createElement("DIV"),
                n = document.createElement("DIV"),
                i = t.message,
                a = t.style;
            return e.classList.add(o), a && e.classList.add(o + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
          },
          confirm: function confirm(t) {
            var e = c(t),
                n = document.createElement("div"),
                o = document.createElement("button"),
                u = document.createElement("button"),
                l = e.querySelector("." + r),
                f = t.cancelHandler,
                d = t.okHandler;
            return n.classList.add(s), o.innerHTML = t.okText || "Confirm", u.innerHTML = t.cancelText || "Cancel", o.classList.add(a), u.classList.add(a), o.classList.add(i), u.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (u.addEventListener("click", f), l.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), u.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(u), e.appendChild(n), e;
          },
          prompt: function prompt(t) {
            var e = c(t),
                n = document.createElement("div"),
                o = document.createElement("button"),
                u = document.createElement("input"),
                l = e.querySelector("." + r),
                f = t.cancelHandler,
                d = t.okHandler;
            return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a), o.classList.add(i), u.classList.add("cdx-notify__input"), t.placeholder && u.setAttribute("placeholder", t.placeholder), t.default && (u.value = t.default), t.inputType && (u.type = t.inputType), f && "function" == typeof f && l.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function () {
              d(u.value);
            }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(u), n.appendChild(o), e.appendChild(n), e;
          },
          getWrapper: function getWrapper() {
            var t = document.createElement("DIV");
            return t.classList.add("cdx-notifies"), t;
          }
        });
      }]);
    }, function (t, e, n) {
      var o, r;
      void 0 === (r = "function" == typeof (o = function o() {
        function t(t) {
          var e = t.tags,
              n = Object.keys(e),
              o = n.map(function (t) {
            return _typeof(e[t]);
          }).every(function (t) {
            return "object" === t || "boolean" === t || "function" === t;
          });
          if (!o) throw new Error("The configuration was invalid");
          this.config = t;
        }

        var e = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];

        function n(t) {
          return -1 !== e.indexOf(t.nodeName);
        }

        var o = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];

        function r(t) {
          return -1 !== o.indexOf(t.nodeName);
        }

        function i(t, e, n) {
          return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
        }

        function a(t, e) {
          return void 0 === e || "boolean" == typeof e && !e;
        }

        function s(t, e, n) {
          var o = t.name.toLowerCase();
          return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
        }

        return t.prototype.clean = function (t) {
          var e = document.implementation.createHTMLDocument(),
              n = e.createElement("div");
          return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
        }, t.prototype._sanitize = function (t, e) {
          var o = function (t, e) {
            return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
          }(t, e),
              c = o.firstChild();

          if (c) do {
            if (c.nodeType !== Node.TEXT_NODE) {
              if (c.nodeType === Node.COMMENT_NODE) {
                e.removeChild(c), this._sanitize(t, e);
                break;
              }

              var u,
                  l = r(c);
              l && (u = Array.prototype.some.call(c.childNodes, n));
              var f = !!e.parentNode,
                  d = n(e) && n(c) && f,
                  p = c.nodeName.toLowerCase(),
                  h = i(this.config, p, c);

              if (l && u || a(0, h) || !this.config.keepNestedBlockElements && d) {
                if ("SCRIPT" !== c.nodeName && "STYLE" !== c.nodeName) for (; c.childNodes.length > 0;) {
                  e.insertBefore(c.childNodes[0], c);
                }
                e.removeChild(c), this._sanitize(t, e);
                break;
              }

              for (var v = 0; v < c.attributes.length; v += 1) {
                var g = c.attributes[v];
                s(g, h, c) && (c.removeAttribute(g.name), v -= 1);
              }

              this._sanitize(t, c);
            } else if ("" === c.data.trim() && (c.previousElementSibling && n(c.previousElementSibling) || c.nextElementSibling && n(c.nextElementSibling))) {
              e.removeChild(c), this._sanitize(t, e);
              break;
            }
          } while (c = o.nextSibling());
        }, t;
      }) ? o.call(e, n, e, t) : o) || (t.exports = r);
    }, function (t, e, n) {
      /*!
       * Library for handling keyboard shortcuts
       * @copyright undefined
       * @license MIT
       * @author CodeX (https://ifmo.su)
       * @version 1.0.0
       */
      t.exports = function (t) {
        function e(o) {
          if (n[o]) return n[o].exports;
          var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, o) {
          e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o
          });
        }, e.n = function (t) {
          var n = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return e.d(n, "a", n), n;
        }, e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 0);
      }([function (t, e, n) {

        Object.defineProperty(e, "__esModule", {
          value: !0
        });

        var o = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
            }
          }

          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
          };
        }(),
            r = {
          0: 48,
          1: 49,
          2: 50,
          3: 51,
          4: 52,
          5: 53,
          6: 54,
          7: 55,
          8: 56,
          9: 57,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          BACKSPACE: 8,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          INSERT: 45,
          DELETE: 46
        },
            i = {
          CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
          SHIFT: ["SHIFT"],
          ALT: ["ALT", "OPTION"]
        },
            a = function () {
          function t(e) {
            var n = this;
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, t), this.commands = {}, this.keys = {}, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function (t) {
              n.execute(t);
            }, this.element.addEventListener("keydown", this.executeShortcut, !1);
          }

          return o(t, [{
            key: "parseShortcutName",
            value: function value(t) {
              t = t.split("+");

              for (var e = 0; e < t.length; e++) {
                if (t[e] = t[e].toUpperCase(), t[e].length > 1) for (var n in i) {
                  i[n].includes(t[e]) && (this.commands[n] = !0);
                } else this.keys[t[e]] = !0;
              }
            }
          }, {
            key: "execute",
            value: function value(t) {
              var e = t.ctrlKey || t.metaKey,
                  n = t.shiftKey,
                  o = t.altKey,
                  i = {
                CMD: e,
                SHIFT: n,
                ALT: o
              },
                  a = void 0,
                  s = !0;

              for (a in this.commands) {
                s = s && i[a];
              }

              var c = void 0,
                  u = !0;

              for (c in this.keys) {
                u = u && t.keyCode === r[c];
              }

              s && u && this.callback(t);
            }
          }, {
            key: "remove",
            value: function value() {
              this.element.removeEventListener("keydown", this.executeShortcut);
            }
          }]), t;
        }();

        e.default = a;
      }]);
    }, function (t, e, n) {
      t.exports = function (t) {
        var e = {};

        function n(o) {
          if (e[o]) return e[o].exports;
          var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
          };
          return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }

        return n.m = t, n.c = e, n.d = function (t, e, o) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
          });
        }, n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, n.t = function (t, e) {
          if (1 & e && (t = n(t)), 8 & e) return t;
          if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var r in t) {
            n.d(o, r, function (e) {
              return t[e];
            }.bind(null, r));
          }
          return o;
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "/", n(n.s = 0);
      }([function (t, e, n) {
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        n(1).toString();
        /**
         * Base Paragraph Block for the Editor.js.
         * Represents simple paragraph
         *
         * @author CodeX (team@ifmo.su)
         * @copyright CodeX 2018
         * @license The MIT License (MIT)
         * @version 2.0.0
         */

        var r = function () {
          function t(e) {
            var n = e.data,
                o = (e.config, e.api);
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.api = o, this._CSS = {
              block: this.api.styles.block,
              wrapper: "ce-paragraph"
            }, this._data = {}, this._element = this.drawView(), this.data = n;
          }

          var e, n, r;
          return e = t, r = [{
            key: "sanitize",
            get: function get() {
              return {
                text: {
                  br: !0
                }
              };
            }
          }, {
            key: "pasteConfig",
            get: function get() {
              return {
                tags: ["P"]
              };
            }
          }], (n = [{
            key: "drawView",
            value: function value() {
              var t = document.createElement("DIV");
              return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !0, t;
            }
          }, {
            key: "render",
            value: function value() {
              return this._element;
            }
          }, {
            key: "merge",
            value: function value(t) {
              var e = {
                text: this.data.text + t.text
              };
              this.data = e;
            }
          }, {
            key: "validate",
            value: function value(t) {
              return "" !== t.text.trim();
            }
          }, {
            key: "save",
            value: function value(t) {
              return {
                text: t.innerHTML
              };
            }
          }, {
            key: "onPaste",
            value: function value(t) {
              var e = {
                text: t.detail.data.innerHTML
              };
              this.data = e;
            }
          }, {
            key: "data",
            get: function get() {
              var t = this._element.innerHTML;
              return this._data.text = t, this._data;
            },
            set: function set(t) {
              this._data = t || {}, this._element.innerHTML = this._data.text || "";
            }
          }]) && o(e.prototype, n), r && o(e, r), t;
        }();

        t.exports = r;
      }, function (t, e, n) {
        var o = n(2);
        "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
          hmr: !0,
          transform: void 0,
          insertInto: void 0
        }), o.locals && (t.exports = o.locals);
      }, function (t, e, n) {
        (t.exports = n(3)(!1)).push([t.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]);
      }, function (t, e) {
        t.exports = function (t) {
          var e = [];
          return e.toString = function () {
            return this.map(function (e) {
              var n = function (t, e) {
                var n,
                    o = t[1] || "",
                    r = t[3];
                if (!r) return o;

                if (e && "function" == typeof btoa) {
                  var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                      a = r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                  return [o].concat(a).concat([i]).join("\n");
                }

                return [o].join("\n");
              }(e, t);

              return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
            }).join("");
          }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);

            for (var o = {}, r = 0; r < this.length; r++) {
              var i = this[r][0];
              "number" == typeof i && (o[i] = !0);
            }

            for (r = 0; r < t.length; r++) {
              var a = t[r];
              "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
            }
          }, e;
        };
      }, function (t, e, n) {
        var o,
            r,
            i = {},
            a = (o = function o() {
          return window && document && document.all && !window.atob;
        }, function () {
          return void 0 === r && (r = o.apply(this, arguments)), r;
        }),
            s = function (t) {
          var e = {};
          return function (t) {
            if ("function" == typeof t) return t();

            if (void 0 === e[t]) {
              var n = function (t) {
                return document.querySelector(t);
              }.call(this, t);

              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
              e[t] = n;
            }

            return e[t];
          };
        }(),
            c = null,
            u = 0,
            l = [],
            f = n(5);

        function d(t, e) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n],
                r = i[o.id];

            if (r) {
              r.refs++;

              for (var a = 0; a < r.parts.length; a++) {
                r.parts[a](o.parts[a]);
              }

              for (; a < o.parts.length; a++) {
                r.parts.push(b(o.parts[a], e));
              }
            } else {
              var s = [];

              for (a = 0; a < o.parts.length; a++) {
                s.push(b(o.parts[a], e));
              }

              i[o.id] = {
                id: o.id,
                refs: 1,
                parts: s
              };
            }
          }
        }

        function p(t, e) {
          for (var n = [], o = {}, r = 0; r < t.length; r++) {
            var i = t[r],
                a = e.base ? i[0] + e.base : i[0],
                s = {
              css: i[1],
              media: i[2],
              sourceMap: i[3]
            };
            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
              id: a,
              parts: [s]
            });
          }

          return n;
        }

        function h(t, e) {
          var n = s(t.insertInto);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var o = l[l.length - 1];
          if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
            if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = s(t.insertInto + " " + t.insertAt.before);
            n.insertBefore(e, r);
          }
        }

        function v(t) {
          if (null === t.parentNode) return !1;
          t.parentNode.removeChild(t);
          var e = l.indexOf(t);
          e >= 0 && l.splice(e, 1);
        }

        function g(t) {
          var e = document.createElement("style");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
        }

        function y(t, e) {
          Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n]);
          });
        }

        function b(t, e) {
          var n, o, r, i;

          if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function () {};
            t.css = i;
          }

          if (e.singleton) {
            var a = u++;
            n = c || (c = g(e)), o = x.bind(null, n, a, !1), r = x.bind(null, n, a, !0);
          } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
          }(e), o = function (t, e, n) {
            var o = n.css,
                r = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && r;
            (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([o], {
              type: "text/css"
            }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
          }.bind(null, n, e), r = function r() {
            v(n), n.href && URL.revokeObjectURL(n.href);
          }) : (n = g(e), o = function (t, e) {
            var n = e.css,
                o = e.media;
            if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
              for (; t.firstChild;) {
                t.removeChild(t.firstChild);
              }

              t.appendChild(document.createTextNode(n));
            }
          }.bind(null, n), r = function r() {
            v(n);
          });

          return o(t), function (e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
              o(t = e);
            } else r();
          };
        }

        t.exports = function (t, e) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
          (e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
          var n = p(t, e);
          return d(n, e), function (t) {
            for (var o = [], r = 0; r < n.length; r++) {
              var a = n[r];
              (s = i[a.id]).refs--, o.push(s);
            }

            for (t && d(p(t, e), e), r = 0; r < o.length; r++) {
              var s;

              if (0 === (s = o[r]).refs) {
                for (var c = 0; c < s.parts.length; c++) {
                  s.parts[c]();
                }

                delete i[s.id];
              }
            }
          };
        };

        var m,
            k = (m = [], function (t, e) {
          return m[t] = e, m.filter(Boolean).join("\n");
        });

        function x(t, e, n, o) {
          var r = n ? "" : o.css;
          if (t.styleSheet) t.styleSheet.cssText = k(e, r);else {
            var i = document.createTextNode(r),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
          }
        }
      }, function (t, e) {
        t.exports = function (t) {
          var e = "undefined" != typeof window && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!t || "string" != typeof t) return t;
          var n = e.protocol + "//" + e.host,
              o = n + e.pathname.replace(/\/[^\/]*$/, "/");
          return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var r,
                i = e.trim().replace(/^"(.*)"$/, function (t, e) {
              return e;
            }).replace(/^'(.*)'$/, function (t, e) {
              return e;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
          });
        };
      }]);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o44, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o44, "__esModule", {
          value: !0
        }), _o44.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t() {
            (0, r.default)(this, t), this.commandName = "bold", this.CSS = {
              button: "ce-inline-tool",
              buttonActive: "ce-inline-tool--active",
              buttonModifier: "ce-inline-tool--bold"
            }, this.nodes = {
              button: void 0
            };
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 13, 15)), this.nodes.button;
            }
          }, {
            key: "surround",
            value: function value(t) {
              document.execCommand(this.commandName);
            }
          }, {
            key: "checkState",
            value: function value(t) {
              var e = document.queryCommandState(this.commandName);
              return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
            }
          }, {
            key: "shortcut",
            get: function get() {
              return "CMD+B";
            }
          }], [{
            key: "sanitize",
            get: function get() {
              return {
                b: {}
              };
            }
          }]), t;
        }();

        _o44.default = c, c.displayName = "BoldInlineTool", c.isInline = !0, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o45, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o45, "__esModule", {
          value: !0
        }), _o45.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t() {
            (0, r.default)(this, t), this.commandName = "italic", this.CSS = {
              button: "ce-inline-tool",
              buttonActive: "ce-inline-tool--active",
              buttonModifier: "ce-inline-tool--italic"
            }, this.nodes = {
              button: null
            };
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 6, 15)), this.nodes.button;
            }
          }, {
            key: "surround",
            value: function value(t) {
              document.execCommand(this.commandName);
            }
          }, {
            key: "checkState",
            value: function value(t) {
              var e = document.queryCommandState(this.commandName);
              return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
            }
          }, {
            key: "shortcut",
            get: function get() {
              return "CMD+I";
            }
          }], [{
            key: "sanitize",
            get: function get() {
              return {
                i: {}
              };
            }
          }]), t;
        }();

        _o45.default = c, c.displayName = "ItalicInlineTool", c.isInline = !0, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(37), n(13), n(18)], void 0 === (i = "function" == typeof (o = function o(_o46, r, i, a, s, c) {

        var u = n(3);
        Object.defineProperty(_o46, "__esModule", {
          value: !0
        }), _o46.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);

        var l = function () {
          function t(e) {
            var n = e.api;
            (0, r.default)(this, t), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
              button: "ce-inline-tool",
              buttonActive: "ce-inline-tool--active",
              buttonModifier: "ce-inline-tool--link",
              buttonUnlink: "ce-inline-tool--unlink",
              input: "ce-inline-tool-input",
              inputShowed: "ce-inline-tool-input--showed"
            }, this.nodes = {
              button: null,
              input: null
            }, this.inputOpened = !1, this.inlineToolbar = n.toolbar, this.notifier = n.notifier, this.selection = new a.default();
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 15, 14)), this.nodes.button.appendChild(s.default.svg("unlink", 16, 18)), this.nodes.button;
            }
          }, {
            key: "renderActions",
            value: function value() {
              var t = this;
              return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = "Add a link", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function (e) {
                e.keyCode === t.ENTER_KEY && t.enterPressed(e);
              }), this.nodes.input;
            }
          }, {
            key: "surround",
            value: function value(t) {
              if (t) {
                this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                var e = this.selection.findParentTag("A");
                if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.inlineToolbar.close();
              }

              this.toggleActions();
            }
          }, {
            key: "checkState",
            value: function value(t) {
              var e = this.selection.findParentTag("A");

              if (e) {
                this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                var n = e.getAttribute("href");
                this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
              } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);

              return !!e;
            }
          }, {
            key: "clear",
            value: function value() {
              this.closeActions();
            }
          }, {
            key: "toggleActions",
            value: function value() {
              this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
            }
          }, {
            key: "openActions",
            value: function value() {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
            }
          }, {
            key: "closeActions",
            value: function value() {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];

              if (this.selection.isFakeBackgroundEnabled) {
                var e = new a.default();
                e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
              }

              this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
            }
          }, {
            key: "enterPressed",
            value: function value(t) {
              var e = this.nodes.input.value || "";
              if (e.trim() || (this.selection.restore(), this.unlink(), t.preventDefault(), this.closeActions()), !this.validateURL(e)) return this.notifier.show({
                message: "Pasted link is not valid.",
                style: "error"
              }), void c.default.log("Incorrect Link pasted", "warn", e);
              e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.closeActions(), this.inlineToolbar.close(), this.checkState();
            }
          }, {
            key: "validateURL",
            value: function value(t) {
              return !/\s/.test(t);
            }
          }, {
            key: "prepareLink",
            value: function value(t) {
              return t = t.trim(), t = this.addProtocol(t);
            }
          }, {
            key: "addProtocol",
            value: function value(t) {
              if (/^(\w+):\/\//.test(t)) return t;
              var e = /^\/[^\/\s]/.test(t),
                  n = "#" === t.substring(0, 1),
                  o = /^\/\/[^\/\s]/.test(t);
              return e || n || o || (t = "http://" + t), t;
            }
          }, {
            key: "insertLink",
            value: function value(t) {
              var e = this.selection.findParentTag("A");
              e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
            }
          }, {
            key: "unlink",
            value: function value() {
              document.execCommand(this.commandUnlink);
            }
          }, {
            key: "shortcut",
            get: function get() {
              return "CMD+K";
            }
          }], [{
            key: "sanitize",
            get: function get() {
              return {
                a: {
                  href: !0,
                  target: "_blank",
                  rel: "nofollow"
                }
              };
            }
          }]), t;
        }();

        _o46.default = l, l.displayName = "LinkInlineTool", l.isInline = !0, t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e, n) {
      var o, r, i;
      r = [e, n(1), n(2), n(13)], void 0 === (i = "function" == typeof (o = function o(_o47, r, i, a) {

        var s = n(3);
        Object.defineProperty(_o47, "__esModule", {
          value: !0
        }), _o47.default = void 0, r = s(r), i = s(i), a = s(a);

        var c = function () {
          function t(e) {
            var n = e.data;
            e.config, e.api, (0, r.default)(this, t), this.CSS = {
              wrapper: "ce-stub",
              info: "ce-stub__info",
              title: "ce-stub__title",
              subtitle: "ce-stub__subtitle"
            }, this.title = n.title || "Error", this.subtitle = "The block can not be displayed correctly.", this.savedData = n.savedData, this.wrapper = this.make();
          }

          return (0, i.default)(t, [{
            key: "render",
            value: function value() {
              return this.wrapper;
            }
          }, {
            key: "save",
            value: function value() {
              return this.savedData;
            }
          }, {
            key: "make",
            value: function value() {
              var t = a.default.make("div", this.CSS.wrapper),
                  e = a.default.svg("sad-face", 52, 52),
                  n = a.default.make("div", this.CSS.info),
                  o = a.default.make("div", this.CSS.title, {
                textContent: this.title
              }),
                  r = a.default.make("div", this.CSS.subtitle, {
                textContent: this.subtitle
              });
              return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t;
            }
          }]), t;
        }();

        _o47.default = c, c.displayName = "Stub", t.exports = e.default;
      }) ? o.apply(e, r) : o) || (t.exports = i);
    }, function (t, e) {
      t.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 13 15">\n  <path d="M5.996 13.9H1.752c-.613 0-1.05-.137-1.312-.412-.262-.275-.393-.712-.393-1.312V1.737C.047 1.125.18.684.449.416.718.147 1.152.013 1.752.013h4.5a10.5 10.5 0 0 1 1.723.123c.487.082.922.24 1.308.474a3.43 3.43 0 0 1 1.449 1.738c.132.363.199.747.199 1.151 0 1.39-.695 2.406-2.084 3.05 1.825.581 2.737 1.712 2.737 3.391 0 .777-.199 1.477-.596 2.099a3.581 3.581 0 0 1-1.61 1.378c-.424.177-.91.301-1.46.374-.549.073-1.19.109-1.922.109zm-.209-6.167H2.86v4.055h3.022c1.9 0 2.851-.686 2.851-2.056 0-.7-.246-1.21-.739-1.525-.492-.316-1.228-.474-2.207-.474zM2.86 2.125v3.59h2.577c.7 0 1.242-.066 1.624-.198a1.55 1.55 0 0 0 .876-.758c.158-.265.237-.562.237-.89 0-.702-.25-1.167-.748-1.398-.499-.23-1.26-.346-2.283-.346H2.86z"/>\n\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 18 4">\n  <g fill-rule="evenodd">\n    <circle cx="9" cy="2" r="2"/>\n    <circle cx="2" cy="2" r="2"/>\n    <circle cx="16" cy="2" r="2"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 6 15">\n  <path d="M4 5.2l-1.368 7.474c-.095.518-.29.91-.585 1.175a1.468 1.468 0 0 1-1.01.398c-.379 0-.662-.136-.85-.407-.186-.272-.234-.66-.141-1.166L1.4 5.276c.093-.511.282-.896.567-1.155a1.43 1.43 0 0 1 .994-.389c.38 0 .668.13.867.389.199.259.256.618.172 1.08zm-.79-2.67c-.36 0-.648-.111-.863-.332-.215-.221-.286-.534-.212-.938.067-.366.253-.668.559-.905A1.57 1.57 0 0 1 3.673 0c.334 0 .612.107.831.322.22.215.292.527.217.938-.073.398-.256.709-.55.933a1.55 1.55 0 0 1-.961.336z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 15 14">\n    <path transform="rotate(-45 11.83 6.678)" d="M11.332 4.013a51.07 51.07 0 0 1-2.28.001A1.402 1.402 0 0 0 7.7 2.25H3.65a1.4 1.4 0 1 0 0 2.8h.848c.206.86.693 1.61 1.463 2.25H3.65a3.65 3.65 0 1 1 0-7.3H7.7a3.65 3.65 0 0 1 3.632 4.013zM10.9 0h2a3.65 3.65 0 0 1 0 7.3H8.85a3.65 3.65 0 0 1-3.632-4.011A62.68 62.68 0 0 1 7.5 3.273 1.401 1.401 0 0 0 8.85 5.05h4.05a1.4 1.4 0 0 0 0-2.8h-.48C12.274 1.664 11.694.785 10.9 0z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 16 18">\n    <path transform="rotate(-45 8.358 11.636)" d="M9.14 9.433c.008-.12-.087-.686-.112-.81a1.4 1.4 0 0 0-1.64-1.106l-3.977.772a1.4 1.4 0 0 0 .535 2.749l.935-.162s.019 1.093.592 2.223l-1.098.148A3.65 3.65 0 1 1 2.982 6.08l3.976-.773c1.979-.385 3.838.919 4.28 2.886.51 2.276-1.084 2.816-1.073 2.935.011.12-.394-1.59-1.026-1.696zm3.563-.875l2.105 3.439a3.65 3.65 0 0 1-6.19 3.868L6.47 12.431c-1.068-1.71-.964-2.295-.49-3.07.067-.107 1.16-1.466 1.48-.936-.12.036.9 1.33.789 1.398-.656.41-.28.76.13 1.415l2.145 3.435a1.4 1.4 0 0 0 2.375-1.484l-1.132-1.941c.42-.435 1.237-1.054.935-2.69zm1.88-2.256h3.4a1.125 1.125 0 0 1 0 2.25h-3.4a1.125 1.125 0 0 1 0-2.25zM11.849.038c.62 0 1.125.503 1.125 1.125v3.4a1.125 1.125 0 0 1-2.25 0v-3.4c0-.622.503-1.125 1.125-1.125z"/>\n\n</symbol></svg>';
    }, function (t, e) {
      t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor{padding-bottom:300px}.codex-editor__redactor--hidden{display:none}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::selection{background-color:#a8d6ff}[contentEditable=true][data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400}[contentEditable=true][data-placeholder]:empty:focus:before{opacity:.3}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:fixed;bottom:0;top:auto;left:0;right:0;z-index:9;height:50px;background:#fff;-webkit-box-shadow:0 -2px 12px rgba(60,67,81,.18);box-shadow:0 -2px 12px rgba(60,67,81,.18);-webkit-transform:none!important;transform:none!important}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;padding:0 10px;max-width:calc(100% - 70px);overflow-x:auto}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:0;top:10px;padding-right:16px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:static;margin-left:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:inline-block;width:24px;height:24px;color:#707684;cursor:pointer}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;visibility:visible!important}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox__tooltip{position:absolute;top:25px;padding:6px 10px;border-radius:5px;line-height:21px;opacity:0;background:#eff2f5;-webkit-box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);color:#5c6174;font-size:12px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity .15s ease-in,left .1s linear;transition:opacity .15s ease-in,left .1s linear;will-change:opacity,left;letter-spacing:.02em;line-height:1em}.ce-toolbox__tooltip-shortcut{color:rgba(100,105,122,.6);word-spacing:-2px;margin-top:5px}.ce-toolbox__tooltip--shown{opacity:1;-webkit-transition-delay:.1s,0s;transition-delay:.1s,0s}.ce-toolbox__tooltip:before{content:"";width:10px;height:10px;position:absolute;top:-5px;left:50%;margin-left:-5px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#eff2f5;z-index:-1}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}.ce-inline-toolbar:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-inline-toolbar{padding:6px;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:none;-webkit-box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24);box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24)}.ce-inline-toolbar--showed{display:block}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{line-height:normal}.ce-inline-tool .icon,.ce-inline-tool>svg{margin:auto}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool:not(:last-of-type){margin-right:5px}.ce-inline-tool--last{margin-right:0!important}.ce-inline-tool--link .icon{margin-top:-2px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block}.ce-inline-tool-input{background-color:#eff2f5;outline:none;border:0;border-radius:3px;margin:6px 0 0;font-size:13px;padding:8px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-settings{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}.ce-settings:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-settings{right:5px;top:35px;min-width:124px}@media (max-width:650px){.ce-settings{bottom:50px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-name:bounceIn;animation-name:bounceIn}.ce-settings__plugin-zone:not(:empty){padding:6px 6px 0}.ce-settings__default-zone:not(:empty){padding:6px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button .icon,.ce-settings__button>svg{margin:auto}.ce-settings__button--active{color:#388ae5}.ce-settings__button:not(:nth-child(3n+3)){margin-right:5px}.ce-settings__button:nth-child(n+4){margin-top:5px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--focused{background-image:linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);border-radius:3px}@media (max-width:650px){.ce-block--focused{background-image:none;background-color:rgba(200,199,219,.17);margin:0 -10px;padding:0 10px}}.ce-block--selected .ce-block__content{background:#a8d6ff;-webkit-box-shadow:0 31px 23px -22px #afdcff;box-shadow:0 31px 23px -22px #afdcff;-webkit-animation:selectionBounce .2s 1;animation:selectionBounce .2s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}.cdx-block{padding:.7em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button .icon,.cdx-settings-button>svg{margin:auto}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:5px}.cdx-settings-button:nth-child(n+4){margin-top:5px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}';
    }]);
  });
});
var EditorJS = unwrapExports(editor);
var editor_1 = editor.EditorJS;

var PLUGINS = {
  header: require('@editorjs/header'),
  list: require('@editorjs/list'),
  image: require('@editorjs/image'),
  inlineCode: require('@editorjs/inline-code'),
  embed: require('@editorjs/embed'),
  quote: require('@editorjs/quote'),
  marker: require('@editorjs/marker'),
  code: require('@editorjs/code'),
  link: require('@editorjs/link'),
  delimiter: require('@editorjs/delimiter'),
  raw: require('@editorjs/raw'),
  table: require('@editorjs/table'),
  warning: require('@editorjs/warning'),
  paragraph: require('@editorjs/paragraph'),
  checklist: require('@editorjs/checklist')
};
var PLUGIN_PROPS_TYPE = {
  type: [Boolean, Object],
  default: function _default() {
    return false;
  },
  required: false
};
var script = {
  name: 'vue-editor-js',
  props: {
    holderId: {
      type: String,
      default: function _default() {
        return 'codex-editor';
      },
      required: false
    },
    autofocus: {
      type: Boolean,
      default: function _default() {
        return false;
      },
      required: false
    },
    initData: {
      type: Object,
      default: function _default() {},
      required: false
    },
    customTools: {
      type: Object,
      default: function _default() {},
      required: false
    },

    /**
     * Plugins
     */
    header: PLUGIN_PROPS_TYPE,
    list: PLUGIN_PROPS_TYPE,
    code: PLUGIN_PROPS_TYPE,
    inlineCode: PLUGIN_PROPS_TYPE,
    embed: PLUGIN_PROPS_TYPE,
    link: PLUGIN_PROPS_TYPE,
    marker: PLUGIN_PROPS_TYPE,
    table: PLUGIN_PROPS_TYPE,
    raw: PLUGIN_PROPS_TYPE,
    delimiter: PLUGIN_PROPS_TYPE,
    quote: PLUGIN_PROPS_TYPE,
    image: PLUGIN_PROPS_TYPE,
    warning: PLUGIN_PROPS_TYPE,
    paragraph: PLUGIN_PROPS_TYPE,
    checklist: PLUGIN_PROPS_TYPE
  },
  data: function data() {
    return {
      editor: null
    };
  },
  mounted: function mounted() {
    this.initEditor();
  },
  methods: {
    initEditor: function initEditor() {
      var _this = this;

      if (this.editor) {
        this.editor.destroy();
      }

      this.editor = new EditorJS({
        holder: this.holderId,
        autofocus: this.autofocus,
        onReady: function onReady() {
          _this.$emit('ready');
        },
        onChange: function onChange() {
          _this.$emit('change');
        },
        data: this.initData,
        tools: this.getTools()
      });
    },
    save: function () {
      var _save = _asyncToGenerator(
      /*#__PURE__*/
      regenerator.mark(function _callee() {
        var response;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.editor.save();

              case 2:
                response = _context.sent;
                this.$emit('save', response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }(),
    getTools: function getTools() {
      var _this2 = this;

      var pluginKeys = Object.keys(PLUGINS);
      var isFullyFeatured = pluginKeys.every(function (p) {
        return !_this2[p];
      });

      var tools = _objectSpread({}, this.customTools);
      /**
       * When plugin props are empty, enable all plugins
       */


      if (isFullyFeatured) {
        pluginKeys.forEach(function (key) {
          return tools[key] = {
            class: PLUGINS[key]
          };
        });
        return tools;
      }

      pluginKeys.forEach(function (key) {
        var props = _this2.$props[key];

        if (!props) {
          return;
        }

        tools[key] = {
          class: PLUGINS[key]
        };

        if (_typeof(props) === 'object') {
          var options = Object.assign({}, _this2.$props[key]);
          delete options['class']; // Prevent merge wrong `class`

          tools[key] = Object.assign(tools[key], options);
        }
      });
      return tools;
    }
  },
  watch: {
    initData: function initData() {
      this.initEditor();
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
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vue-editor-js"}},[_c('div',{attrs:{"id":_vm.holderId}}),_vm._v(" "),_c('button',{staticStyle:{"display":"none"},attrs:{"id":(_vm.holderId + "-button")},on:{"click":_vm.save}})])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var EditorComponent = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var version = '0.3.0';
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Editor', EditorComponent);
}
var plugin = {
  install: install,
  version: version
};
var Editor = EditorComponent;
var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

exports.Editor = Editor;
exports.default = plugin;
exports.install = install;
