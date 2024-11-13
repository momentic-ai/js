# Request

## Example Usage

```typescript
import { Request } from "@momentic/js/models/components";

let value: Request = {
  method: "<value>",
  url: "https://better-poppy.name/",
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
  queryString: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `method`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `url`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `httpVersion`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `cookies`                                                          | [components.Cookies](../../models/components/cookies.md)[]         | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | [components.Headers](../../models/components/headers.md)[]         | :heavy_check_mark:                                                 | N/A                                                                |
| `queryString`                                                      | [components.QueryString](../../models/components/querystring.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `postData`                                                         | [components.PostData](../../models/components/postdata.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `headersSize`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `bodySize`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `comment`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |