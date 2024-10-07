# ElementAssertionCommand

## Example Usage

```typescript
import { ElementAssertionCommand } from "@momentic/js/models/components";

let value: ElementAssertionCommand = {
  id: "a09f2b92-008f-4ab7-b92e-cf432fc28622",
  target: {
    elementDescriptor: "<value>",
  },
  assertion: {
    condition: "EXISTS",
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
| `assertion`                                                                  | *components.ManualElementAssertion*                                          | :heavy_check_mark:                                                           | N/A                                                                          |
| `cache`                                                                      | [components.SingleTargetCache](../../models/components/singletargetcache.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `timeout`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | max seconds to wait for the assertion to be true                             |