# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "@momentic/js/models/components";

let value: AuthSaveCommand = {
  id: "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |