# VisualDiffCommand

## Example Usage

```typescript
import { VisualDiffCommand } from "@momentic/js/models/components";

let value: VisualDiffCommand = {
  id: "5f0597a6-0ff2-4a54-a31e-94764a3e865e",
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
| `threshold`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | default 0.1                                                                  |
| `target`                                                                     | *components.ElementTarget*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `screenshot`                                                                 | [components.Screenshot](../../models/components/screenshot.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cache`                                                                      | [components.SingleTargetCache](../../models/components/singletargetcache.md) | :heavy_minus_sign:                                                           | N/A                                                                          |