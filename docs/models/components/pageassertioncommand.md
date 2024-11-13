# PageAssertionCommand

## Example Usage

```typescript
import { PageAssertionCommand } from "@momentic/js/models/components";

let value: PageAssertionCommand = {
  id: "734c4679-f354-4515-9e45-fb8c1713256f",
  assertion: {
    value: "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `assertion`                                         | *components.ManualPageAssertion*                    | :heavy_check_mark:                                  | N/A                                                 |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | url or url regex for the iframe                     |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | max seconds to wait for the assertion to be true    |