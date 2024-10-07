# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "@momentic/js/models/components";

let value: AuthSaveCommand = {
  id: "8f1c453c-2da0-4cae-ab8d-484f305808db",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |