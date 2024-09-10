# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "momentic/models/components";

let value: AuthSaveCommand = {
  id: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |