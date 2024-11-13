# TabCommand

## Example Usage

```typescript
import { TabCommand } from "@momentic/js/models/components";

let value: TabCommand = {
  id: "5cf870bd-3581-4164-a67f-f2e1825b6cbf",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `thoughts`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | unique identifier to this step, used for step cache                 |
| `loadTimeout`                                                       | *number*                                                            | :heavy_minus_sign:                                                  | Max seconds for the page to load                                    |
| `type`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `url`                                                               | *string*                                                            | :heavy_minus_sign:                                                  | deprecated field - new instances should use the discriminated union |
| `action`                                                            | *components.Action*                                                 | :heavy_minus_sign:                                                  | N/A                                                                 |