# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "@momentic/js/models/components";

let value: AuthSaveCommand = {
  id: "34e3cce1-3b34-4227-b156-0617dd19d3ce",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |