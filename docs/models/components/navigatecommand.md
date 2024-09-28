# NavigateCommand

## Example Usage

```typescript
import { NavigateCommand } from "@momentic/js/models/components";

let value: NavigateCommand = {
  id: "dca53ad0-a7e5-4782-bbd0-40faf8c556a5",
  url: "https://amused-corporation.com",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `loadTimeout`                                       | *number*                                            | :heavy_minus_sign:                                  | Max seconds for the page to load                    |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |