# CaptchaCommand

## Example Usage

```typescript
import { CaptchaCommand } from "momentic/models/components";

let value: CaptchaCommand = {
  id: "4b921879-fce9-453f-b3ef-7fbc7abd74dd",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `useSelector`                                       | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `useXY`                                             | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `force`                                             | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `disableCache`                                      | *boolean*                                           | :heavy_minus_sign:                                  | disable element caching for this step               |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | url or url regex for the iframe                     |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |