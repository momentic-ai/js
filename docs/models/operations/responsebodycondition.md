# ResponseBodyCondition

## Example Usage

```typescript
import { ResponseBodyCondition } from "momentic/models/operations";

let value: ResponseBodyCondition = {
  id: "c0f5d2cf-f7c7-40a4-9626-d436813f16d9",
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