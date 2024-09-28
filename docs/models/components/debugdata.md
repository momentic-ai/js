# DebugData

## Example Usage

```typescript
import { DebugData } from "@momentic/js/models/components";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 7991.59,
        text: "<value>",
        type: "<value>",
        tabIndex: 4614.79,
      },
    ],
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `logsPerPage`                                                      | [components.ConsoleLog](../../models/components/consolelog.md)[][] | :heavy_check_mark:                                                 | N/A                                                                |