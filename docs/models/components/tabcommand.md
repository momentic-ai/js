# TabCommand

## Example Usage

```typescript
import { TabCommand } from "momentic/models/components";

let value: TabCommand = {
  id: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
  url: "https://international-dame.org",
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