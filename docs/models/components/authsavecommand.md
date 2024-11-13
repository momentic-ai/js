# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "@momentic/js/models/components";

let value: AuthSaveCommand = {
  id: "81df7016-e2d0-47a0-b9f2-b92008fab792",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |