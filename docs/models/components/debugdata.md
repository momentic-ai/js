# DebugData

## Example Usage

```typescript
import { DebugData } from "momentic/models/components";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 5288.95,
        text: "<value>",
        type: "<value>",
        tabIndex: 4799.77,
      },
    ],
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `logsPerPage`                                                        | [components.LogsPerPage](../../models/components/logsperpage.md)[][] | :heavy_check_mark:                                                   | N/A                                                                  |