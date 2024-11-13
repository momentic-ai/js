# DebugData

## Example Usage

```typescript
import { DebugData } from "@momentic/js/models/components";

let value: DebugData = {
  logsPerPage: [
    [
      {
        timestamp: 8289.40,
        text: "<value>",
        type: "<value>",
        tabIndex: 46.95,
      },
    ],
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `logsPerPage`                                                                                          | [components.ConsoleLog](../../models/components/consolelog.md)[][]                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `networkEntriesPerPage`                                                                                | Record<string, [components.NetworkEntriesPerPage](../../models/components/networkentriesperpage.md)>[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |