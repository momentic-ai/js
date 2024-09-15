# WaitUrlCommand

## Example Usage

```typescript
import { WaitUrlCommand } from "@momentic/js/models/components";

let value: WaitUrlCommand = {
  id: "adeaab58-51d6-4c64-9b08-b61891baa0fe",
  url: "http://rectangular-sucker.org",
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