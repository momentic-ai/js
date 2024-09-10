# WaitCommand

## Example Usage

```typescript
import { WaitCommand } from "momentic/models/components";

let value: WaitCommand = {
  id: "bfaad4f9-efc1-4b45-92c1-032648dc2f61",
  delay: 3251.18,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `delay`                                             | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |