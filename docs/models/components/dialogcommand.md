# DialogCommand

## Example Usage

```typescript
import { DialogCommand } from "@momentic/js/models/components";

let value: DialogCommand = {
  id: "7e0259d5-40d6-49f0-b2cc-c8f6916b3fa4",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |