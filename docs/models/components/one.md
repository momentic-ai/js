# One

## Example Usage

```typescript
import { One } from "momentic/models/components";

let value: One = {
  operation: "STARTS_WITH",
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `negated`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `operation`                                                  | [components.Operation](../../models/components/operation.md) | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |