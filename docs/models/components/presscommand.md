# PressCommand

## Example Usage

```typescript
import { PressCommand } from "@momentic/js/models/components";

let value: PressCommand = {
  id: "7b2374d9-5dcf-4d62-ad05-efab08851356",
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