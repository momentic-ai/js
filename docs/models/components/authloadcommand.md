# AuthLoadCommand

## Example Usage

```typescript
import { AuthLoadCommand } from "@momentic/js/models/components";

let value: AuthLoadCommand = {
  id: "18bc0bdb-878b-4e9e-bb18-44559a420920",
  storageState: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `storageState`                                      | *string*                                            | :heavy_check_mark:                                  | JSON string auth state                              |