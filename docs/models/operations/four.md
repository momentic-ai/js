# Four

## Example Usage

```typescript
import { Four } from "momentic/models/operations";

let value: Four = {
  id: "c5fbb258-7053-4202-873d-5fe9b90c2890",
  target: {
    percentXYLocation: {
      percentX: 6990.98,
      percentY: 2378.93,
    },
  },
  option: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `thoughts`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | unique identifier to this step, used for step cache                                                        |
| `useSelector`                                                                                              | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `useXY`                                                                                                    | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `force`                                                                                                    | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `disableCache`                                                                                             | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | disable element caching for this step                                                                      |
| `iframeUrl`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | url or url regex for the iframe                                                                            |
| `type`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `target`                                                                                                   | *operations.GetNextCommandGeneratedStepRequestRequestBodyTarget*                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `option`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `cache`                                                                                                    | [operations.GetNextCommandGeneratedStepCache](../../models/operations/getnextcommandgeneratedstepcache.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |