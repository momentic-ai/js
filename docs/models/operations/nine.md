# Nine

## Example Usage

```typescript
import { Nine } from "momentic/models/operations";

let value: Nine = {
  id: "d019da1f-fe78-4f09-bb00-74f15471b5e6",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `thoughts`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | unique identifier to this step, used for step cache          |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `condition`                                                  | [operations.Condition](../../models/operations/condition.md) | :heavy_minus_sign:                                           | N/A                                                          |