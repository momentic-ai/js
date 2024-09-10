# PageAssertionCommand

## Example Usage

```typescript
import { PageAssertionCommand } from "momentic/models/components";

let value: PageAssertionCommand = {
  id: "76b26916-fe1f-408f-8294-e3698f447f60",
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
| `assertion`                                         | *components.PageAssertionCommandAssertion*          | :heavy_check_mark:                                  | N/A                                                 |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | url or url regex for the iframe                     |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | max seconds to wait for the assertion to be true    |