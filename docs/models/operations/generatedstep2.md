# GeneratedStep2

## Example Usage

```typescript
import { GeneratedStep2 } from "momentic/models/operations";

let value: GeneratedStep2 = {
  id: "a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d",
  value: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `thoughts`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | unique identifier to this step, used for step cache                            |
| `useSelector`                                                                  | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `useXY`                                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `force`                                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disableCache`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | disable element caching for this step                                          |
| `iframeUrl`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | url or url regex for the iframe                                                |
| `clearContent`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `pressKeysSequentially`                                                        | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `pressEnter`                                                                   | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `target`                                                                       | *operations.GetNextCommandGeneratedStepTarget*                                 | :heavy_minus_sign:                                                             | N/A                                                                            |
| `value`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `cache`                                                                        | [operations.GeneratedStepCache](../../models/operations/generatedstepcache.md) | :heavy_minus_sign:                                                             | N/A                                                                            |