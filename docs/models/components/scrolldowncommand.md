# ScrollDownCommand

## Example Usage

```typescript
import { ScrollDownCommand } from "@momentic/js/models/components";

let value: ScrollDownCommand = {
  id: "87cfc1c1-3238-4a7f-93cd-8796866b12dc",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `thoughts`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | unique identifier to this step, used for step cache                          |
| `useSelector`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `force`                                                                      | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disableCache`                                                               | *boolean*                                                                    | :heavy_minus_sign:                                                           | disable element caching for this step                                        |
| `iframeUrl`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | url or url regex for the iframe                                              |
| `cache`                                                                      | [components.SingleTargetCache](../../models/components/singletargetcache.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `target`                                                                     | *components.ElementTarget*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `deltaY`                                                                     | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |