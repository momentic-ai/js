# GoBackCommand

## Example Usage

```typescript
import { GoBackCommand } from "momentic/models/components";

let value: GoBackCommand = {
  id: "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |