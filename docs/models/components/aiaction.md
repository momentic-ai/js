# AIAction

## Example Usage

```typescript
import { AIAction } from "@momentic/js/models/components";

let value: AIAction = {
  id: "<id>",
  text: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `index`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | global index within a test (in-order traversal)                      |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `skipped`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `envKey`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | key in the environment to save the result of this step to            |
| `type`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `text`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `steps`                                                              | [components.PresetAction](../../models/components/presetaction.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |