# AuthLoadCommand

## Example Usage

```typescript
import { AuthLoadCommand } from "@momentic/js/models/components";

let value: AuthLoadCommand = {
  id: "353cc8f2-e12b-4196-8bec-d048634f450d",
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