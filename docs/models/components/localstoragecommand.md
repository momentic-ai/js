# LocalStorageCommand

## Example Usage

```typescript
import { LocalStorageCommand } from "momentic/models/components";

let value: LocalStorageCommand = {
  id: "ea426555-ba3c-4287-84ed-53b88f3a8d8f",
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `key`                                               | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `value`                                             | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |