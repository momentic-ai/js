# NetworkEntriesPerPage

## Example Usage

```typescript
import { NetworkEntriesPerPage } from "@momentic/js/models/components";

let value: NetworkEntriesPerPage = {
  startedDateTime: "<value>",
  request: {
    method: "<value>",
    url: "https://competent-provision.biz",
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
  },
  timings: {
    send: 1831.91,
    wait: 5865.13,
    receive: 201.08,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pageref`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `startedDateTime`                                                      | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `time`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `request`                                                              | [components.Request](../../models/components/request.md)               | :heavy_check_mark:                                                     | N/A                                                                    |
| `response`                                                             | [components.Response](../../models/components/response.md)             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `cache`                                                                | [components.DebugDataCache](../../models/components/debugdatacache.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `timings`                                                              | [components.Timings](../../models/components/timings.md)               | :heavy_check_mark:                                                     | N/A                                                                    |
| `serverIPAddress`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `connection`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `comment`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |