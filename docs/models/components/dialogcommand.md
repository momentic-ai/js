# DialogCommand

## Example Usage

```typescript
import { DialogCommand } from "momentic/models/components";

let value: DialogCommand = {
  id: "d9f5fce6-c556-4146-83e2-50fb008c42e1",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |