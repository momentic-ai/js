# DebugData

## Example Usage

```typescript
import { DebugData } from "momentic/models/operations";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 9636.63,
        text: "<value>",
        type: "<value>",
        tabIndex: 2726.56,
      },
    ],
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `logsPerPage`                                                        | [operations.LogsPerPage](../../models/operations/logsperpage.md)[][] | :heavy_check_mark:                                                   | N/A                                                                  |