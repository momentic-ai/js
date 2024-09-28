# PressCommand

## Example Usage

```typescript
import { PressCommand } from "@momentic/js/models/components";

let value: PressCommand = {
  id: "ec5537fe-10e8-43aa-a140-323a012544cf",
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