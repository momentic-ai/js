# AuthLoadCommand

## Example Usage

```typescript
import { AuthLoadCommand } from "momentic/models/components";

let value: AuthLoadCommand = {
  id: "6b5a7342-9cdb-41a8-822b-b679d2322715",
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