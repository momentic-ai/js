# WaitUrlCommand

## Example Usage

```typescript
import { WaitUrlCommand } from "momentic/models/components";

let value: WaitUrlCommand = {
  id: "a660659a-1ade-4aab-9851-d6c645b08b61",
  url: "https://overjoyed-bite.net",
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