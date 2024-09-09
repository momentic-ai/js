# ResponseBody9

## Example Usage

```typescript
import { ResponseBody9 } from "momentic/models/operations";

let value: ResponseBody9 = {
  id: "f5fce6c5-5614-46c3-a250-fb008c42e141",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `thoughts`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | unique identifier to this step, used for step cache                                  |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `condition`                                                                          | [operations.ResponseBodyCondition](../../models/operations/responsebodycondition.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |