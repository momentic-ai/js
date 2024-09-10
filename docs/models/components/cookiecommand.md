# CookieCommand

## Example Usage

```typescript
import { CookieCommand } from "momentic/models/components";

let value: CookieCommand = {
  id: "46c3e250-fb00-48c4-ae14-1aac366c8dd6",
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