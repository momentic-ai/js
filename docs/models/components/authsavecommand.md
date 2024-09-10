# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "momentic/models/components";

let value: AuthSaveCommand = {
  id: "3f73ef7f-bc7a-4bd7-8dd3-9c0f5d2cff7c",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |