# NavigateCommand

## Example Usage

```typescript
import { NavigateCommand } from "momentic/models/components";

let value: NavigateCommand = {
  id: "28921cdd-c692-4601-bb57-6b0d5f0d30c5",
  url: "https://secret-rhinoceros.biz",
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