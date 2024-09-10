# AuthLoadCommand

## Example Usage

```typescript
import { AuthLoadCommand } from "momentic/models/components";

let value: AuthLoadCommand = {
  id: "90f3443a-1108-4e0a-9cf4-b921879fce95",
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