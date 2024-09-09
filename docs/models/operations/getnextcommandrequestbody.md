# GetNextCommandRequestBody

## Example Usage

```typescript
import { GetNextCommandRequestBody } from "momentic/models/operations";

let value: GetNextCommandRequestBody = {
  goal: "<value>",
  url: "https://tall-self-control.org",
  browserState: "<value>",
  history: "<value>",
  numPrevious: 2817.3,
  lastCommand: {
    type: "IFRAME",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `goal`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `browserState`                                                   | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `history`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `numPrevious`                                                    | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `lastCommand`                                                    | [operations.LastCommand](../../models/operations/lastcommand.md) | :heavy_check_mark:                                               | N/A                                                              |
| `screenshot`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `disableCache`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |