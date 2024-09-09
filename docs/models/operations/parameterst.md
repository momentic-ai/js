# ParametersT

## Example Usage

```typescript
import { ParametersT } from "momentic/models/operations";

let value: ParametersT = {
  name: "<value>",
  defaultValue: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `required`                                                                   | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `defaultValue`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | this is not optional because we need a value when the editor is first loaded |