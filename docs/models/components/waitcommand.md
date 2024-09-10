# WaitCommand

## Example Usage

```typescript
import { WaitCommand } from "momentic/models/components";

let value: WaitCommand = {
  id: "597a60ff-2a54-4a31-a947-64a3e865e795",
  delay: 4317.85,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `delay`                                             | *number*                                            | :heavy_check_mark:                                  | N/A                                                 |