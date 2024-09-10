# PresetAction

## Example Usage

```typescript
import { PresetAction } from "momentic/models/components";

let value: PresetAction = {
  command: {
    id: "39205929-396f-4ea7-996e-b10faaa2352c",
    fromTarget: {
      elementDescriptor: "<value>",
    },
    toTarget: {
      percentXYLocation: {
        percentX: 3637.11,
        percentY: 3250.47,
      },
    },
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