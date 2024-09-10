# RequestCommand

## Example Usage

```typescript
import { RequestCommand } from "momentic/models/components";

let value: RequestCommand = {
  id: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
  url: "http://crisp-amazement.info",
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