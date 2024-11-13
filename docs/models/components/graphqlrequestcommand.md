# GraphQLRequestCommand

## Example Usage

```typescript
import { GraphQLRequestCommand } from "@momentic/js/models/components";

let value: GraphQLRequestCommand = {
  id: "6e41b690-fe90-46fa-a27f-8094168088c6",
  url: "https://unpleasant-gloom.name",
  query: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `headers`                                           | Record<string, *string*>                            | :heavy_minus_sign:                                  | N/A                                                 |
| `query`                                             | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `variables`                                         | Record<string, *string*>                            | :heavy_minus_sign:                                  | N/A                                                 |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds to wait for the request to complete     |