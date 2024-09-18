# DebugData

## Example Usage

```typescript
import { DebugData } from "@momentic/js/models/components";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 7917.25,
        text: "<value>",
        type: "<value>",
        tabIndex: 8121.69,
      },
    ],
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `logsPerPage`                                                      | [components.ConsoleLog](../../models/components/consolelog.md)[][] | :heavy_check_mark:                                                 | N/A                                                                |