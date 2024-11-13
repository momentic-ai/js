# Response

## Example Usage

```typescript
import { Response } from "@momentic/js/models/components";

let value: Response = {
  status: 2653.89,
  statusText: "<value>",
  cookies: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  headers: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  content: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `status`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `statusText`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `httpVersion`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `cookies`                                                                    | [components.DebugDataCookies](../../models/components/debugdatacookies.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `headers`                                                                    | [components.DebugDataHeaders](../../models/components/debugdataheaders.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `content`                                                                    | [components.Content](../../models/components/content.md)                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `redirectURL`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `headersSize`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `bodySize`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `comment`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |