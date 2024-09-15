# PageAssertionCommand

## Example Usage

```typescript
import { PageAssertionCommand } from "@momentic/js/models/components";

let value: PageAssertionCommand = {
  id: "b6a89fbe-3a5a-4a8e-8824-d0ab4075088e",
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