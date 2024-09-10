# PresetAction

## Example Usage

```typescript
import { PresetAction } from "momentic/models/components";

let value: PresetAction = {
  command: {
    id: "cc78ca1b-a928-4fc8-9674-2cb739205929",
    target: {
      elementDescriptor: "<value>",
    },
    assertion: {
      operation: "STARTS_WITH",
      attr: "<value>",
      value: "<value>",
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