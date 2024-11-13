# PresetAction

## Example Usage

```typescript
import { PresetAction } from "@momentic/js/models/components";

let value: PresetAction = {
  id: "<id>",
  command: {
    id: "ef3a40c5-69da-4d4c-a2fa-3fb438036574",
    fileSource: {
      url: "https://clear-cut-league.com",
    },
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `index`                                                   | *number*                                                  | :heavy_minus_sign:                                        | global index within a test (in-order traversal)           |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `skipped`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | N/A                                                       |
| `envKey`                                                  | *string*                                                  | :heavy_minus_sign:                                        | key in the environment to save the result of this step to |
| `type`                                                    | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `command`                                                 | *components.Command*                                      | :heavy_check_mark:                                        | N/A                                                       |