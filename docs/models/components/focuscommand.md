# FocusCommand

## Example Usage

```typescript
import { FocusCommand } from "@momentic/js/models/components";

let value: FocusCommand = {
  id: "c1b4512c-1032-4648-9c2f-615199ebfd0e",
  target: {
    percentXYLocation: {
      percentX: 9834.27,
      percentY: 8918.01,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `thoughts`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | unique identifier to this step, used for step cache                          |
| `useSelector`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `useXY`                                                                      | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `force`                                                                      | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disableCache`                                                               | *boolean*                                                                    | :heavy_minus_sign:                                                           | disable element caching for this step                                        |
| `iframeUrl`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | url or url regex for the iframe                                              |
| `type`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `target`                                                                     | *components.ElementTarget*                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `cache`                                                                      | [components.SingleTargetCache](../../models/components/singletargetcache.md) | :heavy_minus_sign:                                                           | N/A                                                                          |