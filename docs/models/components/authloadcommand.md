# AuthLoadCommand

## Example Usage

```typescript
import { AuthLoadCommand } from "@momentic/js/models/components";

let value: AuthLoadCommand = {
  id: "8e0adcf4-b921-4879-bce9-53f73ef7fbc7",
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