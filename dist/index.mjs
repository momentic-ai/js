var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../packages/web-agent/src/browsers/chrome.ts
import {
  chromium,
  devices
} from "playwright";

// ../../packages/web-agent/src/utils/url.ts
var urlChanged = (url1, url2) => {
  const { hostname, pathname } = new URL(url1);
  const { hostname: hostname2, pathname: pathname2 } = new URL(url2);
  return hostname !== hostname2 || pathname !== pathname2;
};

// ../../packages/types/src/a11y-targets.ts
import * as z from "zod";
var A11yTargetWithCacheSchema = z.object({
  // a11y ID
  id: z.number().int(),
  // additional metadata stored after the action is executed
  // to assist in re-execution
  role: z.string().optional(),
  name: z.string().optional(),
  content: z.string().optional(),
  pathFromRoot: z.string().optional(),
  serializedForm: z.string().optional()
});

// ../../packages/types/src/assertions.ts
import { z as z2 } from "zod";
var LLMAssertionEvalSchema = z2.object({
  thoughts: z2.string(),
  result: z2.boolean(),
  relevantElements: z2.array(z2.number()).optional()
});

// ../../packages/types/src/ai-commands.ts
import * as z4 from "zod";

// ../../packages/types/src/errors.ts
var BrowserExecutionError = class extends Error {
  constructor(message, options = {}) {
    super(message, options);
    this.name = "BrowserExecutionError";
  }
};
var EmptyA11yTreeError = class extends Error {
  constructor(options = {}) {
    super("Got empty a11y tree", options);
    this.name = "EmptyA11yTreeError";
  }
};

// ../../packages/types/src/preset.ts
import dedent from "dedent";
import * as z3 from "zod";
var ElementDescriptorSchema = z3.object({
  // natural language passed to LLM
  elementDescriptor: z3.string(),
  // Cached A11y target - when a user creates a preset action, this will not exist
  a11yData: A11yTargetWithCacheSchema.optional()
});
var CommonCommandSchema = z3.object({
  // If the command is suggested by AI, why it did so
  thoughts: z3.string().optional()
});
var NavigateCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("NAVIGATE" /* NAVIGATE */),
    url: z3.string()
  })
).describe("NAVIGATE <url> - Go to the specified url");
var ScrollUpCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("SCROLL_UP" /* SCROLL_UP */)
  })
).describe("SCROLL_UP - Scroll up one page");
var ScrollDownCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("SCROLL_DOWN" /* SCROLL_DOWN */)
  })
).describe("SCROLL_DOWN - Scroll down one page");
var WaitCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("WAIT" /* WAIT */),
    delay: z3.number()
    // seconds
  })
);
var RefreshCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("REFRESH" /* REFRESH */)
  })
);
var GoBackCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("GO_BACK" /* GO_BACK */)
  })
);
var GoForwardCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("GO_FORWARD" /* GO_FORWARD */)
  })
);
var ClickCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("CLICK" /* CLICK */),
    target: ElementDescriptorSchema,
    doubleClick: z3.boolean().default(false),
    rightClick: z3.boolean().default(false)
  })
).describe(
  dedent`CLICK <id> - click on the element that has the specified id.
  You are NOT allowed to click on disabled, hidden or StaticText elements.
  Only click on elements on the Current Page.
  Only click on elements with the following tag names: button, input, link, image, generic.
  `.replace("\n", " ")
);
var SelectOptionCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("SELECT_OPTION" /* SELECT_OPTION */),
    target: ElementDescriptorSchema,
    option: z3.string()
  })
).describe(
  // TODO: if we move to a non-mutative way of selecting elements (e.g. by selector), we should update this description
  `SELECT_OPTION <id> "<option>" - select the specified item from the select with the specified id. The item should exist on the page. Use the name of the item instead of the id. Make sure to include quotes around the option.`
);
var AIAssertionCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("AI_ASSERTION" /* AI_ASSERTION */),
    assertion: z3.string(),
    useVision: z3.boolean().default(false),
    disableCache: z3.boolean().default(false)
  })
);
var TypeOptionsSchema = z3.object({
  clearContent: z3.boolean().default(true),
  pressKeysSequentially: z3.boolean().default(false)
});
var TypeCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("TYPE" /* TYPE */),
    target: ElementDescriptorSchema,
    value: z3.string(),
    pressEnter: z3.boolean().default(false)
  })
).merge(TypeOptionsSchema).describe(
  `TYPE <id> "<text>" - type the specified text into the input with the specified id. The text should be specified by the user - do not use text from the EXAMPLES or generate text yourself. Make sure to include quotes around the text.`
);
var PressCommandSchema = CommonCommandSchema.merge(
  z3.object({
    type: z3.literal("PRESS" /* PRESS */),
    value: z3.string()
  })
).describe(
  `PRESS <key> - press the specified key, such as "ArrowLeft", "Enter", or "a". You must specify at least one key.`
);
var PresetCommandSchema = z3.discriminatedUnion("type", [
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
  WaitCommandSchema
]);
var AISuggestiblePresetCommandSchema = z3.discriminatedUnion("type", [
  ClickCommandSchema,
  TypeCommandSchema,
  PressCommandSchema,
  SelectOptionCommandSchema,
  NavigateCommandSchema,
  ScrollDownCommandSchema,
  ScrollUpCommandSchema
]);

// ../../packages/types/src/ai-commands.ts
var SuccessCommandSchema = CommonCommandSchema.merge(
  z4.object({
    type: z4.literal("SUCCESS" /* SUCCESS */)
  })
).describe("SUCCESS - the user goal has been successfully achieved");
var FailureCommandSchema = CommonCommandSchema.merge(
  z4.object({
    type: z4.literal("FAILURE" /* FAILURE */)
  })
).describe(
  "FAILURE - there are no commands to suggest that could make progress that have not already been tried before"
);
var ControlFlowCommandSchema = z4.discriminatedUnion("type", [
  SuccessCommandSchema,
  FailureCommandSchema
]);
var AICommandSchema = z4.discriminatedUnion("type", [
  ...ControlFlowCommandSchema.options,
  // We allow all preset actions here because users
  // can edit AI commands to be any preset.
  // However, the AI can only suggest items in AISuggestiblePresetCommandSchema
  ...AISuggestiblePresetCommandSchema.options
]);
var LLMOutputSchema = z4.object({
  command: z4.string(),
  thoughts: z4.string()
});
var NumericStringSchema = z4.string().pipe(z4.coerce.number());

// ../../packages/types/src/command-results.ts
import * as z6 from "zod";

// ../../packages/types/src/steps.ts
import * as z5 from "zod";
var StepType = /* @__PURE__ */ ((StepType2) => {
  StepType2["AI_ACTION"] = "AI_ACTION";
  StepType2["PRESET_ACTION"] = "PRESET_ACTION";
  StepType2["MODULE"] = "MODULE";
  return StepType2;
})(StepType || {});
var AIActionSchema = z5.object({
  type: z5.literal("AI_ACTION" /* AI_ACTION */),
  text: z5.string(),
  // Cached commands for this step
  commands: z5.array(AICommandSchema).optional()
});
var PresetActionSchema = z5.object({
  type: z5.literal("PRESET_ACTION" /* PRESET_ACTION */),
  command: PresetCommandSchema
});
var ModuleStepSchema = z5.object({
  type: z5.literal("MODULE" /* MODULE */),
  moduleId: z5.string().uuid()
});
var AllowedModuleStepSchema = z5.union([
  AIActionSchema,
  PresetActionSchema
]);
var ResolvedModuleStepSchema = z5.object({
  type: z5.literal("RESOLVED_MODULE"),
  moduleId: z5.string().uuid(),
  name: z5.string(),
  steps: AllowedModuleStepSchema.array()
});
var StepSchema = z5.union([
  AIActionSchema,
  PresetActionSchema,
  ModuleStepSchema
]);
var ResolvedStepSchema = z5.union([
  AIActionSchema,
  PresetActionSchema,
  ResolvedModuleStepSchema
]);

// ../../packages/types/src/command-results.ts
var ResultStatus = /* @__PURE__ */ ((ResultStatus2) => {
  ResultStatus2["SUCCESS"] = "SUCCESS";
  ResultStatus2["FAILED"] = "FAILED";
  ResultStatus2["RUNNING"] = "RUNNING";
  ResultStatus2["IDLE"] = "IDLE";
  ResultStatus2["CANCELLED"] = "CANCELLED";
  return ResultStatus2;
})(ResultStatus || {});
var CommandStatus = /* @__PURE__ */ ((CommandStatus2) => {
  CommandStatus2["SUCCESS"] = "SUCCESS";
  CommandStatus2["FAILED"] = "FAILED";
  return CommandStatus2;
})(CommandStatus || {});
var CommandMetadataSchema = z6.object({
  beforeUrl: z6.string(),
  beforeScreenshot: z6.string(),
  afterUrl: z6.string().optional(),
  afterScreenshot: z6.string().optional(),
  startedAt: z6.coerce.date(),
  finishedAt: z6.coerce.date(),
  viewport: z6.object({
    height: z6.number(),
    width: z6.number()
  }),
  status: z6.nativeEnum(CommandStatus),
  error: z6.string().optional(),
  elementInteracted: z6.string().optional()
});
var CommandResultSchema = z6.object({
  command: AICommandSchema
}).merge(CommandMetadataSchema);
var StepResultMetadataSchema = z6.object({
  startedAt: z6.coerce.date(),
  finishedAt: z6.coerce.date(),
  status: z6.nativeEnum(ResultStatus),
  error: z6.string().optional(),
  // browser info
  userAgent: z6.string().optional()
});
var PresetActionResultSchema = PresetActionSchema.merge(
  StepResultMetadataSchema
).merge(
  z6.object({
    // commandresult is saved by actions like AI assertions that have a "return" value
    // commandmetadata is saved by actions like preset click that doesn't have a return value
    // Array just for consistency with other elements, should only ever be one
    results: z6.union([CommandResultSchema, CommandMetadataSchema]).array()
  })
);
var AIActionResultSchema = AIActionSchema.merge(
  StepResultMetadataSchema
).merge(
  z6.object({
    // commandresult is saved by actions like AI assertions that have a "return" value
    // commandmetadata is saved by actions like preset click that doesn't have a return value
    results: PresetActionResultSchema.array()
  })
);
var ModuleResultSchema = ModuleStepSchema.merge(
  StepResultMetadataSchema
).merge(
  z6.object({
    // nested results
    results: z6.union([AIActionResultSchema, PresetActionResultSchema]).array()
  })
);
var ResultSchema = z6.discriminatedUnion("type", [
  AIActionResultSchema,
  PresetActionResultSchema,
  ModuleResultSchema
]);

// ../../packages/types/src/execute-results.ts
import * as z7 from "zod";
var ExecuteCommandHistoryEntrySchema = z7.object({
  // type of command executed
  type: z7.nativeEnum(StepType),
  // if AI step type, what command was executed
  generatedStep: AICommandSchema.optional(),
  // human readable descriptor for action taken, including element interacted with
  serializedCommand: z7.string().optional(),
  // human readable descriptor for element interacted with
  elementInteracted: z7.string().optional()
});
var ExecuteAssertionResultSchema = z7.object({
  type: z7.literal("assertion" /* ASSERTION */),
  command: z7.union([SuccessCommandSchema, FailureCommandSchema]),
  relevantElements: z7.array(z7.number()).optional()
});

// ../../packages/types/src/goal-splitter.ts
import { z as z8 } from "zod";
var InstructionsSchema = z8.string().array();

// ../../packages/types/src/locator.ts
import * as z9 from "zod";
var AILocatorSchema = z9.object({
  thoughts: z9.string(),
  // a11y id
  id: z9.number().int(),
  // dropdowns should have options
  options: z9.array(z9.string()).optional()
});

// ../../packages/types/src/modules.ts
import { z as z10 } from "zod";
var ModuleMetadataSchema = z10.object({
  id: z10.string(),
  createdAt: z10.coerce.date(),
  createdBy: z10.string(),
  organizationId: z10.string().or(z10.null()),
  name: z10.string(),
  schemaVersion: z10.string(),
  // this is only used in the client and is not stored in the db
  numSteps: z10.number()
});
var ModuleSchema = z10.object({
  steps: AllowedModuleStepSchema.array()
}).merge(ModuleMetadataSchema.omit({ numSteps: true }));

// ../../packages/types/src/runs.ts
import { z as z11 } from "zod";
var RunTrigger = {
  WEBHOOK: "WEBHOOK",
  CRON: "CRON",
  MANUAL: "MANUAL"
};
var RunStatusEnum = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  PASSED: "PASSED",
  FAILED: "FAILED",
  CANCELLED: "CANCELLED"
};
var DateOrStringSchema = z11.string().pipe(z11.coerce.date()).or(z11.date());
var RunMetadataSchema = z11.object({
  id: z11.string(),
  createdAt: DateOrStringSchema,
  createdBy: z11.string(),
  organizationId: z11.string().or(z11.null()),
  scheduledAt: DateOrStringSchema.or(z11.null()),
  startedAt: DateOrStringSchema.or(z11.null()),
  finishedAt: DateOrStringSchema.or(z11.null()),
  testId: z11.string().or(z11.null()),
  status: z11.nativeEnum(RunStatusEnum),
  trigger: z11.nativeEnum(RunTrigger),
  test: z11.object({
    name: z11.string(),
    id: z11.string()
  }).or(z11.null())
});
var RunWithTestSchema = RunMetadataSchema.merge(
  z11.object({
    results: ResultSchema.array(),
    test: z11.object({
      name: z11.string(),
      id: z11.string(),
      baseUrl: z11.string()
    }).or(z11.null())
  })
);

// ../../packages/types/src/serialization.ts
function clampText(text, length) {
  if (text.length < length) {
    return text;
  }
  return text.slice(0, length - 3) + "[...]";
}
var AI_COMMAND_DISPLAY_NAMES = {
  ["CLICK" /* CLICK */]: "Click",
  ["TYPE" /* TYPE */]: "Type",
  ["SELECT_OPTION" /* SELECT_OPTION */]: "Select",
  ["PRESS" /* PRESS */]: "Press",
  ["NAVIGATE" /* NAVIGATE */]: "Navigate",
  ["SCROLL_DOWN" /* SCROLL_DOWN */]: "Scroll down",
  ["SCROLL_UP" /* SCROLL_UP */]: "Scroll up"
};
function serializeAICommand(cmd) {
  let humanSummary = "";
  switch (cmd.type) {
    case "SUCCESS" /* SUCCESS */:
      humanSummary = `Step complete: ${cmd.thoughts}`;
      break;
    case "FAILURE" /* FAILURE */:
      humanSummary = `Step failed: ${cmd.thoughts}`;
      break;
    default:
      return serializePresetCommand(cmd);
  }
  return humanSummary;
}
function serializePresetCommand(command) {
  var _a;
  switch (command.type) {
    case "NAVIGATE" /* NAVIGATE */:
      return `Go to URL: ${clampText(command.url, 30)}`;
    case "GO_BACK" /* GO_BACK */:
      return `Go back to the previous page`;
    case "GO_FORWARD" /* GO_FORWARD */:
      return `Go forward to the next page`;
    case "SCROLL_DOWN" /* SCROLL_DOWN */:
      return `Scroll down one page`;
    case "SCROLL_UP" /* SCROLL_UP */:
      return `Scroll up one page`;
    case "WAIT" /* WAIT */:
      return `Wait for ${command.delay} seconds`;
    case "REFRESH" /* REFRESH */:
      return `Refresh the page`;
    case "CLICK" /* CLICK */:
      return `Click on '${command.target.elementDescriptor}'`;
    case "TYPE" /* TYPE */:
      let serializedTarget = "";
      if ((_a = command.target.a11yData) == null ? void 0 : _a.serializedForm) {
        serializedTarget = ` in element ${command.target.a11yData.serializedForm}`;
      } else if (command.target.elementDescriptor.length > 0) {
        serializedTarget = ` in element ${command.target.elementDescriptor}`;
      }
      return `Type${serializedTarget}: '${command.value}'`;
    case "PRESS" /* PRESS */:
      return `Press '${command.value}'`;
    case "SELECT_OPTION" /* SELECT_OPTION */:
      return `Select option '${command.option}' in '${command.target.elementDescriptor}'`;
    case "AI_ASSERTION" /* AI_ASSERTION */:
      return `${command.useVision ? "Visual assertion" : "Assertion"} successful: '${command.assertion}'`;
    default:
      const assertUnreachable = (_x) => {
        throw "If Typescript complains about the line below, you missed a case or break in the switch above";
      };
      return assertUnreachable(command);
  }
}

// ../../packages/types/src/test.ts
import { z as z13 } from "zod";

// ../../packages/types/src/test-settings.ts
import { isValidCron } from "cron-validator";
import { z as z12 } from "zod";
var TestAdvancedSettingsSchema = z12.object({
  availableAsModule: z12.boolean().default(false),
  disableAICaching: z12.boolean().default(false)
});
var ScheduleSettingsSchema = z12.object({
  cron: z12.string().refine(
    (v) => {
      return isValidCron(v);
    },
    { message: "Invalid cron expression." }
  ).default("0 0 */1 * *"),
  enabled: z12.boolean().default(false),
  timeZone: z12.string().default("America/Los_Angeles"),
  // this is used for removing repeatable jobs (not set by user)
  jobKey: z12.string().optional()
});
var WebhookSchema = z12.object({
  lastStatus: z12.number().optional(),
  url: z12.string().url()
});
var WebhookSettingsSchema = z12.array(WebhookSchema).default([]);
var TestSettingsSchema = z12.object({
  name: z12.string().min(1),
  baseUrl: z12.string().url(),
  advanced: TestAdvancedSettingsSchema
});

// ../../packages/types/src/test.ts
var ResolvedTestSchema = z13.object({
  id: z13.string(),
  name: z13.string(),
  baseUrl: z13.string(),
  steps: z13.array(ResolvedStepSchema),
  createdAt: z13.coerce.date(),
  updatedAt: z13.coerce.date(),
  createdBy: z13.string(),
  organizationId: z13.string().or(z13.null()),
  schemaVersion: z13.string(),
  advanced: TestAdvancedSettingsSchema,
  schedule: ScheduleSettingsSchema,
  webhooks: WebhookSettingsSchema
});

// ../../packages/types/src/context.ts
import * as z14 from "zod";
var DynamicContextSchema = z14.object({
  // user goal or instruction
  goal: z14.string(),
  // current url of the browser
  url: z14.string(),
  // serialized page state
  browserState: z14.string(),
  // serialized history of previous commands
  history: z14.string(),
  // number of previously executed commands
  numPrevious: z14.number(),
  // last executed command, if any
  lastCommand: ExecuteCommandHistoryEntrySchema.or(z14.null())
});

// ../../packages/types/src/public-api.ts
import * as z15 from "zod";
var GeneratorOptionsSchema = z15.object({
  disableCache: z15.boolean()
});
var GetNextCommandBodySchema = DynamicContextSchema.merge(
  GeneratorOptionsSchema
);
var GetAssertionResultBodySchema = z15.discriminatedUnion("vision", [
  DynamicContextSchema.merge(GeneratorOptionsSchema).merge(
    z15.object({
      vision: z15.literal(false)
    })
  ),
  DynamicContextSchema.pick({
    goal: true,
    url: true
  }).merge(GeneratorOptionsSchema).merge(
    z15.object({
      // base64 encoded image
      screenshot: z15.string(),
      vision: z15.literal(true)
    })
  )
]);
var LocateBodySchema = DynamicContextSchema.pick({
  browserState: true,
  goal: true
}).merge(GeneratorOptionsSchema);
var SplitGoalBodySchema = DynamicContextSchema.pick({
  goal: true,
  url: true
}).merge(GeneratorOptionsSchema);
var SplitGoalResponseSchema = z15.string().array();

// ../../packages/web-agent/src/browsers/a11y.ts
var bannedProperties = /* @__PURE__ */ new Set(["focusable"]);
var alwaysInterestingRoles = /* @__PURE__ */ new Set([
  "textbox",
  "checkbox",
  "button",
  "link"
]);
var rolesToOmitID = /* @__PURE__ */ new Set(["paragraph", "menuitem", "option"]);
var defaultA11yNodeSerializeParams = {
  indentLevel: 0,
  noID: false,
  noChildren: false,
  noProperties: false
};
var ProcessedA11yNode = class {
  constructor(params) {
    this.id = params.id;
    this.role = params.role;
    this.name = params.name;
    this.content = params.content;
    this.properties = params.properties;
    this.pathFromRoot = params.pathFromRoot;
    this.children = params.children;
    this.backendNodeID = params.backendNodeID;
  }
  getLogForm() {
    var _a, _b;
    return JSON.stringify({
      id: this.id,
      name: (_a = this.name) != null ? _a : "",
      role: (_b = this.role) != null ? _b : "",
      backendNodeId: this.backendNodeID
    });
  }
  /**
   * Returns true if the current node contains interesting properties.
   * Does not go through children.
   */
  isInteresting() {
    if (alwaysInterestingRoles.has(this.role))
      return true;
    if (this.children.some((child) => child.role === "StaticText"))
      return true;
    return !!this.name.trim() || !!this.content;
  }
  serialize(opts = defaultA11yNodeSerializeParams) {
    const { indentLevel, noChildren, noProperties, noID } = Object.assign(
      {},
      defaultA11yNodeSerializeParams,
      opts
    );
    const indent = " ".repeat(indentLevel);
    if (this.role === "StaticText") {
      return `${indent}${this.name}
`;
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
        } else if (typeof v === "string") {
          s += ` ${k}="${v}"`;
        } else if (typeof v === "boolean") {
          if (v) {
            s += ` ${k}`;
          } else {
            s += ` ${k}={false}`;
          }
        } else if (typeof v !== "undefined") {
          s += ` ${k}={${JSON.stringify(v)}}`;
        }
      });
    }
    if (this.children.length === 0 || noChildren) {
      s += " />\n";
      return s;
    } else {
      s += ">\n";
    }
    for (const child of this.children) {
      s += child.serialize({ indentLevel: indentLevel + 2 });
    }
    s += `${indent}</${this.role}>
`;
    return s;
  }
};
var ProcessedA11yTree = class {
  constructor(root, nodeMap) {
    this.root = root;
    this.nodeMap = nodeMap;
  }
  serialize() {
    if (!this.root) {
      return "";
    }
    return this.root.serialize();
  }
  // public diff(other: ProcessedA11yTree): string[] {
  //   const results: string[] = [];
  // }
};
function getNodePathIdentifier(node) {
  var _a, _b;
  if ((_a = node.name) == null ? void 0 : _a.value) {
    return `"${node.name.value}"`;
  }
  if (((_b = node.role) == null ? void 0 : _b.value) && node.role.value !== "none" && node.role.value !== "generic") {
    return `"${node.role.value}"`;
  }
  return `"${node.nodeId}"`;
}
function processA11yTreeDFS(node, parent, inputNodeMap, outputNodeMap) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!parent && node.parentId) {
    throw new Error(
      `Got no parent for accessibility node ${node.nodeId}: ${JSON.stringify(
        node
      )}`
    );
  }
  const processedNode = new ProcessedA11yNode({
    id: node.nodeId,
    role: ((_a = node.role) == null ? void 0 : _a.value) || "",
    name: ((_b = node.name) == null ? void 0 : _b.value) || "",
    content: ((_c = node.value) == null ? void 0 : _c.value) || "",
    properties: {},
    children: [],
    pathFromRoot: (parent ? `${parent.pathFromRoot} ` : "") + getNodePathIdentifier(node),
    backendNodeID: node.backendDOMNodeId
    // md5Sum: "",
  });
  if ((_d = node.value) == null ? void 0 : _d.value) {
    processedNode.content = `${(_e = node.value) == null ? void 0 : _e.value}`;
  }
  if (node.properties) {
    node.properties.forEach((prop) => {
      processedNode.properties[prop.name] = prop.value.value;
    });
  }
  outputNodeMap.set(processedNode.id, processedNode);
  const children = (_f = node.childIds) != null ? _f : [];
  for (const childId of children) {
    if (!childId) {
      continue;
    }
    const child = inputNodeMap.get(childId);
    if (!child) {
      continue;
    }
    const processedChildren = processA11yTreeDFS(
      child,
      processedNode,
      inputNodeMap,
      outputNodeMap
    );
    if (!processedChildren.length) {
      continue;
    }
    processedNode.children = processedNode.children.concat(processedChildren);
  }
  if (processedNode.role === "StaticText") {
    processedNode.children = [];
  }
  if (processedNode.children.length === 1 && processedNode.children[0].role === "StaticText") {
    const currentName = processedNode.name;
    const childName = (_g = processedNode.children[0]) == null ? void 0 : _g.name;
    if (currentName === childName || !childName) {
      processedNode.children = [];
    }
  }
  const staticTextGroupedChildren = [];
  for (let i = processedNode.children.length - 1; i >= 0; i--) {
    const node2 = processedNode.children[i];
    if (node2.role !== "StaticText") {
      staticTextGroupedChildren.push(node2);
      continue;
    }
    if (i === 0 || processedNode.children[i - 1].role !== "StaticText") {
      staticTextGroupedChildren.push(node2);
      continue;
    }
    processedNode.children[i - 1].name += ` ${node2.name}`;
  }
  processedNode.children = staticTextGroupedChildren.reverse();
  for (const child of processedNode.children) {
    child.parent = processedNode;
  }
  const interesting = processedNode.isInteresting();
  if (!interesting) {
    if (processedNode.children.length === 0) {
      return [];
    } else if (processedNode.children.length === 1) {
      return [processedNode.children[0]];
    } else if (node.parentId) {
      return processedNode.children;
    }
  }
  return [processedNode];
}
function processA11yTree(graph) {
  if (!graph.root) {
    throw new Error("a11y tree has null root");
  }
  graph.allNodes = graph.allNodes.filter((node) => {
    var _a;
    if (!node.ignored) {
      return true;
    }
    return !((_a = node.ignoredReasons) == null ? void 0 : _a.find(
      (reason) => {
        var _a2;
        return reason.name === "notRendered" && ((_a2 = reason.value) == null ? void 0 : _a2.value);
      }
    ));
  });
  const nodeMap = /* @__PURE__ */ new Map();
  for (const node of graph.allNodes) {
    nodeMap.set(node.nodeId, node);
  }
  const outputNodeMap = /* @__PURE__ */ new Map();
  const processedRoot = processA11yTreeDFS(
    graph.root,
    null,
    nodeMap,
    outputNodeMap
  );
  if (processedRoot.length > 1) {
    throw new Error(
      `Something went horribly wrong processing the a11y tree, we got: ${JSON.stringify(
        processedRoot
      )}`
    );
  } else if (processedRoot.length === 0) {
    throw new EmptyA11yTreeError();
  }
  return new ProcessedA11yTree(processedRoot[0], outputNodeMap);
}

// ../../packages/web-agent/src/browsers/cdp.ts
var GREEN = { r: 147, g: 196, b: 125, a: 0.55 };
var NODE_HIGHLIGHT_CONFIG = {
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
  shapeMarginColor: GREEN
};

// ../../packages/web-agent/src/browsers/constants.ts
var RETINA_WINDOW_SCALE_FACTOR = 2;
var MAX_LOAD_TIMEOUT_MS = 8e3;
var NETWORK_STABLE_DURATION_MS = 1250;
var NETWORK_IDLE_TIMEOUT_MS = 3e3;
var CHECK_INTERVAL_MS = 250;
var A11Y_LOAD_TIMEOUT_MS = 1e3;
var A11Y_STABLE_TIMEOUT_MS = NETWORK_IDLE_TIMEOUT_MS;
var A11Y_STABLE_DURATION_MS = NETWORK_STABLE_DURATION_MS;
var BROWSER_ACTION_TIMEOUT_MS = 3e3;
var COMPLICATED_BROWSER_ACTION_TIMEOUT_MS = MAX_LOAD_TIMEOUT_MS;
var HIGHLIGHT_DURATION_MS = 3e3;
var CHROME_INTERNAL_URLS = /* @__PURE__ */ new Set([
  "about:blank",
  "chrome-error://chromewebdata/"
]);
var MAX_BROWSER_ACTION_ATTEMPTS = 2;

// ../../packages/web-agent/src/browsers/utils/time.ts
var sleep = (ms = 1e3) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

// ../../packages/web-agent/src/browsers/utils/scripts/cursor.ts
function addCursorScript() {
  cursor = document.createElement("img");
  cursor.setAttribute(
    "src",
    "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwIDcpIj48cGF0aCBkPSJtNi4xNDggMTguNDczIDEuODYzLTEuMDAzIDEuNjE1LS44MzktMi41NjgtNC44MTZoNC4zMzJsLTExLjM3OS0xMS40MDh2MTYuMDE1bDMuMzE2LTMuMjIxeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im02LjQzMSAxNyAxLjc2NS0uOTQxLTIuNzc1LTUuMjAyaDMuNjA0bC04LjAyNS04LjA0M3YxMS4xODhsMi41My0yLjQ0MnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"
  );
  cursor.setAttribute("id", "selenium_cursor");
  cursor.setAttribute(
    "style",
    "position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0"
  );
  cursor.style.filter = "invert(0%) sepia(6%) saturate(24%) hue-rotate(315deg) brightness(89%) contrast(110%)";
  document.body.appendChild(cursor);
  document.onmousemove = function(e) {
    e = e || window.event;
    document.getElementById("selenium_cursor").style.left = e.pageX + "px";
    document.getElementById("selenium_cursor").style.top = e.pageY + "px";
  };
}

// ../../packages/web-agent/src/browsers/utils/scripts/addIDs.ts
function addIDsScript() {
  const allElements = document.getElementsByTagName("*");
  let currentID = 1;
  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    element == null ? void 0 : element.setAttribute("data-momentic-id", currentID);
    currentID++;
  }
}

// ../../packages/web-agent/src/browsers/utils/playwright.ts
var sometimesRelevantResourceTypes = /* @__PURE__ */ new Set([
  "document",
  "script",
  "XMLHttpRequest",
  "fetch",
  "xhr"
]);
var alwaysRelevantResourceTypes = /* @__PURE__ */ new Set(["script", "document"]);
var bannedDomains = [
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
  "static.zdassets.com"
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
    return true;
  }
  return stripWWWPrefix(parsedRequestURL.hostname).includes(
    stripWWWPrefix(parsedCurrentURL.hostname)
  );
}

// ../../packages/web-agent/src/browsers/chrome.ts
var _ChromeBrowser = class _ChromeBrowser {
  constructor({
    browser,
    context,
    page,
    baseURL,
    cdpClient,
    logger
  }) {
    // key is nodeId, according to the a11y tree
    this.nodeMap = /* @__PURE__ */ new Map();
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
  static init(_0, _1, _2) {
    return __async(this, arguments, function* (baseURL, logger, onScreenshot, timeout = MAX_LOAD_TIMEOUT_MS) {
      const browser = yield chromium.launch({ headless: true });
      const context = yield browser.newContext({
        viewport: {
          width: 1920,
          height: 1080
        },
        // comment out the below if you are on Mac OS but you're using a monitor
        deviceScaleFactor: process.platform === "darwin" ? RETINA_WINDOW_SCALE_FACTOR : 1,
        userAgent: devices["Desktop Chrome"].userAgent,
        geolocation: { latitude: 37.7749, longitude: -122.4194 },
        // san francisco
        locale: "en-US",
        timezoneId: "America/Los_Angeles"
      });
      const page = yield context.newPage();
      const cdpClient = yield context.newCDPSession(page);
      const chrome = new _ChromeBrowser({
        browser,
        context,
        page,
        baseURL,
        cdpClient,
        logger
      });
      let completed = false;
      const navigateAndInitCDP = () => __async(this, null, function* () {
        try {
          yield chrome.navigate(baseURL, false);
          yield cdpClient.send("Accessibility.enable");
          yield cdpClient.send("DOM.enable");
          yield cdpClient.send("Overlay.enable");
        } catch (err) {
          logger.error({ err }, "Failed to initialize chrome browser");
        } finally {
          completed = true;
        }
      });
      void navigateAndInitCDP();
      const sendScreenshot = () => __async(this, null, function* () {
        if (!onScreenshot) {
          return;
        }
        try {
          onScreenshot({
            viewport: chrome.viewport,
            buffer: yield chrome.screenshot()
          });
        } catch (err) {
          logger.error({ err }, "Failed to take screenshot");
        }
      });
      void sendScreenshot();
      const screenshotInterval = setInterval(() => {
        void sendScreenshot();
      }, 250);
      const startTime = Date.now();
      while (!completed && Date.now() - startTime < timeout) {
        yield sleep(CHECK_INTERVAL_MS);
      }
      clearInterval(screenshotInterval);
      if (!completed) {
        logger.warn(
          "Timeout elapsed waiting for browser to initialize - are you sure this page is accessible?"
        );
      }
      return chrome;
    });
  }
  // Things to do on every page load
  pageSetup() {
    return __async(this, null, function* () {
      yield this.page.evaluate(addCursorScript);
      yield this.page.evaluate(addIDsScript);
    });
  }
  wait(timeoutMs) {
    return __async(this, null, function* () {
      yield this.page.waitForTimeout(timeoutMs);
    });
  }
  cleanup() {
    return __async(this, null, function* () {
      yield this.page.close();
      yield this.context.close();
      yield this.browser.close();
    });
  }
  get closed() {
    return this.page.isClosed() || !this.browser.isConnected();
  }
  html() {
    return __async(this, null, function* () {
      return yield this.page.content();
    });
  }
  get url() {
    return this.page.url();
  }
  screenshot(quality = 100, scale = "device") {
    return __async(this, null, function* () {
      return yield this.page.screenshot({
        fullPage: false,
        quality,
        scale,
        type: "jpeg",
        // allow the blinking text cursor thing to remain there
        caret: "initial"
      });
    });
  }
  get viewport() {
    const viewport = this.page.viewportSize();
    if (!viewport) {
      throw new Error("failed to get viewport");
    }
    return viewport;
  }
  navigate(url, wrapPossibleNavigation = true) {
    return __async(this, null, function* () {
      this.logger.debug(`Navigating to ${url}`);
      const startTime = Date.now();
      const doNav = () => __async(this, null, function* () {
        try {
          yield this.page.goto(url, {
            timeout: MAX_LOAD_TIMEOUT_MS
          });
          this.logger.debug(
            { url },
            `Got load event in ${Math.floor(Date.now() - startTime)}ms`
          );
        } catch (e) {
          this.logger.warn(
            { url, type: "navigate", err: e },
            "Timeout elapsed waiting for page to load, continuing anyways..."
          );
        }
      });
      if (wrapPossibleNavigation) {
        yield this.wrapPossibleNavigation(doNav);
      } else {
        yield doNav();
      }
      if (CHROME_INTERNAL_URLS.has(this.url) && process.env.NODE_ENV === "production") {
        throw new Error(
          `${url} took too long to load \u{1F61E}. Please ensure the site and your internet are working.`
        );
      }
      yield this.pageSetup();
      this.logger.debug({ url }, "Navigation complete");
    });
  }
  fill(_0, _1) {
    return __async(this, arguments, function* (target, text, options = {}) {
      const element = yield this.click(target, {
        doubleClick: false,
        rightClick: false
      });
      yield this.type(text, options);
      return element;
    });
  }
  type(_0) {
    return __async(this, arguments, function* (text, options = {}) {
      const { clearContent = true, pressKeysSequentially = false } = options;
      if (clearContent) {
        yield this.page.keyboard.press("Meta+A");
        yield this.page.keyboard.press("Backspace");
      }
      if (pressKeysSequentially) {
        yield this.page.keyboard.type(text);
      } else {
        yield this.page.keyboard.insertText(text);
      }
    });
  }
  clickByA11yID(_0) {
    return __async(this, arguments, function* (index, options = {}) {
      const node = this.nodeMap.get(`${index}`);
      if (!node) {
        throw new Error(`Could not find node in DOM with index: ${index}`);
      }
      const nodeClicked = yield this.clickUsingCDP(node, options);
      yield this.highlightNode(nodeClicked);
      return node.serialize({ noChildren: true, noProperties: true, noID: true });
    });
  }
  selectOptionByA11yID(index, option) {
    return __async(this, null, function* () {
      const node = this.nodeMap.get(`${index}`);
      if (!node) {
        throw new Error(`Could not find node in DOM with index: ${index}`);
      }
      if (!node.backendNodeID) {
        throw new Error(
          `Select target missing backend node id: ${node.getLogForm()}`
        );
      }
      const locator = yield this.getLocatorFromBackendID(node.backendNodeID);
      yield locator.selectOption(option, {
        timeout: COMPLICATED_BROWSER_ACTION_TIMEOUT_MS
      });
      yield this.highlightNode(node);
      return node.serialize({ noChildren: true, noProperties: true, noID: true });
    });
  }
  highlight(target) {
    return __async(this, null, function* () {
      try {
        yield this.highlightByA11yID(target.id);
      } catch (err) {
        this.logger.warn({ err, target }, "Failed to highlight target");
      }
    });
  }
  highlightByA11yID(index) {
    return __async(this, null, function* () {
      const node = this.nodeMap.get(`${index}`);
      if (!node) {
        throw new Error(`Could not find node in DOM with index: ${index}`);
      }
      if (!node.backendNodeID) {
        throw new Error(
          `Select target missing backend node id: ${node.getLogForm()}`
        );
      }
      yield this.highlightNode(node);
    });
  }
  highlightNode(node) {
    return __async(this, null, function* () {
      try {
        yield this.cdpClient.send("Overlay.highlightNode", {
          highlightConfig: NODE_HIGHLIGHT_CONFIG,
          backendNodeId: node.backendNodeID
        });
      } catch (err) {
        this.logger.warn({ err }, "Failed to add node highlight");
      }
      const hideHighlight = () => __async(this, null, function* () {
        try {
          yield this.cdpClient.send("Overlay.hideHighlight", {
            backendNodeId: node.backendNodeID
          });
        } catch (err) {
          this.logger.debug({ err }, "Failed to remove node highlight");
        }
      });
      setTimeout(() => {
        void hideHighlight();
      }, HIGHLIGHT_DURATION_MS);
    });
  }
  wrapPossibleNavigation(_0) {
    return __async(this, arguments, function* (fn, timeoutMS = MAX_LOAD_TIMEOUT_MS) {
      const startTime = Date.now();
      const startURL = this.url;
      let lastRequestReceived = Date.now();
      const firedRequests = /* @__PURE__ */ new Map();
      const finishedRequests = /* @__PURE__ */ new Map();
      const requestFinishedListener = (request) => {
        var _a;
        const key = serializeRequest(request);
        finishedRequests.set(key, ((_a = finishedRequests.get(key)) != null ? _a : 0) + 1);
      };
      const requestFiredListener = (request) => {
        var _a;
        if (!isRequestRelevantForPageLoad(request, this.url)) {
          this.logger.debug(
            {
              uri: serializeRequest(request)
            },
            "Ignoring request for page load network stability"
          );
          return;
        }
        const key = serializeRequest(request);
        this.logger.debug(
          {
            uri: key
          },
          "Request fired on page load, delaying network stability"
        );
        firedRequests.set(key, ((_a = firedRequests.get(key)) != null ? _a : 0) + 1);
        lastRequestReceived = Date.now();
      };
      this.page.on("requestfinished", requestFinishedListener);
      this.page.on("request", requestFiredListener);
      let rejected = false;
      const retPromise = fn().catch((e) => {
        rejected = true;
        if (e instanceof Error)
          return e;
        return new Error(`${e}`);
      });
      yield sleep(CHECK_INTERVAL_MS);
      const unwrapAndThrowError = (p) => __async(this, null, function* () {
        const v = yield p;
        if (v instanceof Error) {
          throw v;
        }
        return v;
      });
      let unfinishedRequests = /* @__PURE__ */ new Set();
      const waitForNetworkIdle = () => __async(this, null, function* () {
        while (!rejected && Date.now() - startTime < timeoutMS) {
          unfinishedRequests = /* @__PURE__ */ new Set();
          yield sleep(CHECK_INTERVAL_MS);
          if (Date.now() - lastRequestReceived <= NETWORK_STABLE_DURATION_MS) {
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
            this.logger.debug(
              {
                url: this.url,
                requests: JSON.stringify(Array.from(firedRequests.entries()))
              },
              `Network idle in ${Math.floor(Date.now() - startTime)}ms`
            );
            return true;
          }
        }
        if (!rejected) {
          this.logger.warn(
            {
              url: this.url,
              requests: JSON.stringify(Array.from(unfinishedRequests.entries()))
            },
            "Timeout elapsed waiting for network idle, continuing anyways..."
          );
        }
        return false;
      });
      const waitResult = yield waitForNetworkIdle();
      this.page.off("requestfinished", requestFinishedListener);
      this.page.off("request", requestFiredListener);
      if (!waitResult) {
        return unwrapAndThrowError(retPromise);
      }
      if (!rejected && urlChanged(this.url, startURL)) {
        this.logger.debug(
          `Detected url change in wrapPossibleNavigation, waiting for load state`
        );
        try {
          yield this.page.waitForLoadState("load", {
            timeout: timeoutMS - (Date.now() - startTime)
          });
        } catch (e) {
          this.logger.warn(
            { url: this.url },
            "Timeout elapsed waiting for load state to fire, continuing anyways..."
          );
        }
      }
      return unwrapAndThrowError(retPromise);
    });
  }
  click(_0) {
    return __async(this, arguments, function* (target, options = {}) {
      const elementInteracted = yield this.wrapPossibleNavigation(
        () => this.clickByA11yID(target.id, options)
      );
      return elementInteracted;
    });
  }
  selectOption(target, option) {
    return __async(this, null, function* () {
      return this.selectOptionByA11yID(target.id, option);
    });
  }
  press(key) {
    return __async(this, null, function* () {
      yield this.wrapPossibleNavigation(() => this.page.keyboard.press(key));
    });
  }
  refresh() {
    return __async(this, null, function* () {
      yield this.page.reload();
      yield this.pageSetup();
    });
  }
  getA11yTree() {
    return __async(this, null, function* () {
      let processedTree = null;
      let attempt = 0;
      const url = this.url;
      while (!processedTree) {
        try {
          this.logger.debug(`Getting a11y tree at ${url}`);
          const graph = yield this.getRawA11yTree();
          if (!graph.root || graph.allNodes.length === 0) {
            throw new Error("No a11y tree found on page");
          }
          processedTree = processA11yTree(graph);
        } catch (e) {
          this.logger.error({ err: e, url }, "Error fetching a11y tree");
          if (attempt === 0) {
            yield sleep(1e3);
            attempt++;
          } else {
            throw new Error(`Max retries exceeded fetching a11y tree: ${e}`);
          }
        }
      }
      if (!processedTree.root) {
        this.logger.warn("A11y tree was pruned entirely");
      }
      this.nodeMap = processedTree.nodeMap;
      return processedTree;
    });
  }
  getRawA11yTree() {
    return __async(this, null, function* () {
      const url = this.page.url();
      let lastTreeUpdateTimestamp = Date.now();
      const treeUpdateListener = () => {
        lastTreeUpdateTimestamp = Date.now();
      };
      this.cdpClient.addListener(
        "Accessibility.nodesUpdated",
        treeUpdateListener
      );
      let accessibilityTreeLoadFired = false;
      const accessibilityLoadListener = () => {
        this.logger.info({ url }, `A11y tree load event fired`);
        accessibilityTreeLoadFired = true;
      };
      this.cdpClient.addListener(
        "Accessibility.loadComplete",
        accessibilityLoadListener
      );
      const a11yLoadStart = Date.now();
      let timeoutTriggered = true;
      while (Date.now() - a11yLoadStart < A11Y_STABLE_TIMEOUT_MS) {
        yield sleep(CHECK_INTERVAL_MS);
        if (!accessibilityTreeLoadFired && Date.now() - a11yLoadStart < A11Y_LOAD_TIMEOUT_MS) {
          this.logger.debug({ url }, `A11y tree not loaded yet, waiting...`);
          continue;
        }
        if (Date.now() - lastTreeUpdateTimestamp >= A11Y_STABLE_DURATION_MS) {
          this.logger.debug({ url }, `A11y tree not stable yet, waiting...`);
          continue;
        }
        timeoutTriggered = false;
        break;
      }
      this.logger.debug(
        {
          duration: Date.now() - a11yLoadStart,
          eventReceived: accessibilityTreeLoadFired,
          timeoutTriggered
        },
        "A11y wait phase completed"
      );
      const { node: root } = yield this.cdpClient.send(
        "Accessibility.getRootAXNode"
      );
      const { nodes } = yield this.cdpClient.send("Accessibility.queryAXTree", {
        backendNodeId: root.backendDOMNodeId
      });
      this.cdpClient.removeListener(
        "Accessibility.loadComplete",
        accessibilityLoadListener
      );
      this.cdpClient.removeListener(
        "Accessibility.nodesUpdated",
        treeUpdateListener
      );
      return {
        root,
        allNodes: nodes
      };
    });
  }
  clickUsingVisualCoordinates(backendNodeId) {
    return __async(this, null, function* () {
      const location = yield this.getElementLocation(backendNodeId);
      if (!location) {
        throw new Error(
          `Could not find element location with backend node id: ${backendNodeId}`
        );
      }
      this.logger.debug({ location }, "Executing mouse click");
      yield this.page.mouse.click(location.centerX, location.centerY);
    });
  }
  // Get the "id" attribute value from an HTML element.
  getIDAttributeUsingCDP(objectId) {
    return __async(this, null, function* () {
      yield this.cdpClient.send("DOM.getDocument", { depth: 0 });
      const cdpNodeResult = yield this.cdpClient.send("DOM.requestNode", {
        objectId
      });
      const attrResult = yield this.cdpClient.send("DOM.getAttributes", {
        nodeId: cdpNodeResult.nodeId
      });
      const attributes = attrResult.attributes;
      const indexAttr = attributes.findIndex((s) => s === "data-momentic-id");
      if (indexAttr === -1) {
        return "";
      }
      return attributes[indexAttr + 1] || "";
    });
  }
  getLocatorFromBackendID(backendNodeId) {
    return __async(this, null, function* () {
      yield this.page.evaluate(addIDsScript);
      const cdpResolveResult = yield this.cdpClient.send("DOM.resolveNode", {
        backendNodeId
      });
      if (!cdpResolveResult || !cdpResolveResult.object.objectId) {
        throw new Error(`Could not resolve backend node ${backendNodeId}`);
      }
      try {
        const id = yield this.getIDAttributeUsingCDP(
          cdpResolveResult.object.objectId
        );
        if (!id) {
          throw new Error("Failed getting data-momentic-id attribute using CDP");
        }
        return this.page.locator(`[data-momentic-id="${id}"]`);
      } catch (err) {
        this.logger.error(
          {
            err
          },
          "Failed to get ID attribute"
        );
        throw err;
      }
    });
  }
  clickUsingCDP(_0) {
    return __async(this, arguments, function* (originalNode, options = {}) {
      let clickAttempts = 0;
      let candidateNode = originalNode;
      while (clickAttempts < MAX_BROWSER_ACTION_ATTEMPTS) {
        if (!candidateNode || candidateNode.role === "RootWebArea") {
          throw new Error(
            `Attempted to click node with no clickable surrounding elements: ${originalNode.getLogForm()}`
          );
        }
        if (candidateNode.role === "StaticText") {
          candidateNode = candidateNode.parent;
          continue;
        }
        const candidateNodeID = candidateNode.backendNodeID;
        if (!candidateNodeID) {
          this.logger.warn(
            { node: candidateNode.getLogForm() },
            "Click candidate had no backend node ID"
          );
          candidateNode = candidateNode.parent;
          continue;
        }
        try {
          const locator = yield this.getLocatorFromBackendID(candidateNodeID);
          if (options.doubleClick) {
            yield locator.dblclick({
              timeout: BROWSER_ACTION_TIMEOUT_MS
            });
          } else {
            yield locator.click({
              timeout: BROWSER_ACTION_TIMEOUT_MS,
              button: options.rightClick ? "right" : "left"
            });
          }
          if (candidateNode.id !== originalNode.id) {
            this.logger.info(
              {
                oldNode: originalNode.getLogForm(),
                newNode: candidateNode.getLogForm()
              },
              `Redirected click successfully to new element`
            );
          }
          return candidateNode;
        } catch (err) {
          this.logger.error(
            { err, node: candidateNode.getLogForm() },
            "Failed click or click timed out"
          );
          clickAttempts++;
          candidateNode = candidateNode.parent;
        }
      }
      throw new Error(
        `Max click redirection attempts exhausted on original element: ${originalNode.getLogForm()}`
      );
    });
  }
  /**
   * Currently unused, but could be useful for vision model integration.
   * Gets x/y position of an a11y node.
   */
  getElementLocation(backendNodeId) {
    return __async(this, null, function* () {
      const tree = yield this.cdpClient.send("DOMSnapshot.captureSnapshot", {
        computedStyles: [],
        includeDOMRects: true,
        includePaintOrder: true
      });
      let devicePixelRatio = yield this.page.evaluate(
        () => window.devicePixelRatio
      );
      if (process.platform === "darwin" && devicePixelRatio === 1) {
        devicePixelRatio = RETINA_WINDOW_SCALE_FACTOR;
      }
      const document2 = tree["documents"][0];
      const layout = document2["layout"];
      const nodes = document2["nodes"];
      const nodeNames = nodes["nodeName"] || [];
      const backendNodeIds = nodes["backendNodeId"] || [];
      const layoutNodeIndex = layout["nodeIndex"];
      const bounds = layout["bounds"];
      let cursor2 = -1;
      for (let i = 0; i < nodeNames.length; i++) {
        if (backendNodeIds[i] === backendNodeId) {
          cursor2 = layoutNodeIndex.indexOf(i);
          break;
        }
      }
      if (cursor2 === -1) {
        throw new Error(
          `Could not find any backend node with ID ${backendNodeId}`
        );
      }
      let [x = 0, y = 0, width = 0, height = 0] = bounds[cursor2];
      x /= devicePixelRatio;
      y /= devicePixelRatio;
      width /= devicePixelRatio;
      height /= devicePixelRatio;
      const centerX = x + width / 2;
      const centerY = y + height / 2;
      return { centerX, centerY };
    });
  }
  scrollUp() {
    return __async(this, null, function* () {
      yield this.page.evaluate(() => {
        (document.scrollingElement || document.body).scrollTop = (document.scrollingElement || document.body).scrollTop - window.innerHeight;
      });
      yield this.page.evaluate(() => {
        (document.scrollingElement || document.body).scrollTop = (document.scrollingElement || document.body).scrollTop + window.innerHeight;
      });
    });
  }
  scrollDown() {
    return __async(this, null, function* () {
      yield this.page.evaluate(() => {
        (document.scrollingElement || document.body).scrollTop = (document.scrollingElement || document.body).scrollTop + window.innerHeight;
      });
    });
  }
  goForward() {
    return __async(this, null, function* () {
      yield this.wrapPossibleNavigation(
        () => this.page.goForward({ timeout: MAX_LOAD_TIMEOUT_MS })
      );
      yield this.pageSetup();
    });
  }
  goBack() {
    return __async(this, null, function* () {
      yield this.wrapPossibleNavigation(
        () => this.page.goBack({ timeout: MAX_LOAD_TIMEOUT_MS })
      );
      yield this.pageSetup();
    });
  }
};
_ChromeBrowser.USER_AGENT = devices["Desktop Chrome"].userAgent;
var ChromeBrowser = _ChromeBrowser;

// ../../packages/web-agent/src/controller.ts
import dedent2 from "dedent";
import diffLines from "diff-lines";
var MAX_HISTORY_CHAR_LENGTH = 1e4;
var AgentController = class {
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
  resetState() {
    return __async(this, null, function* () {
      this.resetHistory();
      yield this.browser.navigate(this.browser.baseURL);
    });
  }
  /**
   * Get the browser state as a string
   */
  getBrowserState() {
    return __async(this, null, function* () {
      const a11yTree = yield this.browser.getA11yTree();
      return a11yTree.serialize();
    });
  }
  getSerializedHistory(url, currentBrowserState) {
    let history;
    if (this.config.useHistory === "diff") {
      history = this.getDiffHistory(url, currentBrowserState);
    } else {
      history = this.getListHistory();
    }
    return history;
  }
  splitUserGoal(type, goal, disableCache) {
    return __async(this, null, function* () {
      if (type === "AI_ACTION" /* AI_ACTION */ && goal.match(/[,!;.]|(?:and)|(?:then)/) && this.config.useGoalSplitter) {
        const granularInstructions = yield this.generator.getGranularGoals(
          { goal, url: this.browser.url },
          disableCache
        );
        this.pendingInstructions = granularInstructions.reverse();
      } else {
        this.pendingInstructions = [goal];
      }
    });
  }
  /**
   * Given previously executed commands, generate command for the current prompt.
   * Should only be used for AI action.
   */
  promptToCommand(type, goal, disableCache) {
    return __async(this, null, function* () {
      if (this.pendingInstructions.length === 0) {
        yield this.splitUserGoal(type, goal, disableCache);
      }
      const currInstruction = this.pendingInstructions[this.pendingInstructions.length - 1];
      this.logger.info({ goal: currInstruction }, "Starting prompt translation");
      const getBrowserStateStart = Date.now();
      const url = this.browser.url;
      const browserState = yield this.getBrowserState();
      this.logger.info(
        {
          duration: Date.now() - getBrowserStateStart,
          url
        },
        "Got browser state"
      );
      const numPrevious = this.commandHistory.length;
      this.commandHistory.push({
        state: "PENDING",
        browserStateBeforeCommand: browserState,
        urlBeforeCommand: url,
        type
      });
      const history = this.getSerializedHistory(url, browserState);
      const getCommandProposalStart = Date.now();
      const proposedCommand = yield this.generator.getProposedCommand(
        {
          url,
          numPrevious,
          browserState,
          history,
          goal: currInstruction,
          lastCommand: this.lastExecutedCommand
        },
        disableCache
      );
      this.logger.info(
        { duration: Date.now() - getCommandProposalStart },
        "Got proposed command"
      );
      if (proposedCommand.type === "SUCCESS" /* SUCCESS */) {
        const finishedInstruction = this.pendingInstructions.pop();
        this.logger.info(
          {
            finishedInstruction,
            remainingInstructions: this.pendingInstructions
          },
          "Removing pending instruction due to SUCCESS"
        );
        if (this.pendingInstructions.length !== 0) {
          this.commandHistory.pop();
          return this.promptToCommand(type, "", disableCache);
        }
      } else if (
        // on failure, we don't continue to execute
        proposedCommand.type === "FAILURE" /* FAILURE */
      ) {
        this.logger.info(
          {
            remainingInstructions: this.pendingInstructions
          },
          "Removing pending instructions due to FAILURE"
        );
        this.pendingInstructions = [];
      }
      return proposedCommand;
    });
  }
  locateElement(description, disableCache) {
    return __async(this, null, function* () {
      const locator = yield this.generator.getElementLocation(
        { browserState: yield this.getBrowserState(), goal: description },
        disableCache
      );
      if (locator.id < 0) {
        throw new Error(
          `Unable to locate element with description: ${description}`
        );
      }
      return locator;
    });
  }
  /**
   * Construct a detailed history that can be passed to the LLM.
   * History includes commands executed as well as browser state changes that occurred
   * at each step.
   */
  getDiffHistory(currentURL, currentPageState) {
    const doneCommands = this.history.filter(
      (h) => h.type === "AI_ACTION" /* AI_ACTION */
    );
    if (doneCommands.length === 0)
      return "<NONE/>";
    const historyLines = [
      "\nYou have already executed the following commands successfully (most recent listed first)",
      "-".repeat(10)
    ];
    doneCommands.reverse().forEach((log, i) => {
      historyLines.push(
        `COMMAND ${doneCommands.length - i}${i === 0 ? " (command just executed)" : ""}: ${log.serializedCommand}`
      );
      if (i === 0) {
        if (urlChanged(log.urlBeforeCommand, currentURL)) {
          historyLines.push(
            `  URL CHANGE: '${log.urlBeforeCommand}' -> '${currentURL}'`
          );
        } else {
          const browserStateDiff = diffLines(
            log.browserStateBeforeCommand,
            currentPageState,
            {
              n_surrounding: 1
            }
          );
          if (!browserStateDiff) {
            historyLines.push("PAGE CONTENT CHANGE: <NONE/>");
          } else if (browserStateDiff.length < MAX_HISTORY_CHAR_LENGTH) {
            historyLines.push("PAGE CONTENT CHANGE:");
            browserStateDiff.split("\n").forEach((l) => historyLines.push(`  ${l}`));
          } else {
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
    return dedent2`Here are the commands that you have successfully executed:
    ${this.commandHistory.filter((cmd) => cmd.type === "AI_ACTION" /* AI_ACTION */).map((cmd) => `- ${cmd.serializedCommand}`).join("\n")}`;
  }
  /**
   * Given a command, interact with the chromium browser to actually execute the actions
   * @param [stateless=false] Execute this command in a stateless fashion, without modifying any controller state such as
   * pending instructions. Useful when executing cached instructions.
   */
  executeCommand(command, disableCache, stateless = false) {
    return __async(this, null, function* () {
      const pendingHistory = this.commandHistory[this.commandHistory.length - 1];
      if (!stateless) {
        if (!pendingHistory || pendingHistory.state !== "PENDING") {
          throw new Error(
            "Executing command but there is no pending entry in the history"
          );
        }
      } else {
        yield this.browser.getA11yTree();
      }
      let result;
      try {
        const executionStart = Date.now();
        result = yield this.sendCommandToBrowser(command, disableCache);
        this.logger.info(
          { result, duration: Date.now() - executionStart },
          "Got execution result"
        );
      } catch (e) {
        if (e instanceof Error) {
          throw new BrowserExecutionError(`Failed to execute command: ${e}`, {
            cause: e
          });
        }
        throw new BrowserExecutionError(
          `Unexpected throw from executing command`,
          {
            cause: new Error(`${e}`)
          }
        );
      }
      if (result.succeedImmediately && !stateless) {
        this.pendingInstructions.pop();
        if (this.pendingInstructions.length > 0) {
          result.succeedImmediately = false;
        }
      }
      if (result.elementInteracted && "target" in command && !command.target.elementDescriptor) {
        command.target.elementDescriptor = result.elementInteracted;
      }
      if (!stateless) {
        pendingHistory.generatedStep = command;
        pendingHistory.serializedCommand = serializeAICommand(command);
        pendingHistory.state = "DONE";
      }
      return result;
    });
  }
  /**
   * Executes a preset command.
   * For most cases, the execution result contains metadata about the command executed.
   * For assertions, an AssertionResult with thoughts is returned.
   */
  executePresetStep(command, disableCache) {
    return __async(this, null, function* () {
      var _a, _b;
      const urlBeforeCommand = this.browser.url;
      switch (command.type) {
        case "AI_ASSERTION" /* AI_ASSERTION */: {
          let params;
          if (command.useVision) {
            params = {
              goal: command.assertion,
              url: urlBeforeCommand,
              // used for vision only
              screenshot: yield this.browser.screenshot(),
              // unused for visual assertion
              browserState: "",
              history: "",
              numPrevious: -1,
              lastCommand: null
            };
          } else {
            const browserState = yield this.getBrowserState();
            const history = this.getSerializedHistory(
              urlBeforeCommand,
              browserState
            );
            params = {
              goal: command.assertion,
              url: urlBeforeCommand,
              // used for text only
              browserState,
              history,
              lastCommand: this.lastExecutedCommand,
              numPrevious: this.commandHistory.length
            };
          }
          const result2 = yield this.generator.getAssertionResult(
            params,
            command.useVision,
            command.disableCache
          );
          if (result2.relevantElements) {
            void Promise.all(
              result2.relevantElements.map((id) => this.browser.highlight({ id }))
            );
          }
          return result2;
        }
        case "NAVIGATE" /* NAVIGATE */:
          yield this.browser.navigate(command.url);
          break;
        case "GO_BACK" /* GO_BACK */:
          yield this.browser.goBack();
          break;
        case "GO_FORWARD" /* GO_FORWARD */:
          yield this.browser.goForward();
          break;
        case "SCROLL_DOWN" /* SCROLL_DOWN */:
          yield this.browser.scrollDown();
          break;
        case "SCROLL_UP" /* SCROLL_UP */:
          yield this.browser.scrollUp();
          break;
        case "WAIT" /* WAIT */:
          yield this.browser.wait(command.delay * 1e3);
          break;
        case "REFRESH" /* REFRESH */:
          yield this.browser.refresh();
          break;
        case "CLICK" /* CLICK */: {
          let id;
          if (command.target.a11yData) {
            id = (_a = command.target.a11yData) == null ? void 0 : _a.id;
          } else {
            const locator = yield this.locateElement(
              command.target.elementDescriptor,
              disableCache
            );
            id = locator.id;
          }
          const elementInteracted = yield this.browser.click(
            {
              id
            },
            {
              doubleClick: command.doubleClick,
              rightClick: command.rightClick
            }
          );
          const result2 = {
            type: "command" /* COMMAND */,
            urlAfterCommand: this.browser.url,
            succeedImmediately: false,
            elementInteracted
          };
          if (urlChanged(urlBeforeCommand, result2.urlAfterCommand)) {
            result2.succeedImmediately = true;
            result2.succeedImmediatelyReason = "URL changed";
          }
          return result2;
        }
        case "SELECT_OPTION" /* SELECT_OPTION */: {
          let id;
          if (command.target.a11yData) {
            id = (_b = command.target.a11yData) == null ? void 0 : _b.id;
          } else {
            const locator = yield this.locateElement(
              command.target.elementDescriptor,
              disableCache
            );
            id = locator.id;
          }
          const elementInteracted = yield this.browser.selectOption(
            {
              id
            },
            command.option
          );
          return {
            type: "command" /* COMMAND */,
            succeedImmediately: false,
            urlAfterCommand: this.browser.url,
            elementInteracted
          };
        }
        case "TYPE" /* TYPE */: {
          let elementInteracted;
          const target = command.target;
          if (target.a11yData) {
            elementInteracted = yield this.browser.click({
              id: target.a11yData.id
            });
          } else if (target.elementDescriptor.length > 0) {
            const locator = yield this.locateElement(
              command.target.elementDescriptor,
              disableCache
            );
            elementInteracted = yield this.browser.click({
              id: locator.id
            });
          }
          yield this.browser.type(command.value, {
            clearContent: command.clearContent,
            pressKeysSequentially: command.pressKeysSequentially
          });
          if (command.pressEnter) {
            yield this.browser.press("Enter");
          }
          const result2 = {
            type: "command" /* COMMAND */,
            urlAfterCommand: this.browser.url,
            succeedImmediately: false,
            elementInteracted
          };
          if (urlChanged(urlBeforeCommand, result2.urlAfterCommand)) {
            result2.succeedImmediately = true;
            result2.succeedImmediatelyReason = "URL changed";
          }
          return result2;
        }
        case "PRESS" /* PRESS */:
          yield this.browser.press(command.value);
          const result = {
            type: "command" /* COMMAND */,
            urlAfterCommand: this.browser.url,
            succeedImmediately: false
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
        type: "command" /* COMMAND */,
        succeedImmediately: false,
        urlAfterCommand: this.browser.url
      };
    });
  }
  sendCommandToBrowser(command, disableCache) {
    return __async(this, null, function* () {
      switch (command.type) {
        case "SUCCESS" /* SUCCESS */:
        case "FAILURE" /* FAILURE */:
          return {
            type: "command" /* COMMAND */,
            succeedImmediately: false,
            urlAfterCommand: this.browser.url
          };
        default:
          const result = yield this.executePresetStep(command, disableCache);
          if (result.type !== "command") {
            throw new Error(
              `Unexpected preset result type ${result.type} from executing AI action`
            );
          }
          return result;
      }
    });
  }
};

// ../../packages/web-agent/src/generators/api-generator.ts
import fetchRetry from "fetch-retry";
import * as z16 from "zod";
var fetch = fetchRetry(global.fetch);
var API_VERSION = "v1";
var APIGenerator = class {
  constructor(params) {
    this.baseURL = params.baseURL;
    this.apiKey = params.apiKey;
  }
  getElementLocation(context, disableCache) {
    return __async(this, null, function* () {
      const result = yield this.sendRequest(
        `/${API_VERSION}/web-agent/locate-element`,
        {
          browserState: context.browserState,
          goal: context.goal,
          disableCache
        }
      );
      return AILocatorSchema.parse(result);
    });
  }
  getAssertionResult(context, useVision, disableCache) {
    return __async(this, null, function* () {
      var _a;
      if (useVision) {
        const result2 = yield this.sendRequest(
          `/${API_VERSION}/web-agent/assertion`,
          {
            url: context.url,
            goal: context.goal,
            screenshot: (_a = context.screenshot) == null ? void 0 : _a.toString("base64"),
            disableCache,
            vision: true
          }
        );
        return ExecuteAssertionResultSchema.parse(result2);
      }
      const result = yield this.sendRequest(
        `/${API_VERSION}/web-agent/assertion`,
        {
          url: context.url,
          browserState: context.browserState,
          goal: context.goal,
          history: context.history,
          numPrevious: context.numPrevious,
          lastCommand: context.lastCommand,
          disableCache,
          vision: false
        }
      );
      return ExecuteAssertionResultSchema.parse(result);
    });
  }
  getProposedCommand(context, disableCache) {
    return __async(this, null, function* () {
      const result = yield this.sendRequest(
        `/${API_VERSION}/web-agent/next-command`,
        {
          url: context.url,
          browserState: context.browserState,
          goal: context.goal,
          history: context.history,
          numPrevious: context.numPrevious,
          lastCommand: context.lastCommand,
          disableCache
        }
      );
      return AICommandSchema.parse(result);
    });
  }
  getGranularGoals(context, disableCache) {
    return __async(this, null, function* () {
      const result = yield this.sendRequest(
        `/${API_VERSION}/web-agent/split-goal`,
        {
          url: context.url,
          goal: context.goal,
          disableCache
        }
      );
      return z16.string().array().parse(result);
    });
  }
  sendRequest(path, body) {
    return __async(this, null, function* () {
      const response = yield fetch(`${this.baseURL}${path}`, {
        retries: 3,
        retryDelay: 1e3,
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`
        }
      });
      if (!response.ok) {
        throw new Error(
          `Request to ${path} failed with status ${response.status}: ${yield response.text()}`
        );
      }
      return response.json();
    });
  }
};
export {
  APIGenerator,
  AgentController,
  ChromeBrowser
};
