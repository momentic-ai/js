# Three

## Example Usage

```typescript
import { Three } from "momentic/models/components";

let value: Three = {
  condition: "EXISTS",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `negated`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `condition`                                                  | [components.Condition](../../models/components/condition.md) | :heavy_check_mark:                                           | N/A                                                          |