import * as __WEBPACK_EXTERNAL_MODULE_playwright__ from "playwright";
import * as __WEBPACK_EXTERNAL_MODULE_zod__ from "zod";
import * as __WEBPACK_EXTERNAL_MODULE_dedent__ from "dedent";
import * as __WEBPACK_EXTERNAL_MODULE_diff_lines_24b6f423__ from "diff-lines";
/******/ var __webpack_modules__ = ({

/***/ 909:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidCron = void 0;
// This comes from the fact that parseInt trims characters coming
// after digits and consider it a valid int, so `1*` becomes `1`.
var safeParseInt = function (value) {
    if (/^\d+$/.test(value)) {
        return Number(value);
    }
    else {
        return NaN;
    }
};
var isWildcard = function (value) {
    return value === '*';
};
var isQuestionMark = function (value) {
    return value === '?';
};
var isInRange = function (value, start, stop) {
    return value >= start && value <= stop;
};
var isValidRange = function (value, start, stop) {
    var sides = value.split('-');
    switch (sides.length) {
        case 1:
            return isWildcard(value) || isInRange(safeParseInt(value), start, stop);
        case 2:
            var _a = sides.map(function (side) { return safeParseInt(side); }), small = _a[0], big = _a[1];
            return small <= big && isInRange(small, start, stop) && isInRange(big, start, stop);
        default:
            return false;
    }
};
var isValidStep = function (value) {
    return value === undefined || (value.search(/[^\d]/) === -1 && safeParseInt(value) > 0);
};
var validateForRange = function (value, start, stop) {
    if (value.search(/[^\d-,\/*]/) !== -1) {
        return false;
    }
    var list = value.split(',');
    return list.every(function (condition) {
        var splits = condition.split('/');
        // Prevents `*/ * * * *` from being accepted.
        if (condition.trim().endsWith('/')) {
            return false;
        }
        // Prevents `*/*/* * * * *` from being accepted
        if (splits.length > 2) {
            return false;
        }
        // If we don't have a `/`, right will be undefined which is considered a valid step if we don't a `/`.
        var left = splits[0], right = splits[1];
        return isValidRange(left, start, stop) && isValidStep(right);
    });
};
var hasValidSeconds = function (seconds) {
    return validateForRange(seconds, 0, 59);
};
var hasValidMinutes = function (minutes) {
    return validateForRange(minutes, 0, 59);
};
var hasValidHours = function (hours) {
    return validateForRange(hours, 0, 23);
};
var hasValidDays = function (days, allowBlankDay) {
    return (allowBlankDay && isQuestionMark(days)) || validateForRange(days, 1, 31);
};
var monthAlias = {
    jan: '1',
    feb: '2',
    mar: '3',
    apr: '4',
    may: '5',
    jun: '6',
    jul: '7',
    aug: '8',
    sep: '9',
    oct: '10',
    nov: '11',
    dec: '12'
};
var hasValidMonths = function (months, alias) {
    // Prevents alias to be used as steps
    if (months.search(/\/[a-zA-Z]/) !== -1) {
        return false;
    }
    if (alias) {
        var remappedMonths = months.toLowerCase().replace(/[a-z]{3}/g, function (match) {
            return monthAlias[match] === undefined ? match : monthAlias[match];
        });
        // If any invalid alias was used, it won't pass the other checks as there will be non-numeric values in the months
        return validateForRange(remappedMonths, 1, 12);
    }
    return validateForRange(months, 1, 12);
};
var weekdaysAlias = {
    sun: '0',
    mon: '1',
    tue: '2',
    wed: '3',
    thu: '4',
    fri: '5',
    sat: '6'
};
var hasValidWeekdays = function (weekdays, alias, allowBlankDay, allowSevenAsSunday) {
    // If there is a question mark, checks if the allowBlankDay flag is set
    if (allowBlankDay && isQuestionMark(weekdays)) {
        return true;
    }
    else if (!allowBlankDay && isQuestionMark(weekdays)) {
        return false;
    }
    // Prevents alias to be used as steps
    if (weekdays.search(/\/[a-zA-Z]/) !== -1) {
        return false;
    }
    if (alias) {
        var remappedWeekdays = weekdays.toLowerCase().replace(/[a-z]{3}/g, function (match) {
            return weekdaysAlias[match] === undefined ? match : weekdaysAlias[match];
        });
        // If any invalid alias was used, it won't pass the other checks as there will be non-numeric values in the weekdays
        return validateForRange(remappedWeekdays, 0, allowSevenAsSunday ? 7 : 6);
    }
    return validateForRange(weekdays, 0, allowSevenAsSunday ? 7 : 6);
};
var hasCompatibleDayFormat = function (days, weekdays, allowBlankDay) {
    return !(allowBlankDay && isQuestionMark(days) && isQuestionMark(weekdays));
};
var split = function (cron) {
    return cron.trim().split(/\s+/);
};
var defaultOptions = {
    alias: false,
    seconds: false,
    allowBlankDay: false,
    allowSevenAsSunday: false
};
exports.isValidCron = function (cron, options) {
    options = __assign(__assign({}, defaultOptions), options);
    var splits = split(cron);
    if (splits.length > (options.seconds ? 6 : 5) || splits.length < 5) {
        return false;
    }
    var checks = [];
    if (splits.length === 6) {
        var seconds = splits.shift();
        if (seconds) {
            checks.push(hasValidSeconds(seconds));
        }
    }
    // We could only check the steps gradually and return false on the first invalid block,
    // However, this won't have any performance impact so why bother for now.
    var minutes = splits[0], hours = splits[1], days = splits[2], months = splits[3], weekdays = splits[4];
    checks.push(hasValidMinutes(minutes));
    checks.push(hasValidHours(hours));
    checks.push(hasValidDays(days, options.allowBlankDay));
    checks.push(hasValidMonths(months, options.alias));
    checks.push(hasValidWeekdays(weekdays, options.alias, options.allowBlankDay, options.allowSevenAsSunday));
    checks.push(hasCompatibleDayFormat(days, weekdays, options.allowBlankDay));
    return checks.every(Boolean);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62:
/***/ ((module) => {



module.exports = function (fetch, defaults) {
  defaults = defaults || {};
  if (typeof fetch !== 'function') {
    throw new ArgumentError('fetch must be a function');
  }

  if (typeof defaults !== 'object') {
    throw new ArgumentError('defaults must be an object');
  }

  if (defaults.retries !== undefined && !isPositiveInteger(defaults.retries)) {
    throw new ArgumentError('retries must be a positive integer');
  }

  if (defaults.retryDelay !== undefined && !isPositiveInteger(defaults.retryDelay) && typeof defaults.retryDelay !== 'function') {
    throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
  }

  if (defaults.retryOn !== undefined && !Array.isArray(defaults.retryOn) && typeof defaults.retryOn !== 'function') {
    throw new ArgumentError('retryOn property expects an array or function');
  }

  var baseDefaults = {
    retries: 3,
    retryDelay: 1000,
    retryOn: [],
  };

  defaults = Object.assign(baseDefaults, defaults);

  return function fetchRetry(input, init) {
    var retries = defaults.retries;
    var retryDelay = defaults.retryDelay;
    var retryOn = defaults.retryOn;

    if (init && init.retries !== undefined) {
      if (isPositiveInteger(init.retries)) {
        retries = init.retries;
      } else {
        throw new ArgumentError('retries must be a positive integer');
      }
    }

    if (init && init.retryDelay !== undefined) {
      if (isPositiveInteger(init.retryDelay) || (typeof init.retryDelay === 'function')) {
        retryDelay = init.retryDelay;
      } else {
        throw new ArgumentError('retryDelay must be a positive integer or a function returning a positive integer');
      }
    }

    if (init && init.retryOn) {
      if (Array.isArray(init.retryOn) || (typeof init.retryOn === 'function')) {
        retryOn = init.retryOn;
      } else {
        throw new ArgumentError('retryOn property expects an array or function');
      }
    }

    // eslint-disable-next-line no-undef
    return new Promise(function (resolve, reject) {
      var wrappedFetch = function (attempt) {
        // As of node 18, this is no longer needed since node comes with native support for fetch:
        /* istanbul ignore next */
        var _input =
          typeof Request !== 'undefined' && input instanceof Request
            ? input.clone()
            : input;
        fetch(_input, init)
          .then(function (response) {
            if (Array.isArray(retryOn) && retryOn.indexOf(response.status) === -1) {
              resolve(response);
            } else if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                return Promise.resolve(retryOn(attempt, null, response))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, null, response);
                    } else {
                      resolve(response);
                    }
                  }).catch(reject);
              } catch (error) {
                reject(error);
              }
            } else {
              if (attempt < retries) {
                retry(attempt, null, response);
              } else {
                resolve(response);
              }
            }
          })
          .catch(function (error) {
            if (typeof retryOn === 'function') {
              try {
                // eslint-disable-next-line no-undef
                Promise.resolve(retryOn(attempt, error, null))
                  .then(function (retryOnResponse) {
                    if(retryOnResponse) {
                      retry(attempt, error, null);
                    } else {
                      reject(error);
                    }
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              } catch(error) {
                reject(error);
              }
            } else if (attempt < retries) {
              retry(attempt, error, null);
            } else {
              reject(error);
            }
          });
      };

      function retry(attempt, error, response) {
        var delay = (typeof retryDelay === 'function') ?
          retryDelay(attempt, error, response) : retryDelay;
        setTimeout(function () {
          wrappedFetch(++attempt);
        }, delay);
      }

      wrappedFetch(0);
    });
  };
};

function isPositiveInteger(value) {
  return Number.isInteger(value) && value >= 0;
}

function ArgumentError(message) {
  this.name = 'ArgumentError';
  this.message = message;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nccwpck_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__nccwpck_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "_w": () => (/* reexport */ APIGenerator),
  "Yt": () => (/* reexport */ AgentController),
  "DE": () => (/* reexport */ ChromeBrowser)
});

;// CONCATENATED MODULE: external "playwright"
var x = y => { var x = {}; __nccwpck_require__.d(x, y); return x; }
var y = x => () => x
const external_playwright_namespaceObject = x({ ["chromium"]: () => __WEBPACK_EXTERNAL_MODULE_playwright__.chromium, ["devices"]: () => __WEBPACK_EXTERNAL_MODULE_playwright__.devices });
;// CONCATENATED MODULE: ../../packages/web-agent/src/utils/url.ts
// Returns true if 2 urls are different, ignoring differences in query params.
const urlChanged = (url1, url2) => {
    const { hostname, pathname } = new URL(url1);
    const { hostname: hostname2, pathname: pathname2 } = new URL(url2);
    return hostname !== hostname2 || pathname !== pathname2;
};

;// CONCATENATED MODULE: ../../packages/types/src/agents.ts
var AgentType;
(function (AgentType) {
    AgentType["A11Y"] = "a11y";
    AgentType["HTML"] = "html";
})(AgentType || (AgentType = {}));

;// CONCATENATED MODULE: external "zod"
var external_zod_x = y => { var x = {}; __nccwpck_require__.d(x, y); return x; }
var external_zod_y = x => () => x
const external_zod_namespaceObject = external_zod_x({ ["array"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.array, ["boolean"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.boolean, ["coerce"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.coerce, ["discriminatedUnion"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.discriminatedUnion, ["literal"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.literal, ["nativeEnum"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.nativeEnum, ["null"]: () => __WEBPACK_EXTERNAL_MODULE_zod__["null"], ["number"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.number, ["object"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.object, ["string"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.string, ["union"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.union, ["z"]: () => __WEBPACK_EXTERNAL_MODULE_zod__.z });
;// CONCATENATED MODULE: ../../packages/types/src/a11y-targets.ts

const A11yTargetWithCacheSchema = external_zod_namespaceObject.object({
    // a11y ID
    id: external_zod_namespaceObject.number().int(),
    // additional metadata stored after the action is executed
    // to assist in re-execution
    role: external_zod_namespaceObject.string().optional(),
    name: external_zod_namespaceObject.string().optional(),
    content: external_zod_namespaceObject.string().optional(),
    pathFromRoot: external_zod_namespaceObject.string().optional(),
    serializedForm: external_zod_namespaceObject.string().optional(),
});

;// CONCATENATED MODULE: ../../packages/types/src/assertions.ts

// schema that the LLM outputs when evaluating assertions
const LLMAssertionEvalSchema = external_zod_namespaceObject.z.object({
    thoughts: external_zod_namespaceObject.z.string(),
    result: external_zod_namespaceObject.z.boolean(),
    relevantElements: external_zod_namespaceObject.z.array(external_zod_namespaceObject.z.number()).optional(),
});

;// CONCATENATED MODULE: ../../packages/types/src/errors.ts
// https://stackoverflow.com/questions/42754270/re-throwing-exception-in-nodejs-and-not-losing-stack-trace
class BrowserExecutionError extends Error {
    constructor(message, options = {}) {
        super(message, options);
        this.name = "BrowserExecutionError";
    }
}
class errors_CommandParseError extends Error {
    constructor(message, options = {}) {
        super(message, options);
        this.name = "CommandParseError";
    }
}
class EmptyA11yTreeError extends Error {
    constructor(options = {}) {
        super("Got empty a11y tree", options);
        this.name = "EmptyA11yTreeError";
    }
}

;// CONCATENATED MODULE: external "dedent"
var external_dedent_x = y => { var x = {}; __nccwpck_require__.d(x, y); return x; }
var external_dedent_y = x => () => x
const external_dedent_namespaceObject = external_dedent_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_dedent__["default"] });
;// CONCATENATED MODULE: ../../packages/types/src/preset.ts



var preset_PresetCommandType;
(function (PresetCommandType) {
    PresetCommandType["AI_ASSERTION"] = "AI_ASSERTION";
    PresetCommandType["CLICK"] = "CLICK";
    PresetCommandType["SELECT_OPTION"] = "SELECT_OPTION";
    PresetCommandType["TYPE"] = "TYPE";
    PresetCommandType["PRESS"] = "PRESS";
    PresetCommandType["NAVIGATE"] = "NAVIGATE";
    PresetCommandType["SCROLL_UP"] = "SCROLL_UP";
    PresetCommandType["SCROLL_DOWN"] = "SCROLL_DOWN";
    PresetCommandType["GO_BACK"] = "GO_BACK";
    PresetCommandType["GO_FORWARD"] = "GO_FORWARD";
    PresetCommandType["WAIT"] = "WAIT";
    PresetCommandType["REFRESH"] = "REFRESH";
})(preset_PresetCommandType || (preset_PresetCommandType = {}));
const ElementDescriptorSchema = external_zod_namespaceObject.object({
    // natural language passed to LLM
    elementDescriptor: external_zod_namespaceObject.string(),
    // Cached A11y target - when a user creates a preset action, this will not exist
    a11yData: A11yTargetWithCacheSchema.optional(),
});
const CommonCommandSchema = external_zod_namespaceObject.object({
    // If the command is suggested by AI, why it did so
    thoughts: external_zod_namespaceObject.string().optional(),
});
const NavigateCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.NAVIGATE),
    url: external_zod_namespaceObject.string(),
})).describe("NAVIGATE <url> - Go to the specified url");
const ScrollUpCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.SCROLL_UP),
})).describe("SCROLL_UP - Scroll up one page");
const ScrollDownCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.SCROLL_DOWN),
})).describe("SCROLL_DOWN - Scroll down one page");
const WaitCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.WAIT),
    delay: external_zod_namespaceObject.number(), // seconds
}));
const RefreshCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.REFRESH),
}));
const GoBackCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.GO_BACK),
}));
const GoForwardCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.GO_FORWARD),
}));
const ClickCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.CLICK),
    target: ElementDescriptorSchema,
    doubleClick: external_zod_namespaceObject.boolean().default(false),
    rightClick: external_zod_namespaceObject.boolean().default(false),
})).describe(external_dedent_namespaceObject["default"] `CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled, hidden or StaticText elements.
  Only click on elements on the Current Page.
  Only click on elements with the following tag names: button, input, link, image, generic.
  `.replace("\n", " "));
const SelectOptionCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.SELECT_OPTION),
    target: ElementDescriptorSchema,
    option: external_zod_namespaceObject.string(),
})).describe(
// TODO: if we move to a non-mutative way of selecting elements (e.g. by selector), we should update this description
`SELECT_OPTION <id> "<option>" - select the specified item from the select with the specified id. The item should exist on the page. Use the name of the item instead of the id. Make sure to include quotes around the option.`);
// Assertions must be user specified today, so no common command schema
const AIAssertionCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.AI_ASSERTION),
    assertion: external_zod_namespaceObject.string(),
    useVision: external_zod_namespaceObject.boolean().default(false),
    disableCache: external_zod_namespaceObject.boolean().default(false),
}));
const TypeOptionsSchema = external_zod_namespaceObject.object({
    clearContent: external_zod_namespaceObject.boolean().default(true),
    pressKeysSequentially: external_zod_namespaceObject.boolean().default(false),
});
const TypeCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.TYPE),
    target: ElementDescriptorSchema,
    value: external_zod_namespaceObject.string(),
    pressEnter: external_zod_namespaceObject.boolean().default(false),
}))
    .merge(TypeOptionsSchema)
    .describe(`TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.`);
// https://playwright.dev/docs/api/class-locator#locator-press
const PressCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(preset_PresetCommandType.PRESS),
    value: external_zod_namespaceObject.string(),
})).describe(`PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key.`);
const PresetCommandSchema = external_zod_namespaceObject.discriminatedUnion("type", [
    ClickCommandSchema,
    GoBackCommandSchema,
    GoForwardCommandSchema,
    NavigateCommandSchema,
    PressCommandSchema,
    RefreshCommandSchema,
    ScrollDownCommandSchema,
    ScrollUpCommandSchema,
    SelectOptionCommandSchema,
    TypeCommandSchema,
    AIAssertionCommandSchema,
    WaitCommandSchema,
]);
// A subset of PresetCommandSchema - these are commands that AI can suggest
// As we add more training cases and the AI becomes more capable, we can expand this.
const AISuggestiblePresetCommandSchema = external_zod_namespaceObject.discriminatedUnion("type", [
    ClickCommandSchema,
    TypeCommandSchema,
    PressCommandSchema,
    SelectOptionCommandSchema,
    NavigateCommandSchema,
    ScrollDownCommandSchema,
    ScrollUpCommandSchema,
]);
const getDefaultPresetCommand = (type) => {
    switch (type) {
        case preset_PresetCommandType.NAVIGATE:
            return {
                type: preset_PresetCommandType.NAVIGATE,
                url: "",
            };
        case preset_PresetCommandType.GO_BACK:
        case preset_PresetCommandType.GO_FORWARD:
        case preset_PresetCommandType.SCROLL_DOWN:
        case preset_PresetCommandType.SCROLL_UP:
        case preset_PresetCommandType.REFRESH:
            return { type };
        case preset_PresetCommandType.WAIT:
            return {
                type,
                delay: 1,
            };
        case preset_PresetCommandType.CLICK:
            return {
                type,
                target: {
                    elementDescriptor: "",
                },
                doubleClick: false,
                rightClick: false,
            };
        case preset_PresetCommandType.TYPE:
            return {
                type,
                target: {
                    elementDescriptor: "",
                },
                value: "",
                clearContent: true,
                pressEnter: false,
                pressKeysSequentially: false,
            };
        case preset_PresetCommandType.PRESS:
            return {
                type,
                value: "",
            };
        case preset_PresetCommandType.SELECT_OPTION:
            return {
                type,
                target: {
                    elementDescriptor: "",
                },
                option: "",
            };
        case preset_PresetCommandType.AI_ASSERTION:
            return {
                type,
                assertion: "",
                disableCache: true,
                useVision: false,
            };
        default:
            const assertUnreachable = (_x) => {
                throw "If Typescript complains about the line below, you missed a case or break in the switch above";
            };
            return assertUnreachable(type);
    }
};

;// CONCATENATED MODULE: ../../packages/types/src/ai-commands.ts




var ControlFlowCommandType;
(function (ControlFlowCommandType) {
    ControlFlowCommandType["SUCCESS"] = "SUCCESS";
    ControlFlowCommandType["FAILURE"] = "FAILURE";
})(ControlFlowCommandType || (ControlFlowCommandType = {}));
const SuccessCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(ControlFlowCommandType.SUCCESS),
})).describe("SUCCESS - the user goal has been successfully achieved");
const FailureCommandSchema = CommonCommandSchema.merge(external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(ControlFlowCommandType.FAILURE),
})).describe("FAILURE - there are no commands to suggest that could make progress that have not already been tried before");
const ControlFlowCommandSchema = external_zod_namespaceObject.discriminatedUnion("type", [
    SuccessCommandSchema,
    FailureCommandSchema,
]);
const ai_commands_AICommandSchema = external_zod_namespaceObject.discriminatedUnion("type", [
    ...ControlFlowCommandSchema.options,
    // We allow all preset actions here because users
    // can edit AI commands to be any preset.
    // However, the AI can only suggest items in AISuggestiblePresetCommandSchema
    ...AISuggestiblePresetCommandSchema.options,
]);
const isControlFlowCommand = (cmd) => {
    return (cmd.type === ControlFlowCommandType.SUCCESS ||
        cmd.type === ControlFlowCommandType.FAILURE);
};
// parses the JSON from the LLM into a command object
function parseCommand(cmd) {
    try {
        return _parseCommand(cmd);
    }
    catch (e) {
        if (e instanceof Error) {
            throw new CommandParseError(`Failed to parse command: ${JSON.stringify(cmd)}`, {
                cause: e,
            });
        }
        throw new Error(`Unexpected throw from parseCommand: ${e}`);
    }
}
const LLMOutputSchema = external_zod_namespaceObject.object({
    command: external_zod_namespaceObject.string(),
    thoughts: external_zod_namespaceObject.string(),
});
const NumericStringSchema = external_zod_namespaceObject.string().pipe(external_zod_namespaceObject.coerce.number());
function _parseCommand(cmd) {
    const { command, thoughts } = LLMOutputSchema.parse(cmd);
    const args = parseArgsStringToArgv(command);
    const type = args[0];
    switch (type) {
        case PresetCommandType.CLICK:
            const clickInput = {
                type,
                target: {
                    elementDescriptor: "",
                    a11yData: {
                        id: NumericStringSchema.parse(args[1]),
                    },
                },
                thoughts,
            };
            // We parse again so zod populates the default fields
            return ai_commands_AICommandSchema.parse(clickInput);
        case PresetCommandType.TYPE:
            const typeInput = {
                type,
                target: {
                    elementDescriptor: "",
                    a11yData: {
                        id: NumericStringSchema.parse(args[1]),
                    },
                },
                value: z.string().parse(args[2]),
                thoughts,
            };
            return ai_commands_AICommandSchema.parse(typeInput);
        case PresetCommandType.PRESS:
            const pressInput = {
                type,
                value: z.string().parse(args[1]),
                thoughts,
            };
            return ai_commands_AICommandSchema.parse(pressInput);
        case PresetCommandType.SELECT_OPTION:
            return {
                type,
                target: {
                    elementDescriptor: "",
                    a11yData: {
                        id: NumericStringSchema.parse(args[1]),
                    },
                },
                option: z.string().parse(args[2]),
                thoughts,
            };
        case PresetCommandType.NAVIGATE:
            return {
                type,
                url: z.string().url().parse(args[1]),
                thoughts,
            };
        case PresetCommandType.SCROLL_DOWN:
        case PresetCommandType.SCROLL_UP:
            return {
                type,
                thoughts,
            };
        case ControlFlowCommandType.SUCCESS:
        case ControlFlowCommandType.FAILURE:
            return {
                type,
                thoughts,
            };
        default:
            throw new Error(`Unknown command type: ${type}`);
    }
}

;// CONCATENATED MODULE: ../../packages/types/src/steps.ts



/**
 * Enum of possible steps inputted by the user.
 */
var StepType;
(function (StepType) {
    // Ask AI to execute an action on the page
    StepType["AI_ACTION"] = "AI_ACTION";
    // Actions that can be executed by the user.
    StepType["PRESET_ACTION"] = "PRESET_ACTION";
    StepType["MODULE"] = "MODULE";
})(StepType || (StepType = {}));
const AIActionSchema = external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(StepType.AI_ACTION),
    text: external_zod_namespaceObject.string(),
    // Cached commands for this step
    commands: external_zod_namespaceObject.array(ai_commands_AICommandSchema).optional(),
});
const PresetActionSchema = external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(StepType.PRESET_ACTION),
    command: PresetCommandSchema,
});
// what is actually saved in the db
const ModuleStepSchema = external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(StepType.MODULE),
    moduleId: external_zod_namespaceObject.string().uuid(),
});
const AllowedModuleStepSchema = external_zod_namespaceObject.union([
    AIActionSchema,
    PresetActionSchema,
]);
// used for viewing and editing a module
const ResolvedModuleStepSchema = external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal("RESOLVED_MODULE"),
    moduleId: external_zod_namespaceObject.string().uuid(),
    name: external_zod_namespaceObject.string(),
    steps: AllowedModuleStepSchema.array(),
});
const StepSchema = external_zod_namespaceObject.union([
    AIActionSchema,
    PresetActionSchema,
    ModuleStepSchema,
]);
// frontend-only, we should probably move this out of 'types' at some point
const ResolvedStepSchema = external_zod_namespaceObject.union([
    AIActionSchema,
    PresetActionSchema,
    ResolvedModuleStepSchema,
]);
const isModule = (step) => {
    return step.type === StepType.MODULE;
};
const isResolvedModule = (step) => {
    return step.type === "RESOLVED_MODULE";
};
const canBeInModule = (step) => {
    return (step.type === StepType.AI_ACTION || step.type === StepType.PRESET_ACTION);
};
const isPresetAction = (step) => {
    return step.type === StepType.PRESET_ACTION;
};
const isCommandAllowedInAIAction = (command) => {
    return AICommandSchema.safeParse(command).success;
};

;// CONCATENATED MODULE: ../../packages/types/src/command-results.ts



var ResultStatus;
(function (ResultStatus) {
    ResultStatus["SUCCESS"] = "SUCCESS";
    ResultStatus["FAILED"] = "FAILED";
    ResultStatus["RUNNING"] = "RUNNING";
    ResultStatus["IDLE"] = "IDLE";
    ResultStatus["CANCELLED"] = "CANCELLED";
})(ResultStatus || (ResultStatus = {}));
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["SUCCESS"] = "SUCCESS";
    CommandStatus["FAILED"] = "FAILED";
})(CommandStatus || (CommandStatus = {}));
const CommandMetadataSchema = external_zod_namespaceObject.object({
    beforeUrl: external_zod_namespaceObject.string(),
    beforeScreenshot: external_zod_namespaceObject.string(),
    afterUrl: external_zod_namespaceObject.string().optional(),
    afterScreenshot: external_zod_namespaceObject.string().optional(),
    startedAt: external_zod_namespaceObject.coerce.date(),
    finishedAt: external_zod_namespaceObject.coerce.date(),
    viewport: external_zod_namespaceObject.object({
        height: external_zod_namespaceObject.number(),
        width: external_zod_namespaceObject.number(),
    }),
    status: external_zod_namespaceObject.nativeEnum(CommandStatus),
    error: external_zod_namespaceObject.string().optional(),
    elementInteracted: external_zod_namespaceObject.string().optional(),
});
const CommandResultSchema = external_zod_namespaceObject.object({
    command: ai_commands_AICommandSchema,
})
    .merge(CommandMetadataSchema);
const StepResultMetadataSchema = external_zod_namespaceObject.object({
    startedAt: external_zod_namespaceObject.coerce.date(),
    finishedAt: external_zod_namespaceObject.coerce.date(),
    status: external_zod_namespaceObject.nativeEnum(ResultStatus),
    error: external_zod_namespaceObject.string().optional(),
    // browser info
    userAgent: external_zod_namespaceObject.string().optional(),
});
const PresetActionResultSchema = PresetActionSchema.merge(StepResultMetadataSchema).merge(external_zod_namespaceObject.object({
    // commandresult is saved by actions like AI assertions that have a "return" value
    // commandmetadata is saved by actions like preset click that doesn't have a return value
    // Array just for consistency with other elements, should only ever be one
    results: external_zod_namespaceObject.union([CommandResultSchema, CommandMetadataSchema]).array(),
}));
const AIActionResultSchema = AIActionSchema.merge(StepResultMetadataSchema).merge(external_zod_namespaceObject.object({
    // commandresult is saved by actions like AI assertions that have a "return" value
    // commandmetadata is saved by actions like preset click that doesn't have a return value
    results: PresetActionResultSchema.array(),
}));
const ModuleResultSchema = ModuleStepSchema.merge(StepResultMetadataSchema).merge(external_zod_namespaceObject.object({
    // nested results
    results: external_zod_namespaceObject.union([AIActionResultSchema, PresetActionResultSchema]).array(),
}));
// this maps to a `Step`
const ResultSchema = external_zod_namespaceObject.discriminatedUnion("type", [
    AIActionResultSchema,
    PresetActionResultSchema,
    ModuleResultSchema,
]);
const isCommandResult = (c) => {
    return CommandResultSchema.safeParse(c).success;
};

;// CONCATENATED MODULE: ../../packages/types/src/execute-results.ts



var ExecuteResultType;
(function (ExecuteResultType) {
    ExecuteResultType["COMMAND"] = "command";
    ExecuteResultType["ASSERTION"] = "assertion";
})(ExecuteResultType || (ExecuteResultType = {}));
// data persisted about the execution of a command in the controller
const ExecuteCommandHistoryEntrySchema = external_zod_namespaceObject.object({
    // type of command executed
    type: external_zod_namespaceObject.nativeEnum(StepType),
    // if AI step type, what command was executed
    generatedStep: ai_commands_AICommandSchema.optional(),
    // human readable descriptor for action taken, including element interacted with
    serializedCommand: external_zod_namespaceObject.string().optional(),
    // human readable descriptor for element interacted with
    elementInteracted: external_zod_namespaceObject.string().optional(),
});
// result schema for assertion evaluations - this is the type returned to the client.
// we reuse the success/failure schemas from regular ai commands.
const execute_results_ExecuteAssertionResultSchema = external_zod_namespaceObject.object({
    type: external_zod_namespaceObject.literal(ExecuteResultType.ASSERTION),
    command: external_zod_namespaceObject.union([SuccessCommandSchema, FailureCommandSchema]),
    relevantElements: external_zod_namespaceObject.array(external_zod_namespaceObject.number()).optional(),
});

;// CONCATENATED MODULE: ../../packages/types/src/goal-splitter.ts

const InstructionsSchema = external_zod_namespaceObject.z.string().array();

;// CONCATENATED MODULE: ../../packages/types/src/locator.ts

const locator_AILocatorSchema = external_zod_namespaceObject.object({
    thoughts: external_zod_namespaceObject.string(),
    // a11y id
    id: external_zod_namespaceObject.number().int(),
    // dropdowns should have options
    options: external_zod_namespaceObject.array(external_zod_namespaceObject.string()).optional(),
});

;// CONCATENATED MODULE: ../../packages/types/src/modules.ts


const ModuleMetadataSchema = external_zod_namespaceObject.z.object({
    id: external_zod_namespaceObject.z.string(),
    createdAt: external_zod_namespaceObject.z.coerce.date(),
    createdBy: external_zod_namespaceObject.z.string(),
    organizationId: external_zod_namespaceObject.z.string().or(external_zod_namespaceObject.z["null"]()),
    name: external_zod_namespaceObject.z.string(),
    schemaVersion: external_zod_namespaceObject.z.string(),
    // this is only used in the client and is not stored in the db
    numSteps: external_zod_namespaceObject.z.number(),
});
const ModuleSchema = external_zod_namespaceObject.z.object({
    steps: AllowedModuleStepSchema.array(),
})
    .merge(ModuleMetadataSchema.omit({ numSteps: true }));

;// CONCATENATED MODULE: ../../packages/types/src/runs.ts


const RunTrigger = {
    WEBHOOK: "WEBHOOK",
    CRON: "CRON",
    MANUAL: "MANUAL",
};
const RunStatusEnum = {
    PENDING: "PENDING",
    RUNNING: "RUNNING",
    PASSED: "PASSED",
    FAILED: "FAILED",
    CANCELLED: "CANCELLED",
};
const DateOrStringSchema = external_zod_namespaceObject.z.string().pipe(external_zod_namespaceObject.z.coerce.date()).or(external_zod_namespaceObject.z.date());
// No value for test steps or results - just metadata.
// This is important bc the endpoints that return this metadata
// do not run step migrations.
const RunMetadataSchema = external_zod_namespaceObject.z.object({
    id: external_zod_namespaceObject.z.string(),
    createdAt: DateOrStringSchema,
    createdBy: external_zod_namespaceObject.z.string(),
    organizationId: external_zod_namespaceObject.z.string().or(external_zod_namespaceObject.z["null"]()),
    scheduledAt: DateOrStringSchema.or(external_zod_namespaceObject.z["null"]()),
    startedAt: DateOrStringSchema.or(external_zod_namespaceObject.z["null"]()),
    finishedAt: DateOrStringSchema.or(external_zod_namespaceObject.z["null"]()),
    testId: external_zod_namespaceObject.z.string().or(external_zod_namespaceObject.z["null"]()),
    status: external_zod_namespaceObject.z.nativeEnum(RunStatusEnum),
    trigger: external_zod_namespaceObject.z.nativeEnum(RunTrigger),
    test: external_zod_namespaceObject.z.object({
        name: external_zod_namespaceObject.z.string(),
        id: external_zod_namespaceObject.z.string(),
    })
        .or(external_zod_namespaceObject.z["null"]()),
});
// Metadata + results + test metadata
// Use this schema to parse the output of fetchRun
const RunWithTestSchema = RunMetadataSchema.merge(external_zod_namespaceObject.z.object({
    results: ResultSchema.array(),
    test: external_zod_namespaceObject.z.object({
        name: external_zod_namespaceObject.z.string(),
        id: external_zod_namespaceObject.z.string(),
        baseUrl: external_zod_namespaceObject.z.string(),
    })
        .or(external_zod_namespaceObject.z["null"]()),
}));

;// CONCATENATED MODULE: ../../packages/types/src/serialization.ts


/**
 * Clamp text so that it has a maximum char length, cutting off with ... at the end if necessary.
 * Do not provide a number lower than 3.
 */
function clampText(text, length) {
    if (text.length < length) {
        return text;
    }
    return text.slice(0, length - 3) + "[...]";
}
const AI_COMMAND_DISPLAY_NAMES = {
    [preset_PresetCommandType.CLICK]: "Click",
    [preset_PresetCommandType.TYPE]: "Type",
    [preset_PresetCommandType.SELECT_OPTION]: "Select",
    [preset_PresetCommandType.PRESS]: "Press",
    [preset_PresetCommandType.NAVIGATE]: "Navigate",
    [preset_PresetCommandType.SCROLL_DOWN]: "Scroll down",
    [preset_PresetCommandType.SCROLL_UP]: "Scroll up",
};
function serializeAICommand(cmd) {
    let humanSummary = "";
    switch (cmd.type) {
        case ControlFlowCommandType.SUCCESS:
            humanSummary = `Step complete: ${cmd.thoughts}`;
            break;
        case ControlFlowCommandType.FAILURE:
            humanSummary = `Step failed: ${cmd.thoughts}`;
            break;
        default:
            return serializePresetCommand(cmd);
    }
    return humanSummary;
}
function serializePresetCommand(command) {
    switch (command.type) {
        case preset_PresetCommandType.NAVIGATE:
            return `Go to URL: ${clampText(command.url, 30)}`;
        case preset_PresetCommandType.GO_BACK:
            return `Go back to the previous page`;
        case preset_PresetCommandType.GO_FORWARD:
            return `Go forward to the next page`;
        case preset_PresetCommandType.SCROLL_DOWN:
            return `Scroll down one page`;
        case preset_PresetCommandType.SCROLL_UP:
            return `Scroll up one page`;
        case preset_PresetCommandType.WAIT:
            return `Wait for ${command.delay} seconds`;
        case preset_PresetCommandType.REFRESH:
            return `Refresh the page`;
        case preset_PresetCommandType.CLICK:
            return `Click on '${command.target.elementDescriptor}'`;
        case preset_PresetCommandType.TYPE:
            let serializedTarget = "";
            if (command.target.a11yData?.serializedForm) {
                serializedTarget = ` in element ${command.target.a11yData.serializedForm}`;
            }
            else if (command.target.elementDescriptor.length > 0) {
                serializedTarget = ` in element ${command.target.elementDescriptor}`;
            }
            return `Type${serializedTarget}: '${command.value}'`;
        case preset_PresetCommandType.PRESS:
            return `Press '${command.value}'`;
        case preset_PresetCommandType.SELECT_OPTION:
            return `Select option '${command.option}' in '${command.target.elementDescriptor}'`;
        case preset_PresetCommandType.AI_ASSERTION:
            return `${command.useVision ? "Visual assertion" : "Assertion"} successful: '${command.assertion}'`;
        default:
            const assertUnreachable = (_x) => {
                throw "If Typescript complains about the line below, you missed a case or break in the switch above";
            };
            return assertUnreachable(command);
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/cron-validator@1.3.1/node_modules/cron-validator/lib/index.js
var lib = __nccwpck_require__(909);
;// CONCATENATED MODULE: ../../packages/types/src/test-settings.ts


const TestAdvancedSettingsSchema = external_zod_namespaceObject.z.object({
    availableAsModule: external_zod_namespaceObject.z.boolean().default(false),
    disableAICaching: external_zod_namespaceObject.z.boolean().default(false),
});
const ScheduleSettingsSchema = external_zod_namespaceObject.z.object({
    cron: external_zod_namespaceObject.z.string()
        .refine((v) => {
        return (0,lib.isValidCron)(v);
    }, { message: "Invalid cron expression." })
        // // default crontab is every day
        .default("0 0 */1 * *"),
    enabled: external_zod_namespaceObject.z.boolean().default(false),
    timeZone: external_zod_namespaceObject.z.string().default("America/Los_Angeles"),
    // this is used for removing repeatable jobs (not set by user)
    jobKey: external_zod_namespaceObject.z.string().optional(),
});
const WebhookSchema = external_zod_namespaceObject.z.object({
    lastStatus: external_zod_namespaceObject.z.number().optional(),
    url: external_zod_namespaceObject.z.string().url(),
});
const WebhookSettingsSchema = external_zod_namespaceObject.z.array(WebhookSchema).default([]);
const TestSettingsSchema = external_zod_namespaceObject.z.object({
    name: external_zod_namespaceObject.z.string().min(1),
    baseUrl: external_zod_namespaceObject.z.string().url(),
    advanced: TestAdvancedSettingsSchema,
});

;// CONCATENATED MODULE: ../../packages/types/src/test.ts



// This is the type shared between FE and BE for a fully resolved, executable test.
// This is not the raw storage format, which is the Test type in the orm package.
// This is the processed format (e.g. step has been processed into ResolvedSteps)
const ResolvedTestSchema = external_zod_namespaceObject.z.object({
    id: external_zod_namespaceObject.z.string(),
    name: external_zod_namespaceObject.z.string(),
    baseUrl: external_zod_namespaceObject.z.string(),
    steps: external_zod_namespaceObject.z.array(ResolvedStepSchema),
    createdAt: external_zod_namespaceObject.z.coerce.date(),
    updatedAt: external_zod_namespaceObject.z.coerce.date(),
    createdBy: external_zod_namespaceObject.z.string(),
    organizationId: external_zod_namespaceObject.z.string().or(external_zod_namespaceObject.z["null"]()),
    schemaVersion: external_zod_namespaceObject.z.string(),
    advanced: TestAdvancedSettingsSchema,
    schedule: ScheduleSettingsSchema,
    webhooks: WebhookSettingsSchema,
});

;// CONCATENATED MODULE: ../../packages/types/src/context.ts


// this is the context that is available to the agent when it is making a decision
const DynamicContextSchema = external_zod_namespaceObject.object({
    // user goal or instruction
    goal: external_zod_namespaceObject.string(),
    // current url of the browser
    url: external_zod_namespaceObject.string(),
    // serialized page state
    browserState: external_zod_namespaceObject.string(),
    // serialized history of previous commands
    history: external_zod_namespaceObject.string(),
    // number of previously executed commands
    numPrevious: external_zod_namespaceObject.number(),
    // last executed command, if any
    lastCommand: ExecuteCommandHistoryEntrySchema.or(external_zod_namespaceObject["null"]()),
});

;// CONCATENATED MODULE: ../../packages/types/src/public-api.ts





const GeneratorOptionsSchema = external_zod_namespaceObject.object({
    disableCache: external_zod_namespaceObject.boolean(),
});
const GetNextCommandBodySchema = DynamicContextSchema.merge(GeneratorOptionsSchema);
const GetNextCommandResponseSchema = (/* unused pure expression or super */ null && (AICommandSchema));
const GetAssertionResultBodySchema = external_zod_namespaceObject.discriminatedUnion("vision", [
    DynamicContextSchema.merge(GeneratorOptionsSchema).merge(external_zod_namespaceObject.object({
        vision: external_zod_namespaceObject.literal(false),
    })),
    DynamicContextSchema.pick({
        goal: true,
        url: true,
    })
        .merge(GeneratorOptionsSchema)
        .merge(external_zod_namespaceObject.object({
        // base64 encoded image
        screenshot: external_zod_namespaceObject.string(),
        vision: external_zod_namespaceObject.literal(true),
    })),
]);
const GetAssertionResponseSchema = (/* unused pure expression or super */ null && (ExecuteAssertionResultSchema));
const LocateBodySchema = DynamicContextSchema.pick({
    browserState: true,
    goal: true,
}).merge(GeneratorOptionsSchema);
const LocateResponseSchema = (/* unused pure expression or super */ null && (AILocatorSchema));
const SplitGoalBodySchema = DynamicContextSchema.pick({
    goal: true,
    url: true,
}).merge(GeneratorOptionsSchema);
const SplitGoalResponseSchema = external_zod_namespaceObject.string().array();

;// CONCATENATED MODULE: ../../packages/types/src/index.ts





















;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/a11y.ts

const bannedProperties = new Set(["focusable"]);
const alwaysInterestingRoles = new Set([
    "textbox",
    "checkbox",
    "button",
    "link",
]);
// do not output IDs in the a11y tree; i.e. prevent llm from clicking these
const rolesToOmitID = new Set(["paragraph", "menuitem", "option"]);
const defaultA11yNodeSerializeParams = {
    indentLevel: 0,
    noID: false,
    noChildren: false,
    noProperties: false,
};
// Serialized format provided to LLM here: packages/web-agent/src/agents/a11y/prompts.ts
class ProcessedA11yNode {
    constructor(params) {
        this.id = params.id;
        this.role = params.role;
        this.name = params.name;
        this.content = params.content;
        this.properties = params.properties;
        this.pathFromRoot = params.pathFromRoot;
        // this.md5Sum = params.md5Sum;
        this.children = params.children;
        this.backendNodeID = params.backendNodeID;
    }
    getLogForm() {
        return JSON.stringify({
            id: this.id,
            name: this.name ?? "",
            role: this.role ?? "",
            backendNodeId: this.backendNodeID,
        });
    }
    /**
     * Returns true if the current node contains interesting properties.
     * Does not go through children.
     */
    isInteresting() {
        if (alwaysInterestingRoles.has(this.role))
            return true;
        // do not prune containers of static text
        if (this.children.some((child) => child.role === "StaticText"))
            return true;
        return !!this.name.trim() || !!this.content;
    }
    serialize(opts = defaultA11yNodeSerializeParams) {
        const { indentLevel, noChildren, noProperties, noID } = Object.assign({}, defaultA11yNodeSerializeParams, opts);
        const indent = " ".repeat(indentLevel);
        if (this.role === "StaticText") {
            return `${indent}${this.name}\n`;
        }
        let s = `${indent}<${this.role}`;
        if (!noID && !rolesToOmitID.has(this.role)) {
            s += ` id="${this.id}"`;
        }
        if (this.name) {
            s += ` name="${this.name}"`;
        }
        if (this.content) {
            s += ` content="${this.content}"`;
        }
        if (Object.keys(this.properties).length > 0 && !noProperties) {
            Object.entries(this.properties).forEach(([k, v]) => {
                if (bannedProperties.has(k)) {
                    return;
                }
                else if (typeof v === "string") {
                    s += ` ${k}="${v}"`;
                }
                else if (typeof v === "boolean") {
                    if (v) {
                        s += ` ${k}`;
                    }
                    else {
                        s += ` ${k}={false}`;
                    }
                }
                else if (typeof v !== "undefined") {
                    s += ` ${k}={${JSON.stringify(v)}}`;
                }
            });
        }
        if (this.children.length === 0 || noChildren) {
            // self-closing tag and return immediately if no children
            s += " />\n";
            return s;
        }
        else {
            s += ">\n";
        }
        for (const child of this.children) {
            s += child.serialize({ indentLevel: indentLevel + 2 });
        }
        s += `${indent}</${this.role}>\n`;
        return s;
    }
}
/**
 * A pruned and enhanced version of the accessibility tree.
 */
class ProcessedA11yTree {
    constructor(
    // root of the tree
    root, 
    // map of node id to node, for easy access without traversing the entire tree
    nodeMap) {
        this.root = root;
        this.nodeMap = nodeMap;
    }
    serialize() {
        if (!this.root) {
            return "";
        }
        return this.root.serialize();
    }
}
/**
 * Returns a string representation of the node identifier, preferring human readable ones.
 * May not be unique in a graph.
 */
function getNodePathIdentifier(node) {
    if (node.name?.value) {
        return `"${node.name.value}"`;
    }
    if (node.role?.value &&
        node.role.value !== "none" &&
        node.role.value !== "generic") {
        return `"${node.role.value}"`;
    }
    return `"${node.nodeId}"`;
}
function processA11yTreeDFS(node, parent, inputNodeMap, outputNodeMap) {
    if (!parent && node.parentId) {
        throw new Error(`Got no parent for accessibility node ${node.nodeId}: ${JSON.stringify(node)}`);
    }
    const processedNode = new ProcessedA11yNode({
        id: node.nodeId,
        role: node.role?.value || "",
        name: node.name?.value || "",
        content: node.value?.value || "",
        properties: {},
        children: [],
        pathFromRoot: (parent ? `${parent.pathFromRoot} ` : "") + getNodePathIdentifier(node),
        backendNodeID: node.backendDOMNodeId,
        // md5Sum: "",
    });
    if (node.value?.value) {
        processedNode.content = `${node.value?.value}`;
    }
    if (node.properties) {
        node.properties.forEach((prop) => {
            processedNode.properties[prop.name] = prop.value.value;
        });
    }
    outputNodeMap.set(processedNode.id, processedNode);
    const children = node.childIds ?? [];
    for (const childId of children) {
        if (!childId) {
            continue;
        }
        const child = inputNodeMap.get(childId);
        if (!child) {
            continue;
        }
        const processedChildren = processA11yTreeDFS(child, processedNode, inputNodeMap, outputNodeMap);
        if (!processedChildren.length) {
            continue;
        }
        processedNode.children = processedNode.children.concat(processedChildren);
    }
    // StaticText should never have useful children
    if (processedNode.role === "StaticText") {
        processedNode.children = [];
    }
    // It seems buttons and links often have useless StaticText children that
    // have the exact same content or are empty. This fn signals to the DFS to ignore those.
    if (processedNode.children.length === 1 &&
        processedNode.children[0].role === "StaticText") {
        const currentName = processedNode.name;
        const childName = processedNode.children[0]?.name;
        if (currentName === childName || !childName) {
            processedNode.children = [];
        }
    }
    // group adjacent StaticText elements into one
    const staticTextGroupedChildren = [];
    for (let i = processedNode.children.length - 1; i >= 0; i--) {
        const node = processedNode.children[i];
        if (node.role !== "StaticText") {
            staticTextGroupedChildren.push(node);
            continue;
        }
        if (i === 0 || processedNode.children[i - 1].role !== "StaticText") {
            // cannot group with existing
            staticTextGroupedChildren.push(node);
            continue;
        }
        // group with existing
        processedNode.children[i - 1].name += ` ${node.name}`;
    }
    processedNode.children = staticTextGroupedChildren.reverse();
    // set parent property on children node - important for multiple attempts at clicking
    for (const child of processedNode.children) {
        child.parent = processedNode;
    }
    // if current node is not important, try to return children only if possible
    // (only not possible if we are the root)
    const interesting = processedNode.isInteresting();
    if (!interesting) {
        if (processedNode.children.length === 0) {
            // delete node entirely
            return [];
        }
        else if (processedNode.children.length === 1) {
            return [processedNode.children[0]];
        }
        else if (node.parentId) {
            return processedNode.children;
        }
    }
    // we are going to return the current node; time to compute md5 hash
    // this is not used right now:
    /**
    const md5 = new Md5();
    ["id", "name", "role", "content"].forEach((s: string) => {
      const attr = s as keyof ProcessedA11yNode;
      if (typeof processedNode[attr] === "string" && processedNode[attr]) {
        md5.appendStr(processedNode[attr] as string);
      }
    });
    processedNode.children.forEach((child) => md5.appendStr(child.md5Sum));
    const md5Sum = md5.end() as string;
    if (!md5Sum) {
      throw new Error(`Got empty md5sum for node ${node.nodeId}`);
    }
    processedNode.md5Sum = md5Sum;
    */
    return [processedNode];
}
function processA11yTree(graph) {
    if (!graph.root) {
        throw new Error("a11y tree has null root");
    }
    // filter out nodes that are no longer rendered on the page
    graph.allNodes = graph.allNodes.filter((node) => {
        if (!node.ignored) {
            return true;
        }
        // CDP types are wrong; notRendered is a possible ignored reason
        return !node.ignoredReasons?.find((reason) => reason.name === "notRendered" &&
            reason.value?.value);
    });
    const nodeMap = new Map();
    for (const node of graph.allNodes) {
        nodeMap.set(node.nodeId, node);
    }
    const outputNodeMap = new Map();
    const processedRoot = processA11yTreeDFS(graph.root, null, nodeMap, outputNodeMap);
    if (processedRoot.length > 1) {
        throw new Error(`Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(processedRoot)}`);
    }
    else if (processedRoot.length === 0) {
        throw new EmptyA11yTreeError();
    }
    return new ProcessedA11yTree(processedRoot[0], outputNodeMap);
}

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/cdp.ts
const GREEN = { r: 147, g: 196, b: 125, a: 0.55 };
// grabbed from the chrome dev tools "protocol monitor"
const NODE_HIGHLIGHT_CONFIG = {
    showInfo: false,
    showRulers: false,
    showStyles: false,
    showAccessibilityInfo: false,
    showExtensionLines: false,
    contrastAlgorithm: "aa",
    contentColor: GREEN,
    paddingColor: GREEN,
    borderColor: GREEN,
    marginColor: GREEN,
    eventTargetColor: GREEN,
    shapeColor: GREEN,
    shapeMarginColor: GREEN,
};
const FOCUS_CONFIG_FUNCTION = (/* unused pure expression or super */ null && (`
function () {
  if (this.focus) {
    this.focus();
  }
  return this.click();
}
`));

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/constants.ts
const RETINA_WINDOW_SCALE_FACTOR = 2;
// max time for page to fire load event on navigation
const MAX_LOAD_TIMEOUT_MS = 8000;
// duration that the network has to remain unchanged before it is considered 'stable'
const NETWORK_STABLE_DURATION_MS = 1250;
// max time to wait for network idle after page load
const NETWORK_IDLE_TIMEOUT_MS = 3000;
// how often to check for async conditions to occur (e.g. network idle)
const CHECK_INTERVAL_MS = 250;
const A11Y_LOAD_TIMEOUT_MS = 1000;
// max time to wait for a11y tree to be stable
const A11Y_STABLE_TIMEOUT_MS = NETWORK_IDLE_TIMEOUT_MS;
// duration that the a11y tree has to remain unchanged before it is considered 'stable'
const A11Y_STABLE_DURATION_MS = NETWORK_STABLE_DURATION_MS;
// max time an action like a click or typing can take
const BROWSER_ACTION_TIMEOUT_MS = 3000;
// max time a complicated action like selecting an option can take
const COMPLICATED_BROWSER_ACTION_TIMEOUT_MS = MAX_LOAD_TIMEOUT_MS;
// duration to highlight an interacted element for
const HIGHLIGHT_DURATION_MS = 3000;
const CHROME_INTERNAL_URLS = new Set([
    "about:blank",
    "chrome-error://chromewebdata/",
]);
// maximum number of times to attempt to perform a synchronous action
// in the browser, like a click
const MAX_BROWSER_ACTION_ATTEMPTS = 2;

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/utils/time.ts
const sleep = (ms = 1000) => {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/utils/scripts/cursor.ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function addCursorScript() {
    cursor = document.createElement("img");
    cursor.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDcpIj48cGF0aCBkPSJtNi4xNDggMTguNDczIDEuODYzLTEuMDAzIDEuNjE1LS44MzktMi41NjgtNC44MTZoNC4zMzJsLTExLjM3OS0xMS40MDh2MTYuMDE1bDMuMzE2LTMuMjIxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im02LjQzMSAxNyAxLjc2NS0uOTQxLTIuNzc1LTUuMjAyaDMuNjA0bC04LjAyNS04LjA0M3YxMS4xODhsMi41My0yLjQ0MnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+");
    cursor.setAttribute("id", "selenium_cursor");
    cursor.setAttribute("style", "position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0");
    cursor.style.filter =
        "invert(0%) sepia(6%) saturate(24%) hue-rotate(315deg) brightness(89%) contrast(110%)";
    document.body.appendChild(cursor);
    document.onmousemove = function (e) {
        e = e || window.event;
        document.getElementById("selenium_cursor").style.left = e.pageX + "px";
        document.getElementById("selenium_cursor").style.top = e.pageY + "px";
    };
}

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/utils/scripts/addIDs.ts
// It is very important the IDs generated are stable and reproducible
// on every page load! This affects caching...a lot!
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function addIDsScript() {
    // Get all HTML elements on the page
    const allElements = document.getElementsByTagName("*");
    let currentID = 1;
    // Loop through all elements and add the property
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        element?.setAttribute("data-momentic-id", currentID);
        currentID++;
    }
}

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/utils/playwright.ts
const sometimesRelevantResourceTypes = new Set([
    "document",
    "script",
    "XMLHttpRequest",
    "fetch",
    "xhr",
]);
const alwaysRelevantResourceTypes = new Set(["script", "document"]);
const bannedDomains = [
    "intercom.io",
    "googletagmanager.com",
    "google-analytics.com",
    "www.gstatic.com",
    "apis.google.com",
    "sentry.io",
    "newrelic.com",
    "p.retool.com",
    "m.stripe.com",
    "m.stripe.network",
    "js.stripe.com",
    "assets.trybento.co",
    "udon.trybento.co",
    "cdn.lr-in-prod.com",
    "r.lr-in-prod.com",
    "content.product-usage.assembledhq.com",
    "data.product-usage.assembledhq.com",
    "static.zdassets.com",
];
function serializeRequest(request) {
    return `${request.resourceType()} ${request.method()} ${request.url()}`;
}
function stripWWWPrefix(url) {
    url = url.replace(/^www\./, "");
    return url;
}
function isRequestRelevantForPageLoad(request, currentURL) {
    if (!sometimesRelevantResourceTypes.has(request.resourceType())) {
        return false;
    }
    const parsedCurrentURL = new URL(currentURL);
    const parsedRequestURL = new URL(request.url());
    if (bannedDomains.some((domain) => parsedRequestURL.hostname.includes(domain))) {
        return false;
    }
    if (alwaysRelevantResourceTypes.has(request.resourceType())) {
        return true;
    }
    if (request.method() !== "GET") {
        // XHR requests that modify things are often relevant
        return true;
    }
    // TODO: configure via settings, either for step or globally as to whether we should only wait for the same hostname
    // allow the request to be to a subdomain (commonly we have api.domain.com or smth like that)
    return stripWWWPrefix(parsedRequestURL.hostname).includes(stripWWWPrefix(parsedCurrentURL.hostname));
}

;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/utils/index.ts





;// CONCATENATED MODULE: ../../packages/web-agent/src/browsers/chrome.ts






/**
 * Headless chrome browser that has some utility methods to extract DOM information
 * and perform commands.
 *
 * TODO: this should ideally be in its own top-level packages folder because it is not
 * necessary coupled together with the agent, which covers LLM interaction.
 */
class ChromeBrowser {
    constructor({ browser, context, page, baseURL, cdpClient, logger, }) {
        // key is nodeId, according to the a11y tree
        this.nodeMap = new Map();
        this.browser = browser;
        this.context = context;
        this.page = page;
        this.baseURL = baseURL;
        this.cdpClient = cdpClient;
        this.logger = logger;
    }
    /**
     * Creates a new browser and waits for navigation to the given test URL.
     */
    static async init(baseURL, logger, onScreenshot, timeout = MAX_LOAD_TIMEOUT_MS) {
        const browser = await external_playwright_namespaceObject.chromium.launch({ headless: true });
        const context = await browser.newContext({
            viewport: {
                width: 1920,
                height: 1080,
            },
            // comment out the below if you are on Mac OS but you're using a monitor
            deviceScaleFactor: process.platform === "darwin"
                ? RETINA_WINDOW_SCALE_FACTOR
                : 1,
            userAgent: external_playwright_namespaceObject.devices["Desktop Chrome"].userAgent,
            geolocation: { latitude: 37.7749, longitude: -122.4194 },
            locale: "en-US",
            timezoneId: "America/Los_Angeles",
        });
        const page = await context.newPage();
        const cdpClient = await context.newCDPSession(page);
        const chrome = new ChromeBrowser({
            browser,
            context,
            page,
            baseURL,
            cdpClient,
            logger,
        });
        let completed = false;
        const navigateAndInitCDP = async () => {
            try {
                await chrome.navigate(baseURL, false);
                await cdpClient.send("Accessibility.enable");
                await cdpClient.send("DOM.enable");
                await cdpClient.send("Overlay.enable");
            }
            catch (err) {
                logger.error({ err }, "Failed to initialize chrome browser");
            }
            finally {
                completed = true;
            }
        };
        void navigateAndInitCDP();
        const sendScreenshot = async () => {
            if (!onScreenshot) {
                return;
            }
            try {
                onScreenshot({
                    viewport: chrome.viewport,
                    buffer: await chrome.screenshot(),
                });
            }
            catch (err) {
                logger.error({ err }, "Failed to take screenshot");
            }
        };
        void sendScreenshot();
        // NOTE: this is a very quick interval because while chome is navigating
        // we want to show updates to the user ASAP
        const screenshotInterval = setInterval(() => {
            void sendScreenshot();
        }, 250);
        const startTime = Date.now();
        while (!completed && Date.now() - startTime < timeout) {
            await sleep(CHECK_INTERVAL_MS);
        }
        clearInterval(screenshotInterval);
        if (!completed) {
            logger.warn("Timeout elapsed waiting for browser to initialize - are you sure this page is accessible?");
        }
        return chrome;
    }
    // Things to do on every page load
    async pageSetup() {
        await this.page.evaluate(addCursorScript);
        await this.page.evaluate(addIDsScript);
    }
    async wait(timeoutMs) {
        await this.page.waitForTimeout(timeoutMs);
    }
    async cleanup() {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }
    get closed() {
        return this.page.isClosed() || !this.browser.isConnected();
    }
    async html() {
        return await this.page.content();
    }
    get url() {
        return this.page.url();
    }
    async screenshot(quality = 100, scale = "device") {
        return await this.page.screenshot({
            fullPage: false,
            quality,
            scale,
            type: "jpeg",
            // allow the blinking text cursor thing to remain there
            caret: "initial",
        });
    }
    get viewport() {
        const viewport = this.page.viewportSize();
        if (!viewport) {
            throw new Error("failed to get viewport");
        }
        return viewport;
    }
    async navigate(url, 
    // FIXME: this is an escape hatch to make sure some pages load (assembledhq.com)
    wrapPossibleNavigation = true) {
        this.logger.debug(`Navigating to ${url}`);
        const startTime = Date.now();
        const doNav = async () => {
            try {
                await this.page.goto(url, {
                    timeout: MAX_LOAD_TIMEOUT_MS,
                });
                this.logger.debug({ url }, `Got load event in ${Math.floor(Date.now() - startTime)}ms`);
            }
            catch (e) {
                this.logger.warn({ url, type: "navigate", err: e }, "Timeout elapsed waiting for page to load, continuing anyways...");
            }
        };
        if (wrapPossibleNavigation) {
            await this.wrapPossibleNavigation(doNav);
        }
        else {
            await doNav();
        }
        if (CHROME_INTERNAL_URLS.has(this.url) &&
            process.env.NODE_ENV === "production") {
            // in dev, this is a little annoying
            throw new Error(`${url} took too long to load 😞. Please ensure the site and your internet are working.`);
        }
        await this.pageSetup();
        this.logger.debug({ url }, "Navigation complete");
    }
    async fill(target, text, options = {}) {
        const element = await this.click(target, {
            doubleClick: false,
            rightClick: false,
        });
        await this.type(text, options);
        return element;
    }
    async type(text, options = {}) {
        const { clearContent = true, pressKeysSequentially = false } = options;
        if (clearContent) {
            await this.page.keyboard.press("Meta+A");
            await this.page.keyboard.press("Backspace");
        }
        if (pressKeysSequentially) {
            await this.page.keyboard.type(text);
        }
        else {
            await this.page.keyboard.insertText(text);
        }
    }
    async clickByA11yID(index, options = {}) {
        const node = this.nodeMap.get(`${index}`);
        if (!node) {
            throw new Error(`Could not find node in DOM with index: ${index}`);
        }
        const nodeClicked = await this.clickUsingCDP(node, options);
        await this.highlightNode(nodeClicked);
        return node.serialize({ noChildren: true, noProperties: true, noID: true });
    }
    async selectOptionByA11yID(index, option) {
        const node = this.nodeMap.get(`${index}`);
        if (!node) {
            throw new Error(`Could not find node in DOM with index: ${index}`);
        }
        if (!node.backendNodeID) {
            throw new Error(`Select target missing backend node id: ${node.getLogForm()}`);
        }
        const locator = await this.getLocatorFromBackendID(node.backendNodeID);
        await locator.selectOption(option, {
            timeout: COMPLICATED_BROWSER_ACTION_TIMEOUT_MS,
        });
        await this.highlightNode(node);
        return node.serialize({ noChildren: true, noProperties: true, noID: true });
    }
    async highlight(target) {
        try {
            await this.highlightByA11yID(target.id);
        }
        catch (err) {
            // should never be fatal
            this.logger.warn({ err, target }, "Failed to highlight target");
        }
    }
    async highlightByA11yID(index) {
        const node = this.nodeMap.get(`${index}`);
        if (!node) {
            throw new Error(`Could not find node in DOM with index: ${index}`);
        }
        if (!node.backendNodeID) {
            throw new Error(`Select target missing backend node id: ${node.getLogForm()}`);
        }
        await this.highlightNode(node);
    }
    async highlightNode(node) {
        try {
            await this.cdpClient.send("Overlay.highlightNode", {
                highlightConfig: NODE_HIGHLIGHT_CONFIG,
                backendNodeId: node.backendNodeID,
            });
        }
        catch (err) {
            this.logger.warn({ err }, "Failed to add node highlight");
        }
        const hideHighlight = async () => {
            try {
                await this.cdpClient.send("Overlay.hideHighlight", {
                    backendNodeId: node.backendNodeID,
                });
            }
            catch (err) {
                // this is okay, purely visual and often occurs due to navigation
                this.logger.debug({ err }, "Failed to remove node highlight");
            }
        };
        setTimeout(() => {
            void hideHighlight();
        }, HIGHLIGHT_DURATION_MS);
    }
    async wrapPossibleNavigation(fn, timeoutMS = MAX_LOAD_TIMEOUT_MS) {
        const startTime = Date.now();
        const startURL = this.url;
        let lastRequestReceived = Date.now();
        const firedRequests = new Map();
        const finishedRequests = new Map();
        const requestFinishedListener = (request) => {
            const key = serializeRequest(request);
            finishedRequests.set(key, (finishedRequests.get(key) ?? 0) + 1);
        };
        const requestFiredListener = (request) => {
            if (!isRequestRelevantForPageLoad(request, this.url)) {
                this.logger.debug({
                    uri: serializeRequest(request),
                }, "Ignoring request for page load network stability");
                return;
            }
            const key = serializeRequest(request);
            this.logger.debug({
                uri: key,
            }, "Request fired on page load, delaying network stability");
            firedRequests.set(key, (firedRequests.get(key) ?? 0) + 1);
            lastRequestReceived = Date.now();
        };
        this.page.on("requestfinished", requestFinishedListener);
        this.page.on("request", requestFiredListener);
        // fire actual function asynchronously
        // instead of throwing the error, we return it so we can handle it later
        let rejected = false;
        const retPromise = fn().catch((e) => {
            rejected = true;
            if (e instanceof Error)
                return e;
            // we are returning NOT throwing on purpose
            return new Error(`${e}`);
        });
        await sleep(CHECK_INTERVAL_MS);
        const unwrapAndThrowError = async (p) => {
            const v = await p;
            if (v instanceof Error) {
                throw v;
            }
            return v;
        };
        // wait for network idle
        let unfinishedRequests = new Set();
        const waitForNetworkIdle = async () => {
            while (!rejected && Date.now() - startTime < timeoutMS) {
                unfinishedRequests = new Set();
                await sleep(CHECK_INTERVAL_MS);
                if (Date.now() - lastRequestReceived <=
                    NETWORK_STABLE_DURATION_MS) {
                    continue;
                }
                let anyDifference = false;
                for (const key of firedRequests.keys()) {
                    if (firedRequests.get(key) !== finishedRequests.get(key)) {
                        this.logger.debug({ uri: key }, "Waiting on request to finish");
                        anyDifference = true;
                        unfinishedRequests.add(key);
                    }
                }
                if (!anyDifference) {
                    this.logger.debug({
                        url: this.url,
                        requests: JSON.stringify(Array.from(firedRequests.entries())),
                    }, `Network idle in ${Math.floor(Date.now() - startTime)}ms`);
                    return true;
                }
            }
            if (!rejected) {
                this.logger.warn({
                    url: this.url,
                    requests: JSON.stringify(Array.from(unfinishedRequests.entries())),
                }, "Timeout elapsed waiting for network idle, continuing anyways...");
            }
            return false;
        };
        const waitResult = await waitForNetworkIdle();
        this.page.off("requestfinished", requestFinishedListener);
        this.page.off("request", requestFiredListener);
        if (!waitResult) {
            return unwrapAndThrowError(retPromise);
        }
        if (!rejected && urlChanged(this.url, startURL)) {
            this.logger.debug(`Detected url change in wrapPossibleNavigation, waiting for load state`);
            try {
                await this.page.waitForLoadState("load", {
                    timeout: timeoutMS - (Date.now() - startTime),
                });
            }
            catch (e) {
                this.logger.warn({ url: this.url }, "Timeout elapsed waiting for load state to fire, continuing anyways...");
            }
        }
        return unwrapAndThrowError(retPromise);
    }
    async click(target, options = {}) {
        const elementInteracted = await this.wrapPossibleNavigation(() => this.clickByA11yID(target.id, options));
        return elementInteracted;
    }
    async selectOption(target, option) {
        return this.selectOptionByA11yID(target.id, option);
    }
    async press(key) {
        await this.wrapPossibleNavigation(() => this.page.keyboard.press(key));
    }
    async refresh() {
        await this.page.reload();
        await this.pageSetup();
    }
    async getA11yTree() {
        let processedTree = null;
        let attempt = 0;
        const url = this.url;
        while (!processedTree) {
            try {
                this.logger.debug(`Getting a11y tree at ${url}`);
                const graph = await this.getRawA11yTree();
                if (!graph.root || graph.allNodes.length === 0) {
                    // throw specific error class
                    throw new Error("No a11y tree found on page");
                }
                processedTree = processA11yTree(graph);
            }
            catch (e) {
                this.logger.error({ err: e, url }, "Error fetching a11y tree");
                if (attempt === 0) {
                    await sleep(1000);
                    attempt++;
                }
                else {
                    throw new Error(`Max retries exceeded fetching a11y tree: ${e}`);
                }
            }
        }
        if (!processedTree.root) {
            // could be valid!
            this.logger.warn("A11y tree was pruned entirely");
        }
        this.nodeMap = processedTree.nodeMap;
        return processedTree;
    }
    async getRawA11yTree() {
        const url = this.page.url();
        let lastTreeUpdateTimestamp = Date.now();
        const treeUpdateListener = () => {
            lastTreeUpdateTimestamp = Date.now();
        };
        this.cdpClient.addListener("Accessibility.nodesUpdated", treeUpdateListener);
        let accessibilityTreeLoadFired = false;
        const accessibilityLoadListener = () => {
            this.logger.info({ url }, `A11y tree load event fired`);
            accessibilityTreeLoadFired = true;
        };
        this.cdpClient.addListener("Accessibility.loadComplete", accessibilityLoadListener);
        // make sure the a11y tree hasn't updated in the last 1 second
        // and the a11y event has fired
        const a11yLoadStart = Date.now();
        let timeoutTriggered = true;
        while (Date.now() - a11yLoadStart < A11Y_STABLE_TIMEOUT_MS) {
            await sleep(CHECK_INTERVAL_MS);
            if (!accessibilityTreeLoadFired &&
                Date.now() - a11yLoadStart < A11Y_LOAD_TIMEOUT_MS) {
                // some websites never fire the a11y load event
                // thus, we only allocate 1 second for catching this event
                this.logger.debug({ url }, `A11y tree not loaded yet, waiting...`);
                continue;
            }
            if (Date.now() - lastTreeUpdateTimestamp >=
                A11Y_STABLE_DURATION_MS) {
                this.logger.debug({ url }, `A11y tree not stable yet, waiting...`);
                continue;
            }
            timeoutTriggered = false;
            break;
        }
        this.logger.debug({
            duration: Date.now() - a11yLoadStart,
            eventReceived: accessibilityTreeLoadFired,
            timeoutTriggered,
        }, "A11y wait phase completed");
        const { node: root } = await this.cdpClient.send("Accessibility.getRootAXNode");
        const { nodes } = await this.cdpClient.send("Accessibility.queryAXTree", {
            backendNodeId: root.backendDOMNodeId,
        });
        this.cdpClient.removeListener("Accessibility.loadComplete", accessibilityLoadListener);
        this.cdpClient.removeListener("Accessibility.nodesUpdated", treeUpdateListener);
        return {
            root,
            allNodes: nodes,
        };
    }
    async clickUsingVisualCoordinates(backendNodeId) {
        const location = await this.getElementLocation(backendNodeId);
        if (!location) {
            throw new Error(`Could not find element location with backend node id: ${backendNodeId}`);
        }
        this.logger.debug({ location }, "Executing mouse click");
        await this.page.mouse.click(location.centerX, location.centerY);
    }
    // Get the "id" attribute value from an HTML element.
    async getIDAttributeUsingCDP(objectId) {
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1374241
        await this.cdpClient.send("DOM.getDocument", { depth: 0 });
        const cdpNodeResult = await this.cdpClient.send("DOM.requestNode", {
            objectId,
        });
        const attrResult = await this.cdpClient.send("DOM.getAttributes", {
            nodeId: cdpNodeResult.nodeId,
        });
        const attributes = attrResult.attributes;
        const indexAttr = attributes.findIndex((s) => s === "data-momentic-id");
        if (indexAttr === -1) {
            return "";
        }
        return attributes[indexAttr + 1] || "";
    }
    async getLocatorFromBackendID(backendNodeId) {
        await this.page.evaluate(addIDsScript);
        // get a remote javascript object from the a11y backend node ID
        const cdpResolveResult = await this.cdpClient.send("DOM.resolveNode", {
            backendNodeId,
        });
        if (!cdpResolveResult || !cdpResolveResult.object.objectId) {
            throw new Error(`Could not resolve backend node ${backendNodeId}`);
        }
        try {
            const id = await this.getIDAttributeUsingCDP(cdpResolveResult.object.objectId);
            if (!id) {
                throw new Error("Failed getting data-momentic-id attribute using CDP");
            }
            return this.page.locator(`[data-momentic-id="${id}"]`);
        }
        catch (err) {
            this.logger.error({
                err,
            }, "Failed to get ID attribute");
            throw err;
        }
    }
    async clickUsingCDP(originalNode, options = {}) {
        let clickAttempts = 0;
        let candidateNode = originalNode;
        while (clickAttempts < MAX_BROWSER_ACTION_ATTEMPTS) {
            // Did we reach the root?
            if (!candidateNode || candidateNode.role === "RootWebArea") {
                throw new Error(`Attempted to click node with no clickable surrounding elements: ${originalNode.getLogForm()}`);
            }
            // Check disqualifying conditions for clicks - these don't count as "attempts"
            if (candidateNode.role === "StaticText") {
                // static text corresponds to html text nodes that are not clickable
                candidateNode = candidateNode.parent;
                continue;
            }
            const candidateNodeID = candidateNode.backendNodeID;
            if (!candidateNodeID) {
                this.logger.warn({ node: candidateNode.getLogForm() }, "Click candidate had no backend node ID");
                candidateNode = candidateNode.parent;
                continue;
            }
            // Attempt to click
            try {
                const locator = await this.getLocatorFromBackendID(candidateNodeID);
                // this timeout is important because playwright checks for clickability/visibility
                // before clicking, and a timeout indicates obstruction, or disabled state
                // see: https://playwright.dev/docs/actionability#introduction
                if (options.doubleClick) {
                    await locator.dblclick({
                        timeout: BROWSER_ACTION_TIMEOUT_MS,
                    });
                }
                else {
                    await locator.click({
                        timeout: BROWSER_ACTION_TIMEOUT_MS,
                        button: options.rightClick ? "right" : "left",
                    });
                }
                if (candidateNode.id !== originalNode.id) {
                    this.logger.info({
                        oldNode: originalNode.getLogForm(),
                        newNode: candidateNode.getLogForm(),
                    }, `Redirected click successfully to new element`);
                }
                return candidateNode;
            }
            catch (err) {
                this.logger.error({ err, node: candidateNode.getLogForm() }, "Failed click or click timed out");
                clickAttempts++;
                // try to click the parent instead
                // we could re-prompt the LLM in the future
                candidateNode = candidateNode.parent;
            }
        }
        throw new Error(`Max click redirection attempts exhausted on original element: ${originalNode.getLogForm()}`);
    }
    /**
     * Currently unused, but could be useful for vision model integration.
     * Gets x/y position of an a11y node.
     */
    async getElementLocation(backendNodeId) {
        const tree = await this.cdpClient.send("DOMSnapshot.captureSnapshot", {
            computedStyles: [],
            includeDOMRects: true,
            includePaintOrder: true,
        });
        let devicePixelRatio = await this.page.evaluate(() => window.devicePixelRatio);
        // it lies on macos lolol
        // this apparently isn't working when the browser is dragged onto a monitor either
        if (process.platform === "darwin" && devicePixelRatio === 1) {
            // UNCOMMENT THE BELOW IF YOU ARE ON MAC OS AND NOT USING A MONITOR
            // COMMENT THE BELOW OUT IF YOU ARE USING A MONITOR OR NOT ON MAC OS
            devicePixelRatio = RETINA_WINDOW_SCALE_FACTOR;
        }
        const document = tree["documents"][0];
        const layout = document["layout"];
        const nodes = document["nodes"];
        const nodeNames = nodes["nodeName"] || [];
        const backendNodeIds = nodes["backendNodeId"] || [];
        const layoutNodeIndex = layout["nodeIndex"];
        const bounds = layout["bounds"];
        let cursor = -1;
        for (let i = 0; i < nodeNames.length; i++) {
            if (backendNodeIds[i] === backendNodeId) {
                cursor = layoutNodeIndex.indexOf(i);
                break;
            }
        }
        if (cursor === -1) {
            throw new Error(`Could not find any backend node with ID ${backendNodeId}`);
        }
        let [x = 0, y = 0, width = 0, height = 0] = bounds[cursor];
        x /= devicePixelRatio;
        y /= devicePixelRatio;
        width /= devicePixelRatio;
        height /= devicePixelRatio;
        const centerX = x + width / 2;
        const centerY = y + height / 2;
        return { centerX, centerY };
    }
    async scrollUp() {
        // TODO: this works pretty well for full page scroll, in the future we'd need to figure out how to scroll nested containers
        await this.page.evaluate(() => {
            (document.scrollingElement || document.body).scrollTop =
                (document.scrollingElement || document.body).scrollTop -
                    window.innerHeight;
        });
        await this.page.evaluate(() => {
            (document.scrollingElement || document.body).scrollTop =
                (document.scrollingElement || document.body).scrollTop +
                    window.innerHeight;
        });
    }
    async scrollDown() {
        await this.page.evaluate(() => {
            (document.scrollingElement || document.body).scrollTop =
                (document.scrollingElement || document.body).scrollTop +
                    window.innerHeight;
        });
    }
    async goForward() {
        await this.wrapPossibleNavigation(() => this.page.goForward({ timeout: MAX_LOAD_TIMEOUT_MS }));
        await this.pageSetup();
    }
    async goBack() {
        await this.wrapPossibleNavigation(() => this.page.goBack({ timeout: MAX_LOAD_TIMEOUT_MS }));
        await this.pageSetup();
    }
}
ChromeBrowser.USER_AGENT = external_playwright_namespaceObject.devices["Desktop Chrome"].userAgent;


;// CONCATENATED MODULE: external "diff-lines"
var external_diff_lines_x = y => { var x = {}; __nccwpck_require__.d(x, y); return x; }
var external_diff_lines_y = x => () => x
const external_diff_lines_namespaceObject = external_diff_lines_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_diff_lines_24b6f423__["default"] });
;// CONCATENATED MODULE: ../../packages/web-agent/src/controller.ts

// @ts-expect-error: no types from this library



const MAX_HISTORY_CHAR_LENGTH = 10000;
class AgentController {
    constructor({ browser, config, generator, logger }) {
        this.browser = browser;
        this.generator = generator;
        this.config = config;
        this.logger = logger;
        this.pendingInstructions = [];
        this.commandHistory = [];
    }
    /**
     * Get copy of executed commands in human readable form. Most recent is last.
     * Only commands that have completed execution are returned.
     */
    get history() {
        return this.commandHistory.filter((cmd) => cmd.state === "DONE");
    }
    get lastExecutedCommand() {
        const history = this.history;
        if (history.length === 0)
            return null;
        const lastEntry = history[history.length - 1];
        return lastEntry;
    }
    /**
     * Reset the command history provided to agents.
     * Should be called due to a logical break between commands
     * such as a SUCCESS being issued.
     */
    resetHistory() {
        this.commandHistory = [];
        this.pendingInstructions = [];
    }
    /**
     * Reset controller and browser state.
     */
    async resetState() {
        this.resetHistory();
        await this.browser.navigate(this.browser.baseURL);
    }
    /**
     * Get the browser state as a string
     */
    async getBrowserState() {
        const a11yTree = await this.browser.getA11yTree();
        return a11yTree.serialize();
    }
    getSerializedHistory(url, currentBrowserState) {
        let history;
        if (this.config.useHistory === "diff") {
            history = this.getDiffHistory(url, currentBrowserState);
        }
        else {
            history = this.getListHistory();
        }
        return history;
    }
    async splitUserGoal(type, goal, disableCache) {
        if (type === StepType.AI_ACTION &&
            goal.match(/[,!;.]|(?:and)|(?:then)/) &&
            this.config.useGoalSplitter) {
            const granularInstructions = await this.generator.getGranularGoals({ goal, url: this.browser.url }, disableCache);
            // convert into a stack (last element is first to be executed)
            this.pendingInstructions = granularInstructions.reverse();
        }
        else {
            this.pendingInstructions = [goal];
        }
    }
    /**
     * Given previously executed commands, generate command for the current prompt.
     * Should only be used for AI action.
     */
    async promptToCommand(type, goal, disableCache) {
        // are we out of granular instructions to execute?
        if (this.pendingInstructions.length === 0) {
            // stores granular instructions in this.pendingInstructions, which functions like a stack
            await this.splitUserGoal(type, goal, disableCache);
        }
        const currInstruction = this.pendingInstructions[this.pendingInstructions.length - 1];
        this.logger.info({ goal: currInstruction }, "Starting prompt translation");
        const getBrowserStateStart = Date.now();
        const url = this.browser.url;
        const browserState = await this.getBrowserState();
        this.logger.info({
            duration: Date.now() - getBrowserStateStart,
            url,
        }, "Got browser state");
        const numPrevious = this.commandHistory.length;
        this.commandHistory.push({
            state: "PENDING",
            browserStateBeforeCommand: browserState,
            urlBeforeCommand: url,
            type,
        });
        const history = this.getSerializedHistory(url, browserState);
        const getCommandProposalStart = Date.now();
        const proposedCommand = await this.generator.getProposedCommand({
            url,
            numPrevious,
            browserState,
            history,
            goal: currInstruction,
            lastCommand: this.lastExecutedCommand,
        }, disableCache);
        this.logger.info({ duration: Date.now() - getCommandProposalStart }, "Got proposed command");
        if (proposedCommand.type === ControlFlowCommandType.SUCCESS) {
            const finishedInstruction = this.pendingInstructions.pop();
            this.logger.info({
                finishedInstruction,
                remainingInstructions: this.pendingInstructions,
            }, "Removing pending instruction due to SUCCESS");
            // promptToCommand will pick the next instruction to execute off the stack
            if (this.pendingInstructions.length !== 0) {
                // remove the last command from the history since it was an intermediate command from goalSplitter
                this.commandHistory.pop();
                return this.promptToCommand(type, "", disableCache);
            }
        }
        else if (
        // on failure, we don't continue to execute
        proposedCommand.type === ControlFlowCommandType.FAILURE) {
            this.logger.info({
                remainingInstructions: this.pendingInstructions,
            }, "Removing pending instructions due to FAILURE");
            this.pendingInstructions = [];
        }
        return proposedCommand;
    }
    async locateElement(description, disableCache) {
        const locator = await this.generator.getElementLocation({ browserState: await this.getBrowserState(), goal: description }, disableCache);
        if (locator.id < 0) {
            throw new Error(`Unable to locate element with description: ${description}`);
        }
        return locator;
    }
    /**
     * Construct a detailed history that can be passed to the LLM.
     * History includes commands executed as well as browser state changes that occurred
     * at each step.
     */
    getDiffHistory(currentURL, currentPageState) {
        // only include ai actions in the history
        const doneCommands = this.history.filter((h) => h.type === StepType.AI_ACTION);
        if (doneCommands.length === 0)
            return "<NONE/>";
        const historyLines = [
            "\nYou have already executed the following commands successfully (most recent listed first)",
            "-".repeat(10),
        ];
        doneCommands.reverse().forEach((log, i) => {
            historyLines.push(`COMMAND ${doneCommands.length - i}${i === 0 ? " (command just executed)" : ""}: ${log.serializedCommand}`);
            if (i === 0) {
                // generate page diff, if there was one
                if (urlChanged(log.urlBeforeCommand, currentURL)) {
                    historyLines.push(`  URL CHANGE: '${log.urlBeforeCommand}' -> '${currentURL}'`);
                }
                else {
                    const browserStateDiff = (0,external_diff_lines_namespaceObject["default"])(log.browserStateBeforeCommand, currentPageState, {
                        n_surrounding: 1,
                    });
                    if (!browserStateDiff) {
                        historyLines.push("PAGE CONTENT CHANGE: <NONE/>");
                    }
                    else if (browserStateDiff.length < MAX_HISTORY_CHAR_LENGTH) {
                        historyLines.push("PAGE CONTENT CHANGE:");
                        browserStateDiff
                            .split("\n")
                            .forEach((l) => historyLines.push(`  ${l}`));
                    }
                    else {
                        historyLines.push("PAGE CONTENT CHANGE: <TOO_LONG_TO_DISPLAY/>");
                    }
                }
            }
            historyLines.push("-".repeat(10));
        });
        historyLines.push(`STARTING URL: ${this.browser.baseURL}`);
        return historyLines.join("\n");
    }
    getListHistory() {
        return external_dedent_namespaceObject["default"] `Here are the commands that you have successfully executed:
    ${this.commandHistory
            .filter((cmd) => cmd.type === StepType.AI_ACTION)
            .map((cmd) => `- ${cmd.serializedCommand}`)
            .join("\n")}`;
    }
    /**
     * Given a command, interact with the chromium browser to actually execute the actions
     * @param [stateless=false] Execute this command in a stateless fashion, without modifying any controller state such as
     * pending instructions. Useful when executing cached instructions.
     */
    async executeCommand(command, disableCache, stateless = false) {
        const pendingHistory = this.commandHistory[this.commandHistory.length - 1];
        if (!stateless) {
            // if we're not using cached commands, we must be executing a pending command
            // generated by promptToCommand
            if (!pendingHistory || pendingHistory.state !== "PENDING") {
                throw new Error("Executing command but there is no pending entry in the history");
            }
        }
        else {
            // cached commands can rely on things like a11y IDs - we need to populate this state in the chrome browser.
            // currently, all necessary side effects are accomplished by getting the a11y tree
            await this.browser.getA11yTree();
        }
        let result;
        try {
            const executionStart = Date.now();
            result = await this.sendCommandToBrowser(command, disableCache);
            this.logger.info({ result, duration: Date.now() - executionStart }, "Got execution result");
        }
        catch (e) {
            if (e instanceof Error) {
                throw new BrowserExecutionError(`Failed to execute command: ${e}`, {
                    cause: e,
                });
            }
            throw new BrowserExecutionError(`Unexpected throw from executing command`, {
                cause: new Error(`${e}`),
            });
        }
        if (result.succeedImmediately && !stateless) {
            // pop the last command off the stack since we won't get a real SUCCESS command within promptToCommand
            this.pendingInstructions.pop();
            if (this.pendingInstructions.length > 0) {
                // we still have pending instructions queued up
                // override the immediate success
                result.succeedImmediately = false;
            }
        }
        // TODO(ENG-139): Save other a11y stuff as well.
        // Update the command with the targeted element
        // if this is the first time the command was generated
        if (result.elementInteracted &&
            "target" in command &&
            !command.target.elementDescriptor) {
            // Save the serialized element interacted as the "descriptor" for now
            // In the future, we can ask the LLM for a more human-readable descriptor
            command.target.elementDescriptor = result.elementInteracted;
        }
        if (!stateless) {
            // the conditional at the beginning of this function validates that pendingHistory isn't undefined
            // if stateless is false
            pendingHistory.generatedStep = command;
            pendingHistory.serializedCommand = serializeAICommand(command);
            pendingHistory.state = "DONE";
        }
        return result;
    }
    /**
     * Executes a preset command.
     * For most cases, the execution result contains metadata about the command executed.
     * For assertions, an AssertionResult with thoughts is returned.
     */
    async executePresetStep(command, disableCache) {
        const urlBeforeCommand = this.browser.url;
        switch (command.type) {
            case preset_PresetCommandType.AI_ASSERTION: {
                let params;
                if (command.useVision) {
                    params = {
                        goal: command.assertion,
                        url: urlBeforeCommand,
                        // used for vision only
                        screenshot: await this.browser.screenshot(),
                        // unused for visual assertion
                        browserState: "",
                        history: "",
                        numPrevious: -1,
                        lastCommand: null,
                    };
                }
                else {
                    const browserState = await this.getBrowserState();
                    const history = this.getSerializedHistory(urlBeforeCommand, browserState);
                    params = {
                        goal: command.assertion,
                        url: urlBeforeCommand,
                        // used for text only
                        browserState,
                        history,
                        lastCommand: this.lastExecutedCommand,
                        numPrevious: this.commandHistory.length,
                    };
                }
                const result = await this.generator.getAssertionResult(params, command.useVision, command.disableCache);
                if (result.relevantElements) {
                    // highlight relevant elements
                    void Promise.all(result.relevantElements.map((id) => this.browser.highlight({ id })));
                }
                return result;
            }
            case preset_PresetCommandType.NAVIGATE:
                await this.browser.navigate(command.url);
                break;
            case preset_PresetCommandType.GO_BACK:
                await this.browser.goBack();
                break;
            case preset_PresetCommandType.GO_FORWARD:
                await this.browser.goForward();
                break;
            case preset_PresetCommandType.SCROLL_DOWN:
                await this.browser.scrollDown();
                break;
            case preset_PresetCommandType.SCROLL_UP:
                await this.browser.scrollUp();
                break;
            case preset_PresetCommandType.WAIT:
                await this.browser.wait(command.delay * 1000);
                break;
            case preset_PresetCommandType.REFRESH:
                await this.browser.refresh();
                break;
            case preset_PresetCommandType.CLICK: {
                let id;
                if (command.target.a11yData) {
                    id = command.target.a11yData?.id;
                }
                else {
                    const locator = await this.locateElement(command.target.elementDescriptor, disableCache);
                    id = locator.id;
                }
                const elementInteracted = await this.browser.click({
                    id,
                }, {
                    doubleClick: command.doubleClick,
                    rightClick: command.rightClick,
                });
                const result = {
                    type: ExecuteResultType.COMMAND,
                    urlAfterCommand: this.browser.url,
                    succeedImmediately: false,
                    elementInteracted,
                };
                if (urlChanged(urlBeforeCommand, result.urlAfterCommand)) {
                    result.succeedImmediately = true;
                    result.succeedImmediatelyReason = "URL changed";
                }
                return result;
            }
            case preset_PresetCommandType.SELECT_OPTION: {
                let id;
                if (command.target.a11yData) {
                    id = command.target.a11yData?.id;
                }
                else {
                    const locator = await this.locateElement(command.target.elementDescriptor, disableCache);
                    id = locator.id;
                }
                const elementInteracted = await this.browser.selectOption({
                    id,
                }, command.option);
                return {
                    type: ExecuteResultType.COMMAND,
                    succeedImmediately: false,
                    urlAfterCommand: this.browser.url,
                    elementInteracted,
                };
            }
            case preset_PresetCommandType.TYPE: {
                let elementInteracted;
                const target = command.target;
                if (target.a11yData) {
                    elementInteracted = await this.browser.click({
                        id: target.a11yData.id,
                    });
                }
                else if (target.elementDescriptor.length > 0) {
                    const locator = await this.locateElement(command.target.elementDescriptor, disableCache);
                    elementInteracted = await this.browser.click({
                        id: locator.id,
                    });
                }
                await this.browser.type(command.value, {
                    clearContent: command.clearContent,
                    pressKeysSequentially: command.pressKeysSequentially,
                });
                if (command.pressEnter) {
                    await this.browser.press("Enter");
                }
                const result = {
                    type: ExecuteResultType.COMMAND,
                    urlAfterCommand: this.browser.url,
                    succeedImmediately: false,
                    elementInteracted,
                };
                if (urlChanged(urlBeforeCommand, result.urlAfterCommand)) {
                    result.succeedImmediately = true;
                    result.succeedImmediatelyReason = "URL changed";
                }
                return result;
            }
            case preset_PresetCommandType.PRESS:
                await this.browser.press(command.value);
                const result = {
                    type: ExecuteResultType.COMMAND,
                    urlAfterCommand: this.browser.url,
                    succeedImmediately: false,
                };
                if (urlChanged(urlBeforeCommand, result.urlAfterCommand)) {
                    result.succeedImmediately = true;
                    result.succeedImmediatelyReason = "URL changed";
                }
                return result;
            default:
                const assertUnreachable = (_x) => {
                    throw "If Typescript complains about the line below, you missed a case or break in the switch above";
                };
                return assertUnreachable(command);
        }
        return {
            type: ExecuteResultType.COMMAND,
            succeedImmediately: false,
            urlAfterCommand: this.browser.url,
        };
    }
    async sendCommandToBrowser(command, disableCache) {
        switch (command.type) {
            /**
             * Control flow
             */
            case ControlFlowCommandType.SUCCESS:
            case ControlFlowCommandType.FAILURE:
                return {
                    type: ExecuteResultType.COMMAND,
                    succeedImmediately: false,
                    urlAfterCommand: this.browser.url,
                };
            /**
             * Preset action
             */
            default:
                const result = await this.executePresetStep(command, disableCache);
                if (result.type !== "command") {
                    // AI should never generate 'assertion' results
                    throw new Error(`Unexpected preset result type ${result.type} from executing AI action`);
                }
                return result;
        }
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/fetch-retry@5.0.6/node_modules/fetch-retry/index.js
var fetch_retry = __nccwpck_require__(62);
var fetch_retry_default = /*#__PURE__*/__nccwpck_require__.n(fetch_retry);
;// CONCATENATED MODULE: ../../packages/web-agent/src/generators/api-generator.ts



const fetch = fetch_retry_default()(global.fetch);
const API_VERSION = "v1";
class APIGenerator {
    constructor(params) {
        this.baseURL = params.baseURL;
        this.apiKey = params.apiKey;
    }
    async getElementLocation(context, disableCache) {
        const result = await this.sendRequest(`/${API_VERSION}/web-agent/locate-element`, {
            browserState: context.browserState,
            goal: context.goal,
            disableCache,
        });
        return locator_AILocatorSchema.parse(result);
    }
    async getAssertionResult(context, useVision, disableCache) {
        if (useVision) {
            const result = await this.sendRequest(`/${API_VERSION}/web-agent/assertion`, {
                url: context.url,
                goal: context.goal,
                screenshot: context.screenshot?.toString("base64"),
                disableCache,
                vision: true,
            });
            return execute_results_ExecuteAssertionResultSchema.parse(result);
        }
        const result = await this.sendRequest(`/${API_VERSION}/web-agent/assertion`, {
            url: context.url,
            browserState: context.browserState,
            goal: context.goal,
            history: context.history,
            numPrevious: context.numPrevious,
            lastCommand: context.lastCommand,
            disableCache,
            vision: false,
        });
        return execute_results_ExecuteAssertionResultSchema.parse(result);
    }
    async getProposedCommand(context, disableCache) {
        const result = await this.sendRequest(`/${API_VERSION}/web-agent/next-command`, {
            url: context.url,
            browserState: context.browserState,
            goal: context.goal,
            history: context.history,
            numPrevious: context.numPrevious,
            lastCommand: context.lastCommand,
            disableCache,
        });
        return ai_commands_AICommandSchema.parse(result);
    }
    async getGranularGoals(context, disableCache) {
        const result = await this.sendRequest(`/${API_VERSION}/web-agent/split-goal`, {
            url: context.url,
            goal: context.goal,
            disableCache,
        });
        return external_zod_namespaceObject.string().array().parse(result);
    }
    async sendRequest(path, body) {
        const response = await fetch(`${this.baseURL}${path}`, {
            retries: 3,
            retryDelay: 1000,
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Request to ${path} failed with status ${response.status}: ${await response.text()}`);
        }
        return response.json();
    }
}

;// CONCATENATED MODULE: ./src/index.ts
// NOTE: these paths are using the direct paths to these files to support treeshaking so we don't bundle unnecessary code





})();

var __webpack_exports__APIGenerator = __webpack_exports__._w;
var __webpack_exports__AgentController = __webpack_exports__.Yt;
var __webpack_exports__ChromeBrowser = __webpack_exports__.DE;
export { __webpack_exports__APIGenerator as APIGenerator, __webpack_exports__AgentController as AgentController, __webpack_exports__ChromeBrowser as ChromeBrowser };
