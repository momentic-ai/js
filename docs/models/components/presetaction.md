# PresetAction

## Example Usage

```typescript
import { PresetAction } from "@momentic/js/models/components";

let value: PresetAction = {
  command: {
    id: "f39993f7-db4d-46e9-9ebb-8fa6904a4962",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `index`                                                   | *number*                                                  | :heavy_minus_sign:                                        | global index within a test (in-order traversal)           |
| `id`                                                      | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `skipped`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       |
| `envKey`                                                  | *string*                                                  | :heavy_minus_sign:                                        | key in the environment to save the result of this step to |
| `type`                                                    | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `command`                                                 | *components.Command*                                      | :heavy_check_mark:                                        | N/A                                                       |