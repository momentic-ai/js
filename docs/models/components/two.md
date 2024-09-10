# Two

## Example Usage

```typescript
import { Two } from "momentic/models/components";

let value: Two = {
  operation: "CONTAINS",
  attr: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `negated`                                                                      | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `operation`                                                                    | [components.AssertionOperation](../../models/components/assertionoperation.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `attr`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |