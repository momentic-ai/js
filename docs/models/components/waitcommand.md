# WaitCommand

## Example Usage

```typescript
import { WaitCommand } from "@momentic/js/models/components";

let value: WaitCommand = {
  id: "fc1b4512-c103-4264-8dc2-f615199ebfd0",
  delay: 9358.33,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `delay`                                             | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |