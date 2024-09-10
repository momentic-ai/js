# DragCommand

## Example Usage

```typescript
import { DragCommand } from "momentic/models/components";

let value: DragCommand = {
  id: "dca42519-04e5-423c-be0b-c7178e4796f2",
  fromTarget: {
    percentXYLocation: {
      percentX: 4752.89,
      percentY: 353.62,
    },
  },
  toTarget: {
    percentXYLocation: {
      percentX: 4304.02,
      percentY: 5564.29,
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `thoughts`                                           | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | unique identifier to this step, used for step cache  |
| `useSelector`                                        | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `useXY`                                              | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `force`                                              | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `disableCache`                                       | *boolean*                                            | :heavy_minus_sign:                                   | disable element caching for this step                |
| `iframeUrl`                                          | *string*                                             | :heavy_minus_sign:                                   | url or url regex for the iframe                      |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `fromTarget`                                         | *components.ElementTarget*                           | :heavy_check_mark:                                   | N/A                                                  |
| `toTarget`                                           | *components.ElementTarget*                           | :heavy_check_mark:                                   | N/A                                                  |
| `hoverSeconds`                                       | *number*                                             | :heavy_minus_sign:                                   | Seconds to hover the object before dropping          |
| `cache`                                              | [components.Cache](../../models/components/cache.md) | :heavy_minus_sign:                                   | N/A                                                  |