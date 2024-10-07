# RefreshCommand

## Example Usage

```typescript
import { RefreshCommand } from "@momentic/js/models/components";

let value: RefreshCommand = {
  id: "5cf6afba-15e3-4db5-a88b-82c6f4459e24",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `loadTimeout`                                       | *number*                                            | :heavy_minus_sign:                                  | Max seconds for the page to load                    |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |