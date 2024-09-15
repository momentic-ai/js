# ElementExistenceAssertion

## Example Usage

```typescript
import { ElementExistenceAssertion } from "@momentic/js/models/components";

let value: ElementExistenceAssertion = {
  condition: "ENABLED",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `negated`                                                    | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `condition`                                                  | [components.Condition](../../models/components/condition.md) | :heavy_check_mark:                                           | N/A                                                          |