# Condition

## Example Usage

```typescript
import { Condition } from "momentic/models/operations";

let value: Condition = {
  id: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
  assertion: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `assertion`                                         | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `disableCache`                                      | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds to wait for assertion to be true        |