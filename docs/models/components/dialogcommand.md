# DialogCommand

## Example Usage

```typescript
import { DialogCommand } from "momentic/models/components";

let value: DialogCommand = {
  id: "c42e141a-ac36-46c8-9d6b-144290747477",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `action`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |