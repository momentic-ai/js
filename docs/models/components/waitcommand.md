# WaitCommand

## Example Usage

```typescript
import { WaitCommand } from "@momentic/js/models/components";

let value: WaitCommand = {
  id: "7987c226-51dc-48f1-9c45-3c2da0caeb8d",
  delay: 5469.50,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `delay`                                             | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |