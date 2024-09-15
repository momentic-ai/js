# DebugData

## Example Usage

```typescript
import { DebugData } from "momentic/models/components";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 3834.41,
        text: "<value>",
        type: "<value>",
        tabIndex: 4776.65,
      },
    ],
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `logsPerPage`                                                      | [components.ConsoleLog](../../models/components/consolelog.md)[][] | :heavy_check_mark:                                                 | N/A                                                                |