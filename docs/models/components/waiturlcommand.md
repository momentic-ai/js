# WaitUrlCommand

## Example Usage

```typescript
import { WaitUrlCommand } from "@momentic/js/models/components";

let value: WaitUrlCommand = {
  id: "61d01747-6360-4a15-9b6a-660659a1adea",
  url: "https://scratchy-existence.name",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds to wait for the URL to match            |