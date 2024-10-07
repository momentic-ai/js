# PageAssertionCommand

## Example Usage

```typescript
import { PageAssertionCommand } from "@momentic/js/models/components";

let value: PageAssertionCommand = {
  id: "c0644c97-0ff3-408f-9e94-5e723417ea10",
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