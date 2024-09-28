# WaitCommand

## Example Usage

```typescript
import { WaitCommand } from "@momentic/js/models/components";

let value: WaitCommand = {
  id: "cc060333-54f5-4e2c-9070-cf0ec5e461a0",
  delay: 6831.92,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `delay`                                             | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |