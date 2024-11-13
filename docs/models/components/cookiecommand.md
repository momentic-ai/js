# CookieCommand

## Example Usage

```typescript
import { CookieCommand } from "@momentic/js/models/components";

let value: CookieCommand = {
  id: "59e2e0a6-cb7a-48c7-a849-492266420047",
  value: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `value`                                             | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |