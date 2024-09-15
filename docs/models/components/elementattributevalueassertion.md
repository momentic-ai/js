# ElementAttributeValueAssertion

## Example Usage

```typescript
import { ElementAttributeValueAssertion } from "@momentic/js/models/components";

let value: ElementAttributeValueAssertion = {
  operation: "STARTS_WITH",
  attr: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `negated`                                                                                                                | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `operation`                                                                                                              | [components.ElementAttributeValueAssertionOperation](../../models/components/elementattributevalueassertionoperation.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `attr`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `value`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |