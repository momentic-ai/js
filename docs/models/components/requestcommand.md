# RequestCommand

## Example Usage

```typescript
import { RequestCommand } from "momentic/models/components";

let value: RequestCommand = {
  id: "51862065-e904-4f3b-9194-b8abf603a79f",
  url: "https://talkative-volcano.org",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `method`                                            | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `headers`                                           | Record<string, *string*>                            | :heavy_minus_sign:                                  | N/A                                                 |
| `params`                                            | Record<string, *string*>                            | :heavy_minus_sign:                                  | N/A                                                 |
| `body`                                              | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds to wait for the request to complete     |