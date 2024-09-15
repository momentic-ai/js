# ElementContentAssertion

## Example Usage

```typescript
import { ElementContentAssertion } from "@momentic/js/models/components";

let value: ElementContentAssertion = {
  operation: "EQUALS",
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