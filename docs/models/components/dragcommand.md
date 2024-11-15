# DragCommand

## Example Usage

```typescript
import { DragCommand } from "@momentic/js/models/components";

let value: DragCommand = {
  id: "1f0e4c04-b816-469a-bd76-2cb68a20597b",
  fromTarget: {
    elementDescriptor: "<value>",
  },
  toTarget: {
    elementDescriptor: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `thoughts`                                           | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | unique identifier to this step, used for step cache  |
| `useSelector`                                        | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `force`                                              | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `disableCache`                                       | *boolean*                                            | :heavy_minus_sign:                                   | disable element caching for this step                |
| `iframeUrl`                                          | *string*                                             | :heavy_minus_sign:                                   | url or url regex for the iframe                      |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `fromTarget`                                         | *components.ElementTarget*                           | :heavy_check_mark:                                   | N/A                                                  |
| `toTarget`                                           | *components.ElementTarget*                           | :heavy_check_mark:                                   | N/A                                                  |
| `hoverSeconds`                                       | *number*                                             | :heavy_minus_sign:                                   | Seconds to hover the object before dropping          |
| `cache`                                              | [components.Cache](../../models/components/cache.md) | :heavy_minus_sign:                                   | N/A                                                  |