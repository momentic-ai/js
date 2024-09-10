# DialogCommand

## Example Usage

```typescript
import { DialogCommand } from "momentic/models/components";

let value: DialogCommand = {
  id: "b1442907-4747-478a-bbd4-66d28c10ab3c",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |