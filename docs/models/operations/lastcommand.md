# LastCommand

## Example Usage

```typescript
import { LastCommand } from "momentic/models/operations";

let value: LastCommand = {
  type: "PRESET_ACTION",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `generatedStep`                                    | *operations.GeneratedStep*                         | :heavy_minus_sign:                                 | N/A                                                |
| `serializedCommand`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `elementInteracted`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |