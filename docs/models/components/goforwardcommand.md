# GoForwardCommand

## Example Usage

```typescript
import { GoForwardCommand } from "@momentic/js/models/components";

let value: GoForwardCommand = {
  id: "11c5a968-af99-41f8-bc06-44c970ff308f",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |