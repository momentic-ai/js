# AIExtractCommand

## Example Usage

```typescript
import { AIExtractCommand } from "@momentic/js/models/components";

let value: AIExtractCommand = {
  id: "cce13b34-2271-4560-9617-dd19d3cec103",
  goal: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `goal`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `schema`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `envKey`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `disableCache`                                      | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |