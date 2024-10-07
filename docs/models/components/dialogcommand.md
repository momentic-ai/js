# DialogCommand

## Example Usage

```typescript
import { DialogCommand } from "@momentic/js/models/components";

let value: DialogCommand = {
  id: "680293d5-11e1-42d4-aad9-fb18bc0bdb87",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |